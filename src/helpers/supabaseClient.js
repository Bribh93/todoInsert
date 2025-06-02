import { createClient } from '@supabase/supabase-js';

const supabaseUrl= 'https://sctvxrdogqxohjbhwzhm.supabase.co';
const supabaseAnonkey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdHZ4cmRvZ3F4b2hqYmh3emhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MzAzNDgsImV4cCI6MjA2MjQwNjM0OH0.8Zpyp7_VduKBli3zXNVHUIyML9fqS3hI6x_453RXT4I'; ;

// if (!supabaseUrl || !supabaseAnonkey) {
//   throw new Error('Supabase environment variables are missing. Please define SUPABASE_URL and SUPABASE_KEY.');
// }


// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseAnonkey)
export default supabase;