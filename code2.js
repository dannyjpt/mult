gdjs.Example_32menu_32_40OUTDATED_41Code = {};
gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects3= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDTitleObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDTitleObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDTitleObjects3= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSingleplayerObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSingleplayerObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSingleplayerObjects3= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects3= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PClientObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PClientObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PClientObjects3= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects3= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects3= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSceneNameObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSceneNameObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSceneNameObjects3= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDExplainObjects1= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDExplainObjects2= [];
gdjs.Example_32menu_32_40OUTDATED_41Code.GDExplainObjects3= [];

gdjs.Example_32menu_32_40OUTDATED_41Code.conditionTrue_0 = {val:false};
gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0 = {val:false};
gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0 = {val:false};
gdjs.Example_32menu_32_40OUTDATED_41Code.condition2IsTrue_0 = {val:false};
gdjs.Example_32menu_32_40OUTDATED_41Code.conditionTrue_1 = {val:false};
gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_1 = {val:false};
gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_1 = {val:false};
gdjs.Example_32menu_32_40OUTDATED_41Code.condition2IsTrue_1 = {val:false};


gdjs.Example_32menu_32_40OUTDATED_41Code.mapOfGDgdjs_46Example_9532menu_9532_9540OUTDATED_9541Code_46GDSingleplayerObjects2Objects = Hashtable.newFrom({"Singleplayer": gdjs.Example_32menu_32_40OUTDATED_41Code.GDSingleplayerObjects2});
gdjs.Example_32menu_32_40OUTDATED_41Code.mapOfGDgdjs_46Example_9532menu_9532_9540OUTDATED_9541Code_46GDP2PHostObjects1Objects = Hashtable.newFrom({"P2PHost": gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1});
gdjs.Example_32menu_32_40OUTDATED_41Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Singleplayer"), gdjs.Example_32menu_32_40OUTDATED_41Code.GDSingleplayerObjects2);

gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val = false;
{
gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Example_32menu_32_40OUTDATED_41Code.mapOfGDgdjs_46Example_9532menu_9532_9540OUTDATED_9541Code_46GDSingleplayerObjects2Objects, runtimeScene, false, false);
}if (gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "My Game", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("P2PHost"), gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1);

gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val = false;
gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0.val = false;
{
gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val = !(gdjs.evtsExt__THNK__ConnectingToServer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if ( gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val ) {
{
gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Example_32menu_32_40OUTDATED_41Code.mapOfGDgdjs_46Example_9532menu_9532_9540OUTDATED_9541Code_46GDP2PHostObjects1Objects, runtimeScene, false, false);
}}
if (gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ConnectionInProgress"), gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects1);
/* Reuse gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1 */
{/* Unknown instruction - skipped. */}{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1[i].setColor("155;155;155");
}
}{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects1[i].hide(false);
}
}}

}


};gdjs.Example_32menu_32_40OUTDATED_41Code.eventsList1 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("PurpleSpace"), gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1);
{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1[i].setXOffset(gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1[i].getXOffset() + (-(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)) * 3.5));
}
}{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1[i].setYOffset(gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1[i].getYOffset() + (-(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)) * 2.5));
}
}}

}


{


gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val = false;
gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0.val = false;
{
gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val ) {
{
{gdjs.Example_32menu_32_40OUTDATED_41Code.conditionTrue_1 = gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0;
gdjs.Example_32menu_32_40OUTDATED_41Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9334636);
}
}}
if (gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Example_32menu_32_40OUTDATED_41Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val = false;
gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0.val = false;
{
gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val = gdjs.evtsExt__THNK__ConnectionFailed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.Example_32menu_32_40OUTDATED_41Code.condition0IsTrue_0.val ) {
{
{gdjs.Example_32menu_32_40OUTDATED_41Code.conditionTrue_1 = gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0;
gdjs.Example_32menu_32_40OUTDATED_41Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9338796);
}
}}
if (gdjs.Example_32menu_32_40OUTDATED_41Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ConnectionError"), gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects1);
gdjs.copyArray(runtimeScene.getObjects("ConnectionInProgress"), gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects1);
gdjs.copyArray(runtimeScene.getObjects("P2PHost"), gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1);
{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1[i].setColor("74;144;226");
}
}{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects1.length ;i < len;++i) {
    gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects1[i].setString("An error has occured while connecting to the server: " + gdjs.evtsExt__THNK__ServerConnectionError.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.Example_32menu_32_40OUTDATED_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDPurpleSpaceObjects3.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDTitleObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDTitleObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDTitleObjects3.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSingleplayerObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSingleplayerObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSingleplayerObjects3.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PHostObjects3.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PClientObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PClientObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDP2PClientObjects3.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionInProgressObjects3.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDConnectionErrorObjects3.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSceneNameObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSceneNameObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDSceneNameObjects3.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDExplainObjects1.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDExplainObjects2.length = 0;
gdjs.Example_32menu_32_40OUTDATED_41Code.GDExplainObjects3.length = 0;

gdjs.Example_32menu_32_40OUTDATED_41Code.eventsList1(runtimeScene);
return;

}

gdjs['Example_32menu_32_40OUTDATED_41Code'] = gdjs.Example_32menu_32_40OUTDATED_41Code;
