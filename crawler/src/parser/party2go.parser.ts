import cheerio from "cheerio";

const party2goParser = (html: Buffer) => {
  const $ = cheerio.load(html);

  const title = $("h1.product_title").text().trim();

  const price = $("p.price > .woocommerce-Price-amount.amount").text().trim();

  const links = $("a")
    .map((index, elem) => $(elem).attr("href"))
    .get();

  console.log(links);

  return { title, price, links };
};

export default party2goParser;
