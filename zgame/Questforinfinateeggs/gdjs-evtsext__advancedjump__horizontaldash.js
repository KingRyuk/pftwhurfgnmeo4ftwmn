
gdjs.evtsExt__AdvancedJump__HorizontalDash = gdjs.evtsExt__AdvancedJump__HorizontalDash || {};

/**
 * Behavior generated from Horizontal dash
 */
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash = class HorizontalDash extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlatformerCharacter = behaviorData.PlatformerCharacter !== undefined ? behaviorData.PlatformerCharacter : "";
    this._behaviorData.PlatformerConfigurationStack = behaviorData.PlatformerConfigurationStack !== undefined ? behaviorData.PlatformerConfigurationStack : "";
    this._behaviorData.DashInitialSpeed = behaviorData.DashInitialSpeed !== undefined ? behaviorData.DashInitialSpeed : Number("500") || 0;
    this._behaviorData.DashSustainDurationMin = behaviorData.DashSustainDurationMin !== undefined ? behaviorData.DashSustainDurationMin : Number("0") || 0;
    this._behaviorData.DashSustainDurationMax = behaviorData.DashSustainDurationMax !== undefined ? behaviorData.DashSustainDurationMax : Number("0.25") || 0;
    this._behaviorData.DashSustainAcceleration = behaviorData.DashSustainAcceleration !== undefined ? behaviorData.DashSustainAcceleration : Number("1500") || 0;
    this._behaviorData.DashSustainSpeedMax = behaviorData.DashSustainSpeedMax !== undefined ? behaviorData.DashSustainSpeedMax : Number("750") || 0;
    this._behaviorData.DashSustainGravity = behaviorData.DashSustainGravity !== undefined ? behaviorData.DashSustainGravity : Number("0") || 0;
    this._behaviorData.DashDecceleration = behaviorData.DashDecceleration !== undefined ? behaviorData.DashDecceleration : Number("3000") || 0;
    this._behaviorData.DashGravity = behaviorData.DashGravity !== undefined ? behaviorData.DashGravity : Number("1000") || 0;
    this._behaviorData.CoolDownDuration = behaviorData.CoolDownDuration !== undefined ? behaviorData.CoolDownDuration : Number("0.25") || 0;
    this._behaviorData.LastDirectionIsLeft = false;
    this._behaviorData.DashKeyIsPressed = false;
    this._behaviorData.IsSustainning = false;
    this._behaviorData.CanDash = true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PlatformerCharacter !== newBehaviorData.PlatformerCharacter)
      this._behaviorData.PlatformerCharacter = newBehaviorData.PlatformerCharacter;
    if (oldBehaviorData.PlatformerConfigurationStack !== newBehaviorData.PlatformerConfigurationStack)
      this._behaviorData.PlatformerConfigurationStack = newBehaviorData.PlatformerConfigurationStack;
    if (oldBehaviorData.DashInitialSpeed !== newBehaviorData.DashInitialSpeed)
      this._behaviorData.DashInitialSpeed = newBehaviorData.DashInitialSpeed;
    if (oldBehaviorData.DashSustainDurationMin !== newBehaviorData.DashSustainDurationMin)
      this._behaviorData.DashSustainDurationMin = newBehaviorData.DashSustainDurationMin;
    if (oldBehaviorData.DashSustainDurationMax !== newBehaviorData.DashSustainDurationMax)
      this._behaviorData.DashSustainDurationMax = newBehaviorData.DashSustainDurationMax;
    if (oldBehaviorData.DashSustainAcceleration !== newBehaviorData.DashSustainAcceleration)
      this._behaviorData.DashSustainAcceleration = newBehaviorData.DashSustainAcceleration;
    if (oldBehaviorData.DashSustainSpeedMax !== newBehaviorData.DashSustainSpeedMax)
      this._behaviorData.DashSustainSpeedMax = newBehaviorData.DashSustainSpeedMax;
    if (oldBehaviorData.DashSustainGravity !== newBehaviorData.DashSustainGravity)
      this._behaviorData.DashSustainGravity = newBehaviorData.DashSustainGravity;
    if (oldBehaviorData.DashDecceleration !== newBehaviorData.DashDecceleration)
      this._behaviorData.DashDecceleration = newBehaviorData.DashDecceleration;
    if (oldBehaviorData.DashGravity !== newBehaviorData.DashGravity)
      this._behaviorData.DashGravity = newBehaviorData.DashGravity;
    if (oldBehaviorData.CoolDownDuration !== newBehaviorData.CoolDownDuration)
      this._behaviorData.CoolDownDuration = newBehaviorData.CoolDownDuration;
    if (oldBehaviorData.LastDirectionIsLeft !== newBehaviorData.LastDirectionIsLeft)
      this._behaviorData.LastDirectionIsLeft = newBehaviorData.LastDirectionIsLeft;
    if (oldBehaviorData.DashKeyIsPressed !== newBehaviorData.DashKeyIsPressed)
      this._behaviorData.DashKeyIsPressed = newBehaviorData.DashKeyIsPressed;
    if (oldBehaviorData.IsSustainning !== newBehaviorData.IsSustainning)
      this._behaviorData.IsSustainning = newBehaviorData.IsSustainning;
    if (oldBehaviorData.CanDash !== newBehaviorData.CanDash)
      this._behaviorData.CanDash = newBehaviorData.CanDash;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PlatformerCharacter: this._behaviorData.PlatformerCharacter,
    PlatformerConfigurationStack: this._behaviorData.PlatformerConfigurationStack,
    DashInitialSpeed: this._behaviorData.DashInitialSpeed,
    DashSustainDurationMin: this._behaviorData.DashSustainDurationMin,
    DashSustainDurationMax: this._behaviorData.DashSustainDurationMax,
    DashSustainAcceleration: this._behaviorData.DashSustainAcceleration,
    DashSustainSpeedMax: this._behaviorData.DashSustainSpeedMax,
    DashSustainGravity: this._behaviorData.DashSustainGravity,
    DashDecceleration: this._behaviorData.DashDecceleration,
    DashGravity: this._behaviorData.DashGravity,
    CoolDownDuration: this._behaviorData.CoolDownDuration,
    LastDirectionIsLeft: this._behaviorData.LastDirectionIsLeft,
    DashKeyIsPressed: this._behaviorData.DashKeyIsPressed,
    IsSustainning: this._behaviorData.IsSustainning,
    CanDash: this._behaviorData.CanDash,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PlatformerCharacter !== undefined)
      this._behaviorData.PlatformerCharacter = networkSyncData.props.PlatformerCharacter;
    if (networkSyncData.props.PlatformerConfigurationStack !== undefined)
      this._behaviorData.PlatformerConfigurationStack = networkSyncData.props.PlatformerConfigurationStack;
    if (networkSyncData.props.DashInitialSpeed !== undefined)
      this._behaviorData.DashInitialSpeed = networkSyncData.props.DashInitialSpeed;
    if (networkSyncData.props.DashSustainDurationMin !== undefined)
      this._behaviorData.DashSustainDurationMin = networkSyncData.props.DashSustainDurationMin;
    if (networkSyncData.props.DashSustainDurationMax !== undefined)
      this._behaviorData.DashSustainDurationMax = networkSyncData.props.DashSustainDurationMax;
    if (networkSyncData.props.DashSustainAcceleration !== undefined)
      this._behaviorData.DashSustainAcceleration = networkSyncData.props.DashSustainAcceleration;
    if (networkSyncData.props.DashSustainSpeedMax !== undefined)
      this._behaviorData.DashSustainSpeedMax = networkSyncData.props.DashSustainSpeedMax;
    if (networkSyncData.props.DashSustainGravity !== undefined)
      this._behaviorData.DashSustainGravity = networkSyncData.props.DashSustainGravity;
    if (networkSyncData.props.DashDecceleration !== undefined)
      this._behaviorData.DashDecceleration = networkSyncData.props.DashDecceleration;
    if (networkSyncData.props.DashGravity !== undefined)
      this._behaviorData.DashGravity = networkSyncData.props.DashGravity;
    if (networkSyncData.props.CoolDownDuration !== undefined)
      this._behaviorData.CoolDownDuration = networkSyncData.props.CoolDownDuration;
    if (networkSyncData.props.LastDirectionIsLeft !== undefined)
      this._behaviorData.LastDirectionIsLeft = networkSyncData.props.LastDirectionIsLeft;
    if (networkSyncData.props.DashKeyIsPressed !== undefined)
      this._behaviorData.DashKeyIsPressed = networkSyncData.props.DashKeyIsPressed;
    if (networkSyncData.props.IsSustainning !== undefined)
      this._behaviorData.IsSustainning = networkSyncData.props.IsSustainning;
    if (networkSyncData.props.CanDash !== undefined)
      this._behaviorData.CanDash = networkSyncData.props.CanDash;
  }

  // Properties:
  
  _getPlatformerCharacter() {
    return this._behaviorData.PlatformerCharacter !== undefined ? this._behaviorData.PlatformerCharacter : "";
  }
  _setPlatformerCharacter(newValue) {
    this._behaviorData.PlatformerCharacter = newValue;
  }
  _getPlatformerConfigurationStack() {
    return this._behaviorData.PlatformerConfigurationStack !== undefined ? this._behaviorData.PlatformerConfigurationStack : "";
  }
  _setPlatformerConfigurationStack(newValue) {
    this._behaviorData.PlatformerConfigurationStack = newValue;
  }
  _getDashInitialSpeed() {
    return this._behaviorData.DashInitialSpeed !== undefined ? this._behaviorData.DashInitialSpeed : Number("500") || 0;
  }
  _setDashInitialSpeed(newValue) {
    this._behaviorData.DashInitialSpeed = newValue;
  }
  _getDashSustainDurationMin() {
    return this._behaviorData.DashSustainDurationMin !== undefined ? this._behaviorData.DashSustainDurationMin : Number("0") || 0;
  }
  _setDashSustainDurationMin(newValue) {
    this._behaviorData.DashSustainDurationMin = newValue;
  }
  _getDashSustainDurationMax() {
    return this._behaviorData.DashSustainDurationMax !== undefined ? this._behaviorData.DashSustainDurationMax : Number("0.25") || 0;
  }
  _setDashSustainDurationMax(newValue) {
    this._behaviorData.DashSustainDurationMax = newValue;
  }
  _getDashSustainAcceleration() {
    return this._behaviorData.DashSustainAcceleration !== undefined ? this._behaviorData.DashSustainAcceleration : Number("1500") || 0;
  }
  _setDashSustainAcceleration(newValue) {
    this._behaviorData.DashSustainAcceleration = newValue;
  }
  _getDashSustainSpeedMax() {
    return this._behaviorData.DashSustainSpeedMax !== undefined ? this._behaviorData.DashSustainSpeedMax : Number("750") || 0;
  }
  _setDashSustainSpeedMax(newValue) {
    this._behaviorData.DashSustainSpeedMax = newValue;
  }
  _getDashSustainGravity() {
    return this._behaviorData.DashSustainGravity !== undefined ? this._behaviorData.DashSustainGravity : Number("0") || 0;
  }
  _setDashSustainGravity(newValue) {
    this._behaviorData.DashSustainGravity = newValue;
  }
  _getDashDecceleration() {
    return this._behaviorData.DashDecceleration !== undefined ? this._behaviorData.DashDecceleration : Number("3000") || 0;
  }
  _setDashDecceleration(newValue) {
    this._behaviorData.DashDecceleration = newValue;
  }
  _getDashGravity() {
    return this._behaviorData.DashGravity !== undefined ? this._behaviorData.DashGravity : Number("1000") || 0;
  }
  _setDashGravity(newValue) {
    this._behaviorData.DashGravity = newValue;
  }
  _getCoolDownDuration() {
    return this._behaviorData.CoolDownDuration !== undefined ? this._behaviorData.CoolDownDuration : Number("0.25") || 0;
  }
  _setCoolDownDuration(newValue) {
    this._behaviorData.CoolDownDuration = newValue;
  }
  _getLastDirectionIsLeft() {
    return this._behaviorData.LastDirectionIsLeft !== undefined ? this._behaviorData.LastDirectionIsLeft : false;
  }
  _setLastDirectionIsLeft(newValue) {
    this._behaviorData.LastDirectionIsLeft = newValue;
  }
  _toggleLastDirectionIsLeft() {
    this._setLastDirectionIsLeft(!this._getLastDirectionIsLeft());
  }
  _getDashKeyIsPressed() {
    return this._behaviorData.DashKeyIsPressed !== undefined ? this._behaviorData.DashKeyIsPressed : false;
  }
  _setDashKeyIsPressed(newValue) {
    this._behaviorData.DashKeyIsPressed = newValue;
  }
  _toggleDashKeyIsPressed() {
    this._setDashKeyIsPressed(!this._getDashKeyIsPressed());
  }
  _getIsSustainning() {
    return this._behaviorData.IsSustainning !== undefined ? this._behaviorData.IsSustainning : false;
  }
  _setIsSustainning(newValue) {
    this._behaviorData.IsSustainning = newValue;
  }
  _toggleIsSustainning() {
    this._setIsSustainning(!this._getIsSustainning());
  }
  _getCanDash() {
    return this._behaviorData.CanDash !== undefined ? this._behaviorData.CanDash : true;
  }
  _setCanDash(newValue) {
    this._behaviorData.CanDash = newValue;
  }
  _toggleCanDash() {
    this._setCanDash(!this._getCanDash());
  }
}

/**
 * Shared data generated from Horizontal dash
 */
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.SharedData = class HorizontalDashSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AdvancedJump_HorizontalDashSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AdvancedJump_HorizontalDashSharedData = new gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.SharedData(
      initialData
    );
  }
  return instanceContainer._AdvancedJump_HorizontalDashSharedData;
}

// Methods:
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595AdvancedJump_9595_9595HorizontalDash_9546HorizontalDash_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureGravity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashGravity(), "HorizontalDashGravity", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


};gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i].getTimerElapsedTimeInSecondsOrNaN("__PlatformerDash_SustainTime") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashSustainDurationMax() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashKeyIsPressed();
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i].getTimerElapsedTimeInSecondsOrNaN("__PlatformerDash_SustainTime") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashSustainDurationMin() ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595AdvancedJump_9595_9595HorizontalDash_9546HorizontalDash_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsSustainning(false)
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureDeceleration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashDecceleration(), "HorizontalDash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).RevertConfiguration("HorizontalDashGravity", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsSustainning();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsSustainning();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLeftKey();
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateRightKey();
}
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() <= (gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).UsualMaxSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() >= -((gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).UsualMaxSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AbortDash((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateLastDirection((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashKeyIsPressed();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__PlatformerDash_CoolDown") < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoolDownDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanDash(true)
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDashKeyIsPressed(false)
}}

}


};

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
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

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext = {};
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastDirectionIsLeft(false)
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Right")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastDirectionIsLeft(true)
}}

}


};

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirection = function(parentEventsFunctionContext) {

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
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
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

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.UpdateLastDirectionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext = {};
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects3= [];


gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastDirectionIsLeft();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashInitialSpeed()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastDirectionIsLeft();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashInitialSpeed());
}
}}

}


{



}


};gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDashKeyIsPressed(true)
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanDash();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1[i].resetTimer("__PlatformerDash_SustainTime");
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsSustainning(true)
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).abortJump();
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentFallSpeed(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureGravity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashSustainGravity(), "HorizontalDashGravity", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureMaxSpeed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashSustainSpeedMax(), "HorizontalDash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureAcceleration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDashSustainAcceleration(), "HorizontalDash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureDeceleration(0, "HorizontalDash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanDash(false)
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateLastDirection((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKey = function(parentEventsFunctionContext) {

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
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
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

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.SimulateDashKeyContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext = {};
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__PlatformerDash_SustainTime") >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashing = function(parentEventsFunctionContext) {

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
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
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

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.IsDashingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext = {};
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects3= [];


gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(-((gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).UsualMaxSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed((gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).UsualMaxSpeed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


};gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).RevertConfiguration("HorizontalDash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).RevertConfiguration("HorizontalDashGravity", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1[i].removeTimer("__PlatformerDash_SustainTime");
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1[i].resetTimer("__PlatformerDash_CoolDown");
}
}
{ //Subevents
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDash = function(parentEventsFunctionContext) {

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
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
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

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash.prototype.AbortDashContext.GDObjectObjects3.length = 0;


return;
}


gdjs.registerBehavior("AdvancedJump::HorizontalDash", gdjs.evtsExt__AdvancedJump__HorizontalDash.HorizontalDash);
