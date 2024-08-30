import { createClient } from '@supabase/supabase-js'
/* Creating a signle supabase client dor interactions with database */
/* const supabase = createClient(meta.import.VITE_SUPABASE_URL,meta.import.VITE_SUPABASE_KEY) */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ;
const  supabaseKey = import.meta.env.VITE_SUPARBASE_KEY ; 

const supabase = createClient(supabaseUrl,supabaseKey)

export default supabase 