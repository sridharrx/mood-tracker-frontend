import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoodEntry } from './moodSlice.js';

const moods = ['😊', '😐', '😢', '😠', '😴'];

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [intensity, setIntensity] = useState(5); // default intensity
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!selectedMood) return;
    dispatch(
      addMoodEntry({
        mood: selectedMood,
        intensity,
        date: new Date().toISOString(),
      }),
    );
    setSelectedMood(null);
    setIntensity(5); // reset after submit
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>Select your mood:</h2>
      <div>
        {moods.map((m) => (
          <button
            key={m}
            className={`mood-button ${selectedMood === m ? 'selected' : ''}`}
            onClick={() => setSelectedMood(m)}
            aria-label={`Select mood ${m}`}
            style={{ fontSize: 40, margin: 5 }}
          >
            {m}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <label>
          Intensity (1 to 10):{' '}
          <input
            type="number"
            min="1"
            max="10"
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            style={{ width: 60 }}
          />
        </label>
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: 20,
          padding: '10px 20px',
          fontSize: 18,
          cursor: 'pointer',
        }}
      >
        Save Mood
      </button>
    </div>
  );
}
