const { cmd, commands } = require('../lib/command');
const axios = require('axios');
const fetch = require('node-fetch');
const { fetchJson, getBuffer } = require('../lib/functions');
const { lookup } = require('mime-types');
const fs = require('fs');
const path = require('path');
const yts = require('yt-search'); // For YouTube search
const cheerio = require('cheerio'); // Import cheerio for HTML parsing




cmd({
    pattern: "dl",
    react: "📥",
    alias: ["dlurl"],
    desc: "Direct link uploader",
    category: "download",
    use: '.dl <link>',
    filename: __filename
},
async (conn, mek, m, { 
    from, quoted, body, args, q, reply 
}) => {
    try {
        if (!q) return reply('❗ Please provide a link!');
        
        // Validate URL format
        const isValidUrl = (url) => {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        };

        if (!isValidUrl(q)) return reply('❌ Invalid URL format! Please check the link.');

        // Fetch the file data from the provided link
        const axios = require('axios');
        const mimeTypes = require('mime-types');
        
        const res = await axios.get(q, { 
            responseType: 'arraybuffer',
            timeout: 15000 // Set a timeout of 15 seconds
        });

        // Get MIME type and extension
        const mime = res.headers['content-type'] || 'application/octet-stream';
        const extension = mimeTypes.extension(mime) || 'unknown';

        // Get file size from headers
        const fileSize = res.headers['content-length'] || 0;
        const maxFileSize = 2048 * 2048 * 2048; // 10 MB

        if (fileSize > maxFileSize) {
            return reply('❗ File is too large to upload (limit: 10MB).');
        }

        // Define file name
        const fileName = `Didula MD V2 💚.${extension}`;

        // Send the file as a document
        await conn.sendMessage(
            from,
            {
                document: { url: q },
                caption: "> Didula MD V2 💚",
                mimetype: mime,
                fileName: fileName
            },
            { quoted: mek }
        );

    } catch (error) {
        // Handle errors gracefully
        console.error(error);
        reply(`❌ Error: ${error.message}`);
    }
});
