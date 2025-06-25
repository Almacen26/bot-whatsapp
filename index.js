const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot conectado y listo.');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'hola') {
        message.reply('¡Hola! Soy tu bot 🤖');
    }
});

client.initialize();
