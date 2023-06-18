import { Injectable } from '@angular/core';
import { MongoClient } from 'mongodb';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  url = 'mongodb://localhost:27017';
  dbName = 'MedlyPharma';
  collectionName = 'login';

  constructor() {}

  async connect() {
    const client = await MongoClient.connect(this.url);
    const db = client.db(this.dbName);
    const collection = db.collection(this.collectionName);
    return collection;
  }
}
