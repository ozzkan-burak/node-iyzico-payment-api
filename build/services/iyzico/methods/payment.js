"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPayment = void 0;

var _iyzipay = _interopRequireDefault(require("../connections/iyzipay.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createPayment = async data => {
  return new Promise((resolve, reject) => {
    _iyzipay.default.payment.create(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.createPayment = createPayment;