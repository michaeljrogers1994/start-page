import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Search Google..."
        value={searchQuery}
        onChange={handleChange}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Search
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '25px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '25px 0 0 25px',
    outline: 'none',
    color: '#333',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#4285F4', // Google blue color
    color: 'white',
    border: 'none',
    borderRadius: '0 25px 25px 0',
    cursor: 'pointer',
    outline: 'none',
  },
};

export default SearchBar;
