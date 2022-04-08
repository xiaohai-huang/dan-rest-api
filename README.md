# REST APIs

A collection of REST APIs.

## .env file

`SUPABASE_URL` and `SUPABASE_SECRET_KEY` can be copied from supabase dashboard.

```bash
SUPABASE_URL=
SUPABASE_SECRET_KEY=
PORT=3000 # server's port
```

## Docker

```bash
docker build -t xiaohaihuang/dan-rest-api .
docker push xiaohaihuang/dan-rest-api
docker run --rm -it -p 443:3000 xiaohaihuang/dan-rest-api
```
