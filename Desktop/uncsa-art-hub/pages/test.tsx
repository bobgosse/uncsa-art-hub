// pages/test.tsx

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function TestPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('todos').select('*');
      if (error) {
        setError(error.message);
      } else {
        setTasks(data);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Supabase Test Page</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} - <strong>{task.status}</strong>
          </li>
        ))}
      </ul>
    </main>
  );
}
