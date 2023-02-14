function delay(timeInMilliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const r = Math.random();

      if (r < 0.5) {
        resolve(r);
      } else {
        reject(r);
      }
    }, timeInMilliseconds);
  });
}

function promiseWay() {
  const delay2Seconds = delay(2000);

  delay2Seconds
    .then((response) => {
      console.info("Promise Success Response: ", response);
    })
    .catch((error) => {
      console.error("Promise Error Response: ", error);
    })
    .finally(() => {
      console.log("Promise : I always run whether error or no error!");
    });
}

promiseWay();

async function asyncAwaitWay() {
  try {
    const delay2Seconds = await delay(2000);

    //const zx = await sknksdjs()

    console.info("Async-Await: Success Response: ", delay2Seconds);
  } catch (error) {
    console.error("Async-Await: Error Response: ", error);
  } finally {
    console.log("Async-Await: I always run whether error or no error!");
  }
}

asyncAwaitWay();
