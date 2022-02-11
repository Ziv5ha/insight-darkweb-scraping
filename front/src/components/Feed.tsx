import React, { useContext, useState } from 'react';
import Post from './Post';
import SearchBar from './SearchBar';
import '../styles/feed.css';

export default function Feed({ data }: { data: Paste[] }) {
  const [localData, setLocalData] = useState<Paste[]>([]);
  const renderFeed = () => {
    if (localData.length > 0)
      return localData.map((entry) => (
        <Post key={entry.date + entry.title} entry={entry} />
      ));
    return data.map((entry) => (
      <Post key={entry.date + entry.title} entry={entry} />
    ));
  };
  return (
    <div className='feed-container-outer'>
      <div className='feed-container-inner'>
        <SearchBar setLocalData={setLocalData} data={data} />
        <div className='feed'>{renderFeed()}</div>
      </div>
    </div>
  );
}
