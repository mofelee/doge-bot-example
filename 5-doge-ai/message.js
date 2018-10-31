module.exports = async function(msg, {tulingBot}) {
  if (msg.self()) {
    return;
  }

  if (/@狗蛋/.test(msg.text())) {
    tulingBot.setKey('TULING123-API-key');
    const text = msg.text().replace('@狗蛋')

    const res = await tulingBot.ask(text, msg.from().id.replace('@', '').slice(0, 10));

    return msg.say(res, msg.from())
  }
};
