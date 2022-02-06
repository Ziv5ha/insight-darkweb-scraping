const stringSanitize = (str: string) => {
  return str.replace(/\n|\t|&nbsp;/g, '');
};
export default stringSanitize;
