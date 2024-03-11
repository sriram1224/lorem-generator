import React, { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import './lorem.css'

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

  const generateLorem = () => {
    if (count < 0) {
    window.prompt("Please enter a valid input (count must be greater than 0).");
    return null;
  }

    let result = [];
    if (type === 'paragraphs') {
      for (let i = 0; i < count; i++) {
        result.push(
          <div className='list'>
                <p key={i} >{ i+1}){loremIpsum({ units: 'paragraphs' })}</p>
           
          </div>
        );
      }
    } else {
      for (let i = 0; i < count; i++) {
        result.push(
          <div className='list'>
                <span key={i} >{ i+1}){loremIpsum({ units: 'sentences' })}</span>
           
          </div>
        );
      }
    }
    return result;
  };

  return (
    <div>
      <label>
              Count
              <div>
                  <input type="number" value={count} onChange={handleCountChange} />
                  </div>
      </label>
      <select value={type} onChange={handleTypeChange}>
        <option value="paragraphs">Paragraphs</option>
        <option value="sentences">Sentences</option>
      </select>
      <div className='list-container'>{generateLorem()}</div>
    </div>
  );
};

export default LoremGenerator;