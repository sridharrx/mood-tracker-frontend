import Counter from './features/counter/Counter.jsx';
import MoodSelector from './features/mood/MoodSelector.jsx';
import MoodHistory from './features/mood/MoodHistory.jsx';

function App() {
  return (
    <div>
      <MoodSelector />
      <MoodHistory />
    </div>
  );
}

export default App;
