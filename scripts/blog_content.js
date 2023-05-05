const article = document.querySelector("article");
if (article && article.textContent.trim() !== "") {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.ceil(wordCount / 200);
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;
  const heading = article.querySelector("h1");
  const date = article.querySelector("time");
  if (heading) {
    heading.insertAdjacentElement("afterend", badge);
  } else if (date && date.parentNode) {
    date.parentNode.insertAdjacentElement("beforeend", badge);
  } else {
    article.insertAdjacentElement("afterbegin", badge);
  }
}
