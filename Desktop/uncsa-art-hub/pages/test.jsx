import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function TestPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase.from('tasks').select();
      if (error) {
        setError(error.message);
      } else {
        setTasks(data);
      }
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
