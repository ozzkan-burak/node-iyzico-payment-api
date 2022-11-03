import Iyzipay from "iyzipay";
import nanoid from "../../utils/nanoid.js";
//
import * as Cards from "./methods/cards.js";
import * as Installments from "./methods/installments.js";
import * as Payment from "./methods/payment.js";
import * as ThreedsPayment from "./methods/threeds-payment.js";
import * as Checkouts from "./methods/checkouts";
import * as Logs from "../../utils/logs.js";
import * as CancelPayments from './methods/cancel-payments';
import * as RefundPayments from './methods/refund-payments';


/* ------------------------------------------------- */
// a) CARDS
/* ------------------------------------------------- */

// Bir kullanıcı oluştur.
const createUserAndCards = () => {
  Cards.createUserCard({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    email: "burak@burak.com",
    externalId: nanoid(),
    card: {
      cardAlias: "Kredi Kartı",
      cardHolderName: "Jode Doe",
      cardNumber: "5528790000000008",
      expireMonth: "12",
      expireYear: "2030",
    },
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("1-kullanıcı-ve-kart-oluştur", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("1-kullanıcı-ve-kart-oluştur-hata", err);
    });
};

//createUserAndCards();

// Bir kullanıcıya yeni bir kart ekle.

const createAcardForAUser = () => {
  Cards.createUserCard({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    email: "burak@burak.com",
    externalId: nanoid(),
    cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
    card: {
      cardAlias: "Kredi Kartı",
      cardHolderName: "Jode Doe",
      cardNumber: "5528790000000008",
      expireMonth: "12",
      expireYear: "2030",
    }, 
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("2-bir-kullanıcıya-kart-ekle", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("2-bir-kullanıcıya-kart-ekle-hata", err);
    });
};

//createAcardForAUser();

// Bir kullanıcının kartlarını oku.

const readCardsOfAUser = () => {
  Cards.getUserCards({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("3-bir-kullanıcıya-kart-ekle", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("3-bir-kullanıcıya-kart-ekle-hata", err);
    });
};

//readCardsOfAUser();

//Bir Kullanıcının bir kartını silmek.

const deleteCardOfAUser = () => {
  Cards.deleteUserCard({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    cardToken: "x+b3CyDps1qQExApsMOZBIhgWPI=",
    cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("4-bir-kullanıcının-kartını-sil", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("4-bir-kullanıcının-kartını-sil-hata", err);
    });
};

//deleteCardOfAUser();

/* ------------------------------------------------- */
// b) INSTALLMENTS
/* ------------------------------------------------- */

// Bir kart ve ücretle ilgili gerçekleşebilecek taksitlerin kontrolü.

const checkInstallment = () => {
  Installments.checkInstallment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    binNumber: "552879",
    price: "1000",
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("5-bir-kart-ve-ücret-taksit-kontrolü", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("5-bir-kart-ve-ücret-taksit-kontrolü-hata", err);
    });
};

//checkInstallment();

/* ------------------------------------------------- */
// c) NORMAL PAYMENTS
/* ------------------------------------------------- */

// Kayıtlı olmayan kartla ödeme yapma ve kartı katdetme.

const createPayment = () => {
  return Payment.createPayment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    price: "300",
    paidPrice: "300",
    currency: Iyzipay.CURRENCY.TRY,
    installment: "1",
    basketId: "B67832",
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardHolderName: "Jode Doe",
      cardNumber: "5528790000000008",
      expireMonth: "12",
      expireYear: "2030",
      cvc: "123",
      registerCard: "0",
    },
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      gsmNumber: "+905350000000",
      email: "john@john.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    billingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Samsung S20",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 90,
      },
      {
        id: "BI102",
        name: "Iphone X",
        category1: "Telefonlar",
        category2: "IOS Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 150,
      },
      {
        id: "BI103",
        name: "Samsung S10",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 60,
      },
    ],
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("6-bir-kart-ödeme-kontrolü", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("6-bir-kart-ödeme-kontrolü-hata", err);
    });
};

//createPayment();

// Bir kredikartı ile ödeme yap ve kartı kaydet.

const createPaymentAndSaveCard = () => {
  return Payment.createPayment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    price: "300",
    paidPrice: "300",
    currency: Iyzipay.CURRENCY.TRY,
    installment: "1",
    basketId: "B67832",
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardAlias: "Kredi Kartım Ödemeden Sonra Kaydet",
      cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
      cardHolderName: "Jode Doe",
      cardNumber: "5528790000000008",
      expireMonth: "12",
      expireYear: "2030",
      cvc: "123",
      registerCard: "1",
    },
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      gsmNumber: "+905350000000",
      email: "john@john.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    billingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Samsung S20",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 90,
      },
      {
        id: "BI102",
        name: "Iphone X",
        category1: "Telefonlar",
        category2: "IOS Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 150,
      },
      {
        id: "BI103",
        name: "Samsung S10",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 60,
      },
    ],
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("7-bir-kart-ödeme-ve-kaydetme-kontrolü", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("7-bir-kart-ödeme-ve-kaydetme-kontrolü-hata", err);
    });
};

//createPaymentAndSaveCard();
//readCardsOfAUser();

// Bir kayıtlı kart ile ödeme yap.

const createPaymentWithSavedCard = () => {
  return Payment.createPayment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    price: "300",
    paidPrice: "300",
    currency: Iyzipay.CURRENCY.TRY,
    installment: "1",
    basketId: "B67832",
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
      cardToken: "C2trdOgRF8WGHB8UbuMZtFE1YkE=",
    },
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      gsmNumber: "+905350000000",
      email: "john@john.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    billingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Samsung S20",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 90,
      },
      {
        id: "BI102",
        name: "Iphone X",
        category1: "Telefonlar",
        category2: "IOS Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 150,
      },
      {
        id: "BI103",
        name: "Samsung S10",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 60,
      },
    ],
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("8-kayıtlı-bir-kart-ödeme-al", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("8-kayıtlı-bir-kart-ödeme-al-hata", err);
    });
};

//createPaymentWithSavedCard();

/* ------------------------------------------------- */
// d) 3D Secure payment
/* ------------------------------------------------- */

const initialize3DsecurePayment = () => {
  ThreedsPayment.initializePayment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    price: "300",
    paidPrice: "300",
    currency: Iyzipay.CURRENCY.TRY,
    installment: "1",
    basketId: "B67832",
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    callbackUrl: "https://localhost/api/payment/3ds/complete",
    paymentCard: {
      cardHolderName: "Jode Doe",
      cardNumber: "5528790000000008",
      expireMonth: "12",
      expireYear: "2030",
      cvc: "123",
      registerCard: "0",
    },
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      gsmNumber: "+905350000000",
      email: "john@john.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    billingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Samsung S20",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 90,
      },
      {
        id: "BI102",
        name: "Iphone X",
        category1: "Telefonlar",
        category2: "IOS Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 150,
      },
      {
        id: "BI103",
        name: "Samsung S10",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 60,
      },
    ],
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("9-3d-yeni-bir-kart-ile-guvenli-odeme-al", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("9-3d-yeni-bir-kart-ile-guvenli-odeme-al-hata", err);
    });
};

//initialize3DsecurePayment();

// complete payment in 3ds

const completeThreeDSPayment = () => {
  ThreedsPayment.completePayment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    paymentId: "17494781",
    conversationData: "token=_token", // iyzico tarafıdan gönderilen datyav işlenmelidir.
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("10-threeds-payments-odeme-tamamla", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("10-threeds-payments-odeme-tamamla-hata", err);
    });
};

//completeThreeDSPayment();

const initialize3DsecurePaymentWithRegisteredCard = () => {
  ThreedsPayment.initializePayment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    price: "300",
    paidPrice: "300",
    currency: Iyzipay.CURRENCY.TRY,
    installment: "1",
    basketId: "B67832",
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    callbackUrl: "https://localhost/api/payment/3ds/complete",
    paymentCard: {
      cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
      cardToken: "C2trdOgRF8WGHB8UbuMZtFE1YkE=",
    },
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      gsmNumber: "+905350000000",
      email: "john@john.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    billingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Samsung S20",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 90,
      },
      {
        id: "BI102",
        name: "Iphone X",
        category1: "Telefonlar",
        category2: "IOS Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 150,
      },
      {
        id: "BI103",
        name: "Samsung S10",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 60,
      },
    ],
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("11-kayıtlı-bir-kart-ile-3d-odeme-al", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("11-kayıtlı-bir-kart-ile-3d-odeme-al-hata", err);
    });
};

const initialize3dSecurePaymentsWtihNewCardAndRegistered = () => {
  ThreedsPayment.initializePayment({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    price: "300",
    paidPrice: "300",
    currency: Iyzipay.CURRENCY.TRY,
    installment: "1",
    basketId: "B67832",
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    callbackUrl: "https://localhost/api/payment/3ds/complete",
    paymentCard: {
      cardAlias: "Kredi Kartım Ödemeden Sonra Kaydet",
      cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
      cardHolderName: "Jode Doe",
      cardNumber: "5528790000000008",
      expireMonth: "12",
      expireYear: "2030",
      cvc: "123",
      registerCard: "1",
    },
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      gsmNumber: "+905350000000",
      email: "john@john.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    billingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Samsung S20",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 90,
      },
      {
        id: "BI102",
        name: "Iphone X",
        category1: "Telefonlar",
        category2: "IOS Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 150,
      },
      {
        id: "BI103",
        name: "Samsung S10",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 60,
      },
    ],
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("12-kayıtlı-bir-kart-ile-3d-al-yeni-kredi-kartı", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("12-kayıtlı-bir-kart-ile-3d-hata-yeni-kredi-kartı", err);
    });
};

/* ------------------------------------------------- */
// a) Checkout form
/* ------------------------------------------------- */

const initializeCheckoutForm = () => {
  Checkouts.initialize({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    price: "300",
    paidPrice: "300",
    currency: Iyzipay.CURRENCY.TRY,
    installment: "1",
    basketId: "B67832",
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    callbackUrl: "https://localhost/api/checkout/complete/payment",
    cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
    enabledInstallments: [1, 2, 3, 6, 9],
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      gsmNumber: "+905350000000",
      email: "john@john.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      ip: "85.34.78.112",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
    },
    shippingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    billingAddress: {
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
    },
    basketItems: [
      {
        id: "BI101",
        name: "Samsung S20",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 90,
      },
      {
        id: "BI102",
        name: "Iphone X",
        category1: "Telefonlar",
        category2: "IOS Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 150,
      },
      {
        id: "BI103",
        name: "Samsung S10",
        category1: "Telefonlar",
        category2: "Android Telefonlar",
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: 60,
      },
    ],
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("13-checkout-form", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("13-checkout-form-hata", err);
    });
};

//initializeCheckoutForm();

// Tamamlanmış veya tamamlanmamış checkout form ödeme bilgisini gösterir 

const getFormPayment = () => {
  Checkouts.getFromPayment({
    locale: Iyzipay.LOCALE.TR,
    conservationId: nanoid(),
    token: 'dVrJR4UZqzmNCnilDUIbuOO77yY=',
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("14-checkout-form-payments-get-details", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("14-checkout-form-payments-get-details-err", err);
    });
}

//getFormPayment();


/* ------------------------------------------------- */
// a) CANCEL PAYMENT
/* ------------------------------------------------- */
// ÖDEMEYİ İPTAL ETME TESTİ

const cancelPayments = () => {
  CancelPayments.cancelPayment({
    locale: Iyzipay.LOCALE.TR,
    conservationId: nanoid(),
    paymentId: "17068875",
    ip: "85.34.78.112",
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("15-cancel-payment", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("15-cancel-payment-err", err);
    });
};

// cancelPayments();

const cancelPaymentsReason = () => {
  CancelPayments.cancelPayment({
    locale: Iyzipay.LOCALE.TR,
    conservationId: nanoid(),
    paymentId: "17068875",
    ip: "85.34.78.112",
    reason: Iyzipay.REFUND_REASON.BUYER_REQUEST,
    description: "Kullanıcı isteiği ile iptal edildi",
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("16-cancel-payment-reason", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("16-cancel-payment-reason-err", err);
    });
}

// cancelPaymentsReason()

/* ------------------------------------------------- */
// g) REFUND PAYMENTS
/* ------------------------------------------------- */

const refundPayment = () => {
  RefundPayments.refundPPayments({
    locale: Iyzipay.LOCALE.TR,
    conservationId: nanoid(),
    paymentTransection:,
    price:"60",
    currency: Iyzipay.CURRENCY.TRY,
    ip: "85.34.78.112",
  })
    .then((result) => {
      console.log(result);
      Logs.logFile("17-cancel-payment-refund", result);
    })
    .catch((err) => {
      console.log(err);
      Logs.logFile("17-cancel-payment-refund-err", err);
    });
}