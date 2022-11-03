import iyzipay from "../connections/iyzipay";

export const refundPPayments = (data) => {
  return new Promise((resolve, reject)=> {
    iyzipay.refund.create(data, (err, result)=> {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  });
}