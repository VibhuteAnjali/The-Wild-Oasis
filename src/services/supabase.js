import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oszwcbxzighuskyolxlx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zendjYnh6aWdodXNreW9seGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwODM5NzAsImV4cCI6MjAxODY1OTk3MH0.1-7tRfWsOb1ZtTJlHjTs1V8s7k8NmaODPiZt452sgho";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
