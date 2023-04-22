gdjs.The_32basicsCode = {};
gdjs.The_32basicsCode.GDCheckEventsObjects1= [];
gdjs.The_32basicsCode.GDCheckEventsObjects2= [];

gdjs.The_32basicsCode.conditionTrue_0 = {val:false};
gdjs.The_32basicsCode.condition0IsTrue_0 = {val:false};
gdjs.The_32basicsCode.condition1IsTrue_0 = {val:false};


gdjs.The_32basicsCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.The_32basicsCode.condition0IsTrue_0.val = false;
{
gdjs.The_32basicsCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__StartClientCode.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.The_32basicsCode.condition0IsTrue_0.val) {
}

}


};gdjs.The_32basicsCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.The_32basicsCode.condition0IsTrue_0.val = false;
{
gdjs.The_32basicsCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__StartServerCode.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.The_32basicsCode.condition0IsTrue_0.val) {
}

}


};gdjs.The_32basicsCode.eventsList2 = function(runtimeScene) {

{



}


};gdjs.The_32basicsCode.eventsList3 = function(runtimeScene) {

{



}


};gdjs.The_32basicsCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.The_32basicsCode.eventsList0(runtimeScene);
}


{


gdjs.The_32basicsCode.eventsList1(runtimeScene);
}


{


gdjs.The_32basicsCode.eventsList2(runtimeScene);
}


{


gdjs.The_32basicsCode.eventsList3(runtimeScene);
}


};

gdjs.The_32basicsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.The_32basicsCode.GDCheckEventsObjects1.length = 0;
gdjs.The_32basicsCode.GDCheckEventsObjects2.length = 0;

gdjs.The_32basicsCode.eventsList4(runtimeScene);
return;

}

gdjs['The_32basicsCode'] = gdjs.The_32basicsCode;
