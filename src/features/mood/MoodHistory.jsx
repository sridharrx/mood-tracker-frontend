import React, { useEffect, useState } from 'react';
import { getMoods } from '../../services/api';

export default function MoodHistory() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getMoods().then((res) => setEntries(res.data)).catch(console.error);
  }, []);

  return (
    <div className="mood-history" style={{ marginTop: 40, textAlign: 'center' }}>
      {/* ... same UI structure ... */}
    </div>
  );
}
