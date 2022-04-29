import iyzipay from "../connections/iyzipay.js";

export const checkInstallment = async (data) => {
  return new Promise((resolve, reject) => {
    iyzipay.installmentInfo.retrieve(data,(err,result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}