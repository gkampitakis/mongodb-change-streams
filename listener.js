'use strict';

const { MongoClient } = require('mongodb');

async function main () {
  const url = 'mongodb://localhost:27011,localhost:27012,localhost:27013/?replicaSet=rs0';
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db('change-streams');
    const changeStream = db.collection('notifications').watch();

    while (await changeStream.hasNext()) {
      const event = await changeStream.next();

      console.log(event);
    }
  } finally {
    await client.close();
  }
}

main().catch(console.error);
