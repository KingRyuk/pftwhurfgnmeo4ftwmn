gdjs.cutsceneCode = {};
gdjs.cutsceneCode.localVariables = [];
gdjs.cutsceneCode.GDNewVideoObjects1= [];
gdjs.cutsceneCode.GDNewVideoObjects2= [];
gdjs.cutsceneCode.GDSkipObjects1= [];
gdjs.cutsceneCode.GDSkipObjects2= [];


gdjs.cutsceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.cutsceneCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.cutsceneCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.cutsceneCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.cutsceneCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cutsceneCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.cutsceneCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.cutsceneCode.GDNewVideoObjects1[k] = gdjs.cutsceneCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.cutsceneCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skip"), gdjs.cutsceneCode.GDSkipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cutsceneCode.GDSkipObjects1.length;i<l;++i) {
    if ( gdjs.cutsceneCode.GDSkipObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.cutsceneCode.GDSkipObjects1[k] = gdjs.cutsceneCode.GDSkipObjects1[i];
        ++k;
    }
}
gdjs.cutsceneCode.GDSkipObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.cutsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cutsceneCode.GDNewVideoObjects1.length = 0;
gdjs.cutsceneCode.GDNewVideoObjects2.length = 0;
gdjs.cutsceneCode.GDSkipObjects1.length = 0;
gdjs.cutsceneCode.GDSkipObjects2.length = 0;

gdjs.cutsceneCode.eventsList0(runtimeScene);
gdjs.cutsceneCode.GDNewVideoObjects1.length = 0;
gdjs.cutsceneCode.GDNewVideoObjects2.length = 0;
gdjs.cutsceneCode.GDSkipObjects1.length = 0;
gdjs.cutsceneCode.GDSkipObjects2.length = 0;


return;

}

gdjs['cutsceneCode'] = gdjs.cutsceneCode;
