
if (typeof gdjs.evtsExt__THNK_P2P__ConnectToServer !== "undefined") {
  gdjs.evtsExt__THNK_P2P__ConnectToServer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK_P2P__ConnectToServer = {};

gdjs.evtsExt__THNK_P2P__ConnectToServer.conditionTrue_0 = {val:false};
gdjs.evtsExt__THNK_P2P__ConnectToServer.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__THNK_P2P__ConnectToServer.userFunc0x7e8ad8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
THNK.client.startClient(
    runtimeScene,
    new THNK.P2PClientAdapter(eventsFunctionContext.getArgument("PeerID"))
);

};
gdjs.evtsExt__THNK_P2P__ConnectToServer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK_P2P__ConnectToServer.userFunc0x7e8ad8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK_P2P__ConnectToServer.func = function(runtimeScene, PeerID, parentEventsFunctionContext) {
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
if (argName === "PeerID") return PeerID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK_P2P__ConnectToServer.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__THNK_P2P__ConnectToServer.registeredGdjsCallbacks = [];