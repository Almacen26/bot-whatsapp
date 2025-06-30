const venom = require('venom-bot');

venom.create().then((client) => {
  console.log('✅ Bot conectado correctamente');

  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'hola') {
      client.sendText(message.from, '¡Hola! Soy tu bot funcionando en Railway 🚀');
    }
  });
}).catch((err) => {
  console.error('❌ Error al iniciar el bot:', err);
});
