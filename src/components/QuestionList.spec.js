describe(`The Question List Component`, () => {
  beforeEach(() => {
    console.log("beforeEach");
  });
  beforeAll(() => {
    console.log("beforeAll");
  });
  afterEach(() => {
    console.log("afterEach");
  });
  afterAll(() => {
    console.log("afterAll");
  });
  it(`Should display a list of items`, () => {
    expect(1 + 1).toEqual(2);
  });
});
