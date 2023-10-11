import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';
import List from './List';

function App() {
  const [data, setData] = useState([]);

  const handleFormSubmit = (formData) => {
    setData([...data, formData]);
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form onSubmit={handleFormSubmit} />} />
        <Route
          path="/list"
          element={<List data={data} onDelete={handleDelete} />}
        />
      </Routes>
    </Router>
  );
}

export default App;





