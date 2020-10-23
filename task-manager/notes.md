# Docker Commands

Start the MongoDB container and se the local data storage
```bash
docker run --rm -d -v ~/mongodb-data:/data/db -p 27017:27017 --name mongodb mongo
```