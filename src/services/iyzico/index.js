import Iyzipay from "iyzipay";
import nanoid from "../../utils/nanoid.js";
//
import * as Cards from "./methods/cards.js";
import * as Logs from "../../utils/logs.js";


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
    }
  }).then((result)=> {
    console.log(result);
    Logs.logFile("1-kullanıcı-ve-kart-oluştur", result);
  }).catch ((err)=> {
    console.log(err);
    Logs.logFile("1-kullanıcı-ve-kart-oluştur-hata", err);
  })
}

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
    }
  }).then((result)=> {
    console.log(result);
    Logs.logFile("2-cards-bir-kullanıcıya-kart-ekle", result);
  }).catch ((err)=> {
    console.log(err);
    Logs.logFile("2-cards-bir-kullanıcıya-kart-ekle-hata", err);
  })
}

//createAcardForAUser();

// Bir kullanıcının kartlarını oku.

const readCardsOfAUser = () => {
  Cards.getUserCards({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
  }).then((result)=> {
    console.log(result);
    Logs.logFile("3-cards-bir-kullanıcıya-kart-ekle", result);
  }).catch ((err)=> {
    console.log(err);
    Logs.logFile("3-cards-bir-kullanıcıya-kart-ekle-hata", err);
  })
}

//readCardsOfAUser();

//Bir Kullanıcının bir kartını silmek.

const deleteCardOfAUser = () => {
  Cards.deleteUserCard({
    locale: Iyzipay.LOCALE.TR,
    conversationId: nanoid(),
    cardToken: "x+b3CyDps1qQExApsMOZBIhgWPI=",
    cardUserKey: "QBwNni+Kjhz10CqCy2uSEGPl9Kw=",
  }).then((result)=> {
    console.log(result);
    Logs.logFile("4-cards-bir-kullanıcının-kartını-sil", result);
  }).catch ((err)=> {
    console.log(err);
    Logs.logFile("4-cards-bir-kullanıcının-kartını-sil-hata", err);
  })
}

//deleteCardOfAUser();

/* ------------------------------------------------- */
// b) INSTALLMENTS
/* ------------------------------------------------- */