import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
function TextEditor() {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const handleBoldToggle = () => {
    setIsBold(!isBold);
  };

  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };

  const handleClearText = () => {
    setText('');
    setIsBold(false);
    setIsItalic(false);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button 
          onClick={handleBoldToggle} 
          className={`toolbar-btn ${isBold ? 'active' : ''}`}
        >
          Bold
        </button>
        <button 
          onClick={handleItalicToggle} 
          className={`toolbar-btn ${isItalic ? 'active' : ''}`}
        >
          Italic
        </button>
        <button onClick={handleClearText} className="toolbar-btn clear-btn">
          Clear
        </button>
      </div>
      <textarea
        className={`text-area ${isBold ? 'bold' : ''} ${isItalic ? 'italic' : ''}`}
        value={text}
        onChange={handleTextChange}
        placeholder="Start typing here..."
      />
    </div>
  );
}
export default TextEditor;
