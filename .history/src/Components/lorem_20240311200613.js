import React, { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';

const LoremGenerator = () => {
  const [count, setCount] = useState(1);
  const [type, setType] = useState('paragraphs');

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

 const generateLorem = () => {
  let result = [];
  if (type === 'paragraphs') {
    for (let i = 0; i < count; i++) {
      result.push(
        <>
          <p key={i}>{loremIpsum({ units: 'paragraphs' })}</p>
          <hr />
        </>
      );
    }
  } else {
    for (let i = 0; i < count; i++) {
      result.push(
        <>
          <span key={i}>{loremIpsum({ units: 'sentences' })}</span>
          <hr />
        </>
      );
    }
  }
  return result;
};

  return (
    <div>
      <label>
        Count:
        <input type="number" value={count} onChange={handleCountChange} min="1" />
      </label>
      <select value={type} onChange={handleTypeChange}>
        <option value="paragraphs">Paragraphs</option>
        <option value="sentences">Sentences</option>
      </select>
      <p>{generateLorem()}</p>
    </div>
  );
};

export default LoremGenerator;