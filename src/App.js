import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);

   // Fetch the current user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/auth/current_user', { withCredentials: true });
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 dark:bg-primary-dark">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={user ? <FeedbackForm /> : <Login />} />
          <Route path="/feedback-list" element={user ? <FeedbackList /> : <Login />} />
          <Route path="/" element={user ? <FeedbackForm /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
