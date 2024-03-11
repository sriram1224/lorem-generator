import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');

  const generateLoremIpsum = () => {
    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${numParagraphs}`)
      .then(response => response.json())
      .then(data => setGeneratedText(data.join('\n\n')))
      .catch(error => console.error('Error fetching Lorem Ipsum:', error));
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
