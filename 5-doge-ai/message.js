module.exports = async function(msg, {tulingBot}) {
  if (msg.self()) {
    return;
  }

  if (/狗蛋/.test(msg.text())) {
    tulingBot.setKey('TULING_KEY_IN_HERE');

    const res = await tulingBot.ask(msg.text(), msg.from().id.replace('@', ''));

    return msg.say(res, msg.from())
  }
};
