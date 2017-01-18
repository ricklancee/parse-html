(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseHtml;
var contextRange = document.createRange();
contextRange.setStart(document.body, 0);

function parseHtml(string) {
  return contextRange.createContextualFragment(string);
};

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _parseHtml = require('./parse-html');

var _parseHtml2 = _interopRequireDefault(_parseHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('parseHtml', function () {
  it('should parse a html string into document framents', function () {
    var someHtmlString = '<div><div>somestring</div></div>';

    var fragment = (0, _parseHtml2.default)(someHtmlString);
    expect(typeof fragment === 'undefined' ? 'undefined' : _typeof(fragment)).to.equal('object');
    expect(fragment.querySelector('div > div').innerHTML).to.equal('somestring');
  });
});

},{"./parse-html":1}]},{},[2]);
