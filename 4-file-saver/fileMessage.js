const path = require('path')

module.exports = async function(msg){
  const file = await msg.toFileBox();
  const name = file.name;
  const filepath = path.resolve(__dirname, './files/' + name);
  console.log('Save file to: ' + filepath);

  file.toFile(filepath);
  return;
}
