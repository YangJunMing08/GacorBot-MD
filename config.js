// Need help? +62-821-7368-3020 
// General Settings for GacorBot. Safe to edit
// GacorBot v1.6 (25 Apr 2025) by ShinySebastian
// Based by Rafael Bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = "-" 					// Isi nomor kamu di sini
global.ownNumb = "-"				// Isi nomor kamu di sini
global.ownernomer = ["-"]			// Isi nomor kamu di sini
global.namebot = "GacorBot 1.0.0" 	// Isi nama bot disini
global.namaowner = "YangJunMing" 	// Isi nama kamu disini
global.packname = 'GacorBot' 		// Packname untuk stiker
global.author = 'ShinySebastian'
global.web = "-" 					// Isi link web di sini
global.idsal = "12036328903894459@newsletter"

global.mess = {						// Pesan default bot
    success: 'Success ✓',
    done: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Owner',
    wait: 'Mohon tunggu, bot sedang memproses perintah',
    band: 'Kamu telah di banned oleh owner\nminta unbanned ke owner agar bisa menggunakan fitur bot lagi',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    error: "*Maaf fitur sedang Error*",
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
//========================================\\

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
    emoticon(string) {
        if (typeof string !== 'string') return ''; // Tambahkan validasi
        string = string.toLowerCase(); // Pastikan string didefinisikan sebelum mengakses toLowerCase
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        };
        let results = Object.keys(emot)
            .map(v => [v, new RegExp(v, 'gi')])
            .filter(v => v[1].test(string));
        if (!results.length) return '';
        return emot[results[0][0]];
    }
};

// Jangan diedit!
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`File telah diupdate: ${__filename}`) // Update file
delete require.cache[file]
require(file)
})