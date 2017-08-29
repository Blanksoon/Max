'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _navbar = require('../components/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _rebass = require('rebass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/farmoz/Desktop/MaxMuayThai/front-end/MaxFront/pages/index.js?entry';
// This is the Link API

var Index = function Index() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_rebass.Provider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_rebass.Heading, { is: 'h1', children: 'Next.js + Rebass', mb: 3, center: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(_rebass.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_rebass.Toolbar, { bg: 'black', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_rebass.NavLink, { href: 'https://github.com/zeit/next.js/', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Next.js'), _react2.default.createElement(_rebass.NavLink, { ml: 'auto', href: 'http://jxnblk.com/rebass/', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'REBASS')), _react2.default.createElement(_rebass.Flex, { justify: 'center', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_rebass.Box, { width: 1 / 2, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement(_rebass.Blockquote, { center: true, fontSize: 3, py: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, '"Next.js is a minimalistic framework for server-rendered React applications."')), _react2.default.createElement(_rebass.Box, { width: 6 / 12, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_rebass.Blockquote, { center: true, fontSize: 3, py: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, '"Functional React UI component library, built with styled-components"'))))));
};

exports.default = Index;