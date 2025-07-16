import MoodSelector from './features/mood/MoodSelector';
import MoodHistory from './features/mood/MoodHistory';

export default function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Mood Tracker</h2>
      <MoodSelector />
      <MoodHistory />
    </div>
  );
}
