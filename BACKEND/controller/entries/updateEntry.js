require('dotenv').config();

const Joi = require('joi');
const createError = require('../../helpers/createError');
const sendQuery = require('../../db/connectToDB');

async function updateEntry (req, res, next) {
    try {
        const { userId } = req.user; //saca la info del usuario
        const { entryId } = req.params;

        //* Comprobar si la entrada existe o no
        const [entry] = await sendQuery(
            `
            SELECT * 
            FROM news
            WHERE id = ?
        `,
            [entryId]
        );

        if (!entry) {
            createError(404, 'No existe ninguna noticia con ese ID.');
        }

        //* Comprobamos que seas el dueño de la entrada, y si no, ERROR
        if (entry.users_user_id !== userId) {
            createError(
                403,
                'No es tu noticia, no puedes editar la noticia de otra persona.'
            );
        }

        console.log(req.body);

        const schema = Joi.object({
            new_title: Joi.string(),
            new_entrance: Joi.string(),
            new_text: Joi.string(),
            new_theme: Joi.number(),
        }).or('new_title', 'new_entrance', 'new_text', 'new_theme');

        await schema.validateAsync(req.body);

        let { new_title, new_entrance, new_text, new_theme } = req.body;

        new_title = new_title || entry.new_title;
        new_entrance = new_entrance || entry.new_entrance;
        new_text = new_text || entry.new_text;
        new_theme = new_theme || entry.new_theme;

        await sendQuery(
            `UPDATE news SET new_title=?, new_entrance=?, new_text=?, themes_themes_id=? WHERE id=?`,
            [new_title, new_entrance, new_text, new_theme, entryId]
        );

        res.status(200).json({
            ok: true,
            data: null,
            error: null,
            message: '🚀Entrada editada correctamente🚀',
            //res.send({ status: 'ok', message: '🚀Entrada realizada correctamente🚀' });
        });
    } catch (err) {
        next(err);
    }
}

module.exports = updateEntry;
