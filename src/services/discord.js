const axios = require('axios').default
const webhookUrl = process.env.WEBHOOK_URL

module.exports.sendMessage = async (content) => {
  await axios.post(webhookUrl, { content }, {
    headers: { "Content-Type": "application/json" }
  })
    .catch(function (err) {
      console.log('Deu ruim com o webhook')
    })
}