import React, { useState } from 'react';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
    const result = Array.from(document.querySelectorAll('p, h1')).find((node) =>
      node.textContent.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (result) {
      // Scroll to the result if needed
      result.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Termenul căutat nu a fost găsit.');
    }
    setSearchTerm('');
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      </form>
      <SearchableContent searchTerm={searchTerm} />
    </div>
  );
}
function SearchableContent({ searchTerm }) {
  const searchRegEx = new RegExp(`(${searchTerm})`, 'gi');
  const content = "";
  const highlightedContent = content.replace(searchRegEx, '<mark>$1</mark>');
  return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
}
export default App;
