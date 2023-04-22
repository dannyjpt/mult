gdjs.ServerQuickStartCode = {};
gdjs.ServerQuickStartCode.GDNewTextEntryObjects1= [];
gdjs.ServerQuickStartCode.GDNewTextEntryObjects2= [];
gdjs.ServerQuickStartCode.GDNewTextObjects1= [];
gdjs.ServerQuickStartCode.GDNewTextObjects2= [];
gdjs.ServerQuickStartCode.GDNewText2Objects1= [];
gdjs.ServerQuickStartCode.GDNewText2Objects2= [];
gdjs.ServerQuickStartCode.GDNewSpriteObjects1= [];
gdjs.ServerQuickStartCode.GDNewSpriteObjects2= [];
gdjs.ServerQuickStartCode.GDNewSprite2Objects1= [];
gdjs.ServerQuickStartCode.GDNewSprite2Objects2= [];
gdjs.ServerQuickStartCode.GDNewTextInputObjects1= [];
gdjs.ServerQuickStartCode.GDNewTextInputObjects2= [];
gdjs.ServerQuickStartCode.GDNewTextInput2Objects1= [];
gdjs.ServerQuickStartCode.GDNewTextInput2Objects2= [];

gdjs.ServerQuickStartCode.conditionTrue_0 = {val:false};
gdjs.ServerQuickStartCode.condition0IsTrue_0 = {val:false};
gdjs.ServerQuickStartCode.condition1IsTrue_0 = {val:false};
gdjs.ServerQuickStartCode.condition2IsTrue_0 = {val:false};
gdjs.ServerQuickStartCode.condition3IsTrue_0 = {val:false};
gdjs.ServerQuickStartCode.conditionTrue_1 = {val:false};
gdjs.ServerQuickStartCode.condition0IsTrue_1 = {val:false};
gdjs.ServerQuickStartCode.condition1IsTrue_1 = {val:false};
gdjs.ServerQuickStartCode.condition2IsTrue_1 = {val:false};
gdjs.ServerQuickStartCode.condition3IsTrue_1 = {val:false};


gdjs.ServerQuickStartCode.mapOfGDgdjs_46ServerQuickStartCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.ServerQuickStartCode.GDNewSpriteObjects1});
gdjs.ServerQuickStartCode.mapOfGDgdjs_46ServerQuickStartCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.ServerQuickStartCode.GDNewSprite2Objects1});
gdjs.ServerQuickStartCode.asyncCallback8439116 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.ServerQuickStartCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ServerQuickStartCode.asyncCallback8439116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ServerQuickStartCode.asyncCallback12219324 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.ServerQuickStartCode.GDNewTextInputObjects2);
{for(var i = 0, len = gdjs.ServerQuickStartCode.GDNewTextInputObjects2.length ;i < len;++i) {
    gdjs.ServerQuickStartCode.GDNewTextInputObjects2[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}}
gdjs.ServerQuickStartCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ServerQuickStartCode.asyncCallback12219324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ServerQuickStartCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ServerQuickStartCode.GDNewSpriteObjects1);

gdjs.ServerQuickStartCode.condition0IsTrue_0.val = false;
gdjs.ServerQuickStartCode.condition1IsTrue_0.val = false;
gdjs.ServerQuickStartCode.condition2IsTrue_0.val = false;
{
gdjs.ServerQuickStartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ServerQuickStartCode.mapOfGDgdjs_46ServerQuickStartCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ServerQuickStartCode.condition0IsTrue_0.val ) {
{
gdjs.ServerQuickStartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ServerQuickStartCode.condition1IsTrue_0.val ) {
{
{gdjs.ServerQuickStartCode.conditionTrue_1 = gdjs.ServerQuickStartCode.condition2IsTrue_0;
gdjs.ServerQuickStartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9436044);
}
}}
}
if (gdjs.ServerQuickStartCode.condition2IsTrue_0.val) {
{gdjs.evtsExt__THNK_P2P__StartServer.func(runtimeScene, "Platformer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ServerQuickStartCode.GDNewSprite2Objects1);

gdjs.ServerQuickStartCode.condition0IsTrue_0.val = false;
gdjs.ServerQuickStartCode.condition1IsTrue_0.val = false;
gdjs.ServerQuickStartCode.condition2IsTrue_0.val = false;
{
gdjs.ServerQuickStartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ServerQuickStartCode.mapOfGDgdjs_46ServerQuickStartCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ServerQuickStartCode.condition0IsTrue_0.val ) {
{
gdjs.ServerQuickStartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ServerQuickStartCode.condition1IsTrue_0.val ) {
{
{gdjs.ServerQuickStartCode.conditionTrue_1 = gdjs.ServerQuickStartCode.condition2IsTrue_0;
gdjs.ServerQuickStartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14422716);
}
}}
}
if (gdjs.ServerQuickStartCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput2"), gdjs.ServerQuickStartCode.GDNewTextInput2Objects1);
{runtimeScene.getVariables().getFromIndex(0).setString((( gdjs.ServerQuickStartCode.GDNewTextInput2Objects1.length === 0 ) ? "" :gdjs.ServerQuickStartCode.GDNewTextInput2Objects1[0].getString()));
}{gdjs.evtTools.p2p.connect(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.ServerQuickStartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ServerQuickStartCode.condition0IsTrue_0.val = false;
{
gdjs.ServerQuickStartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ServerQuickStartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{ //Subevents
gdjs.ServerQuickStartCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.ServerQuickStartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ServerQuickStartCode.GDNewTextEntryObjects1.length = 0;
gdjs.ServerQuickStartCode.GDNewTextEntryObjects2.length = 0;
gdjs.ServerQuickStartCode.GDNewTextObjects1.length = 0;
gdjs.ServerQuickStartCode.GDNewTextObjects2.length = 0;
gdjs.ServerQuickStartCode.GDNewText2Objects1.length = 0;
gdjs.ServerQuickStartCode.GDNewText2Objects2.length = 0;
gdjs.ServerQuickStartCode.GDNewSpriteObjects1.length = 0;
gdjs.ServerQuickStartCode.GDNewSpriteObjects2.length = 0;
gdjs.ServerQuickStartCode.GDNewSprite2Objects1.length = 0;
gdjs.ServerQuickStartCode.GDNewSprite2Objects2.length = 0;
gdjs.ServerQuickStartCode.GDNewTextInputObjects1.length = 0;
gdjs.ServerQuickStartCode.GDNewTextInputObjects2.length = 0;
gdjs.ServerQuickStartCode.GDNewTextInput2Objects1.length = 0;
gdjs.ServerQuickStartCode.GDNewTextInput2Objects2.length = 0;

gdjs.ServerQuickStartCode.eventsList2(runtimeScene);
return;

}

gdjs['ServerQuickStartCode'] = gdjs.ServerQuickStartCode;
