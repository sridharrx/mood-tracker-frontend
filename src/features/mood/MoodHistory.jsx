import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoodEntry } from './moodSlice';
import { getMoods } from '../../services/api';

export default function MoodHistory() {
  const entries = useSelector((state) => state.mood.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMoods = async () => {
      try {
        const res = await getMoods();
        res.data.forEach((entry) => dispatch(addMoodEntry(entry)));
      } catch (err) {
        console.error('Failed to fetch moods:', err);
      }
    };
    loadMoods();
  }, [dispatch]);

  return (
    <div style={{ marginTop: 40, textAlign: 'center' }}>
      <h2>Mood History</h2>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {entries.map((entry, i) => (
            <li key={i} style={{ margin: '10px 0' }}>
              <span style={{ fontSize: '1.5rem' }}>{entry.mood}</span>{' '}
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                {new Date(entry.date).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
