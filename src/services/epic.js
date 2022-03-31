const axios = require('axios').default

module.exports.getPosts = async () => {
  let response;

  await axios.get('https://www.epicgames.com/fortnite/api/blog/getPosts?category=&postsPerPage=0&offset=0&locale=pt-BR&rootPageSlug=blog')
    .then(function (res) {
      response = res.data.blogList
    })
    .catch(function (err) {
      console.error('Deu errado aqui irmão, epic barrou nois')
      response = []
    })

  return response
}