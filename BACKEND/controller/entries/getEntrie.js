const sendQuery = require('../../db/connectToDB');

async function viewEntrie(req, res, next) {
    try {
        const new_title = req.params.new_title;
        const query =
            'SELECT * FROM news WHERE new_title = ?';

        const results = await sendQuery(query, [new_title]);

        if (results.length == 0) {
            return res.status(404).json({ error: 'que nooooooo,Entrada no encontrada' });
        } else {

            const entry = results[0];
            res.json(entry);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = viewEntrie;
