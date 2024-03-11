import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');

  const generateLoremIpsum = () => {
    const loremIpsumText = generateLoremIpsumText(numParagraphs);
    setGeneratedText(loremIpsumText);
  };

  const generateLoremIpsumText = (numParagraphs) => {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return Array(numParagraphs).fill(loremIpsum).join('\n\n');
  };

  const handleInputChange = event => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setNumParagraphs(value);
    }
  };

  return (
    <div>
      <label htmlFor="numParagraphs">Number of Paragraphs:</label>
      <input
        id="numParagraphs"
        type="number"
        value={numParagraphs}
        onChange={handleInputChange}
      />
      <button onClick={generateLoremIpsum}>Generate Lorem Ipsum</button>
      <div>
        <h2>Generated Lorem Ipsum:</h2>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default LoremIpsumGenerator;
