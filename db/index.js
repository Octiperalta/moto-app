import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("user.db");

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // tx.executeSql(`DROP TABLE IF EXISTS orders`, [], () => resolve(), (_, err) => reject(err));
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS orders (
          id INTEGER PRIMARY KEY NOT NULL, 
          trackingCode TEXT NOT NULL,
          userID INTEGER NOT NULL, 
          totalPrice REAL NOT NULL,
          latitude REAL NOT NULL, 
          longitude REAL NOT NULL, 
          address TEXT NOT NULL
        )`,
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
};

export const createOrder = (
  total,
  userId,
  trackingCode,
  coordinates,
  address
) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO orders (userID, trackingCode, totalPrice, latitude, longitude, address) VALUES (?, ?, ?, ?, ?, ?)`,
        [userId, trackingCode, total, coordinates.lat, coordinates.lon, address],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });
};

export const getOrdersByUserId = id => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM orders WHERE userID = ?`,
        [id],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};
