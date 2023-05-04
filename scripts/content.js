// Check that an article element exists and has text content
const article = document.querySelector("article");
if (article && article.textContent.trim() !== "") {
  // Get the text content of the article and count the number of words
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;

  // Calculate the estimated reading time
  const readingTime = Math.ceil(wordCount / 200);

  // Create a new element for the reading time badge and add the necessary classes and text content
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Check if the article has a heading to insert the badge after, otherwise insert it after the date if available
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
