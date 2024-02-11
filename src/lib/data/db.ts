import Dexie, { type Table } from 'dexie';

export interface Lock {
  id?: number;
  lock: number[];
  note: string;
  createdAt: Date;
}

export class LockDatabase extends Dexie {
  locks!: Table<Lock>; 

  constructor() {
    super('locks');
    this.version(1).stores({
      locks: '++id, lock, note, createdAt'
    });
  }
}

export const db = new LockDatabase();

