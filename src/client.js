import { createClient } from "@supabase/supabase-js";

const URL = "https://dfpajkmfljzallnpkcrp.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcGFqa21mbGp6YWxsbnBrY3JwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTE0MzcxMSwiZXhwIjoyMDA0NzE5NzExfQ.rl3yDk5LpX5bf_VeMwjPnv8bWFSJkb3_KUhchNiPudg";

export const supabase = createClient(URL, API_KEY);
