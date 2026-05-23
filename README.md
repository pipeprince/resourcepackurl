# Resource Pack CDN for Pterodactyl Panel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fresourcepackurl&stores=%5B%7B"type"%3A"blob"%7D%5D)

A serverless API and landing page designed to act as a **Resource Pack Hosting CDN** for Minecraft servers. It integrates perfectly with the VanillaTweaks Installer on Pterodactyl Panel.

When a user installs a Resource Pack via the Pterodactyl Panel, the server can automatically upload the generated `.zip` file to this CDN, which generates a direct download link and calculates the SHA-1 hash needed for `server.properties`.

## ✨ Features
- **Serverless & Free**: Runs on Vercel with zero maintenance. Uses Vercel Blob for lightning-fast edge storage.
- **Auto SHA-1 Generation**: Computes the exact SHA-1 hash required by Minecraft `server.properties` (`resource-pack-sha1`).
- **Direct Integration**: Provides a `/api/upload` endpoint ready to accept `.zip` files from Pterodactyl.
- **Zero Config Setup**: No `.env` files to configure manually! Vercel handles the API keys automatically.

## 🚀 How to Self-Host (1-Minute Setup)

1. Click the **Deploy with Vercel** button above.
2. Vercel will ask you to clone the repository to your GitHub account.
3. During deployment, Vercel will automatically provision a **Vercel Blob** store for you. **No .env configuration needed!**
4. Once deployed, you will get a URL like `https://my-resource-cdn.vercel.app`.

## 🔌 Connecting to Pterodactyl Panel

Inside your Pterodactyl Panel `DatapackController.php`, you can send the resource pack to this API:

```php
$cdnUrl = 'https://YOUR_VERCEL_APP_URL.vercel.app/api/upload?serverId=' . $server->uuid . '&filename=VanillaTweaks_ResourcePack.zip';

$response = Http::withBody(
    file_get_contents($fullPath),
    'application/zip'
)->post($cdnUrl);

if ($response->successful()) {
    $data = $response->json();
    $downloadUrl = $data['url']; // Put this in server.properties resource-pack
    $sha1 = $data['sha1'];       // Put this in server.properties resource-pack-sha1
}
```

## 📜 License
This project is open-source and free to use.
