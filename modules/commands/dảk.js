const fs = require("fs");
module.exports.config = {
name: "dảk",
	version: "1.0.1",
	hasPermssion: 0,
	
	description: "bủh",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat burh",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dảk")==0 || (event.body.indexOf("dảk")==0)) {
		var msg = {
				body: "Dảk Dảk bủh bủh lmao",
				attachment: fs.createReadStream(__dirname + `/noprefix/dảk.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
