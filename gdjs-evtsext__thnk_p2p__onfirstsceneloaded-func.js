
if (typeof gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded = {};

gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.userFunc0x7e8530 = function(runtimeScene, eventsFunctionContext) {
"use strict";
"use strict";
(() => {
  // code/adapters/p2p.ts
  var logger = new gdjs.Logger("THNK - P2P Adapter");
  var THNK;
  ((THNK2) => {
    class P2PClientAdapter extends THNK2.ClientAdapter {
      constructor(peerID) {
        super();
        this.connection = null;
        this.peerID = peerID;
      }
      async prepare() {
        this.connection = gdjs.evtTools.p2p.getConnectionInstance(this.peerID);
        if (!this.connection) {
          gdjs.evtTools.p2p.connect(this.peerID);
          this.connection = await new Promise((resolve) => {
            const iID = setInterval(() => {
              const connection = gdjs.evtTools.p2p.getConnectionInstance(this.peerID);
              if (connection) {
                clearInterval(iID);
                resolve(connection);
              }
            }, 200);
          });
        }
        this.connection.on("data", (data) => this.onMessage(new Uint8Array(data)));
      }
      close() {
      }
      doSendMessage(message) {
        if (!this.connection) {
          return logger.error("Tried to send a message on an unestablished connection!");
        }
        this.connection.send(message.buffer.slice(message.buffer.byteLength - message.byteLength));
      }
    }
    THNK2.P2PClientAdapter = P2PClientAdapter;
    class P2PServerAdapter extends THNK2.ServerAdapter {
      constructor() {
        super(...arguments);
        this.boundPreEventsCallback = () => this.preEventsCallback();
      }
      preEventsCallback() {
        if (gdjs.evtTools.p2p.onConnection()) {
          const connectedPeer = gdjs.evtTools.p2p.getConnectedPeer();
          this.onConnection(connectedPeer);
          const connectionInstance = gdjs.evtTools.p2p.getConnectionInstance(connectedPeer);
          connectionInstance.on("data", (data) => {
            this.onMessage(connectedPeer, new Uint8Array(data));
          });
        }
        if (gdjs.evtTools.p2p.onDisconnect()) {
          const disconnectedPeer = gdjs.evtTools.p2p.getDisconnectedPeer();
          this.onDisconnection(disconnectedPeer);
        }
      }
      async prepare() {
        gdjs.registerRuntimeScenePreEventsCallback(this.boundPreEventsCallback);
      }
      close() {
        gdjs._unregisterCallback(this.boundPreEventsCallback);
      }
      doSendMessageTo(userID, message) {
        const connection = gdjs.evtTools.p2p.getConnectionInstance(userID);
        if (connection) {
          connection.send(message.buffer.slice(message.buffer.byteLength - message.byteLength));
        }
      }
      getServerID() {
        return gdjs.evtTools.p2p.getCurrentId();
      }
    }
    THNK2.P2PServerAdapter = P2PServerAdapter;
  })(globalThis.THNK || (globalThis.THNK = {}));
})();

};
gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.userFunc0x7e8530(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__THNK_P2P__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
