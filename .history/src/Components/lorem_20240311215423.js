import React, { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import './lorem.css';

const LoremGenerator = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState('paragraphs');

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    setCount(newCount);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const generateLorem = () => {
    let result = [];
    if (type === 'paragraphs') {
      for (let i = 0; i < count; i++) {
        const text = loremIpsum({ units: 'paragraphs' });
        result.push(
          <div className="list" key={i}>
            <p>{i + 1}) {text}</p>
            <button onClick={() => copyToClipboard(text)}>Copy</button>
          </div>
        );
      }
    } else {
      for (let i = 0; i < count; i++) {
        const text = loremIpsum({ units: 'sentences' });
        result.push(
          <div className="list" key={i}>
            <span>{i + 1}) {text}</span>
            <button onClick={() => copyToClipboard(text)}>Copy</button>
          </div>
        );
      }
    }
    return result;
  };

  return (
    <div>
      <label>
        Count:
        <div>
          <input type="number" value={count} onChange={handleCountChange} />
        </div>
      </label>
      <select value={type} onChange={handleTypeChange}>
        <option value="paragraphs">Paragraphs</option>
        <option value="sentences">Sentences</option>
      </select>
      <div className="list-container">{generateLorem()}</div>
    </div>
  );
};

export default LoremGenerator;
