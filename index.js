const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Nixpacks Test App</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>🚀 Nixpacks Test App Deployed via Coolify CLI</h1>
        <p>Deployment successful! This app was deployed using nixpacks.</p>
        <p>Time: ${new Date().toISOString()}</p>
        <p>Server: coolify.247420.xyz</p>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
