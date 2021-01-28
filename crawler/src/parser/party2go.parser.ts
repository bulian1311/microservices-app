import cheerio from "cheerio";
import { resolve } from "url";

const party2goParser = (html: Buffer) => {
  const BASE_URL = "https://party2go.ru/";
  const $ = cheerio.load(html);

  ///////////ПАРСИМ ССЫЛКИ\\\\\\\\\\\\\

  const links: string[] = [];
  const parseLinks = (args: string) => {
    $(args).each((index, elem) => {
      links.push(resolve(BASE_URL, $(elem).attr("href")!));
    });
  };

  //Навбар
  parseLinks(".menu-item.menu-item-type-post_type.menu-item-object-page>a");
  //Список категорий
  parseLinks(".box-button>a");
  //Пагинатор
  parseLinks(".next.page-numbers");
  //Карточка товара
  parseLinks(".woocommerce-LoopProduct-link.woocommerce-loop-product__link");

  ////////////ПАРСИМ КАРТОЧКУ ТОВАРА\\\\\\\\\\\\\

  if (!$(".product_title.entry-title").text()) return;

  const title = $("h1.product_title").text().trim();

  let price = parseInt(
    $("p.price>.woocommerce-Price-amount.amount").text().replace(",", "")
  );

  if (!price) {
    price = parseInt(
      $("p.price > ins > .woocommerce-Price-amount.amount")
        .text()
        .replace(",", "")
    );
  }

  const description = $(
    ".woocommerce-product-details__short-description>p"
  ).text();

  const images = $(".attachment-shop_single.size-shop_single")
    .map((i, elem) => $(elem).attr("src"))
    .get();

  const category: string = $(".product_meta>.posted_in>a").text().toLowerCase();

  const specifications: any = {};

  $(".wpb_wrapper > table >tbody > tr").each((i, elem) => {
    let key = "";
    let val = "";
    let td = $(elem).children().get();

    td.forEach((t) => {
      if (t.name == "td" && t.attribs.width == "311") {
        t.children.forEach((el: any) => {
          if (el.data) key = key + el.data;
        });
      }
      if (t.name == "td" && t.attribs.width == "312") {
        t.children.forEach((el: any) => {
          if (el.data) val = val + el.data;
        });
      }
    });

    specifications[key] = val;
  });

  console.log("party2go: " + title);
  return { title, price, description, images, category, specifications, links };
};

export default party2goParser;
