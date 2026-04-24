export function checkPrice(price) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (price < 1000) {
          resolve("Price is acceptable");
        } else {
          reject("Too expensive!");
        }
      }, 1500);
    });
  }