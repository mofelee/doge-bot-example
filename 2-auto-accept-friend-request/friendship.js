const signale = require('signale')
const { Friendship } = require('wechaty')

// eslint-disable-next-line
module.exports = async function(friendship) {
  if(friendship.type() === Friendship.Type.Receive){
    return friendship.accept()
  }

  if(friendship.type() === Friendship.Type.Receive){
    return signale.success('添加好友成功')
  }
}
