import React, { useContext, useState } from 'react';
import Post from './Post';

export default function Feed({ data }: { data: Paste[] }) {
  const renderFeed = () => {
    return data.map((entry) => (
      <Post key={entry.date + entry.title} entry={entry} />
    ));
  };
  return (
    <div>
      <div className='feed'>{renderFeed()}</div>
    </div>
  );
}
