const fetch = require('node-fetch');

module.exports = async function(msg, {tulingBot}) {
  //if (msg.self()) {
  //return;
  //}

  if (/@狗蛋/.test(msg.text())) {
    const text = msg.text().replace('@狗蛋');
    const key = '51fa5398-286d-4fd6-b441-8b043319f242';
    const language = 'zh';
    const ft = '0.0';

    const res = await fetch(
      `http://sandbox.api.simsimi.com/request.p?key=${key}&lc=${language}&ft=${ft}&text=${encodeURIComponent(
        text,
      )}`,
    ).then(res=>res.json());

    return msg.say(res.response, msg.from())
  }
};
