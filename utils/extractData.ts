import stringSanitize from './stringSanitize';
import { HTMLElement } from 'node-html-parser';

const dataExtractor = (elements: HTMLElement[]) => {
  const data = [];
  for (const elem of elements) {
    const authorElem = elem.querySelector('.col-sm-6');
    const titleElem = elem.querySelector('h4');
    const contentElem = elem.querySelector('.text');
    const dateElem = elem.querySelector('.col-sm-6');
    if (!(authorElem && titleElem && contentElem && dateElem)) continue;
    const author = authorElem.textContent.match(/(?<=by\s)(.*)(?=\sat)/)[0];
    const title = stringSanitize(titleElem.textContent);
    const content = stringSanitize(contentElem.textContent);
    const date = dateElem.textContent.match(/(?<=at\s)(.*)/)[0];
    data.push({ author, title, content, date });
  }
  return data;
};

export default dataExtractor;
