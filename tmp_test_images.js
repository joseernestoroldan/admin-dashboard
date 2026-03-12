const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
  'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
  'https://images.unsplash.com/photo-1542272604-787c3835535d',
  'https://images.unsplash.com/photo-1509762774605-f07235a08f1f',
  'https://images.unsplash.com/photo-1601597111158-2fceff292cdc'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url}: ${res.statusCode} ${res.headers['content-type']}`);
  }).on('error', (e) => {
    console.error(`${url}: ${e.message}`);
  });
});
