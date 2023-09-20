const express = require('express')
const entriesRouter = express.Router()


const authUser = require('../middlewares/authUser')
const addEntry = require('../controller/entries/addEntry.js')
const deleteEntry = require('../controller/entries/deleteEntry')
const getAllEntries = require('../controller/entries/getAllEntries');

// router.get('/', __________);    //!COMPLETAR PARTE DE MOSTRAR LAS ENTRADAS DE FORO
entriesRouter.post('/', authUser, addEntry)
entriesRouter.delete('/:entryId', authUser, deleteEntry) //! PARA ELIMINAR LAS ENTRADAS DE FORO
entriesRouter.get("/allentries", getAllEntries)


module.exports = entriesRouter
