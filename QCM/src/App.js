// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import StudentGrade from './Questionnaire';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-grade" element={<StudentGrade />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
