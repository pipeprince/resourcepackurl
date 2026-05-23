import { Box, Code, HardDrive, Link as LinkIcon, Server } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8 flex flex-col items-center justify-center font-sans">
      <div className="max-w-3xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <Box className="w-12 h-12 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Resource Pack Host
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            A serverless CDN for your Minecraft Server Resource Packs, powered by Vercel Blob. Seamlessly integrated with Pterodactyl Panel.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <Server className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Direct Integration</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Accepts automatic uploads directly from your Pterodactyl Panel Datapack Installer.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <LinkIcon className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Instant CDN</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Generates permanent public download links optimized for fast client downloads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <Code className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">SHA-1 Hashing</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Automatically calculates the precise SHA-1 hash required by <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-emerald-300">server.properties</code>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <HardDrive className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Zero Maintenance</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Hosted completely serverless on Vercel without requiring complex environments.
            </p>
          </div>
        </div>

        {/* How to use */}
        <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 text-center space-y-4">
          <h2 className="text-xl font-semibold text-white">Ready for Uploads</h2>
          <p className="text-neutral-400 text-sm">
            Configure your Pterodactyl Panel to send POST requests to the endpoint below.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-neutral-950 rounded-lg border border-neutral-800 font-mono text-sm text-emerald-400">
            <span>POST</span>
            <span className="text-neutral-500">/</span>
            <span>/api/upload?filename=my-pack.zip</span>
          </div>
        </div>

        <div className="text-center pb-8">
          <p className="text-sm text-neutral-600">
            Open-source project designed for Pterodactyl Datapack Installer.
          </p>
        </div>
      </div>
    </main>
  );
}
