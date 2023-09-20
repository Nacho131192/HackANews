const sendQuery = require('../../db/connectToDB');

async function viewEntrie(req, res, next) {
    try {
        const new_title = req.params.new_title;
        const results = await sendQuery('SELECT * FROM news');


        // const results = await sendQuery(query, [new_title]);
        res.send({
            ok: true,
            data: results,
            error: null,
            message: null
        });

    } catch (error) {
        next(error);
    }
}

/*
        if (results.length === 0) {
            // const entry = results;
            res.json(results);
        } else {
            return res.status(404).json({ error: 'Entrada no encontrada' });

        }
    } catch (error) {
        next(error);
    }
}
*/
module.exports = viewEntrie;
