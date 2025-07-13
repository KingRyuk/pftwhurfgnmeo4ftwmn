gdjs.ending_321Code = {};
gdjs.ending_321Code.localVariables = [];
gdjs.ending_321Code.GDening_9595videoObjects1= [];
gdjs.ending_321Code.GDening_9595videoObjects2= [];


gdjs.ending_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ening_video"), gdjs.ending_321Code.GDening_9595videoObjects1);
{for(var i = 0, len = gdjs.ending_321Code.GDening_9595videoObjects1.length ;i < len;++i) {
    gdjs.ending_321Code.GDening_9595videoObjects1[i].play();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "1UP 👾 (16-Bit Arcade No Copyright Music)2.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ening_video"), gdjs.ending_321Code.GDening_9595videoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ending_321Code.GDening_9595videoObjects1.length;i<l;++i) {
    if ( gdjs.ending_321Code.GDening_9595videoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.ending_321Code.GDening_9595videoObjects1[k] = gdjs.ending_321Code.GDening_9595videoObjects1[i];
        ++k;
    }
}
gdjs.ending_321Code.GDening_9595videoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


};

gdjs.ending_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ending_321Code.GDening_9595videoObjects1.length = 0;
gdjs.ending_321Code.GDening_9595videoObjects2.length = 0;

gdjs.ending_321Code.eventsList0(runtimeScene);
gdjs.ending_321Code.GDening_9595videoObjects1.length = 0;
gdjs.ending_321Code.GDening_9595videoObjects2.length = 0;


return;

}

gdjs['ending_321Code'] = gdjs.ending_321Code;
