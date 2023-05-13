import routes from "./Routes";

test("correct routes are exported", () => {
  expect(routes.map(({ name, path }) => `${name}: ${path}`)).toMatchSnapshot();
});
