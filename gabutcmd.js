// Need help? +62-821-7368-3020 
// Bot Case! Kamu bisa mengedit, menambah atau modifikasi case di sini
// GacorBot v1.6 (25 Apr 2025) by ShinySebastian
// Based by Rafael Bot
// Apikey di line 632!
require("./config")
const {
smsg, getGroupAdmins, formatp, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')

const util = require('util')
const cron = require('node-cron')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const Jimp = require('jimp')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { toPTT, toAudio } = require("./lib/converter")
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const pino = require('pino')
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const uploadImage = require('./lib/uploadImage')
const quizList = require('./lib/quizList.js');
const filePath = './database/database.json';
const cainya = JSON.parse(fs.readFileSync('./database/cainya.json'))
const databascai = './database/caichat.json';
let pdfQueue = {}; // key = user ID, value = array buffer gambar
let userSessions = {}; // Buat nyimpen sesi editing gambar per user


// Membaca file sesi dari caichat.json
function readSessions() {
    if (fs.existsSync(databascai)) {
        return JSON.parse(fs.readFileSync(databascai, 'utf8'));
    } else {
        return {}; // Jika file tidak ada, kembalikan objek kosong
    }
}

// Menulis file sesi ke caichat.json
function writeSessions(sessions) {
    fs.writeFileSync(databascai, JSON.stringify(sessions, null, 2), 'utf8');
}

// let akinator = JSON.parse(fs.readFileSync('./src/akinator.json'));

/*try {
    const dbData = JSON.parse(fs.readFileSync(filePath, 'utf8')) || {};
    global.db = {
        data: {
            users: {},
            premium: {},
            banned: {},
            group: {},
            database: {},
            settings: {},
            donate: {},
            others: {},
            sticker: {},
            ...dbData, // Merge existing data with defaults
        },
    };
} catch (err) {
    console.error('Error reading database.json:', err);
    global.db = {
        data: {
            users: {},
            premium: {},
            banned: {},
            group: {},
            database: {},
            settings: {},
            donate: {},
            others: {},
            sticker: {},
        },
    };
}  */

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
 
// Database Game (tebakgambar etc) (added 12/01/25) 

let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let tebakkalimat = db.game.kalimat = []
let tebaklagu = db.game.tebaklagu = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakbendera = db.game.tebakbendera = []
let tebakkabupaten = db.game.tebakkabupaten = []
let tebakheroml = db.game.tebakheroml = []
let _family100 = db.game.family100 = []


//end of Database game

//  Base
module.exports = async (Rafael, m) => {   
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectreply.selectedRowId ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') && m.message.templateButtonreplyMessage.selectedId ? m.message.templateButtonreplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ""
              var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const { type } = m
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const botNumber = await Rafael.decodeJid(Rafael.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = ["628116646665@s.whatsapp.net", botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const mime = (quoted.msg || quoted).mimetype || quoted.mediaType || "";
const isMedia = /image|video|sticker|audio/.test(mime)
        const qmsg = (quoted.msg || quoted)
		const isRegistered = checkRegisteredUser(m.sender)
// Group
const groupMetadata = m.isGroup ? await Rafael.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isText = (type === 'conversation' || type === 'extendedTextMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
//const isAutoCai = m.isGroup ? cainya.includes(m.chat) : true
/*const isCai = cainya.includes(m.chat) ? true : false 
const chatSessions = {}; // Untuk menyimpan sesi percakapan
    // Untuk menyimpan chat ID yang menggunakan Auto C.Ai */

//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require('moment-timezone')
 const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }

const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Rafael Store`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;RafaelBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/a915fdf6f21ad99179f15.jpg' }}}}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
//Public dan Self
if (!Rafael.public) {
if (!isCreator && !m.key.fromMe) return
}
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');  
// Response Addlist
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Rafael.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Rafael.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}}

function rumus(tMatch, tWr, wrReq) {
    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tMatch;
    return Math.round(final);
}

function rumusLose(tMatch, tWr, wrReq) {
    let persen = tWr - wrReq;
    let final = tMatch * (persen / 100);
    return Math.round(final);
}
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isPremium= isCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(Rafael, m, premium)

const rafaelbut = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
  interactiveMessage: {
    body: {text: anu},
    footer: {text: `Rafaelll-Autoai`},
    nativeFlowMessage: {
      buttons: [{text: "Rafael"}
           ],
    }
  },
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${body}`}}})
 Rafael.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}
// Console
if (isGroup && isCmd) {
console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time2,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
}

if (!isGroup && isCmd) {
console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time2,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
}

const yts = require("yt-search")
//
 const { y2mateplay, y2matemp3, y2matemp4 } = require('./lib/y2mate')
const downloadMp3 = async (Link) => {
try{
let yutub = await y2matemp3(Link)
//if (yutub.size < 62914560) {
await Rafael.sendMessage(m.chat, {audio: { url: yutub.audio["128"].url }, mimetype: 'audio/mpeg', contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "YOUTUBE - PLAY",
body: yutub.title,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: yutub.thumbnail,
sourceUrl: Link
}
}},{ quoted: m })
/*} else {
await m.reply(`File audio ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch (err){
console.log(color(err))
}}
const downloadMp4 = async (Link) => {
try{
let yutub = await y2matemp4(Link)
//if (yutub.size < 104857600) {
const Cap = `*${yutub.title}*\n\nID: ${yutub.vid}`;
await Rafael.sendMessage(m.chat, { video: { url: yutub.video["360"].url }, caption: Cap,gifPlayback: false},{quoted: m})
/*} else {
await nw(`File video ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch(err) {
m.reply(`${err}`)
}}

const fVerif = { key: {
    participant: '0@s.whatsapp.net',
    remoteJid: '0@s.whatsapp.net'
  },
  message: { conversation: `_YangJunMing Terverifikasi Oleh WhatsApp_`}
}
const reply = async(teks) => 
      {
        Rafael.sendMessage(
          from, 
            {text: 
              teks, 
                contextInfo: 
                  {
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: 'Fixenzo - Store',
		  newsletterJid: "120363307170529595@g.us",
		}}},
      {quoted:fVerif}
    )
  }
const Reply = async(teks) => 
      {
        Rafael.sendMessage(
          from, 
            {text: 
              teks, 
                contextInfo: 
                  {
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
	        newsletterName: 'Fixenzo - Store',
		  newsletterJid: "120363307170529595@g.us",
		}}},
      {quoted:fVerif}
    )
  }
    
         
const tag = `@${m.sender.split('@')[0]}`
const totalFitur = () =>{
            var mytext = fs.readFileSync("./gabutcmd.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

// AFK settings (added 11/01/25)

try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {

}
if (user) {
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0

if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 1
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,
money: 100000,
exp: 0,
level: 1,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 1000,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 1,
armordurability: 0,
sword: 1,
sworddurability: 0,
pickaxe: 1,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0

}

apikey = 'apikey di sini'

const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
    		if (!('autoread' in setting)) setting.autoread = false
        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
        if (!('onlygrub' in setting)) setting.onlygrub = false
        if (!('onlypc' in setting)) setting.onlypc = false
        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else global.db.settings[botNumber] = {
    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoread: false,
    		auto_ai_grup: true,
    		goodbye: true,
        onlygrub: false,
        onlypc: false,
        welcome: true, 
    		autoread: false
	    }

} catch (err) {
console.error(err)
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
    let user = global.db.users[jid]
    if (!user) continue
    let afkTime = user.afkTime
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`🚫 *Jangan tag dia!*
 ❏  *Dia sedang AFK* ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
 ❏  *Selama* ${clockString(new Date - afkTime)}
`.trim())
}

if (global.db.users[m.sender].afkTime > -1) {
    let user = global.db.users[m.sender]
    m.reply(`
🕊️ ${pushname} Telah Kembali Dari Afk\n\n ❏ ${user.afkReason ? ' *Dengan Alasan* : ' + user.afkReason : ''}\n\n ❏  *Selama* : ${clockString(new Date - user.afkTime)}
`.trim())
    user.afkTime = -1
    user.afkReason = ''
}
// End of AFK settings
    
    
    
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}    
    
async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}
    
if (('family100'+m.chat in _family100) && isCmd) {
            
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Rafael.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }
    
try {
	ppuser = await Rafael.profilePictureUrl(m.sender, 'image')
} catch (e) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
    
// Game Settings (added 12/01/25)
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Rafael.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
    
  if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      let user = global.db.users[m.sender]
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            user.money += 10000
            Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik .tebak gambar`}, {quoted:m})
                delete tebakgambar[m.sender.split('@')[0]] 
            } else reply('*Jawaban Salah!*')
        }
    
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
     let user = global.db.users[m.sender]
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                user.money += 10000
           	Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})	
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
    
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let user = global.db.users[m.sender]
			kuis = true
			jawaban = tebaklirik[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
                user.money += 10000
 			Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
                 delete tebaklirik[m.sender.split('@')[0]]
                } else reply('*Jawaban Salah!*')
                }
    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let user = global.db.users[m.sender]
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                user.money += 10000
            Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
             delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
            }
    
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let user = global.db.users[m.sender]
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                user.money += 10000
             Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
             delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
            }
    
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let user = global.db.users[m.sender]
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                user.money += 10000
               Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
             delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
            }
    
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let user = global.db.users[m.sender]
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                user.money += 10000
             Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
            delete caklontong[m.sender.split('@')[0]]
            delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
            }
    
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let user = global.db.users[m.sender]
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                user.money += 10000
            Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Bendera`}, {quoted:m})               
                delete tebakbendera[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

    
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let user = global.db.users[m.sender]
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                user.money += 10000
                 Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kabupaten`}, {quoted:m})            
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
    
if (tebakheroml.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let user = global.db.users[m.sender]
            kuis = true
            jawaban = tebakheroml[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                users.money += 10000
                 Rafael.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Hero ML 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik .tebak heroml`}, {quoted:m})            
                delete tebakheroml[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        } 

// End of game settings

const characterList = {
    "naruto": "dzropW8ppPndOMidlCy_urwvvnfJMvKGICO_DQDFcK4",
    "sasuke": "OI-VkZOCsVhyuUhzRFBuSWu73zEzYiAuUa5Zf8y6Xu8",
    "sakura": "UMvyxGD17y0PfEoC3oB_K44ova364o4GCKH23YiwuRc",
    "wooin": "z-cMp3yzEecIpJkxl9wNcHYi7Mu0ajHnQZNcDr0bviE",
    "gojo": "4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ",
    "ellie": "-PbrLM9Jq4SCTe_6vcwUiRtAiO0Ll655iF_xuEG42v4",
    "jaemin": "AdKi7d9PRKaY2CGWDO2LT0azf6IzoEo-OomTATtoUSk"
    // Tambahkan karakter lainnya di sini
};
    
if (mek.key.id.startsWith('3EB0')) return

switch(command) {      
 case 'cekip': {
    console.log('[DEBUG] Masuk ke case cekip');

    const { execSync } = require('child_process');

    try {
        // Gunakan curl untuk ambil IP publik
        const ip = execSync('curl -s https://ipinfo.io/ip').toString().trim();
        reply(`IP publik bot ini adalah: ${ip}`);
    } catch (err) {
        console.error('[ERROR] Gagal cek IP:', err.message);
        reply('Gagal cek IP. Pastikan server bot memiliki akses internet.');
    }
    
    break;
}
       
case 'checkdata': {
    const filePath = './database.json'; // Path to database.json
    try {
        // Check if the file exists
        if (fs.existsSync(filePath)) {
            const fileStats = fs.statSync(filePath); // Get file information
            const fileSize = fileStats.size; // Size of the file in bytes

            reply(`✅ *database.json exists!*\n\n📂 *Path*: ${filePath}\n📏 *Size*: ${fileSize} bytes`);
        } else {
            reply('❌ *database.json does not exist!*\n\nPlease ensure the file is located at ./src/database.json');
        }
    } catch (error) {
        console.error('Error checking database.json:', error);
        reply('⚠️ *An error occurred while checking database.json.*\n\nPlease check the logs for more details.');
    }
    break;
}

case 'daftar':
                if (isRegistered) return reply('Kamu sudah terdaftar')
                if (!q.includes('|')) return reply('Format salah! Pakai tanda "|"!')
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return reply('Umur harus berupa angka!! Tidak berkoma!')
                if (namaUser.length >= 30) return reply(`Namanya kepanjangan! Maksimal 30 huruf!`)
                if (umurUser > 40) return reply(`Umurnya ketuaan tuh, maksimal 40 tahun!`)
                if (umurUser < 12) return reply(`Umurnya kemudaan tuh, minimal 12 tahun!`)
				mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n⛩️Nama : ${namaUser}\n⛩️Umur : ${umurUser}\n⛩️Nomor : wa.me/${m.sender.split("@")[0]}\n⛩️Waktu Pendaftaran : ${wib}\n⛩️NS : ${serialUser}`
               zharzx = fs.readFileSync('./media/reg.jpg')
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    Rafael.sendMessage(m.chat, {image: zharzx, caption: mzd}, {quoted: m})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    Rafael.sendMessage(m.chat, {image: zharzx, caption: mzd}, {quoted: m})
                    
                }
break

case 'afk': {
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`😓 Yahh, Kak *${pushname}*... Telah Afk\n\n ❏  *Alasan* ${text ? ': ' + text : ''}`)
}
break
        
//FUN MENU by ShinySebastian (added 8/11/24)

case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    return false
                }
                let anup = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anup[Math.floor(Math.random() * anup.length)]
                let hasilp = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Rafael.sendText(m.chat, hasilp, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break 
        
case 'ttc': case 'ttt': case 'tictactoe': {
				if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) m.reply('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await Rafael.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Rafael.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) m.reply('Kamu sedang tidak berada di room tictactoe !')
delete this.game[roomnya.id]
reply(`Berhasil delete session room tictactoe !`)
}
break	
        
case 'tebak': { // added 2/10/22 
 if (!text) return reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong\n7. bendera\n8. kabupaten\n9. heroml`)
if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
Rafael.sendMessage(from, { caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s\n\n*Hadiah: 10000 money*`, image: { url: result.img } }, { quoted: m } ).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Rafael.sendMessage(from, { image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, { quoted:m }) 
 delete tebakgambar[m.sender.split('@')[0]]
 } }
    
 else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 reply(`Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*Hadiah: 10000 money*`).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Rafael.sendMessage(from, { image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } 
    
 else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 reply(`Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s\n\n*Hadiah: 10000 money*`).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Rafael.sendMessage(from, { image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 }
    
 else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
reply(`Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*Hadiah: 10000 money*`).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Rafael.sendMessage(from, { image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } 
 
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
 let anu = await JSON.parse(fs.readFileSync('./database/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await Rafael.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 reply(`Lagu tersebut berjudul?\n\nArtist : ${result.artist}\nWWaktu : 60s\n\n*Hadiah: 10000 money*`).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Rafael.sendMessage(from, { image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 }
    
 else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 reply(`*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s\n\n*Hadiah: 10000 money*`).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Rafael.sendMessage(from, { image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
    
else if (args[0] === 'bendera') {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let anug = await fetchJson('https://api.lolhuman.xyz/api/tebak/bendera?apikey=${apikey}')
let result = anug.result
reply(`Silahkan Jawab Pertanyaan Berikut\n\n${result.flag}\nWaktu : 60s\n\n*Hadiah: 10000 money*`).then(() => {
tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.name)
Rafael.sendMessage(from, { image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak bendera`}, {quoted:m})   
delete tebakbendera[m.sender.split('@')[0]]
}
}   
    
 if (args[0] === 'kabupaten') {
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
            return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`);
        }

        try {
            // Ambil data dari API
            let response = await fetch('https://api.betabotz.eu.org/api/game/tebakkabupaten?apikey=${apikey}');
            let data = await response.json();

            // Pilih item acak
            let randomItem = data[Math.floor(Math.random() * data.length)];
            let { index, title, url } = randomItem.result;

            // Kirim gambar pertanyaan
            await Rafael.sendMessage(
                from,
                {
                    caption: `Silahkan Jawab Soal Di Atas Ini\n\nWaktu : 60s\n\n*Hadiah: 10000 money*`,
                    image: { url },
                },
                { quoted: m }
            );

            // Simpan jawaban
            tebakkabupaten[m.sender.split('@')[0]] = title;

            // Tunggu 60 detik
            await sleep(60000);

            // Jika jawaban belum diberikan
            if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                console.log("Jawaban: " + title);

                // Kirim pesan waktu habis
                await Rafael.sendMessage(
                    from,
                    {
                        image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' },
                        caption: `Waktu Habis\nJawaban: ${title}\n\nIngin bermain? Ketik tebak kabupaten`,
                    },
                    { quoted: m }
                );

                // Hapus data sesi pengguna
                delete tebakkabupaten[m.sender.split('@')[0]];
            }
        } catch (error) {
            console.error(error);
            reply('Terjadi kesalahan. Pastikan API berfungsi dan coba lagi.');
        }
    }

 if (args[0] === 'heroml') {
        if (tebakheroml.hasOwnProperty(m.sender.split('@')[0])) {
            return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`);
        }

        try {
            // Ambil data dari API
            let response = await fetch('https://api.betabotz.eu.org/api/game/tebakheroml?apikey=${apikey}');
            let data = await response.json();

            // Pilih item acak
            let randomItem = data[Math.floor(Math.random() * data.length)];
            let { img, jawaban, deskripsi } = randomItem;

            // Kirim gambar soal dan deskripsi
            await Rafael.sendMessage(
                from,
                {
                    caption: `Silahkan Jawab Soal Di Atas Ini\nDeskripsi: ${deskripsi}\n\nWaktu : 60s\n\n*Hadiah: 10000 money*`,
                    image: { url: img },
                },
                { quoted: m }
            );

            // Simpan jawaban
            tebakheroml[m.sender.split('@')[0]] = jawaban;

            // Tunggu 60 detik
            await sleep(60000);

            // Jika jawaban belum diberikan
            if (tebakheroml.hasOwnProperty(m.sender.split('@')[0])) {
                console.log("Jawaban: " + jawaban);

                // Kirim pesan waktu habis
                await Rafael.sendMessage(from, { image: { url: 'https://telegra.ph/file/8ed6c29472e8253e20495.jpg' }, 
                        caption: `Waktu Habis\nJawaban: ${jawaban}\n\nIngin bermain? Ketik tebak hero`,
                    },
                    { quoted: m }
                );

                // Hapus data sesi pengguna
                delete tebakheroml[m.sender.split('@')[0]];
            }
        } catch (error) {
            console.error(error);
            reply('Terjadi kesalahan. Pastikan API berfungsi dan coba lagi.');
        }
    }   
}
break //wnd of tebak menu
        
  case 'quiz': {
    if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');

    // Ambil kategori dari perintah
    const category = args[0] ? args[0].toLowerCase() : 'umum'; // Default ke kategori umum jika tidak ada kategori

    // Cek apakah kategori valid
    const validCategories = ['umum', 'matematika', 'sejarah'];
    if (!validCategories.includes(category)) {
        return reply(`Kategori tidak valid. Pilih dari kategori: umum, matematika, atau sejarah.`);
    }

    // Cek apakah ada kuis yang sedang berlangsung
    if (global.currentQuiz) {
        return reply(`Kamu masih memiliki kuis yang belum terselesaikan. Silakan selesaikan kuis tersebut sebelum memulai yang baru.`);
    }

    // Pilih pertanyaan acak berdasarkan kategori
    const filteredQuiz = quizList.filter(quiz => quiz.category === category);
    const randomQuiz = filteredQuiz[Math.floor(Math.random() * filteredQuiz.length)];

    // Kirim pertanyaan ke pengguna
    reply(`Pertanyaan: ${randomQuiz.question}\nKetik jawabannya dan tambahkan "${prefix}jawab [jawaban]" untuk menjawab. Kamu punya waktu 20 detik.`);

    // Simpan pertanyaan dan jawaban ke variabel global
    global.currentQuiz = {
        question: randomQuiz.question,
        answer: randomQuiz.answer.toLowerCase(),
        timer: setTimeout(() => {
            reply(`Waktu habis! Jawaban yang benar adalah: ${global.currentQuiz.answer}`);
            global.currentQuiz = null; // Reset kuis setelah waktu habis
        }, 20000) // 20 detik dalam milidetik
    };
}
break;
        
case 'jawab': {
    // Cek apakah ada kuis yang sedang berlangsung
    if (!global.currentQuiz) {
        return reply(`Tidak ada kuis yang sedang berlangsung. Gunakan perintah "${prefix}quiz" untuk memulai kuis.`);
    }

    // Cek jika pengguna hanya mengirim ".jawab" tanpa argumen
    if (args.length === 0) {
        return reply(`Jawaban tidak boleh kosong. Silakan ketik "${prefix}jawab [jawaban]" untuk menjawab.`);
    }

    // Gabungkan argumen menjadi jawaban pengguna
    const userAnswer = args.join(" ").toLowerCase();

    // Bandingkan jawaban
    if (userAnswer === global.currentQuiz.answer) {
        reply(`Selamat! Jawaban kamu benar: ${global.currentQuiz.answer}`);
        clearTimeout(global.currentQuiz.timer); // Hentikan timer
        global.currentQuiz = null; // Reset kuis
    } else {
        reply(`Jawaban kamu salah. Coba lagi!`);
    }
}
break;

case 'menfes': case 'menfess': {
	if (m.isGroup) return reply('Fitur tidak dapat digunakan di grup!')
	if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
            	if (!text) return reply(`Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`)
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let mq1 = m1 + '@s.whatsapp.net'
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\nPesan: ${m3}\n\n*_Sent by GacorBot-MD_*`
            await Rafael.sendText(m1 + '@s.whatsapp.net', pjtxt, m, {mentions: ments})
            let akhji = `Pesan telah terkirim ke @${mq1.split('@')[0]}`
            await Rafael.sendText(m.chat, akhji, m, {mentions: ments})
            }
            break
        
case 'agedetect': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengecek apakah ada gambar yang direply
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Validasi input gambar
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${usedPrefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    try {
        // Mendownload gambar dari pesan yang direply
        let img = await q.download();

        // Mengupload gambar menggunakan layanan pihak ketiga (contoh: imgbb)
        let imgbbApiKey = "0728c27b16e953acb07e666abbb4a7c3"; // API key untuk imgbb
        let uploadedImageUrl = await uploadImage(img, imgbbApiKey);

        // URL API Age Detect
        const ageDetectApiUrl = `https://api.betabotz.eu.org/api/search/agedetect?url=${encodeURIComponent(uploadedImageUrl)}&apikey=${apikey}`;

        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API Age Detect
        const response = await fetch(ageDetectApiUrl);
        const data = await response.json();

        // Mengecek hasil dari API
        if (data.status === true && data.result) {
            const { score, age, gender, expression, faceShape } = data.result;
            // Mengirim hasil deteksi usia
            reply(`Hasil deteksi usia:\n\nScore: ${score}\nUsia: ${age}\nJenis Kelamin: ${gender}\nEkspresi: ${expression}\nBentuk Wajah: ${faceShape}`);
        } else {
            reply('Terjadi kesalahan saat memproses gambar. Silakan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan gambar yang kamu balas sesuai format dan coba lagi.');
    }
}
break;

case 'apakah': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul', 'Mungkin tidak', 'Hanya Tuhan yang tau', 'Mungkin iya', 'Rill cuy']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
                }
                break
        
case 'bisakah': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!', 'Dibisa-bisain aja', 'Susah ni bro', 'Ez cuyy', 'Ntahlah']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                reply(`Pertanyaan : Bisakah ${q}\nJawaban : ${ga}`)
                }
                break
        
case 'bagaimanakah': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Astagaa Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                reply(`Pertanyaan : Bagaimanakah ${q}\nJawaban : ${ya}`)
                }
            break
     
case 'rate': {
                if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100', 'Ga ternilai', '0', 'Saking bagusnya sampai tidak bisa dinilai', 'Saking jeleknya sampai tidak bisa dinilai']
                const te = ra[Math.floor(Math.random() * ra.length)]
                reply(`Rate : ${q}\nJawaban : *${te}%*`)
                }
            break  
        
case 'cekaku':		
const ganteng = ['Cakep ✔️','Jelek Anjrit ❌']
const sifat = ['Sigma', 'Brainrot', 'Hamba Tuhan', 'Patuh', 'Suka meme jomok', 'Banyak jodohnya', 'Soft Spoken', 'Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
const suka = ['Makan','Tidur','Main Game','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri', 'Film Jomok', 'Nonton skibidi toilet', 'Menyendiri di kamar', 'Sesama jenis', 'Berak', 'Minum baygon', 'Bolos pelajaran', 'Membantu teman', 'Cewe Afrika', 'Cewe Korea', 'Membantu orangtua', 'Minum']
  const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const sigmaskibidi = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					const gai = suka[Math.floor(Math.random() * suka.length)]
					const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
                    const sigma = sigmaskibidi[Math.floor(Math.random() * sigmaskibidi.length)]
  var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Cek Sigma : ${pinter}%
Menyukai : ${gai}
  `

Rafael.profilePictureUrl(from, 'image').then( res => Rafael.sendMessage(from, {caption: cek, image: { url: res }}, {quoted: m})).catch(() => Rafael.sendMessage(from, {caption: cek, image: {url: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCX5TOKkOk3MBt8V-f8PbmGrdLHCi4BoUOs_yuZ1pekOp8U_yWcf40t66JZ4_e_JYpRTOVCl0m8ozEpLrs9Ip2Cm7kQz4fUnUFh8Jcv8fMFfPbfbyWEEKne0S9e_U6fWEmcz0oihuJM6sP1cGFqdJZbLjaEQnGdgJvcxctqhMbNw632OKuAMBMwL86/s414/pp%20kosong%20wa%20default.jpg`}}, {quoted: m}))
				    break       

        	case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
        
case 'cekpasangan':
if (!q) return reply (`Penggunaan ${command} Nama1|nama2\n\nContoh : ${command} Rehan|Rizki`)
const gett_args = args.join(" ").split("|")
jeremyy = gett_args[0]
gaby = gett_args[1]
const kkan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100 ']
const dsik = kkan[Math.floor(Math.random() * kkan.length)]
Rafael.sendMessage(m.chat, { text: `Nama : ${jeremyy} ❤ ${gaby}\nJawaban : *${dsik}%*` }, { quoted: m })
			break
        
case 'kapankah': case 'kapan': {
                if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`, 'Segera']
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
case 'wangy': {
                if (!q) return reply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                reply(awikwok)
                }
            break        
               
//End of Fun Menu 
        
//Image Maker menu by ShinySebastian (added 11/01/25)
case 'ktpmaker': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Memeriksa apakah semua parameter telah diberikan
    if (args.length == 0) {
        return reply(`Penggunaan: ${prefix + command} nik, prov, kabu, name, ttl, jk, jl, rtrw, lurah, camat, agama, nikah, kerja, warga, until\nContoh: ${prefix + command} 456127893132123, Sumatera Barat, Padang, LoL Human, Mars, 99-99-9999, Laki-laki, Jalan Wardoyo, 999/999, Turese, Imtuni, Islam, Belum Menikah, Pekerja Lepas, Indonesia, 01-01-2099 (Balas gambar untuk parameter img)`);
    }

    // Mengecek apakah ada gambar yang direply
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Validasi input gambar
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${usedPrefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    try {
        // Mendownload gambar dari pesan yang direply
        let img = await q.download();

        // Mengupload gambar menggunakan layanan pihak ketiga (contoh: imgbb)
        let imgbbApiKey = "0728c27b16e953acb07e666abbb4a7c3"; // API key untuk imgbb
        let uploadedImageUrl = await uploadImage(img, imgbbApiKey);

        // Memisahkan argumen berdasarkan koma `,`
        let [
            nik, prov, kabu, name, ttl, jk, jl, rtrw, lurah, camat, agama,
            nikah, kerja, warga, until
        ] = args.join(' ').split(',').map(param => param.trim());

        // Validasi apakah semua parameter telah terisi
        if (!nik || !prov || !kabu || !name || !ttl || !jk || !jl || !rtrw || !lurah || !camat || !agama || !nikah || !kerja || !warga || !until) {
            return reply('Semua parameter wajib diisi. Pastikan formatnya benar dan pisahkan dengan koma.');
        }

        // URL API untuk membuat KTP
        const apiUrl = `https://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${encodeURIComponent(nik)}&prov=${encodeURIComponent(prov)}&kabu=${encodeURIComponent(kabu)}&name=${encodeURIComponent(name)}&ttl=${encodeURIComponent(ttl)}&jk=${encodeURIComponent(jk)}&jl=${encodeURIComponent(jl)}&rtrw=${encodeURIComponent(rtrw)}&lurah=${encodeURIComponent(lurah)}&camat=${encodeURIComponent(camat)}&agama=${encodeURIComponent(agama)}&nikah=${encodeURIComponent(nikah)}&kerja=${encodeURIComponent(kerja)}&warga=${encodeURIComponent(warga)}&until=${encodeURIComponent(until)}&img=${encodeURIComponent(uploadedImageUrl)}`;

        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API untuk membuat KTP
        const response = await fetch(apiUrl);
        const buffer = await response.buffer();

        // Mengirim hasil KTP berupa gambar
        await Rafael.sendMessage(m.chat, {
            image: buffer,
            caption: `Berikut adalah KTP yang telah dibuat:`
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan semua parameter sudah benar dan coba lagi.');
    }
}
break;

case 'bucinsertifikat': case 'bucinserti': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
    let name = m.text.split(' ')[1] || 'Test'; // Ambil nama setelah perintah
    const bucinsertifikatApiUrl = `https://api.lolhuman.xyz/api/bucinserti?apikey=${apikey}&name=${encodeURIComponent(name)}`;

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API
        const response = await fetch(bucinsertifikatApiUrl);
        const buffer = await response.buffer();
      
            Rafael.sendMessage(m.chat, {
                image: buffer,
                caption: `Cieee ${name} bucin berat`
            }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break;       
    
    case 'pacarsertifikat': case 'pacarserti':  {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Memeriksa apakah ada parameter yang diberikan
    if (args.length == 0) {
        return reply('Format salah! Penggunaan: .pacarsertifikat nama1 nama2');
    }

    let name1 = m.text.split(' ')[1]; // Ambil nama pertama
    let name2 = m.text.split(' ')[2]; // Ambil nama kedua
    const pacarsertifikatApiUrl = `https://api.lolhuman.xyz/api/pacarserti?apikey=${apikey}&name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}`;

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API
        const response = await fetch(pacarsertifikatApiUrl);
        const buffer = await response.buffer();

        // Mengirim gambar dengan Rafael.sendMessage
        Rafael.sendMessage(m.chat, {
            image: buffer,
            caption: `Cieee ${name1} & ${name2}, pacaran nih! ❤️`
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break;

case 'badboyserti': case 'badboysertifikat': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Memeriksa apakah ada parameter yang diberikan
    if (m.text.split(' ').length < 2) {
        return reply('Format salah! Penggunaan: .badboyserti nama');
    }

    let name = m.text.split(' ')[1]; // Ambil nama setelah perintah
    const badboysertiApiUrl = `https://api.lolhuman.xyz/api/badboy?apikey=${apikey}&name=${encodeURIComponent(name)}`;

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API
        const response = await fetch(badboysertiApiUrl);
        const buffer = await response.buffer();

        // Mengirim gambar dengan Rafael.sendMessage
        Rafael.sendMessage(m.chat, {
            image: buffer,
            caption: `Cieee ${name} badboy beneran! 😎`
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break;

case 'badgirlserti': case 'badgirlsertifikat': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Memeriksa apakah ada parameter yang diberikan
    if (m.text.split(' ').length < 2) {
        return reply('Format salah! Penggunaan: .badgirlserti nama');
    }

    let name = m.text.split(' ')[1]; // Ambil nama setelah perintah
    const badgirlsertiApiUrl = `https://api.lolhuman.xyz/api/badgirl?apikey=${apikey}&name=${encodeURIComponent(name)}`;

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API
        const response = await fetch(badgirlsertiApiUrl);
        const buffer = await response.buffer();

        // Mengirim gambar dengan Rafael.sendMessage
        Rafael.sendMessage(m.chat, {
            image: buffer,
            caption: `Cieee ${name} badgirl beneran! 😎`
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break;
 
case 'gtapassed': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
	const get_args = args.join(" ").split("|")
    // Memeriksa apakah ada parameter yang diberikan
    if (m.text.split('|').length == 0) {
        return reply('Format salah! Penggunaan: .gtapassed mission_text|respect_text');
    }

                    name1 = get_args[1]
                    name2 = get_args[2]
    const pacarsertifikatApiUrl = `https://api.lolhuman.xyz/api/gtapassed?apikey=${apikey}&text1=${encodeURIComponent(name1)}&text2=${encodeURIComponent(name2)}`;

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API
        const response = await fetch(pacarsertifikatApiUrl);
        const json = await response.buffer();

        // Mengirimkan gambar dengan Rafael.sendMessage
        Rafael.sendMessage(m.chat, {
            image: json,
            caption: `Selamat, misi berhasil diselesaikan! 🚗💨`
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break;



//end of image maker menu
        
//CREATOR MENU by ShinySebastian (added 8/11/24)
        
case 'tinyurl':
	if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }   
    kueri = args[0]
	const tinyUrl = await fetchJson(`https://api.betabotz.eu.org/api/tools/tinyurl?url=${kueri}&apikey=${apikey}`)
    reply(tinyUrl.result)
   break
        
case 'stickerwm': 
case 'swm': { 
	if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak 
    // Cek format input packname|author
    if (!args.join(" ")) {
        return reply(`Example :\nwm ${global.author}|${global.packname}`);
    }

    const swn = args.join(" ");
    const pcknm = swn.split("|")[0]; // Packname
    const atnm = swn.split("|")[1];  // Author

    // Cek apakah ada gambar/video yang dikirim langsung
    if (/image|video/.test(mime)) {
        let media = await quoted.download();
        let encmedia;
        
        // Proses gambar menjadi stiker
        if (/image/.test(mime)) {
            encmedia = await Rafael.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
        }
        // Proses video menjadi stiker
        else if (/video/.test(mime)) {
            if (m.seconds > 9) {
                return reply('Maximum video duration is 9 seconds!');
            }
            encmedia = await Rafael.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
        }
        
		if (encmedia) {
		await fs.unlinkSync(encmedia); // Hapus file jika encmedia valid
		} else {
			console.error('encmedia tidak terdefinisi atau nilainya undefined');
		}
			} 
    // Jika pesan yang diteruskan adalah gambar/video
    else if (m.quoted) {
        // Pastikan pesan yang diteruskan adalah gambar atau video
        if (m.quoted.isAnimated) {
            Rafael.downloadAndSaveMediaMessage(m.quoted, "gifee")
                .then(() => {
                    Rafael.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m });
                }).catch(error => {
                    console.error(error);
                    return reply("Failed to process the gif.");
                });
        } else if (/image/.test(mime)) {
            let media = await m.quoted.download();
            let encmedia = await Rafael.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
            await fs.unlinkSync(encmedia); // Hapus file setelah diproses
        } else if (/video/.test(mime)) {
            if ((m.quoted.msg || m.quoted).seconds > 9) {
                return reply('Maximum video duration is 9 seconds!');
            }
            let media = await m.quoted.download();
            let encmedia = await Rafael.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
            await fs.unlinkSync(encmedia); // Hapus file setelah diproses
        }
    } 
    // Jika bukan gambar atau video
    else {
        reply(`Send Image/Video with Caption ${prefix + command}\nVideo duration 1-9 seconds.`);
    }
}
break;

case 'sticker':
case 'stiker':
case 's':{
				if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
                if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
              
                reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Rafael.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })

                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await Rafael.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                } else {
                    return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break

case 'smeme': {
	        /*let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return reply(respond)
            if (!text) return reply(respond)
	        await reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await Rafael.downloadAndSaveMediaMessage(quoted);
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${fatGans}`
            let respon = await smeme.json();
   			let responUrl = respon.result;
	        Rafael.sendImageAsSticker(m.chat, responUrl, m, { packname: global.packname, author: global.author }) */
    
                
    let [atas, bawah] = text.split`|`;
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!mime) throw `Balas gambar dengan perintah\n\n${usedPrefix + command} <teks atas>|<teks bawah>`;
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`;

    let img = await q.download(); // Download the quoted image
    let apiKey = "0728c27b16e953acb07e666abbb4a7c3"; // Your imgbb API key
    let url = await uploadImage(img, apiKey); // Upload to imgbb

    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`;
    Rafael.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });
}
	        break 
        
case 'remini': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengecek apakah ada gambar yang direply
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Validasi input gambar
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${usedPrefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    try {
        // Mendownload gambar dari pesan yang direply
        let img = await q.download();

        // Mengupload gambar menggunakan layanan pihak ketiga (contoh: imgbb)
        let imgbbApiKey = "0728c27b16e953acb07e666abbb4a7c3"; // API key untuk imgbb
        let uploadedImageUrl = await uploadImage(img, imgbbApiKey);

        // URL API Remini
        const reminiApiUrl = `https://api.betabotz.eu.org/api/tools/remini?url=${encodeURIComponent(uploadedImageUrl)}&apikey=${apikey}`;

        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API Remini
        const response = await fetch(reminiApiUrl);
        const data = await response.json();

        // Mengecek hasil dari API
        if (data.status === true && data.url) {
            // Mengirim gambar hasil proses Remini
            await Rafael.sendMessage(
                from,
                {
                    caption: 'Enhanced by GacorBot',
                    image: { url: data.url }
                },
                { quoted: mek }
            );
        } else {
            reply('Terjadi kesalahan saat memproses gambar. Silakan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan gambar yang kamu balas sesuai format dan coba lagi.');
    }
}
break;
        
 case 'remini2': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengecek apakah ada gambar yang direply
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Validasi input gambar
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${usedPrefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    try {
        // Mendownload gambar dari pesan yang direply
        let img = await q.download();

        // Mengupload gambar menggunakan layanan pihak ketiga (contoh: imgbb)
        let imgbbApiKey = "0728c27b16e953acb07e666abbb4a7c3"; // API key untuk imgbb
        let uploadedImageUrl = await uploadImage(img, imgbbApiKey);

        // URL API Remini
        const reminiApiUrl = `https://api.betabotz.eu.org/api/tools/remini-v2?url=${encodeURIComponent(uploadedImageUrl)}&apikey=${apikey}`;

        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API Remini
        const response = await fetch(reminiApiUrl);
        const data = await response.json();

        // Mengecek hasil dari API
        if (data.status === true && data.url) {
            // Mengirim gambar hasil proses Remini
            await Rafael.sendMessage(
                from,
                {
                    caption: 'Enhanced by GacorBot',
                    image: { url: data.url }
                },
                { quoted: mek }
            );
        } else {
            reply('Terjadi kesalahan saat memproses gambar. Silakan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan gambar yang kamu balas sesuai format dan coba lagi.');
    }
}
break;

case 'recolor': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengecek apakah ada gambar yang direply
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Validasi input gambar
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    try {
        // Mendownload gambar dari pesan yang direply
        let img = await q.download();

        // Mengupload gambar menggunakan layanan pihak ketiga (contoh: imgbb)
        let imgbbApiKey = "0728c27b16e953acb07e666abbb4a7c3"; // API key untuk imgbb
        let uploadedImageUrl = await uploadImage(img, imgbbApiKey);

        // URL API Recolor
        const recolorApiUrl = `https://api.betabotz.eu.org/api/tools/recolor?url=${encodeURIComponent(uploadedImageUrl)}&apikey=${apikey}`;

        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API Recolor
        const response = await fetch(recolorApiUrl);
        const data = await response.json();

        // Mengecek hasil dari API
        if (data.status === true && data.result) {
            // Mengirim gambar hasil proses Recolor
            await Rafael.sendMessage(
                from,
                {
                    caption: 'Enhanced by GacorBot',
                    image: { url: data.result }
                },
                { quoted: mek }
            );
        } else {
            console.log(e)
            reply('Terjadi kesalahan saat memproses gambar. Silakan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan gambar yang kamu balas sesuai format dan coba lagi.');
    }
}
break;

/*case 'coloredit': {
    try {
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        if (!mime.startsWith('image/')) return reply(`Balas gambar dengan caption *${prefix + command}* untuk mengedit warna`);

        reply('🛠️ Sedang melakukan color grading...');

        let media = await Rafael.downloadAndSaveMediaMessage(quoted);
        let image = await Jimp.read(media);

        // Contoh efek grading cinematic
        image
            .color([{ apply: 'desaturate', params: [30] }])  // Kurangi saturasi
            .brightness(0.05) // Tambah brightness dikit
            .contrast(0.15)   // Tambah kontras
            .sepia()          // Efek hangat sinematik

        let out = getRandom('.jpg');
        await image.writeAsync(out);

        await Rafael.sendMessage(m.chat, {
            image: fs.readFileSync(out),
            caption: '🎬 *Color grading applied!*'
        }, { quoted: m });

        fs.unlinkSync(media);
        fs.unlinkSync(out);

    } catch (e) {
        console.error(e);
        reply('❌ Terjadi kesalahan saat color grading.');
    }
}
break; */
        
case 'imageedit': {
    try {
        let media = null;

        if (quoted?.mimetype?.includes('image')) {
            media = await Rafael.downloadAndSaveMediaMessage(quoted);
        } else if (m?.mimetype?.includes('image') || m.message?.imageMessage) {
            media = await Rafael.downloadAndSaveMediaMessage(m);
        }

        if (!media) return reply(`Balas atau kirim gambar dengan caption *.imageedit*`);

        userSessions[m.sender] = {
            imagePath: media,
            step: 'saturation',
            values: {
                saturation: 50,
                brightness: 50,
                contrast: 50,
                hue: 0,
                red: 0,
                green: 0,
                blue: 0
            }
        };

        reply(`📸 Gambar sudah disimpan dalam antrian.\nMari kita mulai!\nTentukan *saturasi* (default: 50) dengan mereply pesan ini.`);

    } catch (err) {
        console.error(err);
        reply('❌ Gagal memulai sesi editing gambar.');
    }
}
break;


case 'generatecolor': {
    try {
        const Jimp = require('jimp')
        let session = userSessions[m.sender]
        if (!session || session.step !== 'done') return reply('❌ Tidak ada sesi edit aktif. Ketik *.imageedit* dulu.')

        let image = await Jimp.read(session.imagePath)
        let { saturation, brightness, contrast, hue, red, green, blue } = session.values

        image
            .color([{ apply: 'saturate', params: [saturation - 50] }]) // Jimp default is 50-ish
            .brightness((brightness - 50) / 100) // -1 to 1
            .contrast((contrast - 50) / 100) // -1 to 1
            .color([{ apply: 'hue', params: [hue] }])
            .color([{ apply: 'red', params: [red] }])
            .color([{ apply: 'green', params: [green] }])
            .color([{ apply: 'blue', params: [blue] }])

        let outputPath = getRandom('.jpg')
        await image.writeAsync(outputPath)

        let buffer = fs.readFileSync(outputPath)
        await Rafael.sendMessage(m.chat, { image: buffer, caption: '✨ Hasil color grading selesai!' }, { quoted: m })

        fs.unlinkSync(session.imagePath)
        fs.unlinkSync(outputPath)
        delete userSessions[m.sender]
    } catch (e) {
        console.error(e)
        reply('❌ Terjadi kesalahan saat generate gambar.')
    }
}
break
        
        
case 'img2prompt': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengecek apakah ada gambar yang direply
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Validasi input gambar
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${usedPrefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    try {
        // Mendownload gambar dari pesan yang direply
        let img = await q.download();

        // Mengupload gambar menggunakan layanan pihak ketiga (contoh: imgbb)
        let imgbbApiKey = "0728c27b16e953acb07e666abbb4a7c3"; // API key untuk imgbb
        let uploadedImageUrl = await uploadImage(img, imgbbApiKey);

        // URL API Img2Prompt
        const img2promptApiUrl = `https://api.betabotz.eu.org/api/tools/img2prompt?url=${encodeURIComponent(uploadedImageUrl)}&apikey=${apikey}`;

        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API Img2Prompt
        const response = await fetch(img2promptApiUrl);
        const data = await response.json();

        // Mengecek hasil dari API
        if (data.status === true && data.result) {
            // Mengirim deskripsi hasil prompt
            reply(`Hasil analisis gambar:\n\n${data.result}`);
        } else {
            reply('Terjadi kesalahan saat memproses gambar. Silakan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan gambar yang kamu balas sesuai format dan coba lagi.');
    }
}
break;

case 'removebg': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengecek apakah ada gambar yang direply
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Validasi input gambar
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${usedPrefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    try {
        // Mendownload gambar dari pesan yang direply
        let img = await q.download();

        // Mengupload gambar menggunakan layanan pihak ketiga (contoh: imgbb)
        let imgbbApiKey = "0728c27b16e953acb07e666abbb4a7c3"; // API key untuk imgbb
        let uploadedImageUrl = await uploadImage(img, imgbbApiKey);

        // URL API Remove Background
        const removeBgApiUrl = `https://api.betabotz.eu.org/api/tools/removebg?url=${encodeURIComponent(uploadedImageUrl)}&apikey=${apikey}`;

        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API Remove Background
        const response = await fetch(removeBgApiUrl);
        const data = await response.json();

        // Mengecek hasil dari API
        if (data.status === true && data.url && data.url.result) {
            // Mengirim gambar hasil menggunakan rafael.sendMessage
            await Rafael.sendMessage(m.chat, { 
                image: { url: data.url.result }, 
                caption: 'Background berhasil dihapus!' 
            }, { quoted: m });
        } else {
            reply('Terjadi kesalahan saat memproses gambar. Silakan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan gambar yang kamu balas sesuai format dan coba lagi.');
    }
}
break;

case 'brat':
       if (args.length === 0) {
        return reply(`Format salah. Gunakan format: ${prefix}brat text`);
    } 
        kueri = args.join(" ")
		/*await Rafael.sendImageAsSticker(m.chat, { url: `https://vxl02-brt.hf.space/?q=${kueri}` }, m, {
                        packname: global.packname,
                        author: global.author,
                    }) */
    let berat = `https://vxl02-brt.hf.space/?q=${kueri}`;
    Rafael.sendImageAsSticker(m.chat, berat, m, { packname: global.packname, author: global.author });
   	break

case 'brat2': {
  if (!text) return reply(`Penggunaan : ${prefix + command} <teks>`);

  try {
    const { createCanvas, registerFont } = require('canvas');
    const Jimp = require('jimp');
    
    registerFont('./media/arialnarrow.ttf', { family: 'ArialNarrow' }); // Sesuaikan fontnya dan lokasi fontnya 

    const canvas = createCanvas(512, 512);
    const ctx = canvas.getContext('2d'); 
    // Set background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Function to find optimal font size
    const findOptimalFontSize = (text, maxWidth, maxHeight) => {
      let fontSize = 280;
      ctx.font = `bold ${fontSize}px ArialNarrow`; // Gunakan font yang sudah didaftarkan
      
      const words = text.split(' ');
      let lines = [];

      while (fontSize > 0) {
        lines = [];
        let currentLine = [];
        let currentWidth = 0;
        ctx.font = `bold ${fontSize}px ArialNarrow`; // Gunakan font yang sudah didaftarkan

        for (const word of words) {
          const wordWidth = ctx.measureText(word + ' ').width;
          if (currentWidth + wordWidth <= maxWidth) {
            currentLine.push(word);
            currentWidth += wordWidth;
          } else {
            if (currentLine.length > 0) {
              lines.push(currentLine);
            }
            currentLine = [word];
            currentWidth = wordWidth;
          }
        }
        if (currentLine.length > 0) {
          lines.push(currentLine);
        }

        const totalHeight = lines.length * (fontSize + 10);
        if (totalHeight <= maxHeight) {
          break;
        }
        fontSize -= 2;
      }
      return { fontSize, lines };
    };

    // Calculate optimal font size and line arrangement
    const padding = 48;
    const maxWidth = canvas.width - (padding * 2);
    const maxHeight = canvas.height - (padding * 2);
    const { fontSize, lines } = findOptimalFontSize(q, maxWidth, maxHeight);

    // Draw justified text
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${fontSize}px ArialNarrow`; // Gunakan font yang sudah didaftarkan
    
    const lineHeight = fontSize + 10;
    const totalHeight = lines.length * lineHeight;
    const startY = (canvas.height - totalHeight) / 2 + fontSize / 2;

    lines.forEach((line, i) => {
      if (i === lines.length - 1 && line.length === 1) {
        // If it's the last line with single word, center it
        ctx.textAlign = 'center';
        ctx.fillText(line.join(' '), canvas.width / 2, startY + (i * lineHeight));
      } else {
        // Justify text
        const totalSpacing = maxWidth - line.reduce((acc, word) => acc + ctx.measureText(word).width, 0);
        const spaceBetween = line.length > 1 ? totalSpacing / (line.length - 1) : 0;
        
        let currentX = padding;
        line.forEach((word, j) => {
          ctx.fillText(word, currentX, startY + (i * lineHeight));
          currentX += ctx.measureText(word).width + spaceBetween;
        });
      }
    });
const buffer = canvas.toBuffer();
let image = await Jimp.read(buffer);

image.blur(2);
let blurredBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
    
await Rafael.sendImageAsSticker(m.chat, blurredBuffer, m, { packname: global.packname, author: global.author });

  } catch (e) {
    console.log(e);
    await reply(`Terjadi kesalahan saat membuat stiker`);
  }
}
break
//End of Creaator menu
        
//MATEMATIKA MENU by ShinySebastian (added 8/11/24)
        
case 'equilibrium': {
    try {
        if (args.length === 0) return reply(`Usage: ${prefix + command} <demand equation> ; <supply equation>\n\nContoh: ${prefix + command} Qd=5000-0.02P; Qs=100+0.05P`);

        let input = args.join(' ').replace(/,/g, '.').split(';').map(x => x.trim()); // ganti koma jadi titik

        if (input.length !== 2) return reply('Format salah! Gunakan tanda titik koma (;) untuk pisahkan demand dan supply.');

        let demandEq = input[0].toUpperCase();
        let supplyEq = input[1].toUpperCase();

        // Regex: tangkap semua angka positif/negatif termasuk desimal
        let demandMatch = demandEq.match(/Q[D]?=([0-9.+-]+)\s*[-+]\s*([0-9.]+)P/);
        let supplyMatch = supplyEq.match(/Q[S]?=([0-9.+-]+)\s*[+]\s*([0-9.]+)P/);

        if (!demandMatch || !supplyMatch) return reply('Gagal membaca persamaan. Pastikan formatnya benar (contoh: Qd=5000-0.02P; Qs=100+0.05P)');

        let a = parseFloat(demandMatch[1]);
        let b = parseFloat(demandMatch[2]);

        let c = parseFloat(supplyMatch[1]);
        let d = parseFloat(supplyMatch[2]);

        let P_eq = (a - c) / (b + d);
        let Q_eq = c + d * P_eq;

        let result = `📊 *Equilibrium Price & Quantity*\n\n`;
        result += `➤ Demand: Qd = ${a} - ${b}P\n`;
        result += `➤ Supply: Qs = ${c} + ${d}P\n\n`;
        result += `✅ *Equilibrium Price (P)* = ${P_eq.toFixed(2)}\n`;
        result += `✅ *Equilibrium Quantity (Q)* = ${Q_eq.toFixed(2)}`;

        reply(result);

        // Buat grafik QuickChart.io
        let labels = [], demandData = [], supplyData = [];
        for (let p = 0; p <= P_eq * 2; p += P_eq / 10) {
            labels.push(p.toFixed(2));
            demandData.push((a - b * p).toFixed(2));
            supplyData.push((c + d * p).toFixed(2));
        }

        let chartUrl = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Demand',
                        data: demandData,
                        borderColor: 'red',
                        fill: false
                    },
                    {
                        label: 'Supply',
                        data: supplyData,
                        borderColor: 'green',
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Supply & Demand Equilibrium'
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Price (P)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Quantity (Q)'
                        }
                    }
                }
            }
        }))}`;

        await Rafael.sendMessage(m.chat, { image: { url: chartUrl }, caption: '*📉 Grafik Keseimbangan Supply & Demand*' }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply('❌ Error saat memproses perhitungan harga keseimbangan.');
    }
    break;
}
        
case 'fungsiekonomi': {
    if (args.length !== 4) {
        return reply(`Format salah!\nGunakan: ${prefix}fungsiekonomi p1 q1 p2 q2\nContoh: ${prefix}fungsiekonomi 100 50 80 70`);
    }

    const [p1, q1, p2, q2] = args.map(Number);
    if ([p1, q1, p2, q2].some(isNaN)) {
        return reply("Semua input harus berupa angka.");
    }

    const deltaP = p2 - p1;
    const deltaQ = q2 - q1;

    if (deltaP === 0) return reply("Harga tidak boleh konstan (p2 - p1 ≠ 0).");

    const a = deltaQ / deltaP; // gradien (a)
    const b = q1 - a * p1;      // konstanta (b)

    const jenis = a > 0 ? "Penawaran (positif)" : "Permintaan (negatif)";
    const fungsi = `q = ${a.toFixed(2)}p ${b >= 0 ? "+ " : "- "}${Math.abs(b).toFixed(2)}`;

    // Grafik: sumbu X = Harga (P), sumbu Y = Kuantitas (Q)
    let pLabels = Array.from({ length: 21 }, (_, i) => p1 - 10 + i); // rentang harga
    let qData = pLabels.map(p => (a * p + b).toFixed(2));

    let chartUrl = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
        type: "line",
        data: {
            labels: pLabels,
            datasets: [{
                label: `Fungsi ${jenis}`,
                data: qData,
                borderColor: a > 0 ? 'green' : 'red',
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: `Grafik ${jenis}`
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Harga (P)"
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Kuantitas (Q)"
                    }
                }]
            }
        }
    }))}`;

    // Kirim hasil + grafik
    reply(`📈 *Fungsi ${jenis}*\n\n` +
        `Dari titik (p1=${p1}, q1=${q1}) dan (p2=${p2}, q2=${q2})\n` +
        `🔹 Gradien (a): ${a.toFixed(2)}\n` +
        `🔹 Konstanta (b): ${b.toFixed(2)}\n` +
        `📌 Fungsi: ${fungsi}`);

    // Kirim grafik
    Rafael.sendMessage(
        from,
        {
            caption: '📊 Grafik Fungsi Ekonomi (Q vs P)',
            image: { url: chartUrl }
        },
        { quoted: mek }
    );

    break;
}



        
case 'elastisitas': {
    if (args.length !== 4) {
        return reply(`Format salah!\nGunakan: ${prefix}elastisitas p1 p2 q1 q2\nContoh: ${prefix}elastisitas 100 80 50 70`);
    }

    const [p1, p2, q1, q2] = args.map(Number);
    if ([p1, p2, q1, q2].some(isNaN)) {
        return reply("Pastikan semua input berupa angka.");
    }

    const deltaQ = q2 - q1;
    const deltaP = p2 - p1;

    if (deltaP === 0) {
        return reply("Perubahan harga (ΔP) tidak boleh nol. Kemungkinan yang kamu masukkan termasuk elastis sempurna");
    }

    const e = (p1 / q1) * (deltaQ / deltaP);
    let sifat = '';
    let penjelasan = '';

    if (e === 0) {
        sifat = 'Inelastis sempurna';
        penjelasan = 'Kuantitas tidak berubah meskipun harga berubah.';
    } else if (!isFinite(e)) {
        sifat = 'Elastis sempurna';
        penjelasan = 'Kuantitas sangat sensitif terhadap perubahan harga.';
    } else if (Math.abs(e) > 1) {
        sifat = 'Elastis';
        penjelasan = 'Persentase perubahan kuantitas lebih besar dari harga.';
    } else if (Math.abs(e) < 1) {
        sifat = 'Inelastis';
        penjelasan = 'Persentase perubahan kuantitas lebih kecil dari harga.';
    } else if (Math.abs(e) === 1) {
        sifat = 'Elastisitas satuan (Uniter)';
        penjelasan = 'Persentase perubahan kuantitas sama dengan harga.';
    }

    return reply(`📉 *Analisis Elastisitas Ekonomi*\n\n` +
        `Koefisien elastisitas (E): ${e.toFixed(2)}\n` +
        `Sifat elastisitas: ${sifat}\n` +
        `📌 Penjelasan: ${penjelasan}`);
}
break
        
case 'calc': case 'calculator':	
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
			 let ids = m.chat
  Rafael.math = Rafael.math ? Rafael.math : {}
  if (ids in Rafael.math) {
    clearTimeout(Rafael.math[ids][3])
    delete Rafael.math[ids]
    m.reply('.... ')
  }
  let vals = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let formatz = vals
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(vals)
    let resulat = (new Function('return ' + vals))()
    if (!resulat) return reply(`Masukkan angka dan operatornya!\n\nExample: ${prefix+command} 12+12`)
    await reply(`*${formatz}* = ${resulat}`)
  } catch (e) {
    if (e == undefined) return reply('✳️ Masukkan persamaan\n\nsimbol yang kompatibel -, +, *, /, ×, ÷, π, e, (, )')
    reply('Kesalahan format, hanya boleh menggunakan angka 0-9 dan simbol -, +, *, /, ×, ÷, π, e, (, ) yang dapat Anda gunakan')
  }
  break
        
case 'phytagoras':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (args.length === 0) return reply(`Contoh: ${prefix + command} 2|5|3`)
    
    // Split the arguments and parse them as numbers
    let get_args = args.join(" ").split("|")
    let hu = parseFloat(get_args[0]) 
    let he = parseFloat(get_args[1])
    
    // Check if both arguments are valid numbers
    if (isNaN(hu) || isNaN(he)) {
        return reply(`Error: Pastikan Anda memasukkan dua angka yang valid. Contoh: ${prefix + command} 2|5|3`);
    }
    
    await reply(mess.wait); // Tambahkan await jika perlu

	// Hitung hasil kuadrat dan akar
	let qurq = (hu * hu) + (he * he);
	let sqrtResult = Math.sqrt(qurq);

	reply(`Hasil kuadrat: ${qurq}\nAkar kuadrat: ${sqrtResult}`);
	break

case 'persamaankuadrat':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (args.length === 0) return reply(`Contoh: ${prefix + command} 1|5|6`);
    reply(mess.wait);
    // Split the arguments and parse them as numbers
    let get_argsa = args.join(" ").split("|");
    let a = parseFloat(get_argsa[0]);
    let b = parseFloat(get_argsa[1]);
    let c = parseFloat(get_argsa[2]);
    
    // Check if all arguments are valid numbers
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return reply(`Error: Pastikan Anda memasukkan tiga angka yang valid. Contoh: ${prefix + command} 1|5|6`);
    }
    
    // Calculate the discriminant (D = b^2 - 4ac)
    let discriminant = (b * b) - (4 * a * c);
    
    // Check the nature of the roots based on the discriminant
    if (discriminant > 0) {
        // Two real and distinct roots
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        reply(`Persamaan kuadrat memiliki dua akar real yang berbeda:\nAkar 1: ${root1}\nAkar 2: ${root2}`);
    } else if (discriminant === 0) {
        // One real root (double root)
        let root = -b / (2 * a);
        reply(`Persamaan kuadrat memiliki satu akar real (akar kembar):\nAkar: ${root}`);
    } else {
        // Complex roots
        let realPart = (-b / (2 * a)).toFixed(2);
        let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        reply(`Persamaan kuadrat memiliki dua akar kompleks:\nAkar 1: ${realPart} + ${imaginaryPart}i\nAkar 2: ${realPart} - ${imaginaryPart}i`);
    }
    break;

case 'setarakan': {
    if (args.length < 1) return reply(`Format salah! Gunakan: ${prefix}setarakan H2 + O2 → H2O`);

    const persamaan = args.join(" "); // Ambil input persamaan kimia
    let [leftSide, rightSide] = persamaan.split('='); // Pisahkan sisi kiri dan kanan
    leftSide = leftSide.trim();
    rightSide = rightSide.trim();

    // Deteksi unsur dan koefisien (perlu dikembangkan lebih lanjut untuk berbagai senyawa)
    let leftCompounds = leftSide.split('+').map(comp => comp.trim());
    let rightCompounds = rightSide.split('+').map(comp => comp.trim());

    // Di sini, kita lakukan perhitungan atau penyetaraan otomatis sesuai dengan sistem yang telah dijelaskan
    // Misalnya, untuk persamaan H2 + O2 → H2O
    if (leftCompounds.includes("H2") && leftCompounds.includes("O2") && rightCompounds.includes("H2O")) {
        let response = "✅ Persamaan yang telah diseimbangkan: \n2H2 + O2 → 2H2O";
        reply(response);
    } else {
        reply("❌ Tidak dapat menyetarakan persamaan ini secara otomatis. Coba persamaan yang lebih sederhana.");
    }
    break;
}
        
 case 'grafikkuadrat': {
    if (args.length !== 3) return reply(`Format salah!\nGunakan: ${prefix}grafikkuadrat a b c\nContoh: ${prefix}grafikkuadrat 1 -3 -4`);

    const [a, b, c] = args.map(Number);
    if (isNaN(a) || isNaN(b) || isNaN(c)) return reply("Pastikan semua parameter berupa angka.");

    let arah = a > 0 ? 'membuka ke atas (senyum 😊)' : 'membuka ke bawah (sedih 😢)';
    
    // Titik potong Y
    let titikY = c;

    // Akar-akar (titik potong X)
    let D = b * b - 4 * a * c;
    let akar = '';
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        akar = `Ada dua akar real berbeda:\nx₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    } else if (D === 0) {
        let x = -b / (2 * a);
        akar = `Ada satu akar real kembar:\nx = ${x.toFixed(2)}`;
    } else {
        akar = 'Tidak ada akar real (akar imajiner)';
    }

    // Sumbu simetri dan titik puncak
    let x_puncak = -b / (2 * a);
    let y_puncak = a * x_puncak * x_puncak + b * x_puncak + c;
    let sifat = a > 0 ? 'minimum' : 'maksimum';

    // Persamaan untuk WolframAlpha
    const persamaan = `y=${a}x^2${b >= 0 ? '+' : ''}${b}x${c >= 0 ? '+' : ''}${c}`;
    const encodedPersamaan = encodeURIComponent(persamaan);
    const wolframUrl = `https://www.wolframalpha.com/input?i=${encodedPersamaan}`;

    reply(`📊 *Grafik fungsi kuadrat* f(x) = ${a}x² + ${b}x + ${c}

🔹 Arah parabola: ${arah}
🔹 Titik potong sumbu-Y: (0, ${titikY})
🔹 Sumbu simetri: x = ${x_puncak.toFixed(2)}
🔹 Titik ${sifat}: (${x_puncak.toFixed(2)}, ${y_puncak.toFixed(2)})
🔹 Akar-akar: ${akar}

📈 *Klik di bawah untuk melihat grafik interaktif:*
🌐 ${wolframUrl}`);
    break;
}


/* case 'grafikkuadrat': {
    if (args.length < 3) {
        return reply(`Format salah!\nGunakan: ${prefix}kuadrat a b c\nContoh: ${prefix}kuadrat 1 -2 -3`);
    }

    let [a, b, c] = args.map(Number);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return reply("Pastikan semua parameter adalah angka.");
    }

    // Analisis kuadrat
    const arah = a > 0 ? "Grafik membuka ke atas 🔼" : "Grafik membuka ke bawah 🔽";
    const diskriminan = b*b - 4*a*c;
    const x1 = (-b + Math.sqrt(diskriminan)) / (2*a);
    const x2 = (-b - Math.sqrt(diskriminan)) / (2*a);
    const y = c;
    const xsumbu = -b / (2*a);
    const ypuncak = a * xsumbu * xsumbu + b * xsumbu + c;

    let akarInfo = "";
    if (diskriminan > 0) akarInfo = `Dua akar real: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    else if (diskriminan === 0) akarInfo = `Satu akar real: x = ${x1.toFixed(2)}`;
    else akarInfo = "Akar imajiner (tidak nyata)";

    // Kirim teks hasil analisis
    let info = `📈 *Analisis Fungsi Kuadrat*\n\n` +
        `${arah}\n` +
        `Titik potong Y: (0, ${y})\n` +
        `Sumbu simetri: x = ${xsumbu.toFixed(2)}\n` +
        `Titik puncak: (${xsumbu.toFixed(2)}, ${ypuncak.toFixed(2)})\n` +
        `${akarInfo}`;

    reply(info);

    // Bikin URL grafik dari quickchart.io
    let chartUrl = `https://quickchart.io/chart?c={type:'line',data:{labels:[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],datasets:[{label:'y = ${a}x² + ${b}x + ${c}',data:[${Array.from({length: 21}, (_, x) => {
        let xi = x - 10;
        let yi = a*xi*xi + b*xi + c;
        return yi.toFixed(2);
    }).join(",")}]}]}}`;

  //  Rafael.sendFile(m.chat, chartUrl, 'grafik.png', `🖼️ Grafik fungsi kuadratmu sudah jadi!`, m);
    Rafael.sendMessage(
                from,
                {
                    caption: 'Enhanced by GacorBot',
                    image: { url: chartUrl }
                },
                { quoted: mek }
            );

    break;
} */
        
case 'pecahan':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (args.length === 0) return reply(`Contoh: ${prefix + command} 1/2 + 3/4`);
	await reply(mess.wait);
    // Join args into a single string and split by spaces
    let inpust = args.join(" ");
    let [fraction1, operator, fraction2] = inpust.split(" ");

    // Parse each fraction
    let [num1, denom1] = fraction1.split("/").map(Number);
    let [num2, denom2] = fraction2.split("/").map(Number);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(denom1) || isNaN(num2) || isNaN(denom2)) {
        return reply(`Error: Pastikan Anda memasukkan format pecahan yang benar. Contoh: ${prefix + command} 1/2 + 3/4`);
    }

    let resultNum, resultDenom; // Numerator and denominator of the result

    // Perform the operation based on the operator
    switch (operator) {
        case '+':
            resultNum = (num1 * denom2) + (num2 * denom1);
            resultDenom = denom1 * denom2;
            break;
        case '-':
            resultNum = (num1 * denom2) - (num2 * denom1);
            resultDenom = denom1 * denom2;
            break;
        case '*':
            resultNum = num1 * num2;
            resultDenom = denom1 * denom2;
            break;
        case '/':
            resultNum = num1 * denom2;
            resultDenom = denom1 * num2;
            if (resultDenom === 0) return reply("Error: Pembagian dengan nol tidak diperbolehkan.");
            break;
        default:
            return reply(`Error: Operator tidak dikenali. Gunakan +, -, *, atau /. Contoh: ${prefix + command} 1/2 + 3/4`);
    }

    // Simplify the result fraction
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    let divisor = gcd(resultNum, resultDenom);
    resultNum /= divisor;
    resultDenom /= divisor;

    // Output the result
    reply(`Hasil: ${resultNum}/${resultDenom}`);
    break;

case 'logaritma':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} log 100, ${prefix + command} ln 2.718, atau ${prefix + command} 9log81`);
    }
	
    let input = args.join(" ");
    let result;
	await reply(mess.wait);
    // Check for base-10 or natural logarithms
    if (input.startsWith("log ")) {
        let value = parseFloat(input.split(" ")[1]);
        if (isNaN(value) || value <= 0) {
            return reply(`Error: Masukkan angka yang valid dan lebih besar dari 0. Contoh: ${prefix + command} log 100`);
        }
        result = Math.log10(value); // Base-10 logarithm
    } else if (input.startsWith("ln ")) {
        let value = parseFloat(input.split(" ")[1]);
        if (isNaN(value) || value <= 0) {
            return reply(`Error: Masukkan angka yang valid dan lebih besar dari 0. Contoh: ${prefix + command} ln 2.718`);
        }
        result = Math.log(value); // Natural logarithm (base e)
    } else if (input.includes("log")) {
        // Handling custom base logarithm (e.g., 9log81)
        let [base, value] = input.split("log").map(Number);
        if (isNaN(base) || isNaN(value) || base <= 0 || value <= 0 || base === 1) {
            return reply(`Error: Pastikan basis dan nilai adalah angka valid yang lebih besar dari 0, dan basis tidak boleh 1. Contoh: ${prefix + command} 9log81`);
        }
        // Calculate logarithm with custom base using the formula: log_base(value) = log_e(value) / log_e(base)
        result = Math.log(value) / Math.log(base);
    } else {
        return reply(`Error: Operasi tidak dikenali. Gunakan 'log' untuk logaritma basis 10, 'ln' untuk logaritma natural, atau 'base log value' untuk basis khusus. Contoh: ${prefix + command} log 100, ${prefix + command} ln 2.718, atau ${prefix + command} 9log81`);
    }

    // Output the result
    reply(`Hasil: ${result}`);
    break;
	
case 'luas':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} persegi 4, ${prefix + command} segitiga 5 10`);
    }

    let shape = args[0].toLowerCase();
    let parameters = args.slice(1).map(Number);
    let area;
	await reply(mess.wait);
    switch (shape) {
        case 'persegi': // Square
            if (parameters.length !== 1 || parameters[0] <= 0) return reply(`Error: Masukkan sisi yang valid. Contoh: ${prefix + command} persegi 4`);
            area = parameters[0] * parameters[0];
            break;

        case 'persegi_panjang': // Rectangle
            if (parameters.length !== 2 || parameters.some(param => param <= 0)) return reply(`Error: Masukkan panjang dan lebar yang valid. Contoh: ${prefix + command} persegi_panjang 5 10`);
            area = parameters[0] * parameters[1];
            break;

        case 'segitiga': // Triangle
            if (parameters.length !== 2 || parameters.some(param => param <= 0)) return reply(`Error: Masukkan alas dan tinggi yang valid. Contoh: ${prefix + command} segitiga 5 10`);
            area = 0.5 * parameters[0] * parameters[1];
            break;

        case 'lingkaran': // Circle
            if (parameters.length !== 1 || parameters[0] <= 0) return reply(`Error: Masukkan jari-jari yang valid. Contoh: ${prefix + command} lingkaran 7`);
            area = Math.PI * Math.pow(parameters[0], 2);
            break;

        case 'trapesium': // Trapezoid
            if (parameters.length !== 3 || parameters.some(param => param <= 0)) return reply(`Error: Masukkan sisi atas, sisi bawah, dan tinggi yang valid. Contoh: ${prefix + command} trapesium 5 7 4`);
            area = 0.5 * (parameters[0] + parameters[1]) * parameters[2];
            break;

        case 'jajar_genjang': // Parallelogram
            if (parameters.length !== 2 || parameters.some(param => param <= 0)) return reply(`Error: Masukkan alas dan tinggi yang valid. Contoh: ${prefix + command} jajar_genjang 8 5`);
            area = parameters[0] * parameters[1];
            break;

        default:
            return reply(`Error: Bangun datar tidak dikenali. Gunakan salah satu dari: persegi, persegi_panjang, segitiga, lingkaran, trapesium, jajar_genjang. Contoh: ${prefix + command} persegi 4`);
    }

    // Output the result
    reply(`Hasil: Luas ${shape} adalah ${area}`);
    break;
                
case 'keliling':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} persegi 4, ${prefix + command} segitiga 3 4 5`);
    }

    let shapee = args[0].toLowerCase();
    let perimeter;
	await reply(mess.wait);
    // Extract parameters as numbers and handle any existing `parameters` declaration issues
    let shapeParameters = args.slice(1).map(Number);

    switch (shapee) {
        case 'persegi': // Square
            if (shapeParameters.length !== 1 || shapeParameters[0] <= 0) {
                return reply(`Error: Masukkan sisi yang valid. Contoh: ${prefix + command} persegi 4`);
            }
            perimeter = 4 * shapeParameters[0];
            break;

        case 'persegi_panjang': // Rectangle
            if (shapeParameters.length !== 2 || shapeParameters.some(param => param <= 0)) {
                return reply(`Error: Masukkan panjang dan lebar yang valid. Contoh: ${prefix + command} persegi_panjang 5 10`);
            }
            perimeter = 2 * (shapeParameters[0] + shapeParameters[1]);
            break;

        case 'segitiga': // Triangle
            if (shapeParameters.length !== 3 || shapeParameters.some(param => param <= 0)) {
                return reply(`Error: Masukkan tiga sisi yang valid. Contoh: ${prefix + command} segitiga 3 4 5`);
            }
            perimeter = shapeParameters[0] + shapeParameters[1] + shapeParameters[2];
            break;

        case 'lingkaran': // Circle
            if (shapeParameters.length !== 1 || shapeParameters[0] <= 0) {
                return reply(`Error: Masukkan jari-jari yang valid. Contoh: ${prefix + command} lingkaran 7`);
            }
            perimeter = 2 * Math.PI * shapeParameters[0];
            break;

        case 'trapesium': // Trapezoid
            if (shapeParameters.length !== 4 || shapeParameters.some(param => param <= 0)) {
                return reply(`Error: Masukkan keempat sisi yang valid. Contoh: ${prefix + command} trapesium 5 7 4 6`);
            }
            perimeter = shapeParameters[0] + shapeParameters[1] + shapeParameters[2] + shapeParameters[3];
            break;

        case 'jajar_genjang': // Parallelogram
            if (shapeParameters.length !== 2 || shapeParameters.some(param => param <= 0)) {
                return reply(`Error: Masukkan dua sisi (alas dan sisi miring) yang valid. Contoh: ${prefix + command} jajar_genjang 8 5`);
            }
            perimeter = 2 * (shapeParameters[0] + shapeParameters[1]);
            break;

        default:
            return reply(`Error: Bangun datar tidak dikenali. Gunakan salah satu dari: persegi, persegi_panjang, segitiga, lingkaran, trapesium, jajar_genjang. Contoh: ${prefix + command} persegi 4`);
    }

    // Output the result
    reply(`Hasil: Keliling ${shapee} adalah ${perimeter}`);
    break;
                
case 'volume':if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} kubus 4, ${prefix + command} balok 5 10 8`);
    }
	await reply(mess.wait);
    let shape3D = args[0].toLowerCase();
    let volume;

    // Extract parameters as numbers outside the switch statement
    const shapeParams = args.slice(1).map(Number);

    switch (shape3D) {
        case 'kubus': // Cube
            if (shapeParams.length !== 1 || shapeParams[0] <= 0) {
                return reply(`Error: Masukkan sisi yang valid. Contoh: ${prefix + command} kubus 4`);
            }
            volume = Math.pow(shapeParams[0], 3);
            break;

        case 'balok': // Rectangular Prism
            if (shapeParams.length !== 3 || shapeParams.some(param => param <= 0)) {
                return reply(`Error: Masukkan panjang, lebar, dan tinggi yang valid. Contoh: ${prefix + command} balok 5 10 8`);
            }
            volume = shapeParams[0] * shapeParams[1] * shapeParams[2];
            break;

        case 'bola': // Sphere
            if (shapeParams.length !== 1 || shapeParams[0] <= 0) {
                return reply(`Error: Masukkan jari-jari yang valid. Contoh: ${prefix + command} bola 7`);
            }
            volume = (4 / 3) * Math.PI * Math.pow(shapeParams[0], 3);
            break;

        case 'tabung': // Cylinder
            if (shapeParams.length !== 2 || shapeParams.some(param => param <= 0)) {
                return reply(`Error: Masukkan jari-jari dan tinggi yang valid. Contoh: ${prefix + command} tabung 7 10`);
            }
            volume = Math.PI * Math.pow(shapeParams[0], 2) * shapeParams[1];
            break;

        case 'kerucut': // Cone
            if (shapeParams.length !== 2 || shapeParams.some(param => param <= 0)) {
                return reply(`Error: Masukkan jari-jari dan tinggi yang valid. Contoh: ${prefix + command} kerucut 7 10`);
            }
            volume = (1 / 3) * Math.PI * Math.pow(shapeParams[0], 2) * shapeParams[1];
            break;

        case 'limas': // Pyramid (square base)
            if (shapeParams.length !== 2 || shapeParams.some(param => param <= 0)) {
                return reply(`Error: Masukkan sisi alas dan tinggi yang valid. Contoh: ${prefix + command} limas 6 10`);
            }
            volume = (1 / 3) * Math.pow(shapeParams[0], 2) * shapeParams[1];
            break;

        default:
            return reply(`Error: Bangun ruang tidak dikenali. Gunakan salah satu dari: kubus, balok, bola, tabung, kerucut, limas. Contoh: ${prefix + command} kubus 4`);
    }

    // Output the result
    reply(`Hasil: Volume ${shape3D} adalah ${volume}`);
    break;
case 'trigonometri': {
    if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
	if (!text) return reply('Masukkan perintah dengan format #trigonometri [sin/cos/tan] [sudut dalam derajat].\nContoh: #trigonometri sin 30');
	await reply(mess.wait);
    // Memisahkan perintah dan parameter
    let args = text.split(' ');
    let operation = args[0].toLowerCase(); // Operasi yang diinginkan (sin/cos/tan)
    let angle = parseFloat(args[1]); // Sudut dalam derajat

    // Validasi input
    if (isNaN(angle)) return reply('Sudut tidak valid. Pastikan memasukkan angka sebagai sudut.');

    // Konversi sudut dari derajat ke radian
    let angleInRadians = angle * (Math.PI / 180);

    // Hitung hasil berdasarkan operasi yang diminta
    let result;
	
    switch (operation) {
        case 'sin':
            result = Math.sin(angleInRadians);
            break;
        case 'cos':
            result = Math.cos(angleInRadians);
            break;
        case 'tan':
            result = Math.tan(angleInRadians);
            break;
        default:
            return reply('Operasi tidak valid. Hanya mendukung sin, cos, atau tan.');
    }

    // Kirimkan hasilnya
    reply(`Hasil ${operation}(${angle}°) adalah: ${result}`);
	}
	break;

case 'spltv': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} 1,3,2,16|2,4,-2,12|1,1,4,20|x`);
    }

    reply(mess.wait);  // Kirim pesan "Mohon tunggu" terlebih dahulu
    await delay(1000);  // Menunggu 1 detik sebelum melanjutkan
    // Memisahkan input menggunakan | dan mengurai menjadi array
    let get_args = args.join(" ").split("|");
    // Memastikan ada minimal 3 persamaan
    if (get_args.length < 3) {
        return reply(`Format tidak sesuai. Contoh: ${prefix + command} 1,3,2,16|2,4,-2,12|1,1,4,20|x`);
    }
    // Mengurai persamaan dan parameter yang dicari
    let eq1 = get_args[0].split(",");
    let eq2 = get_args[1].split(",");
    let eq3 = get_args[2].split(",");
    let variable = get_args[3] ? get_args[3].toLowerCase() : null;  // variabel yang dicari (x, y, atau z)
    // Memastikan bahwa setiap persamaan memiliki 4 parameter (koefisien x, y, z dan konstanta)
    if (eq1.length !== 4 || eq2.length !== 4 || eq3.length !== 4) {
        return reply('Format tidak sesuai. Pastikan setiap persamaan memiliki 4 parameter (koefisien x, y, z dan konstanta)');
    }
    // Mengambil koefisien dan konstanta dari setiap persamaan
    const a1 = parseFloat(eq1[0]), b1 = parseFloat(eq1[1]), c1 = parseFloat(eq1[2]), d1 = parseFloat(eq1[3]);
    const a2 = parseFloat(eq2[0]), b2 = parseFloat(eq2[1]), c2 = parseFloat(eq2[2]), d2 = parseFloat(eq2[3]);
    const a3 = parseFloat(eq3[0]), b3 = parseFloat(eq3[1]), c3 = parseFloat(eq3[2]), d3 = parseFloat(eq3[3]);
    // Matriks augmented [A|B] dari persamaan linear
    const matrix = [
        [a1, b1, c1, d1],
        [a2, b2, c2, d2],
        [a3, b3, c3, d3]
    ];
    // Fungsi untuk menyelesaikan sistem persamaan menggunakan eliminasi Gauss-Jordan
    function gaussJordan(matrix) {
        const n = matrix.length;
        for (let i = 0; i < n; i++) {
            // Mencari baris pivot
            let maxRow = i;
            for (let j = i + 1; j < n; j++) {
                if (Math.abs(matrix[j][i]) > Math.abs(matrix[maxRow][i])) {
                    maxRow = j;
                }
            }
            // Menukar baris
            [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
            // Normalisasi baris pivot
            const pivot = matrix[i][i];
            if (pivot === 0) return 'tidak terdefinisi'; // Jika pivot 0, sistem tidak dapat diselesaikan
            for (let j = i; j < n + 1; j++) {
                matrix[i][j] /= pivot;
            }
            // Eliminasi elemen di bawah dan di atas pivot
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    const factor = matrix[j][i];
                    for (let k = i; k < n + 1; k++) {
                        matrix[j][k] -= factor * matrix[i][k];
                    }
                }
            }
        }
        // Memeriksa solusi
        const solution = matrix.map(row => row[n]);
        if (solution.includes(Infinity) || solution.includes(NaN)) return 'tidak terhingga'; // Jika solusi tidak terbatas
        return solution;
    }
    // Menyelesaikan persamaan menggunakan Gauss-Jordan
    const result = gaussJordan(matrix);
    if (Array.isArray(result)) {
        if (!variable) {
            // Jika tidak ada variabel yang diminta, tampilkan semua hasil
            reply(`Hasil persamaan linear tersebut adalah:\n x = ${result[0]}\n y = ${result[1]}\n z = ${result[2]}`);
        } else {
            // Jika variabel yang dicari ada, tampilkan nilai variabel tersebut
            if (variable === 'x') {
                reply(`Hasil untuk x adalah: ${result[0]}`);
            } else if (variable === 'y') {
                reply(`Hasil untuk y adalah: ${result[1]}`);
            } else if (variable === 'z') {
                reply(`Hasil untuk z adalah: ${result[2]}`);
            } else {
                reply('Variabel yang dicari tidak valid. Harap pilih x, y, atau z.');
            }
        }
    } else {
        reply(result);  // Output jika hasilnya tidak terhingga atau tidak terdefinisi
    }
}
break;	
        
case 'fpb': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} 6|8`);
    }

    reply(mess.wait);  // Kirim pesan "Mohon tunggu" terlebih dahulu
    await delay(1000);  // Menunggu 1 detik sebelum melanjutkan
    // Memisahkan input berdasarkan |
    let numbers = args.join(" ").split("|").map(num => parseInt(num.trim()));
    // Memastikan semua input adalah angka
    if (numbers.some(isNaN)) {
        return reply('Pastikan semua input berupa angka yang valid. Contoh: .fpb 6|8|10');
    }
    // Fungsi untuk mencari FPB menggunakan algoritma Euclidean
    function findGCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    // Menghitung FPB dari array angka
    let gcd = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        gcd = findGCD(gcd, numbers[i]);
    }
    reply(`FPB dari angka ${numbers.join(', ')} adalah: ${gcd}`);
}
break;

case 'kpk': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} 6|8`);
    }
    reply(mess.wait);  // Kirim pesan "Mohon tunggu" terlebih dahulu
    await delay(1000);  // Menunggu 1 detik sebelum melanjutkan
    // Memisahkan input berdasarkan |
    let numbers = args.join(" ").split("|").map(num => parseInt(num.trim()));
    // Memastikan semua input adalah angka
    if (numbers.some(isNaN)) {
        return reply('Pastikan semua input berupa angka yang valid. Contoh: .kpk 6|8|10');
    }
    // Fungsi untuk mencari FPB menggunakan algoritma Euclidean
    function findGCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    // Fungsi untuk mencari KPK menggunakan rumus KPK(a, b) = |a * b| / FPB(a, b)
    function findLCM(a, b) {
        return Math.abs(a * b) / findGCD(a, b);
    }
    // Menghitung KPK dari array angka
    let lcm = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        lcm = findLCM(lcm, numbers[i]);
    }
    reply(`KPK dari angka ${numbers.join(', ')} adalah: ${lcm}`);
}
break;

case 'kombinasi':
case 'permutasi': {
    if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (args.length < 2) {
        return reply(`Usage:\n${prefix + command} n r\nExample: ${prefix + command} 5 3`);
    }
	await reply(mess.wait);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const n = parseInt(args[0]);
    const r = parseInt(args[1]);

    if (isNaN(n) || isNaN(r) || n < r || n < 0 || r < 0) {
        return reply(`Invalid input. Make sure n >= r and both n and r are non-negative integers.`);
    }

    function factorial(num) {
        if (num <= 1) return 1;
        return num * factorial(num - 1);
    }

    if (command === 'kombinasi') {
        // Kombinasi: nCr = n! / (r! * (n - r)!)
        const kombinasi = factorial(n) / (factorial(r) * factorial(n - r));
        return reply(`Kombinasi (${n}C${r}) = ${kombinasi}`);
    } else if (command === 'permutasi') {
        // Permutasi: nPr = n! / (n - r)!
        const permutasi = factorial(n) / factorial(n - r);
        return reply(`Permutasi (${n}P${r}) = ${permutasi}`);
    }
}
break;
        
case 'hitungusia': {
    if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
    if (!args[0]) {
        return reply(`Usage: ${prefix}hitungusia [dd-mm-yyyy]\nExample: ${prefix}hitungusia 15-08-2000`);
    }
	await reply(mess.wait);
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Ambil tanggal lahir dari argumen
    const tanggalLahir = args[0].split("-");
    if (tanggalLahir.length !== 3) {
        return reply(`Format tanggal salah. Pastikan formatnya [dd-mm-yyyy].`);
    }

    const [day, month, year] = tanggalLahir.map(num => parseInt(num));

    // Validasi input tanggal
    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month <= 0 || year <= 0 || month > 12 || day > 31) {
        return reply(`Tanggal tidak valid. Pastikan formatnya benar dan tanggalnya masuk akal.`);
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    // Cek apakah tanggal lahir valid
    if (birthDate > today) {
        return reply(`Tanggal lahir tidak bisa lebih dari tanggal sekarang.`);
    }

    // Hitung usia dalam tahun
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Koreksi usia jika bulan atau hari negatif
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Ambil jumlah hari dari bulan sebelumnya
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    reply(`Usia kamu adalah ${ageYears} tahun ${ageMonths} bulan ${ageDays} hari.`);
}
break;
//End of Math Menu

//Alkitab Menu by ShinySebastian
case 'alkitab': {
    let listbah = `Example: ${prefix + command} tb kej 12 3
    Example: ${prefix + command} tb kej 12 3-5
    Example: ${prefix + command} tb kej 12 (ambil seluruh pasal)

List Bahasa:
av (King James Version)
tb (Alkitab Terjemahan Baru)
tl (Alkitab Terjemahan Lama)
bis (Bahasa Indonesia Sehari-hari)
tsi (Terjemahan Sederhana Indonesia)
net (New English Translation)
niv (New International Version)
toba (Alkitab Terjemahan Batak Toba)
karo (Alkitab Terjemahan Batak Karo)
jawa (Alkitab Terjemahan Jawa)
bali (Alkitab Terjemahan Bali)
aceh (Alkitab Terjemahan Aceh)`;

    if (args.length == 0) return reply(listbah);

    var bahasa = args[0]; // Ambil bahasa dari argumen pertama
    var alamak = args[1]; // Kitab
    var meong = args[2]; // Pasal
    var ayatRange = args[3]; // Ayat atau rentang ayat (opsional)

    try {
        // Fetch data dari API untuk satu pasal penuh
        let url = `https://beeble.vercel.app/api/v1/passage/${alamak}/${meong}?ver=${bahasa}`;
        let doto = await fetchJson(url);

        // Struktur pesan balasan
        var meow = `[ *ALKITAB DARI ${doto.data.book.name} ${doto.data.book.chapter}${ayatRange ? ':' + ayatRange : ''}* ]\n\n`;

        if (ayatRange) {
            if (ayatRange.includes('-')) {
                // Jika rentang ayat (contoh: 3-5)
                let [start, end] = ayatRange.split('-').map(n => parseInt(n, 10));
                let versesInRange = doto.data.verses.filter(v => v.verse >= start && v.verse <= end);

                if (versesInRange.length > 0) {
                    for (var x of versesInRange) {
                        meow += `[${x.verse}] ${x.content}\n\n`;
                    }
                } else {
                    meow += `Ayat ${ayatRange} tidak ditemukan dalam pasal ${meong}.\n`;
                }
            } else {
                // Jika hanya satu ayat (contoh: 3)
                let specificVerse = doto.data.verses.find(v => v.verse === parseInt(ayatRange, 10));
                if (specificVerse) {
                    meow += `[${specificVerse.verse}] ${specificVerse.content}\n\n`;
                } else {
                    meow += `Ayat ${ayatRange} tidak ditemukan dalam pasal ${meong}.\n`;
                }
            }
        } else {
            // Jika tidak ada ayat spesifik, tampilkan seluruh pasal
            for (var x of doto.data.verses) {
                if (x.verse === 0 && x.type === "title") {
                    meow += `*${x.content}*\n\n`; // Tambahkan judul dengan huruf tebal
                } else {
                    meow += `[${x.verse}] ${x.content}\n\n`; // Tambahkan ayat biasa
                }
            }
        }

        await reply(meow);
    } catch (error) {
        reply(`Error: Tidak dapat mengambil data. Periksa format atau pastikan kitab, pasal, dan ayat benar.`);
    }
    break;
}
//End of Alkitab MENU
   
//Islami Menu (added 11/01/25)
 case 'jadwalshalat': case 'jadwalsholat': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    const city = args[0]; // Mengambil nama kota dari argumen
    if (!city) {
        return reply(`Contoh penggunaan: ${prefix + command} cilacap`);
    }

    const apiUrl = `https://api.betabotz.eu.org/api/tools/jadwalshalat?kota=${encodeURIComponent(city)}&apikey=${apikey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result) {
            const result = data.result.data[0];
            const timings = result.timings;
            const dateInfo = result.date;
            const hijriInfo = dateInfo.hijri;

            // Format pesan jadwal sholat
            const message = `
*Jadwal Sholat untuk ${city.toUpperCase()}* 📅
Tanggal: ${dateInfo.readable} (${hijriInfo.date} ${hijriInfo.month.en} ${hijriInfo.year} AH)
Zona Waktu: ${result.meta.timezone}

🕌 *Imsak*: ${timings.Imsak}
🕌 *Fajar*: ${timings.Fajr}
🌅 *Sunrise*: ${timings.Sunrise}
🕌 *Dzuhur*: ${timings.Dhuhr}
🕌 *Ashar*: ${timings.Asr}
🌇 *Sunset*: ${timings.Sunset}
🕌 *Maghrib*: ${timings.Maghrib}
🕌 *Isya*: ${timings.Isha}
🌌 *Midnight*: ${timings.Midnight}

📍 Latitude: ${result.meta.latitude}
📍 Longitude: ${result.meta.longitude}
Metode: ${result.meta.method.name}
            `.trim();

            // Kirim pesan menggunakan Rafael.sendMessage
            await Rafael.sendMessage(m.chat, { text: message }, { quoted: m });
        } else {
            reply('Gagal mendapatkan jadwal sholat. Pastikan nama kota benar dan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;
        
case 'listsurah': {
    try {
        // URL API
        const url = `https://api.lolhuman.xyz/api/quran?apikey=${apikey}`;

        // Fetch data dari API
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 200) {
            return reply('Terjadi kesalahan dalam mengambil data daftar surah.');
        }

        const surahList = data.result;
        let message = `*📜 Daftar Surah Al-Qur'an*\n\n`;

        // Loop daftar surah
        for (let [key, value] of Object.entries(surahList)) {
            message += `*${key}.* ${value}\n`;
        }

        message += `\nGunakan perintah *.surah <nomor_surah>* untuk membaca surah.\nContoh: *.surah 1* untuk membaca Al-Fatihah.`;

        // Kirimkan pesan dengan daftar surah
        await Rafael.sendMessage(m.chat, { text: message }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengambil data daftar surah. Silakan coba lagi nanti.');
    }
    break;
}
     
case 'surah': {
    // Tampilkan contoh penggunaan jika tidak ada argumen yang diberikan
    let usageExample = `Contoh penggunaan:
    ${prefix + command} 18
    ${prefix + command} 18 1
    ${prefix + command} 18 1-2
Gunakan .listsurah untuk menampilkan daftar surah`;
    
    if (args.length === 0) return reply(usageExample);

    // Ambil nomor surah dan rentang ayat dari argumen
    let surahNumber = args[0];
    let ayatRange = args[1]; // Ayat atau rentang ayat (opsional)

    try {
        // Fetch data dari API
        let url = `https://api.lolhuman.xyz/api/quran/${surahNumber}?apikey=${apikey}`;
        let response = await fetch(url);
        let data = await response.json();

        if (data.status !== 200) {
            return reply('Terjadi kesalahan dalam mengambil data. Pastikan nomor surah yang dimasukkan benar.');
        }

        let surah = data.result;
        let message = `*${surah.surah} (${surah.asma})*\n\n`;

        // Fungsi untuk mengirim audio
            await Rafael.sendMessage(m.chat, { 
                audio: { url: surah.audio }, 
                mimetype: 'audio/mp4', 
                fileName: `surah.mp3`
            }, { quoted: m });

        if (ayatRange) {
            if (ayatRange.includes('-')) {
                // Jika rentang ayat (contoh: 1-2)
                let [start, end] = ayatRange.split('-').map(n => parseInt(n, 10));
                let ayatDitemukan = false;

                for (let ayat of surah.ayat) {
                    if (ayat.ayat >= start && ayat.ayat <= end) {
                        message += `*[${ayat.ayat}]*\n${ayat.arab}\n_${ayat.latin}_\n${ayat.indonesia}\n\n`;
                       
                        ayatDitemukan = true;
                    }
                }

                if (!ayatDitemukan) {
                    message += `Ayat ${ayatRange} tidak ditemukan dalam surah ${surah.surah}.`;
                }
            } else {
                // Jika hanya satu ayat (contoh: 1)
                let ayatNomor = parseInt(ayatRange, 10);
                let ayat = surah.ayat.find(a => a.ayat === ayatNomor);

                if (ayat) {
                    message += `*[${ayat.ayat}]*\n${ayat.arab}\n_${ayat.latin}_\n${ayat.indonesia}\n\n`;
                
                } else {
                    message += `Ayat ${ayatRange} tidak ditemukan dalam surah ${surah.surah}.`;
                }
            }
        } else {
            // Jika tidak ada ayat spesifik, tampilkan seluruh surah
            for (let ayat of surah.ayat) {
                message += `*[${ayat.ayat}]*\n${ayat.arab}\n_${ayat.latin}_\n${ayat.indonesia}\n\n`;
               
            }
        }

        await reply(message);
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan dalam mengambil data. Pastikan format perintah benar dan nomor surah serta ayat valid.');
    }
    break;
}

case 'hadis':
case 'hadist': {
                if (!args[0]) return reply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
                if (!args[1]) return reply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let {
                        number,
                        arab,
                        id
                    } = res.find(v => v.number == args[1])
                    reply(`No. ${number}

${arab}
${id}`)
                } catch (e) {
                    reply(`Hadis tidak ditemukan !`)
                }
            }
            break
//End of Islami Menu
        
//Searcher Menu (added 10/01/25)
        
case 'translate':{
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
			if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
			reply(mess.wait)
			var kodeNegara = args[0]
			args.shift()
			var teksTranslate = args.join(' ')
			dhata = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kodeNegara}?apikey=${apikey}&text=${teksTranslate}`)
			init_txt = `From : ${dhata.result.from}\n`
			init_txt += `To : ${dhata.result.to}\n`
			init_txt += `Original : ${dhata.result.original}\n`
			init_txt += `Translated : ${dhata.result.translated}\n`
			init_txt += `Pronunciation : ${dhata.result.pronunciation}\n`
			reply(init_txt)
			}
			break
        
case 'pinterest': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Memeriksa apakah ada parameter yang diberikan
    if (m.text.split(' ').length < 2) {
        return reply('Format salah! Penggunaan: .pinterest query');
    }

    let query = m.text.split(' ')[1]; // Ambil query pencarian
    const pinterestApiUrl = `https://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${encodeURIComponent(query)}`;

    // Menyimpan query pencarian untuk penggunaan selanjutnya
    global.db.users[m.sender].lastPinterestQuery = query;
    global.db.users[m.sender].lastPinterestPage = 0; // Reset halaman pencarian

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API pertama kali
        const response = await fetch(pinterestApiUrl);
        const json = await response.json();

        // Memeriksa apakah status API sukses
        if (json.status === 200) {
            // Menyimpan hasil pertama dalam data pengguna
            global.db.users[m.sender].lastPinterestResult = json.result;

            // Mengirimkan gambar dari hasil pencarian pertama
            Rafael.sendMessage(m.chat, {
                image: { url: json.result },
                caption: `Hasil pencarian Pinterest untuk "${query}" 😍\n\nBalas dengan .pnext untuk gambar selanjutnya!`
            }, { quoted: m });
        } else {
            reply('Tidak ditemukan hasil untuk pencarian ini.');
        }

    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break;

 case 'googleimage': case 'gimage': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Memeriksa apakah ada parameter yang diberikan
    if (m.text.split(' ').length < 2) {
        return reply('Format salah! Penggunaan: .googleimage query');
    }

    let query = m.text.split(' ')[1]; // Ambil query pencarian
    const googleImageUrl = `https://api.lolhuman.xyz/api/gimage?apikey=${apikey}&query=${encodeURIComponent(query)}`;

    // Menyimpan query pencarian untuk penggunaan selanjutnya
    global.db.users[m.sender].lastGoogleImageQuery = query;
    global.db.users[m.sender].lastGoogleImagePage = 0; // Reset halaman pencarian

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API pertama kali
        const response = await fetch(googleImageUrl);
        const buffer = await response.buffer();

        // Mengirimkan gambar dari hasil pencarian pertama
        Rafael.sendMessage(m.chat, {
            image: buffer,
            caption: `Hasil pencarian Google Images untuk "${query}" 📷\n\nBalas dengan .next untuk gambar selanjutnya!`
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break
        
case 'pnext': {
    if (!global.db.users[m.sender].lastPinterestQuery) {
        return reply('Kamu belum melakukan pencarian Pinterest. Gunakan .pinterest [query] terlebih dahulu.');
    }

    let query = global.db.users[m.sender].lastPinterestQuery;
    let currentPage = global.db.users[m.sender].lastPinterestPage || 0;
    const pinterestApiUrl = `https://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${encodeURIComponent(query)}&page=${currentPage + 1}`;

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API untuk mendapatkan gambar selanjutnya
        const response = await fetch(pinterestApiUrl);
        const json = await response.json();

        // Memeriksa apakah status API sukses
        if (json.status === 200) {
            // Mengupdate halaman dan hasil gambar
            global.db.users[m.sender].lastPinterestPage = currentPage + 1;
            global.db.users[m.sender].lastPinterestResult = json.result;

            // Mengirimkan gambar berikutnya
            Rafael.sendMessage(m.chat, {
                image: { url: json.result },
                caption: `Hasil pencarian Pinterest selanjutnya untuk "${query}" 😍\n\nBalas dengan .gnext untuk gambar berikutnya!`
            }, { quoted: m });
        } else {
            reply('Tidak ada hasil lebih lanjut untuk pencarian ini.');
        }

    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break;

case 'gnext': {
    if (!global.db.users[m.sender].lastGoogleImageQuery) {
        return reply('Kamu belum melakukan pencarian Google Images. Gunakan .googleimage [query] terlebih dahulu.');
    }

    let query = global.db.users[m.sender].lastGoogleImageQuery;
    let currentPage = global.db.users[m.sender].lastGoogleImagePage || 0;
    const googleImageUrl = `https://api.lolhuman.xyz/api/gimage?apikey=${apikey}&query=${encodeURIComponent(query)}&page=${currentPage + 1}`;

    try {
        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API untuk mendapatkan gambar selanjutnya
        const response = await fetch(googleImageUrl);
        const buffer = await response.buffer();

        // Mengupdate halaman dan hasil gambar
        global.db.users[m.sender].lastGoogleImagePage = currentPage + 1;

        // Mengirimkan gambar berikutnya
        Rafael.sendMessage(m.chat, {
            image: buffer,
            caption: `Hasil pencarian Google Images selanjutnya untuk "${query}" 📷\n\nBalas dengan .next untuk gambar berikutnya!`
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan koneksi stabil dan coba lagi.');
    }
}
break;
        
case 'wiki': case 'wikipedia': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    const query = args.join(' '); // Mengambil query pencarian dari argumen

    if (!query) {
        return reply('Contoh: ' + prefix + command + ' Pohon');
    }

    const apiUrl = `https://api.betabotz.eu.org/api/search/wikipedia?text=${encodeURIComponent(query)}&apikey=${apikey}`;

    // Mengirim pesan 'wait' dengan delay
    await reply(mess.wait);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result) {
            const result = data.result;

            // Menampilkan hasil pencarian Wikipedia
            const resultMessage = `
*Judul:* ${result.title}
*Isi:* ${result.isi}
            `;

            // Mengirimkan thumbnail dengan Rafael.sendMessage
            await Rafael.sendMessage(
                from,
                {
                    caption: resultMessage,
                    image: { url: result.thumb }
                },
                { quoted: mek }
            );

        } else {
            reply('Tidak ada hasil ditemukan untuk pencarian ini.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;

case 'gempa': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengambil URL API BMKG
    const apiUrl = `https://api.betabotz.eu.org/api/search/gempa?apikey=${apikey}`;

    // Mengirim pesan 'wait' dengan delay
    await reply(mess.wait);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result) {
            const result = data.result.result;

            // Menyusun pesan informasi gempa
            const gempaMessage = `
*Tanggal:* ${result.tanggal}
*Jam:* ${result.jam}
*Lintang:* ${result.Lintang}
*Bujur:* ${result.Bujur}
*Magnitudo:* ${result.Magnitudo}
*Kedalaman:* ${result.Kedalaman}
*Potensi:* ${result.Potensi}
*Wilayah:* ${result.Wilayah}
*Waktu:* ${result.waktu}
            `;

            // Mengirim gambar peta lokasi gempa
            await Rafael.sendMessage(
                from,
                {
                    caption: gempaMessage,
                    image: { url: result.image }
                },
                { quoted: mek }
            );

        } else {
            reply('Tidak ada informasi gempa yang dapat ditemukan.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;

 case 'spotifysearch': { //Spotify search case
    if (args.length === 0) {
        return reply(`Format salah. Gunakan format: ${prefix}spotifysearch [query]`);
    }

    const query = args.join(' ');
    const apiKey = 'yangjunming';
    const url = `https://api.betabotz.eu.org/api/search/spotify?query=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
        const response = await fetchJson(url);

        if (response.status && response.result && response.result.data.length > 0) {
            let resultList = `Hasil pencarian untuk '${query}':\n\n`;

            response.result.data.forEach((track, index) => {
                resultList += `${index + 1}. *${track.title}*\n   Durasi: ${track.duration} | Popularitas: ${track.popularity}\n\n`;
            });

            resultList += `\nBalas pesan ini dan ketik "${prefix}spotifydw [nomor]" untuk mendownload lagu yang diinginkan.`;

            // Simpan data hasil pencarian ke variabel global
            global.spotifySearchResults = response.result.data;
            reply(resultList);
        } else {
            reply(`Tidak ditemukan hasil untuk '${query}'.`);
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengambil data. Silakan coba lagi.');
    }
}
break;
        
case 'youtubesearch':
    try {
        if (args.length == 0) return reply(`Usage: ${prefix + command} query`);
        m.reply('🔎 Searching YouTube, please wait...');

        let query = args.join(' ');
        let searchResult = await fetchJson(`https://api.betabotz.eu.org/api/search/yts?query=${encodeURIComponent(query)}&apikey=${apikey}`);
        let videos = searchResult.result;

        if (!videos || videos.length === 0) return reply('❌ No results found!');

        // Bersihkan URL & simpan ke cache
        videos = videos.map(video => {
            video.cleanUrl = video.url.split('&')[0];
            return video;
        });

        let listMessage = '📺 *YouTube Search Results:*\n\n';
        videos.forEach((video, index) => {
            let cleanUrl = video.cleanUrl;
            listMessage += `${index + 1}. *${video.title}*\n`;
            listMessage += `   Duration: ${video.duration}\n`;
            listMessage += `   Description: ${video.description || '-'}\n`;
            listMessage += `   Link: ${cleanUrl}\n\n`;
        });

        reply(listMessage);

        // Simpan ke cache global
        global.youtubeSearchCache = videos;

    } catch (e) {
        console.error(e);
        reply('⚠️ Error occurred while searching YouTube. Coba lagi nanti atau cek API.');
    }
    break;


case 'google': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} Pohon`);
    }

    const query = args.join(" ");  // Gabungkan argumen menjadi satu string query
    const apiUrl = `https://api.betabotz.eu.org/api/search/google?text1=${encodeURIComponent(query)}&apikey=${apikey}`;

    // Menggunakan fetch untuk mendapatkan response dari API
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result.length > 0) {
            let resultMessage = 'Hasil pencarian Google:\n\n';
            data.result.forEach((item, index) => {
                resultMessage += `${index + 1}. [${item.title}]  (${item.url})\n${item.description}\n\n`;
            });
            reply(resultMessage);
        } else {
            reply('Tidak ditemukan hasil pencarian yang relevan.');
        }
    } catch (error) {
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;

case 'chord': {
    if (!args[0]) {
        return reply(`Format salah. Gunakan format: ${prefix}chord [judul lagu]. Contoh: ${prefix}chord melukis senja`);
    }

    const query = args.join(' ');
    const apiKey = 'yangjunming';
    const url = `https://api.lolhuman.xyz/api/chord?apikey=${apiKey}&query=${encodeURIComponent(query)}`;

    try {
        // Mengambil data dari API
        const response = await fetchJson(url);

        if (response.status === 200 && response.result) {
            const { title, chord } = response.result;

            const message = `🎸 *Chord Gitar*\n\n*Judul:* ${title}\n\n${chord}\n\nSelamat bermain gitar, rek! 😊`;
            reply(message);
        } else {
            reply('Maaf, chord tidak ditemukan untuk lagu tersebut. Pastikan judul lagu sudah benar.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengambil data. Silakan coba lagi nanti.');
    }
    break;
}
        
case 'lirik': case 'lyrics': case 'lyric': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} Bawa Dia Kembali`);
    }

    const query = args.join(" ");  // Gabungkan argumen menjadi satu string query
    const apiUrl = `https://api.betabotz.eu.org/api/search/lirik?lirik=${encodeURIComponent(query)}&apikey=${apikey}`;

    // Menggunakan fetch untuk mendapatkan response dari API
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result) {
            const { lyrics, title, artist, image, url } = data.result;

            const resultMessage = `
Lirik Lagu: *${title}* (${url})
Artis: *${artist}* (${data.result.artistUrl})
Tanggal Rilis: ${data.result.releaseDateForDisplay}

${lyrics}
            `;

            // Mengirim pesan dengan gambar dan caption
            await Rafael.sendMessage(m.chat, { 
                image: { url: image }, 
                caption: resultMessage
            }, { quoted: fVerif });
        } else {
            reply('Lirik lagu tidak ditemukan.');
        }
    } catch (error) {
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;

case 'gsmarena': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengambil query untuk pencarian HP
    const query = args.join(" ");  // Gantilah dengan query yang sesuai dari pengguna

    // URL API GSMArena
    const apiUrl = `https://api.betabotz.eu.org/api/webzone/gsmarena?query=${encodeURIComponent(query)}&apikey=${apikey}`;

    // Mengirim pesan 'wait' dengan delay
    await reply(mess.wait);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result) {
            const result = data.result;

            // Menyusun pesan informasi HP
            const hpMessage = `
*Nama:* ${result.name}
*URL:* ${result.url}
*Spesifikasi:*
- *Jaringan:* ${result.specifications.network.technology}
- *Chipset:* ${result.specifications.platform.chipset}
- *CPU:* ${result.specifications.platform.cpu}
- *GPU:* ${result.specifications.platform.gpu}
- *OS:* ${result.specifications.platform.os}
- *Dimensi:* ${result.specifications.body.dimensions}
- *Berat:* ${result.specifications.body.weight}
- *Layar:* ${result.specifications.display.size}, ${result.specifications.display.resolution}
- *Memori:* ${result.specifications.memory.internal}
- *Kamera Utama:* ${result.specifications.mainCamera.dual}
- *Baterai:* ${result.specifications.battery.type}
- *Warna:* ${result.specifications.colors.join(', ')}
*Lainnya:*
- *Model:* ${result.specifications.models}
- *Harga:* ${result.specifications.price ? result.specifications.price : 'N/A'}
            `;

            // Mengirim gambar HP
            await Rafael.sendMessage(
                from,
                {
                    caption: hpMessage,
                    image: { url: result.image }
                },
                { quoted: mek }
            );

        } else {
            reply('Tidak ditemukan informasi HP yang sesuai.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;
        
case 'cuaca': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    const city = args[0]; // Mengambil nama kota dari argumen
    if (!city) {
        return reply(`Contoh penggunaan: ${prefix + command} jakarta`);
    }

    const apiUrl = `https://api.betabotz.eu.org/api/tools/cuaca?query=${encodeURIComponent(city)}&apikey=${apikey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result) {
            const weatherData = data.result;

            // Format pesan informasi cuaca
            const message = `
*Cuaca di ${weatherData.location}, ${weatherData.country}* 🌤️
🌡️ *Suhu Saat Ini*: ${weatherData.currentTemp}
🔼 *Suhu Maksimum*: ${weatherData.maxTemp}
🔽 *Suhu Minimum*: ${weatherData.minTemp}
💧 *Kelembaban*: ${weatherData.humidity}
💨 *Kecepatan Angin*: ${weatherData.windSpeed}
🌩️ *Cuaca*: ${weatherData.weather.charAt(0).toUpperCase() + weatherData.weather.slice(1)}

Informasi cuaca ini mungkin berubah sewaktu-waktu. Tetap periksa pembaruan terbaru! 🌦️
            `.trim();

            // Kirim pesan menggunakan Rafael.sendMessage
            await Rafael.sendMessage(m.chat, { text: message }, { quoted: m });
        } else {
            reply('Gagal mendapatkan informasi cuaca. Pastikan nama kota benar dan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;

case 'jadwaltv': {
    if (!args[0]) {
        return reply(`Gunakan perintah ini dengan nama channel TV.\nContoh: .jadwaltv antv`);
    }

    const channel = args[0].toLowerCase(); // Ambil nama channel dari argumen pertama
    const apiUrl = `https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${apikey}`;

    try {
        // Fetch data dari API
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== 200) {
            return reply(`Gagal mengambil jadwal TV untuk channel: ${channel}. Pastikan nama channel benar.`);
        }

        const schedule = data.result;
        let message = `📺 *Jadwal Acara ${channel.toUpperCase()}*\n\n`;

        // Format jadwal acara
        for (const [time, program] of Object.entries(schedule)) {
            message += `⏰ *${time}* - ${program}\n`;
        }

        message += `\n🔍 Jadwal lengkap dapat dilihat di JadwalTV.Net.`;
        
        // Kirimkan pesan jadwal acara
        await Rafael.sendMessage(m.chat, { text: message }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply(`Terjadi kesalahan saat mengambil data jadwal TV. Silakan coba lagi.`);
    }
    break;
}
        
//End of Searcher menu
        
//News Menu by ShinySebastian (added 12/01/25)
        
        case 'berita': {
    if (!args[0]) {
        return reply(`Silakan pilih sumber berita:\n1. Detikcom: ketik *${prefix}berita detikcom*\n2. JalanTikus: ketik *${prefix}berita jalantikus*\n3. Kumparan: ketik *${prefix}berita kumparan*\n4. Liputan6: ketik *${prefix}berita liputan6*\n5. Republika: ketik *${prefix}berita republika*`);
    }

    const sumber = args[0].toLowerCase();
    const apiKey = 'yangjunming';
    let url = '';

    // Tentukan URL berdasarkan sumber
    if (sumber === 'detikcom') {
        url = `https://api.lolhuman.xyz/api/detik?apikey=${apiKey}`;
    } else if (sumber === 'jalantikus') {
        url = `https://api.lolhuman.xyz/api/jalantikus?apikey=${apiKey}`;
    } else if (sumber === 'kumparan') {
        url = `https://api.lolhuman.xyz/api/kumparan?apikey=${apiKey}`;
    } else if (sumber === 'liputan6') {
        url = `https://api.lolhuman.xyz/api/liputan6?apikey=${apiKey}`;
    } else if (sumber === 'republika') {
        url = `https://api.lolhuman.xyz/api/republika?apikey=${apiKey}`;
    } else {
        return reply(`Sumber berita tidak valid. Pilih antara *detikcom*, *jalantikus*, *kumparan*, *liputan6*, atau *republika*.`);
    }

    try {
        // Fetch data dari API
        const response = await fetchJson(url);

        if (response.status === 200 && response.result) {
            let beritaMessage = `📰 *Berita dari ${sumber.toUpperCase()}*\n\n`;

            response.result.forEach((item, index) => {
                beritaMessage += `${index + 1}. *${item.title}*\n   🕒 ${item.publish}\n   🔗 [Baca selengkapnya] (${item.link})\n   *Deskripsi:* ${item.desc}\n\n`;
            });

            reply(beritaMessage);
        } else {
            reply('Maaf, tidak ada berita yang ditemukan untuk saat ini.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengambil berita. Silakan coba lagi nanti.');
    }
    break;
}

//end of news menu
        
//Downloader Menu (added 10/01/25)
        
case 'mediafire': {
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
if (!text) return reply ('Masukkan Query Link!')
if (args.length == 0) return m.reply(`The link you provided is invalid`)
	kueri = args[0]
const baby1 = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${apikey}&url=${kueri}`)
if (baby1.result.filesize.split('MB')[0] >= 999) return reply('*File terlalu besar!* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
	
*Name* : ${baby1.result.filename}
*Size* : ${baby1.result.filesize}
*Type* : ${baby1.result.filetype}
*Link* : ${baby1.result.link}`
reply(`${result4}`)
Rafael.sendMessage(from, { document : { url : baby1.result.link}, fileName : baby1.result.filename, mimetype: baby1.result.filetype }, { quoted : m }).catch ((err) => reply('API sedang bermasalah gan :)'))
}
break
       
case 'spotifydw': { //Spotify download case 
    if (args.length === 1 && !args[0].startsWith('http')) {
        if (!global.spotifySearchResults || global.spotifySearchResults.length === 0) {
            return reply(`Tidak ada hasil pencarian yang tersimpan. Gunakan perintah "${prefix}spotifysearch [query]" untuk mencari lagu.`);
        }

        const index = parseInt(args[0]) - 1;

        if (isNaN(index) || index < 0 || index >= global.spotifySearchResults.length) {
            return reply(`Nomor tidak valid. Pastikan memilih nomor dari daftar hasil pencarian.`);
        }

        const selectedTrack = global.spotifySearchResults[index];
        m.reply(`Mohon tunggu, Bot sedang memproses link lagu...`);

        try {
            // Mengambil data lagu dari API download
            const ytplai = await fetchJson(`https://api.betabotz.eu.org/api/download/spotify?url=${selectedTrack.url}&apikey=${apikey}`);
            const get_result = ytplai.result.data;

            // Buat caption dengan informasi yang diambil dari API
            var caption = `❖ Title : *${get_result.title}*\n`;
            caption += `❖ Artist : *${get_result.artist.name}*\n`;
            caption += `❖ Duration : *${get_result.duration}*\n`;
            caption += `❖ Artist Link : *${get_result.artist.external_urls.spotify}*\n`;
            caption += `❖ URL : *${get_result.url}*\n\n`;
            caption += `*Mohon tunggu, proses pengiriman file mungkin membutuhkan waktu beberapa menit...*\n`;

            // Kirim thumbnail dengan caption
            await Rafael.sendMessage(m.chat, { image: { url: get_result.thumbnail }, caption });
            await Rafael.sendMessage(m.chat, { 
                audio: { url: get_result.url }, 
                mimetype: 'audio/mp4', 
                fileName: `${get_result.title}.mp3` // Nama file diatur ke judul dari API
            }, { quoted: m });

        } catch (e) {
            reply(`Maaf, terjadi kesalahan dalam memproses permintaan.`);
            console.log(e);
        }
    } else if (args[0].startsWith('http')) {
        // Men-download lagu dari link yang diberikan
        const url = args[0];
        m.reply(`Mohon tunggu, Bot sedang memproses link lagu...`);

        try {
            const ytplai = await fetchJson(`https://api.betabotz.eu.org/api/download/spotify?url=${url}&apikey=${apikey}`);
            const get_result = ytplai.result.data;

            // Buat caption dengan informasi yang diambil dari API
            var caption = `❖ Title : *${get_result.title}*\n`;
            caption += `❖ Artist : *${get_result.artist.name}*\n`;
            caption += `❖ Duration : *${get_result.duration}*\n`;
            caption += `❖ Artist Link : *${get_result.artist.external_urls.spotify}*\n`;
            caption += `❖ URL : *${get_result.url}*\n\n`;
            caption += `*Mohon tunggu, proses pengiriman file mungkin membutuhkan waktu beberapa menit...*\n`;

            // Kirim thumbnail dengan caption
            await Rafael.sendMessage(m.chat, { image: { url: get_result.thumbnail }, caption });
            await Rafael.sendMessage(m.chat, { 
                audio: { url: get_result.url }, 
                mimetype: 'audio/mp4', 
                fileName: `${get_result.title}.mp3` // Nama file diatur ke judul dari API
            }, { quoted: m });

        } catch (e) {
            reply(`Maaf, terjadi kesalahan dalam memproses permintaan.`);
            console.log(e);
        }
    } else {
        reply(`Format tidak valid. Gunakan:\n- "${prefix}spotifydw [nomor]" untuk memilih dari hasil pencarian\n- "${prefix}spotifydw [link]" untuk mendownload dari link Spotify`);
    }
}
break;
      
case 'ytmp3':
case 'youtubedw':
    try {
        let url = '';

        // Kalau langsung kasih URL
        if (args.length === 1 && args[0].startsWith('http')) {
            url = args[0].split('&')[0]; // Bersihkan URL langsung
        }
        // Kalau reply ke pesan pencarian + kasih nomor
        else if (m.quoted && m.quoted.text && global.youtubeSearchCache) {
            let index = parseInt(args[0]) - 1;

            if (isNaN(index) || index < 0 || index >= global.youtubeSearchCache.length) {
                return reply('❌ Invalid number. Cek list hasil pencarian dan pilih angka yang sesuai.');
            }

            url = global.youtubeSearchCache[index].cleanUrl;
        }
        else {
            return reply(`Usage: ${prefix + command} <number or URL>\nContoh: ${prefix + command} 1`);
        }

        m.reply('⏳ Fetching video, please wait...');

        let apiUrl = command === 'ytmp3'
            ? `https://api.betabotz.eu.org/api/download/ytmp3?url=${encodeURIComponent(url)}&apikey=${apikey}`
            : `https://api.betabotz.eu.org/api/download/yt?url=${encodeURIComponent(url)}&apikey=${apikey}`;

        let downloadResult = await fetchJson(apiUrl);
        let downloadData = downloadResult.result;

        let caption = `🎵 *YouTube Download*\n\n`;
        caption += `❖ Title: *${downloadData.title}*\n`;
        caption += `❖ Description: *${downloadData.description || '-'}*\n`;
        caption += `❖ Duration: *${downloadData.duration}*\n`;
        caption += `❖ URL: *${downloadData.source}*\n\n`;
        caption += '_Mohon tunggu, proses pengiriman file membutuhkan waktu..._';

        // Kirim thumbnail
        await Rafael.sendMessage(m.chat, {
            image: { url: downloadData.thumb },
            caption
        });

        // Kirim file audio / video
        if (command === 'ytmp3') {
            await Rafael.sendMessage(m.chat, {
                audio: { url: downloadData.mp3 },
                mimetype: 'audio/mp4',
                fileName: `${downloadData.title}.mp3`
            }, { quoted: m });
        } else {
            await Rafael.sendMessage(m.chat, {
                video: { url: downloadData.mp4 },
                mimetype: 'video/mp4',
                fileName: `${downloadData.title}.mp4`
            }, { quoted: m });
        }

    } catch (e) {
        console.error(e);
        reply('⚠️ Error occurred while downloading the video. Cek URL atau coba lagi nanti.');
    }
    break;


case 'tiktokdl': case 'tiktokdw': case 'tt': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    const url = args[0]; // Mengambil URL TikTok dari argumen
	reply(mess.wait)
    if (!url) {
        return reply(`Contoh: ${prefix + command} https://www.tiktok.com/@username/video/1234567890`);
    }

    const apiUrl = `https://api.betabotz.eu.org/api/download/tiktok?url=${encodeURIComponent(url)}&apikey=${apikey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result) {
            const downloadData = data.result;
            const videoUrl = downloadData.video[0]; // Mendapatkan URL video
            const title = downloadData.title || 'Tiktok Video'; // Judul video jika ada

            // Mengirim video menggunakan Rafael.sendMessage
            await Rafael.sendMessage(m.chat, { 
                video: { url: videoUrl }, 
                mimetype: 'video/mp4', 
                fileName: `${title}.mp4` 
            }, { quoted: m });
        } else {
            reply('Gagal mengambil video, pastikan URL TikTok benar.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;
        
case 'tiktokimg': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    const url = args[0]; // Mengambil URL TikTok dari argumen

    if (!url) {
        return reply(`Contoh: ${prefix + command} https://www.tiktok.com/@username/video/1234567890`);
    }

    const apiUrl = `https://api.betabotz.eu.org/api/download/ttslide?url=${encodeURIComponent(url)}&apikey=${apikey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.result) {
            const downloadData = data.result;
            const images = downloadData.images; // Mendapatkan array gambar
            const title = downloadData.title || 'Tiktok Image'; // Judul gambar jika ada

            // Cek apakah ada gambar yang ditemukan
            if (images && images.length > 0) {
                if (images.length === 1) {
                    // Jika hanya ada satu gambar
                    await Rafael.sendMessage(m.chat, {
                        image: { url: images[0] },
                        caption: `${title} - Gambar 1`
                    }, { quoted: m });
                    console.log('Gambar 1 berhasil diunduh');
                } else {
                    // Jika ada lebih dari satu gambar
                    for (let i = 0; i < images.length; i++) {
                        await Rafael.sendMessage(m.chat, {
                            image: { url: images[i] },
                            caption: `${title} - Gambar ${i + 1}`
                        }, { quoted: m });
                        console.log(`Gambar ${i + 1} berhasil diunduh`);
                    }
                }
            } else {
                reply('Gagal mengambil gambar, pastikan URL TikTok benar.');
            }
        } else {
            reply('Gagal mengambil gambar, pastikan URL TikTok benar.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;

case 'fbdl': case 'facebookdl': {
    if (!args[0]) {
        return reply(`Format salah. Gunakan format: ${prefix}fbdl [link]`);
    }

    const url = args[0];

    // Mengecek apakah input adalah link atau pilihan resolusi
    if (url.startsWith('http')) {
        // Jika input adalah link, ambil daftar resolusi
        try {
            const apiKey = 'yangjunming';
            const response = await fetchJson(`https://api.betabotz.eu.org/api/download/fbdown?url=${encodeURIComponent(url)}&apikey=${apiKey}`);

            if (!response.result || response.result.length === 0) {
                return reply('Tidak ada video yang tersedia untuk link ini.');
            }

            let resultList = `Berikut resolusi yang tersedia untuk video ini:\n\n`;
            response.result.forEach((video, index) => {
                resultList += `${index + 1}. Resolusi: *${video.resolution}*\n   Ukuran: ${video.size || 'Tidak Tersedia'}\n\n`;
            });

            resultList += `\nBalas pesan ini dan ketik "${prefix}fbdl [nomor]" untuk mengunduh sesuai resolusi yang diinginkan.`;

            // Simpan hasil pencarian ke variabel global
            global.fbVideoResults = response.result;

            reply(resultList);
        } catch (error) {
            console.error(error);
            reply('Terjadi kesalahan saat mengambil data. Silakan coba lagi.');
        }
    } else {
        // Jika input bukan link, anggap sebagai pilihan resolusi
        if (!global.fbVideoResults || global.fbVideoResults.length === 0) {
            return reply(`Tidak ada hasil resolusi yang tersimpan. Gunakan perintah "${prefix}fbdl [link]" untuk mencari video.`);
        }

        const index = parseInt(url) - 1; // `url` di sini adalah pilihan nomor

        if (isNaN(index) || index < 0 || index >= global.fbVideoResults.length) {
            return reply(`Nomor tidak valid. Pastikan memilih nomor dari daftar resolusi.`);
        }

        const selectedVideo = global.fbVideoResults[index];
        m.reply(`Mohon tunggu, Bot sedang mengunduh video...`);

        try {
            // Kirim video
            await Rafael.sendMessage(m.chat, { 
                video: { url: selectedVideo._url }, // Menggunakan "_url" sesuai dengan JSON
                mimetype: 'video/mp4', 
                caption: `Video resolusi ${selectedVideo.resolution} berhasil diunduh!` 
            }, { quoted: m });
        } catch (e) {
            reply(`Maaf, terjadi kesalahan dalam mengunduh video.`);
            console.log(e);
        }
    }
}
break;


case 'instaimg': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
    const url = args[0]; // Mengambil URL Instagram dari argumen
    if (!url) {
        return reply(`Contoh: ${prefix + command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`);
    }

    const apiUrl = `https://api.betabotz.eu.org/api/download/igdowloader?url=${encodeURIComponent(url)}&apikey=${apikey}`;

    // Mengirim pesan 'wait' dengan delay
   reply(mess.wait);
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === true && data.message && data.message.length > 0) {
            const messageData = data.message[0];
            const imageUrl = messageData._url; // Mendapatkan URL gambar
            if (imageUrl) {
                // Kirim gambar utama
                await Rafael.sendMessage(m.chat, {
                    image: { url: imageUrl },
                    caption: `Downloaded by GacorBot`
                }, { quoted: m });

                console.log('Gambar berhasil diunduh');
            } else {
                reply('Gambar tidak ditemukan pada URL yang diberikan, pastikan itu adalah URL gambar dari Instagram.');
            }
        } else {
            reply('Gagal mengambil gambar, pastikan URL Instagram benar dan konten tersedia.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;

case 'instareel': case 'instagramvideo': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    const url = args[0]; // Mengambil URL Instagram dari argumen

    if (!url) {
        return reply(`Contoh: ${prefix + command} https://www.instagram.com/reel/Cf1HZNvvGuM/?igshid=YmMyMTA2M2Y&apikey=${apikey}`);
    }

    const apiUrl = `https://api.betabotz.eu.org/api/download/igdowloader?url=${encodeURIComponent(url)}&apikey=${apikey}`;

    // Mengirim pesan 'wait' dengan delay
    await reply(mess.wait);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true && data.message && data.message.length > 0) {
            const messageData = data.message[0];
            const videoUrl = messageData._url; // Mendapatkan URL video Reel

            if (videoUrl) {
                // Kirim video utama
                await Rafael.sendMessage(m.chat, {
                    video: { url: videoUrl },
                    caption: `Downloaded by GacorBot`
                }, { quoted: m });

                console.log('Video berhasil diunduh');
            } else {
                reply('Video tidak ditemukan pada URL yang diberikan, pastikan itu adalah URL Reel dari Instagram.');
            }
        } else {
            reply('Gagal mengambil video, pastikan URL Instagram benar dan konten tersedia.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;


// End of Downloader Menu

// AI Menu by ShinySebastian (added 11/01/25)
case 'ai': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    if (args.length === 0) {
        return reply(`Contoh: ${prefix + command} Apa itu JavaScript?`);
    }

    const query = args.join(" ");  // Gabungkan argumen menjadi satu string query
    const apiUrl = `https://api.betabotz.eu.org/api/search/openai-chat?text=${encodeURIComponent(query)}&apikey=${apikey}`;

    // Menggunakan fetch untuk mendapatkan response dari API
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === true) {
            reply(`${data.message}`);
        } else {
            reply('Tidak dapat memperoleh respons dari OpenAI.');
        }
    } catch (error) {
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;
        
/* case 'cai': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    if (args.length === 0 || !args[0].includes("|")) {
        return reply(`Contoh penggunaan yang benar: .cai <character_id>|<pesan>\nContoh: .cai z-cMp3yzEecIpJkxl9wNcHYi7Mu0ajHnQZNcDr0bviE|Apa itu JavaScript?`);
    }

    // Pisahkan character_id dan pesan dari argumen
    const [character_id, message] = args.join(" ").split("|");

    if (!character_id || !message) {
        return reply('Pastikan formatnya benar: .cai <character_id>|<pesan>');
    }

    const apiUrl = "https://caipy1-r9l478k2i-yangjunming08s-projects.vercel.app/api/character/";  // URL ke endpoint yang kamu sediakan

    try {
        // Kirim request POST menggunakan axios
        const response = await axios.post(apiUrl, {
            character_id: character_id,  // Kirimkan character_id yang dimasukkan pengguna
            text: message  // Kirimkan pesan yang dimasukkan pengguna
        });

        if (response.data && response.data.response) {
            // Kirimkan hasil response ke pengguna
            reply(response.data.response);
        } else {
            reply('Tidak dapat memperoleh respons dari CharacterAI.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break; */
        
case 'cai2': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    if (args.length === 0 || !args[0].includes("|")) {
        return reply(`Contoh penggunaan yang benar: .cai <namaSesi>|<characterId>|<pesan>\nContoh: .cai namaSesi|z-cMp3yzEecIpJkxl9wNcHYi7Mu0ajHnQZNcDr0bviE|Halo, apa kabar?`);
    }

    // Pisahkan namaSesi, characterId, dan pesan dari argumen
    const [namaSesi, characterId, ...messageParts] = args.join(" ").split("|");
    const message = messageParts.join("|"); // Gabungkan pesan jika mengandung karakter "|"

    if (!namaSesi || !characterId || !message) {
        return reply('Pastikan formatnya benar: .cai <namaSesi>|<characterId>|<pesan>');
    }

    const apiUrl2 = "https://caipy2-9s9c1iq0k-yangjunming08s-projects.vercel.app/api/character/"; // URL endpoint API

    try {
        // Cek apakah sesi sudah ada
        if (chatSessions[namaSesi]) {
            // Lanjutkan percakapan pada sesi yang ada
            const sessionData = chatSessions[namaSesi];

            const response = await axios.post(apiUrl2, {
                session_name: namaSesi,  // Gunakan nama sesi
                character_id: sessionData.character_id, // Character ID dari sesi sebelumnya
                text: message  // Pesan pengguna
            });

            if (response.data && response.data.response) {
                reply(response.data.response); // Balas respons AI
            } else {
                reply('Tidak dapat memperoleh respons dari CharacterAI.');
            }
        } else {
            // Buat sesi baru
            const response = await axios.post(apiUrl2, {
                session_name: namaSesi, // Nama sesi baru
                character_id: characterId, // Gunakan characterId dari input pengguna
                text: message // Pesan awal
            });

            if (response.data && response.data.response) {
                // Simpan sesi ke penyimpanan
                chatSessions[namaSesi] = {
                    character_id: characterId // Simpan characterId
                };

                reply(response.data.response); // Balas pesan awal
            } else {
                reply('Tidak dapat membuat sesi baru dengan CharacterAI.');
            }
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat menghubungi API. Silakan coba lagi nanti.');
    }
}
break;
        
/*case 'caistart': {
        console.log(`[DEBUG] Masuk ke case 'caistart'`);

        if (!args[0] || !args[0].includes("|")) {
            return reply(`Format salah! Gunakan:\n${prefix}caistart namaSession|characterID`);
        }

        const [session_name, character_id] = args.join(" ").split("|");

        // Membaca sesi yang ada
        let caichat = readSessions();

        if (caichat[m.sender]) {
            console.log(`[DEBUG] Sesi sudah aktif untuk ${m.sender}`);
            return reply('Sesi sudah aktif. Akhiri dengan .caiend terlebih dahulu.');
        }

        try {
            // Simulasi POST API
            const apiUrl = "https://caipy2-9s9c1iq0k-yangjunming08s-projects.vercel.app/api/character/";
            const response = await axios.post(apiUrl, {
                session_name: session_name,
                character_id: character_id,
                text: "hi"
            });

            // Menyimpan sesi ke dalam file JSON
            caichat[m.sender] = { session_name, character_id };
            writeSessions(caichat); // Menulis sesi ke file JSON

            reply('Mode C.Ai aktif!');
            if (response.data && response.data.response) {
                reply(response.data.response);
            } else {
                reply('Gagal memulai sesi.');
            }
        } catch (error) {
            console.error(`[ERROR] Gagal memulai sesi:`, error.response ? error.response.data : error.message);
            reply('Terjadi kesalahan saat memulai sesi.');
        }
        break;
    }

   /* case 'caiend': {
        console.log(`[DEBUG] Masuk ke case 'caiend'`);

        // Membaca sesi yang ada
        let caichat = readSessions();

        if (!caichat[m.sender]) {
            return reply('Tidak ada sesi aktif.');
        }

        delete caichat[m.sender]; // Menghapus sesi dari objek
        writeSessions(caichat); // Menulis sesi yang sudah dihapus ke file JSON

        reply('Sesi dihentikan. Mode C.Ai nonaktif.');
        break;
    } */
        
 case 'caistart': {
    console.log(`[DEBUG] Masuk ke case 'caistart'`);

    if (!args[0] || !args[0].includes("|")) {
        return reply(`Format salah! Gunakan:\n${prefix}caistart namaSession|characterID\n\n*List yang tersedia:*\n1. Naruto\n2. Sasuke\n3. Sakura\n4. Yoo Wooin (wooin)\n5. Gojo Satoru (gojo)\n6. Ellie Williams (ellie)\n7. Na Jaemin (jaemin)\n\nAtau masukkan character ID anda sendiri.\nContoh: *${prefix+command} GacorSesi|Wooin*\n*${prefix+command} GacorSesi|4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ*`);
    }

    const [session_name, character_input] = args.join(" ").split("|");

    // Menentukan character_id berdasarkan nama karakter atau langsung dari characterID
    let character_id;
    
    // Cek apakah input karakter adalah nama dari list karakter
    if (characterList[character_input.toLowerCase()]) {
        character_id = characterList[character_input.toLowerCase()]; // Ambil characterID berdasarkan nama
    } else {
        character_id = character_input; // Jika bukan nama, anggap input sebagai characterID langsung
    }

    if (!character_id) {
        return reply(`Karakter tidak ditemukan! Silakan pilih karakter dari daftar atau masukkan characterID langsung.`);
    }

    // Membaca sesi yang ada
    let caichat = readSessions();

    if (caichat[m.sender]) {
        console.log(`[DEBUG] Sesi sudah aktif untuk ${m.sender}`);
        return reply('Sesi sudah aktif. Akhiri dengan .caiend terlebih dahulu.');
    }

    try {
        // Simulasi POST API
        const apiUrl = "https://caipy2-9s9c1iq0k-yangjunming08s-projects.vercel.app/api/character/";
        const response = await axios.post(apiUrl, {
            session_name: session_name,
            character_id: character_id,
            text: "hi"
        });

        // Menyimpan sesi ke dalam file JSON
        caichat[m.sender] = { session_name, character_id };
        writeSessions(caichat); // Menulis sesi ke file JSON

        reply('Mode C.AI aktif!');
        if (response.data && response.data.response) {
            reply(response.data.response);
        } else {
            reply('Gagal memulai sesi.');
        }
    } catch (error) {
        console.error(`[ERROR] Gagal memulai sesi:`, error.response ? error.response.data : error.message);
        reply('Terjadi kesalahan saat memulai sesi.');
    }
    break;
}       
       
case 'caiend': {
        console.log(`[DEBUG] Masuk ke case 'caiend'`);

        // Membaca sesi yang ada
        let caichat = readSessions();

        if (!caichat[m.sender]) {
            return reply('Tidak ada sesi aktif.');
        }

        delete caichat[m.sender]; // Menghapus sesi dari objek
        writeSessions(caichat); // Menulis sesi yang sudah dihapus ke file JSON

        reply('Sesi dihentikan. Mode C.Ai nonaktif.');
        break;
    } 
//End of AI menu

//Cerpen menu by ShinySebastian (added 11/01/25)

case 'cerpenremaja': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=remaja&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Remaja*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenanak': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=anak&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Anak*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenmisteri': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=misteri&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Misteri*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpencinta': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=cinta&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Cinta*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenbudaya': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=budaya&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Budaya*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenromantis': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=romantis&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Romantis*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpengalau': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=galau&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Galau*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpeninspirasi': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=inspiratif&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Inspiratif*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenkehidupan': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=kehidupan&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Kehidupan*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis :* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenkorea': {
    
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=korea&apikey=${apikey}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Korea*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    Rafael.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

//end of Cerpen Menu
        
//Converter Menu by ShinySebastian(added 9/11/24)
 
case 'vtoaudio':
case 'videotoaudio': {
    try {
        let isQuoted = m.quoted && m.quoted.mimetype && m.quoted.mimetype.includes('video');
        let isDirect = m.message.videoMessage; // video dengan caption

        if (!isQuoted && !isDirect) {
            return reply(`Balas *video* atau kirim *video* dengan caption *${prefix + command}* untuk mengubah ke audio`);
        }

        // Ambil media dari reply atau langsung
        let targetMessage = isQuoted ? m.quoted : m;

        let media = await Rafael.downloadAndSaveMediaMessage(targetMessage);
        let output = getRandom('.mp3');

        exec(`ffmpeg -i ${media} -vn -ab 128k -ar 44100 -y ${output}`, (err, stderr, stdout) => {
            fs.unlinkSync(media);
            if (err) {
                console.error(err);
                return reply('❌ Gagal konversi video ke audio.');
            }

            let buffer = fs.readFileSync(output);
            Rafael.sendMessage(m.chat, {
                audio: buffer,
                mimetype: 'audio/mpeg'
            }, { quoted: m });
            fs.unlinkSync(output);
        });
    } catch (e) {
        console.error(e);
        reply('⚠️ Terjadi error saat memproses videonya.');
    }
    break;
}

case 'addpdf': {
    if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${usedPrefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    let imgBuffer = await q.download();
    if (!imgBuffer) return reply("Gagal mengunduh gambar.");

    // Simpan ke antrian user
    let userId = m.sender;
    if (!pdfQueue[userId]) pdfQueue[userId] = [];
    pdfQueue[userId].push(imgBuffer);

    reply(`✅ Gambar berhasil ditambahkan ke antrian PDF.\nTotal: ${pdfQueue[userId].length} gambar.\nKetik *.addpdf* lagi untuk menambah, atau *.convertpdf* untuk membuat PDF.`);
    break;
}

case 'convertpdf': {
    if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');

    let userId = m.sender;
    if (!pdfQueue[userId] || pdfQueue[userId].length === 0) {
        return reply('Tidak ada gambar dalam antrian. Tambahkan gambar dulu dengan perintah *.addpdf*');
    }

    const { PDFDocument } = require('pdf-lib');
    const pdfDoc = await PDFDocument.create();

    for (let imgBuffer of pdfQueue[userId]) {
        let extension = imgBuffer[0] === 0x89 ? 'png' : 'jpg';
        let img = extension === 'png' 
            ? await pdfDoc.embedPng(imgBuffer)
            : await pdfDoc.embedJpg(imgBuffer);

        let page = pdfDoc.addPage([img.width, img.height]);
        page.drawImage(img, {
            x: 0, y: 0,
            width: img.width,
            height: img.height
        });
    }

    const pdfBytes = await pdfDoc.save();
    const fs = require('fs');
    const path = './temp-multi.pdf';
    fs.writeFileSync(path, pdfBytes);

    // Kirim file ke user
    Rafael.sendMessage(from, {
        document: fs.readFileSync(path),
        fileName: 'gabungan-gambar.pdf',
        mimetype: 'application/pdf',
        caption: '🧾 Ini PDF hasil gabungan semua gambar yang kamu upload barusan!'
    }, { quoted: mek });

    // Reset antrian user
    delete pdfQueue[userId];
    break;
}

        
case 'audiomenu':
        let audioMenu = `[ *⭔ AUDIO MENU* ]
> .bass
> .blown
> .deep
> .fast
> .fat
> .nightcore
> .reverse
> .robot
> .slow
> .smooth
> .tupai`
        reply(audioMenu)
        break
        
case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await Rafael.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Rafael.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                }
            break
        
case 'convertmatauang': case 'konversi':{
    if (!args[0] || !args[1] || !args[2]) {
        return reply(`Usage: ${prefix}convert [amount] [from_currency] [to_currency]\nExample: ${prefix}convert 100 USD IDR`);
    }
	reply(mess.wait);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const amount = parseFloat(args[0]);
    const fromCurrency = args[1].toUpperCase();
    const toCurrency = args[2].toUpperCase();

    if (isNaN(amount)) {
        return reply('Please enter a valid number for the amount.');
    }

    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'e87dd1a1110d52a04f062abc';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result !== 'success') {
            return reply('Failed to get exchange rate. Please check the currency codes and try again.');
        }

        const convertedAmount = data.conversion_result;
        m.reply(`💱 Conversion Result:\n${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } catch (error) {
        console.error(error);
        reply('An error occurred while trying to fetch exchange rate data. Please try again later.');
    }
}
break;
        
case 'ocr': case 'imagetotext': {
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }

    // Mengecek apakah ada gambar yang direply
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    // Validasi input gambar
    if (!mime) return reply(`Balas gambar dengan perintah\n\n${prefix + command}`);
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`);

    try {
        // Mendownload gambar dari pesan yang direply
        let img = await q.download();

        // Mengupload gambar menggunakan layanan pihak ketiga (contoh: imgbb)
        let imgbbApiKey = "0728c27b16e953acb07e666abbb4a7c3"; // API key untuk imgbb
        let uploadedImageUrl = await uploadImage(img, imgbbApiKey);

        // URL API OCR
        const ocrApiUrl = `https://api.lolhuman.xyz/api/ocr?apikey=${apikey}&img=${encodeURIComponent(uploadedImageUrl)}`;

        // Memberikan respon menunggu
        await reply(mess.wait);

        // Memanggil API OCR
        const response = await fetch(ocrApiUrl);
        const data = await response.json();

        // Mengecek hasil dari API
        if (data.status === 200 && data.result) {
            // Mengirim teks hasil OCR
            reply(`Hasil OCR dari gambar:\n\n${data.result}`);
        } else {
            reply('Terjadi kesalahan saat memproses OCR. Silakan coba lagi.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan. Pastikan gambar yang kamu balas sesuai format dan coba lagi.');
    }
}
break;
//end of converter menu
        
// Meme menu by ShinySebastian (added 11/01/25)

case 'darkjoke':
case 'dj':
        if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
                Rafael.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apikey}`}, caption: `Ehem jgn tersinggung`}, {quoted: m})
            break
      
case 'memeindo':
        if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
                Rafael.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apikey}`}, caption: `Semoga terhibur :)`}, {quoted: m})
            break
        
//end of Meme menu
 
//Stalk Menu (added 12/01/25)
        
case 'igstalk':
        if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
    if (args.length === 0) {
        return reply('Mohon masukkan username Instagram yang ingin kamu cari!');
    }
    const username = args[0];

    try {
        let response = await fetch(`https://api.betabotz.eu.org/api/stalk/ig?username=${username}&apikey=${apikey}`);
        let data = await response.json();
        if (data.status === true) {
            let { username, fullName, bio, followers, following, postsCount, photoUrl } = data.result;
            await Rafael.sendMessage(
                from,
                {
                    caption: `*Instagram Profile:*
Username: ${username}
Full Name: ${fullName}
Bio: ${bio}
Followers: ${followers}
Following: ${following}
Posts: ${postsCount}`,
                    image: { url: photoUrl }, 
                },
                { quoted: m }
            );
        } else {
            reply('Username Instagram tidak ditemukan atau ada kesalahan.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan dalam mengambil data. Coba lagi.');
    }
    break;
        
case 'tiktokstalk':
    if (!isRegistered) {
        return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!');
    }
    if (args.length === 0) {
        return reply('Mohon masukkan username TikTok yang ingin kamu cari!');
    }
    const usernameTT = args[0];

    try {
        // Mengambil data dari API TikTok Stalk
        let response = await fetch(`https://api.betabotz.eu.org/api/stalk/tt?username=${usernameTT}&apikey=${apikey}`);
        let data = await response.json();

        // Cek apakah data berhasil diambil
        if (data.status === true) {
            let { username, description, likes, followers, following, totalPosts, profile } = data.result;

            // Kirim hasil ke pengguna
            await Rafael.sendMessage(
                from,
                {
                    caption: `*TikTok Profile:*
Username: ${username}
Description: ${description}
Likes: ${likes}
Followers: ${followers}
Following: ${following}
Total Posts: ${totalPosts}`,
                    image: { url: profile }, // Menampilkan foto profil
                },
                { quoted: m }
            );
        } else {
            reply('Username TikTok tidak ditemukan atau ada kesalahan.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan dalam mengambil data. Coba lagi.');
    }
    break;


//end of Stalk menu
        
//RPG menu
//==================================================================
case 'banknabung': {
  if (!m.isGroup) return reply(mess.group)
const xpperlimit = 1
  let user = global.db.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(user.money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return reply('Kamu belum mempunyai kartu ATM')
  if (user.bank > user.fullatm) return reply('Uang di ATM sudah penuh!')
  if (count > user.fullatm - user.bank) return m.reply('Uangnya sudah mencapai batas')
  if (user.money >= xpperlimit * count) {
    user.money -= xpperlimit * count
    user.bank += count
    reply(`Sukses menabung sebesar ${count} Money 💹`)
  } else reply(`[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`, )
}
break 
//==================================================================
case 'banktarik': {
  if (!m.isGroup) return reply(mess.group)
const xpperlimit = 1
  let user = global.db.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(user.bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return reply('Kamu belum mempunyai kartu ATM !')
  if (user.bank >= xpperlimit * count) {
    user.bank -= xpperlimit * count
    user.money += count
    reply(`Sukses menarik sebesar ${count} Money 💹`)
  } else reply(`[❗] Uang di bank anda tidak mencukupi untuk ditarik sebesar ${count} money 💹`)
}
break 
//==================================================================
        
case 'berkebon':{
  if (!m.isGroup) return reply(mess.group)
function clockStringx(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
const timeout = 1800000
    let __timers = (new Date - global.db.users[m.sender].lastberkebon)
    let _timers = (timeout - __timers)
    let timers = clockStringx(_timers)
    let user = global.db.users[m.sender]
    let { stock } = global.db.settings[botNumber]
    let pisang = 100 - user.bibitpisang
    let anggur = 100 - user.bibitanggur
    let mangga = 100 - user.bibitmangga
    let jeruk = 100 - user.bibitjeruk
    let apel = 100 - user.bibitapel
    let kerja = 'Berkebun'
    let id = m.chat
    Rafael.misi = Rafael.misi ? Rafael.misi : {}
    if (id in Rafael.misi) {
        reply(`Selesaikan misi ${Rafael.misi[id][0]} terlebih dahulu!`)
        return false
    }
    let caption = `
📮 Kamu Membutuhkan Bibit:\n${user.bibitpisang < 100 ? `\n${global.rpg.emoticon('bibitpisang')} BibitPisang: ${pisang}`: ''} ${user.bibitanggur < 100 ? `\n${global.rpg.emoticon('bibitanggur')} BibitAnggur: ${anggur}`: ''} ${user.bibitmangga < 100 ? `\n${global.rpg.emoticon('bibitmangga')} BibitMangga: ${mangga}`: ''} ${user.bibitjeruk < 100 ? `\n${global.rpg.emoticon('bibitjeruk')} BibitJeruk: ${jeruk}`: ''} ${user.bibitapel < 100 ? `\n${global.rpg.emoticon('bibitapel')} BibitApel: ${apel}`: ''}`.trim()
    if (new Date - user.lastberkebon > 1800000) {
        if (user.bibitpisang >= 100 && user.bibitanggur >= 100 && user.bibitmangga >= 100 && user.bibitapel >= 100 && user.bibitjeruk >= 100) {
            let hasil1 = Math.floor(Math.random() * 100)
            let hasil2 = Math.floor(Math.random() * 100)
            let hasil3 = Math.floor(Math.random() * 100)
            let hasil4 = Math.floor(Math.random() * 100)
            let hasil5 = Math.floor(Math.random() * 100)

            let caption = `⌛ Hasil Panen Kamu

${global.rpg.emoticon('pisang')} Pisang: ${hasil1}
${global.rpg.emoticon('anggur')} Anggur ${hasil2}
${global.rpg.emoticon('mangga')} Mangga: ${hasil3}
${global.rpg.emoticon('jeruk')} Jeruk: ${hasil4}
${global.rpg.emoticon('apel')} Apel: ${hasil5}
`
            user.pisang += hasil1
            user.anggur += hasil2
            user.mangga += hasil3
            user.jeruk += hasil4
            user.apel += hasil5

            user.bibitpisang -= 100
            user.bibitanggur -= 100
            user.bibitmangga -= 100
            user.bibitjeruk -= 100
            user.bibitapel -= 100

            stock.bibitpisang += 100
            stock.bibitanggur += 100
            stock.bibitmangga += 100
            stock.bibitjeruk += 100
            stock.bibitapel += 100


            Rafael.misi[id] = [
kerja,
setTimeout(() => {
delete Rafael.misi[id]
}, 20000)
            ]

            setTimeout(() => {
reply(`${caption.trim()}`)
            }, 20000)

            setTimeout(() => {
reply('Sedang Menanam Bibit...')
            }, 0)
            user.lastberkebon = new Date * 1
        } else reply(`${caption}`)
    } else reply(`Mohon Menunggu Selama ${timers} Untuk Berkebun Kembali...`)
}
break     
//==================================================================
case 'buah': {
  if (!m.isGroup) return reply(mess.group)
	let user = global.db.users[m.sender]
	let ini_txt = ` > *GUDANG BUAH KAMU*\n\n`
	ini_txt += `🍌 ${user.pisang} Pisang\n`
	ini_txt += `🍇 ${user.anggur} Anggur\n`
	ini_txt += `🥭 ${user.mangga} Mangga\n`
	ini_txt += `🍊 ${user.jeruk} Jeruk\n`
	ini_txt += `🍎 ${user.apel} Apel\n\n`
	ini_txt += `Gunakan command *${prefix}buah sell* untuk menjual.`
	reply(`${ini_txt}`)
}
break 
//==================================================================
case 'bet': 
    case 'judi':        {
  if (!m.isGroup) return reply(mess.group)
  function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}
const items = [ 'money', 'chip' ]
    let user = global.db.users[m.sender]
    let item = items.filter(v => v in user && typeof user[v] == 'number')
    let type = (args[0] || '').toLowerCase()
    let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1): /all/i.test(args[1]) ? Math.floor(parseInt(user[type])): 1) * 1
    if (!item.includes(type)) return reply(`*List Item:*\n${item.map(v => `${global.rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nExample:\nbet money 100000`)
    if ((user[type] * 1) < count) return reply(`*${type} ${global.rpg.emoticon(type)}* kamu tidak cukup!!`)
    let moneyDulu = user[type] * 1
    let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText: m.text ? m.text: '').toLowerCase()
    try {
        let Bot = (Math.ceil(Math.random() * 91)) * 1
        let Kamu = (Math.floor(Math.random() * 71)) * 1
        let status = 'Kalah'
        if (Bot < Kamu) {
            user[type] += count * 1
            status = 'Menang'
        } else if (Bot > Kamu) {
            user[type] -= count * 1
        } else {
            status = 'Seri'
            user[type] += (Math.floor(count / 1.5)) * 1
        }
        reply(`
| *PLAYERS* | *POINT* |
*🤖 BOT:*      ${Bot}
*👤 KAMU:*    ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*`: status == 'Kalah' ? `Kehilangan *-${count * 1}*`: `Mendapatkan *+${Math.floor(count / 1.5)}*`} *${type} ${global.rpg.emoticon(type)}*
`.trim())
    } catch (e) {
        if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
        reply('Error saat melakukan judi (Rejected)')
    }
}
break
//==================================================================
case 'claim':
case 'bonus': {
  if (!m.isGroup) return reply(mess.group)
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
    let user = global.db.users[m.sender]
    let time = user.lastbonus + 86400000
    if (new Date - user.lastbonus < 86400000) return reply(`Kamu sudah mengambil bonus hari ini!\nTunggu selama *${msToTime(time - new Date())}* lagi`)
    let money = Math.floor(Math.random() * 50000000)
    user.money += money * 1
    user.lastbonus = new Date * 1
    reply(`Selamat kamu mendapatkan bonus : \n+${money} Money`)
}
break 
//==================================================================
case 'bunuh':
case 'hitman': {
  if (!m.isGroup) return reply(mess.group)
  function clockStringBunuh(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockStringBunuh(_timers)
    let name = Rafael.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
	let kerja = 'Bunuh'
    Rafael.misi = Rafael.misi ? Rafael.misi : {}
    if (id in Rafael.misi) {
        reply(`Selesaikan Misi ${Rafael.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku4 = Math.floor(Math.random() * 10)
        let randomaku5 = Math.floor(Math.random() * 10)

        let rbrb4 = (randomaku4 * 100000)
        let rbrb5 = (randomaku5 * 1000)

        var dimas = `
🕵️ Mendapatkan Target.....
`.trim()

        var dimas2 = `
⚔️ Menusuk Tubuhnya.....
`.trim()

        var dimas3 = `
☠️ Target meninggal dan kamu mengambil barang-barangnya....
`.trim()

        var dimas4 = `
💼 Hasil dari membunuh....
`.trim()

        var hsl = `
*[ Hasil ${name} ]*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 👮 Pelanggaran +1
➕ ☑️ Misi Berhasil = +1
➕  📥Total Misi Sebelumnya : ${order}
`.trim()

		user.money += rbrb4
        user.exp += rbrb5
        user.ojekk += 1
        user.warn += 1

		Rafael.misi[id] = [
        	kerja,
        setTimeout(() => {
            delete Rafael.misi[id]
        }, 27000)
    	]
        setTimeout(() => {
            reply(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            reply(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            reply(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
            reply(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            reply(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            reply('🔍Mencari Target pembunuhan.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else reply(`Kamu sudah lelah! Silahkan ngopi dan menunggu selama *${timers}*, untuk menyelesaikan misi kembali`)
}
break  
//==================================================================
case 'collect': {
  if (!m.isGroup) return reply(mess.group)
  function clockStringCollect(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastclaim)
    let _timers = (43200000 - __timers)
    let timers = clockStringCollect(_timers) 
    let user = global.db.users[m.sender]
    if (new Date - global.db.users[m.sender].lastclaim > 43200000) {
        reply(`Kamu sudah mengclaim dan mendapatkan *1000* 💵money dan *1* 🥤potion`)
        user.money += 1000
        user.potion += 1
        user.lastclaim = new Date * 1
    } else reply(`Silahkan tunggu *${timers}* untuk bisa mengclaim lagi`)
}
break        
//==================================================================
case 'craft':
case 'crafting': {
  if (!m.isGroup) return reply(mess.group)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  let { stock } = global.db.settings[botNumber]

  let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan format *${prefix+command} [type]*
Example: *${prefix+command} pickaxe*

> *List Yang Bisa Di Craft*
▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣
▧ Armor 🥼
▧ Atm 💳

> *Recipe*
▧ Pickaxe ⛏️
〉 10 Kayu
〉 5 Batu
〉 5 Iron
〉 20 String

▧ Sword ⚔️
〉 10 Kayu
〉 15 Iron

▧ Fishingrod 🎣
〉 10 Kayu
〉 2 Iron
〉 20 String

▧ Armor 🥼
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

▧ Atm 💳
〉3 Emerald
〉6 Diamond
〉10k Money
`
  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxe > 0) return reply('Kamu sudah memiliki ini!')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : ${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''} ${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}${user.rock < 5 ? `\n${5 - user.rock} Batu 🪨` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 5
            stock.iron += 5
        
            user.rock -= 5
            stock.rock += 5

            user.string -= 20
            stock.string += 20

            user.pickaxe += 1
            user.pickaxedurability = 40
            reply("Sukses membuat 1 pickaxe 🔨")
            break
          case 'sword':
          if (user.sword > 0) return reply('Kamu sudah memiliki ini!')
            if(user.wood < 10 || user.iron < 15) return reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''}${user.iron < 15 ? `\n${15 - user.iron} iron⛓️` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 15
            stock.iron += 15

            user.sword += 1
            user.sworddurability = 40
            reply("Sukses membuat 1 sword 🗡️")
            break
          case 'fishingrod':
          if (user.fishingrod > 0) return reply('Kamu sudah memiliki ini!')
            if(user.wood < 20 || user.iron < 5 || user.string < 20) return reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :${user.wood < 20 ? `\n${20 - user.wood} kayu🪵` : ''}${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 2
            stock.iron +=2

            user.string -= 20
            stock.string += 20

            user.fishingrod += 1
            user.fishingroddurability = 40
            reply("Sukses membuat 1 Pancingan 🎣")
            break
          case 'armor':
          if (user.armor > 0) return reply('Kamu sudah memiliki ini!')
            if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return reply(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :${user.iron < 30 ? `\n${30 - user.iron} Iron ⛓️` : ''}${user.emerald < 1 ? `\n${1 - user.emerald} Emerald ❇️` : ''}${user.diamond < 5 ? `\n${5 - user.diamond} Diamond 💎` : ''}`)
            user.emerald -= 1
            stock.emerald += 1

            user.iron -= 30
            stock.iron += 30

            user.diamond -= 5
            stock.diamond += 5

            user.armor += 1
            user.armordurability = 50
            reply("Sukses membuat 1 Armor 🥼")
            break
            case 'atm':
          if (user.atm > 0) return reply('Kamu sudah memiliki ini!')
            if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return reply(`Barang tidak cukup!\nUntuk membuat ATM. Kamu memerlukan :${user.money < 10000 ? `\n${10000 - user.money} Money 💹` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
            user.emerald -= 3
            stock.emerald += 3

            user.diamond -= 6
            stock.diamond += 6

            user.money -= 10000
            user.atm += 1
            user.fullatm = 500000000
            reply("Sukses membuat 1 Atm 💳")
            break
          default:
            return await reply(`${caption}`)
        }
    } 
  } catch (err) {
    reply("Maaf, tidak bisa crafting karena:\n" + err.stack)
  }
}
break        
//==================================================================
case 'feed': {
  if (!m.isGroup) return reply(mess.group)
function clockStringFeed(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 310000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

	let info = `
> *List Pet:*
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Example: ${prefix+command} cat*
`.trim()
let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' || type == 'robo'? '🤖':'' ) 
    let user = global.db.users[m.sender]
    let rubah = global.db.users[m.sender].fox
    let kuda = global.db.users[m.sender].horse
    let kucing = global.db.users[m.sender].cat
    let anjing = global.db.users[m.sender].dog
    let robot = global.db.users[m.sender].robo
    switch (type) {
        case 'fox':
            if (rubah == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (rubah == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (10000 - __waktur)
            let waktur = clockStringFeed(_waktur)
            if (new Date - user.foxlastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
            break
        case 'cat':
            if (kucing == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (kucing == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (10000 - __waktuc)
            let waktuc = clockStringFeed(_waktuc)
            if (new Date - user.catlastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.catexp += 20
                    user.catlastfeed = new Date * 1
                    reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catexp -= (kucing * 100)
                            reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
            break
        case 'dog':
            if (anjing == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (anjing == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (10000 - __waktua)
            let waktua = clockStringFeed(_waktua)
            if (new Date - user.doglastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
            break
        case 'horse':
            if (kuda == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (kuda == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (10000 - __waktuk)
            let waktuk = clockStringFeed(_waktuk)
            if (new Date - user.horselastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
            break
            case 'robo':
            if (robot == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (robot == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __wakturb = (new Date - user.robolastfeed)
            let _wakturb = (10000 - __wakturb)
            let wakturb = clockStringFeed(_wakturb)
            if (new Date - user.robolastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.roboexp += 20
                    user.robolastfeed = new Date * 1
                    reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (robot > 0) {
                        let naiklvl = ((robot * 100) - 1)
                        if (user.roboexp > naiklvl) {
                            user.robo += 1
                            user.roboexp -= (robot * 100)
                            reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`)
            break
        default:
            return reply(`${info}`)
    }
}
break        
//==================================================================
case 'fighting':
 case 'fight': {
   function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
   if (!m.isGroup) return reply(mess.group)
    Rafael.fight = Rafael.fight ? Rafael.fight: {}
    const alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  	const alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']
    let alasanMenangRnd = alasanMenang[Math.floor(Math.random() * alasanMenang.length)]
    let alasanKalahRnd = alasanKalah[Math.floor(Math.random() * alasanKalah.length)]
    let user = global.db.users[m.sender]
    if (typeof Rafael.fight[m.sender] != "undefined" && Rafael.fight[m.sender] == true) return reply(`Kamu masih bertarung.`)
    let users = participants.map(a => a.id)
    var lawan
    lawan = users[Math.floor(users.length * Math.random())]
    while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
    }
    reply(`*Kamu* (level ${user.level}) menantang *${Rafael.getName(lawan)}* (level ${global.db.users[lawan].level}) dan sedang dalam pertarungan.\n\nTunggu 5 menit lagi dan lihat siapa yg menang.`)
    Rafael.fight[m.sender] = true
    await delay(300000)
    let kesempatan = []
    for (let i = 0; i < user.level; i++) kesempatan.push(m.sender)
    for (let i = 0; i < global.db.users[lawan].level; i++) kesempatan.push(lawan)
    let pointPemain = 0
    let pointLawan = 0
    for (let i = 0; i < 10; i++) {
        let unggul = getRandom(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
    }
    if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 10000
        user.money += hadiah
        user.limit += 1
        reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Kamu* (level ${user.level}) menang melawan *${Rafael.getName(lawan)}* (level ${global.db.users[lawan].level}) karena kamu ${alasanMenangRnd}\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`)
    } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        user.money -= denda
        user.limit += 1
        reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Kamu* (level ${user.level}) kalah melawan *${Rafael.getName(lawan)}* (level ${global.db.users[lawan].level}) karena kamu ${alasanKalahRnd}\n\nMoney kamu berkurang ${denda.toLocaleString()}\n+1 Limit`)
    } else {
        reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa`)
    }
    delete Rafael.fight[m.sender]
}
break        
//==================================================================
case 'gajian': {
  if (!m.isGroup) return reply(mess.group)
function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

  let LastClaim = global.db.users[m.sender].lastclaim
  let cdm = `${MeNit(new Date - LastClaim)}`
  let cds = `${DeTik(new Date - LastClaim)}`
  let cd1 = Math.ceil(44 - cdm)
  let cd2 = Math.ceil(59 - cds)
  if (new Date - global.db.users[m.sender].lastclaim > 2700000) {
    global.db.users[m.sender].money += 50000
    global.db.users[m.sender].exp += 100
    reply('Cie gajian nih, monggo duitnya~ +Rp50000')
    global.db.users[m.sender].lastclaim = new Date * 1
  } else return reply(`Kamu sudah gajian hari ini.\nSilahkan ngopi dan tunggu *${cd1} Menit ${cd2} Detik!* untuk gajian lagi!`)
}
break        
//==================================================================
case 'me':
case 'inv':
case 'inventory': {
  if (!m.isGroup) return reply(mess.group)
let inventory = {
  others: {
    joinlimit: true,
    health: true,
    money: true,
    chip: true,
    exp: true,
  },
  items: {
    bibitanggur: true,
    bibitmangga: true,
    bibitpisang: true,
    bibitapel: true,
    bibitjeruk: true,
    anggur: true,
    mangga: true,
    pisang: true,
    apel: true,
    jeruk: true,
    potion: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    diamond: true,
    gold: true,
    iron: true,
    umpan: true,
    upgrader: true,
    pet: true,
    petfood: true,
  },
  durabi: {
    sworddurability: true,
    pickaxedurability: true,
    fishingroddurability: true,
    armordurability: true,
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: {
      '0': '❌',
      '1': 'Wooden Fishingrod',
      '2': 'Stone Fishingrod',
      '3': 'Iron Fishingrod',
      '4': 'Gold Fishingrod',
      '5': 'Copper Fishingrod',
      '6': 'Diamond Fishingrod',
      '7': 'Emerald Fishingrod',
      '8': 'Crystal Fishingrod',
      '9': 'Obsidian Fishingrod',
      '10': 'God Fishingrod',
      '11': 'Hacker Fishingrod'
     }
  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
    robo: 10,
  },
  cooldowns: {}
}

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Rafael.user.jid : m.sender
  let user = global.db.users[who]

  if (!(who in global.db.users)) return reply(`User ${who} tidak ada di database!`)

  let sortedlevel = Object.entries(global.db.users).sort((a, b) => b[1].level - a[1].level)
  let userslevel = sortedlevel.map(v => v[0])
  let sortedchip = Object.entries(global.db.users).sort((a, b) => b[1].chip - a[1].chip)
  let userschip = sortedchip.map(v => v[0])
  let sortedmoney = Object.entries(global.db.users).sort((a, b) => b[1].money - a[1].money)
  let usersmoney = sortedmoney.map(v => v[0])
  let sorteddiamond = Object.entries(global.db.users).sort((a, b) => b[1].diamond - a[1].diamond)
  let usersdiamond = sorteddiamond.map(v => v[0])
  let sortedbank = Object.entries(global.db.users).sort((a, b) => b[1].bank - a[1].bank)
  let usersbank = sortedbank.map(v => v[0])
  let sortedgold = Object.entries(global.db.users).sort((a, b) => b[1].gold - a[1].gold)
  let usersgold = sortedgold.map(v => v[0])

  let tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  let items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let dura = Object.keys(inventory.durabi).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  let cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()

  let caption = `
🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : Rafael.getName(who)}* ${user.level ? `
➠ ${global.rpg.emoticon('level')} level: ${user.level}` : ''} 
${Object.keys(inventory.others).map(v => user[v] && `➠ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}${cooldowns ? `

*ʟɪꜱᴛ ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${global.rpg.emoticon('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}* ᴅᴀʀɪ *${userschip.length}*
${global.rpg.emoticon('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}* ᴅᴀʀɪ *${usersmoney.length}*
${global.rpg.emoticon('bank')} ᴛᴏᴘ ʙᴀɴᴋ *${usersbank.indexOf(who) + 1}* ᴅᴀʀɪ *${usersbank.length}*
${global.rpg.emoticon('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}* ᴅᴀʀɪ *${userslevel.length}*
${global.rpg.emoticon('diamond')} ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${usersdiamond.indexOf(who) + 1}* ᴅᴀʀɪ *${usersdiamond.length}*
${global.rpg.emoticon('gold')} ᴛᴏᴘ ɢᴏʟᴅ *${usersgold.indexOf(who) + 1}* ᴅᴀʀɪ *${usersgold.length}*

♻️ *ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs* :
${cooldowns}` : ''}
*✧ dungeon: ${user.lastdungeon == 0 ? '✅': '❌'}*
*✧ mining: ${user.lastmining == 0 ? '✅': '❌'}*
`.trim()

    reply(`${caption}`)
}
break        
        
case 'upgrade': {
  if (!m.isGroup) return reply(mess.group)
        let user = global.db.users[m.sender]
        let wood = user.wood * 1
        let rock = user.rock * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let diamond = user.diamond * 1
        let emerald = user.emerald * 1
        let armor = user.armor * 1
        let atm = user.atm
        let type = (args[0] || '').toLowerCase()
        
        let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan format *${prefix+command} [type]*
contoh *${prefix+command} fishingrod*

> *📌List yang bisa diupgrade*
${rpg.emoticon('fishingrod')}Fishingrod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
${rpg.emoticon('armor')}Armor
${rpg.emoticon('atm')}ATM
`.trim()
        
        switch (type) {
            case 'fishingrod':
                if (fishingrod == 0) {
                    let lmao = `Anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${prefix+command} fishingrod*`
                    return reply(`${lmao}`)
                }
                if (fishingrod > 9) return reply(`*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`)
                let _wood = fishingrod * 100
                let _string = fishingrod * 100
                let _money = fishingrod * 1000000
                if (wood < _wood || string < _string || money < _money) return reply(`Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`)
                user.fishingrod += 1
                user.wood -= _wood * 1
                user.string -= _string * 1
                user.money -= _money * 1
                user.fishingroddurability = 0 
                user.fishingroddurability += fishingrod * 50
                reply(`Success mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`)
                break
            case 'pickaxe':
                if (pickaxe == 0) {
                    let lmao = `Anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${prefix+command} Pickaxe*`
                    return reply(`${lmao}`)
                }
                if (pickaxe > 9) return reply(`*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`)
                let __rock = pickaxe * 250
                let __wood = pickaxe * 150
                let __money = pickaxe * 1500000
                if (rock < __rock || wood < __wood || money < __money) return reply(`
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - money}*` : ''}`)
                user.pickaxe += 1
                user.wood -= __wood * 1
                user.rock -= __rock * 1
                user.money -= __money * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                reply(`Success mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`)
                break
            case 'sword':
                if (sword == 0) {
                    let lmao = `Anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${prefix+command} sword*`
                    return reply(`${lmao}`)
                }
                if (sword > 9) return reply(`*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`)
                let _iron = sword * 250
                let ___wood = sword * 150
                let ___money = sword * 1000000
                if (iron < _iron || wood < ___wood || money < ___money) return reply(`
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - money}*` : ''}`)
                user.sword += 1
                user.iron -= _iron * 1
                user.wood -= ___wood * 1
                user.money -= ___money * 1
                user.sworddurability = 0 
                user.sworddurability += sword * 50 
                reply(`Success mengupgrade *${rpg.emoticon('sword')}Sword*`)
                break
                case 'armor':
                if (armor == 0) {
                    let lmao = `Anda belum memiliki *${rpg.emoticon('armor')}Armor*
untuk memilikinya ketik *${prefix+command} armor*`
                    return reply(`${lmao}`)
                }
                if (armor > 9) return reply(`*${rpg.emoticon('armor')}Armor* kamu sudah level max!!`)
                let _diamond = armor * 5
                let ____wood = armor * 150
                let ____money = armor * 1000000
                if (diamond < _diamond || wood < ____wood || money < ____money) return reply(`
Material Anda Kurang!!
${diamond < _diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${_diamond - diamond}*` : ''}${wood < ____wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${____wood - wood}*` : ''}${money < ____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${____money - money}*` : ''}`)
                user.armor += 1
                user.diamond -= _diamond * 1
                user.wood -= ____wood * 1
                user.money -= ____money * 1
                user.armordurability = 0 
                user.armordurability += sword * 50 
                reply(`Success mengupgrade *${rpg.emoticon('armor')}Armor*`)
                break
                case 'atm':
                if (atm == 0) {
                    let lmao = `Anda belum memiliki *${rpg.emoticon('atm')}Atm*
untuk memilikinya ketik *${prefix+command} atm*`
                    return reply(`${lmao}`)
                }
                if (atm > 999) return reply(`*${rpg.emoticon('atm')}Atm* kamu sudah level max!!`)
                let __diamond = atm * 3
                let _emerald = atm * 5
                let _____money = atm * 10000
                if (diamond < __diamond || emerald < _emerald || money < _____money) return reply(`
Material Anda Kurang!!
${diamond < __diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${__diamond - diamond}*` : ''}${emerald < _emerald ? `\n${rpg.emoticon('emerald')}Emerald kamu kurang *${_emerald - emerald}*` : ''}${money < _____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${_____money - money}*` : ''}`)
                user.atm += 1
                user.diamond -= __diamond * 1
                user.emerald -= _emerald * 1
                user.money -= _____money * 1
                user.fullatm = 0 
                user.fullatm += atm * 500000000
                reply(`Success mengupgrade *${rpg.emoticon('atm')}Atm*`)
                break
            default :
                return reply(`${teks}`)
        }
}
break  
//==================================================================
case 'transfer': {
  if (!m.isGroup) return reply(mess.group)
function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
const items = [
    'money', 'bank', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
    'anggur', 'apel', 'jeruk', 'mangga', 'pisang', 
    'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang',
]
    let user = global.db.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `Use format ${command} [type] [value] [number]
example ${prefix+command} money 9999 @62812xxxxxx

> *📍 Transferable items*
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    let _user = global.db.users[who]
    if (!who) return m.reply('Tag salah satu, atau ketik nomornya!')
    if (!(who in global.db.users)) return m.reply(`User ${who} tidak ada di database!`)
    if (user[type] * 1 < count) return m.reply(`*${rpg.emoticon(type)}${type}${special(type)}* kamu kurang sebanyak *${count - user[type]}*`)
    let previous = user[type] * 1
    let _previous = _user[type] * 1
    user[type] -= count * 1
    _user[type] += count * 1
    if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Success\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
    else {
        user[type] = previous
        _user[type] = _previous
        m.reply(`*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failed\n*📍 Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
    }
}
break 
//==================================================================
case 'selectskill': {
    if (!m.isGroup) return reply(mess.group);

    let user = global.db.users[m.sender];
    let skill = ["swordmaster", "necromancer", "witch", "archer", "magicswordmaster", "thief", "shadow"];
    let bintang = {
        "satu": "⭐",
        "dua": "⭐⭐",
        "tiga": "⭐⭐⭐",
        "empat": "⭐⭐⭐⭐",
        "lima": "⭐⭐⭐⭐⭐",
        "enam": "⭐⭐⭐⭐⭐⭐"
    };

    // Cek argumen
    let skil = (args[0] || '').toLowerCase(); // Pastikan args[0] ada
    if (!args[0]) {
        return reply(`Silakan pilih skill yang ingin kamu pilih dari daftar berikut:

${skill.map(s => `› ${s}`).join('\n')}

> *Contoh:*
${command} thief`);
    }

    // Cek apakah skill ada di daftar
    if (!skill.includes(skil)) {
        return reply(`Skill "${skil}" tidak ditemukan. Daftar skill yang tersedia:

${skill.map(s => `› ${s}`).join('\n')}

> *Contoh:*
${command} necromancer`);
    }

    // Periksa apakah user sudah memiliki skill
    if (user.skill === "") {
        user.skill = skil;
        reply(`Anda telah berhasil memilih skill "${skil}".`);
    } else {
        reply(`Anda sudah memiliki skill "${user.skill}". Anda tidak bisa mengganti skill.`);
    }
}
break;
//==================================================================
case 'sampah': {
    if (!m.isGroup) return reply(mess.group);
    
    const rewards = {
        exp: 500,
        money: 20999,
    };
    const cooldown = 2592000000; // 30 hari dalam milidetik
    let user = global.db.users[m.sender];

    // Hitung sisa waktu cooldown
    let remainingTime = user.lastmonthly + cooldown - new Date();

    // Jika masih dalam cooldown
    if (remainingTime > 0) {
        let seconds = Math.floor(remainingTime / 1000); // Sisa waktu dalam detik
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let months = Math.floor(days / 30);

        // Hitung sisa waktu dengan pembagian
        seconds %= 60;
        minutes %= 60;
        hours %= 24;
        days %= 30;

        return reply(
            `Kamu sudah mengambil claim bulanan. Silahkan menunggu *${months} bulan ${days} hari ${hours} jam ${minutes} menit ${seconds} detik* untuk mengambil lagi.`
        );
    }

    // Berikan reward
    let text = '';
    for (let reward of Object.keys(rewards)) {
        if (reward in user) {
            user[reward] += rewards[reward];
            text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`;
        }
    }
    reply('> *NYAMPAH*\n' + text.trim());

    // Atur waktu terakhir mengambil reward
    user.lastmonthly = new Date() * 1;
}
break;
//==================================================================
case 'roket': {
  if (!m.isGroup) return reply(mess.group)
function clockStringRoket(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let user = global.db.users[m.sender]
    let order = global.db.users[m.sender].rokets
    let timers = clockStringRoket(_timers)
    let name = user.registered ? user.name: Rafael.getName(m.sender)
    let id = m.sender
    let kerja = 'Roket'
    Rafael.misi = Rafael.misi ? Rafael.misi: {}
    if (id in Rafael.misi) {
        reply( `Selesaikan misi ${Rafael.misi[id][0]} terlebih dahulu`)
        throw false
    }
    if (user.health < 80) return m.reply(`Anda harus memiliki minimal 80 health`)
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let ngerok4 = Math.floor(Math.random() * 10)
        let ngerok5 = Math.floor(Math.random() * 10)

        let ngrk4 = (ngerok4 * 100000)
        let ngrk5 = (ngerok5 * 1000)

        let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`.trim()

        let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`.trim()

        let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`.trim()

        let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`.trim()

        let hsl = `
*[ Hasil Ngroket ${name} ]*
➕ 💹 Uang = [ ${ngrk4} ]
➕ ✨ Exp = [ ${ngrk5} ]
➕ 😍 Mendarat Selesai = +1
➕  📥Total Mendarat Sebelumnya : ${order}
`.trim()

        user.money += ngrk4
        user.exp += ngrk5
        user.rokets += 1
        user.health -= 80

		Rafael.misi[id] = [
            kerja,
            setTimeout(() => {
                delete Rafael.misi[id]
            }, 27000)
        ]
        
        setTimeout(() => {
            reply( hsl)
        }, 27000)

        setTimeout(() => {
            reply( rokit4)
        }, 25000)

        setTimeout(() => {
            reply( rokit3)
        }, 20000)

        setTimeout(() => {
            reply( rokit2)
        }, 15000)

        setTimeout(() => {
            reply( rokit)
        }, 10000)

        setTimeout(() => {
            reply( `🔍 Mencari Lokasi.....`)
        }, 0)
        user.lastmisi = new Date * 1
    } else m.reply(`Kamu sudah lelah. Silahkan ngopi dan menunggu selama *${timers}*, untuk menyelesaikan misi kembali`)
    }
    break        
//==================================================================
case 'rob':
case 'robbery':
    case 'maling':{
  if (!m.isGroup) return reply(mess.group)
function clockStringRob(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let user = global.db.users[m.sender]
    let __timers = (new Date - user.lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockStringRob(_timers)
    let id = m.sender
    let kerja = 'Rob'
    Rafael.misi = Rafael.misi ? Rafael.misi : {}
    if (id in Rafael.misi) {
        reply( `Selesaikan misi ${Rafael.misi[id][0]} terlebih dahulu`)
        throw false
    }
    if (user.health < 80) return reply('Anda harus memiliki minimal 80 health')
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let rndm1 = Math.floor(Math.random() * 10)
        let rndm2 = Math.floor(Math.random() * 10)
        
        let ran1 = (rndm1 * 100000)
        let ran2 = (rndm2 * 1000)

        let jln = `
🏘️          🚗

✔️ Mengincar target....
`.trim()

        let jln2 = `
🏘️     🚶

➕ Memulai aksi....
`.trim()

        let jln3 = `
🏘️

➕ Merampok....
`.trim()

        let jln4 = `
🚗



🏘️🚓

➕ 💹Berhasil kabur....
`.trim()

        let hsl = `
*[ Hasil Maling ]*

➕ 💹 Uang = [ ${ran1} ]
➕ ✨ Exp = [ ${ran2} ]
➕ 📦 Rob Selesai = +1

Dan health anda berkurang -80
`.trim()
        user.money += ran1
        user.exp += ran2
        user.health -= 80

		Rafael.misi[id] = [
        kerja,
        setTimeout(() => {
            delete Rafael.misi[id]
        }, 27000)
    	]
    
        setTimeout(() => {
            reply(hsl)
        }, 27000)

        setTimeout(() => {
            reply(jln4)
        }, 25000)

        setTimeout(() => {
            reply(jln3)
        }, 20000)

        setTimeout(() => {
            reply(jln2)
        }, 15000)

        setTimeout(() => {
            reply(jln)
        }, 10000)

        setTimeout(() => {
            reply('🔍Mencari Rumah.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else reply(`Kamu sudah lelah. Silahkan ngopi dan menunggu selama *${timers}*, untuk menyelesaikan misi kembali`)
    }
    break   
//==================================================================
case 'repair': {
if (!m.isGroup) return reply(mess.group)
const { default: MessageType } = require ('@whiskeysockets/baileys')

  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  global.db.users[m.sender].pickaxe = global.db.users[m.sender].pickaxe || 0
  global.db.users[m.sender].sword = global.db.users[m.sender].sword || 0
  global.db.users[m.sender].fishingrod = global.db.users[m.sender].fishingrod || 0
  global.db.users[m.sender].armor = global.db.users[m.sender].armor || 0
  let botol = global.botwm

let lgocraft = `
*「 R E P A I R 」*`

  let caption = `
> *「 R E P A I R 」*

▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣
▧ Armor 🥼

*❏ RECIPE*
▧ Pickaxe ⛏️
〉  20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

▧ Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

▧ FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

▧ Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond

> *Contoh: ${prefix+command} armor*
`
const sections = [
   {
	title: "REPAIR A TOOLS",
	rows: [
	    {title: "SWORD ⚔️", rowId: ".repair sword", description: "Repair Sword"},
	    {title: "PICKAXE ⛏️", rowId: ".repair pickaxe", description: "Repair Pickaxe"},
	    {title: "FISHINGROD 🥼", rowId: ".repair fishingrod", description: "Repair FishingRod"},
	    {title: "ARMOR 🥼", rowId: ".repair armor", description: "Repair Armor"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: 'SIGMA',
  title: lgocraft,
  buttonText: "R E P A I R",
  sections
}

  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.pickaxe == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.rock < 20 || user.wood < 20 || user.iron < 20 ) return m.reply(`Barang tidak cukup!`)
             user.rock -= 20
             user.wood -= 20
             user.iron -= 20
             user.diamond -= 1
             user.pickaxedurability = 100
            m.reply("Sukses memperbaiki!")
            break
          case 'sword':
          if (user.sworddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.sword == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.wood < 20 || user.iron < 20 || user.gold < 2 ) return m.reply(`Barang tidak cukup!`)
             user.wood -= 20
             user.iron -= 20
             user.gold -= 3
             user.diamond -= 1
             user.sworddurability = 100
            m.reply("Sukses memperbaiki!")
            break
            case 'fishingrod':
          if (user.fishingroddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.fishingrod == 0) return m.reply('Kamu belum memiliki ini')
            if(user.diamond < 1 || user.string < 20 || user.wood < 20 || user.iron < 20 ) return m.reply(`Barang tidak cukup!`)
             user.wood -= 20
             user.string -= 20
             user.iron -= 20
             user.diamond -= 1
             user.fishingroddurability = 100
            m.reply("Sukses memperbaiki!")
            break
            case 'armor':
          if (user.armordurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.armor == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.iron < 15 || user.gold < 2 ) return m.reply(`Barang tidak cukup!`)
             user.iron -= 15
             user.gold -= 2
             user.diamond -= 1
             user.armordurability = 100
            m.reply("Sukses memperbaiki!")
            break
          default:
            return await Rafael.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return Rafael.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}
break  
//==================================================================
case 'referal': {
  if (!m.isGroup) return reply(mess.group)
const { crypto } = require ("crypto")
const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

  let users = global.db.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Kode referal tidak valid'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Selamat!
+${xp_first_time} XP
`.trim())
    m.reply(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][Math.floor(Math.random() * 62)]).join('');

    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${command}ref ${code}`
let botNumber = '6281932309239'; // Ganti dengan nomor WhatsApp bot Anda
let command_link = `wa.me/${botNumber}?text=${encodeURIComponent(command_text)}`;

    let share_text = `
Dapatkan ${xp_first_time} XP untuk yang menggunakan link/kode referal dibawah ini

Referal Code: *${code}*

${command_link}
`.trim()
    m.reply(`
Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referal kamu: ${code}

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
break 
//==================================================================
case 'petstore': 
case 'petshop': {
  if (!m.isGroup) return reply(mess.group)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  global.db.users[m.sender].pickaxe = global.db.users[m.sender].pickaxe || 0
  global.db.users[m.sender].pedang = global.db.users[m.sender].pedang || 0
  global.db.users[m.sender].fishingrod = global.db.users[m.sender].fishingrod || 0
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hrobo = 10
  
  let hlion = 10
  let hrhinoceros = 10
  let hdragon = 10
  let hcentaur = 10
  let hkyubi = 10
  let hgriffin = 10
  let hphonix = 10
  let hwolf = 10

let logo = `> *P E T   S T O R E*
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖`
const sections = [
   {
	title: "Buy A Pet",
	rows: [
	    {title: "Cat 🐈", rowId: ".petshop cat", description: "Adopt A Cat"},
	    {title: "Dog 🐕", rowId: ".petshop dog", description: "Adopt A Dog"},
	    {title: "Horse 🐎", rowId: ".petshop horse", description: "Adopt A Horse"},
	    {title: "Fox 🦊", rowId: ".petshop fox", description: "Adopt A Fox"},
	    {title: "Robo 🤖", rowId: ".petshop robo", description: "Buy A Robo"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: "SIGMA",
  title: logo,
  buttonText: "ADOPT ME 🐾",
  sections
}

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hcat) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hcat
            global.db.users[m.sender].cat += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'dog':
          if (user.dog > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hdog) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hdog
            global.db.users[m.sender].dog += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'fox':
          if (user.fox > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hfox) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hfox
            global.db.users[m.sender].fox += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'horse':
          if (user.horse > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hhorse) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hhorse
            global.db.users[m.sender].horse += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'robo':
          if (user.robo > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hrobo) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hrobo
            global.db.users[m.sender].robo += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'lion':
          if (user.lion > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hlion) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hlion
            global.db.users[m.sender].lion += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'rhinoceros':
          if (user.rhinoceros > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hrhinoceros) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hrhinoceros
            global.db.users[m.sender].rhinoceros += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'dragon':
          if (user.dragon > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hdragon) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hdragon
            global.db.users[m.sender].dragon += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'centaur':
          if (user.centaur > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hcentaur) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hcentaur
            global.db.users[m.sender].centaur += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'kyubi':
          if (user.kyubi > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hkyubi) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hkyubi
            global.db.users[m.sender].kyubi += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'griffin':
          if (user.griffin > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hgriffin) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hgriffin
            global.db.users[m.sender].griffin += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'phonix':
          if (user.phonix > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hphonix) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hphonix
            global.db.users[m.sender].phonix += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'wolf':
          if (user.wolf > 0) return m.reply('Kamu sudah memiliki ini')
            if(user.pet < hwolf) return m.reply(`Pet Token anda kurang`)
            global.db.users[m.sender].pet -= hwolf
            global.db.users[m.sender].wolf += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            
          default:
              return await m.reply(`${logo}\n${caption}`)
            //return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return Rafael.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error!\n" + err.stack)
  }
  }
  break   
 //==================================================================
case 'kolam': {
  if (!m.isGroup) return reply(mess.group)
let user = global.db.users[m.sender]
let past = `╭━━━━「 *BIO* 」   
┊ *💌 Name :* ${user.registered ? user.name : Rafael.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *✨ Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Kepiting: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu}* Jenis`
  m.reply(past)
  }
break       
//==================================================================
case 'koboy': {
  if (!m.isGroup) return reply(mess.group);

  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  try {
    Rafael.tembak = Rafael.tembak || { musuh: [], tembak: [] };

    if (/kiri/i.test(text)) {
      let kiri = [
        ["🤠", "-", "-", "-", "-"],
        ["-", "🤠", "-", "-", "-"],
        ["-", "-", "🤠", "-", "-"],
        ["-", "-", "-", "🤠", "-"],
        ["-", "-", "-", "-", "🤠"]
      ];

      let posIndex = Rafael.tembak.tembak.indexOf("🤠");

      Rafael.tembak.tembak = posIndex > 0 ? kiri[posIndex - 1] : kiri[0];

      let pos = Rafael.tembak.musuh.join(" ") + "\n\n\n" + Rafael.tembak.tembak.join(" ");

      if (Rafael.tembak.musuh.indexOf("🥷") === Rafael.tembak.tembak.indexOf("🤠")) {
        return reply(`${pos}\n\nPerintah: ketik *${prefix+command} tembak* untuk menembak!`);
      }
      return reply(`${pos}\n\nPerintah: ketik *${prefix+command} kiri* atau *${prefix+command} kanan*`);
    } else if (/kanan/i.test(text)) {
      let kanan = [
        ["🤠", "-", "-", "-", "-"],
        ["-", "🤠", "-", "-", "-"],
        ["-", "-", "🤠", "-", "-"],
        ["-", "-", "-", "🤠", "-"],
        ["-", "-", "-", "-", "🤠"]
      ];

      let posIndex = Rafael.tembak.tembak.indexOf("🤠");

      Rafael.tembak.tembak = posIndex < 4 ? kanan[posIndex + 1] : kanan[4];

      let pos = Rafael.tembak.musuh.join(" ") + "\n\n\n" + Rafael.tembak.tembak.join(" ");

      if (Rafael.tembak.musuh.indexOf("🥷") === Rafael.tembak.tembak.indexOf("🤠")) {
        return reply(`${pos}\n\nPerintah: ketik *${prefix+command} tembak* untuk menembak!`);
      }
      return reply(`${pos}\n\nPerintah: ketik *${prefix+command} kiri* atau *${prefix+command} kanan*`);
    } else if (/tembak/i.test(text)) {
      if (Rafael.tembak.tembak.indexOf("🤠") === Rafael.tembak.musuh.indexOf("🥷")) {
        Rafael.tembak = {};
        global.db.users[m.sender].money += 1000;
        return reply("Selamat, Kamu menang!\n\nUang +1000 money");
      } else {
        return reply("Kamu meleset! Coba lagi.");
      }
    } else {
      let randMusuh = [
        ["🥷", "-", "-", "-", "-"],
        ["-", "🥷", "-", "-", "-"],
        ["-", "-", "🥷", "-", "-"],
        ["-", "-", "-", "🥷", "-"],
        ["-", "-", "-", "-", "🥷"]
      ];
      let randAku = [
        ["🤠", "-", "-", "-", "-"],
        ["-", "🤠", "-", "-", "-"],
        ["-", "-", "🤠", "-", "-"],
        ["-", "-", "-", "🤠", "-"],
        ["-", "-", "-", "-", "🤠"]
      ];

      let musuh = random(randMusuh);
      let aku = random(randAku);

      Rafael.tembak.musuh = musuh;
      Rafael.tembak.tembak = aku;

      let pos = Rafael.tembak.musuh.join(" ") + "\n\n\n" + Rafael.tembak.tembak.join(" ");

      if (Rafael.tembak.musuh.indexOf("🥷") === Rafael.tembak.tembak.indexOf("🤠")) {
        return reply(`${pos}\n\nPerintah: ketik *${prefix+command} tembak* untuk menembak!`);
      }
      return reply(`${pos}\n\nPerintah: ketik *${prefix+command} kiri* atau *${prefix+command} kanan*`);
    }
  } catch (e) {
    console.log(e);
      reply(e)
  }
}
break;
//==================================================================        
case 'pasar': {
  if (!m.isGroup) return reply(mess.group)
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
const Sbotol = 100
const Skardus = 100
const Skaleng = 100
const Sgelas = 100
const Splastik = 100

    const _armor = global.db.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Laut   | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🦀 Kepiting: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Udang: ${Sudang}
🦑 Cumi: ${Scumi}
🐙 Gurita: ${Sgurita}
🐡 Buntal: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Lumba: ${Slumba}
🐋 Paus: ${Spaus}
🦈 Hiu: ${Shiu}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Darat   | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🐃 Banteng: ${Sbanteng}
🐅 Harimau: ${Sharimau}
🐘 Gajah: ${Sgajah}
🐐 Kambing: ${Skambing}
🐼 Panda: ${Spanda}
🐃 Kerbau: ${Skerbau}
🐊 Buaya: ${Sbuaya}
🐂 Sapi: ${Ssapi}
🐒 Monyet: ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi: ${Sbabi}
🐔 Ayam: ${Sayam}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
📌 *Contoh penggunaan :*\n═┅═━––––––━––––––๑
${prefix+command} jual ayam [Jumlah]
`.trim()
    try {
        if (/pasar|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.users[m.sender].sampah
            switch (jualbeli) {

            case 'jual': 
                switch (_type) {                  
                     case 'banteng':
                        if (global.db.users[m.sender].banteng >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].banteng -= count * 1
                            reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
                        } else reply( `Banteng Kamu Tidak Cukup`.trim())
                        break
                        case 'harimau':
                        if (global.db.users[m.sender].harimau >= count * 1) {
                            global.db.users[m.sender].money += Sharimau * count
                            global.db.users[m.sender].harimau -= count * 1
                            reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
                        } else reply( `Harimau Kamu Tidak Cukup`.trim())
                        break
                        case 'gajah':
                        if (global.db.users[m.sender].gajah >= count * 1) {
                            global.db.users[m.sender].money += Sgajah * count
                            global.db.users[m.sender].gajah -= count * 1
                            reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
                        } else reply( `Gajah Kamu Tidak Cukup`.trim())
                        break
                        case 'kambing':
                        if (global.db.users[m.sender].kambing >= count * 1) {
                            global.db.users[m.sender].money += Skambing * count
                            global.db.users[m.sender].kambing -= count * 1
                            reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
                        } else reply( `Kambing Kamu Tidak Cukup`.trim())
                        break
                        case 'panda':
                        if (global.db.users[m.sender].panda >= count * 1) {
                            global.db.users[m.sender].money += Spanda * count
                            global.db.users[m.sender].panda -= count * 1
                            reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Panda Kamu Tidak Cukup`.trim())
                        break
                        case 'buaya':
                        if (global.db.users[m.sender].buaya >= count * 1) {
                            global.db.users[m.sender].money += Sbuaya * count
                            global.db.users[m.sender].buaya -= count * 1
                            reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Buaya Kamu Tidak Cukup`.trim())
                        break
                        case 'kerbau':
                        if (global.db.users[m.sender].kerbau >= count * 1) {
                            global.db.users[m.sender].money += Skerbau * count
                            global.db.users[m.sender].kerbau -= count * 1
                            reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
                        } else reply( `Kerbau Kamu Tidak Cukup`.trim())
                        break
                        case 'sapi':
                        if (global.db.users[m.sender].sapi >= count * 1) {
                            global.db.users[m.sender].money += Ssapi * count
                            global.db.users[m.sender].sapi -= count * 1
                            reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
                        } else reply( `Sapi Kamu Tidak Cukup`.trim())
                        break
                        case 'monyet':
                        if (global.db.users[m.sender].monyet >= count * 1) {
                            global.db.users[m.sender].money += Smonyet * count
                            global.db.users[m.sender].monyet -= count * 1
                            reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
                        } else reply( `Monyet Kamu Tidak Cukup`.trim())
                        break
                        case 'babi':
                        if (global.db.users[m.sender].babi >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].babi -= count * 1
                            reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
                        } else reply( `Babi Kamu Tidak Cukup`.trim())
                        break
                        case 'babihutan':
                        if (global.db.users[m.sender].babihutan >= count * 1) {
                            global.db.users[m.sender].money += Sbabihutan * count
                            global.db.users[m.sender].babihutan -= count * 1
                            reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
                        } else reply( `Babi Hutan Kamu Tidak Cukup`.trim())
                        break
                        case 'ayam':
                        if (global.db.users[m.sender].ayam >= count * 1) {
                            global.db.users[m.sender].money += Sayam * count
                            global.db.users[m.sender].ayam -= count * 1
                            reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
                        } else reply( `Ayam Kamu Tidak Cukup`.trim())
                        break
                        //mancing
                        case 'kepiting':
                        if (global.db.users[m.sender].kepiting >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].kepiting -= count * 1
                            reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
                        } else reply( `Kepiting Kamu Tidak Cukup`.trim())
                        break
                        case 'ikan':
                        if (global.db.users[m.sender].ikan >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].ikan -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
                        } else reply( `Ikan Kamu Tidak Cukup`.trim())
                        break
                        case 'dory':
                        if (global.db.users[m.sender].dory >= count * 1) {
                            global.db.users[m.sender].money += Sdory * count
                            global.db.users[m.sender].dory -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
                        } else reply( `Ikan Dory Kamu Tidak Cukup`.trim())
                        break
                        case 'gurita':
                        if (global.db.users[m.sender].gurita >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].gurita -= count * 1
                            reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
                        } else reply( `Gurita Kamu Tidak Cukup`.trim())
                        break
                        case 'buntal':
                        if (global.db.users[m.sender].buntal >= count * 1) {
                            global.db.users[m.sender].money += Sbuntal * count
                            global.db.users[m.sender].buntal -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
                        } else reply( `Ikan Buntal Kamu Tidak Cukup`.trim())
                        break
                        case 'hiu':
                        if (global.db.users[m.sender].hiu >= count * 1) {
                            global.db.users[m.sender].money += Shiu * count
                            global.db.users[m.sender].hiu -= count * 1
                            reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
                        } else reply( `Hiu Kamu Tidak Cukup`.trim())
                        break
                        case 'orca':
                        if (global.db.users[m.sender].orca >= count * 1) {
                            global.db.users[m.sender].money += Sorca * count
                            global.db.users[m.sender].orca -= count * 1
                            reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
                        } else reply( `Paus Orca Kamu Tidak Cukup`.trim())
                        break
                        case 'lumba':
                        if (global.db.users[m.sender].lumba >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].lumba -= count * 1
                            reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
                        } else reply( `Lumba Lumba Kamu Tidak Cukup`.trim())
                        break
                        case 'paus':
                        if (global.db.users[m.sender].paus >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].paus -= count * 1
                            reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
                        } else reply( `Paus Kamu Tidak Cukup`.trim())
                        break
                  case 'lobster':
                        if (global.db.users[m.sender].lobster >= count * 1) {
                            global.db.users[m.sender].money += Slobster * count
                            global.db.users[m.sender].lobster -= count * 1
                            reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
                        } else reply( `Lobster Kamu Tidak Cukup`.trim())
                        break
                     case 'udang':
                        if (global.db.users[m.sender].udang >= count * 1) {
                            global.db.users[m.sender].money += Sudang * count
                            global.db.users[m.sender].udang -= count * 1
                            reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
                        } else reply( `Udang Kamu Tidak Cukup`.trim())
                        break
                      case 'cumi':
                        if (global.db.users[m.sender].cumi >= count * 1) {
                            global.db.users[m.sender].money += Scumi * count
                            global.db.users[m.sender].cumi -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
                        } else reply( `Cumi Kamu Tidak Cukup`.trim())
                         break
                        case 'botol':
                        if (global.db.users[m.sender].botol >= count * 1) {
                            global.db.users[m.sender].money += Sbotol * count
                            global.db.users[m.sender].botol -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Sbotol * count} Money `.trim())
                        } else reply( `Botol Kamu Tidak Cukup`.trim())
                        break
                        case 'kaleng':
                        if (global.db.users[m.sender].kaleng >= count * 1) {
                            global.db.users[m.sender].money += Skaleng * count
                            global.db.users[m.sender].kaleng -= count * 1
                            reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
                        } else reply( `Kaleng Kamu Tidak Cukup`.trim())
                        break
                        case 'kardus':
                        if (global.db.users[m.sender].kardus >= count * 1) {
                            global.db.users[m.sender].money += Skardus * count
                            global.db.users[m.sender].kardus -= count * 1
                            reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
                        } else reply( `Kardus Kamu Tidak Cukup`.trim())
                        break
                        case 'gelas':
                        if (global.db.users[m.sender].gelas >= count * 1) {
                            global.db.users[m.sender].money += Sgelas * count
                            global.db.users[m.sender].gelas -= count * 1
                            reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
                        } else reply( `Gelas Kamu Tidak Cukup`.trim())
                        break
                        case 'plastik':
                        if (global.db.users[m.sender].plastik >= count * 1) {
                            global.db.users[m.sender].money += Splastik * count
                            global.db.users[m.sender].plastik -= count * 1
                            reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
                        } else reply( `Plastik Kamu Tidak Cukup`.trim())
                        break
                    default:
                        return m.reply(Kchat)
                }
                break
            default:
                return m.reply(Kchat)
            }

        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) { 
                       case 'banteng':
                        if (global.db.users[m.sender].banteng >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].banteng -= count * 1
                            reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
                        } else reply( `Banteng Kamu Tidak Cukup`.trim())
                        break
                        case 'harimau':
                        if (global.db.users[m.sender].harimau >= count * 1) {
                            global.db.users[m.sender].money += Sharimau * count
                            global.db.users[m.sender].harimau -= count * 1
                            reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
                        } else reply( `Harimau Kamu Tidak Cukup`.trim())
                        break
                        case 'gajah':
                        if (global.db.users[m.sender].gajah >= count * 1) {
                            global.db.users[m.sender].money += Sgajah * count
                            global.db.users[m.sender].gajah -= count * 1
                            reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
                        } else reply( `Gajah Kamu Tidak Cukup`.trim())
                        break
                        case 'kambing':
                        if (global.db.users[m.sender].kambing >= count * 1) {
                            global.db.users[m.sender].money += Skambing * count
                            global.db.users[m.sender].kambing -= count * 1
                            reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
                        } else reply( `Kambing Kamu Tidak Cukup`.trim())
                        break
                        case 'panda':
                        if (global.db.users[m.sender].panda >= count * 1) {
                            global.db.users[m.sender].money += Spanda * count
                            global.db.users[m.sender].panda -= count * 1
                            reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Panda Kamu Tidak Cukup`.trim())
                        break
                        case 'buaya':
                        if (global.db.users[m.sender].buaya >= count * 1) {
                            global.db.users[m.sender].money += Sbuaya * count
                            global.db.users[m.sender].buaya -= count * 1
                            reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Buaya Kamu Tidak Cukup`.trim())
                        break
                        case 'kerbau':
                        if (global.db.users[m.sender].kerbau >= count * 1) {
                            global.db.users[m.sender].money += Skerbau * count
                            global.db.users[m.sender].kerbau -= count * 1
                            reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
                        } else reply( `Kerbau Kamu Tidak Cukup`.trim())
                        break
                        case 'sapi':
                        if (global.db.users[m.sender].sapi >= count * 1) {
                            global.db.users[m.sender].money += Ssapi * count
                            global.db.users[m.sender].sapi -= count * 1
                            reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
                        } else reply( `Sapi Kamu Tidak Cukup`.trim())
                        break
                        case 'monyet':
                        if (global.db.users[m.sender].monyet >= count * 1) {
                            global.db.users[m.sender].money += Smonyet * count
                            global.db.users[m.sender].monyet -= count * 1
                            reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
                        } else reply( `Monyet Kamu Tidak Cukup`.trim())
                        break
                        case 'babi':
                        if (global.db.users[m.sender].babi >= count * 1) {
                            global.db.users[m.sender].money += Sbabi * count
                            global.db.users[m.sender].babi -= count * 1
                            reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
                        } else reply( `Babi Kamu Tidak Cukup`.trim())
                        break
                        case 'babihutan':
                        if (global.db.users[m.sender].babihutan >= count * 1) {
                            global.db.users[m.sender].money += Sbabihutan * count
                            global.db.users[m.sender].babihutan -= count * 1
                            reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
                        } else reply( `Babi Hutan Kamu Tidak Cukup`.trim())
                        break
                        case 'ayam':
                        if (global.db.users[m.sender].ayam >= count * 1) {
                            global.db.users[m.sender].money += Sayam * count
                            global.db.users[m.sender].ayam -= count * 1
                            reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
                        } else reply( `Ayam Kamu Tidak Cukup`.trim())
                        break
                        //mancing
                        case 'kepiting':
                        if (global.db.users[m.sender].kepiting >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].kepiting -= count * 1
                            reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
                        } else reply( `Kepiting Kamu Tidak Cukup`.trim())
                        break
                        case 'ikan':
                        if (global.db.users[m.sender].ikan >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].ikan -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
                        } else reply( `Ikan Kamu Tidak Cukup`.trim())
                        break
                        case 'dory':
                        if (global.db.users[m.sender].dory >= count * 1) {
                            global.db.users[m.sender].money += Sdory * count
                            global.db.users[m.sender].dory -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
                        } else reply( `Ikan Dory Kamu Tidak Cukup`.trim())
                        break
                        case 'gurita':
                        if (global.db.users[m.sender].gurita >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].gurita -= count * 1
                            reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
                        } else reply( `Gurita Kamu Tidak Cukup`.trim())
                        break
                        case 'buntal':
                        if (global.db.users[m.sender].buntal >= count * 1) {
                            global.db.users[m.sender].money += Sbuntal * count
                            global.db.users[m.sender].buntal -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
                        } else reply( `Ikan Buntal Kamu Tidak Cukup`.trim())
                        break
                        case 'hiu':
                        if (global.db.users[m.sender].hiu >= count * 1) {
                            global.db.users[m.sender].money += Shiu * count
                            global.db.users[m.sender].hiu -= count * 1
                            reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
                        } else reply( `Hiu Kamu Tidak Cukup`.trim())
                        break
                        case 'orca':
                        if (global.db.users[m.sender].orca >= count * 1) {
                            global.db.users[m.sender].money += Sorca * count
                            global.db.users[m.sender].orca -= count * 1
                            reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
                        } else reply( `Paus Orca Kamu Tidak Cukup`.trim())
                        break
                        case 'lumba':
                        if (global.db.users[m.sender].lumba >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].lumba -= count * 1
                            reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
                        } else reply( `Lumba Lumba Kamu Tidak Cukup`.trim())
                        break
                        case 'paus':
                        if (global.db.users[m.sender].paus >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].paus -= count * 1
                            reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
                        } else reply( `Paus Kamu Tidak Cukup`.trim())
                        break
                  case 'lobster':
                        if (global.db.users[m.sender].lobster >= count * 1) {
                            global.db.users[m.sender].money += Slobster * count
                            global.db.users[m.sender].lobster -= count * 1
                            reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
                        } else reply( `Lobster Kamu Tidak Cukup`.trim())
                        break
                     case 'udang':
                        if (global.db.users[m.sender].udang >= count * 1) {
                            global.db.users[m.sender].money += Sudang * count
                            global.db.users[m.sender].udang -= count * 1
                            reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
                        } else reply( `Udang Kamu Tidak Cukup`.trim())
                        break
                      case 'cumi':
                        if (global.db.users[m.sender].cumi >= count * 1) {
                            global.db.users[m.sender].money += Scumi * count
                            global.db.users[m.sender].cumi -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
                        } else reply( `Cumi Kamu Tidak Cukup`.trim())
                         break
                        case 'botol':
                        if (global.db.users[m.sender].botol >= count * 1) {
                            global.db.users[m.sender].money += Sbotol * count
                            global.db.users[m.sender].botol -= count * 1
                            reply( `Sukses Menjual ${count} Botol Dengan Harga ${Sbotol * count} Money `.trim())
                        } else reply( `Botol Kamu Tidak Cukup`.trim())
                        break         
                        case 'kaleng':
                        if (global.db.users[m.sender].kaleng >= count * 1) {
                            global.db.users[m.sender].money += Skaleng * count
                            global.db.users[m.sender].kaleng -= count * 1
                            reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
                        } else reply( `Kaleng Kamu Tidak Cukup`.trim())
                        break        
                        case 'kardus':
                        if (global.db.users[m.sender].kardus >= count * 1) {
                            global.db.users[m.sender].money += Skardus * count
                            global.db.users[m.sender].kardus -= count * 1
                            reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
                        } else reply( `Kardus Kamu Tidak Cukup`.trim())
                        break
                         case 'gelas':
                        if (global.db.users[m.sender].gelas >= count * 1) {
                            global.db.users[m.sender].money += Sgelas * count
                            global.db.users[m.sender].gelas -= count * 1
                            reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
                        } else reply( `Gelas Kamu Tidak Cukup`.trim())
                        break
                        case 'plastik':
                        if (global.db.users[m.sender].plastik >= count * 1) {
                            global.db.users[m.sender].money += Splastik * count
                            global.db.users[m.sender].plastik -= count * 1
                            reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
                        } else reply( `Plastik Kamu Tidak Cukup`.trim())
                        break       
                default:
                    return m.reply(Kchat)
            }
        }
} catch (err) {
console.log(util.format(err))
let e = String(err)
}
}
break   
//==================================================================
case 'ojek': 
    case 'ngojek':        {
  if (!m.isGroup) return reply(mess.group)
function clockStringOjek(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockStringOjek(_timers)
    let name = Rafael.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Ojek'
    Rafael.misi = Rafael.misi ? Rafael.misi: {}
    if (id in Rafael.misi) {
        reply( `Selesaikan misi ${Rafael.misi[id][0]} terlebih dahulu`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku4 = Math.floor(Math.random() * 10)
        let randomaku5 = Math.floor(Math.random() * 10)

        let rbrb4 = (randomaku4 * 100000)
        let rbrb5 = (randomaku5 * 1000)

        var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🛵
✔️ Mendapatkan orderan....
`.trim()

        var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️
➕ Mengantar ke tujuan....
`.trim()

        var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️
➕ Sampai di tujuan....
`.trim()

        var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶
➕ 💹Menerima gaji....
`.trim()

        var hsl = `
*[ Hasil Ngojek ${name} ]*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()
        
        user.money += rbrb4
        user.exp += rbrb5
        user.ojekk += 1

		Rafael.misi[id] = [
            kerja,
            setTimeout(() => {
                delete Rafael.misi[id]
            }, 27000)
        ]
        
        setTimeout(() => {
            m.reply(hsl)
        }, 27000)

        setTimeout(() => {
            m.reply(dimas4)
        }, 25000)

        setTimeout(() => {
            m.reply(dimas3)
        }, 20000)

        setTimeout(() => {
            m.reply(dimas2)
        }, 15000)

        setTimeout(() => {
            m.reply(dimas)
        }, 10000)

        setTimeout(() => {
            m.reply('🔍Mencari pelanggan.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else m.reply(`Kamu sudah lelah. Silahkan ngopi dan menunggu selama *${timers}*, untuk menyelesaikan misi kembali`)
}
break        
 //==================================================================
case 'malingbank': {
  if (!m.isGroup) return reply(mess.group)
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
const timeout = 604800000

    let user = db.users[m.sender]
    let time = user.lastmaling + 604800000
    if (new Date - user.lastmaling< 604800000) return m.reply(`📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`)
	let money = `${Math.floor(Math.random() * 30000)}`.trim()
	let exp = `${Math.floor(Math.random() * 999)}`.trim()
	let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
	user.money += money * 1
	user.exp += exp * 1
	user.kardus += kardus * 1
	user.lastmaling = new Date * 1
    m.reply(`Selamat kamu mendapatkan : \n💰+${money} Money\📦+${kardus} Kardus\n✨+${exp} Exp`)
    setTimeout(() => {
        reply(`Yuk waktunya Maling lagi 👋…`)
    }, timeout)
}
break       
//==================================================================
case 'mancing': {
  if (!m.isGroup) return reply(mess.group)
function clockStringMancing(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockStringMancing(_timers) 
    let name = Rafael.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Memancing'
    Rafael.misi = Rafael.misi ? Rafael.misi : {}
    if (id in Rafael.misi) {
        reply(`Selesaikan misi ${Rafael.misi[id][0]} terlebih dahulu`)
        throw false
    }
    if (user.umpan == 0) return m.reply('Kamu membutuhkan umpan 🪱 untuk memancing!')
    if (user.fishingrod == 0 ) return m.reply('Kamu harus membeli fishingrod 🎣 terlebih dahulu kalau ingin memancing!')
    if (new Date - user.lastmisi > 3600000) {
		let ikan1 = Math.floor(Math.random() * 5)
		let ikan2 = Math.floor(Math.random() * 5)
		let ikan3 = Math.floor(Math.random() * 5)
		let ikan4 = Math.floor(Math.random() * 5)
		let ikan5 = Math.floor(Math.random() * 5)
		let ikan6 = Math.floor(Math.random() * 5)
		let ikan7 = Math.floor(Math.random() * 5)
		let ikan8 = Math.floor(Math.random() * 5)
		let ikan9 = Math.floor(Math.random() * 5)
		let ikan10 = Math.floor(Math.random() * 5)
		let ikan11 = Math.floor(Math.random() * 5)
           
		let hsl = `   
*📮 Hasil tangkapan Mu*
${ikan1 ? `
🦀 Kepiting: ${ikan1}` : ''} ${ikan2 ? `
🦞 Lobster: ${ikan2}` : ''} ${ikan3 ? `
🦐 Udang: ${ikan3}` : ''} ${ikan4 ? `
🦑 Cumi: ${ikan4}` : ''} ${ikan5 ? `
🐙 Gurita: ${ikan5}` : ''} ${ikan6 ? `
🐡 Buntal: ${ikan6}` : ''} ${ikan7 ? `
🐠 Dory: ${ikan7}` : ''} ${ikan8 ? `
🐳 Orca: ${ikan8}` : ''} ${ikan9 ? `
🐬 Lumba: ${ikan9}` : ''} ${ikan10 ? `
🐋 Paus: ${ikan10}` : ''} ${ikan11 ? `
🦈 Hiu: ${ikan11}` : ''}
`.trim()
		user.kepiting += ikan1
		user.lobster += ikan2
		user.udang += ikan3
		user.cumi += ikan4
		user.gurita += ikan5
		user.buntal += ikan6
		user.dory += ikan7
		user.orca += ikan8
		user.lumba += ikan9
		user.paus += ikan10
		user.hiu += ikan11
		user.fishingroddurability -= 10
		user.umpan -= 1
		
		Rafael.misi[id] = [
        kerja,
        setTimeout(() => {
            delete Rafael.misi[id]
        }, 20000)
    	]
    
		setTimeout(() => {
			m.reply(hsl)
		}, 20000)

		setTimeout(() => {
			m.reply(`Ini Dia Hasil Tangkapanmu`)
		}, 18000)

		setTimeout(() => {
			m.reply('Kamu Berhasil Menarik Ikan Keluar Dari Air')
		}, 15000)

		setTimeout(() => {
			m.reply('Kamu Menarik Kailmu')
		}, 12000)
		
		setTimeout(() => {
			m.reply('Kail Mu Di Tarik Ikan...')
		}, 9000)

		setTimeout(() => {
			m.reply('Kamu Sedang Memancing...')
		}, 0)
		user.lastmisi = new Date * 1
	} else m.reply(`Kamu sudah lelah. Silahkan ngopi dan menunggu selama *${timers}*, untuk mancing kembali`)
}
break        
//==================================================================
case 'nguli': {
  if (!m.isGroup) return reply(mess.group)
    if (new Date - global.db.users[m.sender].lastnguli > 86400000) {
      global.db.users[m.sender].limit += 10
      m.reply('_🎉Selamat kamu mendapatkan +10 limit_')
      global.db.users[m.sender].lastnguli = new Date * 1
    } else m.reply('[💬] Anda sudah mengklaim upah nguli hari ini')
  }
break        
//==================================================================
case 'buy': {
  if (!m.isGroup) return reply(mess.group)
function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}
const items = {
    buy: {
        limit: {
            exp: 9999
        },
        chip: {
        	money: 1000000
        },
        exp: {
        	money: 1000
        },
        potion: {
            money: 1250
        },
        trash: {
            money: 40
        },
        wood: {
            money: 700
        },
        rock: {
            money: 850
        },
        string: {
            money: 400
        },
        iron: { 
        	money: 3000
        },
        diamond: {
            money: 500000
        },
        emerald: {
            money: 100000
        },
        gold: {
            money: 100000
        },
        common: {
            money: 2000
        },
        uncommon: {
            money: 20000
        },
        mythic: {
            money: 75000
        },
        legendary: {
            money: 200000
        },
        petfood: {
            money: 3500
        },
        pet: {
            money: 120000
        },
        anggur: {
            money: 2000
        },
        apel: {
            money: 2000
        },
        jeruk: {
            money: 2000
        },
        mangga: {
            money: 2000
        },
        pisang: {
        	money: 2000
        },
        bibitanggur: {
            money: 2000
        },
        bibitapel: {
            money: 2000
        },
        bibitjeruk: {
            money: 2000
        },
        bibitmangga: {
            money: 2000
        },
        bibitpisang: {
            money: 2000
        },
        umpan: {
        	money: 5000
        }     
    },
    sell: {
        limit: {
            exp: 999
        },
        exp: {
        	money: 1
        },
        chip: {
        	money: 1000000
        },
        potion: {
            money: 625
        },
        trash: {
            money: 20
        },
        wood: {
            money: 350
        },
        rock: {
            money: 425
        },
        string: {
            money: 200
        },
        iron: { 
        	money: 1500
        },
        diamond: {
            money: 250000
        },
        emerald: {
            money: 50000
        },
        gold: {
            money: 50000
        },
        common: {
            money: 1000
        },
        uncommon: {
            money: 10000
        },
        mythic: {
            money: 37500
        },
        legendary: {
            money: 100000
        },
        petfood: {
            money: 1750
        },
        pet: {
            money: 60000
        },
        anggur: {
            money: 1000
        },
        apel: {
            money: 1000
        },
        jeruk: {
            money: 1000
        },
        mangga: {
            money: 1000
        },
        pisang: {
        	money: 1000
        },
        bibitanggur: {
            money: 1000
        },
        bibitapel: {
            money: 1000
        },
        bibitjeruk: {
            money: 1000
        },
        bibitmangga: {
            money: 1000
        },
        bibitpisang: {
            money: 1000
        },
        umpan: {
        	money: 2500
        }
    }
}

    const item = (args[0] || '').toLowerCase()
    let user = db.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
*${decor.htki} 𝙱𝚄𝚈𝙸𝙽𝙶 ${decor.htka}*
`.trim()) : 
(`
*${decor.htki} 𝚂𝙴𝙻𝙻𝙸𝙽𝙶 ${decor.htka}*
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()) : 
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim())
)
    
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(footer)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Kamu membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)} Lagi, Untuk Membeli *${total}* ${capitalize(item)} ${rpg.emoticon(item)}. Kamu hanya memiliki *${user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return reply(`Sukses Membeli *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethod] * total} ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`)
    } else {
    	let paymentMethot = Object.keys(listItems[item]).find(v => v in user)
        if (user[item] < total) return m.reply(`You don't have enough *${capitalize(item)} ${rpg.emoticon(item)}* to sell, you only have ${user[item]} items`)
        user[item] -= total
        user[paymentMethot] += listItems[item][paymentMethot] * total
        return reply(`Sukses Menjual *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethot] * total} ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`)
    }
}
break        
//=========================================
case 'kerja':
case 'bekerja': {
  if (!m.isGroup) return reply(mess.group)
function clockStringKerja(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let type = (args[0] || '').toLowerCase()
    let users = global.db.users[m.sender]
    let time = users.lastkerja + 30000
    let __timers = (new Date - users.lastkerja)
    let _timers = (1000 - __timers)
    let timers = clockStringKerja(_timers)

    let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]

    let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
    let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
    
    let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang', 'sakit jiwa', 'sakit hati', 'hampir tewas']
    let pasien = pasie[Math.floor(Math.random() * pasie.length)]

    let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
    let panen = pane[Math.floor(Math.random() * pane.length)]

    let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
    let bengkel = bengke[Math.floor(Math.random() * bengke.length)]

    let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
    let rumah = ruma[Math.floor(Math.random() * ruma.length)]

    if (/kerja/i.test(command)) {
        switch (type) {
            case 'ojek':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockStringKerja(time - new Date())}`)
let hasilojek = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilojek * 1
	              users.lastparming = new Date * 1
reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} ${global.rpg.emoticon('money')}*`)
break
            case 'pedagang':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockStringKerja(time - new Date())}`)
let hasildagang = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildagang * 1
	              users.lastparming = new Date * 1
reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} ${global.rpg.emoticon('money')}*`)
break
            case 'dokter':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockStringKerja(time - new Date())}`)
let hasildokter = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildokter * 1
	              users.lastparming = new Date * 1
reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* ${global.rpg.emoticon('money')}`)
break
            case 'petani':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockStringKerja(time - new Date())}`)
let hasiltani = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasiltani * 1
	              users.lastparming = new Date * 1
reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} ${global.rpg.emoticon('money')}*`)
break
            case 'montir':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockStringKerja(time - new Date())}`)
let hasilmontir = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilmontir * 1
	              users.lastparming = new Date * 1
reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* ${global.rpg.emoticon('money')}`)
break
            case 'kuli':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockStringKerja(time - new Date())}`)
let hasilkuli = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilkuli * 1
	              users.lastparming = new Date * 1
reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} ${global.rpg.emoticon('money')}*`)
break
            default:
return reply(`*Pilih Pekerjaan Yang Kamu Inginkan*\n\n_• Kuli_ \n_• Montir_ \n_• Petani_ \n_• Dokter_ \n_• Pedagang_ \n_• Ojek_ \n\nContoh Penggunaan :\n*${prefix+command} kuli*`)
        }
    }
}
break   
//=========================================        
case 'bansos':
    case 'korupsi':{
  if (!m.isGroup) return reply(mess.group)
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function clockStringBansos(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
  }

  let user = global.db.users[m.sender];
  let randomaku = Math.floor(Math.random() * 101);
  let randomkamu = Math.floor(Math.random() * 101);
  let __timers = new Date() - user.lastbansos;
  let _timers = 360 - __timers;
  let timers = clockStringBansos(_timers);

  if (user.money < 1000) {
    return reply(`Uang kamu harus diatas 1000 money untuk dapat bansos!`);
  }

  if (new Date() - user.lastbansos > 300000) {
    if (randomaku > randomkamu) {
      user.money -= 3000000;
      user.lastbansos = new Date() * 1;
      return Rafael.sendMessage(m.chat, {
        image: { url: 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg' },
        caption: `Oops, kamu ketauan korupsi uang bansos!🕴️💰,  dan kamu harus membayar denda 3 juta rupiah!💵`
      });
    } else if (randomaku < randomkamu) {
      user.money += 3000000;
      user.lastbansos = new Date() * 1;
      return Rafael.sendMessage(m.chat, {
        image: { url: 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg' },
        caption: `Mantapp! Kamu berhasil korupsi dana bansos!🕴️💰,  dan kamu mendapat 3 juta rupiah!💵`
      });
    } else {
      user.lastbansos = new Date() * 1;
      return reply(`Maaf! Kamu tidak berhasil korupsi bansos, tapi kamu tidak dipenjara karena kamu *melarikan diri🏃*`);
    }
  } else {
    return reply(`Silahkan tunggu beberapa menit sampai polisi tidak melihatmu untuk korupsi lagi!`);
  }
}
break;        
//=========================================
case 'taxy': 
    case 'taxi':
    case 'taksi': {
  if (!m.isGroup) return reply(mess.group)
  function clockStringTaksi(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockStringTaksi(_timers)
    let name = Rafael.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Taxy'
    Rafael.misi = Rafael.misi ? Rafael.misi : {}
    if (id in Rafael.misi) {
        reply(`Selesaikan misi ${Rafael.misi[id][0]} terlebih dahulu`)
        throw false
    }
    if (new Date - user.lastmisi > 3600000) {
        let randomaku1 = Math.floor(Math.random() * 1000000)
        let randomaku2 = Math.floor(Math.random() * 10000)
        
        var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🚕


✔️ Mendapatkan orderan....
`.trim()

        var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳  🌳 🏘️  🏘️🏡


🚖 Mengantar Ke tujuan.....
`.trim()

        var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳  🌳 🏘️


🚖 Selesai Mengantar Pelanggan....
`.trim()

        var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

        var hsl = `
*[ Hasil Taxy ${name} ]*
➕ 💹 Uang = [ ${randomaku1} ]
➕ ✨ Exp = [ ${randomaku2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

        user.money += randomaku1
        user.exp += randomaku2
        user.ojekk += 1
        
        Rafael.misi[id] = [
            kerja,
        setTimeout(() => {
            delete Rafael.misi[id]
        }, 27000)
        ]
        
        setTimeout(() => {
            reply(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            reply(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            reply(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
            reply(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            reply(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            reply('🔍Mencari pelanggan.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else reply(`Kamu sudah lelah. Silahkan ngopi dan menunggu selama *${timers}*, untuk menyelesaikan misi kembali`)
}
break        
//=========================================\\
case 'leaderboard': {
  if (!m.isGroup) return reply(mess.group)
const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
const { areJidsSameUser } = require ('@whiskeysockets/baileys')
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}
const leaderboards = [
    'level',
    'exp',
    'limit',
    'money',
    'iron',
    'gold',
    'diamond',
    'emerald',
    'trash',
    'joinlimit',
    'potion',
    'petFood',
    'wood',
    'rock',
    'string',
    'common',
    'uncommon',
    'mythic',
    'legendary',
    'pet',
    'bank',
    'chip',
    'skata'
]
    let users = Object.entries(global.db.users).map(([key, value]) => {
        return {
            ...value, jid: key
        }
    })
    let imgr = getRandom()
    let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
    let type = (args[0] || '').toLowerCase()
    const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
    let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `
⮕ ${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ᴅɪғғᴇʀᴇɴᴛ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ:
${command} [type]
★ ᴇxᴀᴍᴩʟᴇ:
${command} legendary`.trim()
    if (!leaderboard.includes(type))
        return await reply('*––––『 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳 』––––*\n' + wrong, {
        contextInfo: {
            
        }
    })
    let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)): 0
    let sortedItem = users.map(toNumber(type)).sort(sort(type))
    let userItem = sortedItem.map(enumGetKey)
    // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
    let text = `
🏆 ʀᴀɴᴋ: ${userItem.indexOf(m.sender) + 1} ᴏᴜᴛ ᴏғ ${userItem.length}

 > *${rpg.emoticon(type)} ${type}*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${user.registered ? user.name: Rafael.getName(user.jid)} \nwa.me/`: 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
    return await reply(text,{
        contextInfo: {
            mentionedJid: [...userItem.slice(page * 0, page * 5 + 5)].filter(v => !participants.some(p => areJidsSameUser(v, p.id))),
           
        }
    })
}
break        
//=========================================\\
case 'mulung': {
  if (!m.isGroup) return reply(mess.group)
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    return hours + " jam " + minutes + " menit " + seconds + " detik"
}
    let user = global.db.users[m.sender]
    let time = user.lastmulung + 1800000

    if (new Date - user.lastmulung < 1800000) return reply(`Anda sudah lelah untuk mulung\nTunggu selama *${msToTime(time - new Date())}* lagi`)

    let botol = Math.floor(Math.random() * 1000)
    let kaleng = Math.floor(Math.random() * 1000)
    let kardus = Math.floor(Math.random() * 1000)
    let gelas = Math.floor(Math.random() * 1000)
    let plastik = Math.floor(Math.random() * 1000)

    user.botol += botol * 1
    user.kaleng += kaleng * 1
    user.kardus += kardus * 1
    user.gelas += gelas * 1
    user.plastik += plastik * 1
    user.lastmulung = new Date * 1
    reply(`Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`)
}
break        
//=========================================\\
case 'mining': {
  Array.prototype.getRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
};

// For numbers, you can use a similar approach if needed
Number.prototype.getRandom = function () {
    return Math.floor(Math.random() * this);
};
function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 1000,
            trash: 101,
            string: 25,
            rock: 30,
            iron: 25,
            diamond: 10,
            emerald: 4,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 40 - user.cat * 4,
            pickaxedurability: 10
        }
    }
    return rewards
}
const cooldown = 300000;
let user = global.db.users[m.sender];
    let timers = cooldown - (new Date() - user.lastmining);
    if (user.health < 80) {
        return reply(`
⚠️ Butuh setidaknya 80 ❤️Healths untuk menambang!! ⚠️
Silakan beli ❤️Healths terlebih dahulu dengan mengetik *${prefix}buy potion <jumlah>*,
dan ketik *${prefix}heal <jumlah>* untuk menggunakan potion.
`.trim());
    }

    if (user.pickaxe == 0) {
        return reply('⛏️ Kamu tidak bisa menambang tanpa alat penambang (pickaxe)! ⛏️');
    }

    if (new Date() - user.lastmining <= cooldown) {
        return reply(`
⏳ Kamu sudah menambang sebelumnya! Silakan tunggu *${(timers / 1000).toFixed(2)} detik* sebelum menambang lagi.
`.trim());
    }

    const rewards = reward(user);
    let text = 'Kamu telah menambang dan kehilangan';
    for (const lost in rewards.lost) {
        if (user[lost]) {
            const total = rewards.lost[lost].getRandom();
            user[lost] -= total * 1;
            if (total) {
                text += `\n${global.rpg.emoticon(lost)} *${total} ${lost}*`;
            }
        }
    }

    text += '\n\nNamun, kamu berhasil nambang:';
    for (const rewardItem in rewards.reward) {
        if (rewardItem in user) {
            const total = rewards.reward[rewardItem].getRandom();
            user[rewardItem] += total * 1;
            if (total) {
                text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`;
            }
        }
    }

    reply(text.trim());
    user.lastmining = new Date() * 1;
}
break
//=========================================\\
case 'nabung': {
const xpperlimit = 1
  let user = global.db.users[m.sender]
  let count = command.replace(/^nabung/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return reply('Kamu belum mempunyai ATM!')
  if (user.bank > user.fullatm) return reply('Uang di bankmu sudah penuh!')
  if (count > user.fullatm - user.bank) return reply('Uangnya ngga muat di bank')
  if (global.db.users[m.sender].money >= xpperlimit * count) {
    global.db.users[m.sender].money -= xpperlimit * count
    global.db.users[m.sender].bank += count
    reply(`Sukses menabung sebesar ${count} Money 💹`)
  } else reply(`[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`)
}
 break        
//=========================================\\
 case 'fightnaga':
  case 'perangnaga': {
    if (!m.isGroup) return reply(mess.group)
function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
Rafael.level = global.db.users[m.sender]
  Rafael.fightnaga = Rafael.fightnaga ? Rafael.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof Rafael.fightnaga[m.sender] != "undefined" && Rafael.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

  let users = participants.map(a => a.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)
  reply(`*Pet Kamu* (🐉naga ${nogorojo} ) ⚔️menantang 🐉naganya *${penumpang}* (🐉naga kamu ) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

  Rafael.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  const alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  const alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  let i
  for (i=0;i<global.db.users[m.sender].naga;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].naga;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🐉Kamu* (naga ${global.db.users[m.sender].naga}) MENANG melawan 🐉naganya *${Rafael.getName(lawan)}* (naga ${global.db.users[lawan].naga}) karena naga🐉kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🐉Kamu* (naga ${global.db.users[m.sender].naga}) KALAH melawan 🐉naganya *${Rafael.getName(lawan)}* (naga ${global.db.users[lawan].naga}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
  }

  delete Rafael.fightnaga[m.sender]
}
break       
//=========================================\\
case 'fightkyubi':
    case 'perangkyubi':{
  if (!m.isGroup) return reply(mess.group)
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
Rafael.level = global.db.users[m.sender]
  Rafael.fightnaga = Rafael.fightnaga ? Rafael.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof Rafael.fightnaga[m.sender] != "undefined" && Rafael.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  reply(`*Pet Kamu* (🦊kyubi ${penumpang}) ⚔️menantang 🦊kyubinya *${nogorojo}* (🦊kyubi kamu) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

  Rafael.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  let i
  let unggul
  for (i=0;i<global.db.users[m.sender].kyubi;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].kyubi;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🦊Kamu* (kyubi ${global.db.users[m.sender].kyubi}) MENANG melawan 🦊kyubinya *${Rafael.getName(lawan)}* (kyubi ${global.db.users[lawan].kyubi}) karena kyubi🦊kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🦊Kamu* (kyubi ${global.db.users[m.sender].kyubi}) KALAH melawan 🦊kyubinya *${Rafael.getName(lawan)}* (kyubi ${global.db.users[lawan].kyubi}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
  }

  delete Rafael.fightnaga[m.sender]
}
break        
//=========================================\\
case 'fightphonix': {
  if (!m.isGroup) return reply(mess.group)
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
Rafael.level = global.db.users[m.sender]
  Rafael.fightnaga = Rafael.fightnaga ? Rafael.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof Rafael.fightnaga[m.sender] != "undefined" && Rafael.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  reply(`*Pet Kamu* (🦅phonix ${penumpang}) ⚔️menantang 🦅phonixnya *${nogorojo}* (🦅phonix kamu) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

  Rafael.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (i=0;i<global.db.users[m.sender].phonix;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].phonix;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🦅Kamu* (phonix ${global.db.users[m.sender].phonix}) MENANG melawan 🦅phonixnya *${Rafael.getName(lawan)}* (phonix ${global.db.users[lawan].phonix}) karena phonix🦅kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 10000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🦅Kamu* (phonix ${global.db.users[m.sender].phonix}) KALAH melawan 🦅phonixnya *${Rafael.getName(lawan)}* (phonix ${global.db.users[lawan].phonix}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
  }

  delete Rafael.fightnaga[m.sender]
}
break
//=========================================\\
case 'fightkucing': {
  if (!m.isGroup) return reply(mess.group)
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
Rafael.level = global.db.users[m.sender]
  Rafael.fightnaga = Rafael.fightnaga ? Rafael.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof Rafael.fightnaga[m.sender] != "undefined" && Rafael.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle karena arena yg kamu miliki sedang kamu pakai .*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  reply(`*Pet Kamu* (🐱kucing ${penumpang}) menantang 🐈kucingnya *${nogorojo}* (🐱kucing kamu) lagi kelahi rebutin bini.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

  Rafael.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (i=0;i<global.db.users[m.sender].kucing;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].kucing;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🐈Kamu* (kucing ${global.db.users[m.sender].kucing}) MENANG melawan 🐈kucingnya *${Rafael.getName(lawan)}* (kucing ${global.db.users[lawan].kucing}) karena kucing🐈kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🐈Kamu* (kucing ${global.db.users[m.sender].kucing}) KALAH melawan 🐈kucingnya *${Rafael.getName(lawan)}* (kucing ${global.db.users[lawan].kucing}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
  }

  delete Rafael.fightnaga[m.sender]
}
 break
 //=========================================\\
case 'fightgriffin': {
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
if (!m.isGroup) return reply(mess.group)
Rafael.level = global.db.users[m.sender]
  Rafael.fightnaga = Rafael.fightnaga ? Rafael.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof Rafael.fightnaga[m.sender] != "undefined" && Rafael.fightnaga[m.sender] == true) return reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  m.reply(`*Pet Kamu* (🦚griffin ${penumpang}) ⚔️menantang 🦚griffinnya *${nogorojo}* (🦚griffin kamu) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

  Rafael.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (i=0;i<global.db.users[m.sender].griffin;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].griffin;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    m.reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🦚Kamu* (griffin ${global.db.users[m.sender].griffin}) MENANG melawan 🦚griffinnya *${Rafael.getName(lawan)}* (griffin ${global.db.users[lawan].griffin}) karena griffin🦚kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    m.reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🦚Kamu* (griffin ${global.db.users[m.sender].griffin}) KALAH melawan 🦚griffinnya *${Rafael.getName(lawan)}* (griffin ${global.db.users[lawan].griffin}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    m.reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
  }

  delete Rafael.fightnaga[m.sender]
}
break
//=========================================\\
case 'fightcentaur': 
case 'perangcentaur': {
  if (!m.isGroup) return reply(mess.group)
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak', 'bu murni', 'pak rama', 'miss nova', 'carina', 'hanna', 'syifa', 'alya', 'reyvani', 'meisya', 'shine', 'jovan', 'zhio', 'fathih', 'carisa', 'lisa', 'chelsea', 'ica', 'ici', 'kira']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
Rafael.level = global.db.users[m.sender]
  Rafael.fightnaga = Rafael.fightnaga ? Rafael.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof Rafael.fightnaga[m.sender] != "undefined" && Rafael.fightnaga[m.sender] == true) return m.reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  m.reply(`*Pet Kamu* (🐴centaur ${penumpang}) ⚔️menantang 🐴centaurnya *${nogorojo}* (🐴centaur kamu) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

  Rafael.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (i=0;i<global.db.users[m.sender].centaur;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].centaur;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    m.reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🐴Kamu* (centaur ${global.db.users[m.sender].centaur}) MENANG melawan 🐴centaurnya *${Rafael.getName(lawan)}* (centaur ${global.db.users[lawan].centaur}) karena centaur🐴kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    m.reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\n*Pet🐴Kamu* (centaur ${global.db.users[m.sender].centaur}) KALAH melawan 🐴centaurnya *${Rafael.getName(lawan)}* (centaur ${global.db.users[lawan].centaur}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    m.reply(`*${Rafael.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${Rafael.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
  }

  delete Rafael.fightnaga[m.sender]
}
break        
//=========================================\\
case 'berburu': {
  if (!m.isGroup) return reply(mess.group)
    function clockStringBerburu(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockStringBerburu(_timers) 
    let name = Rafael.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Berburu'
    Rafael.misi = Rafael.misi ? Rafael.misi : {}
    if (id in Rafael.misi) {
        return reply( `Selesaikan misi ${Rafael.misi[id][0]} terlebih dahulu`)
     }
    if (new Date - user.lastmisi > 3600000) {
		let hewan1 = Math.floor(Math.random() * 10)
		let hewan2 = Math.floor(Math.random() * 10)
		let hewan3 = Math.floor(Math.random() * 10)
		let hewan4 = Math.floor(Math.random() * 10)
		let hewan5 = Math.floor(Math.random() * 10)
		let hewan6 = Math.floor(Math.random() * 10)
		let hewan7 = Math.floor(Math.random() * 10)
		let hewan8 = Math.floor(Math.random() * 10)
		let hewan9 = Math.floor(Math.random() * 10)
		let hewan10 = Math.floor(Math.random() * 10)
		let hewan11 = Math.floor(Math.random() * 10)
		let hewan12 = Math.floor(Math.random() * 10)
		
		let hsl = `🕸 *Hasil Berburu ${user.registered ? user.name : Rafael.getName(m.sender)}* 
${hewan1 ? `
🐂 Banteng: ${hewan1}` : ''} ${hewan2 ? `
🐅 Harimau: ${hewan2}` : ''} ${hewan3 ? `
🐘 Gajah: ${hewan3}` : ''} ${hewan4 ? `
🐐 Kambing: ${hewan4}` : ''} ${hewan5 ? `
🐼 Panda: ${hewan5}` : ''} ${hewan6 ? `
🐊 Buaya: ${hewan6}` : ''} ${hewan7 ? `
🐃 Kerbau: ${hewan7}` : ''} ${hewan8 ? `
🐮 Sapi: ${hewan8}` : ''} ${hewan9 ? `
🐒 Monyet: ${hewan9}` : ''} ${hewan10 ? `
🐗 Babi Hutan: ${hewan10}` : ''} ${hewan11 ? `
🐖 Babi: ${hewan11}` : ''} ${hewan12 ? `
🐓 Ayam: ${hewan12}` : ''}
`.trim()

		user.banteng += hewan1
		user.harimau += hewan2
		user.gajah += hewan3
		user.kambing += hewan4
		user.panda += hewan5
		user.buaya += hewan6
		user.kerbau += hewan7
		user.sapi += hewan8
		user.monyet += hewan9
		user.babihutan += hewan10
		user.babi += hewan11
		user.ayam += hewan12
		
		Rafael.misi[id] = [
        	kerja,
        setTimeout(() => {
            delete Rafael.misi[id]
        }, 20000)
    	]
    
		setTimeout(() => {
			reply(`${hsl}`)
		}, 20000)

		setTimeout(() => {
			reply(`Nah ini dia! Mengumpulkan mangsa...`)
		}, 18000)

		setTimeout(() => {
			reply('🔥 Dorr')
		}, 15000)

		setTimeout(() => {
			reply('👊 Dapat Sasaran')
		}, 14000)

		setTimeout(() => {
			reply('🦣 Sedang mencari mangsa...')
		}, 0)
		user.lastmisi = new Date * 1
	} else reply(`Kamu sudah lelah. Silahkan ngopi dan menunggu selama *${timers}*, untuk menyelesaikan misi kembali`)
}
break        
//=========================================\\
case 'polisi': {
  if (!m.isGroup) return reply(mess.group)
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = Rafael.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Polisi'
    Rafael.misi = Rafael.misi ? Rafael.misi: {}
    if (id in Rafael.misi) {
        reply(`Selesaikan Misi ${Rafael.misi[id][0]} Terlebih Dahulu`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku1 = Math.floor(Math.random() * 10)
        let randomaku2 = Math.floor(Math.random() * 10)

        let rbrb1 = (randomaku1 * 100000)
        let rbrb2 = (randomaku2 * 1000)

        var dimas = `
👮Mengejar Pencuri....
`.trim()

        var dimas2 = `
👮Menangkap pencuri....
`.trim()

        var dimas3 = `
🚔Membawa ke kantor polisi dan di penjara
`.trim()

        var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

        var hsl = `
*[ Hasil Polisi ${name} ]*
➕ 💹 Uang = [ ${rbrb1} ]
➕ ✨ Exp = [ ${rbrb2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

        user.money += rbrb1
        user.exp += rbrb2
        user.ojekk += 1

        Rafael.misi[id] = [
            kerja,
            setTimeout(() => {
delete Rafael.misi[id]
            }, 27000)
        ]

        setTimeout(() => {
            reply(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            reply(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            reply(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
           reply(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            reply(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            reply('Sedang Berpatroli.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else reply(`Kamu sudah lelah. Silahkan ngopi dan menunggu selama *${timers}*, untuk menyelesaikan misi kembali`)
}
break        
//=========================================\\
case 'berdagang': {
  if (!m.isGroup) return reply(mess.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockStringDagang(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

    let dapat = (Math.floor(Math.random() * 5000))
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return reply ('Tag temanmu yang ingin kamu ajak dagang! Biar kalau ngga laku kamu ngga sendirian')
    if (typeof db.users[who] == 'undefined') return reply('Pengguna tidak ada di dalam database')
    let __timers = (new Date - global.db.users[m.sender].lastdagang)
    let _timers = (28800000 - __timers)
    let timers = clockStringDagang(_timers)
    let users = global.db.users
    let username = Rafael.getName(who)
    if (new Date - global.db.users[m.sender].lastdagang > 28800000) {
        if (4999 > users[who].money) return reply ('Target tidak memiliki modal. Harap masukkan modal 5000')
        if (4999 > users[m.sender].money) return reply ('Kamu tidak memiliki modal. Harap masukkan modal 5000')
        users[who].money -= dapat * 1
        users[m.sender].money -= dapat * 1
        global.db.users[m.sender].lastdagang = new Date * 1
        reply(`Mohon tunggu kak..\nKamu dan @${who.replace(/@.+/, '')} sedang berdagang...\n\nKamu dan @${who.replace(/@.+/, '')} meletakkan modal -${dapat} money...`)
        setTimeout(() => {
            reply(m.chat, `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, m, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 3600000)
        setTimeout(() => {
            reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 7200000)
        setTimeout(() => {
            reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 10800000)
        setTimeout(() => {
            reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 14400000)
        setTimeout(() => {
            reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 18000000)
        setTimeout(() => {
            reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 21600000)
        setTimeout(() => {
            reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 25200000)
        setTimeout(() => {
            reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +100000\n${users[who].money += 100000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 28800000)
    } else reply(`Kamu sudah lelah. Silahkan ngopi dan menunggu selama *${timers}*, untuk berdagang kembali`)

}
break        
//=========================================\\
case 'merampok':
  case 'rampok': {
    if (!m.isGroup) return reply(mess.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockStringRampok(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let dapat = (Math.floor(Math.random() * 100000))
    let users = global.db.users
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (!who) return reply('Tag orang yang mau kamu rampok!')
    if (typeof global.db.users[who] == 'undefined') return reply('Pengguna tidak ada di dalam database')
    if (users[who].level > users[m.sender].level) return reply(`Level kamu harus lebih tinggi dari @${who.split('@')[0]} untuk bisa merampoknya!`, false, { mentions: [who] })
    let __timers = (new Date - global.db.users[m.sender].lastrampok)
    let _timers = (3600000 - __timers)
    let timers = clockStringRampok(_timers)
    if (new Date - global.db.users[m.sender].lastrampok > 3600000) {
        if (10000 > users[who].money) return reply('ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ ᴜᴀɴɢ, ᴋɪꜱᴍɪɴ ᴅɪᴀ')
        users[who].money -= dapat * 1
        users[m.sender].money += dapat * 1
        global.db.users[m.sender].lastrampok = new Date * 1
        reply( `ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`)
    } else reply( `Kamu sudah merampok dan sedang bersembunyi. Silahkan ngopi dan menunggu selama *${timers}*, untuk merampok kembali`)
}
break        
//=========================================\\
  case 'bankcek': {
    if (!m.isGroup) return reply(mess.group)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? Rafael.user.jid: m.sender
    if (!(who in global.db.users)) return reply(`User ${who} not in database`)
    let user = global.db.users[who]
    let caption = `
▧「 *BANK CEK* 」
│ 👤 Name: ${user.registered ? user.name: Rafael.getName(m.sender)}
│ ${global.rpg.emoticon('atm')} Atm: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
│ ${global.rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
│ ${global.rpg.emoticon('money')} Money: ${user.money}
│ ${global.rpg.emoticon('chip')} Chip: ${user.chip}
│ 🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
│ 📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
    reply(`${caption}`)
}
break        
//=========================================\\
case 'nebang': {
  if (!m.isGroup) return reply(mess.group)
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return hours + " jam " + minutes + " menit " + seconds + " detik"
}
	  let user = global.db.users[m.sender]
    let time = user.lastparming + 1800000
    if (new Date - user.lastparming < 1800000) return reply(`Kamu sudah lelah dan bumi sedang sigma. Silahkan ngopi dan menunggu selama *${msToTime(time - new Date())}*, untuk nebang kembali`)
	let wood = `${Math.floor(Math.random() * 50)}`.trim()
	let money = `${Math.floor(Math.random() * 50000)}`.trim()
	user.wood += wood * 1
	user.money += money * 1
	user.lastparming = new Date * 1
    reply(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`)
}
break
//=========================================\\
case 'casino': {
  if (!m.isGroup) return reply(mess.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
let buatall = 1
    Rafael.casino = Rafael.casino ? Rafael.casino : {}
    if (m.chat in Rafael.casino) return reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!')
    else Rafael.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return reply(`Penggunaan: ${prefix+command} <jumlah>\n*Contoh: ${prefix+command} 1000*`, )
        if (global.db.users[m.sender].exp >= count * 1) {
            global.db.users[m.sender].exp -= count * 1
            //await reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang (xp)`)
            } else if (Aku < Kamu) {
                global.db.users[m.sender].exp += count * 2
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang (xp)`)
            } else {
                global.db.users[m.sender].exp += count * 1
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang (xp)`)
            }
        } else reply(`Uang (xp) kamu tidak mencukupi untuk memulai casino silahkan *kerja* terlebih dahulu dengan *${prefix} kerja*!`)
    } catch (e) {
        console.log(e)
        reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != Rafael.user.jid)) {
                Rafael.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete Rafael.casino[m.chat]
    }
}
break        
        
        
//MENU LIST modified by ShinySebastian (modified 8/11/24)
case 'menu': {
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!') // cek terdaftar atau nggak
let text = `ℌ𝔢𝔶! 𝔚𝔢𝔩𝔠𝔬𝔪𝔢 𝔱𝔬 𝔊𝔞𝔠𝔬𝔯𝔅𝔬𝔱!

⛩️ *Tanggal:* ${hariini}
⛩️ *Jam*: ${wib}
⛩️ *Baileys:* @whiskeysockets/baileys
⛩️ *Runtime:* ${runtime(process.uptime())}
⛩️ *Total Fitur:* ${totalFitur()}


[ *⭔ DAFTAR* ]
> .daftar (nama|umur)

[ *⭔ AI MENU* ]
> .ai (perintah)
> .autoai
> .cai2 (CharacterAI) (SessionName|characterID|pesan)
> .caistart (Mulai percakapan dengan CharacterAI) (SessionName|characterID)
> .caiend

[ *⭔ FUN MENU* ]
> .tictactoe (@tag)
> .quiz
> .family100
> .menfess (nomor|nama samaran|pesan)
> .agedetect (balas atau foto)
> .tebak (lagu/gambar/kata/kalimat/lirik/lontong/bendera/heroml)
> .apakah (pernyataan)
> .bisakah (pernyataan)
> .bagaimanakah (pernyataan)
> .kapankah (pernyataan)
> .rate
> .cekaku
> .cekpasangan (nama1|nama2)
> .wangy (nama)
> .halah/hilih/huluh/heleh/holoh

[ *⭔ RPG MENU* ]
> .rpgmenu

[ *⭔ SEARCH MENU* ]
> .lirik (query)
> .google (query)
> .wikipedia (query)
> .spotifysearch (query)
> .youtubesearch (query)
> .gempa
> .gsmarena (query)
> .cuaca (kota)
> .jadwaltv (channel)
> .gimage (Google Image) (query)
> .pinterest (query)
> .translate (kode bahasa) (teks)

[ *⭔ NEWS MENU* ]
> .berita (detikcom/jalantikus/liputan6/kumparan/republika)

[ *⭔ DOWNLOADER MENU* ]
> .spotifydw (balas atau query)
> .youtubedw (balas atau query)
> .ytmp3 (balas atau query)
> .tiktokdw (link TikTok)
> .tiktokimg (link TikTok Image)
> .instaimg (link Instagram Image)
> .instareel (link reel Instagram)
> .mediafire (link MediaFire)
> .facebookdl (link Facebook)

[ *⭔ ALKITAB MENU* ]
> .alkitab (pasal) (ayat)

[ *⭔ ISLAMI MENU* ]
> .jadwalsholat (kota)
> .surah (nomor)
> .hadis (nama) (nomor)

[ *⭔ CREATOR MENU* ]
> .stickerwm (balas atau foto)
> .sticker (balas atau foto)
> .tinyurl (link)
> .smeme (teks atas|teks bawah)
> .remini (balas atau foto)
> .remini2 (alternative)
> .recolor (balas atau foto)
> .img2prompt (balas atau foto)
> .removebg (balas atau foto)
> .imageedit (balas atau foto)
> .brat (teks)

[ *⭔ CONVERT MENU* ]
> .convertmatauang (jumlah) (mata uang asal) (mata uang akhir)
> .ocr (balas atau foto) (untuk mengekstrak teks dari gambar)
> .audiomenu (Memberi efek pada radio) (balas audio/vn)
> .addpdf (balas atau foto)
> .convertpdf 
> .videotoaudio (balas atau video)

[ *⭔ MAKER MENU* ]
> .ktpmaker (parameter) (balas atau foto)
> .bucinserti (bucin sertifikat) (nama)
> .pacarserti (pacar sertifikat) (nama1 nama2)
> .badboyserti (bad boy sertifikat) (nama)
> .badgirlserti (bad girl sertifikat) (nama)
> .gtapassed (teks1 teks2) (buggy)

[ *⭔ MEME MENU* ]
> .darkjoke (Dark Joke)
> .memeindo (Meme Indonesia)

[ *⭔ MATEMATIKA MENU* ]
> .calculator (a operator b)
> .elastisitas (p1) (p2) (q1) (q2)
> .fungsiekonomi (p1) (q1) (p2) (q2)
> .equilibrium (Qd);(Qs)
> .phytagoras (a) (b)
> .persamaankuadrat (a) (b) (c) untuk ax2+bx+c=0
> .grafikkuadrat (a) (b) (c) untuk ax2+bx+c=0
> .pecahan (pecahan) (operator) (pecahan)
> .logaritma
> .luas
> .keliling
> .volume
> .trigonometri (sin/cos/tan) (sudut)
> .kombinasi (n) (r)
> .permutasi (n) (r)
> .hitungusia (hari-bulan-tahun)
> .kpk (angka)
> .fpb (angka)
> .spltv (Sistem Persamaan Linear Tiga Variabel) (parameter)

[ *⭔ CERPEN MENU* ]
> .cerpenremaja
> .cerpenanak
> .cerpenmisteri
> .cerpencinta
> .cerpenbudaya
> .cerpenromantis
> .cerpengalau
> .cerpeninspirasi
> .cerpenkehidupan
> .cerpenkorea

[ *⭔ STALK MENU* ]
> .igstalk (username ig)
> .tiktokstalk (username tiktok)

[ *⭔ MENU STORE* ]
> .list
> .addlist
> .dellist
> .updatelist
> .qris

[ *⭔ MENU RANDOM* ]
> .txt2img
> .heroml
> .totalfitur
> .listcase

[ *⭔ MENU GROUP* ]
> .kick
> .add
> .linkgc
> .hidetag
> .tagall
> .promote
> .demote
> .afk (alasan)

[ *⭔ MENU BOT* ]
> .addcase
> .delcase
> .gantifile
> .get
> .speed
> .shutdown
`
Rafael.sendMessage(m.chat, {
document: fs.readFileSync('./media/Rafael.png'),
fileName: `Welcome bro!`,
mimetype: "image/png",
fileLength: 99999999999,
jpegThumbnail: fs.readFileSync('./media/Rafael.png'),
description: 'hello',
caption: text,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
businessMessageForwardInfo: {  
businessOwnerJid: global.owner 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `GacorBot`,
newsletterJid: global.idsal},
externalAdReply: { 
title: `GACORBOT V1.5`, 
body: `Online On ${runtime(process.uptime())}`,
thumbnailUrl: "https://telegra.ph/file/21f63a0caa3d3add04256.jpg",
sourceUrl: `api.rafaellzy.xyz`,
mediaType: 1,
renderLargerThumbnail: true }}},
{quoted:fVerif})
await sleep(1000)
Rafael.sendMessage(m.chat, {audio: fs.readFileSync('./vn.mp4'), ptt: true, 
seconds: 360000000,
waveform:  [
100,0,100,0,100,0,100
], 
 mimetype: 'audio/mpeg'}, { quoted: m })

}
break

case 'rpgmenu':{
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
await sleep(1000)
m.reply(`[ *⭔ MENU RPG* ]
> .kerja
> .fightnaga
> .fightkucing
> .fightphonix
> .fightgriffin
> .fightkyubi
> .fightcentaur
> .nabung
> .mining
> .bankcek
> .maling
> .banknabung
> .banktarik
> .berkebon
> .crafting
> .bet
> .bonus
> .buah
> .nebang
> .bekerja
> .bansos
> .taxy
> .mulung
> .berburu
> .polisi
> .berdagang
> .rampok
> .bunuh
> .collect
> .mancing
> .repair
> .feed
> .fight
> .gajian
> .upgrade
> .transfer
> .shop
> .selectskill
> .sampah
> .roket
> .ojek
> .nguli
> .pasar
> .rob
> .referal
> .petshop
> .kolam
> .koboy
> .leaderboard
> .inv
> .casino`)
}
break           
        
case 'tes':
 reply('Nyala bang')
 break
        
case 'hapus': 
case 'delete': 
case 'del': 
case 'd': {
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                Rafael.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
 
 case 'shutdown': {
             if (!isCreator) return reply(mess.owner)
			 reply(`Otsukaresama deshita🖐`)
             await sleep(3000)
             process.exit()
             }
        break
        
 case 'speed': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `*_📊 Bot Berhasil Dipercepat_*\n
⚡: Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
        
case 'play': case 'play2': {
    if (!text) return reply(`*Example :* ${prefix + command} Drunk Text`)
let search = await yts(text)
let linknya = search.all[0].url    
reply('sabar')
downloadMp3(linknya)
}
break
case 'upsaluran':
if (!m.quoted) return reply(`Reply audio ${prefix}${command}`)
if ((isAudio) || !isQuotedAudio) {
try {
reply('Done')
let media = await quoted.download()
Rafael.sendMessage(global.idsal, { audio: media}, { quoted: m})
} catch (err) {
reply(`audio tidak di temukan!\nCoba untuk ulangi kirim/reply audio`)
}
} else reply(`reply audio`)
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break
case "get":
        if (!/^https?:\/\//.test(text))
          return reply("Awali *URL* dengan http:// atau https://");
        const ajg = await fetch(text);
        if (ajg.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
          throw `Content-Length: ${ajg.headers.get("content-length")}`;
        }
        const contentType = ajg.headers.get("content-type");
        if (contentType.startsWith("image/")) {
          return Rafael.sendMessage(
            m.chat,
            { image: { url: text } },
            "imageMessage",
            text,
            m,
          );
        }
        if (contentType.startsWith("video/")) {
          return Rafael.sendMessage(
            m.chat,
            { video: { url: text } },
            "videoMessage",
            text,
            m,
          );
        }
        if (contentType.startsWith("audio/")) {
          return Rafael.sendMessage(
            m.chat,
            { audio: { url: text } },
            "audioMessage",
            text,
            m,
          );
        }
        let alak = await ajg.buffer();
        try {
          alak = util.format(JSON.parse(alak + ""));
        } catch (e) {
          alak = alak + "";
        } finally {
          reply(alak.slice(0, 65536));
        }
        break;
        case 'delcase': {
if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./case.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By Fixenzo')
}
break

case 'addcase': {
 if (!isCreator) return reply(mess.owner)
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'gimage': {
reply('pajangan')
}
break
case 'done': case 'd': {
if (!isCreator) return reply("Apaan Si Wir?")
let teks = m.quoted.text
const owned = `${owner}@s.whatsapp.net`
const version = require("@whiskeysockets/baileys/package.json").version
const text12 = `=====================
 *PESANAN SELESAI*
=====================
 DIPROSES: @${sender.split('@')[0]}
 TANGGAL: ${tanggal}
 JAM: ${time2}
 Catatan : ${teks} 
=====================
 
   STATUS : SUKSES✅
    
=====================  
Pesanan Telah Selesai. Di Tunggu Orderan Selanjutnya

Join Ch Ku Wak :
https://whatsapp.com/channel/0029ValLxIw9xVJewuwoqB1G
=====================  `
Rafael.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'heroml': {
    if (!text) return reply('example .heroml zilong');
    try {
        let ml = await fetchJson(`https://api.vreden.my.id/api/Hero?query=${text}`);
        await Rafael.sendMessage(m.chat, { 
            image: { url: ml.anu.hero_img }, 
            caption: `Name Hero: ${text}
Rilis: ${ml.anu.release}
Role: ${ml.anu.role}
Special: ${ml.anu.specialty}
Lane: ${ml.anu.lane}
Price: ${ml.anu.price}
GameplayInfo: 
durability: ${ml.anu.gameplay_info.durability}
offense: ${ml.anu.gameplay_info.offense}
control_effect: ${ml.anu.gameplay_info.control_effect}
difficulty: ${ml.anu.gameplay_info.difficulty}`
        }, { quoted : fVerif });
    } catch (error) {
        console.error(error);
        reply('Error fetching hero information. Please try again later.');
    }
}
break
case 'wanted': {
  if (!quoted) return reply(`Where is the picture?`);
  if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`);
  
  reply("sabar");
  
  try {
    // Download the quoted media
    let media = await Rafael.downloadAndSaveMediaMessage(quoted);
    // Upload the media to get a URL
    let anu = await TelegraPh(media);
    // Fetch the wanted image from the API
    let response = await fetch(`https://api.vreden.my.id/api/wanted?url=${anu}`);
    let data = await response.json();
    let wantedUrl = data.result; // Make sure this is the correct property in the API response

    // Send the wanted image
    await Rafael.sendMessage(m.chat, { image: { url: wantedUrl }, caption: "succes" }, { quoted: fVerif });
  } catch (error) {
    console.error(error);
    reply('An error occurred while processing your request.');
  }
}
break
case 'totalfitur':
case 'totalfeature':{
let fitur = `
*TOTAL FEATURE*

• Berjumlah ${totalFitur()} Fitur\n*Tipe :* Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
reply(fitur)
}
break
case 'txt2img':{
if (!text) return reply('Example: .txt2img Prompt')
let anu = `https://api.vreden.my.id/api/text2img?query=${text}`
await Rafael.sendMessage(m.chat, {image: {url:anu}, caption: `*< Success >*\n\n*Prompt :* ${text}`},{quoted: fVerif})
}
break
case 'update':
case 'updatelist':
if (!m.isGroup) return ('hanya di dalam grup')
if (!isAdmins) return ('khusus admin')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan Dengan Cara ${prefix+command} Key|Respon\n\nContoh: ${prefix+command} Tes|Apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, Tuk Key *${args1}* Belum Terdaftar Digrup Ini!`)
if (/image/.test(mime)) {
let media = await nw.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Berhasil Update Respon List Dengan Key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Berhasil Update Respon List Dengan Key *${args1}*`)
}
break
case 'list': {
if (db_respon_list.length === 0) return m.reply(`Belum Ada List Respon Didalam Database!`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum Ada List Respon Didalam Grup Ini!`)
let teks = `Halo ${db.users[m.sender].nama}, Berikut Adalah List Respon Digrup Ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nTuk Melihat Detail Produk, Silahkan Kirim Nama Produk Yang Ada Didalam List Respon. Misal ${db_respon_list[0].key.toUpperCase()}, Maka Kirim Pesan ${db_respon_list[0].key.toUpperCase()} Kepada Bot`
Rafael.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break
case 'addlist':
if (!m.isGroup) return ('hanya di dalam grup')
if (!isAdmins) return ('khusus admin')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan Dengan Cara ${prefix+command} Key|Respon\n\nContoh: ${prefix+command} Tes|Apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List Respon Dengan Key: ${args1}\nSudah Ada Digrup Ini!`)
if (/image/.test(mime)) {
let media = await nw.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses Add List Respon\nKey: ${args1}`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses Add List Respon\nKey: ${args1}`)
}
break
case 'gfl': case "gantifile":{
if (!isCreator) return reply(global.mess.owner)
if (!text.includes("./")) return reply(`*• Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
reply(`Mengupload`)
await delay(2000)
reply(`Berhasil mengganti file ${q}`)
}
break
case 'dellist':
if (!m.isGroup) return ('hanya di dalam grup')
if (!isAdmins) return ('khusus admin')
if (db_respon_list.length === 0) return m.reply(`Belum Ada List Respon Didalam Database!`)
if (!text) return m.reply(`Gunakan Dengan Cara ${prefix+command} Key\n\nContoh: ${prefix+command} Tes`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List Respon Dengan Key: ${q}\nTidak Ada Didalam Grup Ini!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses Del List Respon Dengan Key: ${q}`)
break

case 'qris':{
let tekssss = `SCAN QRIS DI ATAS
`
Rafael.sendMessage(from, { image: fs.readFileSync(`./media/qris.jpg`),
 caption: tekssss, 
footer: `022`},
{quoted: fVerif})
}
break

case 'linkgroup': case 'linkgc': case 'link': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) reply(mess.botAdmin)
let response = await Rafael.groupInviteCode(m.chat)
reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await Rafael.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await Rafael.groupParticipantsUpdate(m.chat, users, 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await Rafael.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await Rafael.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⛩️@${mem.id.split('@')[0]}\n`
}
Rafael.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'autoai': {
if (!text) throw `*• Example:* .autoai *[on/off]*`;
if (text == "on") {
     Rafael.elxyz[m.chat] = {
            pesan: []
        }
        m.reply("[ ✓ ] Success create session chat")
    } else if (text == "off") {
        delete Rafael.elxyz[m.chat]
        m.reply("[ ✓ ] Success delete session chat")
    }
}
break
 case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(mess.owner)
Rafael.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
default:
 if (userSessions[m.sender]) {
    let session = userSessions[m.sender]
    let value = parseInt(m.text)

    if (isNaN(value)) return reply('❌ Masukkan angka yang valid ya rek.')

    session.values[session.step] = value

    // Step berikutnya
    let steps = ['saturation', 'brightness', 'contrast', 'hue', 'red', 'green', 'blue']
    let currentIndex = steps.indexOf(session.step)
    let nextStep = steps[currentIndex + 1]

    if (nextStep) {
        session.step = nextStep
        return reply(`✅ Sempurna! Sekarang tentukan *${nextStep}* (default: ${session.values[nextStep]}) dengan reply pesan ini.`)
    } else {
        session.step = 'done'
        return reply('🎉 Selesai! Ketik *.generatecolor* untuk mulai mengedit gambar dengan parameter yang telah ditentukan.')
    }
}
       
 console.log(`[DEBUG] Masuk ke default case`);
        let caichat = readSessions();

        if (caichat[m.sender]) {
            const { session_name, character_id } = caichat[m.sender];

            try {
                const apiUrl = "https://caipy2-9s9c1iq0k-yangjunming08s-projects.vercel.app/api/character/";
                const response = await axios.post(apiUrl, {
                    session_name: session_name,
                    character_id: character_id,
                    text: budy // Pesan user sebagai input text
                });

                if (response.data && response.data.response) {
                    reply(response.data.response);
                } else {
                    reply('Tidak ada respons dari CharacterAI.');
                }
            } catch (error) {
                console.error(`[ERROR] Gagal menghubungi API:`, error.response ? error.response.data : error.message);
                reply('Terjadi kesalahan saat menghubungi API.');
            }
        } else {
            console.log(`[DEBUG] Tidak ada sesi aktif untuk ${m.sender}, abaikan pesan.`);
        } 
 // Global Handler untuk Pesan Biasa
if (body.startsWith('>')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
Rafael.elxyz = Rafael.elxyz ? Rafael.elxyz : {};
if (m.isBaileys && m.fromMe) return;
if (!m.text) return
if (!Rafael.elxyz[m.chat]) return;      
const prompt = m.text;
let sessions = {};
let aiStatus = {};
if (!prompt || prompt.startsWith('/'))
  if (!Rafael.elxyz[m.chat]) return;

  console.log(`[${moment().format('HH:mm')}] from @${pushname}: ${prompt}`);

  try {
    const now = moment().tz('Asia/Jakarta');
    const jam = now.format('HH:mm');
    const tgl = now.format('DD-MM-YYYY');
    const hari = now.format('dddd');
    let postData = {
    prompt: prompt,
    sessionId: `${m.sender}`,
    character: `kamu adalah Rian, kamu merupakan ai yang di ciptakan oleh rafael, ubah cara bicaramu menjadi kekinian namun tetap sopan, @6283857564133 adalah Rafael, jika dia bicara padamu ubah cara bicaramu menjadi manja, kamu di program untuk membantu manusia dalam menyelesaikan masalah, kamu menyebut dirimu itu caca`
};

    let response = await axios({
        url: "https://elxyz.me/api/chat",
        method: 'POST',
        data: new URLSearchParams(Object.entries(postData)),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    rafaelbut(response.data.data.answer)
} catch (error) {
    console.error("Error during chat request:", error);
    return "An error occurred during the chat process.";
}

if (body.startsWith('$')){
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
qur = body.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply795(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (body.startsWith('<')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

}
} catch (err) {
m.reply("Error di bagian adrian.js "+util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
