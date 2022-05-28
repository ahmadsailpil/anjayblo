let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/89de23ab82fa6edfb7149.png', m, { packname: "", author: "ASTRO-BOT" })
}

handler.customPrefix = /^(ok|makasih|thanks|tq)$/i
handler.command = new RegExp

module.exports = handler