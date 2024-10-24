import React, { useState } from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const App = () => {
  const [username, setUsername] = useState(null);

  const handleLogin = (name) => {
    setUsername(name);
  };

  return (
    <div className="App">
      {!username ? <Login onLogin={handleLogin} /> : <Dashboard username={username} />}
    </div>
  );
};

export default App;
