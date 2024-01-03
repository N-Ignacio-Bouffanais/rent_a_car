## Docker POSTGRES container example

```bash
docker run --name some-postgres -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=dbpostgres -p 5432:5432 -d postgres
```
