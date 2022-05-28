let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '*contoh*: .transferlimit @tag <masukin jumlah limit>
contoh yang ini: .transferlimit @bagusganz 10'
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'Minimal 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'Limit tidak mencukupi untuk mentransfer'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Pajak 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['transferlimit @user <jumlah limit>']
handler.tags = ['xp']
handler.command = /^transferlimit$/
handler.rowner = false

module.exports = handler