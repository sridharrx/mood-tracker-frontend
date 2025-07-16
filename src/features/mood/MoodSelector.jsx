import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoodEntry } from './moodSlice';
import { postMood } from '../../services/api';

const moods = ['😊', '😐', '😢', '😠', '😴'];

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!selectedMood) return;

    const moodEntry = {
      mood: selectedMood,
      date: new Date().toISOString(),
    };

    dispatch(addMoodEntry(moodEntry)); // update Redux
    try {
      await postMood(moodEntry); // send to backend
    } catch (err) {
      console.error('Failed to save mood:', err);
    }

    setSelectedMood(null);
  };

  return (
    <div>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => setSelectedMood(mood)}
          style={{
            fontSize: 30,
            margin: 10,
            backgroundColor: selectedMood === mood ? '#ccc' : '#fff',
          }}
        >
          {mood}
        </button>
      ))}

      <div>
        <button onClick={handleSubmit} style={{ marginTop: 20 }}>
          Save Mood
        </button>
      </div>
    </div>
  );
}
