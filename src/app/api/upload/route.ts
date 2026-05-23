import { put, list, del } from '@vercel/blob';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const serverId = searchParams.get('serverId');
  const filename = searchParams.get('filename') || 'resourcepack.zip';

  if (!serverId) {
    return NextResponse.json(
      { error: 'serverId query parameter is required.' },
      { status: 400 }
    );
  }

  if (!request.body) {
    return NextResponse.json(
      { error: 'No file provided in the request body.' },
      { status: 400 }
    );
  }

  try {
    // Delete existing resource packs for this server to save space
    const { blobs } = await list({ prefix: `servers/${serverId}/` });
    if (blobs.length > 0) {
      await del(blobs.map((blob) => blob.url));
    }

    // We need to read the buffer to compute SHA-1, then upload it.
    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Compute SHA-1 (required for Minecraft server.properties)
    const hashSum = crypto.createHash('sha1');
    hashSum.update(buffer);
    const sha1 = hashSum.digest('hex');

    // Upload new pack to Vercel Blob
    const blob = await put(`servers/${serverId}/${filename}`, buffer, {
      access: 'public',
      addRandomSuffix: true,
    });

    return NextResponse.json({
      url: blob.url,
      sha1: sha1,
      size: buffer.length,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'An error occurred during file upload.' },
      { status: 500 }
    );
  }
}
