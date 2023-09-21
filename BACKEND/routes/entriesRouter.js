const express = require('express');
const entriesRouter = express.Router();

const authUser = require('../middlewares/authUser');
const addEntry = require('../controller/entries/addEntry.js')
const viewEntryOneUser = require('../controller/entries/viewEntryOneUser.js')

entriesRouter.get('/view/:users_user_id', viewEntryOneUser);    //!COMPLETAR PARTE DE MOSTRAR LAS ENTRADAS DE FORO
entriesRouter.post('/', authUser, addEntry);
// router.delete('/:entryId', authUser, ___________);  //! PARA ELIMINAR LAS ENTRADAS DE FORO



module.exports = entriesRouter;