gdjs.ClientQuickStartCode = {};
gdjs.ClientQuickStartCode.GDNewTextInputObjects1= [];
gdjs.ClientQuickStartCode.GDNewTextInputObjects2= [];
gdjs.ClientQuickStartCode.GDNewTextInputObjects3= [];
gdjs.ClientQuickStartCode.GDNewSpriteObjects1= [];
gdjs.ClientQuickStartCode.GDNewSpriteObjects2= [];
gdjs.ClientQuickStartCode.GDNewSpriteObjects3= [];

gdjs.ClientQuickStartCode.conditionTrue_0 = {val:false};
gdjs.ClientQuickStartCode.condition0IsTrue_0 = {val:false};
gdjs.ClientQuickStartCode.condition1IsTrue_0 = {val:false};
gdjs.ClientQuickStartCode.condition2IsTrue_0 = {val:false};
gdjs.ClientQuickStartCode.condition3IsTrue_0 = {val:false};
gdjs.ClientQuickStartCode.conditionTrue_1 = {val:false};
gdjs.ClientQuickStartCode.condition0IsTrue_1 = {val:false};
gdjs.ClientQuickStartCode.condition1IsTrue_1 = {val:false};
gdjs.ClientQuickStartCode.condition2IsTrue_1 = {val:false};
gdjs.ClientQuickStartCode.condition3IsTrue_1 = {val:false};


gdjs.ClientQuickStartCode.mapOfGDgdjs_46ClientQuickStartCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.ClientQuickStartCode.GDNewSpriteObjects1});
gdjs.ClientQuickStartCode.asyncCallback8187572 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.ClientQuickStartCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ClientQuickStartCode.asyncCallback8187572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ClientQuickStartCode.asyncCallback8633732 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.ClientQuickStartCode.GDNewTextInputObjects2);
{runtimeScene.getVariables().getFromIndex(0).setString((( gdjs.ClientQuickStartCode.GDNewTextInputObjects2.length === 0 ) ? "" :gdjs.ClientQuickStartCode.GDNewTextInputObjects2[0].getString()));
}{gdjs.evtTools.p2p.connect(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.ClientQuickStartCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.ClientQuickStartCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ClientQuickStartCode.asyncCallback8633732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ClientQuickStartCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.ClientQuickStartCode.condition0IsTrue_0.val = false;
{
gdjs.ClientQuickStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ClientQuickStartCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ClientQuickStartCode.GDNewSpriteObjects1);

gdjs.ClientQuickStartCode.condition0IsTrue_0.val = false;
gdjs.ClientQuickStartCode.condition1IsTrue_0.val = false;
gdjs.ClientQuickStartCode.condition2IsTrue_0.val = false;
{
gdjs.ClientQuickStartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClientQuickStartCode.mapOfGDgdjs_46ClientQuickStartCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ClientQuickStartCode.condition0IsTrue_0.val ) {
{
gdjs.ClientQuickStartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ClientQuickStartCode.condition1IsTrue_0.val ) {
{
{gdjs.ClientQuickStartCode.conditionTrue_1 = gdjs.ClientQuickStartCode.condition2IsTrue_0;
gdjs.ClientQuickStartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14373204);
}
}}
}
if (gdjs.ClientQuickStartCode.condition2IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{ //Subevents
gdjs.ClientQuickStartCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.ClientQuickStartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClientQuickStartCode.GDNewTextInputObjects1.length = 0;
gdjs.ClientQuickStartCode.GDNewTextInputObjects2.length = 0;
gdjs.ClientQuickStartCode.GDNewTextInputObjects3.length = 0;
gdjs.ClientQuickStartCode.GDNewSpriteObjects1.length = 0;
gdjs.ClientQuickStartCode.GDNewSpriteObjects2.length = 0;
gdjs.ClientQuickStartCode.GDNewSpriteObjects3.length = 0;

gdjs.ClientQuickStartCode.eventsList2(runtimeScene);
return;

}

gdjs['ClientQuickStartCode'] = gdjs.ClientQuickStartCode;
