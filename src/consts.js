export default {
  twitter: (message, link) => `https://twitter.com/intent/tweet/?text=${encodeURI(message)}.&amp;url=${link}`,
  facebook: (link) => `https://facebook.com/sharer/sharer.php?u=${link}`

}
