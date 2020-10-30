<h1 align="center"> Mongodb Change Streams </h1>

<p>

<img src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png">

</p>

## Table of contents

-   [Description](#Description)
-   [Prerequisites](#Prerequisites)
-   [Usage](#Usage)
-   [Resources](#Resources)

## Description

Change Streams give the ability to applications monitor data-changes and react to this changes on a single collection, a database or an entire deployment.

## Prerequisites

If you want to run the code in this repository you will need to spin up `fastify server` that produces new data changes in mongodb, a listener service that listen to data changes and of course you' ll need a mongodb in [replica set or shared clusters](https://docs.mongodb.com/manual/changeStreams/#availability).

I have provide a `docker-compose.yml` file in order to run locally mongodb in replica set. [For information on how to set it](https://gist.github.com/asoorm/7822cc742831639c93affd734e97ce4f).

## Usage

-   Install dependencies by running `npm i`.
-   Start ***fastify-server*** with `npm run start:server`
-   Start on another cmd the ***listener*** with `npm run start:listener`

I have provided a postman collection that you can use to do requests to 
***fastify-server*** or you can just use `curl` command.

```bash
# Insert Event
curl -X POST -H "Content-Type: application/json" \
    -d '{"message": "Hello World"}' \
    http://localhost:5000/notification

# Update Event 
curl -X PUT -H "Content-Type: application/json" \
    -d '{"message": "test"}' \
    http://localhost:5000/notification/<id>

# Delete Event
curl -X DELETE \
    http://localhost:5000/notification/<id>
```

## Resources

For more information you can start 
- [From official docs about changeStreams](https://docs.mongodb.com/manual/changeStreams/)
- [An introduction to change streams](https://www.mongodb.com/blog/post/an-introduction-to-change-streams)
-  [Change Events](https://docs.mongodb.com/manual/reference/change-events)

<p align="center">
✌️ <a href="https://github.com/gkampitakis/mongodb-change-streams/issues/new">For any questions or issues</a> ✌️
</p>
