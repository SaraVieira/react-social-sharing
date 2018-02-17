// this should be the entry point to your library
module.exports = {
  Twitter: require('./twitter').default,
  Facebook: require('./facebook').default,
  Google: require('./google').default
}
