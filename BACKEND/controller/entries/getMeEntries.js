
const sendQuery = require("../../db/connectToDB")
const createError = require("../../helpers/createError")

async function getMeEntries(req, res, next) {
  try {
    const meUserId = req.params.user_Id
    const user = await sendQuery(
      `SELECT * FROM users 
      WHERE user_id = ?`,
      [meUserId]
    )
    console.log(user)
    if (!user || user.length===0) {
      return next(createError(400, "No existe el usuario"))
    }
    const results = await sendQuery(
      `SELECT * FROM news 
      INNER JOIN users ON news.users_user_id = users.user_id
      WHERE news.users_user_id = ?`,
      [meUserId]
    )
    if (!results || results.length === 0) {
      return next(createError(400, "No hay entradas para ese usuario"))
    }
  
    res.send({
      ok: true,
      data: results,
      error: null,
      message: `Listado noticias del usuario ${user[0].user_id} logueado solicitados correctamente`,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getMeEntries