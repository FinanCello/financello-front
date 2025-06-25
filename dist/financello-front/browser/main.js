import {
  CategoryService
} from "./chunk-IAVQRACI.js";
import {
  AuthService,
  SnackbarService
} from "./chunk-SUVJDTBQ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YJSIDPBL.js";
import {
  ANIMATION_MODULE_TYPE,
  ActivatedRoute,
  BrowserModule,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  DatePipe,
  DecimalPipe,
  DomRendererFactory2,
  HttpClient,
  HttpParams,
  Inject,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  RendererFactory2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  ViewEncapsulation,
  __objRest,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  catchError,
  effect,
  inject,
  performanceMarkFeature,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UIRPTLIM.js";

// node_modules/@angular/animations/fesm2022/private_export-B_vy_9K7.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function trigger(name, definitions) {
  return { type: AnimationMetadataType.Trigger, name, definitions, options: {} };
}
function animate(timings, styles = null) {
  return { type: AnimationMetadataType.Animate, styles, timings };
}
function group(steps, options = null) {
  return { type: AnimationMetadataType.Group, steps, options };
}
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
function transition(stateChangeExpr, steps, options = null) {
  return { type: AnimationMetadataType.Transition, expr: stateChangeExpr, animation: steps, options };
}
function query(selector, animation2, options = null) {
  return { type: AnimationMetadataType.Query, selector, animation: animation2, options };
}
var NoopAnimationPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  _started = false;
  _destroyed = false;
  _finished = false;
  _position = 0;
  parentPlayer = null;
  totalTime;
  constructor(duration = 0, delay = 0) {
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _finished = false;
  _started = false;
  _destroyed = false;
  _onDestroyFns = [];
  parentPlayer = null;
  totalTime = 0;
  players;
  constructor(_players) {
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/util-CPU6TNml.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set([
  "-moz-outline-radius",
  "-moz-outline-radius-bottomleft",
  "-moz-outline-radius-bottomright",
  "-moz-outline-radius-topleft",
  "-moz-outline-radius-topright",
  "-ms-grid-columns",
  "-ms-grid-rows",
  "-webkit-line-clamp",
  "-webkit-text-fill-color",
  "-webkit-text-stroke",
  "-webkit-text-stroke-color",
  "accent-color",
  "all",
  "backdrop-filter",
  "background",
  "background-color",
  "background-position",
  "background-size",
  "block-size",
  "border",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-width",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image-outset",
  "border-image-slice",
  "border-image-width",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-width",
  "border-left",
  "border-left-color",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-width",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-width",
  "border-width",
  "bottom",
  "box-shadow",
  "caret-color",
  "clip",
  "clip-path",
  "color",
  "column-count",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-width",
  "column-width",
  "columns",
  "filter",
  "flex",
  "flex-basis",
  "flex-grow",
  "flex-shrink",
  "font",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-variation-settings",
  "font-weight",
  "gap",
  "grid-column-gap",
  "grid-gap",
  "grid-row-gap",
  "grid-template-columns",
  "grid-template-rows",
  "height",
  "inline-size",
  "input-security",
  "inset",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "left",
  "letter-spacing",
  "line-clamp",
  "line-height",
  "margin",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "mask",
  "mask-border",
  "mask-position",
  "mask-size",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-lines",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-width",
  "padding",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "perspective",
  "perspective-origin",
  "right",
  "rotate",
  "row-gap",
  "scale",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-coordinate",
  "scroll-snap-destination",
  "scrollbar-color",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "tab-size",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-indent",
  "text-shadow",
  "text-underline-offset",
  "top",
  "transform",
  "transform-origin",
  "translate",
  "vertical-align",
  "visibility",
  "width",
  "word-spacing",
  "z-index",
  "zoom"
]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes2, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes2.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return { element, triggerName, fromState, toState, phaseName, totalTime, disabled: !!disabled };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return { duration: 0, delay: 0, easing: "" };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return { duration, delay, easing };
}
function normalizeKeyframes(keyframes2) {
  if (!keyframes2.length) {
    return [];
  }
  if (keyframes2[0] instanceof Map) {
    return keyframes2;
  }
  return keyframes2.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes2, previousStyles) {
  if (previousStyles.size && keyframes2.length) {
    let startingKeyframe = keyframes2[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes2.length; i++) {
        let kf = keyframes2[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes2;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes2, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition2 = this.visitTransition(def, context);
        queryCount += transition2.queryCount;
        depCount += transition2.depCount;
        transitions.push(transition2);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation2 = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation: animation2,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes2 = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes2.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation2 = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation: animation2,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes2, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes: keyframes2,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes2, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes2;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes2 = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes2[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes2[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes2.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes2[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes2 = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes2, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes: keyframes2
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes2.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation2 = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition2 = {
    type: AnimationMetadataType.Transition,
    animation: animation2,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition2, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes2 = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes2, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger2 = this._triggers.get(name);
    if (!trigger2) {
      throw unregisteredTrigger(name);
    }
    return trigger2;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger2 = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger2.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger2.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition2 = trigger2.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition2) {
      if (!defaultToFallback) return;
      transition2 = trigger2.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition: transition2,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state2, triggerName) => {
        previousTriggersValues.set(triggerName, state2.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger2 = this._triggers.get(triggerName);
        const transition2 = trigger2.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition: transition2,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger2) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger2)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state2 = triggersWithStates.get(entry.triggerName);
                state2.value = previousValue;
                triggersWithStates.set(entry.triggerName, state2);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes2 = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes2, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes2, previousPlayers) {
    if (keyframes2.length > 0) {
      return this.driver.animate(instruction.element, keyframes2, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger2 = this._triggerCache[cacheKey];
    if (!trigger2) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger2 = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger2;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger2);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes2, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes2;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes2 = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes2, this.options);
    this._finalKeyframe = keyframes2.length ? keyframes2[keyframes2.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes2) {
    const kfs = [];
    keyframes2.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes2, options) {
    return element.animate(this._convertKeyframesToObject(keyframes2), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes2, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes2).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger2 = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger2, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger2) => {
      if (Array.isArray(trigger2)) {
        trigger2.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger2.name, trigger2);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// src/app/route-animations.ts
var slideInAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(":leave", [
        animate("0.3s ease-out", style({ transform: "translateX(-100%)", opacity: 0 }))
      ], { optional: true }),
      query(":enter", [
        style({ transform: "translateX(100%)", opacity: 0 }),
        animate("0.3s ease-out", style({ transform: "translateX(0)", opacity: 1 }))
      ], { optional: true })
    ])
  ])
]);

// src/app/shared/snackbar/snackbar.component.ts
function SnackbarComponent_div_0_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.icon, \u0275\u0275sanitizeUrl);
  }
}
function SnackbarComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function SnackbarComponent_div_0_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onUndo());
    });
    \u0275\u0275text(1, "UNDO");
    \u0275\u0275elementEnd();
  }
}
function SnackbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275template(2, SnackbarComponent_div_0_img_2_Template, 1, 1, "img", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SnackbarComponent_div_0_div_8_Template, 2, 0, "div", 7);
    \u0275\u0275element(9, "div", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hide", ctx_r0.isHiding);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showUndo);
  }
}
var SnackbarComponent = class _SnackbarComponent {
  title = "";
  message = "";
  icon = "";
  showUndo = false;
  visible = true;
  isHiding = false;
  ngOnInit() {
    setTimeout(() => {
      this.isHiding = true;
      setTimeout(() => {
        this.visible = false;
      }, 400);
    }, 3e3);
  }
  onUndo() {
    console.log("Undo clicked");
  }
  static \u0275fac = function SnackbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SnackbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SnackbarComponent, selectors: [["app-snackbar"]], inputs: { title: "title", message: "message", icon: "icon", showUndo: "showUndo" }, decls: 1, vars: 1, consts: [["class", "snackbar", 3, "hide", 4, "ngIf"], [1, "snackbar"], [1, "content"], ["class", "icons", 3, "src", 4, "ngIf"], [1, "frame-65"], [1, "post-submitted"], [1, "check-back-later-for-updates"], ["class", "undo", 3, "click", 4, "ngIf"], [1, "rectangle-326"], [1, "icons", 3, "src"], [1, "undo", 3, "click"]], template: function SnackbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SnackbarComponent_div_0_Template, 10, 6, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [NgIf], styles: ['\n\n.snackbar[_ngcontent-%COMP%], \n.snackbar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.snackbar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 340px;\n  background: #092c36;\n  border-radius: 5px;\n  padding: 26px 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  align-items: center;\n  justify-content: center;\n  height: 80px;\n  overflow: hidden;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideIn 0.4s ease forwards;\n}\n.snackbar.hide[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideOut 0.4s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideOut {\n  from {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n}\n.content[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 340px;\n  height: 71.5px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.icons[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  left: 10px;\n  top: 28px;\n  overflow: visible;\n}\n.frame-65[_ngcontent-%COMP%] {\n  width: 219px;\n  height: 63px;\n  position: absolute;\n  left: 49px;\n  top: 8.5px;\n}\n.post-submitted[_ngcontent-%COMP%] {\n  color: #fafafa;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  position: absolute;\n  left: 0px;\n  top: 5.5px;\n  width: 234px;\n}\n.check-back-later-for-updates[_ngcontent-%COMP%] {\n  color: #fafafa;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  position: absolute;\n  left: 0px;\n  top: 37.5px;\n  width: 219px;\n}\n.undo[_ngcontent-%COMP%] {\n  color: #0ea49b;\n  text-align: left;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  position: absolute;\n  left: 283px;\n  top: 28px;\n}\n.rectangle-326[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  width: 340px;\n  height: 5px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=snackbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SnackbarComponent, [{
    type: Component,
    args: [{ selector: "app-snackbar", standalone: true, imports: [NgIf], template: '<div class="snackbar" *ngIf="visible" [class.hide]="isHiding">\r\n  <div class="content">\r\n    <img class="icons" [src]="icon" *ngIf="icon" />\r\n    <div class="frame-65">\r\n      <div class="post-submitted">{{ title }}</div>\r\n      <div class="check-back-later-for-updates">{{ message }}</div>\r\n    </div>\r\n    <div class="undo" (click)="onUndo()" *ngIf="showUndo">UNDO</div>\r\n    <div class="rectangle-326"></div>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/shared/snackbar/snackbar.component.css */\n.snackbar,\n.snackbar * {\n  box-sizing: border-box;\n}\n.snackbar {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 340px;\n  background: #092c36;\n  border-radius: 5px;\n  padding: 26px 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  align-items: center;\n  justify-content: center;\n  height: 80px;\n  overflow: hidden;\n  z-index: 1000;\n  animation: slideIn 0.4s ease forwards;\n}\n.snackbar.hide {\n  animation: slideOut 0.4s ease forwards;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes slideOut {\n  from {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n}\n.content {\n  flex-shrink: 0;\n  width: 340px;\n  height: 71.5px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.icons {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  left: 10px;\n  top: 28px;\n  overflow: visible;\n}\n.frame-65 {\n  width: 219px;\n  height: 63px;\n  position: absolute;\n  left: 49px;\n  top: 8.5px;\n}\n.post-submitted {\n  color: #fafafa;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  position: absolute;\n  left: 0px;\n  top: 5.5px;\n  width: 234px;\n}\n.check-back-later-for-updates {\n  color: #fafafa;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  position: absolute;\n  left: 0px;\n  top: 37.5px;\n  width: 219px;\n}\n.undo {\n  color: #0ea49b;\n  text-align: left;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  position: absolute;\n  left: 283px;\n  top: 28px;\n}\n.rectangle-326 {\n  background: #0ea49b;\n  width: 340px;\n  height: 5px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=snackbar.component.css.map */\n'] }]
  }], null, { title: [{
    type: Input
  }], message: [{
    type: Input
  }], icon: [{
    type: Input
  }], showUndo: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SnackbarComponent, { className: "SnackbarComponent", filePath: "src/app/shared/snackbar/snackbar.component.ts", lineNumber: 11 });
})();

// src/app/app.ts
function App_app_snackbar_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-snackbar", 2);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ((tmp_2_0 = ctx_r0.snackbarData()) == null ? null : tmp_2_0.title) || "")("message", ((tmp_3_0 = ctx_r0.snackbarData()) == null ? null : tmp_3_0.message) || "")("icon", ((tmp_4_0 = ctx_r0.snackbarData()) == null ? null : tmp_4_0.icon) || "")("showUndo", !!((tmp_5_0 = ctx_r0.snackbarData()) == null ? null : tmp_5_0.showUndo));
  }
}
var App = class _App {
  title = "financello-front";
  snackbarData = signal(null);
  snackbarService = inject(SnackbarService);
  constructor() {
    effect(() => {
      this.snackbarService.snackbarState$.subscribe((data) => {
        this.snackbarData.set(data);
        setTimeout(() => this.snackbarData.set(null), 3e3);
      });
    });
  }
  getAnimationData(outlet) {
    return outlet?.activatedRouteData?.["animation"];
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 4, vars: 2, consts: [["outlet", "outlet"], [3, "title", "message", "icon", "showUndo", 4, "ngIf"], [3, "title", "message", "icon", "showUndo"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, App_app_snackbar_0_Template, 1, 4, "app-snackbar", 1);
      \u0275\u0275elementStart(1, "main");
      \u0275\u0275element(2, "router-outlet", null, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const outlet_r2 = \u0275\u0275reference(3);
      \u0275\u0275property("ngIf", ctx.snackbarData());
      \u0275\u0275advance();
      \u0275\u0275property("@routeAnimations", ctx.getAnimationData(outlet_r2));
    }
  }, dependencies: [RouterOutlet, SnackbarComponent, NgIf], encapsulation: 2, data: { animation: [slideInAnimation] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, SnackbarComponent, NgIf], animations: [slideInAnimation], template: `<app-snackbar\r
  *ngIf="snackbarData()"\r
  [title]="snackbarData()?.title || ''"\r
  [message]="snackbarData()?.message || ''"\r
  [icon]="snackbarData()?.icon || ''"\r
  [showUndo]="!!snackbarData()?.showUndo">\r
</app-snackbar>\r
\r
<main [@routeAnimations]="getAnimationData(outlet)">\r
  <router-outlet #outlet="outlet"></router-outlet>\r
</main>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 16 });
})();

// src/app/services/SavingGoal.service.ts
var SavingGoalService = class _SavingGoalService {
  http;
  apiUrl = `${environment.apiUrl}/goals`;
  constructor(http) {
    this.http = http;
  }
  // Obtener el userId del localStorage
  getUserId() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      return user.id;
    }
    throw new Error("Usuario no autenticado");
  }
  addSavingGoal(request) {
    const userId = this.getUserId();
    const params = new HttpParams().set("userId", userId);
    return this.http.post(`${this.apiUrl}/add`, request, { params });
  }
  updateSavingGoal(goalId, request) {
    return this.http.put(`${this.apiUrl}/${goalId}`, request);
  }
  deleteSavingGoal(goalId) {
    return this.http.delete(`${this.apiUrl}/${goalId}`);
  }
  listSavingGoals() {
    const userId = this.getUserId();
    const params = new HttpParams().set("userId", userId);
    return this.http.get(`${this.apiUrl}/user`, { params });
  }
  static \u0275fac = function SavingGoalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SavingGoalService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SavingGoalService, factory: _SavingGoalService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavingGoalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/savinggoals/pages/savinggoal-list/savinggoal-list.component.ts
var _c0 = () => ["/dashboard/savinggoals/new"];
function SavingGoalListComponent_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h4", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "button", 21);
    \u0275\u0275listener("click", function SavingGoalListComponent_div_11_div_4_Template_button_click_5_listener() {
      const goal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEdit(goal_r2));
    });
    \u0275\u0275element(6, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function SavingGoalListComponent_div_11_div_4_Template_button_click_7_listener() {
      const goal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDelete(goal_r2));
    });
    \u0275\u0275element(8, "img", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 25)(10, "div", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275element(15, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 30);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const goal_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(goal_r2.name);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Actual: S/. ", goal_r2.currentAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Meta: S/. ", goal_r2.targetAmount);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", goal_r2.currentAmount / goal_r2.targetAmount * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Fecha l\xEDmite: ", \u0275\u0275pipeBind2(18, 6, goal_r2.dueDate, "dd/MM/yyyy"));
  }
}
function SavingGoalListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3", 14);
    \u0275\u0275text(2, "Mis metas de ahorro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275template(4, SavingGoalListComponent_div_11_div_4_Template, 19, 9, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.savingGoals);
  }
}
function SavingGoalListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "No tienes metas de ahorro. \xA1Crea una nueva!");
    \u0275\u0275elementEnd()();
  }
}
function SavingGoalListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p");
    \u0275\u0275text(2, "Cargando metas de ahorro...");
    \u0275\u0275elementEnd()();
  }
}
function SavingGoalListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
var SavingGoalListComponent = class _SavingGoalListComponent {
  savingGoalService;
  router;
  snackbarService;
  savingGoals = [];
  loading = false;
  error = null;
  constructor(savingGoalService, router, snackbarService) {
    this.savingGoalService = savingGoalService;
    this.router = router;
    this.snackbarService = snackbarService;
  }
  ngOnInit() {
    this.fetchSavingGoals();
  }
  fetchSavingGoals() {
    this.loading = true;
    this.error = null;
    this.savingGoalService.listSavingGoals().subscribe({
      next: (goals) => {
        this.savingGoals = goals;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching saving goals:", err);
        this.error = "Error al cargar las metas de ahorro. Por favor, intenta nuevamente.";
        this.loading = false;
        this.snackbarService.showSnackbar("Error", "No se pudieron cargar las metas de ahorro", "assets/icons/error.png");
      }
    });
  }
  onEdit(goal) {
    this.router.navigate(["/dashboard/savinggoals/edit", goal.id]);
  }
  onDelete(goal) {
    if (confirm(`\xBFSeguro que deseas eliminar la meta "${goal.name}"?`)) {
      this.loading = true;
      this.savingGoalService.deleteSavingGoal(goal.id).subscribe({
        next: () => {
          this.snackbarService.showSnackbar("Meta eliminada", "La meta de ahorro se ha eliminado exitosamente", "assets/icons/success.png");
          this.fetchSavingGoals();
        },
        error: (err) => {
          console.error("Error deleting saving goal:", err);
          this.error = "No se pudo eliminar la meta. Por favor, intenta nuevamente.";
          this.loading = false;
          this.snackbarService.showSnackbar("Error", "No se pudo eliminar la meta de ahorro", "assets/icons/error.png");
        }
      });
    }
  }
  static \u0275fac = function SavingGoalListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SavingGoalListComponent)(\u0275\u0275directiveInject(SavingGoalService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SavingGoalListComponent, selectors: [["app-savinggoal-list"]], decls: 15, vars: 6, consts: [[1, "savinggoals-main-container"], [1, "savinggoals-content"], [1, "savinggoals-header"], [1, "page-title"], [1, "savinggoals-buttons"], [1, "button-container"], [1, "circle-button", 3, "routerLink"], ["src", "assets/icons/plus.png", "alt", "Nueva Meta", 1, "plus-icon"], [1, "button-label"], ["class", "savinggoals-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "savinggoals-list"], [1, "section-title"], [1, "goal-cards-container"], ["class", "goal-card", 4, "ngFor", "ngForOf"], [1, "goal-card"], [1, "goal-card-header"], [1, "goal-name"], [1, "goal-actions"], [1, "action-button", "edit", 3, "click"], ["src", "assets/icons/gear-six.png", "alt", "Editar", 1, "action-icon"], [1, "action-button", "delete", 3, "click"], ["src", "assets/icons/x.png", "alt", "Eliminar", 1, "action-icon"], [1, "goal-amounts"], [1, "goal-current"], [1, "goal-target"], [1, "goal-progress-bar"], [1, "progress-fill"], [1, "goal-date"], [1, "empty-state"], [1, "loading-state"], [1, "error-state"]], template: function SavingGoalListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Metas de Ahorro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "button", 6);
      \u0275\u0275element(8, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Nueva meta");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(11, SavingGoalListComponent_div_11_Template, 5, 1, "div", 9)(12, SavingGoalListComponent_div_12_Template, 3, 0, "div", 10)(13, SavingGoalListComponent_div_13_Template, 3, 0, "div", 11)(14, SavingGoalListComponent_div_14_Template, 3, 1, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.savingGoals.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.savingGoals.length === 0 && !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink], styles: ['\n\n.savinggoals-main-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.savinggoals-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);\n  width: 100%;\n}\n.savinggoals-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: #303048;\n  margin: 0;\n}\n.savinggoals-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n.circle-button[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #ffffff;\n  border: none;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.circle-button[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  transform: translateY(-2px);\n}\n.plus-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.button-label[_ngcontent-%COMP%] {\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n  color: #67677a;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 18px;\n  color: #303048;\n  margin-bottom: 15px;\n}\n.savinggoals-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.goal-cards-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.goal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 15px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.goal-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);\n}\n.goal-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.goal-name[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 16px;\n  margin: 0;\n  color: #303048;\n}\n.goal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.action-button[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.action-button.edit[_ngcontent-%COMP%]:hover {\n  background-color: #e6f7ff;\n}\n.action-button.delete[_ngcontent-%COMP%]:hover {\n  background-color: #fff1f0;\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.goal-amounts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n}\n.goal-current[_ngcontent-%COMP%] {\n  color: #67677a;\n}\n.goal-target[_ngcontent-%COMP%] {\n  color: #303048;\n  font-weight: 600;\n}\n.div2[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 25px;\n  line-height: 29.17px;\n  font-weight: 400;\n  position: absolute;\n  right: 34.5%;\n  left: 63.42%;\n  width: 2.08%;\n  bottom: 47.98%;\n  top: 49.26%;\n  height: 2.76%;\n}\n.servicios[_ngcontent-%COMP%] {\n  color: var(--neutral-1000, #303048);\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 400;\n  position: absolute;\n  left: 817px;\n  top: 464px;\n}\n.publicidad[_ngcontent-%COMP%] {\n  color: var(--neutral-1000, #303048);\n  text-align: left;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 751px;\n  top: 515px;\n}\n.rectangle-32[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  width: 208px;\n  height: 4px;\n  position: absolute;\n  left: 751px;\n  top: 554px;\n  overflow: visible;\n}\n.s-500[_ngcontent-%COMP%] {\n  color: var(--neutral-1000, #303048);\n  text-align: right;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 984px;\n  top: 515px;\n}\n.falta-s-0[_ngcontent-%COMP%] {\n  color: var(--neutral-800, #67677a);\n  text-align: right;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  position: absolute;\n  left: 985px;\n  top: 545px;\n}\n.transporte[_ngcontent-%COMP%] {\n  color: var(--neutral-1000, #303048);\n  text-align: left;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 751px;\n  top: 588px;\n}\n.rectangle-33[_ngcontent-%COMP%] {\n  background: #1acbcb;\n  border-radius: 10px;\n  width: 194px;\n  height: 4px;\n  position: absolute;\n  left: 751px;\n  top: 627px;\n}\n.s-7002[_ngcontent-%COMP%] {\n  color: var(--neutral-1000, #303048);\n  text-align: right;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 985px;\n  top: 588px;\n}\n.group-201[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.servicios-cloud[_ngcontent-%COMP%] {\n  color: var(--neutral-1000, #303048);\n  text-align: left;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 751px;\n  top: 659px;\n}\n.rectangle-34[_ngcontent-%COMP%] {\n  background: #149696;\n  border-radius: 10px;\n  width: 194px;\n  height: 4px;\n  position: absolute;\n  left: 751px;\n  top: 698px;\n}\n.s-300[_ngcontent-%COMP%] {\n  color: var(--neutral-1000, #303048);\n  text-align: right;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 984px;\n  top: 659px;\n}\n.falta-s-50[_ngcontent-%COMP%] {\n  color: var(--neutral-800, #67677a);\n  text-align: right;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  position: absolute;\n  left: 977px;\n  top: 682px;\n}\n.falta-s-100[_ngcontent-%COMP%] {\n  color: var(--neutral-800, #67677a);\n  text-align: right;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  position: absolute;\n  left: 973px;\n  top: 618px;\n}\n.rectangle-35[_ngcontent-%COMP%] {\n  background: #c8f8f8;\n  border-radius: 10px;\n  width: 146px;\n  height: 4px;\n  position: absolute;\n  left: 751px;\n  top: 252px;\n}\n.circle-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #1b325f;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px auto;\n  position: relative;\n  top: -10px;\n}\n.plus-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  filter: brightness(0) invert(1);\n}\n.rectangle-30[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 270px;\n  height: 160px;\n  background-color: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);\n  padding: 12px;\n  box-sizing: border-box;\n  z-index: 0;\n}\n.pagos-box[_ngcontent-%COMP%] {\n  top: 200px;\n  left: 65%;\n}\n.servicios-box[_ngcontent-%COMP%] {\n  top: 600px;\n  left: 65%;\n}\n.icon-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 4px;\n}\n.pagos[_ngcontent-%COMP%], \n.servicios[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  margin-bottom: 6px;\n}\n.line-color[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 80%;\n  margin-top: 12px;\n  border-radius: 4px;\n}\n.line-color.crema[_ngcontent-%COMP%] {\n  background-color: #e8d7c6;\n}\n.line-color.celeste[_ngcontent-%COMP%] {\n  background-color: #d3eef5;\n}\n.s-3500[_ngcontent-%COMP%], \n.s-2800[_ngcontent-%COMP%], \n.falta-s-600[_ngcontent-%COMP%], \n.publicidad[_ngcontent-%COMP%], \n.pago-membresias[_ngcontent-%COMP%], \n.internet[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n.emoji-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  background-color: transparent;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 1;\n}\n.line-color.crema[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 4px;\n  background-color: #f1e0c5;\n  position: absolute;\n  top: 320px;\n  left: 62.5%;\n}\n.line-color.celeste[_ngcontent-%COMP%] {\n  width: 195px;\n  height: 4.5px;\n  background-color: #c9eaf3;\n  position: absolute;\n  top: 545px;\n  left: 62.5%;\n}\n.donut[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.donut-segment[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-linecap: round;\n}\n.alice-in-chains-man-in-the-box[_ngcontent-%COMP%], \n.alice-in-chains-man-in-the-box[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.alice-in-chains-man-in-the-box[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rectangle-329[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 35px;\n  width: 738px;\n  height: 520px;\n  position: relative;\n}\n.icons[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 595px;\n  top: 30px;\n  overflow: visible;\n}\n.image-13[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 478px;\n  position: absolute;\n  left: 150px;\n  top: 20px;\n  object-fit: cover;\n  aspect-ratio: 420/478;\n}\n.group-239225[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.rectangle-1303[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  width: 19.52%;\n  height: 38.67%;\n  position: absolute;\n  right: 22.74%;\n  left: 57.74%;\n  bottom: 13.77%;\n  top: 47.56%;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.image-12[_ngcontent-%COMP%] {\n  width: 310px;\n  height: 269px;\n  position: absolute;\n  left: 1140px;\n  top: 476px;\n  object-fit: cover;\n  aspect-ratio: 310/269;\n}\n.group-239214[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.rectangle-1304[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  width: 19.52%;\n  height: 29.34%;\n  position: absolute;\n  right: 22.74%;\n  left: 57.74%;\n  bottom: 54.56%;\n  top: 16.1%;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.image-11[_ngcontent-%COMP%] {\n  width: 315px;\n  height: 217px;\n  position: absolute;\n  left: 1140px;\n  top: 182px;\n  object-fit: cover;\n  aspect-ratio: 315/217;\n}\n.group-239226[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.rectangle-1305[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  width: 28.04%;\n  height: 11.97%;\n  position: absolute;\n  right: 53.87%;\n  left: 18.1%;\n  bottom: 13.77%;\n  top: 74.26%;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.savinggoals-main-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 20px;\n}\n.savinggoals-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n}\n.savinggoals-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  background-color: #ffffff;\n  border-radius: 16px;\n  padding: 20px 30px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 28px;\n  color: #303048;\n  margin: 0;\n}\n.savinggoals-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.circle-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #149696;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n}\n.circle-button[_ngcontent-%COMP%]:hover {\n  background-color: #0da0a0;\n  transform: scale(1.05);\n}\n.plus-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.button-label[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 14px;\n  color: #149696;\n  text-align: center;\n  margin-top: 5px;\n}\n.savinggoals-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  color: #303048;\n  margin-bottom: 20px;\n}\n.goal-cards-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.goal-card[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.goal-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.goal-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.goal-name[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 18px;\n  color: #303048;\n  margin: 0;\n}\n.goal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.action-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  transition: background-color 0.2s ease;\n}\n.action-button.edit[_ngcontent-%COMP%]:hover {\n  background-color: #e0ffff;\n}\n.action-button.delete[_ngcontent-%COMP%]:hover {\n  background-color: #ffeeee;\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.goal-amounts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-family: "DmSans-Regular", sans-serif;\n}\n.goal-current[_ngcontent-%COMP%] {\n  color: #149696;\n  font-weight: bold;\n}\n.goal-target[_ngcontent-%COMP%] {\n  color: #303048;\n}\n.goal-progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #149696;\n  border-radius: 4px;\n}\n.goal-date[_ngcontent-%COMP%] {\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n  color: #67677a;\n  text-align: right;\n}\n.empty-state[_ngcontent-%COMP%], \n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  background-color: #ffffff;\n  border-radius: 12px;\n  margin-top: 30px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 18px;\n  color: #67677a;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 18px;\n  color: #149696;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 18px;\n  color: #ff4242;\n}\n.savinggoals-main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 32px 40px 32px 0;\n  box-sizing: border-box;\n  min-height: 100vh;\n  background: #f3f2ea;\n  margin-left: 260px;\n}\n.savinggoals-left[_ngcontent-%COMP%] {\n  flex: 1 1 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-right: 32px;\n  width: 100%;\n}\n.savinggoals-donut-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 40px;\n  width: 100%;\n  margin-left: 0;\n}\n.savinggoals-donut-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);\n  padding: 32px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  margin-bottom: 32px;\n  min-width: 340px;\n  max-width: 400px;\n  font-family:\n    "Poppins-Regular",\n    "DmSans-Regular",\n    Arial,\n    sans-serif;\n  margin-left: 0;\n}\n.donut-chart-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n  min-width: 260px;\n  min-height: 260px;\n}\n.donut-center-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2rem;\n  font-family:\n    "Poppins-Regular",\n    Arial,\n    sans-serif;\n  font-weight: 700;\n  color: #149696;\n  background: #fff;\n  border-radius: 50%;\n  padding: 18px 28px;\n  box-shadow: 0 2px 8px rgba(26, 203, 203, 0.08);\n  text-align: center;\n}\n.donut-legend-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 32px;\n  margin-top: 18px;\n  margin-bottom: 8px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1.1rem;\n  color: #222;\n  gap: 8px;\n  font-family:\n    "Poppins-Regular",\n    Arial,\n    sans-serif;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 6px;\n  border: 2px solid #e0e0e0;\n}\n.new-goal-btn-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n  margin-left: 0;\n  margin-top: 40px;\n}\n.savinggoals-summary-row.shifted[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n@media (max-width: 1100px) {\n  .savinggoals-summary-row.shifted[_ngcontent-%COMP%] {\n    margin-left: 0;\n    justify-content: center;\n  }\n}\n.savinggoals-summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 32px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .goal-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #6a43dd 0%,\n      #8b5cf6 100%);\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .goal-date[_ngcontent-%COMP%] {\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 13px;\n  color: #67677a;\n  text-align: right;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%], \n.savinggoals-summary-row[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%], \n.savinggoals-summary-row[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n  background-color: #f9f9f9;\n  border-radius: 12px;\n  margin-top: 20px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.savinggoals-summary-row[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.savinggoals-summary-row[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 16px;\n  color: #67677a;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ff4d4f;\n}\n@media (max-width: 768px) {\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .goal-cards-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .add-goal-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .add-label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #149696;\n  font-weight: 500;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);\n  padding: 28px 32px 24px 32px;\n  margin-bottom: 16px;\n  min-width: 300px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 18px;\n  position: relative;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .emoji-icon[_ngcontent-%COMP%] {\n  position: static !important;\n  margin-right: 8px;\n  font-size: 1.6rem;\n  vertical-align: middle;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .pagos-title[_ngcontent-%COMP%], \n.savinggoals-summary-row[_ngcontent-%COMP%]   .servicios-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #149696;\n  flex: 1;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .pagos-total[_ngcontent-%COMP%], \n.savinggoals-summary-row[_ngcontent-%COMP%]   .servicios-total[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1acbcb;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 1rem;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  color: #444;\n  flex: 1;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .item-value[_ngcontent-%COMP%] {\n  color: #149696;\n  font-weight: 600;\n  margin-left: 12px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .item-extra[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.95rem;\n  margin-left: 12px;\n}\n@media (max-width: 1100px) {\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-main-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 24px 8px;\n  }\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-left[_ngcontent-%COMP%], \n   .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-right[_ngcontent-%COMP%] {\n    margin-top: 32px;\n  }\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-donut-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n    margin-left: 0;\n  }\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-summary-row.shifted[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n@media (max-width: 700px) {\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-donut-container[_ngcontent-%COMP%], \n   .savinggoals-summary-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], \n   .savinggoals-summary-row[_ngcontent-%COMP%]   .summary-box[_ngcontent-%COMP%] {\n    padding: 16px 8px;\n  }\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .donut-center-label[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    padding: 8px 10px;\n  }\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-summary-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-summary-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 32px 24px;\n  min-width: 220px;\n  max-width: 260px;\n  margin-left: 40px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-summary-block[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%], \n.savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-summary-block[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  text-align: center;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-summary-block[_ngcontent-%COMP%]   .add-goal-btn[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-donut-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 40px;\n}\n@media (max-width: 1100px) {\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-donut-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n  }\n  .savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-summary-block[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 24px;\n  }\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .savinggoals-buttons-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-left: 20px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .circle-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #149696;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .circle-button[_ngcontent-%COMP%]:hover {\n  background-color: #0da0a0;\n  transform: scale(1.05);\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .plus-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.savinggoals-summary-row[_ngcontent-%COMP%]   .button-label[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 14px;\n  color: #149696;\n  text-align: center;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=savinggoal-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavingGoalListComponent, [{
    type: Component,
    args: [{ selector: "app-savinggoal-list", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="savinggoals-main-container">\r
  <div class="savinggoals-content">\r
    <div class="savinggoals-header">\r
      <h2 class="page-title">Metas de Ahorro</h2>\r
      <div class="savinggoals-buttons">\r
        <div class="button-container">\r
          <button class="circle-button" [routerLink]="['/dashboard/savinggoals/new']">\r
            <img src="assets/icons/plus.png" alt="Nueva Meta" class="plus-icon" />\r
          </button>\r
          <span class="button-label">Nueva meta</span>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <!-- Lista de metas de ahorro -->\r
    <div *ngIf="savingGoals.length > 0" class="savinggoals-list">\r
      <h3 class="section-title">Mis metas de ahorro</h3>\r
      <div class="goal-cards-container">\r
        <div *ngFor="let goal of savingGoals" class="goal-card">\r
          <div class="goal-card-header">\r
            <h4 class="goal-name">{{ goal.name }}</h4>\r
            <div class="goal-actions">\r
              <button class="action-button edit" (click)="onEdit(goal)">\r
                <img src="assets/icons/gear-six.png" alt="Editar" class="action-icon" />\r
              </button>\r
              <button class="action-button delete" (click)="onDelete(goal)">\r
                <img src="assets/icons/x.png" alt="Eliminar" class="action-icon" />\r
              </button>\r
            </div>\r
          </div>\r
          <div class="goal-amounts">\r
            <div class="goal-current">Actual: S/. {{ goal.currentAmount }}</div>\r
            <div class="goal-target">Meta: S/. {{ goal.targetAmount }}</div>\r
          </div>\r
          <div class="goal-progress-bar">\r
            <div class="progress-fill" [style.width.%]="(goal.currentAmount / goal.targetAmount) * 100"></div>\r
          </div>\r
          <div class="goal-date">Fecha l\xEDmite: {{ goal.dueDate | date:'dd/MM/yyyy' }}</div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div *ngIf="savingGoals.length === 0 && !loading && !error" class="empty-state">\r
      <p>No tienes metas de ahorro. \xA1Crea una nueva!</p>\r
    </div>\r
    \r
    <div *ngIf="loading" class="loading-state">\r
      <p>Cargando metas de ahorro...</p>\r
    </div>\r
    \r
    <div *ngIf="error" class="error-state">\r
      <p>{{ error }}</p>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/savinggoals/pages/savinggoal-list/savinggoal-list.component.css */\n.savinggoals-main-container {\n  padding: 20px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.savinggoals-content {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);\n  width: 100%;\n}\n.savinggoals-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.page-title {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: #303048;\n  margin: 0;\n}\n.savinggoals-buttons {\n  display: flex;\n  gap: 20px;\n}\n.button-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n.circle-button {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #ffffff;\n  border: none;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.circle-button:hover {\n  background-color: #f5f5f5;\n  transform: translateY(-2px);\n}\n.plus-icon {\n  width: 20px;\n  height: 20px;\n}\n.button-label {\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n  color: #67677a;\n}\n.section-title {\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 18px;\n  color: #303048;\n  margin-bottom: 15px;\n}\n.savinggoals-list {\n  margin-top: 20px;\n}\n.goal-cards-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.goal-card {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 15px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.goal-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);\n}\n.goal-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.goal-name {\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 16px;\n  margin: 0;\n  color: #303048;\n}\n.goal-actions {\n  display: flex;\n  gap: 8px;\n}\n.action-button {\n  background: none;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.action-button:hover {\n  background-color: #f5f5f5;\n}\n.action-button.edit:hover {\n  background-color: #e6f7ff;\n}\n.action-button.delete:hover {\n  background-color: #fff1f0;\n}\n.action-icon {\n  width: 16px;\n  height: 16px;\n}\n.goal-amounts {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n}\n.goal-current {\n  color: #67677a;\n}\n.goal-target {\n  color: #303048;\n  font-weight: 600;\n}\n.div2 {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 25px;\n  line-height: 29.17px;\n  font-weight: 400;\n  position: absolute;\n  right: 34.5%;\n  left: 63.42%;\n  width: 2.08%;\n  bottom: 47.98%;\n  top: 49.26%;\n  height: 2.76%;\n}\n.servicios {\n  color: var(--neutral-1000, #303048);\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 400;\n  position: absolute;\n  left: 817px;\n  top: 464px;\n}\n.publicidad {\n  color: var(--neutral-1000, #303048);\n  text-align: left;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 751px;\n  top: 515px;\n}\n.rectangle-32 {\n  border-radius: 0px;\n  width: 208px;\n  height: 4px;\n  position: absolute;\n  left: 751px;\n  top: 554px;\n  overflow: visible;\n}\n.s-500 {\n  color: var(--neutral-1000, #303048);\n  text-align: right;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 984px;\n  top: 515px;\n}\n.falta-s-0 {\n  color: var(--neutral-800, #67677a);\n  text-align: right;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  position: absolute;\n  left: 985px;\n  top: 545px;\n}\n.transporte {\n  color: var(--neutral-1000, #303048);\n  text-align: left;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 751px;\n  top: 588px;\n}\n.rectangle-33 {\n  background: #1acbcb;\n  border-radius: 10px;\n  width: 194px;\n  height: 4px;\n  position: absolute;\n  left: 751px;\n  top: 627px;\n}\n.s-7002 {\n  color: var(--neutral-1000, #303048);\n  text-align: right;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 985px;\n  top: 588px;\n}\n.group-201 {\n  position: absolute;\n  inset: 0;\n}\n.servicios-cloud {\n  color: var(--neutral-1000, #303048);\n  text-align: left;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 751px;\n  top: 659px;\n}\n.rectangle-34 {\n  background: #149696;\n  border-radius: 10px;\n  width: 194px;\n  height: 4px;\n  position: absolute;\n  left: 751px;\n  top: 698px;\n}\n.s-300 {\n  color: var(--neutral-1000, #303048);\n  text-align: right;\n  font-family: "DmSans-Bold", sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 700;\n  position: absolute;\n  left: 984px;\n  top: 659px;\n}\n.falta-s-50 {\n  color: var(--neutral-800, #67677a);\n  text-align: right;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  position: absolute;\n  left: 977px;\n  top: 682px;\n}\n.falta-s-100 {\n  color: var(--neutral-800, #67677a);\n  text-align: right;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  position: absolute;\n  left: 973px;\n  top: 618px;\n}\n.rectangle-35 {\n  background: #c8f8f8;\n  border-radius: 10px;\n  width: 146px;\n  height: 4px;\n  position: absolute;\n  left: 751px;\n  top: 252px;\n}\n.circle-button {\n  width: 50px;\n  height: 50px;\n  background-color: #1b325f;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px auto;\n  position: relative;\n  top: -10px;\n}\n.plus-icon {\n  width: 24px;\n  height: 24px;\n  filter: brightness(0) invert(1);\n}\n.rectangle-30 {\n  position: absolute;\n  width: 270px;\n  height: 160px;\n  background-color: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);\n  padding: 12px;\n  box-sizing: border-box;\n  z-index: 0;\n}\n.pagos-box {\n  top: 200px;\n  left: 65%;\n}\n.servicios-box {\n  top: 600px;\n  left: 65%;\n}\n.icon-text {\n  font-size: 28px;\n  margin-bottom: 4px;\n}\n.pagos,\n.servicios {\n  font-weight: bold;\n  font-size: 18px;\n  margin-bottom: 6px;\n}\n.line-color {\n  height: 4px;\n  width: 80%;\n  margin-top: 12px;\n  border-radius: 4px;\n}\n.line-color.crema {\n  background-color: #e8d7c6;\n}\n.line-color.celeste {\n  background-color: #d3eef5;\n}\n.s-3500,\n.s-2800,\n.falta-s-600,\n.publicidad,\n.pago-membresias,\n.internet {\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n.emoji-icon {\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  background-color: transparent;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 1;\n}\n.line-color.crema {\n  width: 200px;\n  height: 4px;\n  background-color: #f1e0c5;\n  position: absolute;\n  top: 320px;\n  left: 62.5%;\n}\n.line-color.celeste {\n  width: 195px;\n  height: 4.5px;\n  background-color: #c9eaf3;\n  position: absolute;\n  top: 545px;\n  left: 62.5%;\n}\n.donut {\n  transform: rotate(-90deg);\n}\n.donut-segment {\n  fill: none;\n  stroke-linecap: round;\n}\n.alice-in-chains-man-in-the-box,\n.alice-in-chains-man-in-the-box * {\n  box-sizing: border-box;\n}\n.alice-in-chains-man-in-the-box {\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rectangle-329 {\n  background: #ffffff;\n  border-radius: 35px;\n  width: 738px;\n  height: 520px;\n  position: relative;\n}\n.icons {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 595px;\n  top: 30px;\n  overflow: visible;\n}\n.image-13 {\n  width: 420px;\n  height: 478px;\n  position: absolute;\n  left: 150px;\n  top: 20px;\n  object-fit: cover;\n  aspect-ratio: 420/478;\n}\n.group-239225 {\n  position: absolute;\n  inset: 0;\n}\n.rectangle-1303 {\n  background: #ffffff;\n  border-radius: 16px;\n  width: 19.52%;\n  height: 38.67%;\n  position: absolute;\n  right: 22.74%;\n  left: 57.74%;\n  bottom: 13.77%;\n  top: 47.56%;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.image-12 {\n  width: 310px;\n  height: 269px;\n  position: absolute;\n  left: 1140px;\n  top: 476px;\n  object-fit: cover;\n  aspect-ratio: 310/269;\n}\n.group-239214 {\n  position: absolute;\n  inset: 0;\n}\n.rectangle-1304 {\n  background: #ffffff;\n  border-radius: 16px;\n  width: 19.52%;\n  height: 29.34%;\n  position: absolute;\n  right: 22.74%;\n  left: 57.74%;\n  bottom: 54.56%;\n  top: 16.1%;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.image-11 {\n  width: 315px;\n  height: 217px;\n  position: absolute;\n  left: 1140px;\n  top: 182px;\n  object-fit: cover;\n  aspect-ratio: 315/217;\n}\n.group-239226 {\n  position: absolute;\n  inset: 0;\n}\n.rectangle-1305 {\n  background: #ffffff;\n  border-radius: 16px;\n  width: 28.04%;\n  height: 11.97%;\n  position: absolute;\n  right: 53.87%;\n  left: 18.1%;\n  bottom: 13.77%;\n  top: 74.26%;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.savinggoals-main-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 20px;\n}\n.savinggoals-content {\n  max-width: 1200px;\n  width: 100%;\n}\n.savinggoals-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  background-color: #ffffff;\n  border-radius: 16px;\n  padding: 20px 30px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.page-title {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 28px;\n  color: #303048;\n  margin: 0;\n}\n.savinggoals-buttons {\n  display: flex;\n  gap: 20px;\n}\n.button-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.circle-button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #149696;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n}\n.circle-button:hover {\n  background-color: #0da0a0;\n  transform: scale(1.05);\n}\n.plus-icon {\n  width: 20px;\n  height: 20px;\n}\n.button-label {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 14px;\n  color: #149696;\n  text-align: center;\n  margin-top: 5px;\n}\n.savinggoals-list {\n  margin-top: 20px;\n}\n.section-title {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  color: #303048;\n  margin-bottom: 20px;\n}\n.goal-cards-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.goal-card {\n  background-color: #ffffff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.goal-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.goal-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.goal-name {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 18px;\n  color: #303048;\n  margin: 0;\n}\n.goal-actions {\n  display: flex;\n  gap: 10px;\n}\n.action-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  transition: background-color 0.2s ease;\n}\n.action-button.edit:hover {\n  background-color: #e0ffff;\n}\n.action-button.delete:hover {\n  background-color: #ffeeee;\n}\n.action-icon {\n  width: 16px;\n  height: 16px;\n}\n.goal-amounts {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-family: "DmSans-Regular", sans-serif;\n}\n.goal-current {\n  color: #149696;\n  font-weight: bold;\n}\n.goal-target {\n  color: #303048;\n}\n.goal-progress-bar {\n  height: 8px;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background-color: #149696;\n  border-radius: 4px;\n}\n.goal-date {\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n  color: #67677a;\n  text-align: right;\n}\n.empty-state,\n.loading-state,\n.error-state {\n  text-align: center;\n  padding: 40px;\n  background-color: #ffffff;\n  border-radius: 12px;\n  margin-top: 30px;\n}\n.empty-state p {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 18px;\n  color: #67677a;\n}\n.loading-state p {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 18px;\n  color: #149696;\n}\n.error-state p {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 18px;\n  color: #ff4242;\n}\n.savinggoals-main-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 32px 40px 32px 0;\n  box-sizing: border-box;\n  min-height: 100vh;\n  background: #f3f2ea;\n  margin-left: 260px;\n}\n.savinggoals-left {\n  flex: 1 1 60%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-right: 32px;\n  width: 100%;\n}\n.savinggoals-donut-row {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 40px;\n  width: 100%;\n  margin-left: 0;\n}\n.savinggoals-donut-container {\n  background: #fff;\n  border-radius: 24px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);\n  padding: 32px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  margin-bottom: 32px;\n  min-width: 340px;\n  max-width: 400px;\n  font-family:\n    "Poppins-Regular",\n    "DmSans-Regular",\n    Arial,\n    sans-serif;\n  margin-left: 0;\n}\n.donut-chart-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n  min-width: 260px;\n  min-height: 260px;\n}\n.donut-center-label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2rem;\n  font-family:\n    "Poppins-Regular",\n    Arial,\n    sans-serif;\n  font-weight: 700;\n  color: #149696;\n  background: #fff;\n  border-radius: 50%;\n  padding: 18px 28px;\n  box-shadow: 0 2px 8px rgba(26, 203, 203, 0.08);\n  text-align: center;\n}\n.donut-legend-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 32px;\n  margin-top: 18px;\n  margin-bottom: 8px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  font-size: 1.1rem;\n  color: #222;\n  gap: 8px;\n  font-family:\n    "Poppins-Regular",\n    Arial,\n    sans-serif;\n}\n.legend-dot {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 6px;\n  border: 2px solid #e0e0e0;\n}\n.new-goal-btn-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n  margin-left: 0;\n  margin-top: 40px;\n}\n.savinggoals-summary-row.shifted {\n  justify-content: flex-start;\n}\n@media (max-width: 1100px) {\n  .savinggoals-summary-row.shifted {\n    margin-left: 0;\n    justify-content: center;\n  }\n}\n.savinggoals-summary-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 32px;\n}\n.savinggoals-summary-row .goal-progress-bar {\n  width: 100%;\n  height: 8px;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.savinggoals-summary-row .progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #6a43dd 0%,\n      #8b5cf6 100%);\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.savinggoals-summary-row .goal-date {\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 13px;\n  color: #67677a;\n  text-align: right;\n}\n.savinggoals-summary-row .empty-state,\n.savinggoals-summary-row .loading-state,\n.savinggoals-summary-row .error-state {\n  padding: 30px;\n  text-align: center;\n  background-color: #f9f9f9;\n  border-radius: 12px;\n  margin-top: 20px;\n}\n.savinggoals-summary-row .empty-state p,\n.savinggoals-summary-row .loading-state p,\n.savinggoals-summary-row .error-state p {\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 16px;\n  color: #67677a;\n}\n.savinggoals-summary-row .error-state p {\n  color: #ff4d4f;\n}\n@media (max-width: 768px) {\n  .savinggoals-summary-row .savinggoals-header {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .savinggoals-summary-row .goal-cards-container {\n    grid-template-columns: 1fr;\n  }\n}\n.savinggoals-summary-row .add-goal-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.savinggoals-summary-row .add-label {\n  font-size: 0.95rem;\n  color: #149696;\n  font-weight: 500;\n}\n.savinggoals-summary-row .card {\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);\n  padding: 28px 32px 24px 32px;\n  margin-bottom: 16px;\n  min-width: 300px;\n}\n.savinggoals-summary-row .card-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 18px;\n  position: relative;\n}\n.savinggoals-summary-row .emoji-icon {\n  position: static !important;\n  margin-right: 8px;\n  font-size: 1.6rem;\n  vertical-align: middle;\n}\n.savinggoals-summary-row .pagos-title,\n.savinggoals-summary-row .servicios-title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #149696;\n  flex: 1;\n}\n.savinggoals-summary-row .pagos-total,\n.savinggoals-summary-row .servicios-total {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1acbcb;\n}\n.savinggoals-summary-row .card-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 1rem;\n}\n.savinggoals-summary-row .card-item:last-child {\n  border-bottom: none;\n}\n.savinggoals-summary-row .item-label {\n  color: #444;\n  flex: 1;\n}\n.savinggoals-summary-row .item-value {\n  color: #149696;\n  font-weight: 600;\n  margin-left: 12px;\n}\n.savinggoals-summary-row .item-extra {\n  color: #888;\n  font-size: 0.95rem;\n  margin-left: 12px;\n}\n@media (max-width: 1100px) {\n  .savinggoals-summary-row .savinggoals-main-container {\n    flex-direction: column;\n    padding: 24px 8px;\n  }\n  .savinggoals-summary-row .savinggoals-left,\n  .savinggoals-summary-row .savinggoals-right {\n    width: 100%;\n    margin: 0;\n  }\n  .savinggoals-summary-row .savinggoals-right {\n    margin-top: 32px;\n  }\n  .savinggoals-summary-row .savinggoals-donut-row {\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n    margin-left: 0;\n  }\n  .savinggoals-summary-row .savinggoals-summary-row.shifted {\n    margin-left: 0;\n  }\n}\n@media (max-width: 700px) {\n  .savinggoals-summary-row .savinggoals-donut-container,\n  .savinggoals-summary-row .card,\n  .savinggoals-summary-row .summary-box {\n    padding: 16px 8px;\n  }\n  .savinggoals-summary-row .donut-center-label {\n    font-size: 1.1rem;\n    padding: 8px 10px;\n  }\n  .savinggoals-summary-row .savinggoals-summary-row {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.savinggoals-summary-row .savinggoals-summary-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 32px 24px;\n  min-width: 220px;\n  max-width: 260px;\n  margin-left: 40px;\n}\n.savinggoals-summary-row .savinggoals-summary-block .summary-label,\n.savinggoals-summary-row .savinggoals-summary-block .summary-value {\n  margin-bottom: 0;\n  text-align: center;\n}\n.savinggoals-summary-row .savinggoals-summary-block .add-goal-btn {\n  margin-top: 12px;\n}\n.savinggoals-summary-row .savinggoals-donut-row {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 40px;\n}\n@media (max-width: 1100px) {\n  .savinggoals-summary-row .savinggoals-donut-row {\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n  }\n  .savinggoals-summary-row .savinggoals-summary-block {\n    margin-left: 0;\n    margin-top: 24px;\n  }\n}\n.savinggoals-summary-row .savinggoals-buttons-vertical {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-left: 20px;\n}\n.savinggoals-summary-row .button-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.savinggoals-summary-row .circle-button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #149696;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n}\n.savinggoals-summary-row .circle-button:hover {\n  background-color: #0da0a0;\n  transform: scale(1.05);\n}\n.savinggoals-summary-row .plus-icon {\n  width: 20px;\n  height: 20px;\n}\n.savinggoals-summary-row .button-label {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 14px;\n  color: #149696;\n  text-align: center;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=savinggoal-list.component.css.map */\n'] }]
  }], () => [{ type: SavingGoalService }, { type: Router }, { type: SnackbarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SavingGoalListComponent, { className: "SavingGoalListComponent", filePath: "src/app/features/savinggoals/pages/savinggoal-list/savinggoal-list.component.ts", lineNumber: 15 });
})();

// src/app/features/savinggoals/pages/savinggoal-form/savinggoal-form.component.ts
function SavingGoalFormComponent_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function SavingGoalFormComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function SavingGoalFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "form", 9, 0);
    \u0275\u0275listener("ngSubmit", function SavingGoalFormComponent_div_10_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCreateForm());
    });
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Nueva Meta de Ahorro");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SavingGoalFormComponent_div_10_div_5_Template, 2, 0, "div", 10)(6, SavingGoalFormComponent_div_10_div_6_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(7, "div", 12)(8, "label", 13);
    \u0275\u0275text(9, "Nombre de la meta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function SavingGoalFormComponent_div_10_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.createGoal.name, $event) || (ctx_r1.createGoal.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 12)(12, "label", 15);
    \u0275\u0275text(13, "Monto objetivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function SavingGoalFormComponent_div_10_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.createGoal.targetAmount, $event) || (ctx_r1.createGoal.targetAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "label", 17);
    \u0275\u0275text(17, "Fecha l\xEDmite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function SavingGoalFormComponent_div_10_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.createGoal.dueDate, $event) || (ctx_r1.createGoal.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 19)(20, "button", 20);
    \u0275\u0275text(21, "Crear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 21);
    \u0275\u0275listener("click", function SavingGoalFormComponent_div_10_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(23, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.createGoal.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.createGoal.targetAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.createGoal.dueDate);
  }
}
function SavingGoalFormComponent_div_11_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function SavingGoalFormComponent_div_11_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function SavingGoalFormComponent_div_11_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, ' No tienes metas de ahorro creadas. Dir\xEDgete a la pesta\xF1a "Crear" para agregar una nueva meta. ');
    \u0275\u0275elementEnd();
  }
}
function SavingGoalFormComponent_div_11_div_1_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 32);
    \u0275\u0275listener("click", function SavingGoalFormComponent_div_11_div_1_ul_6_li_1_Template_li_click_0_listener() {
      const goal_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectGoalToEdit(goal_r4));
    });
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 38)(10, "i", 39);
    \u0275\u0275text(11, "\u270E");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const goal_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(goal_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/. ", goal_r4.currentAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ S/. ", goal_r4.targetAmount);
  }
}
function SavingGoalFormComponent_div_11_div_1_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, SavingGoalFormComponent_div_11_div_1_ul_6_li_1_Template, 12, 3, "li", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.savingGoals);
  }
}
function SavingGoalFormComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Editar Meta de Ahorro");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SavingGoalFormComponent_div_11_div_1_div_3_Template, 2, 0, "div", 10)(4, SavingGoalFormComponent_div_11_div_1_div_4_Template, 2, 1, "div", 11)(5, SavingGoalFormComponent_div_11_div_1_div_5_Template, 2, 0, "div", 28)(6, SavingGoalFormComponent_div_11_div_1_ul_6_Template, 2, 1, "ul", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingGoals.length === 0 && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingGoals.length > 0);
  }
}
function SavingGoalFormComponent_div_11_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function SavingGoalFormComponent_div_11_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function SavingGoalFormComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "form", 9, 1);
    \u0275\u0275listener("ngSubmit", function SavingGoalFormComponent_div_11_div_2_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitEditForm());
    });
    \u0275\u0275elementStart(3, "div", 41)(4, "h2");
    \u0275\u0275text(5, "Editar Meta de Ahorro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42)(7, "span");
    \u0275\u0275text(8, "Est\xE1s editando: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(11, SavingGoalFormComponent_div_11_div_2_div_11_Template, 2, 0, "div", 10)(12, SavingGoalFormComponent_div_11_div_2_div_12_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(13, "div", 12)(14, "label", 43);
    \u0275\u0275text(15, "Nombre de la meta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SavingGoalFormComponent_div_11_div_2_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editGoal.name, $event) || (ctx_r1.editGoal.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 12)(18, "label", 45);
    \u0275\u0275text(19, "Monto objetivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function SavingGoalFormComponent_div_11_div_2_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editGoal.targetAmount, $event) || (ctx_r1.editGoal.targetAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 12)(22, "label", 47);
    \u0275\u0275text(23, "Fecha l\xEDmite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SavingGoalFormComponent_div_11_div_2_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editGoal.dueDate, $event) || (ctx_r1.editGoal.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 49)(26, "div", 50)(27, "label");
    \u0275\u0275text(28, "Monto actual:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 51);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 52)(32, "div", 53);
    \u0275\u0275element(33, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 55);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 19)(38, "button", 20);
    \u0275\u0275text(39, "Actualizar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 21);
    \u0275\u0275listener("click", function SavingGoalFormComponent_div_11_div_2_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(41, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedGoal.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editGoal.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editGoal.targetAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editGoal.dueDate);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/. ", ctx_r1.selectedGoal.currentAmount);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.selectedGoal.currentAmount / ctx_r1.selectedGoal.targetAmount * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(36, 10, ctx_r1.selectedGoal.currentAmount / ctx_r1.selectedGoal.targetAmount * 100, "1.0-0"), "%");
  }
}
function SavingGoalFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, SavingGoalFormComponent_div_11_div_1_Template, 7, 4, "div", 24)(2, SavingGoalFormComponent_div_11_div_2_Template, 42, 13, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedGoal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGoal);
  }
}
function SavingGoalFormComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function SavingGoalFormComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function SavingGoalFormComponent_div_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, ' No tienes metas de ahorro creadas. Dir\xEDgete a la pesta\xF1a "Crear" para agregar una nueva meta. ');
    \u0275\u0275elementEnd();
  }
}
function SavingGoalFormComponent_div_12_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 60)(1, "div", 33)(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 61);
    \u0275\u0275listener("click", function SavingGoalFormComponent_div_12_ul_7_li_1_Template_button_click_9_listener() {
      const goal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(goal_r7));
    });
    \u0275\u0275element(10, "img", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const goal_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(goal_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/. ", goal_r7.currentAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ S/. ", goal_r7.targetAmount);
  }
}
function SavingGoalFormComponent_div_12_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 58);
    \u0275\u0275template(1, SavingGoalFormComponent_div_12_ul_7_li_1_Template, 11, 3, "li", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.savingGoals);
  }
}
function SavingGoalFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 56)(2, "h2");
    \u0275\u0275text(3, "Eliminar Meta de Ahorro");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SavingGoalFormComponent_div_12_div_4_Template, 2, 0, "div", 10)(5, SavingGoalFormComponent_div_12_div_5_Template, 2, 1, "div", 11)(6, SavingGoalFormComponent_div_12_div_6_Template, 2, 0, "div", 28)(7, SavingGoalFormComponent_div_12_ul_7_Template, 2, 1, "ul", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingGoals.length === 0 && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingGoals.length > 0);
  }
}
var SavingGoalFormComponent = class _SavingGoalFormComponent {
  router;
  route;
  savingGoalService;
  snackbarService;
  // Control de pestañas
  activeTab = "create";
  // Estados generales
  loading = false;
  error = null;
  savingGoals = [];
  // Estado para creación
  createGoal = {
    name: "",
    targetAmount: 0,
    dueDate: this.getTomorrowDate()
  };
  // Estado para edición
  selectedGoal = null;
  editGoal = {
    name: "",
    targetAmount: 0,
    dueDate: this.getTomorrowDate()
  };
  constructor(router, route, savingGoalService, snackbarService) {
    this.router = router;
    this.route = route;
    this.savingGoalService = savingGoalService;
    this.snackbarService = snackbarService;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.activeTab = "edit";
        this.loadGoalData(Number(id));
      }
    });
    this.loadSavingGoals();
  }
  // Cambiar entre pestañas
  switchTab(tab) {
    this.activeTab = tab;
    this.selectedGoal = null;
    this.error = null;
    if (tab === "edit" || tab === "delete") {
      this.loadSavingGoals();
    }
  }
  // Cargar todas las metas
  loadSavingGoals() {
    this.loading = true;
    this.savingGoalService.listSavingGoals().subscribe({
      next: (goals) => {
        this.savingGoals = goals;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading goals:", err);
        this.error = "Error al cargar las metas de ahorro. Por favor, intenta nuevamente m\xE1s tarde.";
        this.loading = false;
      }
    });
  }
  // Cargar datos de una meta específica
  loadGoalData(goalId) {
    this.loading = true;
    this.savingGoalService.listSavingGoals().subscribe({
      next: (goals) => {
        const goalToEdit = goals.find((g) => g.id === goalId);
        if (goalToEdit) {
          this.selectedGoal = goalToEdit;
          this.editGoal = {
            name: goalToEdit.name,
            targetAmount: goalToEdit.targetAmount,
            dueDate: goalToEdit.dueDate
          };
        } else {
          this.error = "No se encontr\xF3 la meta de ahorro";
          setTimeout(() => this.router.navigate(["/dashboard/savinggoals"]), 2e3);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading goal:", err);
        this.error = "Error al cargar los datos de la meta";
        this.loading = false;
      }
    });
  }
  // Seleccionar una meta para editar
  selectGoalToEdit(goal) {
    this.selectedGoal = goal;
    this.editGoal = {
      name: goal.name,
      targetAmount: goal.targetAmount,
      dueDate: goal.dueDate
    };
  }
  // Cancelar la edición
  cancelEdit() {
    this.selectedGoal = null;
    this.editGoal = {
      name: "",
      targetAmount: 0,
      dueDate: ""
    };
  }
  // Enviar formulario de creación
  submitCreateForm() {
    if (!this.validateGoal(this.createGoal))
      return;
    this.loading = true;
    this.savingGoalService.addSavingGoal(this.createGoal).subscribe({
      next: () => {
        this.snackbarService.showSnackbar("Meta creada", "La meta de ahorro se ha creado exitosamente", "assets/icons/success.png");
        this.router.navigate(["/dashboard/savinggoals"]);
      },
      error: (err) => {
        console.error("Error creating goal:", err);
        this.error = "Error al crear la meta de ahorro";
        this.loading = false;
        this.snackbarService.showSnackbar("Error", "No se pudo crear la meta de ahorro", "assets/icons/error.png");
      }
    });
  }
  // Enviar formulario de edición
  submitEditForm() {
    if (!this.selectedGoal)
      return;
    if (!this.validateGoal(this.editGoal))
      return;
    this.loading = true;
    const updateRequest = {
      targetAmount: this.editGoal.targetAmount,
      dueDate: this.editGoal.dueDate
    };
    this.savingGoalService.updateSavingGoal(this.selectedGoal.id, updateRequest).subscribe({
      next: () => {
        this.snackbarService.showSnackbar("Meta actualizada", "La meta de ahorro se ha actualizado exitosamente", "assets/icons/success.png");
        this.router.navigate(["/dashboard/savinggoals"]);
      },
      error: (err) => {
        console.error("Error updating goal:", err);
        this.error = "Error al actualizar la meta de ahorro";
        this.loading = false;
        this.snackbarService.showSnackbar("Error", "No se pudo actualizar la meta de ahorro", "assets/icons/error.png");
      }
    });
  }
  // Confirmar eliminación
  confirmDelete(goal) {
    if (confirm(`\xBFEst\xE1s seguro de que deseas eliminar la meta "${goal.name}"?`)) {
      this.loading = true;
      this.savingGoalService.deleteSavingGoal(goal.id).subscribe({
        next: () => {
          this.snackbarService.showSnackbar("Meta eliminada", "La meta de ahorro se ha eliminado exitosamente", "assets/icons/success.png");
          this.loadSavingGoals();
          this.loading = false;
        },
        error: (err) => {
          console.error("Error deleting goal:", err);
          this.error = "Error al eliminar la meta de ahorro";
          this.loading = false;
          this.snackbarService.showSnackbar("Error", "No se pudo eliminar la meta de ahorro", "assets/icons/error.png");
        }
      });
    }
  }
  // Validar meta de ahorro
  validateGoal(goal) {
    const today = /* @__PURE__ */ new Date();
    const dueDate = new Date(goal.dueDate);
    if (goal.targetAmount <= 0) {
      this.snackbarService.showSnackbar("Datos incorrectos", "No se permiten valores cero o negativos para el monto objetivo", "assets/icons/warning.png");
      return false;
    }
    if (dueDate <= today) {
      this.snackbarService.showSnackbar("Fecha incorrecta", "La fecha l\xEDmite debe ser futura", "assets/icons/warning.png");
      return false;
    }
    return true;
  }
  // Obtener la fecha de mañana en formato YYYY-MM-DD para el input date
  getTomorrowDate() {
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }
  // Regresar a la página anterior
  goBack() {
    this.router.navigate(["/dashboard/savinggoals"]);
  }
  static \u0275fac = function SavingGoalFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SavingGoalFormComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SavingGoalService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SavingGoalFormComponent, selectors: [["app-savinggoal-form"]], decls: 13, vars: 9, consts: [["createForm", "ngForm"], ["editForm", "ngForm"], [1, "savinggoal-form-container"], [1, "savinggoal-form-wrapper"], [1, "form-card"], [1, "tab-navigation"], [3, "click"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [1, "goal-form", 3, "ngSubmit"], ["class", "loading-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "Ej: Viaje a Europa", "required", "", 3, "ngModelChange", "ngModel"], ["for", "targetAmount"], ["type", "number", "id", "targetAmount", "name", "targetAmount", "placeholder", "0.00", "required", "", 3, "ngModelChange", "ngModel"], ["for", "dueDate"], ["type", "date", "id", "dueDate", "name", "dueDate", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "submit", 1, "btn-primary"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "loading-message"], [1, "error-message"], ["class", "goals-list", 4, "ngIf"], ["class", "edit-form", 4, "ngIf"], [1, "goals-list"], [1, "edit-goal-title"], ["class", "empty-list-message", 4, "ngIf"], [4, "ngIf"], [1, "empty-list-message"], ["class", "goal-list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "goal-list-item", 3, "click"], [1, "goal-info"], [1, "goal-list-name"], [1, "goal-list-amount"], [1, "current-amount"], [1, "target-amount"], [1, "goal-action-hint"], [1, "hint-icon"], [1, "edit-form"], [1, "form-header"], [1, "edit-meta"], ["for", "editName"], ["type", "text", "id", "editName", "name", "name", "placeholder", "Ej: Viaje a Europa", "required", "", "disabled", "", 3, "ngModelChange", "ngModel"], ["for", "editTargetAmount"], ["type", "number", "id", "editTargetAmount", "name", "targetAmount", "placeholder", "0.00", "required", "", 3, "ngModelChange", "ngModel"], ["for", "editDueDate"], ["type", "date", "id", "editDueDate", "name", "dueDate", "required", "", 3, "ngModelChange", "ngModel"], [1, "current-info"], [1, "current-amount-info"], [1, "current-value"], [1, "progress-indicator"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-percentage"], [1, "delete-section"], ["class", "delete-list", 4, "ngIf"], [1, "delete-list"], ["class", "goal-list-item", 4, "ngFor", "ngForOf"], [1, "goal-list-item"], ["type", "button", 1, "delete-button", 3, "click"], ["src", "assets/icons/x.png", "alt", "Eliminar", 1, "delete-icon"]], template: function SavingGoalFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "button", 6);
      \u0275\u0275listener("click", function SavingGoalFormComponent_Template_button_click_4_listener() {
        return ctx.switchTab("create");
      });
      \u0275\u0275text(5, "Crear");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function SavingGoalFormComponent_Template_button_click_6_listener() {
        return ctx.switchTab("edit");
      });
      \u0275\u0275text(7, "Editar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275listener("click", function SavingGoalFormComponent_Template_button_click_8_listener() {
        return ctx.switchTab("delete");
      });
      \u0275\u0275text(9, "Eliminar");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, SavingGoalFormComponent_div_10_Template, 24, 5, "div", 7)(11, SavingGoalFormComponent_div_11_Template, 3, 2, "div", 7)(12, SavingGoalFormComponent_div_12_Template, 8, 4, "div", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "create");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "edit");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "delete");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "create");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "edit");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "delete");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ['\n\n@font-face {\n  font-family: "PalanquinDark-Bold";\n  src: url(/assets/fonts/PalanquinDark-Bold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-Medium";\n  src: url(/assets/fonts/PalanquinDark-Medium.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-Regular";\n  src: url(/assets/fonts/PalanquinDark-Regular.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-SemiBold";\n  src: url(/assets/fonts/PalanquinDark-SemiBold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Poppins-Regular";\n  src: url(/assets/fonts/Poppins-Regular.ttf) format("truetype");\n}\n.savinggoal-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: calc(100vh - 100px);\n  padding: 20px;\n}\n.savinggoal-form-wrapper[_ngcontent-%COMP%] {\n  max-width: 700px;\n  width: 100%;\n}\n.form-card[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 30px;\n}\n.tab-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.tab-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  padding: 12px 20px;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 16px;\n  color: #67677a;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.tab-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #149696;\n}\n.tab-navigation[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #149696;\n  font-weight: bold;\n}\n.tab-navigation[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #149696;\n  border-radius: 3px 3px 0 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.goal-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.edit-goal-title[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  color: #303048;\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.edit-meta[_ngcontent-%COMP%] {\n  background-color: #e9f7f7;\n  padding: 10px 15px;\n  border-radius: 8px;\n  color: #149696;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14px;\n  display: inline-block;\n}\n.loading-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #149696;\n  margin: 10px 0;\n  font-weight: bold;\n}\n.error-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ff4242;\n  margin: 10px 0;\n  font-weight: bold;\n  background-color: #ffeeee;\n  padding: 8px;\n  border-radius: 4px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 16px;\n  color: #303048;\n  margin-bottom: 8px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 16px;\n  color: #303048;\n  transition: border-color 0.2s ease;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #149696;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f8f8;\n  color: #67677a;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 36px;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  min-width: 120px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #149696;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0d8585;\n  transform: translateY(-2px);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: #303048;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #d0d0d0;\n}\n.goals-list[_ngcontent-%COMP%], \n.delete-section[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.edit-form[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.empty-list-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #67677a;\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 16px;\n  margin: 40px 0;\n}\n.goal-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  margin-bottom: 10px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.goal-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #e9f7f7;\n  transform: translateY(-3px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  border-color: #149696;\n}\n.goal-list-name[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 16px;\n  color: #303048;\n}\n.goal-list-amount[_ngcontent-%COMP%] {\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14px;\n  margin-top: 4px;\n}\n.current-amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #149696;\n}\n.target-amount[_ngcontent-%COMP%] {\n  color: #67677a;\n}\n.goal-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.goal-action-hint[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: #e0f5f5;\n  color: #149696;\n  margin-left: 12px;\n  transition: all 0.2s ease;\n}\n.goal-list-item[_ngcontent-%COMP%]:hover   .goal-action-hint[_ngcontent-%COMP%] {\n  background-color: #149696;\n  color: white;\n  transform: scale(1.1);\n}\n.hint-icon[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 18px;\n}\n.delete-button[_ngcontent-%COMP%] {\n  background-color: #ffeeee;\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-left: 12px;\n}\n.delete-button[_ngcontent-%COMP%]:hover {\n  background-color: #ff4242;\n  transform: rotate(90deg);\n}\n.delete-button[_ngcontent-%COMP%]:hover   .delete-icon[_ngcontent-%COMP%] {\n  filter: brightness(5);\n}\n.delete-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.edit-note[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 14px;\n  color: #67677a;\n  background-color: #f5f5f5;\n  padding: 10px;\n  border-radius: 8px;\n}\n.current-info[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 24px;\n}\n.current-amount-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.current-amount-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 14px;\n  color: #67677a;\n}\n.current-value[_ngcontent-%COMP%] {\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  color: #149696;\n}\n.progress-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background-color: #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #149696 0%,\n      #4cc1c1 100%);\n  border-radius: 4px;\n}\n.progress-percentage[_ngcontent-%COMP%] {\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14px;\n  color: #303048;\n  min-width: 40px;\n  text-align: right;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.delete-list[_ngcontent-%COMP%]   .goal-list-item[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.delete-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  color: #303048;\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=savinggoal-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavingGoalFormComponent, [{
    type: Component,
    args: [{ selector: "app-savinggoal-form", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<!-- Contenedor principal del formulario de meta de ahorro, limpio y enfocado -->\r
<div class="savinggoal-form-container">\r
  <div class="savinggoal-form-wrapper">\r
    <div class="form-card">\r
      <div class="tab-navigation">\r
        <button [class.active]="activeTab === 'create'" (click)="switchTab('create')">Crear</button>\r
        <button [class.active]="activeTab === 'edit'" (click)="switchTab('edit')">Editar</button>\r
        <button [class.active]="activeTab === 'delete'" (click)="switchTab('delete')">Eliminar</button>\r
      </div>\r
      \r
      <!-- TAB: CREAR META -->\r
      <div *ngIf="activeTab === 'create'" class="tab-content">\r
        <form (ngSubmit)="submitCreateForm()" #createForm="ngForm" class="goal-form">\r
          <h2>Nueva Meta de Ahorro</h2>\r
          \r
          <div *ngIf="loading" class="loading-message">Cargando...</div>\r
          <div *ngIf="error" class="error-message">{{ error }}</div>\r
          \r
          <div class="form-group">\r
            <label for="name">Nombre de la meta</label>\r
            <input type="text" id="name" [(ngModel)]="createGoal.name" name="name" placeholder="Ej: Viaje a Europa" required />\r
          </div>\r
          \r
          <div class="form-group">\r
            <label for="targetAmount">Monto objetivo</label>\r
            <input type="number" id="targetAmount" [(ngModel)]="createGoal.targetAmount" name="targetAmount" placeholder="0.00" required />\r
          </div>\r
          \r
          <div class="form-group">\r
            <label for="dueDate">Fecha l\xEDmite</label>\r
            <input type="date" id="dueDate" [(ngModel)]="createGoal.dueDate" name="dueDate" required />\r
          </div>\r
          \r
          <div class="form-actions">\r
            <button type="submit" class="btn-primary">Crear</button>\r
            <button type="button" class="btn-secondary" (click)="goBack()">Cancelar</button>\r
          </div>\r
        </form>\r
      </div>\r
      \r
      <!-- TAB: EDITAR META -->\r
      <div *ngIf="activeTab === 'edit'" class="tab-content">\r
        <!-- Lista de metas para seleccionar -->\r
        <div *ngIf="!selectedGoal" class="goals-list">\r
          <h2 class="edit-goal-title">Editar Meta de Ahorro</h2>\r
          \r
          <div *ngIf="loading" class="loading-message">Cargando...</div>\r
          <div *ngIf="error" class="error-message">{{ error }}</div>\r
          \r
          <div *ngIf="savingGoals.length === 0 && !loading" class="empty-list-message">\r
            No tienes metas de ahorro creadas. Dir\xEDgete a la pesta\xF1a "Crear" para agregar una nueva meta.\r
          </div>\r
          \r
          <ul *ngIf="savingGoals.length > 0">\r
            <li *ngFor="let goal of savingGoals" (click)="selectGoalToEdit(goal)" class="goal-list-item">\r
              <div class="goal-info">\r
                <div class="goal-list-name">{{ goal.name }}</div>\r
                <div class="goal-list-amount">\r
                  <span class="current-amount">S/. {{ goal.currentAmount }}</span>\r
                  <span class="target-amount">/ S/. {{ goal.targetAmount }}</span>\r
                </div>\r
              </div>\r
              <div class="goal-action-hint">\r
                <i class="hint-icon">\u270E</i>\r
              </div>\r
            </li>\r
          </ul>\r
        </div>\r
        \r
        <!-- Formulario de edici\xF3n -->\r
        <div *ngIf="selectedGoal" class="edit-form">\r
          <form (ngSubmit)="submitEditForm()" #editForm="ngForm" class="goal-form">\r
            <div class="form-header">\r
              <h2>Editar Meta de Ahorro</h2>\r
              <div class="edit-meta">\r
                <span>Est\xE1s editando: <strong>{{ selectedGoal.name }}</strong></span>\r
              </div>\r
            </div>\r
            \r
            <div *ngIf="loading" class="loading-message">Cargando...</div>\r
            <div *ngIf="error" class="error-message">{{ error }}</div>\r
            \r
            <div class="form-group">\r
              <label for="editName">Nombre de la meta</label>\r
              <input type="text" id="editName" [(ngModel)]="editGoal.name" name="name" placeholder="Ej: Viaje a Europa" required disabled />\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="editTargetAmount">Monto objetivo</label>\r
              <input type="number" id="editTargetAmount" [(ngModel)]="editGoal.targetAmount" name="targetAmount" placeholder="0.00" required />\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="editDueDate">Fecha l\xEDmite</label>\r
              <input type="date" id="editDueDate" [(ngModel)]="editGoal.dueDate" name="dueDate" required />\r
            </div>\r
            \r
            <div class="current-info">\r
              <div class="current-amount-info">\r
                <label>Monto actual:</label>\r
                <div class="current-value">S/. {{ selectedGoal.currentAmount }}</div>\r
              </div>\r
              <div class="progress-indicator">\r
                <div class="progress-bar">\r
                  <div class="progress-fill" [style.width.%]="(selectedGoal.currentAmount / selectedGoal.targetAmount) * 100"></div>\r
                </div>\r
                <div class="progress-percentage">{{ (selectedGoal.currentAmount / selectedGoal.targetAmount) * 100 | number:'1.0-0' }}%</div>\r
              </div>\r
            </div>\r
            \r
            <div class="form-actions">\r
              <button type="submit" class="btn-primary">Actualizar</button>\r
              <button type="button" class="btn-secondary" (click)="cancelEdit()">Cancelar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      \r
      <!-- TAB: ELIMINAR META -->\r
      <div *ngIf="activeTab === 'delete'" class="tab-content">\r
        <div class="delete-section">\r
          <h2>Eliminar Meta de Ahorro</h2>\r
          \r
          <div *ngIf="loading" class="loading-message">Cargando...</div>\r
          <div *ngIf="error" class="error-message">{{ error }}</div>\r
          \r
          <div *ngIf="savingGoals.length === 0 && !loading" class="empty-list-message">\r
            No tienes metas de ahorro creadas. Dir\xEDgete a la pesta\xF1a "Crear" para agregar una nueva meta.\r
          </div>\r
          \r
          <ul *ngIf="savingGoals.length > 0" class="delete-list">\r
            <li *ngFor="let goal of savingGoals" class="goal-list-item">\r
              <div class="goal-info">\r
                <div class="goal-list-name">{{ goal.name }}</div>\r
                <div class="goal-list-amount">\r
                  <span class="current-amount">S/. {{ goal.currentAmount }}</span>\r
                  <span class="target-amount">/ S/. {{ goal.targetAmount }}</span>\r
                </div>\r
              </div>\r
              <button type="button" class="delete-button" (click)="confirmDelete(goal)">\r
                <img src="assets/icons/x.png" alt="Eliminar" class="delete-icon" />\r
              </button>\r
            </li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ['/* src/app/features/savinggoals/pages/savinggoal-form/savinggoal-form.component.css */\n@font-face {\n  font-family: "PalanquinDark-Bold";\n  src: url(/assets/fonts/PalanquinDark-Bold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-Medium";\n  src: url(/assets/fonts/PalanquinDark-Medium.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-Regular";\n  src: url(/assets/fonts/PalanquinDark-Regular.ttf) format("truetype");\n}\n@font-face {\n  font-family: "PalanquinDark-SemiBold";\n  src: url(/assets/fonts/PalanquinDark-SemiBold.ttf) format("truetype");\n}\n@font-face {\n  font-family: "Poppins-Regular";\n  src: url(/assets/fonts/Poppins-Regular.ttf) format("truetype");\n}\n.savinggoal-form-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: calc(100vh - 100px);\n  padding: 20px;\n}\n.savinggoal-form-wrapper {\n  max-width: 700px;\n  width: 100%;\n}\n.form-card {\n  background-color: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 30px;\n}\n.tab-navigation {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.tab-navigation button {\n  flex: 1;\n  background: none;\n  border: none;\n  padding: 12px 20px;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 16px;\n  color: #67677a;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.tab-navigation button:hover {\n  color: #149696;\n}\n.tab-navigation button.active {\n  color: #149696;\n  font-weight: bold;\n}\n.tab-navigation button.active::after {\n  content: "";\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #149696;\n  border-radius: 3px 3px 0 0;\n}\n.tab-content {\n  min-height: 400px;\n}\n.goal-form h2,\n.edit-goal-title {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  color: #303048;\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n.form-header {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.form-header h2 {\n  margin-bottom: 10px;\n}\n.edit-meta {\n  background-color: #e9f7f7;\n  padding: 10px 15px;\n  border-radius: 8px;\n  color: #149696;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14px;\n  display: inline-block;\n}\n.loading-message {\n  text-align: center;\n  color: #149696;\n  margin: 10px 0;\n  font-weight: bold;\n}\n.error-message {\n  text-align: center;\n  color: #ff4242;\n  margin: 10px 0;\n  font-weight: bold;\n  background-color: #ffeeee;\n  padding: 8px;\n  border-radius: 4px;\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-group label {\n  display: block;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 16px;\n  color: #303048;\n  margin-bottom: 8px;\n}\n.form-group input {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 16px;\n  color: #303048;\n  transition: border-color 0.2s ease;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #149696;\n}\n.form-group input:disabled {\n  background-color: #f8f8f8;\n  color: #67677a;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 36px;\n}\n.form-actions button {\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  min-width: 120px;\n}\n.btn-primary {\n  background-color: #149696;\n  color: white;\n}\n.btn-primary:hover {\n  background-color: #0d8585;\n  transform: translateY(-2px);\n}\n.btn-secondary {\n  background-color: #e0e0e0;\n  color: #303048;\n}\n.btn-secondary:hover {\n  background-color: #d0d0d0;\n}\n.goals-list,\n.delete-section {\n  padding: 10px 0;\n}\n.edit-form {\n  padding: 10px 0;\n}\n.empty-list-message {\n  text-align: center;\n  color: #67677a;\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 16px;\n  margin: 40px 0;\n}\n.goal-list-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  margin-bottom: 10px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.goal-list-item:hover {\n  background-color: #e9f7f7;\n  transform: translateY(-3px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  border-color: #149696;\n}\n.goal-list-name {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 16px;\n  color: #303048;\n}\n.goal-list-amount {\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14px;\n  margin-top: 4px;\n}\n.current-amount {\n  font-weight: bold;\n  color: #149696;\n}\n.target-amount {\n  color: #67677a;\n}\n.goal-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.goal-action-hint {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: #e0f5f5;\n  color: #149696;\n  margin-left: 12px;\n  transition: all 0.2s ease;\n}\n.goal-list-item:hover .goal-action-hint {\n  background-color: #149696;\n  color: white;\n  transform: scale(1.1);\n}\n.hint-icon {\n  font-style: normal;\n  font-size: 18px;\n}\n.delete-button {\n  background-color: #ffeeee;\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-left: 12px;\n}\n.delete-button:hover {\n  background-color: #ff4242;\n  transform: rotate(90deg);\n}\n.delete-button:hover .delete-icon {\n  filter: brightness(5);\n}\n.delete-icon {\n  width: 16px;\n  height: 16px;\n}\n.edit-note {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 14px;\n  color: #67677a;\n  background-color: #f5f5f5;\n  padding: 10px;\n  border-radius: 8px;\n}\n.current-info {\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 24px;\n}\n.current-amount-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.current-amount-info label {\n  font-family: "PalanquinDark-Medium", sans-serif;\n  font-size: 14px;\n  color: #67677a;\n}\n.current-value {\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  color: #149696;\n}\n.progress-indicator {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.progress-bar {\n  flex: 1;\n  height: 8px;\n  background-color: #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #149696 0%,\n      #4cc1c1 100%);\n  border-radius: 4px;\n}\n.progress-percentage {\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14px;\n  color: #303048;\n  min-width: 40px;\n  text-align: right;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.delete-list .goal-list-item {\n  cursor: default;\n}\n.delete-section h2 {\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  color: #303048;\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=savinggoal-form.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: SavingGoalService }, { type: SnackbarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SavingGoalFormComponent, { className: "SavingGoalFormComponent", filePath: "src/app/features/savinggoals/pages/savinggoal-form/savinggoal-form.component.ts", lineNumber: 16 });
})();

// src/app/core/auth.guard.ts
var authGuard = (route, state2) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");
  if (state2.url.startsWith("/auth") && token) {
    router.navigate(["/dashboard"]);
    return false;
  }
  if (!token && !state2.url.startsWith("/auth")) {
    router.navigate(["/auth/login"]);
    return false;
  }
  return true;
};

// src/app/pages/home.component.ts
var HomeComponent = class _HomeComponent {
  authService;
  userInfo;
  constructor(authService) {
    this.authService = authService;
    const userStr = localStorage.getItem("user");
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
      console.log(this.userInfo);
    }
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 171, vars: 2, consts: [[1, "content"], [1, "weolcome-buttons"], [1, "bienvenido-nuevamente-john-doe"], [1, "rectangle-318"], [1, "frame-62"], [1, "frame-59"], [1, "save-goal"], [1, "_1-er-plan"], [1, "_100-00"], [1, "cumplea-os-javier"], ["src", "/assets/icons/plus-circle.svg", 1, "icons"], [1, "frame-60"], [1, "_2-er-plan"], [1, "_500-00"], [1, "viaje-roma"], ["src", "/assets/icons/plus-circle.svg", 1, "icons2"], [1, "frame-61"], [1, "save-goal2"], [1, "_3-er-plan"], [1, "_9-457-00"], [1, "comprar-carro"], ["src", "/assets/icons/plus-circle.svg", 1, "icons3"], [1, "rectangle-319"], [1, "rectangle-324"], [1, "_12"], [1, "categor-a-terciaria"], [1, "rectangle-323"], [1, "_20"], [1, "categor-a-secundaria"], [1, "ellipse-91"], [1, "ellipse-103"], [1, "ellipse-93"], [1, "ellipse-92"], [1, "_15"], [1, "_202"], [1, "_122"], [1, "ellipse-94"], [1, "ellipse-95"], [1, "ellipse-96"], [1, "s-3-925"], [1, "rectangle-320"], [1, "rectangle-321"], [1, "contact-details"], ["src", "/assets/icons/user.svg", 1, "ellipse-3"], [1, "frame-16"], [1, "contact-name"], [1, "e-mail"], [1, "text"], [1, "contact-details2"], [1, "contact-details3"], [1, "movimientos"], [1, "rectangle-322"], [1, "categor-a-primaria"], [1, "_152"], [1, "rectangle-325"], [1, "_24th"], [1, "_24th-span"], [1, "_24th-span2"], [1, "mayo"], [1, "monto-500-00"], [1, "recordatorio-cumple-mam"], [1, "contacto-de-empleados"], [1, "frame-58"], [1, "expenses"], [1, "gastos-este-mes"], [1, "gastos-este-mes-span"], [1, "gastos-este-mes-span2"], ["src", "/assets/icons/minus.svg", 1, "icons4"], [1, "group-3"], [1, "_135-800"], [1, "income"], [1, "group-32"], [1, "ingresos-este-mes"], [1, "ingresos-este-mes-span"], [1, "ingresos-este-mes-span2"], ["src", "/assets/icons/plus.svg", 1, "icons5"], [1, "_6-000"], [1, "wallet-balance"], ["src", "/assets/icons/wallet.svg", 1, "icons6"], [1, "saldo-actual-de-billetera"], [1, "_142-450-00"], [1, "button"], [1, "text2"], [1, "last-transaction"], [1, "ltima-transacci-n"], [1, "_620-00"], [1, "cena-con-clientes"], [1, "upcoming-bill"], [1, "frame-48"], [1, "ultima"], [1, "acualizaci-n"], [1, "group-6"], ["src", "/assets/icons/calendar.svg", 1, "icons7"], [1, "_27"], ["src", "/assets/icons/plus.svg", 1, "line-1"], [1, "button2"], [1, "text3"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(4, "div", 3);
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275text(9, "1er Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275text(11, "$100.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275text(13, "Cumplea\xF1os javier");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(14, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 6)(17, "div", 12);
      \u0275\u0275text(18, "2er Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13);
      \u0275\u0275text(20, "$500.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275text(22, "Viaje Roma");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 16)(25, "div", 17)(26, "div", 18);
      \u0275\u0275text(27, "3er Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 19);
      \u0275\u0275text(29, "$9,457.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275text(31, "Comprar Carro");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "img", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(33, "div", 22)(34, "div", 23);
      \u0275\u0275elementStart(35, "div", 24);
      \u0275\u0275text(36, "12%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 25);
      \u0275\u0275text(38, " Categor\xEDa ");
      \u0275\u0275element(39, "br");
      \u0275\u0275text(40, " Terciaria ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "div", 26);
      \u0275\u0275elementStart(42, "div", 27);
      \u0275\u0275text(43, "20%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 28);
      \u0275\u0275text(45, " Categor\xEDa ");
      \u0275\u0275element(46, "br");
      \u0275\u0275text(47, " Secundaria ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "div", 29)(49, "div", 30)(50, "div", 31)(51, "div", 32);
      \u0275\u0275elementStart(52, "div", 33);
      \u0275\u0275text(53, "15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 34);
      \u0275\u0275text(55, "20%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 35);
      \u0275\u0275text(57, "12%");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "div", 36)(59, "div", 37)(60, "div", 38);
      \u0275\u0275elementStart(61, "div", 39);
      \u0275\u0275text(62, "S/. 3,925");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "div", 40)(64, "div", 41);
      \u0275\u0275elementStart(65, "div", 42);
      \u0275\u0275element(66, "img", 43);
      \u0275\u0275elementStart(67, "div", 44)(68, "div", 45);
      \u0275\u0275text(69, "Esther Howard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 46);
      \u0275\u0275text(71, "Fecha de pago: 6/19/14");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 47);
      \u0275\u0275text(73, "$396.84");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 48);
      \u0275\u0275element(75, "img", 43);
      \u0275\u0275elementStart(76, "div", 44)(77, "div", 45);
      \u0275\u0275text(78, "Cody Fisher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 46);
      \u0275\u0275text(80, "Fecha de pago: 9/23/16");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 47);
      \u0275\u0275text(82, "$779.58");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 49);
      \u0275\u0275element(84, "img", 43);
      \u0275\u0275elementStart(85, "div", 44)(86, "div", 45);
      \u0275\u0275text(87, "Ronald Richards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 46);
      \u0275\u0275text(89, "Fecha de pago: 2/11/12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 47);
      \u0275\u0275text(91, "$328.85");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 50);
      \u0275\u0275text(93, "Movimientos:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "div", 51);
      \u0275\u0275elementStart(95, "div", 52);
      \u0275\u0275text(96, " Categor\xEDa ");
      \u0275\u0275element(97, "br");
      \u0275\u0275text(98, " Primaria ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 53);
      \u0275\u0275text(100, "15%");
      \u0275\u0275elementEnd();
      \u0275\u0275element(101, "div", 54);
      \u0275\u0275elementStart(102, "div", 55)(103, "span")(104, "span", 56);
      \u0275\u0275text(105, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span", 57);
      \u0275\u0275text(107, "th");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 58);
      \u0275\u0275text(109, "mayo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 59);
      \u0275\u0275text(111, "Monto: $500.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 60);
      \u0275\u0275text(113, "Recordatorio: Cumple Mam\xE1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 61);
      \u0275\u0275text(115, "Contacto de empleados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 62)(117, "div", 63)(118, "div", 64)(119, "span")(120, "span", 65);
      \u0275\u0275text(121, " Gastos ");
      \u0275\u0275element(122, "br");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "span", 66);
      \u0275\u0275text(124, "Este mes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(125, "img", 67);
      \u0275\u0275elementStart(126, "div", 68)(127, "div", 69);
      \u0275\u0275text(128, "$135.800");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "div", 70)(130, "div", 71)(131, "div", 72)(132, "span")(133, "span", 73);
      \u0275\u0275text(134, " Ingresos ");
      \u0275\u0275element(135, "br");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "span", 74);
      \u0275\u0275text(137, "Este mes");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(138, "img", 75);
      \u0275\u0275elementStart(139, "div", 76);
      \u0275\u0275text(140, "$6.000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 77);
      \u0275\u0275element(142, "img", 78);
      \u0275\u0275elementStart(143, "div", 79);
      \u0275\u0275text(144, "Saldo actual de billetera");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "div", 80);
      \u0275\u0275text(146, "$142,450.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 81)(148, "div", 82);
      \u0275\u0275text(149, "Ver todos los reportes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 83)(151, "div", 84);
      \u0275\u0275text(152, "\xDAltima transacci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 85);
      \u0275\u0275text(154, "-$620.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 86);
      \u0275\u0275text(156, "Cena con clientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 87)(158, "div", 88)(159, "div", 89);
      \u0275\u0275text(160, "Ultima");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 90);
      \u0275\u0275text(162, "acualizaci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 91);
      \u0275\u0275element(164, "img", 92);
      \u0275\u0275elementStart(165, "div", 93);
      \u0275\u0275text(166, "27");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(167, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "div", 95)(169, "div", 96);
      \u0275\u0275text(170, "Agregar transacci\xF3n");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" \xA1Bienvenido nuevamente ", ctx.userInfo.firstName, " ", ctx.userInfo.lastName, "! ");
    }
  }, dependencies: [CommonModule], styles: ['\n\n.content[_ngcontent-%COMP%], \n.content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.content[_ngcontent-%COMP%] {\n  background: #dcdcd1;\n  padding: 17px 20px 17px 20px;\n  height: 944px;\n  position: absolute;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: 1000px;\n  margin-bottom: -10px;\n  top: 80px;\n  width: 100%;\n}\n.weolcome-buttons[_ngcontent-%COMP%] {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 20px;\n  top: 17px;\n}\n.bienvenido-nuevamente-john-doe[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 600 24px "PalanquinDark-SemiBold", sans-serif;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 393px;\n  height: 33px;\n}\n.rectangle-318[_ngcontent-%COMP%] {\n  background: #d9d9d9;\n  border-radius: 15px;\n  width: 1122px;\n  height: 834px;\n  position: absolute;\n  left: 279px;\n  top: 70px;\n}\n.frame-62[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 37px;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 248px;\n  top: 95px;\n}\n.frame-59[_ngcontent-%COMP%], \n.frame-60[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 226px;\n  height: 169px;\n  position: relative;\n  overflow: hidden;\n}\n.frame-61[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 282px;\n  height: 169px;\n  position: relative;\n  overflow: hidden;\n}\n.save-goal[_ngcontent-%COMP%], \n.save-goal2[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 21px 15px;\n  height: 157px;\n  position: absolute;\n  left: 7px;\n  top: 5px;\n  overflow: hidden;\n}\n.save-goal[_ngcontent-%COMP%] {\n  width: 210px;\n}\n.save-goal2[_ngcontent-%COMP%] {\n  width: 275px;\n}\n._1-er-plan[_ngcontent-%COMP%], \n._2-er-plan[_ngcontent-%COMP%], \n._3-er-plan[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 600 24px "PalanquinDark-SemiBold", sans-serif;\n  position: absolute;\n  left: 18px;\n  top: 0;\n  width: 248px;\n  height: 17px;\n}\n._100-00[_ngcontent-%COMP%], \n._500-00[_ngcontent-%COMP%], \n._9-457-00[_ngcontent-%COMP%] {\n  color: #0b6862;\n  text-align: left;\n  font: 700 40px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 18px;\n  top: 31px;\n  width: 313px;\n  height: 42px;\n}\n.cumplea-os-javier[_ngcontent-%COMP%], \n.viaje-roma[_ngcontent-%COMP%], \n.comprar-carro[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 700 16px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 18px;\n  top: 104px;\n  width: 146px;\n  height: 19px;\n}\n.icons[_ngcontent-%COMP%], \n.icons2[_ngcontent-%COMP%], \n.icons3[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  top: 109px;\n  overflow: visible;\n}\n.icons[_ngcontent-%COMP%], \n.icons2[_ngcontent-%COMP%] {\n  left: 176px;\n}\n.icons3[_ngcontent-%COMP%] {\n  left: 228px;\n}\n.rectangle-319[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  width: 336px;\n  height: 596px;\n  position: absolute;\n  left: 720px;\n  top: 284px;\n}\n.rectangle-324[_ngcontent-%COMP%], \n.rectangle-323[_ngcontent-%COMP%], \n.rectangle-322[_ngcontent-%COMP%] {\n  background: #0b6862;\n  border-radius: 15px;\n  width: 271px;\n  height: 79px;\n  position: absolute;\n  left: 749px;\n}\n.rectangle-324[_ngcontent-%COMP%] {\n  top: 784px;\n}\n.rectangle-323[_ngcontent-%COMP%] {\n  top: 685px;\n}\n.rectangle-322[_ngcontent-%COMP%] {\n  top: 586px;\n}\n._12[_ngcontent-%COMP%], \n._20[_ngcontent-%COMP%], \n._152[_ngcontent-%COMP%] {\n  color: #1acbcb;\n  text-align: left;\n  font: 500 40px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  left: 913px;\n  width: 101px;\n  height: 61px;\n}\n._12[_ngcontent-%COMP%] {\n  top: 779px;\n}\n._20[_ngcontent-%COMP%] {\n  top: 682px;\n}\n._152[_ngcontent-%COMP%] {\n  left: 908px;\n  top: 582px;\n}\n.categor-a-terciaria[_ngcontent-%COMP%], \n.categor-a-secundaria[_ngcontent-%COMP%], \n.categor-a-primaria[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font: 500 20px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  width: 214px;\n  height: 27px;\n}\n.categor-a-terciaria[_ngcontent-%COMP%] {\n  left: 779px;\n  top: 784px;\n}\n.categor-a-secundaria[_ngcontent-%COMP%] {\n  left: 782px;\n  top: 687px;\n}\n.categor-a-primaria[_ngcontent-%COMP%] {\n  left: 782px;\n  top: 586px;\n}\n.group-197[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.ellipse-91[_ngcontent-%COMP%], \n.ellipse-103[_ngcontent-%COMP%], \n.ellipse-93[_ngcontent-%COMP%], \n.ellipse-92[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 20px;\n  width: 124.96px;\n  height: 121.45px;\n  position: absolute;\n  left: 825.8px;\n  top: 325px;\n}\n.ellipse-91[_ngcontent-%COMP%] {\n  border-color: #95f3f3;\n}\n.ellipse-103[_ngcontent-%COMP%] {\n  border-color: #e0ffff;\n}\n.ellipse-93[_ngcontent-%COMP%] {\n  border-color: #149696;\n}\n.ellipse-92[_ngcontent-%COMP%] {\n  border-color: #1acbcb;\n}\n._15[_ngcontent-%COMP%], \n._202[_ngcontent-%COMP%], \n._122[_ngcontent-%COMP%] {\n  color: var(--gris-oscuro-icono, #1d3378);\n  text-align: center;\n  font: 400 10px "Poppins-Regular", sans-serif;\n  letter-spacing: 0.05em;\n  position: absolute;\n  top: 496.19px;\n  height: 22.27px;\n}\n._15[_ngcontent-%COMP%] {\n  left: 819px;\n  width: 53.45px;\n}\n._202[_ngcontent-%COMP%], \n._122[_ngcontent-%COMP%] {\n  width: 54.84px;\n}\n._202[_ngcontent-%COMP%] {\n  left: 862.74px;\n}\n._122[_ngcontent-%COMP%] {\n  left: 903px;\n}\n.ellipse-94[_ngcontent-%COMP%], \n.ellipse-95[_ngcontent-%COMP%], \n.ellipse-96[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  top: 480px;\n  height: 8.1px;\n}\n.ellipse-94[_ngcontent-%COMP%] {\n  background: #149696;\n  width: 7.64px;\n  left: 842.6px;\n}\n.ellipse-95[_ngcontent-%COMP%] {\n  background: #1acbcb;\n  width: 9.02px;\n  left: 886.34px;\n}\n.ellipse-96[_ngcontent-%COMP%] {\n  background: #52e0e0;\n  width: 9.02px;\n  left: 925.21px;\n}\n.s-3-925[_ngcontent-%COMP%] {\n  color: var(--gris-oscuro-icono, #1d3378);\n  text-align: center;\n  font: 400 16px "PalanquinDark-Regular", sans-serif;\n  letter-spacing: 0.05em;\n  position: absolute;\n  left: 720px;\n  top: 370.88px;\n  width: 336px;\n  height: 25.64px;\n}\n.rectangle-320[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  width: 379px;\n  height: 332px;\n  position: absolute;\n  left: 255px;\n  top: 540px;\n}\n.rectangle-321[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  width: 295px;\n  height: 266px;\n  position: absolute;\n  left: 1096px;\n  top: 528px;\n}\n.contact-details[_ngcontent-%COMP%], \n.contact-details2[_ngcontent-%COMP%], \n.contact-details3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 280px;\n  position: absolute;\n  left: 1104px;\n}\n.contact-details[_ngcontent-%COMP%] {\n  top: 667px;\n}\n.contact-details2[_ngcontent-%COMP%] {\n  top: 735px;\n}\n.contact-details3[_ngcontent-%COMP%] {\n  top: 599px;\n}\n.ellipse-3[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  position: relative;\n  object-fit: cover;\n}\n.frame-16[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 1;\n  position: relative;\n}\n.contact-name[_ngcontent-%COMP%], \n.e-mail[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 400 16px "PalanquinDark-Regular", sans-serif;\n  position: relative;\n  align-self: stretch;\n}\n.e-mail[_ngcontent-%COMP%] {\n  margin-top: -9px;\n  font-size: 13px;\n}\n.text[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 400 16px "PalanquinDark-Regular", sans-serif;\n  position: relative;\n  width: 58px;\n}\n.movimientos[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 500 24px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  left: 749px;\n  top: 530px;\n  width: 197px;\n  height: 44px;\n}\n.rectangle-325[_ngcontent-%COMP%] {\n  background: #0b6862;\n  border-radius: 15px;\n  width: 274px;\n  height: 176px;\n  position: absolute;\n  left: 279px;\n  top: 561px;\n}\n._24th[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  position: absolute;\n  left: 311px;\n  top: 534px;\n  width: 222px;\n  height: 138px;\n}\n._24th-span[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 96px;\n  font-weight: 400;\n}\n._24th-span2[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 48px;\n  font-weight: 400;\n}\n.mayo[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 311px;\n  top: 665px;\n  width: 337px;\n  height: 31px;\n}\n.monto-500-00[_ngcontent-%COMP%], \n.recordatorio-cumple-mam[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 284px;\n}\n.monto-500-00[_ngcontent-%COMP%] {\n  top: 780px;\n  width: 221px;\n  height: 54px;\n}\n.recordatorio-cumple-mam[_ngcontent-%COMP%] {\n  top: 743px;\n  width: 323px;\n  height: 53px;\n}\n.contacto-de-empleados[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n  font: 400 16px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 1117px;\n  top: 541px;\n  width: 181px;\n  height: 21px;\n}\n.frame-58[_ngcontent-%COMP%] {\n  width: 317px;\n  height: 440px;\n  position: absolute;\n  left: 1089px;\n  top: 88px;\n  overflow: hidden;\n}\n.expenses[_ngcontent-%COMP%], \n.income[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 13px 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  width: 135px;\n  position: absolute;\n  top: 215px;\n  overflow: hidden;\n}\n.expenses[_ngcontent-%COMP%] {\n  height: 200px;\n  left: 167px;\n}\n.income[_ngcontent-%COMP%] {\n  left: 13px;\n}\n.gastos-este-mes[_ngcontent-%COMP%], \n.ingresos-este-mes[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  position: relative;\n  width: 105px;\n  height: 70px;\n}\n.gastos-este-mes-span[_ngcontent-%COMP%], \n.ingresos-este-mes-span[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-weight: 700;\n}\n.gastos-este-mes-span2[_ngcontent-%COMP%], \n.ingresos-este-mes-span2[_ngcontent-%COMP%] {\n  font-family: "PalanquinDark-Regular", sans-serif;\n}\n.ingresos-este-mes[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(50% - 79px);\n}\n.icons4[_ngcontent-%COMP%], \n.icons5[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  position: relative;\n  overflow: visible;\n}\n.group-3[_ngcontent-%COMP%], \n.group-32[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  position: static;\n}\n.group-3[_ngcontent-%COMP%] {\n  width: 127px;\n  height: 20px;\n}\n.group-32[_ngcontent-%COMP%] {\n  width: 105px;\n  height: 70px;\n}\n._135-800[_ngcontent-%COMP%] {\n  color: #f15b64;\n  text-align: center;\n  font: 700 20px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 4px;\n  top: 159px;\n  width: 127px;\n  height: 20px;\n}\n._6-000[_ngcontent-%COMP%] {\n  color: #0ea49b;\n  text-align: center;\n  font: 700 20px "PalanquinDark-Bold", sans-serif;\n  position: relative;\n  align-self: stretch;\n  height: 20px;\n}\n.wallet-balance[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 13px 15px;\n  width: 289px;\n  height: 200px;\n  position: absolute;\n  left: 13px;\n  top: 6px;\n  overflow: hidden;\n}\n.icons6[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 11px;\n  top: 126px;\n  overflow: visible;\n}\n.group-33[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.saldo-actual-de-billetera[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 500 24px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  left: 11px;\n  top: 16px;\n  width: 292px;\n  height: 42px;\n}\n._142-450-00[_ngcontent-%COMP%] {\n  color: #0b6862;\n  text-align: left;\n  font: 700 40px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 18.5px;\n  top: 58px;\n  width: 313px;\n  height: 42px;\n}\n.button[_ngcontent-%COMP%], \n.button2[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  padding: 12px 24px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  width: 289px;\n  height: 64px;\n  position: absolute;\n}\n.button[_ngcontent-%COMP%] {\n  background: #ffffff;\n  left: 1102px;\n  top: 812px;\n}\n.button2[_ngcontent-%COMP%] {\n  background: #092c36;\n  left: 308px;\n  top: 454px;\n}\n.text2[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: relative;\n  width: 250px;\n}\n.text3[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: center;\n  font: 500 24px "PalanquinDark-Medium", sans-serif;\n  position: relative;\n  width: 460px;\n}\n.last-transaction[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 13px 15px;\n  width: 382px;\n  height: 157px;\n  position: absolute;\n  left: 255px;\n  top: 280px;\n  overflow: hidden;\n}\n.description-details[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.ltima-transacci-n[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 500 24px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  left: 21px;\n  top: 14px;\n  width: 269px;\n  height: 42px;\n}\n._620-00[_ngcontent-%COMP%] {\n  color: #f15b64;\n  text-align: left;\n  font: 700 32px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 21px;\n  top: 88px;\n  width: 313px;\n  height: 42px;\n}\n.cena-con-clientes[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 21px;\n  top: 56px;\n}\n.upcoming-bill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 145px;\n  position: absolute;\n  left: 237px;\n  top: 9px;\n}\n.frame-48[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-self: stretch;\n  flex-shrink: 0;\n  position: relative;\n}\n.ultima[_ngcontent-%COMP%], \n.acualizaci-n[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: relative;\n  align-self: stretch;\n}\n.acualizaci-n[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.group-6[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  position: static;\n}\n.icons7[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 40.5px;\n  top: 76px;\n  overflow: visible;\n}\n._27[_ngcontent-%COMP%] {\n  color: #092c36;\n  text-align: center;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 60.5px;\n  top: 89px;\n}\n.line-1[_ngcontent-%COMP%] {\n  width: 157px;\n  height: 0;\n  position: absolute;\n  left: 238px;\n  top: 157px;\n  transform: translate(-0.5px, -157px);\n  overflow: visible;\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule], template: '<div class="content">\r\n  <div class="weolcome-buttons">\r\n    <div class="bienvenido-nuevamente-john-doe">\r\n      \xA1Bienvenido nuevamente {{userInfo.firstName}} {{userInfo.lastName}}!\r\n    </div>\r\n  </div>\r\n  <div class="rectangle-318"></div>\r\n  <div class="frame-62">\r\n    <div class="frame-59">\r\n      <div class="save-goal">\r\n        <div class="_1-er-plan">1er Plan</div>\r\n        <div class="_100-00">$100.00</div>\r\n        <div class="cumplea-os-javier">Cumplea\xF1os javier</div>\r\n      </div>\r\n      <img class="icons" src="/assets/icons/plus-circle.svg" />\r\n    </div>\r\n    <div class="frame-60">\r\n      <div class="save-goal">\r\n        <div class="_2-er-plan">2er Plan</div>\r\n        <div class="_500-00">$500.00</div>\r\n        <div class="viaje-roma">Viaje Roma</div>\r\n      </div>\r\n      <img class="icons2" src="/assets/icons/plus-circle.svg" />\r\n    </div>\r\n    <div class="frame-61">\r\n      <div class="save-goal2">\r\n        <div class="_3-er-plan">3er Plan</div>\r\n        <div class="_9-457-00">$9,457.00</div>\r\n        <div class="comprar-carro">Comprar Carro</div>\r\n      </div>\r\n      <img class="icons3" src="/assets/icons/plus-circle.svg" />\r\n    </div>\r\n  </div>\r\n  <div class="rectangle-319"></div>\r\n  <div class="rectangle-324"></div>\r\n  <div class="_12">12%</div>\r\n  <div class="categor-a-terciaria">\r\n    Categor\xEDa\r\n    <br />\r\n    Terciaria\r\n  </div>\r\n  <div class="rectangle-323"></div>\r\n  <div class="_20">20%</div>\r\n  <div class="categor-a-secundaria">\r\n    Categor\xEDa\r\n    <br />\r\n    Secundaria\r\n  </div>\r\n  <div class="ellipse-91"></div>\r\n  <div class="ellipse-103"></div>\r\n  <div class="ellipse-93"></div>\r\n  <div class="ellipse-92"></div>\r\n  <div class="_15">15%</div>\r\n  <div class="_202">20%</div>\r\n  <div class="_122">12%</div>\r\n  <div class="ellipse-94"></div>\r\n  <div class="ellipse-95"></div>\r\n  <div class="ellipse-96"></div>\r\n  <div class="s-3-925">S/. 3,925</div>\r\n  <div class="rectangle-320"></div>\r\n  <div class="rectangle-321"></div>\r\n  <div class="contact-details">\r\n    <img class="ellipse-3" src="/assets/icons/user.svg" />\r\n    <div class="frame-16">\r\n      <div class="contact-name">Esther Howard</div>\r\n      <div class="e-mail">Fecha de pago: 6/19/14</div>\r\n    </div>\r\n    <div class="text">$396.84</div>\r\n  </div>\r\n  <div class="contact-details2">\r\n    <img class="ellipse-3" src="/assets/icons/user.svg" />\r\n    <div class="frame-16">\r\n      <div class="contact-name">Cody Fisher</div>\r\n      <div class="e-mail">Fecha de pago: 9/23/16</div>\r\n    </div>\r\n    <div class="text">$779.58</div>\r\n  </div>\r\n  <div class="contact-details3">\r\n    <img class="ellipse-3" src="/assets/icons/user.svg" />\r\n    <div class="frame-16">\r\n      <div class="contact-name">Ronald Richards</div>\r\n      <div class="e-mail">Fecha de pago: 2/11/12</div>\r\n    </div>\r\n    <div class="text">$328.85</div>\r\n  </div>\r\n  <div class="movimientos">Movimientos:</div>\r\n  <div class="rectangle-322"></div>\r\n  <div class="categor-a-primaria">\r\n    Categor\xEDa\r\n    <br />\r\n    Primaria\r\n  </div>\r\n  <div class="_152">15%</div>\r\n  <div class="rectangle-325"></div>\r\n  <div class="_24th">\r\n    <span>\r\n      <span class="_24th-span">24</span>\r\n      <span class="_24th-span2">th</span>\r\n    </span>\r\n  </div>\r\n  <div class="mayo">mayo</div>\r\n  <div class="monto-500-00">Monto: $500.00</div>\r\n  <div class="recordatorio-cumple-mam">Recordatorio: Cumple Mam\xE1</div>\r\n  <div class="contacto-de-empleados">Contacto de empleados</div>\r\n  <div class="frame-58">\r\n    <div class="expenses">\r\n      <div class="gastos-este-mes">\r\n        <span>\r\n          <span class="gastos-este-mes-span">\r\n            Gastos\r\n            <br />\r\n          </span>\r\n          <span class="gastos-este-mes-span2">Este mes</span>\r\n        </span>\r\n      </div>\r\n      <img class="icons4" src="/assets/icons/minus.svg" />\r\n      <div class="group-3">\r\n        <div class="_135-800">$135.800</div>\r\n      </div>\r\n    </div>\r\n    <div class="income">\r\n      <div class="group-32">\r\n        <div class="ingresos-este-mes">\r\n          <span>\r\n            <span class="ingresos-este-mes-span">\r\n              Ingresos\r\n              <br />\r\n            </span>\r\n            <span class="ingresos-este-mes-span2">Este mes</span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <img class="icons5" src="/assets/icons/plus.svg" />\r\n      <div class="_6-000">$6.000</div>\r\n    </div>\r\n    <div class="wallet-balance">\r\n      <img class="icons6" src="/assets/icons/wallet.svg" />\r\n      <div class="saldo-actual-de-billetera">Saldo actual de billetera</div>\r\n      <div class="_142-450-00">$142,450.00</div>\r\n    </div>\r\n  </div>\r\n  <div class="button">\r\n    <div class="text2">Ver todos los reportes</div>\r\n  </div>\r\n  <div class="last-transaction">\r\n    <div class="ltima-transacci-n">\xDAltima transacci\xF3n</div>\r\n    <div class="_620-00">-$620.00</div>\r\n    <div class="cena-con-clientes">Cena con clientes</div>\r\n    <div class="upcoming-bill">\r\n      <div class="frame-48">\r\n        <div class="ultima">Ultima</div>\r\n        <div class="acualizaci-n">acualizaci\xF3n</div>\r\n      </div>\r\n      <div class="group-6">\r\n        <img class="icons7" src="/assets/icons/calendar.svg" />\r\n        <div class="_27">27</div>\r\n      </div>\r\n    </div>\r\n    <img class="line-1" src="/assets/icons/plus.svg" />\r\n  </div>\r\n  <div class="button2">\r\n    <div class="text3">Agregar transacci\xF3n</div>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/pages/home.component.css */\n.content,\n.content * {\n  box-sizing: border-box;\n}\n.content {\n  background: #dcdcd1;\n  padding: 17px 20px 17px 20px;\n  height: 944px;\n  position: absolute;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: 1000px;\n  margin-bottom: -10px;\n  top: 80px;\n  width: 100%;\n}\n.weolcome-buttons {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 20px;\n  top: 17px;\n}\n.bienvenido-nuevamente-john-doe {\n  color: #000000;\n  text-align: left;\n  font: 600 24px "PalanquinDark-SemiBold", sans-serif;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 393px;\n  height: 33px;\n}\n.rectangle-318 {\n  background: #d9d9d9;\n  border-radius: 15px;\n  width: 1122px;\n  height: 834px;\n  position: absolute;\n  left: 279px;\n  top: 70px;\n}\n.frame-62 {\n  display: flex;\n  flex-direction: row;\n  gap: 37px;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 248px;\n  top: 95px;\n}\n.frame-59,\n.frame-60 {\n  flex-shrink: 0;\n  width: 226px;\n  height: 169px;\n  position: relative;\n  overflow: hidden;\n}\n.frame-61 {\n  flex-shrink: 0;\n  width: 282px;\n  height: 169px;\n  position: relative;\n  overflow: hidden;\n}\n.save-goal,\n.save-goal2 {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 21px 15px;\n  height: 157px;\n  position: absolute;\n  left: 7px;\n  top: 5px;\n  overflow: hidden;\n}\n.save-goal {\n  width: 210px;\n}\n.save-goal2 {\n  width: 275px;\n}\n._1-er-plan,\n._2-er-plan,\n._3-er-plan {\n  color: #000000;\n  text-align: left;\n  font: 600 24px "PalanquinDark-SemiBold", sans-serif;\n  position: absolute;\n  left: 18px;\n  top: 0;\n  width: 248px;\n  height: 17px;\n}\n._100-00,\n._500-00,\n._9-457-00 {\n  color: #0b6862;\n  text-align: left;\n  font: 700 40px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 18px;\n  top: 31px;\n  width: 313px;\n  height: 42px;\n}\n.cumplea-os-javier,\n.viaje-roma,\n.comprar-carro {\n  color: #000000;\n  text-align: left;\n  font: 700 16px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 18px;\n  top: 104px;\n  width: 146px;\n  height: 19px;\n}\n.icons,\n.icons2,\n.icons3 {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  top: 109px;\n  overflow: visible;\n}\n.icons,\n.icons2 {\n  left: 176px;\n}\n.icons3 {\n  left: 228px;\n}\n.rectangle-319 {\n  background: #ffffff;\n  border-radius: 15px;\n  width: 336px;\n  height: 596px;\n  position: absolute;\n  left: 720px;\n  top: 284px;\n}\n.rectangle-324,\n.rectangle-323,\n.rectangle-322 {\n  background: #0b6862;\n  border-radius: 15px;\n  width: 271px;\n  height: 79px;\n  position: absolute;\n  left: 749px;\n}\n.rectangle-324 {\n  top: 784px;\n}\n.rectangle-323 {\n  top: 685px;\n}\n.rectangle-322 {\n  top: 586px;\n}\n._12,\n._20,\n._152 {\n  color: #1acbcb;\n  text-align: left;\n  font: 500 40px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  left: 913px;\n  width: 101px;\n  height: 61px;\n}\n._12 {\n  top: 779px;\n}\n._20 {\n  top: 682px;\n}\n._152 {\n  left: 908px;\n  top: 582px;\n}\n.categor-a-terciaria,\n.categor-a-secundaria,\n.categor-a-primaria {\n  color: #ffffff;\n  text-align: left;\n  font: 500 20px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  width: 214px;\n  height: 27px;\n}\n.categor-a-terciaria {\n  left: 779px;\n  top: 784px;\n}\n.categor-a-secundaria {\n  left: 782px;\n  top: 687px;\n}\n.categor-a-primaria {\n  left: 782px;\n  top: 586px;\n}\n.group-197 {\n  position: absolute;\n  inset: 0;\n}\n.ellipse-91,\n.ellipse-103,\n.ellipse-93,\n.ellipse-92 {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 20px;\n  width: 124.96px;\n  height: 121.45px;\n  position: absolute;\n  left: 825.8px;\n  top: 325px;\n}\n.ellipse-91 {\n  border-color: #95f3f3;\n}\n.ellipse-103 {\n  border-color: #e0ffff;\n}\n.ellipse-93 {\n  border-color: #149696;\n}\n.ellipse-92 {\n  border-color: #1acbcb;\n}\n._15,\n._202,\n._122 {\n  color: var(--gris-oscuro-icono, #1d3378);\n  text-align: center;\n  font: 400 10px "Poppins-Regular", sans-serif;\n  letter-spacing: 0.05em;\n  position: absolute;\n  top: 496.19px;\n  height: 22.27px;\n}\n._15 {\n  left: 819px;\n  width: 53.45px;\n}\n._202,\n._122 {\n  width: 54.84px;\n}\n._202 {\n  left: 862.74px;\n}\n._122 {\n  left: 903px;\n}\n.ellipse-94,\n.ellipse-95,\n.ellipse-96 {\n  border-radius: 50%;\n  position: absolute;\n  top: 480px;\n  height: 8.1px;\n}\n.ellipse-94 {\n  background: #149696;\n  width: 7.64px;\n  left: 842.6px;\n}\n.ellipse-95 {\n  background: #1acbcb;\n  width: 9.02px;\n  left: 886.34px;\n}\n.ellipse-96 {\n  background: #52e0e0;\n  width: 9.02px;\n  left: 925.21px;\n}\n.s-3-925 {\n  color: var(--gris-oscuro-icono, #1d3378);\n  text-align: center;\n  font: 400 16px "PalanquinDark-Regular", sans-serif;\n  letter-spacing: 0.05em;\n  position: absolute;\n  left: 720px;\n  top: 370.88px;\n  width: 336px;\n  height: 25.64px;\n}\n.rectangle-320 {\n  background: #ffffff;\n  border-radius: 15px;\n  width: 379px;\n  height: 332px;\n  position: absolute;\n  left: 255px;\n  top: 540px;\n}\n.rectangle-321 {\n  background: #ffffff;\n  border-radius: 15px;\n  width: 295px;\n  height: 266px;\n  position: absolute;\n  left: 1096px;\n  top: 528px;\n}\n.contact-details,\n.contact-details2,\n.contact-details3 {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 280px;\n  position: absolute;\n  left: 1104px;\n}\n.contact-details {\n  top: 667px;\n}\n.contact-details2 {\n  top: 735px;\n}\n.contact-details3 {\n  top: 599px;\n}\n.ellipse-3 {\n  border-radius: 50%;\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  position: relative;\n  object-fit: cover;\n}\n.frame-16 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 1;\n  position: relative;\n}\n.contact-name,\n.e-mail {\n  color: #000000;\n  text-align: left;\n  font: 400 16px "PalanquinDark-Regular", sans-serif;\n  position: relative;\n  align-self: stretch;\n}\n.e-mail {\n  margin-top: -9px;\n  font-size: 13px;\n}\n.text {\n  color: #000000;\n  text-align: left;\n  font: 400 16px "PalanquinDark-Regular", sans-serif;\n  position: relative;\n  width: 58px;\n}\n.movimientos {\n  color: #000000;\n  text-align: left;\n  font: 500 24px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  left: 749px;\n  top: 530px;\n  width: 197px;\n  height: 44px;\n}\n.rectangle-325 {\n  background: #0b6862;\n  border-radius: 15px;\n  width: 274px;\n  height: 176px;\n  position: absolute;\n  left: 279px;\n  top: 561px;\n}\n._24th {\n  color: #ffffff;\n  text-align: left;\n  position: absolute;\n  left: 311px;\n  top: 534px;\n  width: 222px;\n  height: 138px;\n}\n._24th-span {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 96px;\n  font-weight: 400;\n}\n._24th-span2 {\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 48px;\n  font-weight: 400;\n}\n.mayo {\n  color: #ffffff;\n  text-align: left;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 311px;\n  top: 665px;\n  width: 337px;\n  height: 31px;\n}\n.monto-500-00,\n.recordatorio-cumple-mam {\n  color: #000000;\n  text-align: left;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 284px;\n}\n.monto-500-00 {\n  top: 780px;\n  width: 221px;\n  height: 54px;\n}\n.recordatorio-cumple-mam {\n  top: 743px;\n  width: 323px;\n  height: 53px;\n}\n.contacto-de-empleados {\n  color: #000000;\n  text-align: center;\n  font: 400 16px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 1117px;\n  top: 541px;\n  width: 181px;\n  height: 21px;\n}\n.frame-58 {\n  width: 317px;\n  height: 440px;\n  position: absolute;\n  left: 1089px;\n  top: 88px;\n  overflow: hidden;\n}\n.expenses,\n.income {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 13px 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  width: 135px;\n  position: absolute;\n  top: 215px;\n  overflow: hidden;\n}\n.expenses {\n  height: 200px;\n  left: 167px;\n}\n.income {\n  left: 13px;\n}\n.gastos-este-mes,\n.ingresos-este-mes {\n  color: #000000;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  position: relative;\n  width: 105px;\n  height: 70px;\n}\n.gastos-este-mes-span,\n.ingresos-este-mes-span {\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-weight: 700;\n}\n.gastos-este-mes-span2,\n.ingresos-este-mes-span2 {\n  font-family: "PalanquinDark-Regular", sans-serif;\n}\n.ingresos-este-mes {\n  left: 50%;\n  transform: translateX(-50%);\n  top: calc(50% - 79px);\n}\n.icons4,\n.icons5 {\n  border-radius: 100px;\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  position: relative;\n  overflow: visible;\n}\n.group-3,\n.group-32 {\n  flex-shrink: 0;\n  position: static;\n}\n.group-3 {\n  width: 127px;\n  height: 20px;\n}\n.group-32 {\n  width: 105px;\n  height: 70px;\n}\n._135-800 {\n  color: #f15b64;\n  text-align: center;\n  font: 700 20px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 4px;\n  top: 159px;\n  width: 127px;\n  height: 20px;\n}\n._6-000 {\n  color: #0ea49b;\n  text-align: center;\n  font: 700 20px "PalanquinDark-Bold", sans-serif;\n  position: relative;\n  align-self: stretch;\n  height: 20px;\n}\n.wallet-balance {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 13px 15px;\n  width: 289px;\n  height: 200px;\n  position: absolute;\n  left: 13px;\n  top: 6px;\n  overflow: hidden;\n}\n.icons6 {\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 11px;\n  top: 126px;\n  overflow: visible;\n}\n.group-33 {\n  position: absolute;\n  inset: 0;\n}\n.saldo-actual-de-billetera {\n  color: #000000;\n  text-align: left;\n  font: 500 24px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  left: 11px;\n  top: 16px;\n  width: 292px;\n  height: 42px;\n}\n._142-450-00 {\n  color: #0b6862;\n  text-align: left;\n  font: 700 40px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 18.5px;\n  top: 58px;\n  width: 313px;\n  height: 42px;\n}\n.button,\n.button2 {\n  border-radius: 15px;\n  padding: 12px 24px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  width: 289px;\n  height: 64px;\n  position: absolute;\n}\n.button {\n  background: #ffffff;\n  left: 1102px;\n  top: 812px;\n}\n.button2 {\n  background: #092c36;\n  left: 308px;\n  top: 454px;\n}\n.text2 {\n  color: #000000;\n  text-align: center;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: relative;\n  width: 250px;\n}\n.text3 {\n  color: #ffffff;\n  text-align: center;\n  font: 500 24px "PalanquinDark-Medium", sans-serif;\n  position: relative;\n  width: 460px;\n}\n.last-transaction {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 13px 15px;\n  width: 382px;\n  height: 157px;\n  position: absolute;\n  left: 255px;\n  top: 280px;\n  overflow: hidden;\n}\n.description-details {\n  position: absolute;\n  inset: 0;\n}\n.ltima-transacci-n {\n  color: #000000;\n  text-align: left;\n  font: 500 24px "PalanquinDark-Medium", sans-serif;\n  position: absolute;\n  left: 21px;\n  top: 14px;\n  width: 269px;\n  height: 42px;\n}\n._620-00 {\n  color: #f15b64;\n  text-align: left;\n  font: 700 32px "PalanquinDark-Bold", sans-serif;\n  position: absolute;\n  left: 21px;\n  top: 88px;\n  width: 313px;\n  height: 42px;\n}\n.cena-con-clientes {\n  color: #000000;\n  text-align: left;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 21px;\n  top: 56px;\n}\n.upcoming-bill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 145px;\n  position: absolute;\n  left: 237px;\n  top: 9px;\n}\n.frame-48 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-self: stretch;\n  flex-shrink: 0;\n  position: relative;\n}\n.ultima,\n.acualizaci-n {\n  color: #000000;\n  text-align: center;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: relative;\n  align-self: stretch;\n}\n.acualizaci-n {\n  margin-top: -5px;\n}\n.group-6 {\n  margin-top: -5px;\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  position: static;\n}\n.icons7 {\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 40.5px;\n  top: 76px;\n  overflow: visible;\n}\n._27 {\n  color: #092c36;\n  text-align: center;\n  font: 400 24px "PalanquinDark-Regular", sans-serif;\n  position: absolute;\n  left: 60.5px;\n  top: 89px;\n}\n.line-1 {\n  width: 157px;\n  height: 0;\n  position: absolute;\n  left: 238px;\n  top: 157px;\n  transform: translate(-0.5px, -157px);\n  overflow: visible;\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home.component.ts", lineNumber: 13 });
})();

// src/app/features/profile/profile.component.ts
var _c02 = () => ["/dashboard/profile/edit"];
var ProfileComponent = class _ProfileComponent {
  fb;
  authService;
  profileForm;
  isLoading = false;
  successMessage = "";
  errorMessage = "";
  userInfo;
  showMenu = false;
  constructor(fb, authService) {
    this.fb = fb;
    this.authService = authService;
    this.profileForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: [""]
    });
    console.log(this.profileForm.value);
    const userStr = localStorage.getItem("user");
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
      console.log(this.userInfo);
    }
  }
  ngOnInit() {
    this.loadUserProfile();
  }
  loadUserProfile() {
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.getUserProfile(this.userInfo.id).subscribe({
      next: (profile) => {
        this.profileForm.patchValue({
          firstName: profile.firstName,
          lastName: profile.lastName,
          email: profile.email,
          password: ""
          // No cargamos la contraseña
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || "Error al cargar el perfil";
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      this.successMessage = "";
      this.errorMessage = "";
      const updateRequest = {
        firstName: this.profileForm.get("firstName")?.value,
        lastName: this.profileForm.get("lastName")?.value,
        email: this.profileForm.get("email")?.value,
        password: this.profileForm.get("password")?.value
      };
      const password = this.profileForm.get("password")?.value;
      if (password) {
        updateRequest.password = password;
      }
      this.authService.updateUserProfile(this.userInfo.id, updateRequest).subscribe({
        next: (updatedProfile) => {
          this.successMessage = "Perfil actualizado correctamente";
          this.isLoading = false;
          const userStr = localStorage.getItem("user");
          if (userStr) {
            const user = JSON.parse(userStr);
            user.firstName = updatedProfile.firstName;
            user.lastName = updatedProfile.lastName;
            user.email = updatedProfile.email;
            localStorage.setItem("user", JSON.stringify(user));
          }
          this.profileForm.patchValue({ password: "" });
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Error al actualizar el perfil";
          this.isLoading = false;
        }
      });
    }
  }
  resetForm() {
    this.loadUserProfile();
    this.successMessage = "";
    this.errorMessage = "";
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 48, vars: 10, consts: [[1, "content"], [1, "weolcome-buttons"], [1, "my-profile"], [1, "frame-239183"], [1, "group-239183"], [1, "jhon-doe"], [1, "jhondoe-example-com"], [1, "avatar-user-250"], [1, "rectangle"], [1, "rectangle2"], [1, "frame-239185"], [1, "last-name"], [1, "group-239188"], [1, "rectangle-6698"], [1, "last-name2"], [1, "gender"], [1, "group-239196"], [1, "rectangle-66983"], [1, "your-gender"], [1, "first-name"], [1, "group-239187"], [1, "rectangle-66984"], [1, "your-first-name"], [1, "group-239198"], [1, "jhondoe-example-com2"], [1, "_1-month-ago"], [1, "edit-email-button", 3, "routerLink"], [1, "my-email-address"], [1, "user"], [1, "ellipse-1697"], ["src", "/icons/user.svg", 1, "icons"], [1, "edit-button", 3, "routerLink"], [1, "text"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "My Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275element(11, "div", 8)(12, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
      \u0275\u0275text(15, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275element(17, "div", 13);
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 15);
      \u0275\u0275text(21, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 16);
      \u0275\u0275element(23, "div", 17);
      \u0275\u0275elementStart(24, "div", 18);
      \u0275\u0275text(25, "*******************");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 19);
      \u0275\u0275text(27, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275element(29, "div", 21);
      \u0275\u0275elementStart(30, "div", 22);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 23)(33, "div", 24);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 25);
      \u0275\u0275text(36, "1 month ago");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "button", 26);
      \u0275\u0275text(38, " +Edit Email Address ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 27);
      \u0275\u0275text(40, "My email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 28);
      \u0275\u0275element(42, "div", 29)(43, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 31)(45, "span", 32);
      \u0275\u0275text(46, "Edit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(47, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.userInfo.firstName, " ", ctx.userInfo.lastName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userInfo.email);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.userInfo.lastName);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.userInfo.firstName);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userInfo.email);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c02));
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c02));
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, RouterModule, RouterOutlet, RouterLink], styles: ['\n\n.content[_ngcontent-%COMP%], \n.content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.content[_ngcontent-%COMP%] {\n  background: #dcdcd1;\n  border-radius: 0px 0px 0px 15px;\n  height: 944px;\n  position: absolute;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: 1000px;\n  margin-bottom: -10px;\n  top: 80px;\n  width: 100%;\n}\n.weolcome-buttons[_ngcontent-%COMP%] {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 36px;\n  top: 17px;\n}\n.my-profile[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 358px;\n  height: 33px;\n}\n.frame-239183[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  width: 1263px;\n  height: 841px;\n  position: absolute;\n  left: 150px;\n  top: 79px;\n  overflow: hidden;\n}\n.group-239199[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.group-239183[_ngcontent-%COMP%] {\n  width: 268px;\n  height: 77px;\n  position: static;\n}\n.jhon-doe[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Medium", sans-serif;\n  font-size: 32px;\n  font-weight: 500;\n  position: absolute;\n  left: 337px;\n  top: 107px;\n}\n.jhondoe-example-com[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Medium", sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n  position: absolute;\n  left: 337px;\n  top: 153px;\n}\n.avatar-user-250[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 125px;\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  left: 49px;\n  top: 24px;\n  overflow: hidden;\n  aspect-ratio: 1;\n}\n.rectangle[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 100px;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 75px;\n  top: 40px;\n}\n.rectangle2[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 375px;\n  width: 375px;\n  height: 375px;\n  position: absolute;\n  left: -62.5px;\n  top: 167px;\n}\n.frame-239185[_ngcontent-%COMP%] {\n  width: 1222.41px;\n  height: 286.84px;\n  position: absolute;\n  left: 12px;\n  top: 317px;\n}\n.group-239189[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.last-name[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636.05px;\n  top: 0px;\n  width: 128px;\n  height: 22px;\n}\n.group-239188[_ngcontent-%COMP%] {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-6698[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 47.94%;\n  height: 16.73%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 73.56%;\n  top: 9.71%;\n}\n.last-name2[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 31.5%;\n  left: 53.7%;\n  width: 14.81%;\n  bottom: 78.44%;\n  top: 14.24%;\n  height: 7.32%;\n}\n.group-239191[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.country[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636.05px;\n  top: 104px;\n  width: 128px;\n  height: 22px;\n}\n.group-239190[_ngcontent-%COMP%] {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-66982[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 47.94%;\n  height: 16.73%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 37.3%;\n  top: 45.96%;\n}\n.your-country[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 31.5%;\n  left: 53.7%;\n  width: 14.81%;\n  bottom: 42.18%;\n  top: 50.5%;\n  height: 7.32%;\n}\n.group-239197[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.gender[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0.05px;\n  top: 104px;\n  width: 128px;\n  height: 22px;\n}\n.group-239196[_ngcontent-%COMP%] {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-66983[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.34%;\n  left: 0.1%;\n  bottom: 37.39%;\n  top: 46.05%;\n}\n.your-gender[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 85.29%;\n  left: 1.55%;\n  width: 13.16%;\n  bottom: 42.13%;\n  top: 50.55%;\n  height: 7.32%;\n}\n.group-239182[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.first-name[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 128px;\n  height: 22px;\n}\n.group-239187[_ngcontent-%COMP%] {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-66984[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.35%;\n  left: 0.1%;\n  bottom: 73.65%;\n  top: 9.79%;\n}\n.your-first-name[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 85.29%;\n  left: 1.54%;\n  width: 13.16%;\n  bottom: 78.39%;\n  top: 14.29%;\n  height: 7.32%;\n}\n.group-239193[_ngcontent-%COMP%] {\n  width: 586.35px;\n  height: 75.84px;\n  position: static;\n}\n.bussines-name[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636.05px;\n  top: 211px;\n  width: 128px;\n  height: 22px;\n}\n.group-239192[_ngcontent-%COMP%] {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-66985[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 47.94%;\n  height: 16.73%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 0%;\n  top: 83.27%;\n}\n.your-bussines-name[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 28.55%;\n  left: 53.7%;\n  width: 17.75%;\n  bottom: 4.88%;\n  top: 87.8%;\n  height: 7.32%;\n}\n.group-239195[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.language[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0.05px;\n  top: 211px;\n  width: 128px;\n  height: 22px;\n}\n.group-239194[_ngcontent-%COMP%] {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-66986[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.34%;\n  left: 0.1%;\n  bottom: 0.09%;\n  top: 83.35%;\n}\n.your-language[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 85.29%;\n  left: 1.55%;\n  width: 13.16%;\n  bottom: 4.83%;\n  top: 87.85%;\n  height: 7.32%;\n}\n.group-239200[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.group-239198[_ngcontent-%COMP%] {\n  width: 179px;\n  height: 50.08px;\n  position: static;\n}\n.jhondoe-example-com2[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  position: absolute;\n  left: 93.61px;\n  top: 688.04px;\n}\n._1-month-ago[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.5;\n  position: absolute;\n  left: 93.61px;\n  top: 716.12px;\n}\n.button-edit-email[_ngcontent-%COMP%] {\n  width: 243.81px;\n  height: 40.19px;\n  position: static;\n}\n.rectangle-1072[_ngcontent-%COMP%] {\n  background: #4182f9;\n  border-radius: 7.49px;\n  opacity: 0.1;\n  width: 19.3%;\n  height: 4.78%;\n  position: absolute;\n  right: 77.74%;\n  left: 2.96%;\n  bottom: 6.05%;\n  top: 89.17%;\n}\n.edit-email-address[_ngcontent-%COMP%] {\n  color: #4182f9;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  position: absolute;\n  right: 79.93%;\n  left: 5.17%;\n  width: 14.9%;\n  bottom: 7.19%;\n  top: 90.26%;\n  height: 2.55%;\n}\n.my-email-address[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: right;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 16.850000381469727px;\n  font-weight: 500;\n  position: absolute;\n  left: 29.96px;\n  top: 644.04px;\n  width: 152px;\n  height: 25px;\n}\n.user[_ngcontent-%COMP%] {\n  width: 44.93px;\n  height: 44.93px;\n  position: absolute;\n  left: 29.96px;\n  top: 688.04px;\n}\n.ellipse-1697[_ngcontent-%COMP%] {\n  background: #4182f9;\n  border-radius: 50%;\n  opacity: 0.1;\n  width: 44.93px;\n  height: 44.93px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.icons[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 6.04px;\n  top: 4.96px;\n  overflow: visible;\n}\n.edit-button[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border: none;\n  border-radius: 50px;\n  color: #fff;\n  cursor: pointer;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 24px;\n  position: absolute;\n  left: 993px;\n  top: 116px;\n  transition: transform 0.2s ease, box-shadow 0.3s ease;\n  box-shadow: 0 4px 12px rgba(14, 164, 155, 0.3);\n}\n.edit-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(14, 164, 155, 0.4);\n}\n.edit-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n  box-shadow: 0 3px 6px rgba(14, 164, 155, 0.2);\n}\n.edit-button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n.text[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  width: 460px;\n}\n.edit-email-button[_ngcontent-%COMP%] {\n  background: #4182f9;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  left: 93px;\n  top: 760px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  box-shadow: 0 4px 8px rgba(65, 130, 249, 0.2);\n}\n.edit-email-button[_ngcontent-%COMP%]:hover {\n  background: #2f6df1;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(65, 130, 249, 0.3);\n}\n.edit-email-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  box-shadow: 0 3px 6px rgba(65, 130, 249, 0.2);\n}\n/*# sourceMappingURL=profile.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="content">\r
  <div class="weolcome-buttons">\r
    <div class="my-profile">My Profile</div>\r
  </div>\r
  <div class="frame-239183">\r
    <div class="group-239183">\r
      <div class="jhon-doe">{{userInfo.firstName}} {{userInfo.lastName}}</div>\r
      <div class="jhondoe-example-com">{{userInfo.email}}</div>\r
    </div>\r
    <div class="avatar-user-250">\r
      <div class="rectangle"></div>\r
      <div class="rectangle2"></div>\r
    </div>\r
    <div class="frame-239185">\r
      <div class="last-name">Last Name</div>\r
      <div class="group-239188">\r
        <div class="rectangle-6698"></div>\r
        <div class="last-name2">{{userInfo.lastName}}</div>\r
      </div>\r
      <div class="gender">Password</div>\r
      <div class="group-239196">\r
        <div class="rectangle-66983"></div>\r
        <div class="your-gender">*******************</div>\r
      </div>\r
      <div class="first-name">First Name</div>\r
      <div class="group-239187">\r
        <div class="rectangle-66984"></div>\r
        <div class="your-first-name">{{userInfo.firstName}}</div>\r
      </div>\r
      \r
    </div>\r
    <div class="group-239198">\r
      <div class="jhondoe-example-com2">{{userInfo.email}}</div>\r
      <div class="_1-month-ago">1 month ago</div>\r
    </div>\r
    <button class="edit-email-button" [routerLink]="['/dashboard/profile/edit']">\r
      +Edit Email Address\r
    </button>\r
    \r
    <div class="my-email-address">My email Address</div>\r
    <div class="user">\r
      <div class="ellipse-1697"></div>\r
      <img class="icons" src="/icons/user.svg" />\r
    </div>\r
    <button class="edit-button" [routerLink]="['/dashboard/profile/edit']">\r
      <span class="text">Edit</span>\r
    </button>\r
  </div>\r
  <router-outlet></router-outlet>\r
</div>\r
`, styles: ['/* src/app/features/profile/profile.component.css */\n.content,\n.content * {\n  box-sizing: border-box;\n}\n.content {\n  background: #dcdcd1;\n  border-radius: 0px 0px 0px 15px;\n  height: 944px;\n  position: absolute;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: 1000px;\n  margin-bottom: -10px;\n  top: 80px;\n  width: 100%;\n}\n.weolcome-buttons {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 36px;\n  top: 17px;\n}\n.my-profile {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 358px;\n  height: 33px;\n}\n.frame-239183 {\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  width: 1263px;\n  height: 841px;\n  position: absolute;\n  left: 150px;\n  top: 79px;\n  overflow: hidden;\n}\n.group-239199 {\n  position: absolute;\n  inset: 0;\n}\n.group-239183 {\n  width: 268px;\n  height: 77px;\n  position: static;\n}\n.jhon-doe {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Medium", sans-serif;\n  font-size: 32px;\n  font-weight: 500;\n  position: absolute;\n  left: 337px;\n  top: 107px;\n}\n.jhondoe-example-com {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Medium", sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n  position: absolute;\n  left: 337px;\n  top: 153px;\n}\n.avatar-user-250 {\n  background: #ffffff;\n  border-radius: 125px;\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  left: 49px;\n  top: 24px;\n  overflow: hidden;\n  aspect-ratio: 1;\n}\n.rectangle {\n  background: #0ea49b;\n  border-radius: 100px;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 75px;\n  top: 40px;\n}\n.rectangle2 {\n  background: #0ea49b;\n  border-radius: 375px;\n  width: 375px;\n  height: 375px;\n  position: absolute;\n  left: -62.5px;\n  top: 167px;\n}\n.frame-239185 {\n  width: 1222.41px;\n  height: 286.84px;\n  position: absolute;\n  left: 12px;\n  top: 317px;\n}\n.group-239189 {\n  position: absolute;\n  inset: 0;\n}\n.last-name {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636.05px;\n  top: 0px;\n  width: 128px;\n  height: 22px;\n}\n.group-239188 {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-6698 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 47.94%;\n  height: 16.73%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 73.56%;\n  top: 9.71%;\n}\n.last-name2 {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 31.5%;\n  left: 53.7%;\n  width: 14.81%;\n  bottom: 78.44%;\n  top: 14.24%;\n  height: 7.32%;\n}\n.group-239191 {\n  position: absolute;\n  inset: 0;\n}\n.country {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636.05px;\n  top: 104px;\n  width: 128px;\n  height: 22px;\n}\n.group-239190 {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-66982 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 47.94%;\n  height: 16.73%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 37.3%;\n  top: 45.96%;\n}\n.your-country {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 31.5%;\n  left: 53.7%;\n  width: 14.81%;\n  bottom: 42.18%;\n  top: 50.5%;\n  height: 7.32%;\n}\n.group-239197 {\n  position: absolute;\n  inset: 0;\n}\n.gender {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0.05px;\n  top: 104px;\n  width: 128px;\n  height: 22px;\n}\n.group-239196 {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-66983 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.34%;\n  left: 0.1%;\n  bottom: 37.39%;\n  top: 46.05%;\n}\n.your-gender {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 85.29%;\n  left: 1.55%;\n  width: 13.16%;\n  bottom: 42.13%;\n  top: 50.55%;\n  height: 7.32%;\n}\n.group-239182 {\n  position: absolute;\n  inset: 0;\n}\n.first-name {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 128px;\n  height: 22px;\n}\n.group-239187 {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-66984 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.35%;\n  left: 0.1%;\n  bottom: 73.65%;\n  top: 9.79%;\n}\n.your-first-name {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 85.29%;\n  left: 1.54%;\n  width: 13.16%;\n  bottom: 78.39%;\n  top: 14.29%;\n  height: 7.32%;\n}\n.group-239193 {\n  width: 586.35px;\n  height: 75.84px;\n  position: static;\n}\n.bussines-name {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636.05px;\n  top: 211px;\n  width: 128px;\n  height: 22px;\n}\n.group-239192 {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-66985 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 47.94%;\n  height: 16.73%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 0%;\n  top: 83.27%;\n}\n.your-bussines-name {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 28.55%;\n  left: 53.7%;\n  width: 17.75%;\n  bottom: 4.88%;\n  top: 87.8%;\n  height: 7.32%;\n}\n.group-239195 {\n  position: absolute;\n  inset: 0;\n}\n.language {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0.05px;\n  top: 211px;\n  width: 128px;\n  height: 22px;\n}\n.group-239194 {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-66986 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.34%;\n  left: 0.1%;\n  bottom: 0.09%;\n  top: 83.35%;\n}\n.your-language {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.4;\n  position: absolute;\n  right: 85.29%;\n  left: 1.55%;\n  width: 13.16%;\n  bottom: 4.83%;\n  top: 87.85%;\n  height: 7.32%;\n}\n.group-239200 {\n  position: absolute;\n  inset: 0;\n}\n.group-239198 {\n  width: 179px;\n  height: 50.08px;\n  position: static;\n}\n.jhondoe-example-com2 {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  position: absolute;\n  left: 93.61px;\n  top: 688.04px;\n}\n._1-month-ago {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.5;\n  position: absolute;\n  left: 93.61px;\n  top: 716.12px;\n}\n.button-edit-email {\n  width: 243.81px;\n  height: 40.19px;\n  position: static;\n}\n.rectangle-1072 {\n  background: #4182f9;\n  border-radius: 7.49px;\n  opacity: 0.1;\n  width: 19.3%;\n  height: 4.78%;\n  position: absolute;\n  right: 77.74%;\n  left: 2.96%;\n  bottom: 6.05%;\n  top: 89.17%;\n}\n.edit-email-address {\n  color: #4182f9;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  position: absolute;\n  right: 79.93%;\n  left: 5.17%;\n  width: 14.9%;\n  bottom: 7.19%;\n  top: 90.26%;\n  height: 2.55%;\n}\n.my-email-address {\n  color: #000000;\n  text-align: right;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 16.850000381469727px;\n  font-weight: 500;\n  position: absolute;\n  left: 29.96px;\n  top: 644.04px;\n  width: 152px;\n  height: 25px;\n}\n.user {\n  width: 44.93px;\n  height: 44.93px;\n  position: absolute;\n  left: 29.96px;\n  top: 688.04px;\n}\n.ellipse-1697 {\n  background: #4182f9;\n  border-radius: 50%;\n  opacity: 0.1;\n  width: 44.93px;\n  height: 44.93px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.icons {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 6.04px;\n  top: 4.96px;\n  overflow: visible;\n}\n.edit-button {\n  background: #0ea49b;\n  border: none;\n  border-radius: 50px;\n  color: #fff;\n  cursor: pointer;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 24px;\n  position: absolute;\n  left: 993px;\n  top: 116px;\n  transition: transform 0.2s ease, box-shadow 0.3s ease;\n  box-shadow: 0 4px 12px rgba(14, 164, 155, 0.3);\n}\n.edit-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(14, 164, 155, 0.4);\n}\n.edit-button:active {\n  transform: scale(0.96);\n  box-shadow: 0 3px 6px rgba(14, 164, 155, 0.2);\n}\n.edit-button .text {\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n.text {\n  color: #000000;\n  text-align: center;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  width: 460px;\n}\n.edit-email-button {\n  background: #4182f9;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-family: "Poppins", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  position: absolute;\n  left: 93px;\n  top: 760px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  box-shadow: 0 4px 8px rgba(65, 130, 249, 0.2);\n}\n.edit-email-button:hover {\n  background: #2f6df1;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(65, 130, 249, 0.3);\n}\n.edit-email-button:active {\n  transform: scale(0.97);\n  box-shadow: 0 3px 6px rgba(65, 130, 249, 0.2);\n}\n/*# sourceMappingURL=profile.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile.component.ts", lineNumber: 15 });
})();

// src/app/features/settings/settings.component.ts
var _c03 = () => ["/dashboard/filter-movements"];
var _c1 = () => ["/dashboard/categories"];
var _c2 = () => ["/dashboard/spending-limit"];
var _c3 = () => ["/dashboard/alerts"];
var SettingsComponent = class _SettingsComponent {
  router;
  route;
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  goToCategories() {
    this.router.navigate(["categories"], { relativeTo: this.route });
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 21, vars: 8, consts: [[1, "settings-wrapper"], [1, "settings-header"], [1, "settings-container"], [1, "settings-description"], [1, "settings-buttons"], [1, "setting-btn"], [1, "setting-btn", 3, "routerLink"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2)(5, "p", 3);
      \u0275\u0275text(6, " Variety of tools to tailor the user experience ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275text(9, "Currency conversion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275text(11, "Filter Movements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275text(13, "Create categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 6);
      \u0275\u0275text(15, "Spending preferences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 6);
      \u0275\u0275text(17, "Custom reminders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 5);
      \u0275\u0275text(19, "Unit segmentation");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c03));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c2));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c3));
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink], styles: ['\n\n.settings-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 100px 20px;\n  background-color: #DCDCD1;\n  margin-left: 30px;\n}\n.settings-header[_ngcontent-%COMP%] {\n  background-color: #0EA49B;\n  text-align: center;\n  border-radius: 15px;\n  color: black;\n  margin-bottom: 40px;\n  -webkit-user-select: none;\n  user-select: none;\n  width: fit-content;\n  min-width: 300px;\n  font-size: 25px;\n  margin-left: -500px;\n  font-family: "Palanquin Dark", sans-serif;\n  font-weight: 700;\n}\n.settings-container[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 30px;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.settings-description[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-bottom: 50px;\n  color: #333;\n  font-family: "Palanquin Dark", sans-serif;\n  font-weight: 700;\n}\n.settings-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 50px;\n}\n.setting-btn[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background-color: #0EA49B;\n  color: black;\n  border: none;\n  border-radius: 15px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.3s;\n  font-family: "Palanquin Dark", sans-serif;\n  font-weight: 500;\n  font-size: 20px;\n}\n.setting-btn[_ngcontent-%COMP%]:hover {\n  background-color: #1ed6ca;\n}\n/*# sourceMappingURL=settings.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [RouterModule], template: `
    <div class="settings-wrapper">
      <div class="settings-header">
        <h1>Settings</h1>
      </div>

      <div class="settings-container">
        <p class="settings-description">
          Variety of tools to tailor the user experience
        </p>

        <div class="settings-buttons">
          <button class="setting-btn">Currency conversion</button>
          <button class="setting-btn" [routerLink]="['/dashboard/filter-movements']">Filter Movements</button>
          <button class="setting-btn" [routerLink]="['/dashboard/categories']">Create categories</button>
          <button class="setting-btn" [routerLink]="['/dashboard/spending-limit']">Spending preferences</button>
          <button class="setting-btn" [routerLink]="['/dashboard/alerts']">Custom reminders</button>
          <button class="setting-btn">Unit segmentation</button>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* src/app/features/settings/settings.component.css */\n.settings-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  padding: 100px 20px;\n  background-color: #DCDCD1;\n  margin-left: 30px;\n}\n.settings-header {\n  background-color: #0EA49B;\n  text-align: center;\n  border-radius: 15px;\n  color: black;\n  margin-bottom: 40px;\n  -webkit-user-select: none;\n  user-select: none;\n  width: fit-content;\n  min-width: 300px;\n  font-size: 25px;\n  margin-left: -500px;\n  font-family: "Palanquin Dark", sans-serif;\n  font-weight: 700;\n}\n.settings-container {\n  background-color: white;\n  padding: 30px;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.settings-description {\n  font-size: 25px;\n  margin-bottom: 50px;\n  color: #333;\n  font-family: "Palanquin Dark", sans-serif;\n  font-weight: 700;\n}\n.settings-buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 50px;\n}\n.setting-btn {\n  padding: 12px 16px;\n  background-color: #0EA49B;\n  color: black;\n  border: none;\n  border-radius: 15px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.3s;\n  font-family: "Palanquin Dark", sans-serif;\n  font-weight: 500;\n  font-size: 20px;\n}\n.setting-btn:hover {\n  background-color: #1ed6ca;\n}\n/*# sourceMappingURL=settings.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 34 });
})();

// src/app/features/profile/edit/editprofile.component.ts
var EditProfileComponent = class _EditProfileComponent {
  router;
  fb;
  authService;
  profileForm;
  isLoading = false;
  successMessage = "";
  errorMessage = "";
  userInfo;
  showMenu = false;
  constructor(router, fb, authService) {
    this.router = router;
    this.fb = fb;
    this.authService = authService;
  }
  ngOnInit() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
      this.profileForm = this.fb.group({
        firstName: [this.userInfo.firstName || "", Validators.required],
        lastName: [this.userInfo.lastName || "", Validators.required],
        password: [this.userInfo.password],
        email: [this.userInfo.email || "", [Validators.required, Validators.email]]
      });
    }
  }
  onSave() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      this.successMessage = "";
      this.errorMessage = "";
      const rawFormValue = this.profileForm.getRawValue();
      const updateRequest = {
        firstName: rawFormValue.firstName,
        lastName: rawFormValue.lastName,
        email: rawFormValue.email,
        password: rawFormValue.password
      };
      console.log(this.profileForm.value);
      if (rawFormValue.password?.trim()) {
        updateRequest.password = rawFormValue.password.trim();
      }
      this.authService.updateUserProfile(this.userInfo.id, updateRequest).subscribe({
        next: (updatedProfile) => {
          this.successMessage = "Perfil actualizado correctamente";
          this.isLoading = false;
          const userStr = localStorage.getItem("user");
          if (userStr) {
            const user = JSON.parse(userStr);
            user.firstName = updatedProfile.firstName;
            user.lastName = updatedProfile.lastName;
            user.email = updatedProfile.email;
            localStorage.setItem("user", JSON.stringify(user));
          }
          this.profileForm.patchValue({ password: "" });
          this.router.navigate(["dashboard/profile"]);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Error al actualizar el perfil";
          this.isLoading = false;
        }
      });
    }
  }
  static \u0275fac = function EditProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditProfileComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfileComponent, selectors: [["app-editprofile"]], decls: 36, vars: 4, consts: [[1, "the-warning-more"], [1, "weolcome-buttons"], [1, "my-profile"], [1, "cambiar"], [3, "ngSubmit", "formGroup"], [1, "frame-239183"], [1, "group-239183"], [1, "jhon-doe"], [1, "jhondoe-example-com"], [1, "avatar-user-250"], [1, "rectangle"], [1, "rectangle2"], [1, "frame-239185"], [1, "last-name"], [1, "group-239188"], ["type", "text", "formControlName", "lastName", 1, "rectangle-6698", "input-field"], [1, "password"], [1, "group-239196"], ["type", "password", "formControlName", "password", 1, "rectangle-669820", "input-field"], [1, "first-name"], [1, "group-239187"], ["type", "text", "formControlName", "firstName", 1, "rectangle-66983", "input-field"], [1, "e-mail"], ["type", "text", "formControlName", "email", 1, "rectangle-66982", "input-field"], ["type", "submit", 1, "edit-button"], [1, "text"]], template: function EditProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "My Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275text(5, "Cambiar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSave();
      });
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275element(14, "div", 10)(15, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
      \u0275\u0275text(18, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275element(20, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 16);
      \u0275\u0275text(22, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 17);
      \u0275\u0275element(24, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 19);
      \u0275\u0275text(26, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20);
      \u0275\u0275element(28, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 22);
      \u0275\u0275text(30, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275element(32, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 24)(34, "div", 25);
      \u0275\u0275text(35, "Accept");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.userInfo.firstName, " ", ctx.userInfo.lastName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userInfo.email);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, RouterModule], styles: ['\n\n.the-warning-more[_ngcontent-%COMP%], \n.the-warning-more[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.the-warning-more[_ngcontent-%COMP%] {\n  background: #dcdcd1;\n  border-radius: 0px 0px 0px 15px;\n  height: 944px;\n  position: relative;\n  overflow: hidden;\n}\n.weolcome-buttons[_ngcontent-%COMP%] {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 36px;\n  top: 17px;\n}\n.my-profile[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 358px;\n  height: 33px;\n}\n.cambiar[_ngcontent-%COMP%] {\n  color: #dcdcd1;\n  text-align: left;\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  position: absolute;\n  left: -12px;\n  top: -226px;\n}\n.frame-239183[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  width: 1263px;\n  height: 841px;\n  position: absolute;\n  left: 208px;\n  top: 70px;\n  overflow: hidden;\n}\n.group-239199[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.group-239183[_ngcontent-%COMP%] {\n  width: 268px;\n  height: 77px;\n  position: static;\n}\n.jhon-doe[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Medium", sans-serif;\n  font-size: 32px;\n  font-weight: 500;\n  position: absolute;\n  left: 337px;\n  top: 107px;\n}\n.jhondoe-example-com[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Medium", sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n  position: absolute;\n  left: 337px;\n  top: 153px;\n}\n.avatar-user-250[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 125px;\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  left: 49px;\n  top: 24px;\n  overflow: hidden;\n  aspect-ratio: 1;\n}\n.rectangle[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 100px;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 75px;\n  top: 40px;\n}\n.rectangle2[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 375px;\n  width: 375px;\n  height: 375px;\n  position: absolute;\n  left: -62.5px;\n  top: 167px;\n}\n.frame-239185[_ngcontent-%COMP%] {\n  width: 1222.41px;\n  height: 286.84px;\n  position: absolute;\n  left: 12px;\n  top: 317px;\n}\n.group-239189[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.last-name[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636.05px;\n  top: 0px;\n  width: 128px;\n  height: 22px;\n}\n.group-239188[_ngcontent-%COMP%] {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-6698[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 47.94%;\n  height: 16.73%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 73.56%;\n  top: 9.71%;\n}\n.group-239197[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.password[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0.05px;\n  top: 104px;\n  width: 128px;\n  height: 22px;\n}\n.group-239196[_ngcontent-%COMP%] {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-669820[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.34%;\n  left: 0.1%;\n  bottom: 37.39%;\n  top: 46.05%;\n}\n.group-239182[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.first-name[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 128px;\n  height: 22px;\n}\n.group-239187[_ngcontent-%COMP%] {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-66983[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.35%;\n  left: 0.1%;\n  bottom: 73.65%;\n  top: 9.79%;\n}\n.edit-button[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 100px;\n  padding: 12px 24px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  position: absolute;\n  left: 993px;\n  top: 116px;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.edit-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(14, 164, 155, 0.5);\n}\n.edit-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: center;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  width: auto;\n}\n.input-field[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 10px 15px;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14px;\n  color: #000;\n  background-color: #f9f9f9;\n  border-radius: 7.49px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  width: 40%;\n  transition: all 0.3s ease;\n}\n.input-field[_ngcontent-%COMP%]:focus {\n  background-color: #fff;\n  box-shadow: 0 0 0 2px #0ea49b;\n}\n.e-mail[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636px;\n  top: 104px;\n  width: 128px;\n  height: 22px;\n}\n.group-239188[_ngcontent-%COMP%] {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-66982[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 39.96%;\n  height: 16.56%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 37.3%;\n  top: 45.96%;\n}\n/*# sourceMappingURL=editprofile.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProfileComponent, [{
    type: Component,
    args: [{ selector: "app-editprofile", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule], template: '<div class="the-warning-more">\r\n  <div class="weolcome-buttons">\r\n    <div class="my-profile">My Profile</div>\r\n  </div>\r\n  <div class="cambiar">Cambiar</div>\r\n\r\n  <!-- Comienzo del formulario reactivo -->\r\n  <form [formGroup]="profileForm" (ngSubmit)="onSave()">\r\n    <div class="frame-239183">\r\n      <div class="group-239183">\r\n        <div class="jhon-doe">{{ userInfo.firstName }} {{ userInfo.lastName }}</div>\r\n        <div class="jhondoe-example-com">{{ userInfo.email }}</div>\r\n      </div>\r\n\r\n      <div class="avatar-user-250">\r\n        <div class="rectangle"></div>\r\n        <div class="rectangle2"></div>\r\n      </div>\r\n\r\n      <div class="frame-239185">\r\n        <!-- Last Name -->\r\n<div class="last-name">Last Name</div>\r\n<div class="group-239188">\r\n  <input type="text" class="rectangle-6698 input-field" formControlName="lastName" />\r\n</div>\r\n\r\n<!-- Password -->\r\n<div class="password">Password</div>\r\n<div class="group-239196">\r\n  <input type="password" class="rectangle-669820 input-field" formControlName="password" />\r\n</div>\r\n\r\n<!-- First Name -->\r\n<div class="first-name">First Name</div>\r\n<div class="group-239187">\r\n  <input type="text" class="rectangle-66983 input-field" formControlName="firstName" />\r\n</div>\r\n\r\n<!-- Email -->\r\n<div class="e-mail">Email</div>\r\n<div class="group-239188">\r\n  <input type="text" class="rectangle-66982 input-field" formControlName="email" />\r\n</div>\r\n\r\n      </div>\r\n\r\n      <!-- Bot\xF3n de submit -->\r\n      <button class="edit-button" type="submit">\r\n        <div class="text">Accept</div>\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n', styles: ['/* src/app/features/profile/edit/editprofile.component.css */\n.the-warning-more,\n.the-warning-more * {\n  box-sizing: border-box;\n}\n.the-warning-more {\n  background: #dcdcd1;\n  border-radius: 0px 0px 0px 15px;\n  height: 944px;\n  position: relative;\n  overflow: hidden;\n}\n.weolcome-buttons {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 36px;\n  top: 17px;\n}\n.my-profile {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 358px;\n  height: 33px;\n}\n.cambiar {\n  color: #dcdcd1;\n  text-align: left;\n  font-family: "PalanquinDark-Regular", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  position: absolute;\n  left: -12px;\n  top: -226px;\n}\n.frame-239183 {\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  width: 1263px;\n  height: 841px;\n  position: absolute;\n  left: 208px;\n  top: 70px;\n  overflow: hidden;\n}\n.group-239199 {\n  position: absolute;\n  inset: 0;\n}\n.group-239183 {\n  width: 268px;\n  height: 77px;\n  position: static;\n}\n.jhon-doe {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Medium", sans-serif;\n  font-size: 32px;\n  font-weight: 500;\n  position: absolute;\n  left: 337px;\n  top: 107px;\n}\n.jhondoe-example-com {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Medium", sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n  position: absolute;\n  left: 337px;\n  top: 153px;\n}\n.avatar-user-250 {\n  background: #ffffff;\n  border-radius: 125px;\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  left: 49px;\n  top: 24px;\n  overflow: hidden;\n  aspect-ratio: 1;\n}\n.rectangle {\n  background: #0ea49b;\n  border-radius: 100px;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 75px;\n  top: 40px;\n}\n.rectangle2 {\n  background: #0ea49b;\n  border-radius: 375px;\n  width: 375px;\n  height: 375px;\n  position: absolute;\n  left: -62.5px;\n  top: 167px;\n}\n.frame-239185 {\n  width: 1222.41px;\n  height: 286.84px;\n  position: absolute;\n  left: 12px;\n  top: 317px;\n}\n.group-239189 {\n  position: absolute;\n  inset: 0;\n}\n.last-name {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636.05px;\n  top: 0px;\n  width: 128px;\n  height: 22px;\n}\n.group-239188 {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-6698 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 47.94%;\n  height: 16.73%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 73.56%;\n  top: 9.71%;\n}\n.group-239197 {\n  position: absolute;\n  inset: 0;\n}\n.password {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0.05px;\n  top: 104px;\n  width: 128px;\n  height: 22px;\n}\n.group-239196 {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-669820 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.34%;\n  left: 0.1%;\n  bottom: 37.39%;\n  top: 46.05%;\n}\n.group-239182 {\n  position: absolute;\n  inset: 0;\n}\n.first-name {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 128px;\n  height: 22px;\n}\n.group-239187 {\n  width: 520.25px;\n  height: 47.5px;\n  position: static;\n}\n.rectangle-66983 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 42.56%;\n  height: 16.56%;\n  position: absolute;\n  right: 57.35%;\n  left: 0.1%;\n  bottom: 73.65%;\n  top: 9.79%;\n}\n.edit-button {\n  background: #0ea49b;\n  border-radius: 100px;\n  padding: 12px 24px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  position: absolute;\n  left: 993px;\n  top: 116px;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.edit-button:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(14, 164, 155, 0.5);\n}\n.edit-button:active {\n  transform: scale(0.95);\n}\n.text {\n  color: #ffffff;\n  text-align: center;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  width: auto;\n}\n.input-field {\n  border: none;\n  outline: none;\n  padding: 10px 15px;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14px;\n  color: #000;\n  background-color: #f9f9f9;\n  border-radius: 7.49px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  width: 40%;\n  transition: all 0.3s ease;\n}\n.input-field:focus {\n  background-color: #fff;\n  box-shadow: 0 0 0 2px #0ea49b;\n}\n.e-mail {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 14.977777481079102px;\n  font-weight: 400;\n  opacity: 0.8;\n  position: absolute;\n  left: 636px;\n  top: 104px;\n  width: 128px;\n  height: 22px;\n}\n.group-239188 {\n  width: 586px;\n  height: 48px;\n  position: static;\n}\n.rectangle-66982 {\n  background: #f9f9f9;\n  border-radius: 7.49px;\n  width: 39.96%;\n  height: 16.56%;\n  position: absolute;\n  right: 0%;\n  left: 52.06%;\n  bottom: 37.3%;\n  top: 45.96%;\n}\n/*# sourceMappingURL=editprofile.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: FormBuilder }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfileComponent, { className: "EditProfileComponent", filePath: "src/app/features/profile/edit/editprofile.component.ts", lineNumber: 15 });
})();

// src/app/features/transactionshistory/transaction.history.component.ts
var TransactionHistoryComponent = class _TransactionHistoryComponent {
  http;
  isLoading = true;
  errorMessage = "";
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadTransactions();
  }
  loadTransactions() {
  }
  static \u0275fac = function TransactionHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionHistoryComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionHistoryComponent, selectors: [["app-transaction-history"]], decls: 181, vars: 0, consts: [[1, "content"], [1, "weolcome-buttons"], [1, "my-transactions"], [1, "all-tickets"], [1, "cards-default"], [1, "sheet"], [1, "all-transactions"], [1, "sort2"], ["src", "icon-sort0.svg", 1, "icon-sort"], [1, "filter2"], ["src", "icon-filter0.svg", 1, "icon-filter"], [1, "table-top"], [1, "transactions-details"], [1, "category-name"], [1, "amount"], [1, "date"], ["src", "divider-line-horizontal0.svg", 1, "divider-line-horizontal"], [1, "frame-239184"], [1, "table-ticket-priority-normal"], ["src", "/assets/icons/dots-vertical.svg", 1, "icon-more-vertical"], [1, "chip-priority-normal"], [1, "sheet2"], [1, "title"], [1, "time-label"], [1, "date-label"], [1, "date-customer"], [1, "customer-name"], [1, "ticket-information"], [1, "ticket-name"], ["src", "/assets/icons/piggy-bank.png", 1, "icons"], ["src", "divider-line-horizontal1.svg", 1, "divider-line-horizontal2"], ["src", "divider-line-horizontal2.svg", 1, "divider-line-horizontal3"], ["src", "/assets/icons/dots-vertical.svg", 1, "icon-more-vertical2"], ["src", "/assets/icons/piggy-bank.png", 1, "icons2"], ["src", "divider-line-horizontal3.svg", 1, "divider-line-horizontal4"], ["src", "divider-line-horizontal4.svg", 1, "divider-line-horizontal5"], ["src", "/assets/icons/dots-vertical.svg", 1, "icon-more-vertical3"], [1, "sheet3"], ["src", "/assets/icons/piggy-bank.png", 1, "icons3"], ["src", "divider-line-horizontal5.svg", 1, "divider-line-horizontal6"], ["src", "divider-line-horizontal6.svg", 1, "divider-line-horizontal7"], ["src", "/assets/icons/dots-vertical.svg", 1, "icon-more-vertical4"], ["src", "/assets/icons/piggy-bank.png", 1, "icons4"], ["src", "divider-line-horizontal7.svg", 1, "divider-line-horizontal8"], ["src", "divider-line-horizontal8.svg", 1, "divider-line-horizontal9"], ["src", "/assets/icons/dots-vertical.svg", 1, "icon-more-vertical5"], ["src", "/assets/icons/piggy-bank.png", 1, "icons5"], ["src", "divider-line-horizontal9.svg", 1, "divider-line-horizontal10"], ["src", "divider-line-horizontal10.svg", 1, "divider-line-horizontal11"], ["src", "/assets/icons/dots-vertical.svg", 1, "icon-more-vertical6"], ["src", "/assets/icons/piggy-bank.png", 1, "icons6"], ["src", "divider-line-horizontal11.svg", 1, "divider-line-horizontal12"], ["src", "divider-line-horizontal12.svg", 1, "divider-line-horizontal13"], ["src", "/assets/icons/dots-vertical.svg", 1, "icon-more-vertical7"], ["src", "/assets/icons/piggy-bank.png", 1, "icons7"], ["src", "divider-line-horizontal13.svg", 1, "divider-line-horizontal14"], ["src", "divider-line-horizontal14.svg", 1, "divider-line-horizontal15"], [1, "rows-per-page"], [1, "rows-per-page2"], [1, "_8"], ["src", "icon-dropdown0.svg", 1, "icon-dropdown"], [1, "pagination"], [1, "_1-8-of-1240"], ["src", "icon-arrow-left0.svg", 1, "icon-arrow-left"], ["src", "icon-arrow-right0.svg", 1, "icon-arrow-right"]], template: function TransactionHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "My Transactions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275text(8, "All Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275text(10, "Sort");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "img", 8);
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275text(13, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "img", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
      \u0275\u0275text(17, "Transactions Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275text(19, "Category name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275text(21, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275text(23, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17)(26, "div", 18);
      \u0275\u0275element(27, "img", 19);
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275element(29, "div", 21);
      \u0275\u0275elementStart(30, "div", 22);
      \u0275\u0275text(31, "$16.13");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 23);
      \u0275\u0275text(33, "5:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 24);
      \u0275\u0275text(35, "May 25, 2019");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "div", 25);
      \u0275\u0275elementStart(37, "div", 26);
      \u0275\u0275text(38, "Tourism");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 27);
      \u0275\u0275text(40, "Updated 2 days ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 28);
      \u0275\u0275text(42, " First invoice for a new client acquired in April ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "img", 29)(44, "img", 30)(45, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 18);
      \u0275\u0275element(47, "img", 32);
      \u0275\u0275elementStart(48, "div", 20);
      \u0275\u0275element(49, "div", 21);
      \u0275\u0275elementStart(50, "div", 22);
      \u0275\u0275text(51, "$65.06");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 23);
      \u0275\u0275text(53, "5:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 24);
      \u0275\u0275text(55, "May 25, 2019");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "div", 25);
      \u0275\u0275elementStart(57, "div", 26);
      \u0275\u0275text(58, "Art");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 27);
      \u0275\u0275text(60, "Updated 2 days ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 28);
      \u0275\u0275text(62, " Invoice for the delivery of office furniture ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "img", 33)(64, "img", 34)(65, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 18);
      \u0275\u0275element(67, "img", 36);
      \u0275\u0275elementStart(68, "div", 20);
      \u0275\u0275element(69, "div", 37);
      \u0275\u0275elementStart(70, "div", 22);
      \u0275\u0275text(71, "$93.93");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 23);
      \u0275\u0275text(73, "5:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 24);
      \u0275\u0275text(75, "May 25, 2019");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 25);
      \u0275\u0275text(77, "Goal: Organize a remote event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 26);
      \u0275\u0275text(79, "Workshop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 27);
      \u0275\u0275text(81, "Updated 2 days ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 28);
      \u0275\u0275text(83, " Invoice for a critical repair in an urgent situation ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "img", 38)(85, "img", 39)(86, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 18);
      \u0275\u0275element(88, "img", 41);
      \u0275\u0275elementStart(89, "div", 20);
      \u0275\u0275element(90, "div", 21);
      \u0275\u0275elementStart(91, "div", 22);
      \u0275\u0275text(92, "$23.96");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 23);
      \u0275\u0275text(94, "5:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 24);
      \u0275\u0275text(96, "May 25, 2019");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "div", 25);
      \u0275\u0275elementStart(98, "div", 26);
      \u0275\u0275text(99, "Other");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 27);
      \u0275\u0275text(101, "Updated 2 days ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 28);
      \u0275\u0275text(103, " Invoice for a semi-annual software subscription ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "img", 42)(105, "img", 43)(106, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 18);
      \u0275\u0275element(108, "img", 45);
      \u0275\u0275elementStart(109, "div", 20);
      \u0275\u0275element(110, "div", 37);
      \u0275\u0275elementStart(111, "div", 22);
      \u0275\u0275text(112, "$29.39");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 23);
      \u0275\u0275text(114, "5:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 24);
      \u0275\u0275text(116, "May 25, 2019");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 25);
      \u0275\u0275text(118, "Goal: Find work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 26);
      \u0275\u0275text(120, "Finance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 27);
      \u0275\u0275text(122, "Updated 2 days ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 28);
      \u0275\u0275text(124, "Delivery of Office Supplies");
      \u0275\u0275elementEnd();
      \u0275\u0275element(125, "img", 46)(126, "img", 47)(127, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 18);
      \u0275\u0275element(129, "img", 49);
      \u0275\u0275elementStart(130, "div", 20);
      \u0275\u0275element(131, "div", 37);
      \u0275\u0275elementStart(132, "div", 22);
      \u0275\u0275text(133, "$2.42");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 23);
      \u0275\u0275text(135, "5:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 24);
      \u0275\u0275text(137, "May 25, 2019");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 25);
      \u0275\u0275text(139, "Goal: Track & Measure Speaker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 26);
      \u0275\u0275text(141, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 27);
      \u0275\u0275text(143, "Updated 2 days ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 28);
      \u0275\u0275text(145, "Equipment Rental for Training");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "img", 50)(147, "img", 51)(148, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 18);
      \u0275\u0275element(150, "img", 53);
      \u0275\u0275elementStart(151, "div", 20);
      \u0275\u0275element(152, "div", 37);
      \u0275\u0275elementStart(153, "div", 22);
      \u0275\u0275text(154, "$59.80");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 23);
      \u0275\u0275text(156, "5:00 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 24);
      \u0275\u0275text(158, "May 25, 2019");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 25);
      \u0275\u0275text(160, "Goal: Build my network");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 26);
      \u0275\u0275text(162, "Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 27);
      \u0275\u0275text(164, "Updated 2 days ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 28);
      \u0275\u0275text(166, "IT Maintenance Subscription");
      \u0275\u0275elementEnd();
      \u0275\u0275element(167, "img", 54)(168, "img", 55)(169, "img", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 57)(171, "div", 58);
      \u0275\u0275text(172, "Rows per page:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 59);
      \u0275\u0275text(174, "8");
      \u0275\u0275elementEnd();
      \u0275\u0275element(175, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 61)(177, "div", 62);
      \u0275\u0275text(178, "1-8 of 1240");
      \u0275\u0275elementEnd();
      \u0275\u0275element(179, "img", 63)(180, "img", 64);
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, RouterModule], styles: ['\n\n.content[_ngcontent-%COMP%], \n.content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.content[_ngcontent-%COMP%] {\n  background: #dcdcd1;\n  border-radius: 0px 0px 0px 15px;\n  height: 944px;\n  position: absolute;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: 100px;\n  margin-bottom: -10px;\n  top: 80px;\n  width: 100%;\n}\n.weolcome-buttons[_ngcontent-%COMP%] {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 36px;\n  top: 17px;\n}\n.my-transactions[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 358px;\n  height: 33px;\n}\n.all-tickets[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  padding: 24px 1px 24px 1px;\n  height: 852px;\n  position: absolute;\n  right: 20px;\n  left: 20px;\n  top: 70px;\n  overflow: hidden;\n}\n.cards-default[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: -5px;\n  top: 5px;\n}\n.sheet[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 8px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.all-transactions[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 19px;\n  letter-spacing: 0.4px;\n  font-weight: 700;\n  position: absolute;\n  left: 1px;\n  top: 24px;\n  width: 400px;\n}\n.sort[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.sort2[_ngcontent-%COMP%] {\n  color: var(--grayscale-gray-dark, #4b506d);\n  text-align: left;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 370.5px;\n  top: 24px;\n}\n.icon-sort[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 408.5px;\n  top: 25px;\n  overflow: visible;\n}\n.filter[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.filter2[_ngcontent-%COMP%] {\n  color: var(--grayscale-gray-dark, #4b506d);\n  text-align: left;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 16.25px;\n  top: 24px;\n}\n.icon-filter[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 60.25px;\n  top: 25px;\n  overflow: visible;\n}\n.table-top[_ngcontent-%COMP%] {\n  width: 1120px;\n  height: 30px;\n  position: absolute;\n  left: 260px;\n  top: 103px;\n}\n.transactions-details[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-weight: 700;\n  position: absolute;\n  right: 649px;\n  left: 31px;\n  top: 0px;\n}\n.category-name[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-weight: 700;\n  position: absolute;\n  right: 401px;\n  top: 0px;\n  width: 208px;\n}\n.amount[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-weight: 700;\n  position: absolute;\n  right: 77px;\n  top: 0px;\n  width: 104px;\n}\n.date[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-weight: 700;\n  position: absolute;\n  right: 221px;\n  top: 0px;\n  width: 140px;\n}\n.divider-line-horizontal[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 30px;\n  overflow: visible;\n}\n.frame-239184[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 1120px;\n  position: absolute;\n  left: 259px;\n  top: 132.73px;\n}\n.table-ticket-priority-normal[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  flex-shrink: 0;\n  width: 1120px;\n  height: 92px;\n  position: relative;\n}\n.content2[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.icon-more-vertical[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.chip-priority-normal[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 24px;\n  position: absolute;\n  right: 105px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.group-239186[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.sheet2[_ngcontent-%COMP%] {\n  background: #f15b64;\n  border-radius: 100px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: center;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  text-transform: uppercase;\n  position: absolute;\n  right: 12px;\n  left: 12px;\n  top: 50%;\n  translate: 0 -50%;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.time-label[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.1px;\n  font-weight: 400;\n  position: absolute;\n  right: 221px;\n  top: calc(50% - -4px);\n  width: 140px;\n  height: 16px;\n}\n.date-label[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "DmSans-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 221px;\n  top: calc(50% - 20px);\n  width: 140px;\n}\n.date-customer[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.1px;\n  font-weight: 400;\n  position: absolute;\n  right: 401px;\n  top: calc(50% - -4px);\n  width: 208px;\n  height: 16px;\n}\n.customer-name[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "DmSans-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 401px;\n  top: calc(50% - 20px);\n  width: 208px;\n}\n.ticket-information[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.1px;\n  font-weight: 400;\n  position: absolute;\n  right: 649px;\n  left: 99px;\n  top: calc(50% - -4px);\n  height: 16px;\n}\n.ticket-name[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "DmSans-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 649px;\n  left: 99px;\n  top: calc(50% - 20px);\n}\n.icons[_ngcontent-%COMP%] {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal2[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal3[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical2[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons2[_ngcontent-%COMP%] {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal4[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal5[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical3[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.sheet3[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 100px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.icons3[_ngcontent-%COMP%] {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal6[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal7[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical4[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons4[_ngcontent-%COMP%] {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal8[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal9[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical5[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons5[_ngcontent-%COMP%] {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal10[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal11[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical6[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons6[_ngcontent-%COMP%] {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal12[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal13[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical7[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons7[_ngcontent-%COMP%] {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal14[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal15[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.table-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.rows-per-page[_ngcontent-%COMP%] {\n  width: 139px;\n  height: 18px;\n  position: static;\n}\n.rows-per-page2[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: left;\n  font-family: var(--regular-14px-font-family, "Mulish-Regular", sans-serif);\n  font-size: var(--regular-14px-font-size, 14px);\n  line-height: var(--regular-14px-line-height, 20px);\n  letter-spacing: var(--regular-14px-letter-spacing, 0.3px);\n  font-weight: var(--regular-14px-font-weight, 400);\n  position: absolute;\n  right: 317px;\n  top: 807px;\n  width: 106px;\n  height: 18px;\n}\n._8[_ngcontent-%COMP%] {\n  color: var(--grayscale-gray-dark, #4b506d);\n  text-align: right;\n  font-family: var(--regular-14px-font-family, "Mulish-Regular", sans-serif);\n  font-size: var(--regular-14px-font-size, 14px);\n  line-height: var(--regular-14px-line-height, 20px);\n  letter-spacing: var(--regular-14px-letter-spacing, 0.3px);\n  font-weight: var(--regular-14px-font-weight, 400);\n  position: absolute;\n  right: 299px;\n  top: 807px;\n  width: 10px;\n  height: 18px;\n}\n.icon-dropdown[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 284px;\n  top: 810px;\n  overflow: visible;\n}\n.pagination[_ngcontent-%COMP%] {\n  width: 184px;\n  height: 24px;\n  position: static;\n}\n._1-8-of-1240[_ngcontent-%COMP%] {\n  color: #475367;\n  text-align: right;\n  font-family: var(--regular-14px-font-family, "Mulish-Regular", sans-serif);\n  font-size: var(--regular-14px-font-size, 14px);\n  line-height: var(--regular-14px-line-height, 20px);\n  letter-spacing: var(--regular-14px-letter-spacing, 0.3px);\n  font-weight: var(--regular-14px-font-weight, 400);\n  position: absolute;\n  right: 136px;\n  top: 807px;\n  width: 100px;\n  height: 18px;\n}\n.icon-arrow-left[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 88px;\n  top: 804px;\n  overflow: visible;\n}\n.icon-arrow-right[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 52px;\n  top: 804px;\n  overflow: visible;\n}\n/*# sourceMappingURL=transaction.history.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-history", standalone: true, imports: [CommonModule, RouterModule], template: '<div class="content">\r\n    <div class="weolcome-buttons">\r\n      <div class="my-transactions">My Transactions</div>\r\n    </div>\r\n    <div class="all-tickets">\r\n      <div class="cards-default">\r\n        <div class="sheet"></div>\r\n      </div>\r\n      <div class="all-transactions">All Transactions</div>\r\n      <div class="sort2">Sort</div>\r\n      <img class="icon-sort" src="icon-sort0.svg" />\r\n      <div class="filter2">Filter</div>\r\n      <img class="icon-filter" src="icon-filter0.svg" />\r\n      <div class="table-top">\r\n        <div class="transactions-details">Transactions Details</div>\r\n        <div class="category-name">Category name</div>\r\n        <div class="amount">Amount</div>\r\n        <div class="date">Date</div>\r\n        <img class="divider-line-horizontal" src="divider-line-horizontal0.svg" />\r\n      </div>\r\n      <div class="frame-239184">\r\n        <div class="table-ticket-priority-normal">\r\n          <img class="icon-more-vertical" src="/assets/icons/dots-vertical.svg" />\r\n          <div class="chip-priority-normal">\r\n            <div class="sheet2"></div>\r\n            <div class="title">$16.13</div>\r\n          </div>\r\n          <div class="time-label">5:00 PM</div>\r\n          <div class="date-label">May 25, 2019</div>\r\n          <div class="date-customer"></div>\r\n          <div class="customer-name">Tourism</div>\r\n          <div class="ticket-information">Updated 2 days ago</div>\r\n          <div class="ticket-name">\r\n            First invoice for a new client acquired in April\r\n          </div>\r\n          <img class="icons" src="/assets/icons/piggy-bank.png" />\r\n          <img\r\n            class="divider-line-horizontal2"\r\n            src="divider-line-horizontal1.svg"\r\n          />\r\n          <img\r\n            class="divider-line-horizontal3"\r\n            src="divider-line-horizontal2.svg"\r\n          />\r\n        </div>\r\n        <div class="table-ticket-priority-normal">\r\n          <img class="icon-more-vertical2" src="/assets/icons/dots-vertical.svg" />\r\n          <div class="chip-priority-normal">\r\n            <div class="sheet2"></div>\r\n            <div class="title">$65.06</div>\r\n          </div>\r\n          <div class="time-label">5:00 PM</div>\r\n          <div class="date-label">May 25, 2019</div>\r\n          <div class="date-customer"></div>\r\n          <div class="customer-name">Art</div>\r\n          <div class="ticket-information">Updated 2 days ago</div>\r\n          <div class="ticket-name">\r\n            Invoice for the delivery of office furniture\r\n          </div>\r\n          <img class="icons2" src="/assets/icons/piggy-bank.png" />\r\n          <img\r\n            class="divider-line-horizontal4"\r\n            src="divider-line-horizontal3.svg"\r\n          />\r\n          <img\r\n            class="divider-line-horizontal5"\r\n            src="divider-line-horizontal4.svg"\r\n          />\r\n        </div>\r\n        <div class="table-ticket-priority-normal">\r\n          <img class="icon-more-vertical3" src="/assets/icons/dots-vertical.svg" />\r\n          <div class="chip-priority-normal">\r\n            <div class="sheet3"></div>\r\n            <div class="title">$93.93</div>\r\n          </div>\r\n          <div class="time-label">5:00 PM</div>\r\n          <div class="date-label">May 25, 2019</div>\r\n          <div class="date-customer">Goal: Organize a remote event</div>\r\n          <div class="customer-name">Workshop</div>\r\n          <div class="ticket-information">Updated 2 days ago</div>\r\n          <div class="ticket-name">\r\n            Invoice for a critical repair in an urgent situation\r\n          </div>\r\n          <img class="icons3" src="/assets/icons/piggy-bank.png" />\r\n          <img\r\n            class="divider-line-horizontal6"\r\n            src="divider-line-horizontal5.svg"\r\n          />\r\n          <img\r\n            class="divider-line-horizontal7"\r\n            src="divider-line-horizontal6.svg"\r\n          />\r\n        </div>\r\n        <div class="table-ticket-priority-normal">\r\n          <img class="icon-more-vertical4" src="/assets/icons/dots-vertical.svg" />\r\n          <div class="chip-priority-normal">\r\n            <div class="sheet2"></div>\r\n            <div class="title">$23.96</div>\r\n          </div>\r\n          <div class="time-label">5:00 PM</div>\r\n          <div class="date-label">May 25, 2019</div>\r\n          <div class="date-customer"></div>\r\n          <div class="customer-name">Other</div>\r\n          <div class="ticket-information">Updated 2 days ago</div>\r\n          <div class="ticket-name">\r\n            Invoice for a semi-annual software subscription\r\n          </div>\r\n          <img class="icons4" src="/assets/icons/piggy-bank.png" />\r\n          <img\r\n            class="divider-line-horizontal8"\r\n            src="divider-line-horizontal7.svg"\r\n          />\r\n          <img\r\n            class="divider-line-horizontal9"\r\n            src="divider-line-horizontal8.svg"\r\n          />\r\n        </div>\r\n        <div class="table-ticket-priority-normal">\r\n          <img class="icon-more-vertical5" src="/assets/icons/dots-vertical.svg" />\r\n          <div class="chip-priority-normal">\r\n            <div class="sheet3"></div>\r\n            <div class="title">$29.39</div>\r\n          </div>\r\n          <div class="time-label">5:00 PM</div>\r\n          <div class="date-label">May 25, 2019</div>\r\n          <div class="date-customer">Goal: Find work</div>\r\n          <div class="customer-name">Finance</div>\r\n          <div class="ticket-information">Updated 2 days ago</div>\r\n          <div class="ticket-name">Delivery of Office Supplies</div>\r\n          <img class="icons5" src="/assets/icons/piggy-bank.png" />\r\n          <img\r\n            class="divider-line-horizontal10"\r\n            src="divider-line-horizontal9.svg"\r\n          />\r\n          <img\r\n            class="divider-line-horizontal11"\r\n            src="divider-line-horizontal10.svg"\r\n          />\r\n        </div>\r\n        <div class="table-ticket-priority-normal">\r\n          <img class="icon-more-vertical6" src="/assets/icons/dots-vertical.svg" />\r\n          <div class="chip-priority-normal">\r\n            <div class="sheet3"></div>\r\n            <div class="title">$2.42</div>\r\n          </div>\r\n          <div class="time-label">5:00 PM</div>\r\n          <div class="date-label">May 25, 2019</div>\r\n          <div class="date-customer">Goal: Track &amp; Measure Speaker</div>\r\n          <div class="customer-name">Education</div>\r\n          <div class="ticket-information">Updated 2 days ago</div>\r\n          <div class="ticket-name">Equipment Rental for Training</div>\r\n          <img class="icons6" src="/assets/icons/piggy-bank.png" />\r\n          <img\r\n            class="divider-line-horizontal12"\r\n            src="divider-line-horizontal11.svg"\r\n          />\r\n          <img\r\n            class="divider-line-horizontal13"\r\n            src="divider-line-horizontal12.svg"\r\n          />\r\n        </div>\r\n        <div class="table-ticket-priority-normal">\r\n          <img class="icon-more-vertical7" src="/assets/icons/dots-vertical.svg" />\r\n          <div class="chip-priority-normal">\r\n            <div class="sheet3"></div>\r\n            <div class="title">$59.80</div>\r\n          </div>\r\n          <div class="time-label">5:00 PM</div>\r\n          <div class="date-label">May 25, 2019</div>\r\n          <div class="date-customer">Goal: Build my network</div>\r\n          <div class="customer-name">Tech</div>\r\n          <div class="ticket-information">Updated 2 days ago</div>\r\n          <div class="ticket-name">IT Maintenance Subscription</div>\r\n          <img class="icons7" src="/assets/icons/piggy-bank.png" />\r\n          <img\r\n            class="divider-line-horizontal14"\r\n            src="divider-line-horizontal13.svg"\r\n          />\r\n          <img\r\n            class="divider-line-horizontal15"\r\n            src="divider-line-horizontal14.svg"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class="rows-per-page">\r\n        <div class="rows-per-page2">Rows per page:</div>\r\n        <div class="_8">8</div>\r\n        <img class="icon-dropdown" src="icon-dropdown0.svg" />\r\n      </div>\r\n      <div class="pagination">\r\n        <div class="_1-8-of-1240">1-8 of 1240</div>\r\n        <img class="icon-arrow-left" src="icon-arrow-left0.svg" />\r\n        <img class="icon-arrow-right" src="icon-arrow-right0.svg" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ', styles: ['/* src/app/features/transactionshistory/transaction.history.component.css */\n.content,\n.content * {\n  box-sizing: border-box;\n}\n.content {\n  background: #dcdcd1;\n  border-radius: 0px 0px 0px 15px;\n  height: 944px;\n  position: absolute;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: 100px;\n  margin-bottom: -10px;\n  top: 80px;\n  width: 100%;\n}\n.weolcome-buttons {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 36px;\n  top: 17px;\n}\n.my-transactions {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 358px;\n  height: 33px;\n}\n.all-tickets {\n  border-radius: 15px;\n  padding: 24px 1px 24px 1px;\n  height: 852px;\n  position: absolute;\n  right: 20px;\n  left: 20px;\n  top: 70px;\n  overflow: hidden;\n}\n.cards-default {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: -5px;\n  top: 5px;\n}\n.sheet {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 8px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.all-transactions {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 19px;\n  letter-spacing: 0.4px;\n  font-weight: 700;\n  position: absolute;\n  left: 1px;\n  top: 24px;\n  width: 400px;\n}\n.sort {\n  position: absolute;\n  inset: 0;\n}\n.sort2 {\n  color: var(--grayscale-gray-dark, #4b506d);\n  text-align: left;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 370.5px;\n  top: 24px;\n}\n.icon-sort {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 408.5px;\n  top: 25px;\n  overflow: visible;\n}\n.filter {\n  position: absolute;\n  inset: 0;\n}\n.filter2 {\n  color: var(--grayscale-gray-dark, #4b506d);\n  text-align: left;\n  font-family: "Poppins-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 16.25px;\n  top: 24px;\n}\n.icon-filter {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 60.25px;\n  top: 25px;\n  overflow: visible;\n}\n.table-top {\n  width: 1120px;\n  height: 30px;\n  position: absolute;\n  left: 260px;\n  top: 103px;\n}\n.transactions-details {\n  color: #475367;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-weight: 700;\n  position: absolute;\n  right: 649px;\n  left: 31px;\n  top: 0px;\n}\n.category-name {\n  color: #475367;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-weight: 700;\n  position: absolute;\n  right: 401px;\n  top: 0px;\n  width: 208px;\n}\n.amount {\n  color: #475367;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-weight: 700;\n  position: absolute;\n  right: 77px;\n  top: 0px;\n  width: 104px;\n}\n.date {\n  color: #475367;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-weight: 700;\n  position: absolute;\n  right: 221px;\n  top: 0px;\n  width: 140px;\n}\n.divider-line-horizontal {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 30px;\n  overflow: visible;\n}\n.frame-239184 {\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 1120px;\n  position: absolute;\n  left: 259px;\n  top: 132.73px;\n}\n.table-ticket-priority-normal {\n  border-radius: 15px;\n  flex-shrink: 0;\n  width: 1120px;\n  height: 92px;\n  position: relative;\n}\n.content2 {\n  position: absolute;\n  inset: 0;\n}\n.icon-more-vertical {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.chip-priority-normal {\n  width: 76px;\n  height: 24px;\n  position: absolute;\n  right: 105px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.group-239186 {\n  position: absolute;\n  inset: 0;\n}\n.sheet2 {\n  background: #f15b64;\n  border-radius: 100px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.title {\n  color: #ffffff;\n  text-align: center;\n  font-family: "Poppins-Regular", sans-serif;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  text-transform: uppercase;\n  position: absolute;\n  right: 12px;\n  left: 12px;\n  top: 50%;\n  translate: 0 -50%;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.time-label {\n  color: #475367;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.1px;\n  font-weight: 400;\n  position: absolute;\n  right: 221px;\n  top: calc(50% - -4px);\n  width: 140px;\n  height: 16px;\n}\n.date-label {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "DmSans-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 221px;\n  top: calc(50% - 20px);\n  width: 140px;\n}\n.date-customer {\n  color: #475367;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.1px;\n  font-weight: 400;\n  position: absolute;\n  right: 401px;\n  top: calc(50% - -4px);\n  width: 208px;\n  height: 16px;\n}\n.customer-name {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "DmSans-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 401px;\n  top: calc(50% - 20px);\n  width: 208px;\n}\n.ticket-information {\n  color: #475367;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.1px;\n  font-weight: 400;\n  position: absolute;\n  right: 649px;\n  left: 99px;\n  top: calc(50% - -4px);\n  height: 16px;\n}\n.ticket-name {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "DmSans-SemiBold", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 600;\n  position: absolute;\n  right: 649px;\n  left: 99px;\n  top: calc(50% - 20px);\n}\n.icons {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal2 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal3 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical2 {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons2 {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal4 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal5 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical3 {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.sheet3 {\n  background: #0ea49b;\n  border-radius: 100px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.icons3 {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal6 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal7 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical4 {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons4 {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal8 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal9 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical5 {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons5 {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal10 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal11 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical6 {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons6 {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal12 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal13 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.icon-more-vertical7 {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 31px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.icons7 {\n  width: 2.86%;\n  height: 34.78%;\n  position: absolute;\n  right: 93.84%;\n  left: 3.3%;\n  bottom: 32.61%;\n  top: 32.61%;\n  overflow: visible;\n}\n.divider-line-horizontal14 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: visible;\n}\n.divider-line-horizontal15 {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  top: 0px;\n  overflow: visible;\n}\n.table-bottom {\n  position: absolute;\n  inset: 0;\n}\n.rows-per-page {\n  width: 139px;\n  height: 18px;\n  position: static;\n}\n.rows-per-page2 {\n  color: #475367;\n  text-align: left;\n  font-family: var(--regular-14px-font-family, "Mulish-Regular", sans-serif);\n  font-size: var(--regular-14px-font-size, 14px);\n  line-height: var(--regular-14px-line-height, 20px);\n  letter-spacing: var(--regular-14px-letter-spacing, 0.3px);\n  font-weight: var(--regular-14px-font-weight, 400);\n  position: absolute;\n  right: 317px;\n  top: 807px;\n  width: 106px;\n  height: 18px;\n}\n._8 {\n  color: var(--grayscale-gray-dark, #4b506d);\n  text-align: right;\n  font-family: var(--regular-14px-font-family, "Mulish-Regular", sans-serif);\n  font-size: var(--regular-14px-font-size, 14px);\n  line-height: var(--regular-14px-line-height, 20px);\n  letter-spacing: var(--regular-14px-letter-spacing, 0.3px);\n  font-weight: var(--regular-14px-font-weight, 400);\n  position: absolute;\n  right: 299px;\n  top: 807px;\n  width: 10px;\n  height: 18px;\n}\n.icon-dropdown {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 284px;\n  top: 810px;\n  overflow: visible;\n}\n.pagination {\n  width: 184px;\n  height: 24px;\n  position: static;\n}\n._1-8-of-1240 {\n  color: #475367;\n  text-align: right;\n  font-family: var(--regular-14px-font-family, "Mulish-Regular", sans-serif);\n  font-size: var(--regular-14px-font-size, 14px);\n  line-height: var(--regular-14px-line-height, 20px);\n  letter-spacing: var(--regular-14px-letter-spacing, 0.3px);\n  font-weight: var(--regular-14px-font-weight, 400);\n  position: absolute;\n  right: 136px;\n  top: 807px;\n  width: 100px;\n  height: 18px;\n}\n.icon-arrow-left {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 88px;\n  top: 804px;\n  overflow: visible;\n}\n.icon-arrow-right {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 52px;\n  top: 804px;\n  overflow: visible;\n}\n/*# sourceMappingURL=transaction.history.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionHistoryComponent, { className: "TransactionHistoryComponent", filePath: "src/app/features/transactionshistory/transaction.history.component.ts", lineNumber: 14 });
})();

// src/app/services/FinancialMovement.service.ts
var FinancialMovementService = class _FinancialMovementService {
  http;
  apiUrl = `${environment.apiUrl}/movements`;
  constructor(http) {
    this.http = http;
  }
  getMovements(userId, type, categoryId) {
    let params = new HttpParams();
    if (type && type.trim() !== "") {
      params = params.set("type", type);
    }
    if (categoryId !== void 0 && categoryId !== 0) {
      params = params.set("categoryId", categoryId.toString());
    }
    const fullUrl = `${this.apiUrl}/${userId}?${params.toString()}`;
    return this.http.get(`${this.apiUrl}/${userId}`, { params });
  }
  register(userId, request) {
    const params = new HttpParams().set("userId", userId.toString());
    return this.http.post(`${this.apiUrl}/register`, request, { params });
  }
  filter(userId, categoryId, type) {
    let params = new HttpParams().set("userId", userId.toString());
    if (categoryId !== null)
      params = params.set("categoryId", categoryId.toString());
    if (type)
      params = params.set("type", type);
    return this.http.get(`${this.apiUrl}/filter`, { params });
  }
  uploadExcel(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/upload`, formData, { responseType: "text" });
  }
  static \u0275fac = function FinancialMovementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinancialMovementService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FinancialMovementService, factory: _FinancialMovementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinancialMovementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/movements/pages/movement-upload/movement-upload.component.ts
function MovementUploadComponent_div_17_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Subir");
    \u0275\u0275elementEnd();
  }
}
function MovementUploadComponent_div_17_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Subiendo...");
    \u0275\u0275elementEnd();
  }
}
function MovementUploadComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 19);
    \u0275\u0275element(4, "path", 20)(5, "polyline", 21)(6, "line", 22)(7, "line", 23)(8, "polyline", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 25)(10, "h4");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 26);
    \u0275\u0275listener("click", function MovementUploadComponent_div_17_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.upload());
    });
    \u0275\u0275template(15, MovementUploadComponent_div_17_span_15_Template, 2, 0, "span", 27)(16, MovementUploadComponent_div_17_span_16_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r3.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatFileSize(ctx_r3.selectedFile.size));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.isUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isUploading);
  }
}
function MovementUploadComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "Archivo subido");
    \u0275\u0275elementEnd();
  }
}
function MovementUploadComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.uploadError);
  }
}
function MovementUploadComponent_div_21_div_3__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "path", 6)(2, "polyline", 7)(3, "line", 8);
    \u0275\u0275elementEnd();
  }
}
function MovementUploadComponent_div_21_div_3__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "polyline", 43);
    \u0275\u0275elementEnd();
  }
}
function MovementUploadComponent_div_21_div_3__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "circle", 44)(2, "line", 45)(3, "line", 46);
    \u0275\u0275elementEnd();
  }
}
function MovementUploadComponent_div_21_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "p", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fileUpload_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fileUpload_r6.error);
  }
}
function MovementUploadComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "div", 35);
    \u0275\u0275template(4, MovementUploadComponent_div_21_div_3__svg_svg_4_Template, 4, 0, "svg", 36)(5, MovementUploadComponent_div_21_div_3__svg_svg_5_Template, 2, 0, "svg", 36)(6, MovementUploadComponent_div_21_div_3__svg_svg_6_Template, 4, 0, "svg", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25)(8, "h4");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 37);
    \u0275\u0275listener("click", function MovementUploadComponent_div_21_div_3_Template_button_click_12_listener() {
      const fileUpload_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeFile(fileUpload_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 38);
    \u0275\u0275element(14, "polyline", 39)(15, "path", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, MovementUploadComponent_div_21_div_3_div_16_Template, 3, 1, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fileUpload_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r3.getStatusClass(fileUpload_r6.status));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.getStatusClass(fileUpload_r6.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fileUpload_r6.status === "uploading");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fileUpload_r6.status === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fileUpload_r6.status === "error");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(fileUpload_r6.file.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatFileSize(fileUpload_r6.file.size));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", fileUpload_r6.status === "error" && fileUpload_r6.error);
  }
}
function MovementUploadComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h3");
    \u0275\u0275text(2, "Archivos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MovementUploadComponent_div_21_div_3_Template, 17, 10, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.uploadedFiles);
  }
}
var MovementUploadComponent = class _MovementUploadComponent {
  financialService;
  isDragging = false;
  selectedFile = null;
  isUploading = false;
  uploadSuccess = false;
  uploadError = null;
  uploadedFiles = [];
  constructor(financialService) {
    this.financialService = financialService;
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    this.isDragging = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      if (file.name.endsWith(".xlsx")) {
        this.selectedFile = file;
        this.uploadSuccess = false;
        this.uploadError = null;
      } else {
        this.uploadError = "Solo archivos .xlsx";
      }
    }
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files?.length) {
      const file = input.files[0];
      if (file.name.endsWith(".xlsx")) {
        this.selectedFile = file;
        this.uploadSuccess = false;
        this.uploadError = null;
      } else {
        this.uploadError = "Solo archivos .xlsx";
      }
    }
  }
  upload() {
    if (!this.selectedFile)
      return;
    const fileUpload = {
      id: Date.now().toString(),
      file: this.selectedFile,
      status: "uploading"
    };
    this.uploadedFiles.unshift(fileUpload);
    this.isUploading = true;
    this.uploadSuccess = false;
    this.uploadError = null;
    this.financialService.uploadExcel(this.selectedFile).subscribe({
      next: () => {
        fileUpload.status = "success";
        fileUpload.uploadedAt = /* @__PURE__ */ new Date();
        this.uploadSuccess = true;
        this.selectedFile = null;
      },
      error: (err) => {
        fileUpload.status = "error";
        fileUpload.error = err.error || "Error al subir";
        this.uploadError = err.error || "Error al subir";
      },
      complete: () => {
        this.isUploading = false;
      }
    });
  }
  removeFile(fileId) {
    this.uploadedFiles = this.uploadedFiles.filter((f) => f.id !== fileId);
  }
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  getStatusClass(status) {
    switch (status) {
      case "uploading":
        return "status-uploading";
      case "success":
        return "status-success";
      case "error":
        return "status-error";
      default:
        return "";
    }
  }
  static \u0275fac = function MovementUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovementUploadComponent)(\u0275\u0275directiveInject(FinancialMovementService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementUploadComponent, selectors: [["app-movement-upload"]], decls: 22, vars: 6, consts: [["fileInput", ""], [1, "upload-page"], [1, "upload-header"], [1, "upload-zone", 3, "dragover", "dragleave", "drop", "click"], [1, "upload-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "upload-text"], ["type", "file", "accept", ".xlsx", "hidden", "", 3, "change"], ["class", "selected-file", 4, "ngIf"], [1, "status-messages"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "files-list", 4, "ngIf"], [1, "selected-file"], [1, "file-info"], [1, "file-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10,9 9,9 8,9"], [1, "file-details"], [1, "upload-btn", 3, "click", "disabled"], [4, "ngIf"], [1, "success-message"], [1, "error-message"], [1, "files-list"], ["class", "file-item", 3, "class", 4, "ngFor", "ngForOf"], [1, "file-item"], [1, "file-item-header"], [1, "file-item-info"], [1, "status-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["title", "Eliminar", 1, "remove-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"], ["class", "error-details", 4, "ngIf"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "20,6 9,17 4,12"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "error-details"], [1, "error-text"]], template: function MovementUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1");
      \u0275\u0275text(3, "Carga de Archivos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275listener("dragover", function MovementUploadComponent_Template_div_dragover_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragOver($event));
      })("dragleave", function MovementUploadComponent_Template_div_dragleave_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragLeave($event));
      })("drop", function MovementUploadComponent_Template_div_drop_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      })("click", function MovementUploadComponent_Template_div_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(16);
        return \u0275\u0275resetView(fileInput_r2.click());
      });
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6)(8, "polyline", 7)(9, "line", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 9)(11, "h3");
      \u0275\u0275text(12, "Arrastra archivo aqu\xED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "o haz clic para seleccionar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "input", 10, 0);
      \u0275\u0275listener("change", function MovementUploadComponent_Template_input_change_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, MovementUploadComponent_div_17_Template, 17, 5, "div", 11);
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275template(19, MovementUploadComponent_p_19_Template, 2, 0, "p", 13)(20, MovementUploadComponent_p_20_Template, 2, 1, "p", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, MovementUploadComponent_div_21_Template, 4, 1, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275classProp("dragover", ctx.isDragging);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.selectedFile);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.uploadSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.uploadError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.uploadedFiles.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.upload-page[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.upload-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.upload-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #333;\n  margin: 0;\n  font-weight: 500;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  border: 2px dashed #ccc;\n  border-radius: 8px;\n  padding: 3rem 2rem;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  background: #f9f9f9;\n  margin-bottom: 2rem;\n}\n.upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #999;\n  background: #f5f5f5;\n}\n.upload-zone.dragover[_ngcontent-%COMP%] {\n  border-color: #007acc;\n  background: #f0f8ff;\n}\n.upload-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #666;\n}\n.upload-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n}\n.upload-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #333;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n}\n.upload-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.selected-file[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e1e1e1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.file-icon[_ngcontent-%COMP%] {\n  color: #666;\n}\n.file-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: #333;\n  font-weight: 500;\n  font-size: 1rem;\n}\n.file-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 0.85rem;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  background: #007acc;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.upload-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #005a9e;\n}\n.upload-btn[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n}\n.status-messages[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  color: #1e40af;\n  padding: 1rem;\n  border-radius: 6px;\n  border-left: 4px solid #3b82f6;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 6px;\n  border-left: 4px solid #ef4444;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.files-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e1e1e1;\n}\n.files-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n.file-item[_ngcontent-%COMP%] {\n  border: 1px solid #e1e1e1;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  background: #fafafa;\n}\n.file-item.status-success[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n  background: #f0fdf4;\n}\n.file-item.status-error[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n  background: #fef2f2;\n}\n.file-item.status-uploading[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n  background: #fffbeb;\n}\n.file-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.file-item-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n}\n.status-icon[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  color: #666;\n}\n.status-icon.status-success[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.status-icon.status-error[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.status-icon.status-uploading[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.file-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: #333;\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n.file-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 0.8rem;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 4px;\n  color: #666;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #dc2626;\n}\n.error-details[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.75rem;\n  border-radius: 4px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin: 0;\n  font-size: 0.85rem;\n}\n@media (max-width: 768px) {\n  .upload-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .upload-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .upload-zone[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .selected-file[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .file-item-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .remove-btn[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n/*# sourceMappingURL=movement-upload.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovementUploadComponent, [{
    type: Component,
    args: [{ selector: "app-movement-upload", imports: [CommonModule], template: `<div class="upload-page">\r
  <div class="upload-header">\r
    <h1>Carga de Archivos</h1>\r
  </div>\r
\r
  <div class="upload-zone"\r
       (dragover)="onDragOver($event)"\r
       (dragleave)="onDragLeave($event)"\r
       (drop)="onDrop($event)"\r
       [class.dragover]="isDragging"\r
       (click)="fileInput.click()">\r
\r
    <div class="upload-icon">\r
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>\r
        <polyline points="7,10 12,15 17,10"/>\r
        <line x1="12" y1="15" x2="12" y2="3"/>\r
      </svg>\r
    </div>\r
    \r
    <div class="upload-text">\r
      <h3>Arrastra archivo aqu\xED</h3>\r
      <p>o haz clic para seleccionar</p>\r
    </div>\r
\r
    <input type="file" accept=".xlsx" hidden (change)="onFileSelected($event)" #fileInput>\r
  </div>\r
\r
  <div class="selected-file" *ngIf="selectedFile">\r
    <div class="file-info">\r
      <div class="file-icon">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>\r
          <polyline points="14,2 14,8 20,8"/>\r
          <line x1="16" y1="13" x2="8" y2="13"/>\r
          <line x1="16" y1="17" x2="8" y2="17"/>\r
          <polyline points="10,9 9,9 8,9"/>\r
        </svg>\r
      </div>\r
      <div class="file-details">\r
        <h4>{{ selectedFile.name }}</h4>\r
        <p>{{ formatFileSize(selectedFile.size) }}</p>\r
      </div>\r
    </div>\r
    <button class="upload-btn" \r
            [disabled]="isUploading" \r
            (click)="upload()">\r
      <span *ngIf="!isUploading">Subir</span>\r
      <span *ngIf="isUploading">Subiendo...</span>\r
    </button>\r
  </div>\r
\r
  <div class="status-messages">\r
    <p *ngIf="uploadSuccess" class="success-message">Archivo subido</p>\r
    <p *ngIf="uploadError" class="error-message">{{ uploadError }}</p>\r
  </div>\r
\r
  <div class="files-list" *ngIf="uploadedFiles.length > 0">\r
    <h3>Archivos</h3>\r
    \r
    <div class="file-item" *ngFor="let fileUpload of uploadedFiles" [class]="getStatusClass(fileUpload.status)">\r
      <div class="file-item-header">\r
        <div class="file-item-info">\r
          <div class="status-icon" [class]="getStatusClass(fileUpload.status)">\r
            <svg *ngIf="fileUpload.status === 'uploading'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>\r
              <polyline points="7,10 12,15 17,10"/>\r
              <line x1="12" y1="15" x2="12" y2="3"/>\r
            </svg>\r
            <svg *ngIf="fileUpload.status === 'success'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <polyline points="20,6 9,17 4,12"/>\r
            </svg>\r
            <svg *ngIf="fileUpload.status === 'error'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="12" cy="12" r="10"/>\r
              <line x1="15" y1="9" x2="9" y2="15"/>\r
              <line x1="9" y1="9" x2="15" y2="15"/>\r
            </svg>\r
          </div>\r
          <div class="file-details">\r
            <h4>{{ fileUpload.file.name }}</h4>\r
            <p>{{ formatFileSize(fileUpload.file.size) }}</p>\r
          </div>\r
        </div>\r
        \r
        <button class="remove-btn" \r
                (click)="removeFile(fileUpload.id)"\r
                title="Eliminar">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="3,6 5,6 21,6"/>\r
            <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <div class="error-details" *ngIf="fileUpload.status === 'error' && fileUpload.error">\r
        <p class="error-text">{{ fileUpload.error }}</p>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/movements/pages/movement-upload/movement-upload.component.css */\n.upload-page {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.upload-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.upload-header h1 {\n  font-size: 2rem;\n  color: #333;\n  margin: 0;\n  font-weight: 500;\n}\n.upload-zone {\n  border: 2px dashed #ccc;\n  border-radius: 8px;\n  padding: 3rem 2rem;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  background: #f9f9f9;\n  margin-bottom: 2rem;\n}\n.upload-zone:hover {\n  border-color: #999;\n  background: #f5f5f5;\n}\n.upload-zone.dragover {\n  border-color: #007acc;\n  background: #f0f8ff;\n}\n.upload-icon {\n  margin-bottom: 1rem;\n  color: #666;\n}\n.upload-icon svg {\n  display: block;\n  margin: 0 auto;\n}\n.upload-text h3 {\n  font-size: 1.25rem;\n  color: #333;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n}\n.upload-text p {\n  color: #666;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.selected-file {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e1e1e1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.file-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.file-icon {\n  color: #666;\n}\n.file-details h4 {\n  margin: 0 0 0.25rem 0;\n  color: #333;\n  font-weight: 500;\n  font-size: 1rem;\n}\n.file-details p {\n  margin: 0;\n  color: #666;\n  font-size: 0.85rem;\n}\n.upload-btn {\n  background: #007acc;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.upload-btn:hover:not(:disabled) {\n  background: #005a9e;\n}\n.upload-btn:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n}\n.status-messages {\n  margin-bottom: 2rem;\n}\n.success-message {\n  background: #f0f9ff;\n  color: #1e40af;\n  padding: 1rem;\n  border-radius: 6px;\n  border-left: 4px solid #3b82f6;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.error-message {\n  background: #fef2f2;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 6px;\n  border-left: 4px solid #ef4444;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.files-list {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e1e1e1;\n}\n.files-list h3 {\n  color: #333;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n.file-item {\n  border: 1px solid #e1e1e1;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  background: #fafafa;\n}\n.file-item.status-success {\n  border-left: 4px solid #10b981;\n  background: #f0fdf4;\n}\n.file-item.status-error {\n  border-left: 4px solid #ef4444;\n  background: #fef2f2;\n}\n.file-item.status-uploading {\n  border-left: 4px solid #f59e0b;\n  background: #fffbeb;\n}\n.file-item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.file-item-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n}\n.status-icon {\n  margin-top: 0.25rem;\n  color: #666;\n}\n.status-icon.status-success {\n  color: #10b981;\n}\n.status-icon.status-error {\n  color: #ef4444;\n}\n.status-icon.status-uploading {\n  color: #f59e0b;\n}\n.file-details h4 {\n  margin: 0 0 0.25rem 0;\n  color: #333;\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n.file-details p {\n  margin: 0;\n  color: #666;\n  font-size: 0.8rem;\n}\n.remove-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 4px;\n  color: #666;\n}\n.remove-btn:hover {\n  background: #f3f4f6;\n  color: #dc2626;\n}\n.error-details {\n  margin-top: 1rem;\n  padding: 0.75rem;\n  border-radius: 4px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n}\n.error-text {\n  color: #dc2626;\n  margin: 0;\n  font-size: 0.85rem;\n}\n@media (max-width: 768px) {\n  .upload-page {\n    padding: 1rem;\n  }\n  .upload-header h1 {\n    font-size: 1.75rem;\n  }\n  .upload-zone {\n    padding: 2rem 1rem;\n  }\n  .selected-file {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .file-item-header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .remove-btn {\n    align-self: flex-end;\n  }\n}\n/*# sourceMappingURL=movement-upload.component.css.map */\n'] }]
  }], () => [{ type: FinancialMovementService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementUploadComponent, { className: "MovementUploadComponent", filePath: "src/app/features/movements/pages/movement-upload/movement-upload.component.ts", lineNumber: 19 });
})();

// src/app/features/categories/categories-routes.ts
var CATEGORIES_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-S4Z77YBZ.js").then((m) => m.CategoryFormComponent)
  }
];

// src/app/features/finances/finances.component.ts
var _c04 = () => ["/dashboard/finances/addmovement"];
function FinancesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "div", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "img", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, tx_r1.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r1.movementName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", tx_r1.currencyName, " ", tx_r1.amount);
  }
}
function FinancesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275element(4, "div", 36);
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "img", 38)(8, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cat_r2.amount);
  }
}
var FinancesComponent = class _FinancesComponent {
  categoryService;
  financialMovementService;
  user;
  categories = [];
  transactions = [];
  constructor(categoryService, financialMovementService) {
    this.categoryService = categoryService;
    this.financialMovementService = financialMovementService;
  }
  ngOnInit() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.loadCategories();
      this.loadTransactions();
    } else {
      console.error("No user found in localStorage");
    }
  }
  loadCategories() {
    this.categoryService.getCategories(this.user.id).subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error("Error loading categories", err);
      }
    });
  }
  loadTransactions() {
    console.log("Calling backend for transactions...");
    this.financialMovementService.getMovements(this.user.id).subscribe({
      next: (data) => {
        console.log("Movements loaded:", data);
        this.transactions = data;
      },
      error: (err) => {
        console.error("Error loading transactions", err);
      }
    });
  }
  static \u0275fac = function FinancesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinancesComponent)(\u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(FinancialMovementService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinancesComponent, selectors: [["app-finances"]], decls: 36, vars: 4, consts: [[1, "content"], [1, "weolcome-buttons"], [1, "my-finances"], [1, "income-vs-expenses"], ["src", "assets/img/periods.png", 1, "image-10"], [1, "frame-221"], [1, "transactions-history"], [1, "view-all"], [1, "view-all2"], ["src", "assets/icons/down.svg", 1, "icons"], [1, "frame-218"], ["class", "frame-217", 4, "ngFor", "ngForOf"], [1, "frame-222"], [1, "frame-2213"], [1, "category-chart"], ["src", "assets/icons/down.svg", 1, "icons7"], [1, "tasks"], [1, "cards-default"], [1, "frame-223"], ["class", "task-dynamic", 4, "ngFor", "ngForOf"], [1, "frame-224"], [1, "categories-movements"], [1, "view-all3", 2, "cursor", "pointer", 3, "routerLink"], [1, "add-movement"], ["src", "assets/icons/plus-circle.svg", 1, "icons8"], ["src", "/assets/img/chart-movement.png", 1, "image-9"], [1, "frame-217"], [1, "group-213"], [1, "date-yyyy-mm-dd"], [1, "name-expense-or-income"], [1, "group-212"], [1, "money"], ["src", "assets/icons/money.svg", 1, "icons2"], [1, "task-dynamic"], [1, "category-name"], [1, "chip-default-gray"], [1, "sheet5"], [1, "title"], ["src", "assets/icons/success.png", 1, "controls-checkbox-active"], [1, "divider-line-horizontal"]], template: function FinancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "My Finances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275element(5, "img", 4);
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275text(8, "Transactions history");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275text(11, "View All");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "img", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275template(14, FinancesComponent_div_14_Template, 11, 7, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14);
      \u0275\u0275text(18, "Category Chart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 8);
      \u0275\u0275text(21, "View All");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "img", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 16);
      \u0275\u0275element(24, "div", 17);
      \u0275\u0275elementStart(25, "div", 18);
      \u0275\u0275template(26, FinancesComponent_div_26_Template, 9, 2, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20)(28, "div", 21);
      \u0275\u0275text(29, "Categories Movements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 22)(31, "div", 23);
      \u0275\u0275text(32, "Add Movement");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "img", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(34, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.transactions);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c04));
    }
  }, dependencies: [CommonModule, NgForOf, DatePipe, RouterModule, RouterOutlet, RouterLink], styles: ['\n\n.content[_ngcontent-%COMP%], \n.content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.content[_ngcontent-%COMP%] {\n  background: #dcdcd1;\n  border-radius: 0px 0px 0px 15px;\n  height: 944px;\n  position: absolute;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: 1000px;\n  margin-bottom: -10px;\n  top: 80px;\n  width: 100%;\n}\n.weolcome-buttons[_ngcontent-%COMP%] {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 36px;\n  top: 17px;\n}\n.my-finances[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 290px;\n  height: 33px;\n}\n.income-vs-expenses[_ngcontent-%COMP%] {\n  background: #dcdcd1;\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  padding: 11px 6px 11px 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 484px;\n  height: 813px;\n  position: absolute;\n  left: 293px;\n  top: 104px;\n  overflow: hidden;\n}\n.image-10[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 421px;\n  height: 406px;\n  position: relative;\n  object-fit: cover;\n  aspect-ratio: 421/406;\n}\n.frame-221[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n  width: 452px;\n  position: relative;\n}\n.transactions-history[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  position: relative;\n}\n.view-all[_ngcontent-%COMP%] {\n  padding: 10px 0px 10px 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 0px;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n}\n.view-all2[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  position: relative;\n}\n.icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n}\n.frame-218[_ngcontent-%COMP%] {\n  padding: 5px 3px 5px 3px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 303px;\n  position: relative;\n  overflow: hidden;\n}\n.frame-217[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-213[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 113px;\n  height: 32px;\n  position: static;\n}\n.date-yyyy-mm-dd[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  position: absolute;\n  left: 7px;\n  top: 27.71px;\n}\n.name-expense-or-income[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  position: absolute;\n  left: 7px;\n  top: 8.71px;\n}\n.group-212[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 46px;\n  height: 16px;\n  position: static;\n}\n.money[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 433px;\n  top: 16.71px;\n}\n.icons2[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 413px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-2182[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-2132[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 60px;\n  height: 32px;\n  position: static;\n}\n.group-2122[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 51px;\n  height: 16px;\n  position: static;\n}\n.money2[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 428px;\n  top: 16.71px;\n}\n.icons3[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 408px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-219[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-2133[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 136px;\n  height: 32px;\n  position: static;\n}\n.group-2123[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 50px;\n  height: 16px;\n  position: static;\n}\n.money3[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 429px;\n  top: 16.71px;\n}\n.icons4[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 409px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-220[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-2134[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 61px;\n  height: 32px;\n  position: static;\n}\n.group-2124[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 42px;\n  height: 16px;\n  position: static;\n}\n.money4[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 437px;\n  top: 16.71px;\n}\n.icons5[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 417px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-2212[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-2135[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 70px;\n  height: 32px;\n  position: static;\n}\n.group-2125[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 47px;\n  height: 16px;\n  position: static;\n}\n.money5[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 432px;\n  top: 16.71px;\n}\n.icons6[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 412px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-222[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  width: 641px;\n  height: 825px;\n  position: absolute;\n  left: 802px;\n  top: 104px;\n  overflow: hidden;\n}\n.frame-2213[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 604px;\n  position: absolute;\n  left: 10px;\n  top: 7px;\n}\n.category-chart[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  position: relative;\n}\n.icons7[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n}\n.tasks[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  height: 336px;\n  position: absolute;\n  right: 10px;\n  left: 11px;\n  top: 473px;\n  overflow: hidden;\n}\n.cards-default[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.frame-223[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  align-items: center;\n  justify-content: center;\n  width: 620px;\n  height: 240px;\n  position: absolute;\n  left: 0px;\n  top: 67px;\n}\n.task-4[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.food[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.chip-default-warning[_ngcontent-%COMP%] {\n  width: 81px;\n  height: 24px;\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.sheet[_ngcontent-%COMP%] {\n  background: var(--yellow-default, #fec400);\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: center;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  text-transform: uppercase;\n  position: absolute;\n  right: 12px;\n  left: 12px;\n  top: 50%;\n  translate: 0 -50%;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.controls-checkbox-active[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.divider-line-horizontal[_ngcontent-%COMP%] {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n}\n.task-1[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.healtcare[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.chip-default-warning2[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 24px;\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.sheet2[_ngcontent-%COMP%] {\n  background: #8ac926;\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.controls-checkbox-active2[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.task-2[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.education[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.chip-default-success[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 24px;\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.sheet3[_ngcontent-%COMP%] {\n  background: #f15b64;\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.controls-checkbox-active3[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.task-3[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.utilities[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.chip-default-gray[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 24px;\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.sheet4[_ngcontent-%COMP%] {\n  background: #c8bfe7;\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.controls-checkbox-active4[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.task-5[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.oficce[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.sheet5[_ngcontent-%COMP%] {\n  background: var(--grayscale-gray-lightest, #f0f1f7);\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.title2[_ngcontent-%COMP%] {\n  color: var(--grayscale-gray, #9fa2b4);\n  text-align: center;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  text-transform: uppercase;\n  position: absolute;\n  right: 12px;\n  left: 12px;\n  top: 50%;\n  translate: 0 -50%;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.controls-checkbox-inactive[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border-style: solid;\n  border-color: var(--grayscale-gray-light, #c5c7cd);\n  border-width: 2px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  right: 0%;\n  left: 0%;\n  bottom: 0%;\n  top: 0%;\n}\n.task-6[_ngcontent-%COMP%] {\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.entertainment[_ngcontent-%COMP%] {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.frame-224[_ngcontent-%COMP%] {\n  background: #092c36;\n  padding: 0px 0px 0px 2px;\n  display: flex;\n  flex-direction: row;\n  gap: 69px;\n  align-items: center;\n  justify-content: center;\n  width: 620px;\n  height: 57px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.categories-movements[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n  font-weight: 700;\n  position: relative;\n  width: 395px;\n}\n.view-all3[_ngcontent-%COMP%] {\n  padding: 10px 0px 10px 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  align-items: center;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  position: relative;\n}\n.add-movement[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  position: relative;\n}\n.icons8[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.image-9[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 379px;\n  position: absolute;\n  left: 137px;\n  top: 55px;\n  object-fit: cover;\n  aspect-ratio: 350/379;\n}\n.task-dynamic[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.category-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=finances.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinancesComponent, [{
    type: Component,
    args: [{ selector: "app-finances", imports: [CommonModule, RouterModule], template: `<div class="content">\r
  <div class="weolcome-buttons">\r
    <div class="my-finances">My Finances</div>\r
  </div>\r
  <div class="income-vs-expenses">\r
    <img class="image-10" src="assets/img/periods.png" />\r
    <div class="frame-221">\r
      <div class="transactions-history">Transactions history</div>\r
      <div class="view-all">\r
        <div class="view-all2">View All</div>\r
        <img class="icons" src="assets/icons/down.svg" />\r
      </div>\r
    </div>\r
    <div class="frame-218">\r
      <div *ngFor="let tx of transactions" class="frame-217">\r
        <div class="group-213">\r
          <div class="date-yyyy-mm-dd">{{ tx.date | date: 'dd/MM/yyyy' }}</div>\r
          <div class="name-expense-or-income">{{ tx.movementName }}</div>\r
        </div>\r
        <div class="group-212">\r
          <div class="money">{{ tx.currencyName }} {{ tx.amount }}</div>\r
          <img class="icons2" src="assets/icons/money.svg" />\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="frame-222">\r
    <div class="frame-2213">\r
      <div class="category-chart">Category Chart</div>\r
      <div class="view-all">\r
        <div class="view-all2">View All</div>\r
        <img class="icons7" src="assets/icons/down.svg" />\r
      </div>\r
    </div>\r
    <div class="tasks">\r
      <div class="cards-default"></div>\r
      <div class="frame-223">\r
        <div *ngFor="let cat of categories" class="task-dynamic">\r
          <div class="category-name">{{ cat.name }}</div>\r
      \r
          <div class="chip-default-gray">\r
            <div class="sheet5"></div>\r
            <div class="title">{{ cat.amount }}</div>\r
          </div>\r
      \r
          <img class="controls-checkbox-active" src="assets/icons/success.png" />\r
          <div class="divider-line-horizontal"></div>\r
        </div>\r
      </div>\r
      \r
      <div class="frame-224">\r
        <div class="categories-movements">Categories Movements</div>\r
        <div class="view-all3" [routerLink]="['/dashboard/finances/addmovement']" style="cursor: pointer;">\r
          <div class="add-movement">Add Movement</div>\r
          <img class="icons8" src="assets/icons/plus-circle.svg" />\r
        </div>\r
      </div>\r
    </div>\r
    <img class="image-9" src="/assets/img/chart-movement.png" />\r
  </div>\r
  <router-outlet></router-outlet>\r
</div>\r
`, styles: ['/* src/app/features/finances/finances.component.css */\n.content,\n.content * {\n  box-sizing: border-box;\n}\n.content {\n  background: #dcdcd1;\n  border-radius: 0px 0px 0px 15px;\n  height: 944px;\n  position: absolute;\n  overflow: hidden;\n  margin-left: 220px;\n  margin-right: 1000px;\n  margin-bottom: -10px;\n  top: 80px;\n  width: 100%;\n}\n.weolcome-buttons {\n  width: 1121px;\n  height: 53px;\n  position: absolute;\n  left: 36px;\n  top: 17px;\n}\n.my-finances {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-SemiBold", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 290px;\n  height: 33px;\n}\n.income-vs-expenses {\n  background: #dcdcd1;\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  padding: 11px 6px 11px 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  align-items: center;\n  justify-content: flex-start;\n  width: 484px;\n  height: 813px;\n  position: absolute;\n  left: 293px;\n  top: 104px;\n  overflow: hidden;\n}\n.image-10 {\n  flex-shrink: 0;\n  width: 421px;\n  height: 406px;\n  position: relative;\n  object-fit: cover;\n  aspect-ratio: 421/406;\n}\n.frame-221 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n  width: 452px;\n  position: relative;\n}\n.transactions-history {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  position: relative;\n}\n.view-all {\n  padding: 10px 0px 10px 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 0px;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n}\n.view-all2 {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  position: relative;\n}\n.icons {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n}\n.frame-218 {\n  padding: 5px 3px 5px 3px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 303px;\n  position: relative;\n  overflow: hidden;\n}\n.frame-217 {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-213 {\n  flex-shrink: 0;\n  width: 113px;\n  height: 32px;\n  position: static;\n}\n.date-yyyy-mm-dd {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  position: absolute;\n  left: 7px;\n  top: 27.71px;\n}\n.name-expense-or-income {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  position: absolute;\n  left: 7px;\n  top: 8.71px;\n}\n.group-212 {\n  flex-shrink: 0;\n  width: 46px;\n  height: 16px;\n  position: static;\n}\n.money {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 433px;\n  top: 16.71px;\n}\n.icons2 {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 413px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-2182 {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-2132 {\n  flex-shrink: 0;\n  width: 60px;\n  height: 32px;\n  position: static;\n}\n.group-2122 {\n  flex-shrink: 0;\n  width: 51px;\n  height: 16px;\n  position: static;\n}\n.money2 {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 428px;\n  top: 16.71px;\n}\n.icons3 {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 408px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-219 {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-2133 {\n  flex-shrink: 0;\n  width: 136px;\n  height: 32px;\n  position: static;\n}\n.group-2123 {\n  flex-shrink: 0;\n  width: 50px;\n  height: 16px;\n  position: static;\n}\n.money3 {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 429px;\n  top: 16.71px;\n}\n.icons4 {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 409px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-220 {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-2134 {\n  flex-shrink: 0;\n  width: 61px;\n  height: 32px;\n  position: static;\n}\n.group-2124 {\n  flex-shrink: 0;\n  width: 42px;\n  height: 16px;\n  position: static;\n}\n.money4 {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 437px;\n  top: 16.71px;\n}\n.icons5 {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 417px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-2212 {\n  background: rgba(255, 255, 255, 0);\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 1px 1px 1px;\n  padding: 4px 7px 4px 7px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 49.42px;\n  position: relative;\n  overflow: hidden;\n}\n.group-2135 {\n  flex-shrink: 0;\n  width: 70px;\n  height: 32px;\n  position: static;\n}\n.group-2125 {\n  flex-shrink: 0;\n  width: 47px;\n  height: 16px;\n  position: static;\n}\n.money5 {\n  color: #000000;\n  text-align: left;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  left: 432px;\n  top: 16.71px;\n}\n.icons6 {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 412px;\n  top: 16.71px;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.frame-222 {\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  width: 641px;\n  height: 825px;\n  position: absolute;\n  left: 802px;\n  top: 104px;\n  overflow: hidden;\n}\n.frame-2213 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 604px;\n  position: absolute;\n  left: 10px;\n  top: 7px;\n}\n.category-chart {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  position: relative;\n}\n.icons7 {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n}\n.tasks {\n  background: #ffffff;\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  height: 336px;\n  position: absolute;\n  right: 10px;\n  left: 11px;\n  top: 473px;\n  overflow: hidden;\n}\n.cards-default {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.frame-223 {\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  align-items: center;\n  justify-content: center;\n  width: 620px;\n  height: 240px;\n  position: absolute;\n  left: 0px;\n  top: 67px;\n}\n.task-4 {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.food {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.chip-default-warning {\n  width: 81px;\n  height: 24px;\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.sheet {\n  background: var(--yellow-default, #fec400);\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.title {\n  color: #ffffff;\n  text-align: center;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  text-transform: uppercase;\n  position: absolute;\n  right: 12px;\n  left: 12px;\n  top: 50%;\n  translate: 0 -50%;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.controls-checkbox-active {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.divider-line-horizontal {\n  height: 0px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n}\n.task-1 {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.healtcare {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.chip-default-warning2 {\n  width: 74px;\n  height: 24px;\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.sheet2 {\n  background: #8ac926;\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.controls-checkbox-active2 {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.task-2 {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.education {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.chip-default-success {\n  width: 75px;\n  height: 24px;\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.sheet3 {\n  background: #f15b64;\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.controls-checkbox-active3 {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.task-3 {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.utilities {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.chip-default-gray {\n  width: 76px;\n  height: 24px;\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.sheet4 {\n  background: #c8bfe7;\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.controls-checkbox-active4 {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: visible;\n}\n.task-5 {\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 0px 0px 1px 0px;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.oficce {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.sheet5 {\n  background: var(--grayscale-gray-lightest, #f0f1f7);\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n.title2 {\n  color: var(--grayscale-gray, #9fa2b4);\n  text-align: center;\n  font-family: "DmSans-Regular", sans-serif;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  text-transform: uppercase;\n  position: absolute;\n  right: 12px;\n  left: 12px;\n  top: 50%;\n  translate: 0 -50%;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.controls-checkbox-inactive {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  left: 32px;\n  top: 50%;\n  translate: 0 -50%;\n  overflow: hidden;\n}\n.circle {\n  border-radius: 50%;\n  border-style: solid;\n  border-color: var(--grayscale-gray-light, #c5c7cd);\n  border-width: 2px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  right: 0%;\n  left: 0%;\n  bottom: 0%;\n  top: 0%;\n}\n.task-6 {\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n}\n.entertainment {\n  color: var(--grayscale-black, #252733);\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  position: absolute;\n  right: 142px;\n  left: 68px;\n  top: calc(50% - 9px);\n}\n.frame-224 {\n  background: #092c36;\n  padding: 0px 0px 0px 2px;\n  display: flex;\n  flex-direction: row;\n  gap: 69px;\n  align-items: center;\n  justify-content: center;\n  width: 620px;\n  height: 57px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.categories-movements {\n  color: #ffffff;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n  font-weight: 700;\n  position: relative;\n  width: 395px;\n}\n.view-all3 {\n  padding: 10px 0px 10px 10px;\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  align-items: center;\n  justify-content: flex-start;\n  flex-shrink: 0;\n  position: relative;\n}\n.add-movement {\n  color: #ffffff;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  position: relative;\n}\n.icons8 {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  overflow: visible;\n  aspect-ratio: 1;\n}\n.image-9 {\n  width: 350px;\n  height: 379px;\n  position: absolute;\n  left: 137px;\n  top: 55px;\n  object-fit: cover;\n  aspect-ratio: 350/379;\n}\n.task-dynamic {\n  padding: 12px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.category-name {\n  font-weight: 600;\n  font-size: 16px;\n}\n.title {\n  font-weight: 500;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=finances.component.css.map */\n'] }]
  }], () => [{ type: CategoryService }, { type: FinancialMovementService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinancesComponent, { className: "FinancesComponent", filePath: "src/app/features/finances/finances.component.ts", lineNumber: 14 });
})();

// src/app/features/finances/addMovement/addmovement.component.ts
var _c05 = () => ["/dashboard/finances"];
function AddMovementComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r1);
  }
}
function AddMovementComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r2 = ctx.$implicit;
    \u0275\u0275property("value", currency_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(currency_r2);
  }
}
function AddMovementComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("value", cat_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3.name);
  }
}
var AddMovementComponent = class _AddMovementComponent {
  fb;
  movementService;
  categoryService;
  router;
  movementForm;
  user;
  categories = [];
  movementTypes = ["INCOME", "OUTCOME"];
  currencyTypes = ["PEN", "USD", "EUR"];
  // Podés ajustar esto según tus enums
  constructor(fb, movementService, categoryService, router) {
    this.fb = fb;
    this.movementService = movementService;
    this.categoryService = categoryService;
    this.router = router;
  }
  ngOnInit() {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      console.error("No user found");
      return;
    }
    this.user = JSON.parse(storedUser);
    this.initForm();
    this.loadCategories();
  }
  initForm() {
    this.movementForm = this.fb.group({
      amount: [null, [Validators.required, Validators.min(0.01)]],
      date: [null, Validators.required],
      movementType: ["INCOME", Validators.required],
      categoryId: [null, Validators.required],
      currencyType: ["PEN", Validators.required]
    });
  }
  loadCategories() {
    this.categoryService.getCategories(this.user.id).subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error("Error loading categories:", err);
      }
    });
  }
  submit() {
    if (this.movementForm.invalid)
      return;
    const movement = __spreadValues({}, this.movementForm.value);
    this.movementService.register(this.user.id, movement).subscribe({
      next: () => {
        alert("Movimiento registrado correctamente");
        this.router.navigate(["/finances"]);
      },
      error: (err) => {
        console.error("Error registering movement:", err);
        alert("Error al registrar el movimiento");
      }
    });
  }
  static \u0275fac = function AddMovementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddMovementComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FinancialMovementService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddMovementComponent, selectors: [["app-addmovement"]], decls: 39, vars: 6, consts: [[1, "nirvana-sappy"], [3, "ngSubmit", "formGroup"], [1, "rectangle-329"], ["src", "assets/icons/x.png", 1, "icons", 3, "routerLink"], ["type", "submit", 1, "button"], [1, "text"], [1, "new-movement"], [1, "frame-226"], [1, "input-group"], [1, "label"], ["type", "number", "formControlName", "amount", "placeholder", "Enter amount", 1, "rectangle-333"], ["type", "date", "formControlName", "date", 1, "rectangle-332"], [1, "select-container"], ["formControlName", "movementType", 1, "rectangle-331"], [3, "value", 4, "ngFor", "ngForOf"], ["src", "assets/icons/down.svg", 1, "chevron-icon"], ["formControlName", "currencyType", 1, "rectangle-331"], ["formControlName", "categoryId", 1, "rectangle-331"], [3, "value"]], template: function AddMovementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function AddMovementComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submit();
      });
      \u0275\u0275element(2, "div", 2)(3, "img", 3);
      \u0275\u0275elementStart(4, "button", 4)(5, "div", 5);
      \u0275\u0275text(6, "Aceptar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275text(8, "New Movement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "label", 9);
      \u0275\u0275text(16, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "label", 9);
      \u0275\u0275text(20, "Movement Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12)(22, "select", 13);
      \u0275\u0275template(23, AddMovementComponent_option_23_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "img", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 8)(26, "label", 9);
      \u0275\u0275text(27, "Currency Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 12)(29, "select", 16);
      \u0275\u0275template(30, AddMovementComponent_option_30_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "img", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 8)(33, "label", 9);
      \u0275\u0275text(34, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 12)(36, "select", 17);
      \u0275\u0275template(37, AddMovementComponent_option_37_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "img", 15);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.movementForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c05));
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.movementTypes);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.currencyTypes);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.categories);
    }
  }, dependencies: [CommonModule, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.nirvana-sappy[_ngcontent-%COMP%], \n.nirvana-sappy[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.nirvana-sappy[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 212px 231px 212px 231px;\n  height: 944px;\n  position: absolute;\n  width: 100%;\n}\n.rectangle-329[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 35px;\n  width: 738px;\n  height: 520px;\n  position: absolute;\n  left: 471px;\n  top: 201px;\n}\n.icons[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 1138px;\n  top: 229px;\n  overflow: visible;\n}\n.button[_ngcontent-%COMP%] {\n  background: #0ea49b;\n  border-radius: 100px;\n  padding: 12px 24px 12px 24px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  position: absolute;\n  left: 750px;\n  top: 660px;\n}\n.text[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  position: relative;\n  width: 460px;\n}\n.new-movement[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  position: absolute;\n  left: 720px;\n  top: 210px;\n  width: 240px;\n  height: 58px;\n}\n.frame-226[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  padding: 15px 0px 15px 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  align-items: center;\n  justify-content: center;\n  width: 251px;\n  position: absolute;\n  left: 714px;\n  top: 270px;\n  overflow: hidden;\n}\n.rectangle-333[_ngcontent-%COMP%] {\n  background: #092c36;\n  border-radius: 15px;\n  opacity: 0.2;\n  flex-shrink: 0;\n  width: 225px;\n  height: 40px;\n  position: relative;\n}\n.line-4[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0.155deg) scale(1, 1);\n}\n.rectangle-332[_ngcontent-%COMP%] {\n  background: #092c36;\n  border-radius: 15px;\n  opacity: 0.2;\n  flex-shrink: 0;\n  width: 225px;\n  height: 40px;\n  position: relative;\n}\n.line-2[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0.155deg) scale(1, 1);\n}\n.frame-66[_ngcontent-%COMP%] {\n  background: #ced5d7;\n  border-radius: 15px;\n  padding: 2px 6px 2px 6px;\n  flex-shrink: 0;\n  width: 225px;\n  height: 40px;\n  position: relative;\n}\n.e-mail[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  left: 6px;\n  top: 2px;\n}\n.line-5[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0.155deg) scale(1, 1);\n}\n.rectangle-331[_ngcontent-%COMP%] {\n  background: #092c36;\n  border-radius: 15px;\n  opacity: 0.2;\n  flex-shrink: 0;\n  width: 225px;\n  height: 40px;\n  position: relative;\n}\n.icons2[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 200px;\n  top: 149px;\n  overflow: visible;\n}\n.currency-type[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  left: 19px;\n  top: 212px;\n  width: 193px;\n  height: 36px;\n}\n.movement-type[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  left: 19px;\n  top: 17px;\n  width: 181px;\n  height: 36px;\n}\n.category[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  left: 19px;\n  top: 83px;\n  width: 132px;\n  height: 18px;\n}\n.chevron-down[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 212px;\n  top: 92px;\n  overflow: visible;\n}\n.chevron-down2[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 212px;\n  top: 223px;\n  overflow: visible;\n}\n.chevron-down3[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 212px;\n  top: 27px;\n  overflow: visible;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  width: 90%;\n  max-width: 225px;\n}\n.label[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n}\n.select-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.chevron-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  pointer-events: none;\n}\n/*# sourceMappingURL=addmovement.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddMovementComponent, [{
    type: Component,
    args: [{ selector: "app-addmovement", imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="nirvana-sappy">\r
  <form [formGroup]="movementForm" (ngSubmit)="submit()">\r
    <div class="rectangle-329"></div>\r
\r
    <img class="icons" src="assets/icons/x.png" [routerLink]="['/dashboard/finances']" />\r
\r
    <button class="button" type="submit">\r
      <div class="text">Aceptar</div>\r
    </button>\r
\r
    <div class="new-movement">New Movement</div>\r
\r
    <div class="frame-226">\r
      <!-- Monto -->\r
      <div class="input-group">\r
        <label class="label">Amount</label>\r
        <input type="number" formControlName="amount" class="rectangle-333" placeholder="Enter amount" />\r
      </div>\r
\r
      <!-- Fecha -->\r
      <div class="input-group">\r
        <label class="label">Date</label>\r
        <input type="date" formControlName="date" class="rectangle-332" />\r
      </div>\r
\r
      <!-- Movimiento -->\r
      <div class="input-group">\r
        <label class="label">Movement Type</label>\r
        <div class="select-container">\r
          <select formControlName="movementType" class="rectangle-331">\r
            <option *ngFor="let type of movementTypes" [value]="type">{{ type }}</option>\r
          </select>\r
          <img class="chevron-icon" src="assets/icons/down.svg" />\r
        </div>\r
      </div>\r
\r
      <!-- Moneda -->\r
      <div class="input-group">\r
        <label class="label">Currency Type</label>\r
        <div class="select-container">\r
          <select formControlName="currencyType" class="rectangle-331">\r
            <option *ngFor="let currency of currencyTypes" [value]="currency">{{ currency }}</option>\r
          </select>\r
          <img class="chevron-icon" src="assets/icons/down.svg" />\r
        </div>\r
      </div>\r
\r
      <!-- Categor\xEDa -->\r
      <div class="input-group">\r
        <label class="label">Category</label>\r
        <div class="select-container">\r
          <select formControlName="categoryId" class="rectangle-331">\r
            <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name }}</option>\r
          </select>\r
          <img class="chevron-icon" src="assets/icons/down.svg" />\r
        </div>\r
      </div>\r
    </div>\r
  </form>\r
</div>\r
`, styles: ['/* src/app/features/finances/addMovement/addmovement.component.css */\n.nirvana-sappy,\n.nirvana-sappy * {\n  box-sizing: border-box;\n}\n.nirvana-sappy {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 212px 231px 212px 231px;\n  height: 944px;\n  position: absolute;\n  width: 100%;\n}\n.rectangle-329 {\n  background: #ffffff;\n  border-radius: 35px;\n  width: 738px;\n  height: 520px;\n  position: absolute;\n  left: 471px;\n  top: 201px;\n}\n.icons {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 1138px;\n  top: 229px;\n  overflow: visible;\n}\n.button {\n  background: #0ea49b;\n  border-radius: 100px;\n  padding: 12px 24px 12px 24px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  position: absolute;\n  left: 750px;\n  top: 660px;\n}\n.text {\n  color: #000000;\n  text-align: center;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  position: relative;\n  width: 460px;\n}\n.new-movement {\n  color: #000000;\n  text-align: left;\n  font-family: "PalanquinDark-Bold", sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  position: absolute;\n  left: 720px;\n  top: 210px;\n  width: 240px;\n  height: 58px;\n}\n.frame-226 {\n  border-radius: 15px;\n  border-style: solid;\n  border-color: #bababa;\n  border-width: 1px;\n  padding: 15px 0px 15px 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  align-items: center;\n  justify-content: center;\n  width: 251px;\n  position: absolute;\n  left: 714px;\n  top: 270px;\n  overflow: hidden;\n}\n.rectangle-333 {\n  background: #092c36;\n  border-radius: 15px;\n  opacity: 0.2;\n  flex-shrink: 0;\n  width: 225px;\n  height: 40px;\n  position: relative;\n}\n.line-4 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0.155deg) scale(1, 1);\n}\n.rectangle-332 {\n  background: #092c36;\n  border-radius: 15px;\n  opacity: 0.2;\n  flex-shrink: 0;\n  width: 225px;\n  height: 40px;\n  position: relative;\n}\n.line-2 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0.155deg) scale(1, 1);\n}\n.frame-66 {\n  background: #ced5d7;\n  border-radius: 15px;\n  padding: 2px 6px 2px 6px;\n  flex-shrink: 0;\n  width: 225px;\n  height: 40px;\n  position: relative;\n}\n.e-mail {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  left: 6px;\n  top: 2px;\n}\n.line-5 {\n  margin-top: -1px;\n  border-style: solid;\n  border-color: #000000;\n  border-width: 1px 0 0 0;\n  align-self: stretch;\n  flex-shrink: 0;\n  height: 0px;\n  position: relative;\n  transform-origin: 0 0;\n  transform: rotate(0.155deg) scale(1, 1);\n}\n.rectangle-331 {\n  background: #092c36;\n  border-radius: 15px;\n  opacity: 0.2;\n  flex-shrink: 0;\n  width: 225px;\n  height: 40px;\n  position: relative;\n}\n.icons2 {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 200px;\n  top: 149px;\n  overflow: visible;\n}\n.currency-type {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  left: 19px;\n  top: 212px;\n  width: 193px;\n  height: 36px;\n}\n.movement-type {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  left: 19px;\n  top: 17px;\n  width: 181px;\n  height: 36px;\n}\n.category {\n  color: #000000;\n  text-align: left;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  position: absolute;\n  left: 19px;\n  top: 83px;\n  width: 132px;\n  height: 18px;\n}\n.chevron-down {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 212px;\n  top: 92px;\n  overflow: visible;\n}\n.chevron-down2 {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 212px;\n  top: 223px;\n  overflow: visible;\n}\n.chevron-down3 {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 212px;\n  top: 27px;\n  overflow: visible;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  width: 90%;\n  max-width: 225px;\n}\n.label {\n  color: #000;\n  font-family: "Poppins-Medium", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n}\n.select-container {\n  position: relative;\n  width: 100%;\n}\n.chevron-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  pointer-events: none;\n}\n/*# sourceMappingURL=addmovement.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: FinancialMovementService }, { type: CategoryService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddMovementComponent, { className: "AddMovementComponent", filePath: "src/app/features/finances/addmovement/addmovement.component.ts", lineNumber: 18 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-6FHOYWTP.js").then((m) => m.LoginComponent),
        data: { animation: "LoginPage" }
      },
      {
        path: "register",
        loadComponent: () => import("./chunk-HSX36F2V.js").then((m) => m.RegisterComponent),
        data: { animation: "RegisterPage" }
      }
    ]
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-M776ZW2R.js").then((m) => m.DashboardComponent),
    canActivate: [authGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: "profile", component: ProfileComponent, children: [
        { path: "edit", component: EditProfileComponent }
      ] },
      { path: "settings", component: SettingsComponent },
      { path: "categories", children: CATEGORIES_ROUTES },
      { path: "load-files", component: MovementUploadComponent },
      { path: "savinggoals", component: SavingGoalListComponent },
      { path: "savinggoals/new", component: SavingGoalFormComponent },
      { path: "savinggoals/edit/:id", component: SavingGoalFormComponent },
      { path: "transactions", component: TransactionHistoryComponent },
      { path: "finances", component: FinancesComponent, children: [
        { path: "addmovement", component: AddMovementComponent }
      ] }
      // Puedes agregar más rutas hijas aquí
    ]
  },
  {
    path: "**",
    redirectTo: "/dashboard"
  }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      localStorage.removeItem("token");
      router.navigate(["/auth/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes)
  ]
};

// src/main.ts
bootstrapApplication(App, __spreadProps(__spreadValues({}, appConfig), {
  providers: [
    ...appConfig.providers,
    provideAnimations(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
}));
/*! Bundled license information:

@angular/animations/fesm2022/private_export-B_vy_9K7.mjs:
@angular/animations/fesm2022/util-CPU6TNml.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.0.4
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
