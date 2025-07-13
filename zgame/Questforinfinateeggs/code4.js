gdjs.ending_322Code = {};
gdjs.ending_322Code.localVariables = [];
gdjs.ending_322Code.GDcut_9595sceneObjects1= [];
gdjs.ending_322Code.GDcut_9595sceneObjects2= [];


gdjs.ending_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cut_scene"), gdjs.ending_322Code.GDcut_9595sceneObjects1);
{for(var i = 0, len = gdjs.ending_322Code.GDcut_9595sceneObjects1.length ;i < len;++i) {
    gdjs.ending_322Code.GDcut_9595sceneObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cut_scene"), gdjs.ending_322Code.GDcut_9595sceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ending_322Code.GDcut_9595sceneObjects1.length;i<l;++i) {
    if ( gdjs.ending_322Code.GDcut_9595sceneObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.ending_322Code.GDcut_9595sceneObjects1[k] = gdjs.ending_322Code.GDcut_9595sceneObjects1[i];
        ++k;
    }
}
gdjs.ending_322Code.GDcut_9595sceneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


};

gdjs.ending_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ending_322Code.GDcut_9595sceneObjects1.length = 0;
gdjs.ending_322Code.GDcut_9595sceneObjects2.length = 0;

gdjs.ending_322Code.eventsList0(runtimeScene);
gdjs.ending_322Code.GDcut_9595sceneObjects1.length = 0;
gdjs.ending_322Code.GDcut_9595sceneObjects2.length = 0;


return;

}

gdjs['ending_322Code'] = gdjs.ending_322Code;
