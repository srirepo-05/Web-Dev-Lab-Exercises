import React, { useState } from 'react';
const App = () => {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Strawberry'];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  const handleSelectItem = (item) => {
    setSearchTerm(item); 
    setFilteredItems([]); 
  };
  return (
    <div style={appStyle}>
      <h2>Search Bar with Dropdown</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={searchBarStyle}
      />
      {filteredItems.length > 0 && (
        <ul style={dropdownStyle}>
          {filteredItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelectItem(item)}
              style={dropdownItemStyle}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const appStyle = {
  textAlign: 'center',
  marginTop: '50px',
};
const searchBarStyle = {
  width: '200px',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};
const dropdownStyle = {
  width: '200px',
  margin: '0 auto',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  listStyle: 'none',
  padding: '0',
};
const dropdownItemStyle = {
  padding: '8px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};
export default App;
