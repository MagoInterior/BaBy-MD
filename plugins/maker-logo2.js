let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let response = args.join(' ').split('|')
   let tee = `✳️ Enter a short text\n\n📌 Example  : *${usedPrefix + command}* GURU`
   let too = `✳️ Separate the text with a *+* \n\n📌 Example : \n*${usedPrefix + command}* GURU *+* BOT`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	
	case 'gfx1':
	if (!text) throw tee 
	let chut = global.API('logo', '/api/canvas/kaneki?name=${response[0]}&apikey=${shizokeys}')
	conn.sendFile(m.chat, chut, 'logo.png', `✅ Result`, m)
	m.react(done)
	break
	case 'gfx2': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [a, b] = text.split`+`   
	let loda = global.API('logo', '/api/girlneko', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, loda, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
	case 'gfx3':
	if (!text) throw tee 
	let cp = global.API('logo', '/api/rem', { text }, 'apikey')
	conn.sendFile(m.chat, cp, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 	
        case 'gfx4': 
   if (!text) throw tee
   let gandu = global.API('logo', '/api/sadboy', { text: 'GURU', text2: text}, 'apikey')
	conn.sendFile(m.chat, gandu, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
	default:
} 
} 
handler.help = ['gfx1', 'gfx2', 'gfx3', 'gfx4']
handler.tags = ['maker']
handler.command = /^(gfx1|gfx2|gfx3|gfx4)$/i
handler.diamond = false

export default handler	

