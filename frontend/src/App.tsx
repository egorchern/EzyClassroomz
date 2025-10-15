import { useState, useEffect } from 'react'
import './App.css'

interface HealthResponse {
  status: string;
  timestamp: string;
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => {
        setHealth(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch health:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>EzyClassroomz</h1>
      <div className="card">
        <h2>API Status</h2>
        {loading ? (
          <p>Checking API...</p>
        ) : health ? (
          <div>
            <p>Status: {health.status}</p>
            <p>Timestamp: {new Date(health.timestamp).toLocaleString()}</p>
          </div>
        ) : (
          <p>Failed to connect to API</p>
        )}
      </div>
    </div>
  )
}

export default App
