import React, { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';

const LoremGenerator = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState('paragraphs');

//   const handleCountChange = (e) => {
//     const newCount = parseInt(e.target.value, 10);
//     if (newCount > 0) {
//       setCount(newCount);
//     } else {
//       setCount(1);
//     }
//   };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const generateLorem = () => {
    if (count < 0) {
    window.prompt("Please enter a valid input (count must be greater than 0).");
    return null;
  }

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
      <>{generateLorem()}</>
    </div>
  );
};

export default LoremGenerator;