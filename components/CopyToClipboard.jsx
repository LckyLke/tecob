'use client';
import { useEffect, useState } from 'react';

export default function CopyToClipboard({ text }) {
  const [isTextVisible, setTextVisible] = useState(false);

  const handleClick = () => {
    setTextVisible(!isTextVisible);
  };
  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log('Copying to clipboard was successful!');
        })
        .catch((err) => {
          console.error('Could not copy text: ', err);
        });
    }
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>
        !If auto copy doesnt work click here!
      </button>
      {isTextVisible && <p>{text}</p>}
    </div>
  );
}
