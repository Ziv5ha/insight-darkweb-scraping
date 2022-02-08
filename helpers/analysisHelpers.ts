interface Paste {
  author: string;
  title: string;
  content: string;
  date: Date;
}

export const filteredArrayesByKeyword = (
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

const filterByKeywordsArray = (paste: Paste, keywords: string[]) => {
  let containsKeyword = false;
  keywords.forEach((keyword) => {
    if (pasteContainsKeyWord(paste, keyword)) containsKeyword = true;
  });
  return containsKeyword;
};

const pasteContainsKeyWord = (paste: Paste, keyword: string) => {
  const titleContainsKeyword = paste.title.includes(keyword);
  const contentContainsKeyword = paste.content.includes(keyword);
  const titleContainsKeywordUpper = paste.title.includes(keyword.toUpperCase());
  const contentContainsKeywordUpper = paste.content.includes(
    keyword.toUpperCase()
  );
  return (
    titleContainsKeyword ||
    titleContainsKeywordUpper ||
    contentContainsKeyword ||
    contentContainsKeywordUpper
  );
};
