const express = require('express')
const entriesRouter = express.Router()

const authUser = require('../middlewares/authUser')
const addEntry = require('../controller/entries/addEntry.js')
const deleteEntry = require('../controller/entries/deleteEntry')
const getAllEntries = require('../controller/entries/getAllEntries')
const viewEntryOneUser = require('../controller/entries/viewEntryOneUser.js')
const updateEntry = require('../controller/entries/updateEntry.js')
const byThemeEntry = require('../controller/entries/byThemeEntry')

entriesRouter.get('/view/:news_id', viewEntryOneUser)
entriesRouter.post('/', authUser, addEntry)
entriesRouter.delete('/:entryId', authUser, deleteEntry)
entriesRouter.get('/allentries', getAllEntries)
entriesRouter.post('/update/:entryId', authUser, updateEntry)
entriesRouter.get("/themes/:themeId", byThemeEntry)
module.exports = entriesRouter
