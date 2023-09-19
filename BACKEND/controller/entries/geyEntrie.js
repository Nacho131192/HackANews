const sendQuery = require('../../db/connectToDB');

async function getEntrie(noticiaId) {
    try {
        const query = `
        SELECT news.*, users.nombre AS creador_nombre, users.avatar AS creador_avatar
        FROM news
        LEFT JOIN users ON news.creadorId = users.id
        WHERE news.id = ?
      `;

        const results = await sendQuery(query, [noticiaId]);

        if (results.length === 0) {
            return null;
        }

        return results[0];
    } catch (error) {
        throw error;
    }
}

module.exports = getEntrie;
