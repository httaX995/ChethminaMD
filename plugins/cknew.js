    pattern: "movie", 
    alias: ["film", "cinema"], 
    react: "🎬", 
    desc: "Search and Download Movies with Sinhala Subtitles", 
    category: "download", 
    use: '.movie < Movie Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("⚠️ Please provide a movie name!");

        // Search for the movie
        let searchUrl = `https://omindu-api.up.railway.app/api/sinhalasub/search?query=${encodeURIComponent(q)}`;
        let searchResponse = await fetch(searchUrl);
        let searchData = await searchResponse.json();

        if (!searchData.results.movies || searchData.results.movies.length < 1) 
            return reply("❌ No movies found!");

        let movie = searchData.results.movies[0];

        // Get download links
        let downloadUrl = `https://omindu-api.up.railway.app/api/sinhalasub/download?url=${encodeURIComponent(movie.link)}`;
        let downloadResponse = await fetch(downloadUrl);
        let downloadData = await downloadResponse.json();

        let movieInfo = downloadData.info;
        let dlLinks = downloadData.dl_links;

        let movieMsg = `╭━━━〔 *🌟 DIDULA MD V2 🌟* 〕━━━┈⊷
┃▸╭─────────────────
┃▸┃ 🎬 *MOVIE DOWNLOADER*
┃▸└─────────────────···
╰──────────────────────┈⊷
╭━━❐━⪼
┇📌 *Title:* ${movieInfo.title}
┇📅 *Release Date:* ${movieInfo.release_date}
┇⏱️ *Runtime:* ${movieInfo.runtime}
┇⭐ *TMDB Rating:* ${movieInfo.tmdb_Rating}
┇🎭 *Genres:* ${movieInfo.genres.join(", ")}
┇🎬 *Director:* ${movieInfo.director.name}
╰━━❑━⪼

📥 *Download Links:*

*Server 1:*
${dlLinks.server_01.map(link => `▢ ${link.quality} (${link.size})\n${link.link}`).join('\n\n')}

*Telegram:*
${dlLinks.telagram.map(link => `▢ ${link.quality} (${link.size})\n${link.link}`).join('\n\n')}

*Server 2:*
${dlLinks.server_02.map(link => `▢ ${link.quality} (${link.size})\n${link.link}`).join('\n\n')}

*Server 3:*
${dlLinks.server_03.map(link => `▢ ${link.quality} (${link.size})\n${link.link}`).join('\n\n')}

*Type . dl <download link> for download movie 💗😚*

*💫 Quality Movie Downloader By Didula MD V2*`;

        await conn.sendMessage(from, { 
            image: { url: movieInfo.poster }, 
            caption: movieMsg 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ An error occurred. Please try again later.");
    }
});
