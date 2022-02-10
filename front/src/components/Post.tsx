import React from 'react';

export default function Post({ entry }: { entry: Paste }) {
  return (
    <div>
      <details>
        <summary>
          <h4>{entry.title}</h4>
          <h5>{entry.author}</h5>
        </summary>
        <p>{entry.content}</p>
        {entry.date}
      </details>
    </div>
  );
}
