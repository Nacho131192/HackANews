const fs = require("fs/promises")
async function createFolder(path) {
  try {
    await fs.access(path)
  } catch (error) {
    await fs.mkdir(path)
  }
}

module.exports = createFolder
