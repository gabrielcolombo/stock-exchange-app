const stores = ['negotiations'];
let connection = null;
let close = null;

export class ConnectionFactory {
  constructor() {
    throw new Error('This class should not be instantiated.');
  }

  static getConnection() {
    return new Promise((resolve, reject) => {
      if(connection) {
        return resolve(connection);
      }
      
      const openRequest = indexedDB.open('jscangaceiro', 2);

      openRequest.onupgradeneeded = event => {
        ConnectionFactory._createStores(event.target.result);
      }
  
      openRequest.onsuccess = event => {
        connection = event.target.result;
        close = connection.close.bind(connection);

        connection.close = () => {
          throw new Error('A connection should not be closed directly. Use ConnectionFactory.closeConnection() instead.');
        }

        resolve(event.target.result);
      }
  
      openRequest.onerror = event => {
        reject(event.target.error.name);
      }
    });
  }

  static _createStores(connection) {
    stores.forEach((store) => {
      if(connection.objectStoreNames.contains(store)) {
        connection.deleteObjectStore(store);
      }

      connection.createObjectStore(store, {
        autoIncrement: true,
      });
    });
  }

  closeConnection() {
    if(connection) {
      close();
    }
  }
}