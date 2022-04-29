import Iyzipay from "iyzipay";
import nanoid from "../../utils/nanoid.js";
//
import * as Cards from "./methods/cards.js";
import * as Logs from "../../utils/logs.js";


/* ------------------------------------------------- */
// a CARDS
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
    Logs.logFile("1-cards-kullanıcı-ve-kart-oluştur", result);
  }).catch ((err)=> {
    console.log(err);
    Logs.logFile("1-cards-kullanıcı-ve-kart-oluştur-hata", err);
  })
}

createUserAndCards();
