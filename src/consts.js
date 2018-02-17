export default {
  twitter: (message, link) => `https://twitter.com/intent/tweet/?text=${encodeURI(message)}.&amp;url=${link}`,
  facebook: (link) => `https://facebook.com/sharer/sharer.php?u=${link}`,
  google: (link) => `https://plus.google.com/share?url=${link}`,
  tumblr: (link) => `http://tumblr.com/widgets/share/tool?canonicalUrl=${link}`
}
