import iyzipay from "../connections/iyzipay.js";

export const initializePayment = async (data) => {
  return new Promise((resolve, reject) => {
    iyzipay.threedsInitialize.create(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export const completePayment = async (data) => {
  return new Promise((resolve, reject) => {
    iyzipay.threedsComplete.create(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}