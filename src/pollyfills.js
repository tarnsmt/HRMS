/* eslint-disable */
import 'es6-promise/auto'
export default (function initPollyFills() {
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function(predicate) {
    
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          k++;
        }
        return undefined;
      }
    });
  }
}())
