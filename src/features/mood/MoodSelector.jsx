import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoodEntry } from './moodSlice.js';
import { postMood } from '../../services/api';

const moods = ['😊', '😐', '😢', '😠', '😴'];

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [intensity, setIntensity] = useState(5);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!selectedMood) return;

    const moodEntry = {
      mood: selectedMood,
      intensity,
      date: new Date().toISOString(),
    };

    dispatch(addMoodEntry(moodEntry)); // local Redux state

    try {
      await postMood(moodEntry); // backend save
    } catch (err) {
      console.error('Failed to save to backend:', err);
    }

    setSelectedMood(null);
    setIntensity(5);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      {/* ... existing JSX stays same ... */}
    </div>
  );
}
