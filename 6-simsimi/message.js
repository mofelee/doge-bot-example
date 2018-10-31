const fetch = require('node-fetch')

module.exports = async function(msg) {
  if (/@狗蛋/.test(msg.text())) {
    const text = msg.text().replace('@狗蛋')
    const key = 'API_KEY' // api key
    const language = 'zh' // 语言
    const ft = '1.0' // 0.0 - 1.0 脏话过滤

    const res = await fetch(
      `http://sandbox.api.simsimi.com/request.p?key=${key}&lc=${language}&ft=${ft}&text=${encodeURIComponent(
        text,
      )}`,
    ).then(res=>res.json())

    return msg.say(res.response, msg.from())
  }
}
