
if (typeof gdjs.evtsExt__THNK__CurrentPlayer !== "undefined") {
  gdjs.evtsExt__THNK__CurrentPlayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK__CurrentPlayer = {};

gdjs.evtsExt__THNK__CurrentPlayer.conditionTrue_0 = {val:false};
gdjs.evtsExt__THNK__CurrentPlayer.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__THNK__CurrentPlayer.userFunc0xd60200 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = THNK.players.getCurrentPlayerID();

};
gdjs.evtsExt__THNK__CurrentPlayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK__CurrentPlayer.userFunc0xd60200(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK__CurrentPlayer.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__THNK__CurrentPlayer.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__THNK__CurrentPlayer.registeredGdjsCallbacks = [];