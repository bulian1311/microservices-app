import fs from "fs";
import parser from "../parser/party2go.parser";

const prodPage1Html = fs.readFileSync("src/html/party2go-product.html");
//const catalogPageHtml = fs.readFileSync("src/html/catalog.html");

let parserResult: any;

beforeEach(() => {
  parserResult = parser(prodPage1Html);
});

test("Title", () => {
  expect(parserResult.title).toBe("Горка «Молния Маквин»");
});

test("Price", () => {
  expect(parserResult.price).toBe(15000);
});

test("Product links", () => {
  expect(parserResult.links.length).toBe(14);
});

test("Images links", () => {
  expect(parserResult.images.length).toBe(5);
});
