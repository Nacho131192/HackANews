const sendQuery = require('../../db/connectToDB');

const createError = require('../../helpers/createError.js');

async function viewEntryOneUser(req, res, next) {
    try {
        const userId = req.params.users_user_id;
        const user = await sendQuery(`SELECT * FROM users WHERE user_id = ?`, [userId]);
        if (!user || user.length === 0) {
            return next(createError(404, 'El usuario no existe'));
        }
        const results = await sendQuery(`
            SELECT *
            FROM news
            WHERE users_user_id = ?
        `, [userId]);
        if (!results || results.length === 0) {
            return next(createError(404, 'No hay entradas'));
        } else {
            res.send({
                ok: 'true',
                data: results,
                error: null,
                message: `Visualización de la entrada del usuario ${userId}`
            });
        };
    } catch (error) {
        next(error);
    }
};


module.exports = viewEntryOneUser;
