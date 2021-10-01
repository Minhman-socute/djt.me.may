  

module.exports.config = {
  name: "idbox",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "manhIT",
  description: "Kiểm tra thông tin nhóm chat.",
  commandCategory: "Other",
  usages: "",
  cooldowns: 5,
  dependencies: {

  }
};

module.exports.run = async({api,event}) => {
	let threadInfo = await api.getThreadInfo(event.threadID);
    let threadName = threadInfo.threadName;
    return api.sendMessage(`${threadInfo.threadID}`, event.threadID, event.messageID);
}