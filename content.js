document.addEventListener("keydown", function (event) {
  if (event.key === ";") {
    const articleButton = document.getElementsByClassName("Article__button")[0];
    if (articleButton && articleButton.href) {
      chrome.runtime.sendMessage({ url: articleButton.href });
    }
  }
});
