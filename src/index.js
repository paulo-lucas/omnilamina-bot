require('dotenv').config()

const { getPosts } = require('./services/epic')
const { sendMessage } = require('./services/discord')
const { formatPayload, filterPayload } = require('./utils/data')
const cron = require('node-cron');

const env = process.env.ENV

const run = async () => {
  console.log('Rodando cron task')

  let posts = await getPosts()
  posts = formatPayload(posts)
  posts = filterPayload(posts)

  for (const post of posts) {
    await sendMessage(`>>> **${post.title}**`)
    await sendMessage(post.content)
    // await sendMessage(post.image)
    await sendMessage(`Leia mais: ${post.url}`)
  }
}

const schedule = env === "dev"
  ? '*/30 * * * * *' // every 30 seconds
  : '0 * * * *' // every hour

cron.schedule(schedule, run);