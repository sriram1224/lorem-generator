import React, { useState } from 'react';

const LoremIpsumGenerator = () => {
  const [numItems, setNumItems] = useState(1);
  const [generatedText, setGeneratedText] = useState('');
  const [contentType, setContentType] = useState('paragraphs');

  const generateLoremIpsum = () => {
    if (contentType === 'paragraphs') {
      const loremIpsumText = generateLoremIpsumParagraphs(numItems);
      setGeneratedText(loremIpsumText);
    } else if (contentType === 'sentences') {
      const loremIpsumText = generateLoremIpsumSentences(numItems);
      setGeneratedText(loremIpsumText);
    } else if (contentType === 'html') {
      const loremIpsumText = generateLoremIpsumHTML(numItems);
      setGeneratedText(loremIpsumText);
    }
  };

  const generateLoremIpsumParagraphs = (numParagraphs) => {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return Array(numParagraphs).fill(loremIpsum).join('\n\n');
  };

  const generateLoremIpsumSentences = (numSentences) => {
    const loremIpsumSentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
    return Array(numSentences).fill(loremIpsumSentence).join('');
  };

  const generateLoremIpsumHTML = (numItems) => {
    const loremIpsumHTML = '<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>';
    return Array(numItems).fill(loremIpsumHTML).join('');
  };

  const handleNumItemsChange = event => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setNumItems(value);
    }
  };

  const handleContentTypeChange = event => {
    setContentType(event.target.value);
  };

  return (
    <div>
      <label htmlFor="numItems">Number of Items:</label>
      <input
        id="numItems"
        type="number"
        value={numItems}
        onChange={handleNumItemsChange}
      />
      <label htmlFor="contentType">Content Type:</label>
      <select id="contentType" value={contentType} onChange={handleContentTypeChange}>
        <option value="paragraphs">Paragraphs</option>
        <option value="sentences">Sentences</option>
        <option value="html">HTML</option>
      </select>
      <button onClick={generateLoremIpsum}>Generate Lorem Ipsum</button>
      <div>
        <h2>Generated Lorem Ipsum:</h2>
        {contentType === 'html' ? (
          <div dangerouslySetInnerHTML={{ __html: generatedText }} />
        ) : (
          <p>{generatedText}</p>
        )}
      </div>
    </div>
  );
};

export default LoremIpsumGenerator;
