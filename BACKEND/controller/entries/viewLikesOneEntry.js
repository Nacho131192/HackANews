const sendQuery = require("../../db/connectToDB")
const createError = require("../../helpers/createError")

async function viewLikeEntry(req, res, next) {
    try {
        const { userId } = req.user
        const entryId = req.params.entryId
        const likes = await sendQuery(
            `SELECT * FROM likes
            WHERE new_id = ? AND user_id = ? `,
            [entryId, userId]
        )
        res.send({
            ok: true,
            data: likes,
            error: null,
            message: "likes obtenidos",
        })
    } catch {

    }
}

module.exports = viewLikeEntry