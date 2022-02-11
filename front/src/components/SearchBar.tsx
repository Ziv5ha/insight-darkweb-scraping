import React, { useContext, useRef } from 'react';
import _ from 'lodash';
import '../styles/search.css';

export default function SearchBar({
  setLocalData,
  data,
}: {
  setLocalData: React.Dispatch<React.SetStateAction<Paste[]>>;
  data: Paste[];
}) {
  const filterValues = useRef<HTMLInputElement>(null);
  const filterLocally = () => {
    if (filterValues.current) {
      const filterBy = filterValues.current.value;
      const filteredArr = data.filter(
        (entry) =>
          entry.title.toLowerCase().includes(filterBy.toLowerCase()) ||
          entry.content.toLowerCase().includes(filterBy.toLowerCase()) ||
          entry.author.toLowerCase().includes(filterBy.toLowerCase())
      );
      setLocalData(filteredArr.length ? filteredArr : []);
      // errorMessage(filteredArr, filterBy);
    }
  };
  // const errorMessage = (data, filterVal) => {
  //   if (data.length === 0 && filterVal) {
  //     document.querySelector('.searchError').textContent = 'Not Found';
  //   } else {
  //     document.querySelector('.searchError').textContent = '';
  //   }
  // };
  const debouncedFilter = _.debounce(filterLocally, 300);
  return (
    <div className='search-container'>
      <input
        ref={filterValues}
        onKeyDown={debouncedFilter}
        className='searchBar'
        placeholder='Search'
      ></input>
      <div className='searchError'></div>
    </div>
  );
}
