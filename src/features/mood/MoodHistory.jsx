import React from 'react';
import { useSelector } from 'react-redux';

export default function MoodHistory() {
  const entries = useSelector((state) => state.mood.entries);

  return (
    <div className="mood-history" style={{ marginTop: 40, textAlign: 'center' }}>
      <h2 style={{ fontWeight: 700, marginBottom: 15, fontSize: '1.5rem' }}>
        Mood History
      </h2>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            maxWidth: 400,
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          {entries.map((entry, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 10px',
                borderBottom: '1px solid #444',
                fontSize: '1.2rem',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>{entry.mood}</span>
              {/* Intensity number */}
              <span style={{ fontWeight: 'bold', minWidth: 24 }}>{entry.intensity ?? '-'}</span>
              <span
                style={{
                  color: '#999',
                  fontSize: '0.85rem',
                  flexGrow: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                {new Date(entry.date).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
