"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = exports.getFromPayment = void 0;

var _iyzipay = _interopRequireDefault(require("../connections/iyzipay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialize = data => {
  return new Promise((resolve, reject) => {
    _iyzipay.default.checkoutFormInıtialize.create(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.initialize = initialize;

const getFromPayment = data => {
  return new Promise((resolve, reject) => {
    _iyzipay.default.checkoutForm.retrieve(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.getFromPayment = getFromPayment;