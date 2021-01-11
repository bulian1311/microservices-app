import { getRequest } from "./index";
import party2goParser from "./parser/party2go.parser";

const visitedLink: string[] = [];
let linksToVisit: string[] = ["https://party2go.ru/"];

const crawler = async () => {
  while (linksToVisit.length > 0) {
    try {
      const currentUrl = linksToVisit.pop();
      let parser: any = null;

      if (!currentUrl) break;
      if (visitedLink.includes(currentUrl)) continue;

      if (currentUrl.includes("party2go")) parser = party2goParser;

      /////////////
      console.log("CRAWLING: ", currentUrl);

      const html = await getRequest(currentUrl);

      const parserResult = parser(html);

      visitedLink.push(currentUrl);

      parserResult.links.forEach((link: string) => {
        if (!visitedLink.includes(currentUrl)) linksToVisit.push(link);
      });

      await sleep(5000);
    } catch (err) {
      console.log(err);
    }
  }
};

const sleep = async (millisec: number) => {
  return new Promise((resolve) => setTimeout(resolve, millisec));
};

export default crawler;
