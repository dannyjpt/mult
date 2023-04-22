
gdjs.evtsExt__THNK__SynchronizedObject = gdjs.evtsExt__THNK__SynchronizedObject || {};

/**
 * Behavior generated from Synchronize object
 */
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject = class SynchronizedObject extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext = {};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.GDObjectObjects1= [];

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.userFunc0xd84218 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (runtimeScene.thnkServer)
    runtimeScene.thnkServer.objectsRegistery.registerObject(objects[0]);

};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.userFunc0xd84218(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext = {};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.GDObjectObjects1= [];

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.userFunc0xde2530 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (runtimeScene.thnkServer)
    runtimeScene.thnkServer.objectsRegistery.unregisterObject(objects[0]);

};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.userFunc0xde2530(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("THNK::SynchronizedObject", gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject);
