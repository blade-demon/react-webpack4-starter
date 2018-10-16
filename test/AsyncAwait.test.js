const sleep = async timeOut =>
  new Promise(resolve => {
    setTimeout(resolve, timeOut);
  });

const doSomething = async () => {
  await sleep(1000);
  console.log("I'm awake");
  return "ok";
};

// test async/await
test("After sleep 1s awake", async () => {
  const data = await doSomething();
  expect(data).toEqual("ok");
});
