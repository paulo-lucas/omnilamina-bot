module.exports.sleep = async (time) => {
  await (new Promise(resolve => setInterval(resolve, time)))
}