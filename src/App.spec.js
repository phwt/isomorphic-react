it("async test 1", (done) => {
  setTimeout(done, 100);
});

it("async test 2", () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
});

it("async test 3", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
