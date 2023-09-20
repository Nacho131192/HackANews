const sendQuery = require("../../db/connectToDB");


async function getAllEntries(req, res, next) {
  try {
    const results = await sendQuery('SELECT * FROM news')
    res.send({
      ok: true,
      data: results,
      error: null,
      message: "Listado general de noticias solicitados correctamente"
    })
  } catch (error) {
    next (error)
  }

}

module.exports = getAllEntries