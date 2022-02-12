interface Paste {
  author: string;
  title: string;
  content: string;
  date: Date;
}

/**
 * split arrays into two arrays, filtered by keyswords
 *
 * @param {Paste[]} initialData initial array of pastes.
 * @param {string[]} keyswords array of keyswords
 * @return {[Paste[], Paste[]]}
 * first Paste[] contains only Pastes with at least one of the keywords
 * secend Paste[] contains only Pastes without any keywords
 */
export const filteredArrayesByKeywords = (
  initialData: Paste[],
  keywords: string[]
) => {
  const FilteredOnlyKeyword = initialData.filter((paste) =>
    filterByKeywordsArray(paste, keywords)
  );
  const FilteredOutKeyword = initialData.filter(
    (paste) => !filterByKeywordsArray(paste, keywords)
  );
  return [FilteredOnlyKeyword, FilteredOutKeyword];
};

/**
 * Checks if paste contains at least one keyword
 *
 * @param {Paste} paste
 * @param {string[]} keyswords - array of keyswords
 * @return {boolean} returns true if paste contains at least one of the keywords
 */
const filterByKeywordsArray = (paste: Paste, keywords: string[]) => {
  let containsKeyword = false;
  keywords.forEach((keyword) => {
    if (pasteContainsKeyWord(paste, keyword)) containsKeyword = true;
  });
  return containsKeyword;
};

/**
 * Checks if paste contains keyword
 *
 * @param {Paste} paste
 * @param {string} keysword
 * @return {boolean} returns true if paste contains keyword
 */
const pasteContainsKeyWord = (paste: Paste, keyword: string) => {
  const titleContainsKeyword = paste.title.toLowerCase().includes(keyword);
  const contentContainsKeyword = paste.content.toLowerCase().includes(keyword);
  return titleContainsKeyword || contentContainsKeyword;
};
