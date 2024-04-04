// file where you provide the element you're using to apply the changes


/*
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

const utils = window.optimizely.get('utils');

utils.waitForElement('#block-faqmaincontactblock')
.then(function(elem) {
  // Prepend the extension HTML to the inside start of the element
  elem.insertAdjacentHTML('afterbegin', extension.$html);
});
