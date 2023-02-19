const day = {
  dayOfWeek: 1,
};

const proxyObj = new Proxy(day, {
  set(obj, prop, val) {
    if (val < 1 || val >= 7) {
      throw new Error("Incorrect value");
    }
    obj[prop] = val;
  },
});

try {
  proxyObj.dayOfWeek = 100;
} catch (error) {
  console.log("Error: ", error.message);
}

console.log(proxyObj);
