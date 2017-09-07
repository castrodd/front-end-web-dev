var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]'
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]'
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]'
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'
var TINY_EFFECT_CLASS = 'is-tiny';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';

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

function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

document.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (evt.target.className === 'thumbnail-image') {
    setDetailsFromThumb(evt.target.parentElement);
  }
  showDetails();
})

document.addEventListener('keyup', function(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    hideDetails();
  }
})
