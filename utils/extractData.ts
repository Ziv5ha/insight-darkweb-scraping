import stringSanitize from './stringSanitize';
import axios from 'axios';
import parse, { HTMLElement } from 'node-html-parser';

const dataExtractor = async (elements: HTMLElement[]) => {
  //   const data = [];
  for (const elem of elements) {
    const author = parseAuthor(elem);
    const title = parseTitle(elem);
    const content = parseContent(elem);
    const date = parseDate(elem);
    if (!(author && title && content && date)) continue;
    // data.push({ author, title, content, date });
    const paste = new PasteModel({ author, title, content, date });
    if (!(await PasteModel.exists({ title }))) {
      await paste.save();
    }
  }
  //   return data;
};

export default dataExtractor;

const parseAuthor = (elem: HTMLElement) => {
  const authorElem = elem.querySelector('.col-sm-6');
  if (!authorElem) return;
  const author = authorElem.innerText.match(/(?<=by\s)(.*)(?=\sat)/)[0];
  return author;
};
const parseTitle = (elem: HTMLElement) => {
  const titleElem = elem.querySelector('h4');
  if (!titleElem) return;
  const title = stringSanitize(titleElem.innerText);
  return title;
};
const parseContent = async (elem: HTMLElement) => {
  const aElem = elem.querySelector('a');
  if (!aElem) return;
  const content = stringSanitize(await contentExtractor(aElem));
  return content;
};
const parseDate = (elem: HTMLElement) => {
  const dateElem = elem.querySelector('.col-sm-6');
  if (!dateElem) return;
  const date = dateElem.innerText.match(/(?<=at\s)(.*)/)[0];
  return date;
};

const contentExtractor = async (a: HTMLElement) => {
  try {
    const request = await axios.get(a.attrs.href, {
      proxy: { port: 8118, host: 'localhost' },
    });
    const html = parse(request.data);
    const content = html.querySelector('.text');
    return content.innerText;
  } catch (error) {
    console.log(error);
  }
};