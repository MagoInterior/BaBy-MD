let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://api.popcat.xyz/ad?image=', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'hornycard.png', '*[ ✔ ]*', m)
    }
    handler.help = ['b']
    handler.tags = ['m']
    handler.command = /^(blurr|difuminarr2)$/i
    export default handler
