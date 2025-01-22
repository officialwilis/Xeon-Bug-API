require("./doc/module.js")

global.prefix = ['*','..']
global.owner = ['254780285788']
global.ownMain = '254780285788'
global.NamaOwner = '🦄드림 가이' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'X-EndPoint' //
global.author = '🦄드림 가이' //
global.packname = 'Xeon-Bug-API' //
global.url1 = 'https://chat.whatsapp.com/KX7EPsiJhMlLLHJrXa7n0F' //
global.url2 = 'https://chat.whatsapp.com/KX7EPsiJhMlLLHJrXa7n0F' //
global.linkgc = 'https://chat.whatsapp.com/KX7EPsiJhMlLLHJrXa7n0F'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
