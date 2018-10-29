const answers = require('./answers.json')
const fs = require('fs')
const path = require('path')

const re = /如果有人问你(.+)(,|，|。|\.)你就回答(.+)/;

module.exports = async function(msg) {
  const text = msg.text();

  if (answers[text]) {
    return msg.say(answers[text], msg.from());
  }

  if (re.test(text)) {
    const answer = re.exec(text);
    answers[answer[1]] = answer[3]

    fs.writeFileSync(path.resolve(__dirname, './answers.json'), JSON.stringify(answers))

    return msg.say('狗蛋学会了', msg.from());
  }

  if ('狗蛋' === text) {
    return msg.say('咋地了', msg.from());
  }
};
