### Wait while dependency is available on node:alpine

Example usage of waiting one microservice by another using [wait for it](https://github.com/eficode/wait-for) script. In current implementation used js script without any dependencies.

#### Command example
```bash
wait -t 20 -h foo:3000 -t 30 db:5432 -t 20 queue:5672 -- npm start
```

#### Start

```bash
docker-compose up
```