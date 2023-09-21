require('dotenv').config()

const Joi = require('joi')
const createError = require('../../helpers/createError')
const sendQuery = require('../../db/connectToDB')

async function updateEntry (req, res, next) {
  const { userId } = req.user //saca la info del usuario
  //console.log(req.user);
  //console.log(userId);
  const schema2 = Joi.number().positive().integer()
  try {
    await schema2.validateAsync(req.params.entryId)
  } catch (error) {
    return next(createError(400, error.message))
  }

  const { entryId } = req.params

  try {
    //* Comprobar si la entrada existe o no
    const [entry] = await sendQuery(
      `
            SELECT * 
            FROM news
            WHERE id = ?
        `,
      [entryId]
    )
    console.log(entry)
    if (!entry) {
      return next(createError(404, 'No existe ninguna noticia con ese ID.'))
    }

    //* Comprobamos que seas el dueño de la entrada, y si no, ERROR
    if (entry.users_user_id !== userId) {
      return next(
        createError(
          403,
          'No es tu noticia, no puedes editar la noticia de otra persona.'
        )
      )
    }

  const { entryId } = req.params

  const schema = Joi.object({
    new_title: Joi.string().required(),
    new_entrance: Joi.string().required(),
    new_text: Joi.string(),
    new_pic: Joi.binary(),
    new_video: Joi.binary(),
    new_theme: Joi.number()
  })

  try {
    await schema.validateAsync(req.body)
  } catch (error) {
    return next(createError(400, error.message))
  }

  const { new_title, new_entrance, new_text, new_video, new_theme } = req.body
  console.log(req.body)
  try {
    await sendQuery(
      `UPDATE news SET  new_title=?, new_entrance=?, new_text=?,  new_video=?, users_user_id=?, themes_themes_id=? WHERE id=?`,
      [new_title, new_entrance, new_text, new_video, userId, new_theme]
    )

    res.status(200).json({
      ok: true,
      data: null,
      error: null,
      message: '🚀Entrada editada correctamente🚀'
      //res.send({ status: 'ok', message: '🚀Entrada realizada correctamente🚀' });
    })
  } catch (error) {
    return next(error)
  }
}} 

module.exports = updateEntry
