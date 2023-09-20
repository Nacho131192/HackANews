const express = require('express');
const entriesRouter = express.Router();

const authUser = require('../middlewares/authUser');
const addEntry = require('../controller/entries/addEntry.js');
const getAllEntries = require('../controller/entries/getAllEntries');


// router.get('/', __________);    //!COMPLETAR PARTE DE MOSTRAR LAS ENTRADAS DE FORO
entriesRouter.post('/', authUser, addEntry);
entriesRouter.get("/allentries", getAllEntries)
// router.delete('/:entryId', authUser, ___________);  //! PARA ELIMINAR LAS ENTRADAS DE FORO



module.exports = entriesRouter;