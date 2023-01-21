module.exports = {
	cmdPerPage: 10, //- Number of commands per page of help command
	adminId: "UserId", //- Replace UserId with the Discord ID of the admin of the bot
	token: process.env.token || "MTA2NjAzMzA5NDIyMzc0NTA2NQ.GRBBcw.1o3NSKnZptvRQmcpaY_N_w5sp5v9RBDS_9XMtk", //- Bot's Token
	clientId: process.env.clientId || "1066033094223745065", //- ID of the bot
	clientSecret: process.env.clientSecret || "6cfyolIwl4HovFjMnke0xlyCwiVwfspE", //- Client Secret of the bot
	port: 4200, //- Port of the API and Dashboard
	scopes: ["identify", "guilds", "applications.commands"], //- Discord OAuth2 Scopes
	serverDeafen: true, //- If you want bot to stay deafened
	defaultVolume: 100, //- Sets the default volume of the bot, You can change this number anywhere from 1 to 100
	supportServer: "", //- Support Server Link
	Issues: "", //- Bug Report Link
	permissions: 277083450689, //- Bot Inviting Permissions
	disconnectTime: 30000, //- How long should the bot wait before disconnecting from the voice channel (in miliseconds). Set to 1 for instant disconnect.
	twentyFourSeven: false, //- When set to true, the bot will never disconnect from the voice channel
	autoQueue: false, //- When set to true, related songs will automatically be added to the queue
	autoPause: true, //- When set to true, music will automatically be paused if everyone leaves the voice channel
	debug: false, //- Debug mode
	cookieSecret: "CodingWithSudhan is epic", //- Cookie Secret
	website: "http://localhost:4200", //- without the / at the end
	// You need a lavalink server for this bot to work!!!!
	// Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
	nodes: [
		{
			identifier: "Main Node", //- Used for indentifier in stats commands.
			host: "node1.kartadharta.xyz", //- The host name or IP of the lavalink server.
			port: 443, // The port that lavalink is listening to. This must be a number!
			password: "kdlavalink", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: true, //- Can be either true or false. Only use true if ssl is enabled!
		},
	],
	embedColor: "#2f3136", //- Color of the embeds, hex supported
	presence: {
		// PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
		status: "online", //- You can have online, idle, dnd and invisible (Note: invisible makes people think the bot is offline)
		activities: [
			{
				name: "Music", //- Status Text
				type: "LISTENING", //- PLAYING, WATCHING, LISTENING, STREAMING
			},
		],
	},
	// Spotify Integration, allows you to enter a spotify link.
	iconURL: "https://cdn.darrennathanael.com/icons/spinning_disk.gif", //- This icon will be in every embed's author field
	Spotify: {
		ClientID: process.env.Spotify_ClientID || "590dacfd33c7459d8abbba8da99629f7", // Spotify Client ID
		ClientSecret: process.env.Spotify_ClientSecret || "2a9f020f71534202bef69655e57417bd", // Spotify Client Secret
	},
};
