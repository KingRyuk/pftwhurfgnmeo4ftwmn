gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.localVariables = [];
gdjs.Main_32menuCode.GDNewSpriteObjects1= [];
gdjs.Main_32menuCode.GDNewSpriteObjects2= [];
gdjs.Main_32menuCode.GDQuest_9595for_9595infinate_9595eggsObjects1= [];
gdjs.Main_32menuCode.GDQuest_9595for_9595infinate_9595eggsObjects2= [];
gdjs.Main_32menuCode.GDplayObjects1= [];
gdjs.Main_32menuCode.GDplayObjects2= [];
gdjs.Main_32menuCode.GDNewTextObjects1= [];
gdjs.Main_32menuCode.GDNewTextObjects2= [];
gdjs.Main_32menuCode.GDYellowButtonObjects1= [];
gdjs.Main_32menuCode.GDYellowButtonObjects2= [];


gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32menuCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDplayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDplayObjects1[k] = gdjs.Main_32menuCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cutscene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.Main_32menuCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDYellowButtonObjects1[k] = gdjs.Main_32menuCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://wolflight.uk", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.Main_32menuCode.GDYellowButtonObjects1);
{for(var i = 0, len = gdjs.Main_32menuCode.GDYellowButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDYellowButtonObjects1[i].hide();
}
}}

}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDQuest_9595for_9595infinate_9595eggsObjects1.length = 0;
gdjs.Main_32menuCode.GDQuest_9595for_9595infinate_9595eggsObjects2.length = 0;
gdjs.Main_32menuCode.GDplayObjects1.length = 0;
gdjs.Main_32menuCode.GDplayObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32menuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32menuCode.GDYellowButtonObjects1.length = 0;
gdjs.Main_32menuCode.GDYellowButtonObjects2.length = 0;

gdjs.Main_32menuCode.eventsList0(runtimeScene);
gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDQuest_9595for_9595infinate_9595eggsObjects1.length = 0;
gdjs.Main_32menuCode.GDQuest_9595for_9595infinate_9595eggsObjects2.length = 0;
gdjs.Main_32menuCode.GDplayObjects1.length = 0;
gdjs.Main_32menuCode.GDplayObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32menuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32menuCode.GDYellowButtonObjects1.length = 0;
gdjs.Main_32menuCode.GDYellowButtonObjects2.length = 0;


return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
