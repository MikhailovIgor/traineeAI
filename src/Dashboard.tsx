import React, { useState, useEffect } from 'react';
// @ts-ignore
const worker = new Worker(new URL('./heavyWorker.js', import.meta.url));

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    worker.onmessage = (e) => setD(e.data);
    worker.postMessage('start');
    return () => worker.terminate();
  }, []);

  return <div>{d}</div>;
}
