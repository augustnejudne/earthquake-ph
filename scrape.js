const cheerio = require('cheerio');
const axios = require('axios');
const https = require('https');
const fs = require('fs');
const writeStream = fs.createWriteStream('./src/earthquakeData.js');

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

instance
  .get('https://earthquake.phivolcs.dost.gov.ph')
  .then(res => {
    const $ = cheerio.load(res.data);
    writeStream.write('export default [');
    $('table:nth-child(3) tr').each((i, el) => {
      const date = $(el)
        .find('td:nth-child(1)')
        .text()
        .replace(/\s\s+/g, '');
      const lat = $(el)
        .find('td:nth-child(2)')
        .text()
        .replace(/\s\s+/g, '');
      const lon = $(el)
        .find('td:nth-child(3)')
        .text()
        .replace(/\s\s+/g, '');
      const depth = $(el)
        .find('td:nth-child(4)')
        .text()
        .replace(/\s\s+/g, '');
      const mag = $(el)
        .find('td:nth-child(5)')
        .text()
        .replace(/\s\s+/g, '');
      const location = $(el)
        .find('td:nth-child(6)')
        .text()
        .replace(/\s\s+/g, '');

      // Write row to JSfile
      if (!isNaN(parseFloat(lat))) {
        writeStream.write(`{
        date: '${date}',
        lat: '${lat}',
        lon: '${lon}',
        depth: '${depth}',
        mag: '${mag}',
        location: '${location}',
      },`);
      }
    });
    writeStream.write(']');
  })
  .catch(e => console.log(e));
