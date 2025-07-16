import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice.js';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <h2>Feeling intensity</h2>
      <p style={{ fontSize: '2rem' }}>{count}</p>
      <button onClick={() => dispatch(decrement())} style={{ marginRight: 10, fontSize: 20 }}>
        Decrease
      </button>
      <button onClick={() => dispatch(increment())} style={{ fontSize: 20 }}>
        Increase
      </button>
    </div>
  );
}
