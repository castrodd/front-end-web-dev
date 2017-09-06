var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

function setDetails(imageURL, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageURL);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

document.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (evt.target.className === 'thumbnail-image') {
    setDetailsFromThumb(evt.target.parentElement);
  }
})
