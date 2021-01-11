import fs from "fs";
import parser from "../parser/party2go.parser";

const prodPage1Html = fs.readFileSync("src/html/product1.html");
//const catalogPageHtml = fs.readFileSync("src/html/catalog.html");

let parserResult: any;

beforeEach(() => {
  parserResult = parser(prodPage1Html);
});

it("Title", () => {
  expect(parserResult.title).toBe("Горка «Молния Маквин»");
});

// it("Price", () => {
//   expect(parserResult.price).toBe([15000, 28000]);
// });

it("Product links", () => {
  expect(parserResult.links.length).toBe(50);
});
