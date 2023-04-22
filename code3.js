gdjs.PlatformerCode = {};
gdjs.PlatformerCode.stopDoWhile3 = false;

gdjs.PlatformerCode.stopDoWhile4 = false;

gdjs.PlatformerCode.GDSummerBackgroundObjects1= [];
gdjs.PlatformerCode.GDSummerBackgroundObjects2= [];
gdjs.PlatformerCode.GDSummerBackgroundObjects3= [];
gdjs.PlatformerCode.GDSummerBackgroundObjects4= [];
gdjs.PlatformerCode.GDSpwnPosObjects1= [];
gdjs.PlatformerCode.GDSpwnPosObjects2= [];
gdjs.PlatformerCode.GDSpwnPosObjects3= [];
gdjs.PlatformerCode.GDSpwnPosObjects4= [];
gdjs.PlatformerCode.GDDeathZoneObjects1= [];
gdjs.PlatformerCode.GDDeathZoneObjects2= [];
gdjs.PlatformerCode.GDDeathZoneObjects3= [];
gdjs.PlatformerCode.GDDeathZoneObjects4= [];
gdjs.PlatformerCode.GDRedHeroObjects1= [];
gdjs.PlatformerCode.GDRedHeroObjects2= [];
gdjs.PlatformerCode.GDRedHeroObjects3= [];
gdjs.PlatformerCode.GDRedHeroObjects4= [];
gdjs.PlatformerCode.GDRedSwitchObjects1= [];
gdjs.PlatformerCode.GDRedSwitchObjects2= [];
gdjs.PlatformerCode.GDRedSwitchObjects3= [];
gdjs.PlatformerCode.GDRedSwitchObjects4= [];
gdjs.PlatformerCode.GDSummerTilePlatformCenterObjects1= [];
gdjs.PlatformerCode.GDSummerTilePlatformCenterObjects2= [];
gdjs.PlatformerCode.GDSummerTilePlatformCenterObjects3= [];
gdjs.PlatformerCode.GDSummerTilePlatformCenterObjects4= [];
gdjs.PlatformerCode.GDSummerTilePlatformRightObjects1= [];
gdjs.PlatformerCode.GDSummerTilePlatformRightObjects2= [];
gdjs.PlatformerCode.GDSummerTilePlatformRightObjects3= [];
gdjs.PlatformerCode.GDSummerTilePlatformRightObjects4= [];
gdjs.PlatformerCode.GDSummerTilePlatformLeftObjects1= [];
gdjs.PlatformerCode.GDSummerTilePlatformLeftObjects2= [];
gdjs.PlatformerCode.GDSummerTilePlatformLeftObjects3= [];
gdjs.PlatformerCode.GDSummerTilePlatformLeftObjects4= [];
gdjs.PlatformerCode.GDPlatformObjects1= [];
gdjs.PlatformerCode.GDPlatformObjects2= [];
gdjs.PlatformerCode.GDPlatformObjects3= [];
gdjs.PlatformerCode.GDPlatformObjects4= [];
gdjs.PlatformerCode.GDNewTextObjects1= [];
gdjs.PlatformerCode.GDNewTextObjects2= [];
gdjs.PlatformerCode.GDNewTextObjects3= [];
gdjs.PlatformerCode.GDNewTextObjects4= [];
gdjs.PlatformerCode.GDFPSObjects1= [];
gdjs.PlatformerCode.GDFPSObjects2= [];
gdjs.PlatformerCode.GDFPSObjects3= [];
gdjs.PlatformerCode.GDFPSObjects4= [];

gdjs.PlatformerCode.conditionTrue_0 = {val:false};
gdjs.PlatformerCode.condition0IsTrue_0 = {val:false};
gdjs.PlatformerCode.condition1IsTrue_0 = {val:false};
gdjs.PlatformerCode.condition2IsTrue_0 = {val:false};


gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDNewTextObjects2Objects = Hashtable.newFrom({"NewText": gdjs.PlatformerCode.GDNewTextObjects2});
gdjs.PlatformerCode.eventsList0 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 4, 4, "Background", 0, -(1), 0, 0, 1.3, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.PlatformerCode.GDNewTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("RedHero"), gdjs.PlatformerCode.GDRedHeroObjects3);
gdjs.copyArray(runtimeScene.getObjects("SummerBackground"), gdjs.PlatformerCode.GDSummerBackgroundObjects3);
{for(var i = 0, len = gdjs.PlatformerCode.GDSummerBackgroundObjects3.length ;i < len;++i) {
    gdjs.PlatformerCode.GDSummerBackgroundObjects3[i].setX(gdjs.evtTools.common.lerp((gdjs.PlatformerCode.GDSummerBackgroundObjects3[i].getPointX("")), (( gdjs.PlatformerCode.GDRedHeroObjects3.length === 0 ) ? 0 :gdjs.PlatformerCode.GDRedHeroObjects3[0].getPointX("")) / 50 - 25, 0.08));
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDNewTextObjects3.length ;i < len;++i) {
    gdjs.PlatformerCode.GDNewTextObjects3[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("State").getChild("MyNum")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.PlatformerCode.GDNewTextObjects2);

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
gdjs.PlatformerCode.condition1IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__IsServer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.PlatformerCode.condition0IsTrue_0.val ) {
{
gdjs.PlatformerCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDNewTextObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.PlatformerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDNewTextObjects2 */
{for(var i = 0, len = gdjs.PlatformerCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDNewTextObjects2[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.p2p.getCurrentId(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.PlatformerCode.eventsList1 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "RightInput", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "LeftInput", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "Jump", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.PlatformerCode.eventsList2 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.PlatformerCode.GDDeathZoneObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpwnPos"), gdjs.PlatformerCode.GDSpwnPosObjects2);
{for(var i = 0, len = gdjs.PlatformerCode.GDDeathZoneObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDDeathZoneObjects2[i].hide();
}
for(var i = 0, len = gdjs.PlatformerCode.GDSpwnPosObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDSpwnPosObjects2[i].hide();
}
}}

}


{


gdjs.PlatformerCode.eventsList0(runtimeScene);
}


{


gdjs.PlatformerCode.eventsList1(runtimeScene);
}


};gdjs.PlatformerCode.eventsList3 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__StartClientCode.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDRedHeroObjects3Objects = Hashtable.newFrom({"RedHero": gdjs.PlatformerCode.GDRedHeroObjects3});
gdjs.PlatformerCode.eventsList4 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnClientConnect.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SpwnPos"), gdjs.PlatformerCode.GDSpwnPosObjects3);
gdjs.PlatformerCode.GDRedHeroObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDRedHeroObjects3Objects, (( gdjs.PlatformerCode.GDSpwnPosObjects3.length === 0 ) ? 0 :gdjs.PlatformerCode.GDSpwnPosObjects3[0].getPointX("")), (( gdjs.PlatformerCode.GDSpwnPosObjects3.length === 0 ) ? 0 :gdjs.PlatformerCode.GDSpwnPosObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlatformerCode.GDRedHeroObjects3.length ;i < len;++i) {
    gdjs.PlatformerCode.GDRedHeroObjects3[i].setScale(gdjs.PlatformerCode.GDRedHeroObjects3[i].getScale() / (4));
}
}{for(var i = 0, len = gdjs.PlatformerCode.GDRedHeroObjects3.length ;i < len;++i) {
    gdjs.PlatformerCode.GDRedHeroObjects3[i].returnVariable(gdjs.PlatformerCode.GDRedHeroObjects3[i].getVariables().get("Owner")).setString(gdjs.evtsExt__THNK__CurrentPlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedHero"), gdjs.PlatformerCode.GDRedHeroObjects2);

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
gdjs.PlatformerCode.condition1IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnClientDisconnect.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.PlatformerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDRedHeroObjects2.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDRedHeroObjects2[i].getVariableString(gdjs.PlatformerCode.GDRedHeroObjects2[i].getVariables().get("Owner")) == gdjs.evtsExt__THNK__CurrentPlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.PlatformerCode.condition1IsTrue_0.val = true;
        gdjs.PlatformerCode.GDRedHeroObjects2[k] = gdjs.PlatformerCode.GDRedHeroObjects2[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDRedHeroObjects2.length = k;}}
if (gdjs.PlatformerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDRedHeroObjects2 */
{for(var i = 0, len = gdjs.PlatformerCode.GDRedHeroObjects2.length ;i < len;++i) {
    gdjs.PlatformerCode.GDRedHeroObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.PlatformerCode.eventsList5 = function(runtimeScene) {

};gdjs.PlatformerCode.eventsList6 = function(runtimeScene) {

};gdjs.PlatformerCode.eventsList7 = function(runtimeScene) {

};gdjs.PlatformerCode.eventsList8 = function(runtimeScene) {

{


gdjs.PlatformerCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("RedHero"), gdjs.PlatformerCode.GDRedHeroObjects4);
gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "RightInput", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDRedHeroObjects4.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDRedHeroObjects4[i].getVariableString(gdjs.PlatformerCode.GDRedHeroObjects4[i].getVariables().get("Owner")) == gdjs.evtsExt__THNK__CurrentPlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDRedHeroObjects4[k] = gdjs.PlatformerCode.GDRedHeroObjects4[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDRedHeroObjects4.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.PlatformerCode.GDRedHeroObjects4.length ;i < len;++i) {
    gdjs.PlatformerCode.GDRedHeroObjects4[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents: 
gdjs.PlatformerCode.eventsList5(runtimeScene);} //Subevents end.
}
} else gdjs.PlatformerCode.stopDoWhile4 = true; 
} while ( !gdjs.PlatformerCode.stopDoWhile4 );

}


{


gdjs.PlatformerCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("RedHero"), gdjs.PlatformerCode.GDRedHeroObjects4);
gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "LeftInput", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDRedHeroObjects4.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDRedHeroObjects4[i].getVariableString(gdjs.PlatformerCode.GDRedHeroObjects4[i].getVariables().get("Owner")) == gdjs.evtsExt__THNK__CurrentPlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDRedHeroObjects4[k] = gdjs.PlatformerCode.GDRedHeroObjects4[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDRedHeroObjects4.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.PlatformerCode.GDRedHeroObjects4.length ;i < len;++i) {
    gdjs.PlatformerCode.GDRedHeroObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{ //Subevents: 
gdjs.PlatformerCode.eventsList6(runtimeScene);} //Subevents end.
}
} else gdjs.PlatformerCode.stopDoWhile4 = true; 
} while ( !gdjs.PlatformerCode.stopDoWhile4 );

}


{


gdjs.PlatformerCode.stopDoWhile3 = false;
do {gdjs.copyArray(runtimeScene.getObjects("RedHero"), gdjs.PlatformerCode.GDRedHeroObjects3);
gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "Jump", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlatformerCode.GDRedHeroObjects3.length;i<l;++i) {
    if ( gdjs.PlatformerCode.GDRedHeroObjects3[i].getVariableString(gdjs.PlatformerCode.GDRedHeroObjects3[i].getVariables().get("Owner")) == gdjs.evtsExt__THNK__CurrentPlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.PlatformerCode.condition0IsTrue_0.val = true;
        gdjs.PlatformerCode.GDRedHeroObjects3[k] = gdjs.PlatformerCode.GDRedHeroObjects3[i];
        ++k;
    }
}
gdjs.PlatformerCode.GDRedHeroObjects3.length = k;}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.PlatformerCode.GDRedHeroObjects3.length ;i < len;++i) {
    gdjs.PlatformerCode.GDRedHeroObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{ //Subevents: 
gdjs.PlatformerCode.eventsList7(runtimeScene);} //Subevents end.
}
} else gdjs.PlatformerCode.stopDoWhile3 = true; 
} while ( !gdjs.PlatformerCode.stopDoWhile3 );

}


};gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDRedHeroObjects1Objects = Hashtable.newFrom({"RedHero": gdjs.PlatformerCode.GDRedHeroObjects1});
gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDDeathZoneObjects1Objects = Hashtable.newFrom({"DeathZone": gdjs.PlatformerCode.GDDeathZoneObjects1});
gdjs.PlatformerCode.eventsList9 = function(runtimeScene) {

{


gdjs.PlatformerCode.eventsList8(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.PlatformerCode.GDDeathZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedHero"), gdjs.PlatformerCode.GDRedHeroObjects1);

gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDRedHeroObjects1Objects, gdjs.PlatformerCode.mapOfGDgdjs_46PlatformerCode_46GDDeathZoneObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlatformerCode.GDRedHeroObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SpwnPos"), gdjs.PlatformerCode.GDSpwnPosObjects1);
{for(var i = 0, len = gdjs.PlatformerCode.GDRedHeroObjects1.length ;i < len;++i) {
    gdjs.PlatformerCode.GDRedHeroObjects1[i].setPosition((( gdjs.PlatformerCode.GDSpwnPosObjects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDSpwnPosObjects1[0].getPointX("")),(( gdjs.PlatformerCode.GDSpwnPosObjects1.length === 0 ) ? 0 :gdjs.PlatformerCode.GDSpwnPosObjects1[0].getPointY("")));
}
}}

}


};gdjs.PlatformerCode.eventsList10 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "A", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("State").getChild("MyNum").setNumber(gdjs.random(1000));
}}

}


{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


gdjs.PlatformerCode.eventsList4(runtimeScene);
}


{


gdjs.PlatformerCode.eventsList9(runtimeScene);
}


};gdjs.PlatformerCode.eventsList11 = function(runtimeScene) {

{


gdjs.PlatformerCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformerCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__StartServerCode.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.PlatformerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlatformerCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.PlatformerCode.eventsList12 = function(runtimeScene) {

{



}


{


gdjs.PlatformerCode.eventsList3(runtimeScene);
}


{


gdjs.PlatformerCode.eventsList11(runtimeScene);
}


};

gdjs.PlatformerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlatformerCode.GDSummerBackgroundObjects1.length = 0;
gdjs.PlatformerCode.GDSummerBackgroundObjects2.length = 0;
gdjs.PlatformerCode.GDSummerBackgroundObjects3.length = 0;
gdjs.PlatformerCode.GDSummerBackgroundObjects4.length = 0;
gdjs.PlatformerCode.GDSpwnPosObjects1.length = 0;
gdjs.PlatformerCode.GDSpwnPosObjects2.length = 0;
gdjs.PlatformerCode.GDSpwnPosObjects3.length = 0;
gdjs.PlatformerCode.GDSpwnPosObjects4.length = 0;
gdjs.PlatformerCode.GDDeathZoneObjects1.length = 0;
gdjs.PlatformerCode.GDDeathZoneObjects2.length = 0;
gdjs.PlatformerCode.GDDeathZoneObjects3.length = 0;
gdjs.PlatformerCode.GDDeathZoneObjects4.length = 0;
gdjs.PlatformerCode.GDRedHeroObjects1.length = 0;
gdjs.PlatformerCode.GDRedHeroObjects2.length = 0;
gdjs.PlatformerCode.GDRedHeroObjects3.length = 0;
gdjs.PlatformerCode.GDRedHeroObjects4.length = 0;
gdjs.PlatformerCode.GDRedSwitchObjects1.length = 0;
gdjs.PlatformerCode.GDRedSwitchObjects2.length = 0;
gdjs.PlatformerCode.GDRedSwitchObjects3.length = 0;
gdjs.PlatformerCode.GDRedSwitchObjects4.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformCenterObjects1.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformCenterObjects2.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformCenterObjects3.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformCenterObjects4.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformRightObjects1.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformRightObjects2.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformRightObjects3.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformRightObjects4.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformLeftObjects1.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformLeftObjects2.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformLeftObjects3.length = 0;
gdjs.PlatformerCode.GDSummerTilePlatformLeftObjects4.length = 0;
gdjs.PlatformerCode.GDPlatformObjects1.length = 0;
gdjs.PlatformerCode.GDPlatformObjects2.length = 0;
gdjs.PlatformerCode.GDPlatformObjects3.length = 0;
gdjs.PlatformerCode.GDPlatformObjects4.length = 0;
gdjs.PlatformerCode.GDNewTextObjects1.length = 0;
gdjs.PlatformerCode.GDNewTextObjects2.length = 0;
gdjs.PlatformerCode.GDNewTextObjects3.length = 0;
gdjs.PlatformerCode.GDNewTextObjects4.length = 0;
gdjs.PlatformerCode.GDFPSObjects1.length = 0;
gdjs.PlatformerCode.GDFPSObjects2.length = 0;
gdjs.PlatformerCode.GDFPSObjects3.length = 0;
gdjs.PlatformerCode.GDFPSObjects4.length = 0;

gdjs.PlatformerCode.eventsList12(runtimeScene);
return;

}

gdjs['PlatformerCode'] = gdjs.PlatformerCode;
