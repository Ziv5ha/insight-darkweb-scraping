import React from 'react';

export default function Progress({
  label,
  value,
  total,
}: {
  label: string;
  value: number;
  total: number;
}) {
  return (
    <div key={label}>
      <label className='labels' htmlFor={label}>
        {label}
      </label>
      <progress id={label} max={total} value={value}></progress>
    </div>
  );
}
