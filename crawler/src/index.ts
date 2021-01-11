import axios from "axios";
import fs from "fs";

export const getRequest = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

const writeHtml = (html: any) => {
  fs.writeFileSync("./src/html/test.html", html);
};

const saveHtml = async (url: string) => {
  const html = await getRequest(url);
  writeHtml(html);
};

saveHtml("https://party2go.ru/product-category/batuty-i-gorki/");
