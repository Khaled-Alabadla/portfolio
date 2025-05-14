import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oekpqdetbpodxlrjuqku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9la3BxZGV0YnBvZHhscmp1cWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNTA1MjEsImV4cCI6MjA2MjgyNjUyMX0.83-esWUvkplPLmE6zBmgQE4r-cqJo9S8b3ESg6aq4oA";

export const supabase = createClient(supabaseUrl, supabaseKey);
