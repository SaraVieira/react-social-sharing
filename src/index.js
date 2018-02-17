// this should be the entry point to your library
module.exports = {
  Twitter: require('./twitter').default,
  Facebook: require('./facebook').default,
  Google: require('./google').default,
  Tumblr: require('./tumblr').default,
  Mail: require('./mail').default,
  Pinterest: require('./pinterest').default,
  Linkedin: require('./linkedin').default,
  Reddit: require('./reddit').default,
  Xing: require('./xing').default,
  Whatsapp: require('./whatsapp').default,
  HackerNews: require('./hacker').default,
  VK: require('./vk').default
}
