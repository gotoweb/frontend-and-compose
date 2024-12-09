import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PollDetail() {
  const { id } = useParams();
  const [pollDetailData, setPollDetailData] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/polls/${id}`)
      .then(response => response.json())
      .then(data => setPollDetailData(data))
      .catch(error => console.error('Error fetching poll data:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected choice: ${selectedChoice}`);
    // 여기에 제출 로직 추가
  };

  if (!pollDetailData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pollDetailData.question_text}</h1>
      <form onSubmit={handleSubmit}>
        {pollDetailData.polls_choice.map(choice => (
          <div key={choice.id}>
            <label>
              <input
                type="radio"
                name="choice"
                value={choice.id}
                checked={selectedChoice === choice.id}
                onChange={() => setSelectedChoice(choice.id)}
              />
              {choice.choice_text}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PollDetail;
