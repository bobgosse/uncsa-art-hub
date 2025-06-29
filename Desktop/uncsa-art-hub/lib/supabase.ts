import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tdpdroanfurrxsygzuxd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkcGRyb2FuZnVycnhzeWd6dXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMTE0MzIsImV4cCI6MjA2Njc4NzQzMn0.7UY8POD03DIVymFyKurAxpYYpJmv6vspKCnjSi1f4wg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
