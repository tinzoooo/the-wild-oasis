import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ffhgcytidqldvfkbrxcr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmaGdjeXRpZHFsZHZma2JyeGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4Nzg2OTcsImV4cCI6MjAwODQ1NDY5N30.Sf7wwFZf5X6LInmD4sv16VJ4mAbDwiQifNAugJ4836s";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
