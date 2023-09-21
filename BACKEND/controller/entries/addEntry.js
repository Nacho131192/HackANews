require('dotenv').config();


const Joi = require('joi');
const createError = require('../../helpers/createError');
const sendQuery = require('../../db/connectToDB');

async function addEntry(req, res, next) {

    const { userId } = req.user; //saca la info del usuario
    //console.log(req.user);
    //console.log(userId);
    const schema = Joi.object({
        new_title: Joi.string().required(),
        new_entrance: Joi.string().required(),
        new_text: Joi.string(),
        new_pic: Joi.binary(),
        new_video: Joi.binary(),
        new_theme: Joi.number()

    });

    try {
        await schema.validateAsync(req.body);
    } catch (error) {
        return next(createError(400, error.message));
    }

    const { new_title, new_entrance, new_text, new_pic, new_video, new_theme } = req.body;
    console.log(req.body)
    try {
        await sendQuery(
            `INSERT INTO news 
            (new_title, new_entrance, new_text, new_pic, new_video, users_user_id,  themes_themes_id) 
            VALUES (?, ?, ?, ?, ? , ?, ?);`, [new_title, new_entrance, new_text, new_pic, new_video, userId, new_theme]);

        res.status(200).json({
            ok: true,
            data: null,
            error: null,
            message: '🚀Entrada realizada correctamente🚀'
            //res.send({ status: 'ok', message: '🚀Entrada realizada correctamente🚀' });
        });
    } catch (error) {
        return next(error);
    }



}

module.exports = addEntry;