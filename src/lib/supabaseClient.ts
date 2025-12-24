import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ifwzhiomhhakupizbaxk.supabase.co";
const supabaseKey =
  "sb_publishable_xfG4423RKeCmsqLUfrptTA_P9RIi5ty";

export const supabase = createClient(supabaseUrl, supabaseKey);
