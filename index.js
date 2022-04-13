require('dotenv').config()
const https = require('https');
const fs = require('fs');

const startServer = require('./config/apiConfiguration.js');

const PORT = process.env.NODE_ENV === "production" ? 3333 : 3334;
const app = startServer();

if(process.env.NODE_ENV === "local") {
  app.listen(PORT, () => {
    console.log(`[HSC - Backend] - HTTPS Up on :${PORT}`);
  });
} else {
  const httpsServer = https.createServer({
      key: fs.readFileSync("C://Certificado//d8f0b70b86c0ec7356d589dbf2270f95.key"),
      cert: fs.readFileSync("C://Certificado//d8f0b70b86c0ec7356d589dbf2270f95.crt"),
    }, app);
  
  httpsServer.listen(PORT, () => {
    console.log(`[HSC - Backend] - HTTPS Up on :${PORT}`);
  });
}
