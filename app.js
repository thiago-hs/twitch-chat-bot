require('dotenv').config();

const tmi = require('tmi.js');

const [,,channelsArg] = process.argv;
const channelsArr = channelsArg ? channelsArg.split(',') : [];

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.TWITCH_USERNAME,
		password: process.env.TWITCH_PASSWORD
	},
	channels: channelsArr.length ? channelsArr : [ 'thiagohsilva98' ]
});

client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {

	if(self) return;

	if(message.toLowerCase() === '!coisanossa') {

		console.warn('Comando Recebido');

		client.say(channel, `@${tags.username}, como refressssssca!`);

	}

});