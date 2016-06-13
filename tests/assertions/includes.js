export default function(context, haystack, needle, message) {
  var actual = haystack.indexOf(needle) > -1;
  message = message || `${haystack} should include ${needle}`;

  this.push(!!actual, actual, needle, message);
}
