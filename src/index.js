// this should be the entry point to your library
module.exports = {
  Twitter: require('./buttons/twitter').default,
  Facebook: require('./buttons/facebook').default,
  Google: require('./buttons/google').default,
  Tumblr: require('./buttons/tumblr').default,
  Mail: require('./buttons/mail').default,
  Pinterest: require('./buttons/pinterest').default,
  Linkedin: require('./buttons/linkedin').default,
  Reddit: require('./buttons/reddit').default,
  Xing: require('./buttons/xing').default,
  Whatsapp: require('./buttons/whatsapp').default,
  HackerNews: require('./buttons/hacker').default,
  VK: require('./buttons/vk').default,
  Telegram: require('./buttons/telegram').default
}
