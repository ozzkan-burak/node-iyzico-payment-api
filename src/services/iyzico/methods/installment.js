import iyzipay from "../connection/iyzipay";

export const checkIntallment = async (data) => {
  return new Promise((resolve, reject) => {
    iyzipay.installmentInfo.retrieve(data,() => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}