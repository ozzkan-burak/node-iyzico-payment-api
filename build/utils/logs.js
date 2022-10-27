"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = require("url");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _filename = (0, _url.fileURLToPath)(import.meta.url);

const _dirname = _path.default.dirname(_filename);

console.log('directory-name 👉️', _dirname);

const logFile = (filename, data) => {
  const filePath = _path.default.join(_dirname, `../logs/${filename}.json`);

  const writeDate = JSON.stringify(data, null, 4);

  _fs.default.writeFileSync(filePath, writeDate);
};

exports.logFile = logFile;