"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkInstallment = void 0;

var _iyzipay = _interopRequireDefault(require("../connections/iyzipay.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkInstallment = async data => {
  return new Promise((resolve, reject) => {
    _iyzipay.default.installmentInfo.retrieve(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.checkInstallment = checkInstallment;