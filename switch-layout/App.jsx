import React, { useState } from 'react';
const LayoutOne = () => (
  <div style={layoutOneStyle}>
    <div style={boxStyle}>Box 1</div>
    <div style={boxStyle}>Box 2</div>
    <div style={boxStyle}>Box 3</div>
    <div style={boxStyle}>Box 4</div>
  </div>
);
const LayoutTwo = () => (
  <div style={layoutTwoStyle}>
    <div style={boxStyle}>Box 1</div>
    <div style={boxStyle}>Box 2</div>
    <div style={boxStyle}>Box 3</div>
    <div style={boxStyle}>Box 4</div>
  </div>
);
const App = () => {
  // State for managing the active layout
  const [activeLayout, setActiveLayout] = useState('layoutOne');
  return (
    <div style={appStyle}>
      <h2>Switch Layouts</h2>
      {/* Buttons for switching layouts */}
      <button onClick={() => setActiveLayout('layoutOne')}>Show Layout One</button>
      <button onClick={() => setActiveLayout('layoutTwo')}>Show Layout Two</button>
      {activeLayout === 'layoutOne' ? <LayoutOne /> : <LayoutTwo />}
    </div>
  );
};
const appStyle = {
  textAlign: 'center',
  marginTop: '50px',
};
const layoutOneStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
};
const layoutTwoStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  height: '100px',
  alignItems: 'center',
};

// Style for individual boxes
const boxStyle = {
  width: '100px',
  height: '100px',
  border: 'node',
  margin: '10px',
  backgroundColor: '#ADD8E6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export default App;
