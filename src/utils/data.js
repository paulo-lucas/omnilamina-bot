module.exports.formatPayload = (data) => {
  const payload = data.map(post => ({
    image: post.shareImage,
    title: post.title,
    content: post.content && post.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 450) + '...',
    date: post.date,
    url: `https://www.epicgames.com/fortnite/pt-BR/news/${post.slug}`
  }))

  return payload
}

module.exports.filterPayload = (data) => {
  const GAP = 60 * 60 * 1000 // one hour

  const payload = data.filter(post => (new Date(post.date)) > (Date.now() - GAP))

  return payload
}