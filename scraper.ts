import axios from 'axios';
import { parse } from 'node-html-parser';
import dataExtractor from './utils/extractData';
// import * as cron from 'node-cron';
// import PasteModel from './mongo/model';
// import { connection } from 'mongoose';

const strongholdUrl =
  'http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all';

export const scraper = async (url: string, divSelector: string) => {
  try {
    const request = await axios.get(url, {
      proxy: { port: 8118, host: 'localhost' },
    });
    const html = parse(request.data);
    const elements = html.querySelectorAll(divSelector);
    await dataExtractor(elements);
  } catch (error) {
    console.log(error);
  }
};

// scraper(strongholdUrl, '#list > .row');
// cron.schedule('*/2 * * * *', () => {
//   scraper(strongholdUrl, '#list > .row');
// });
