export const romanize = (num: number) => {
  if (!+num) return false;
  let digits = String(+num).split("");
  let key: string[] = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];

  let roman = "";
  let i = 3;

  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;

  return Array(+digits.join("") + 1).join("M") + roman;
};

export const validCreditcard = (
  cardnumb: string
): {
  message: string;
  success: any;
  type:
    | "Visa"
    | "MasterCard"
    | "DinersClub"
    | "CarteBlanche"
    | "AmEx"
    | "Discover"
    | "JCB"
    | "enRoute"
    | "Solo"
    | "Switch"
    | "Maestro"
    | "VisaElectron"
    | "LaserCard";
} => {
  const ccErrors = [];
  ccErrors[0] = "Unknown card type";
  ccErrors[1] = "No card number provided";
  ccErrors[2] = "Credit card number is in invalid format";
  ccErrors[3] = "Credit card number is invalid";
  ccErrors[4] = "Credit card number has an inappropriate number of digits";
  ccErrors[5] =
    "Warning! This credit card number is associated with a scam attempt";

  const response = (success, message = null, type = null) => ({
    message,
    success,
    type,
  });

  const validCardnumb = (numb) => {
    const regex = new RegExp("^[0-9]{13,19}$");
    if (!regex.test(numb)) {
      return false;
    }
    return luhnCheck(numb);
  };

  const luhnCheck = (val) => {
    let validsum = 0;
    let k = 1;
    for (let l = val.length - 1; l >= 0; l--) {
      let calck = 0;
      calck = Number(val.charAt(l)) * k;
      if (calck > 9) {
        validsum = validsum + 1;
        calck = calck - 10;
      }
      validsum = validsum + calck;
      if (k == 1) {
        k = 2;
      } else {
        k = 1;
      }
    }
    return validsum % 10 == 0;
  };

  const cards = [];
  cards[0] = {
    name: "Visa",
    length: "13,16",
    prefixes: "4",
    checkdigit: true,
  };
  cards[1] = {
    name: "MasterCard",
    length: "16",
    prefixes: "51,52,53,54,55",
    checkdigit: true,
  };
  cards[2] = {
    name: "DinersClub",
    length: "14,16",
    prefixes: "36,38,54,55",
    checkdigit: true,
  };
  cards[3] = {
    name: "CarteBlanche",
    length: "14",
    prefixes: "300,301,302,303,304,305",
    checkdigit: true,
  };
  cards[4] = {
    name: "AmEx",
    length: "15",
    prefixes: "34,37",
    checkdigit: true,
  };
  cards[5] = {
    name: "Discover",
    length: "16",
    prefixes: "6011,622,64,65",
    checkdigit: true,
  };
  cards[6] = {
    name: "JCB",
    length: "16",
    prefixes: "35",
    checkdigit: true,
  };
  cards[7] = {
    name: "enRoute",
    length: "15",
    prefixes: "2014,2149",
    checkdigit: true,
  };
  cards[8] = {
    name: "Solo",
    length: "16,18,19",
    prefixes: "6334,6767",
    checkdigit: true,
  };
  cards[9] = {
    name: "Switch",
    length: "16,18,19",
    prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
    checkdigit: true,
  };
  cards[10] = {
    name: "Maestro",
    length: "12,13,14,15,16,18,19",
    prefixes: "5018,5020,5038,6304,6759,6761,6762,6763",
    checkdigit: true,
  };
  cards[11] = {
    name: "VisaElectron",
    length: "16",
    prefixes: "4026,417500,4508,4844,4913,4917",
    checkdigit: true,
  };
  cards[12] = {
    name: "LaserCard",
    length: "16,17,18,19",
    prefixes: "6304,6706,6771,6709",
    checkdigit: true,
  };

  if (cardnumb.length == 0) {
    return response(false, ccErrors[1]);
  }

  cardnumb = cardnumb.replace(/\s/g, "");

  if (!validCardnumb(cardnumb)) {
    return response(false, ccErrors[2]);
  }

  if (cardnumb == "5490997771092064") {
    return response(false, ccErrors[5]);
  }

  let lengthValid = false;
  let prefixValid = false;
  let cardCompany = "";

  for (let l = 0; l < cards.length; l++) {
    const prefix = cards[l].prefixes.split(",");
    for (let k = 0; k < prefix.length; k++) {
      const exp = new RegExp("^" + prefix[k]);
      if (exp.test(cardnumb)) {
        prefixValid = true;
      }
    }

    if (prefixValid) {
      const lengths = cards[l].length.split(",");
      for (let k = 0; k < lengths.length; k++) {
        if (cardnumb.length == lengths[k]) {
          lengthValid = true;
        }
      }
    }

    if (lengthValid && prefixValid) {
      cardCompany = cards[l].name;
      return response(true, null, cardCompany);
    }
  }

  if (!prefixValid) {
    return response(false, ccErrors[3]);
  }

  if (!lengthValid) {
    return response(false, ccErrors[4]);
  }

  return response(true, null, cardCompany);
};
