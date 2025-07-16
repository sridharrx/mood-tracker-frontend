export default function MoodHistory() {
  console.log('MoodHistory rendered');

  return (
    <div style={{ marginTop: 40, textAlign: 'center', color: 'black' }}>
      <h2>Mood History</h2>
      <ul>
        <li>😊 - 7/10 - 2025-07-16</li>
        <li>😐 - 5/10 - 2025-07-15</li>
      </ul>
    </div>
  );
}
