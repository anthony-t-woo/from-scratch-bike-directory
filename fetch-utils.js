const SUPABASE_URL = 'https://xymrqgrvifsouxppmhgn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bXJxZ3J2aWZzb3V4cHBtaGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTU0ODMsImV4cCI6MTk4OTgzMTQ4M30.4HEq-XtAOWoYJ8ORsZ4vhxk-S8ri8ZYiulgXBYkUSZY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBikes() {
    let { data, error } = await client.from('bike_collection').select('*, wheel_size (name)');
    return data;
}

export async function getBike(id) {
    let { data, error } = await client
        .from('bike_collection')
        .select('*, wheel_size (name)')
        .eq('id', id)
        .single();
    return data;
}
