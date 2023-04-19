"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelPayment = void 0;

var _iyzipay = _interopRequireDefault(require("../connections/iyzipay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cancelPayment = data => {
  return new Promise((resolve, reject) => {
    _iyzipay.default.cancel.create(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        result(resolve);
      }
    });
  });
};

exports.cancelPayment = cancelPayment;