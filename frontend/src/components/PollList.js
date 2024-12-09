import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PollList() {
  const [pollData, setPollData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/polls/')
      .then(response => response.json())
      .then(data => setPollData(data))
      .catch(error => console.error('Error fetching poll data:', error));
  }, []);

  return (
    <div>
      <h1>투표 목록</h1>
      <ul>
        {pollData.map(poll => (
          <li key={poll.id}>
            <Link to={`/polls/${poll.id}`}>{poll.question_text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PollList;
