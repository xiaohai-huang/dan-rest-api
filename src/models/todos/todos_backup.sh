pg_dump --host db.yvzfbxcohmmrbimeqjgm.supabase.co --port 5432 -U postgres \
        --format plain --verbose -s \
        --table public.todos \
        -f todos_dump.sql \
        postgres
