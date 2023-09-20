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
        new_pic: Joi.string(),
        new_video: Joi.string(),

    });

    try {
        await schema.validateAsync(req.body);
    } catch (error) {
        return next(createError(400, error.message));
    }

    const { new_title, new_entrance, new_text, new_pic, new_video } = req.body;
    try {
        await sendQuery(
            `INSERT INTO news 
            (id, new_title, new_entrance, new_text, new_pic, new_video) 
            VALUES (?, ?, ?, ?, ?, ?, ?);`, [userId, new_title, new_entrance, new_text, new_pic, new_video]);

        res.status(200).json({
            ok: true,
            data: null,
            error: null,
            message: '🚀Entrada realizada correctamente🚀'
        });
    } catch (error) {
        return next(error);
    }



}

module.exports = addEntry;