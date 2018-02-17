export default {
  twitter: (message, link) =>
    `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
      message
    )}.&amp;url=${encodeURIComponent(link)}`,
  facebook: link =>
    `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
  google: link =>
    `https://plus.google.com/share?url=${encodeURIComponent(link)}`,
  tumblr: link =>
    `http://tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(
      link
    )}`,
  reddit: link => `https://reddit.com/submit/?url=${encodeURIComponent(link)}`,
  mail: (message, link) =>
    `mailto:?subject=${encodeURIComponent(
      message
    )}.&amp;body=${encodeURIComponent(link)}`,
  pinterest: (message, link) =>
    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      link
    )}&amp;media=${encodeURIComponent(
      link
    )}&amp;description=${encodeURIComponent(message)}`,
  linkedin: (message, link) =>
    `https://www.linkedin.com/shareArticle?mini=true&amp;url=${encodeURIComponent(
      link
    )}&amp;title=${encodeURIComponent(
      message
    )}.&amp;summary=${encodeURIComponent(
      message
    )}.&amp;source=${encodeURIComponent(link)}`
}
