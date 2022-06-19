export const carouselBreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3, itemsToScroll: 3 },
];

export const getInputValue = (id) => {
  return document.querySelector(`#${id}`).value;
};

export const viewFormData = (formData) => {
  if (!formData) return;
  // console.log("================================");
  for (var pair of formData.entries()) {
    // console.log(pair[0] + ": " + pair[1]);
  }
  // console.log("================================");
};


export const clearString = (string) => {
  string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  string = string.replace(" ", "-").toLowerCase();
  return string;
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "COP",
});


export class NequiPayData {
  static phone = "300 845 9138";
  static wapp = "+573008459138";
  static message = "Compra de tus productos en Mi Tienda";
}

export class BancolombiaPayData {
  static accountNumber = "68087694686";
  static accountType = "Cuenta de Ahorros Bancolombia";
  static accountOwner = "Sutano Mengano";
  static accountDni = "CC: 1.067.999.999";
}

export class CryptoPayData {
  static moneyType = "Bitcoin";
  static accountWallet = "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2";
}
const whatsapp = "+57 300 845 9138";

export const aditionalInfo = `Después de realizada la transacción envíanos captura del pago a nuestro WhatsApp ${whatsapp} con tus datos y el ID de la compra para realizar la activación del curso. Te esperamos.`;
