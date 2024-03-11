import React, { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import './lorem.css';

const LoremGenerator = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState('paragraphs');
  const [generatedText, setGeneratedText] = useState('');

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

  const copyAllToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    alert('All text copied to clipboard!');
  };

  const generateLorem = () => {
    let result = '';
    if (type === 'paragraphs') {
      for (let i = 0; i < count; i++) {
        const text = loremIpsum({ units: 'paragraphs' });
        result += `${i + 1}) ${text}\n`;
      }
    } else {
      for (let i = 0; i < count; i++) {
        const text = loremIpsum({ units: 'sentences' });
        result += `${i + 1}) ${text}\n`;
      }
    }
    setGeneratedText(result);
  };

  return (
    <div>
      <label>
        Count:
        <input type="number" value={count} onChange={handleCountChange} />
      </label>
      <select value={type} onChange={handleTypeChange}>
        <option value="paragraphs">Paragraphs</option>
        <option value="sentences">Sentences</option>
      </select>
      <button onClick={generateLorem}>Generate Lorem Ipsum</button>
      <div className="list-container">
        {generatedText.split('\n').map((text, index) => (
          <div  key={`text_${index}`}>
            <span>{text}</span>
          </div>
        ))}
      </div>
      {generatedText && (
        <div>
          <button onClick={copyAllToClipboard}>Copy All</button>
        </div>
      )}
    </div>
  );
};

export default LoremGenerator;
