/*
Bundled with Esbuild.
For source code, please refer to the plugin's repository.
*/

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/styles/calendar.module.css
var require_calendar = __commonJS({
  "src/styles/calendar.module.css"(exports, module2) {
    "use strict";
    (function() {
      if (!document.getElementById("a61d331f9582408733f70e912bb1c0aa96c345757d2ec1897ae771fc6d28084d")) {
        var e = document.createElement("style");
        e.id = "a61d331f9582408733f70e912bb1c0aa96c345757d2ec1897ae771fc6d28084d";
        e.textContent = `.calendar-control-bar_1d26126484073c0c36f38a4b595c3f1e_1 {
	/* margin-bottom: calc(var(--spacing) * 2); */
}


.calendar-days-container_1d26126484073c0c36f38a4b595c3f1e_6 {
	position: relative;
	/* overflow: hidden; */
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	/* border-width: 1px 0 0 0; */
	border-color: var(--color-secondary-10);
	/* background: var(--color-secondary-05); */
}


.day-slot_1d26126484073c0c36f38a4b595c3f1e_19 {
	position: relative;
	height: calc(100% / 7);
	min-height: 0%;
	width: 100%;
	display: flex;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	opacity: 1;
	transition: 0.3s height ease-in-out;
	border-color: var(--color-secondary-10);
	animation: none;
}

.day-slot_1d26126484073c0c36f38a4b595c3f1e_19:not(.open):hover .day-title_1d26126484073c0c36f38a4b595c3f1e_34 {
	color: var(--color-secondary-95);
}

.day-slot_1d26126484073c0c36f38a4b595c3f1e_19.open {
	height: 100%;
	cursor: default;
	border-width: 0;
	animation: grto_1d26126484073c0c36f38a4b595c3f1e_1 0.6s linear;
}


.day-slot_1d26126484073c0c36f38a4b595c3f1e_19.opened {
	justify-content: start;
	align-items: start;
	padding: 1em 0 0 0;
}

.day-slot_1d26126484073c0c36f38a4b595c3f1e_19.close {
	height: 0;
	opacity: 0;
	pointer-events: none;
}



.day-slot_1d26126484073c0c36f38a4b595c3f1e_19.opened .day-slot-content_1d26126484073c0c36f38a4b595c3f1e_60 {
	width: 100%;
	height: 100%;
	animation: open-up_1d26126484073c0c36f38a4b595c3f1e_1 0.3s linear;
}

.day-slot-content_1d26126484073c0c36f38a4b595c3f1e_60 {
	/* margin: auto; */
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
}

.day-title_1d26126484073c0c36f38a4b595c3f1e_34 {
	font-weight: bold;
	text-transform: uppercase;
	font-size: 2em;
	color: var(--color-neutral-600);
}

.dark .day-title_1d26126484073c0c36f38a4b595c3f1e_34 {
	color: var(--color-neutral-400);
}

.day-slot_1d26126484073c0c36f38a4b595c3f1e_19.open_1d26126484073c0c36f38a4b595c3f1e_34 .day-title_1d26126484073c0c36f38a4b595c3f1e_34 {
	color: var(--color-neutral-950);
}

.dark .day-slot_1d26126484073c0c36f38a4b595c3f1e_19.open_1d26126484073c0c36f38a4b595c3f1e_34 .day-title_1d26126484073c0c36f38a4b595c3f1e_34 {
	color: var(--color-neutral-50);
}

.day-date_1d26126484073c0c36f38a4b595c3f1e_93 {
	color: var(--color-secondary-30);
}



.task-checkbox_1d26126484073c0c36f38a4b595c3f1e_99 {}

.task-content_1d26126484073c0c36f38a4b595c3f1e_101 {
	text-decoration-color: var(--color-primary);
}

.task-content_1d26126484073c0c36f38a4b595c3f1e_101.checked {
	text-decoration: line-through;
}






.date-picker_1d26126484073c0c36f38a4b595c3f1e_114 {
	appearance: none;
	-webkit-appearance: none;
	color: var(--color-secondary-30);
	font-family: "Helvetica", arial, sans-serif;
	font-size: 1em;
	font-family: monospace;
	background: var(--color-secondary-05);
	/* background: color-mix(in oklab, var(--color-secondary-20), transparent 90%); */
	padding: 0.2em;
	border-radius: 0.3em;
	display: inline-block !important;
	visibility: visible !important;
}


.cl-sepa_1d26126484073c0c36f38a4b595c3f1e_130 {

	border: none;
	width: 100%;
	height: 1px;
	flex-shrink: 0;
	background: linear-gradient(to right, transparent, var(--secondary-color-10), transparent);
}











.parent_1d26126484073c0c36f38a4b595c3f1e_149 {
	position: relative;
	width: 100%;
	height: 100%;
}


.parent_1d26126484073c0c36f38a4b595c3f1e_149:hover .floating-panel_1d26126484073c0c36f38a4b595c3f1e_156 {
	opacity: 0;
}

.floating-panel_1d26126484073c0c36f38a4b595c3f1e_156 {
	position: absolute;
	top: 0;
	opacity: 1;
	background-color: var(--secondary-color-05);
	border-radius: 1em;
	width: 100%;
	transition: opacity 0.3s ease-in-out;
	padding: calc(var(--spacing) * 5);
	pointer-events: none;
}












/* animations */



@keyframes grto_1d26126484073c0c36f38a4b595c3f1e_1 {

	0% {
		opacity: 1;

	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}

}

@keyframes open-up_1d26126484073c0c36f38a4b595c3f1e_1 {

	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}

}
`;
        document.head.appendChild(e);
      }
    })();
    module2.exports = JSON.parse('{"calendar-control-bar":"calendar-control-bar_1d26126484073c0c36f38a4b595c3f1e_1","calendar-days-container":"calendar-days-container_1d26126484073c0c36f38a4b595c3f1e_6","day-slot":"day-slot_1d26126484073c0c36f38a4b595c3f1e_19","day-title":"day-title_1d26126484073c0c36f38a4b595c3f1e_34","grto":"grto_1d26126484073c0c36f38a4b595c3f1e_1","day-slot-content":"day-slot-content_1d26126484073c0c36f38a4b595c3f1e_60","open-up":"open-up_1d26126484073c0c36f38a4b595c3f1e_1","open":"open_1d26126484073c0c36f38a4b595c3f1e_34","day-date":"day-date_1d26126484073c0c36f38a4b595c3f1e_93","task-checkbox":"task-checkbox_1d26126484073c0c36f38a4b595c3f1e_99","task-content":"task-content_1d26126484073c0c36f38a4b595c3f1e_101","date-picker":"date-picker_1d26126484073c0c36f38a4b595c3f1e_114","cl-sepa":"cl-sepa_1d26126484073c0c36f38a4b595c3f1e_130","parent":"parent_1d26126484073c0c36f38a4b595c3f1e_149","floating-panel":"floating-panel_1d26126484073c0c36f38a4b595c3f1e_156"}');
  }
});

// src/styles/task.module.css
var require_task = __commonJS({
  "src/styles/task.module.css"(exports, module2) {
    "use strict";
    (function() {
      if (!document.getElementById("b6f75142abc62ecd0e57700c1459fa43a6b6d41634f6faece04efe2c75180463")) {
        var e = document.createElement("style");
        e.id = "b6f75142abc62ecd0e57700c1459fa43a6b6d41634f6faece04efe2c75180463";
        e.textContent = `/* by Andreas Storm */

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 * {
	box-sizing: border-box;
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .cbx_f5913e756e8776dbec8a83a9ebe470e8_7 {
	-webkit-user-select: none;
	user-select: none;
	cursor: pointer;
	padding: 6px 0;
	border-radius: 3px;
	overflow: hidden;
	transition: all 0.2s ease;
	display: flex;
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .cbx_f5913e756e8776dbec8a83a9ebe470e8_7:not(:last-child) {
	margin-right: 6px;
}

/* .checkbox-wrapper-4 .cbx:hover { */
/* 	background: color-mix(in oklab, var(--color-primary), transparent 90%); */
/* } */

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .cbx_f5913e756e8776dbec8a83a9ebe470e8_7 span {
	float: left;
	vertical-align: middle;
	transform: translate3d(0, 0, 0);
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .cbx_f5913e756e8776dbec8a83a9ebe470e8_7 span:first-child {
	position: relative;
	width: 1em;
	height: 1em;
	border-radius: 0.1em;
	transform: scale(1);
	border: 1px solid var(--color-secondary-30);
	transition: all 0.2s ease;
	box-shadow: 0 1px 1px rgba(0, 16, 75, 0.05);
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .cbx_f5913e756e8776dbec8a83a9ebe470e8_7 span:first-child svg {
	position: absolute;
	top: 0.1em;
	left: 0.1em;
	fill: none;
	stroke: var(--primary-color-95);
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-dasharray: 16px;
	stroke-dashoffset: 16px;
	transition: all 0.3s ease;
	transition-delay: 0.1s;
	transform: translate3d(0, 0, 0);
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .cbx_f5913e756e8776dbec8a83a9ebe470e8_7 .task-title_f5913e756e8776dbec8a83a9ebe470e8_59 {
	padding-left: 8px;
	line-height: 18px;
	font-size: 1em;
	font-weight: 300;
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .cbx_f5913e756e8776dbec8a83a9ebe470e8_7:hover span:first-child {
	border-color: var(--color-primary);
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .inp-cbx_f5913e756e8776dbec8a83a9ebe470e8_70 {
	position: absolute;
	visibility: hidden;
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .inp-cbx_f5913e756e8776dbec8a83a9ebe470e8_70:checked+.cbx_f5913e756e8776dbec8a83a9ebe470e8_7 .task-title_f5913e756e8776dbec8a83a9ebe470e8_59 {
	text-decoration: line-through;
	text-decoration-color: var(--color-primary);
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .inp-cbx_f5913e756e8776dbec8a83a9ebe470e8_70:checked+.cbx_f5913e756e8776dbec8a83a9ebe470e8_7 span:first-child {
	background: var(--color-primary);
	border-color: var(--color-primary);
	animation: wave-4_f5913e756e8776dbec8a83a9ebe470e8_1 0.4s ease;
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .inp-cbx_f5913e756e8776dbec8a83a9ebe470e8_70:checked+.cbx_f5913e756e8776dbec8a83a9ebe470e8_7 span:first-child svg {
	stroke-dashoffset: 0;
}

.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .inline-svg_f5913e756e8776dbec8a83a9ebe470e8_90 {
	position: absolute;
	width: 0;
	height: 0;
	pointer-events: none;
	user-select: none;
}

@media screen and (max-width: 640px) {
	.checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3 .cbx_f5913e756e8776dbec8a83a9ebe470e8_7 {
		width: 100%;
		display: inline-block;
	}
}

@-moz-keyframes wave-4_f5913e756e8776dbec8a83a9ebe470e8_1 {
	50% {
		transform: scale(0.9);
	}
}

@-webkit-keyframes wave-4_f5913e756e8776dbec8a83a9ebe470e8_1 {
	50% {
		transform: scale(0.9);
	}
}

@-o-keyframes wave-4_f5913e756e8776dbec8a83a9ebe470e8_1 {
	50% {
		transform: scale(0.9);
	}
}

@keyframes wave-4_f5913e756e8776dbec8a83a9ebe470e8_1 {
	50% {
		transform: scale(0.9);
	}
}
`;
        document.head.appendChild(e);
      }
    })();
    module2.exports = JSON.parse('{"checkbox-wrapper-4":"checkbox-wrapper-4_f5913e756e8776dbec8a83a9ebe470e8_3","cbx":"cbx_f5913e756e8776dbec8a83a9ebe470e8_7","task-title":"task-title_f5913e756e8776dbec8a83a9ebe470e8_59","inp-cbx":"inp-cbx_f5913e756e8776dbec8a83a9ebe470e8_70","wave-4":"wave-4_f5913e756e8776dbec8a83a9ebe470e8_1","inline-svg":"inline-svg_f5913e756e8776dbec8a83a9ebe470e8_90"}');
  }
});

// index.ts
var index_exports = {};
__export(index_exports, {
  default: () => Main
});
module.exports = __toCommonJS(index_exports);

// node_modules/solid-js/dist/solid.js
var sharedConfig = {
  context: void 0,
  registry: void 0,
  effects: void 0,
  done: false,
  getContextId() {
    return getContextId(this.context.count);
  },
  getNextContextId() {
    return getContextId(this.context.count++);
  }
};
function getContextId(count) {
  const num = String(count), len = num.length - 1;
  return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return {
    ...sharedConfig.context,
    id: sharedConfig.getNextContextId(),
    count: 0
  };
}
var IS_DEV = false;
var equalFn = (a, b) => a === b;
var $PROXY = Symbol("solid-proxy");
var SUPPORTS_PROXY = typeof Proxy === "function";
var $TRACK = Symbol("solid-track");
var $DEVCOMP = Symbol("solid-dev-component");
var signalOptions = {
  equals: equalFn
};
var ERROR = null;
var runEffects = runQueue;
var STALE = 1;
var PENDING = 2;
var UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Owner = null;
var Transition = null;
var Scheduler = null;
var ExternalSourceConfig = null;
var Listener = null;
var Updates = null;
var Effects = null;
var ExecCount = 0;
function createRoot(fn, detachedOwner) {
  const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
    owned: null,
    cleanups: null,
    context: current ? current.context : null,
    owner: current
  }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
  Owner = root;
  Listener = null;
  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || void 0
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      if (Transition && Transition.running && Transition.sources.has(s)) value2 = value2(s.tValue);
      else value2 = value2(s.value);
    }
    return writeSignal(s, value2);
  };
  return [readSignal.bind(s), setter];
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  if (Scheduler && Transition && Transition.running) Updates.push(c);
  else updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE), s = SuspenseContext && useContext(SuspenseContext);
  if (s) c.suspense = s;
  if (!options || !options.render) c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || void 0;
  if (Scheduler && Transition && Transition.running) {
    c.tState = STALE;
    Updates.push(c);
  } else updateComputation(c);
  return readSignal.bind(c);
}
function untrack(fn) {
  if (!ExternalSourceConfig && Listener === null) return fn();
  const listener = Listener;
  Listener = null;
  try {
    if (ExternalSourceConfig) return ExternalSourceConfig.untrack(fn);
    return fn();
  } finally {
    Listener = listener;
  }
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) ;
  else if (Owner.cleanups === null) Owner.cleanups = [fn];
  else Owner.cleanups.push(fn);
  return fn;
}
function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }
  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;
    if (Scheduler || SuspenseContext) {
      t = Transition || (Transition = {
        sources: /* @__PURE__ */ new Set(),
        effects: [],
        promises: /* @__PURE__ */ new Set(),
        disposed: /* @__PURE__ */ new Set(),
        queue: /* @__PURE__ */ new Set(),
        running: true
      });
      t.done || (t.done = new Promise((res) => t.resolve = res));
      t.running = true;
    }
    runUpdates(fn, false);
    Listener = Owner = null;
    return t ? t.done : void 0;
  });
}
var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
function useContext(context) {
  let value;
  return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
}
var SuspenseContext;
function readSignal() {
  const runningTransition = Transition && Transition.running;
  if (this.sources && (runningTransition ? this.tState : this.state)) {
    if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this);
    else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (runningTransition && Transition.sources.has(this)) return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    if (Transition) {
      const TransitionRunning = Transition.running;
      if (TransitionRunning || !isComp && Transition.sources.has(node)) {
        Transition.sources.add(node);
        node.tValue = value;
      }
      if (!TransitionRunning) node.value = value;
    } else node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o)) continue;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure) Updates.push(o);
            else Effects.push(o);
            if (o.observers) markDownstream(o);
          }
          if (!TransitionRunning) o.state = STALE;
          else o.tState = STALE;
        }
        if (Updates.length > 1e6) {
          Updates = [];
          if (IS_DEV) ;
          throw new Error();
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const time = ExecCount;
  runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        Listener = Owner = node;
        runComputation(node, node.tValue, time);
        Listener = Owner = null;
      }, false);
    });
  }
}
function runComputation(node, value, time) {
  let nextValue;
  const owner = Owner, listener = Listener;
  Listener = Owner = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      if (Transition && Transition.running) {
        node.tState = STALE;
        node.tOwned && node.tOwned.forEach(cleanNode);
        node.tOwned = void 0;
      } else {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: Owner ? Owner.context : null,
    pure
  };
  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }
  if (Owner === null) ;
  else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned) Owner.tOwned = [c];
      else Owner.tOwned.push(c);
    } else {
      if (!Owner.owned) Owner.owned = [c];
      else Owner.owned.push(c);
    }
  }
  if (ExternalSourceConfig && c.fn) {
    const [track, trigger] = createSignal(void 0, {
      equals: false
    });
    const ordinary = ExternalSourceConfig.factory(c.fn, trigger);
    onCleanup(() => ordinary.dispose());
    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
    const inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
    c.fn = (x) => {
      track();
      return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
    };
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if ((runningTransition ? node.tState : node.state) === 0) return;
  if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node)) return;
    if (runningTransition ? node.tState : node.state) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (runningTransition) {
      let top = node, prev = ancestors[i + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top)) return;
      }
    }
    if ((runningTransition ? node.tState : node.state) === STALE) {
      updateComputation(node);
    } else if ((runningTransition ? node.tState : node.state) === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;
  else Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait) Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);
    else runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  let res;
  if (Transition) {
    if (!Transition.promises.size && !Transition.queue.size) {
      const sources = Transition.sources;
      const disposed = Transition.disposed;
      Effects.push.apply(Effects, Transition.effects);
      res = Transition.resolve;
      for (const e2 of Effects) {
        "tState" in e2 && (e2.state = e2.tState);
        delete e2.tState;
      }
      Transition = null;
      runUpdates(() => {
        for (const d of disposed) cleanNode(d);
        for (const v of sources) {
          v.value = v.tValue;
          if (v.owned) {
            for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
          }
          if (v.tOwned) v.owned = v.tOwned;
          delete v.tValue;
          delete v.tOwned;
          v.tState = 0;
        }
        setTransPending(false);
      }, false);
    } else if (Transition.running) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
  }
  const e = Effects;
  Effects = null;
  if (e.length) runUpdates(() => runEffects(e), false);
  if (res) res();
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function scheduleQueue(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}
function runUserEffects(queue) {
  let i, userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);
    else queue[userLength++] = e;
  }
  if (sharedConfig.context) {
    if (sharedConfig.count) {
      sharedConfig.effects || (sharedConfig.effects = []);
      sharedConfig.effects.push(...queue.slice(0, userLength));
      return;
    }
    setHydrateContext();
  }
  if (sharedConfig.effects && (sharedConfig.done || !sharedConfig.count)) {
    queue = [...sharedConfig.effects, ...queue];
    userLength += sharedConfig.effects.length;
    delete sharedConfig.effects;
  }
  for (i = 0; i < userLength; i++) runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  const runningTransition = Transition && Transition.running;
  if (runningTransition) node.tState = 0;
  else node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = runningTransition ? source.tState : source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
      } else if (state === PENDING) lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (runningTransition ? !o.tState : !o.state) {
      if (runningTransition) o.tState = PENDING;
      else o.state = PENDING;
      if (o.pure) Updates.push(o);
      else Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.tOwned) {
    for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
    delete node.tOwned;
  }
  if (Transition && Transition.running && node.pure) {
    reset(node, true);
  } else if (node.owned) {
    for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
    node.cleanups = null;
  }
  if (Transition && Transition.running) node.tState = 0;
  else node.state = 0;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
  }
}
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function runErrors(err, fns, owner) {
  try {
    for (const f of fns) f(err);
  } catch (e) {
    handleError(e, owner && owner.owner || null);
  }
}
function handleError(err, owner = Owner) {
  const fns = ERROR && owner && owner.context && owner.context[ERROR];
  const error = castError(err);
  if (!fns) throw error;
  if (Effects) Effects.push({
    fn() {
      runErrors(error, fns, owner);
    },
    state: STALE
  });
  else runErrors(error, fns, owner);
}
var FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++) d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [], newLen = newItems.length, i, j;
    newItems[$TRACK];
    return untrack(() => {
      let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot((disposer) => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      } else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++) ;
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = /* @__PURE__ */ new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === void 0 ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== void 0 && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
var hydrationEnabled = false;
function createComponent(Comp, props) {
  if (hydrationEnabled) {
    if (sharedConfig.context) {
      const c = sharedConfig.context;
      setHydrateContext(nextHydrateContext());
      const r = untrack(() => Comp(props || {}));
      setHydrateContext(c);
      return r;
    }
  }
  return untrack(() => Comp(props || {}));
}
function trueFn() {
  return true;
}
var propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },
  has(_, property) {
    if (property === $PROXY) return true;
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return !(s = typeof s === "function" ? s() : s) ? {} : s;
}
function resolveSources() {
  for (let i = 0, length = this.length; i < length; ++i) {
    const v = this[i]();
    if (v !== void 0) return v;
  }
}
function mergeProps(...sources) {
  let proxy = false;
  for (let i = 0; i < sources.length; i++) {
    const s = sources[i];
    proxy = proxy || !!s && $PROXY in s;
    sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
  }
  if (SUPPORTS_PROXY && proxy) {
    return new Proxy({
      get(property) {
        for (let i = sources.length - 1; i >= 0; i--) {
          const v = resolveSource(sources[i])[property];
          if (v !== void 0) return v;
        }
      },
      has(property) {
        for (let i = sources.length - 1; i >= 0; i--) {
          if (property in resolveSource(sources[i])) return true;
        }
        return false;
      },
      keys() {
        const keys = [];
        for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
        return [...new Set(keys)];
      }
    }, propTraps);
  }
  const sourcesMap = {};
  const defined = /* @__PURE__ */ Object.create(null);
  for (let i = sources.length - 1; i >= 0; i--) {
    const source = sources[i];
    if (!source) continue;
    const sourceKeys = Object.getOwnPropertyNames(source);
    for (let i2 = sourceKeys.length - 1; i2 >= 0; i2--) {
      const key = sourceKeys[i2];
      if (key === "__proto__" || key === "constructor") continue;
      const desc = Object.getOwnPropertyDescriptor(source, key);
      if (!defined[key]) {
        defined[key] = desc.get ? {
          enumerable: true,
          configurable: true,
          get: resolveSources.bind(sourcesMap[key] = [desc.get.bind(source)])
        } : desc.value !== void 0 ? desc : void 0;
      } else {
        const sources2 = sourcesMap[key];
        if (sources2) {
          if (desc.get) sources2.push(desc.get.bind(source));
          else if (desc.value !== void 0) sources2.push(() => desc.value);
        }
      }
    }
  }
  const target = {};
  const definedKeys = Object.keys(defined);
  for (let i = definedKeys.length - 1; i >= 0; i--) {
    const key = definedKeys[i], desc = defined[key];
    if (desc && desc.get) Object.defineProperty(target, key, desc);
    else target[key] = desc ? desc.value : void 0;
  }
  return target;
}
var narrowedError = (name) => `Stale read from <${name}>.`;
function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback || void 0));
}
function Show(props) {
  const keyed = props.keyed;
  const conditionValue = createMemo(() => props.when, void 0, void 0);
  const condition = keyed ? conditionValue : createMemo(conditionValue, void 0, {
    equals: (a, b) => !a === !b
  });
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      const fn = typeof child === "function" && child.length > 0;
      return fn ? untrack(() => child(keyed ? c : () => {
        if (!untrack(condition)) throw narrowedError("Show");
        return conditionValue();
      })) : child;
    }
    return props.fallback;
  }, void 0, void 0);
}

// node_modules/solid-js/web/dist/web.js
var booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
var Properties = /* @__PURE__ */ new Set(["className", "value", "readOnly", "noValidate", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
var memo = (fn) => createMemo(() => fn());
function reconcileArrays(parentNode, a, b) {
  let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = a[aEnd - 1].nextSibling, map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) a[aStart].remove();
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = /* @__PURE__ */ new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart, sequence = 1, t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else a[aStart++].remove();
    }
  }
}
var $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init, options = {}) {
  let disposer;
  createRoot((dispose2) => {
    disposer = dispose2;
    element === document ? code() : insert(element, code(), element.firstChild ? null : void 0, init);
  }, options.owner);
  return () => {
    disposer();
    element.textContent = "";
  };
}
function template(html, isImportNode, isSVG, isMathML) {
  let node;
  const create = () => {
    const t = isMathML ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
    t.innerHTML = html;
    return isSVG ? t.content.firstChild.firstChild : isMathML ? t.firstChild : t.content.firstChild;
  };
  const fn = isImportNode ? () => untrack(() => document.importNode(node || (node = create()), true)) : () => (node || (node = create())).cloneNode(true);
  fn.cloneNode = fn;
  return fn;
}
function delegateEvents(eventNames, document2 = window.document) {
  const e = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document2.addEventListener(name, eventHandler);
    }
  }
}
function setAttribute(node, name, value) {
  if (isHydrating(node)) return;
  if (value == null) node.removeAttribute(name);
  else node.setAttribute(name, value);
}
function className(node, value) {
  if (isHydrating(node)) return;
  if (value == null) node.removeAttribute("class");
  else node.className = value;
}
function use(fn, element, arg) {
  return untrack(() => fn(element, arg));
}
function insert(parent, accessor, marker, initial) {
  if (marker !== void 0 && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
}
function isHydrating(node) {
  return !!sharedConfig.context && !sharedConfig.done && (!node || node.isConnected);
}
function eventHandler(e) {
  if (sharedConfig.registry && sharedConfig.events) {
    if (sharedConfig.events.find(([el, ev]) => ev === e)) return;
  }
  let node = e.target;
  const key = `$$${e.type}`;
  const oriTarget = e.target;
  const oriCurrentTarget = e.currentTarget;
  const retarget = (value) => Object.defineProperty(e, "target", {
    configurable: true,
    value
  });
  const handleNode = () => {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== void 0 ? handler.call(node, data, e) : handler.call(node, e);
      if (e.cancelBubble) return;
    }
    node.host && typeof node.host !== "string" && !node.host._$host && node.contains(e.target) && retarget(node.host);
    return true;
  };
  const walkUpTree = () => {
    while (handleNode() && (node = node._$host || node.parentNode || node.host)) ;
  };
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = _$HY.done = true;
  if (e.composedPath) {
    const path = e.composedPath();
    retarget(path[0]);
    for (let i = 0; i < path.length - 2; i++) {
      node = path[i];
      if (!handleNode()) break;
      if (node._$host) {
        node = node._$host;
        walkUpTree();
        break;
      }
      if (node.parentNode === oriCurrentTarget) {
        break;
      }
    }
  } else walkUpTree();
  retarget(oriTarget);
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  const hydrating = isHydrating(parent);
  if (hydrating) {
    !current && (current = [...parent.childNodes]);
    let cleaned = [];
    for (let i = 0; i < current.length; i++) {
      const node = current[i];
      if (node.nodeType === 8 && node.data.slice(0, 2) === "!$") node.remove();
      else cleaned.push(node);
    }
    current = cleaned;
  }
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value, multi = marker !== void 0;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (hydrating) return current;
    if (t === "number") {
      value = value.toString();
      if (value === current) return current;
    }
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data !== value && (node.data = value);
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (hydrating) return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    createRenderEffect(() => {
      let v = value();
      while (typeof v === "function") v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    const currentArray = current && Array.isArray(current);
    if (normalizeIncomingArray(array, value, current, unwrapArray)) {
      createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (hydrating) {
      if (!array.length) return current;
      if (marker === void 0) return current = [...parent.childNodes];
      let node = array[0];
      if (node.parentNode !== parent) return current;
      const nodes = [node];
      while ((node = node.nextSibling) !== marker) nodes.push(node);
      return current = nodes;
    }
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else if (currentArray) {
      if (current.length === 0) {
        appendNodes(parent, array, marker);
      } else reconcileArrays(parent, current, array);
    } else {
      current && cleanChildren(parent);
      appendNodes(parent, array);
    }
    current = array;
  } else if (value.nodeType) {
    if (hydrating && value.parentNode) return current = multi ? [value] : value;
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else ;
  return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i], prev = current && current[normalized.length], t;
    if (item == null || item === true || item === false) ;
    else if ((t = typeof item) === "object" && item.nodeType) {
      normalized.push(item);
    } else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item], Array.isArray(prev) ? prev : [prev]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else {
      const value = String(item);
      if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);
      else normalized.push(document.createTextNode(value));
    }
  }
  return dynamic;
}
function appendNodes(parent, array, marker = null) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === void 0) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
        else isParent && el.remove();
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}
var RequestContext = Symbol();

// src/components/Calendar.tsx
var import_calendar2 = __toESM(require_calendar());

// src/components/DaySlot.tsx
var import_calendar = __toESM(require_calendar());

// src/assets/icons/panel-top-close.svg
var panel_top_close_default = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-top-close-icon lucide-panel-top-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="m9 16 3-3 3 3"/></svg>\n';

// src/libs/date.ts
function formatDateToInput(date) {
  return date.toISOString().split("T")[0];
}
function getDayName(date, size) {
  const dda = new Date(date);
  return dda.toLocaleDateString("en-US", { weekday: size ?? "long" });
}
function prettyDate(date) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  ;
}

// src/libs/CalendarManager.ts
var CalendarManager = class _CalendarManager {
  context = null;
  static self;
  calendars = [];
  midnights = 0;
  dailyInterval = null;
  midnightTimeout = null;
  // #1
  static getSelf() {
    if (!this.self) {
      this.self = new _CalendarManager();
    }
    return this.self;
  }
  adjustContext({ db, toolEvent, app }) {
    if (!this.context) {
      this.context = { db, toolEvent, app };
    }
  }
  // #2
  addCalendar(cal) {
    this.calendars.push({ ...cal, data: { ...cal.data, selectedDate: cal.data.start_today ? formatDateToInput(/* @__PURE__ */ new Date()) : cal.data.selectedDate } });
  }
  getCalendar(cardName) {
    return this.calendars.find((i) => i.card == cardName);
  }
  // #3
  addTask(cardName, date, task) {
    const calendar2 = this.getCalendar(cardName);
    let day = calendar2?.data?.days.find((i) => i.date === date);
    if (!day) {
      day = { date, tasks: [task] };
      calendar2?.data?.days.push(day);
    } else {
      day.tasks.push(task);
    }
    this.update(cardName);
  }
  async removeTask(cardName, date, id) {
    const day = this.getCalendar(cardName)?.data?.days.find((i) => i.date === date);
    if (day) {
      if (day?.tasks.length === 1) {
        this.getCalendar(cardName).data.days = this.getCalendar(cardName)?.data.days.filter((i) => i.date !== date);
      } else {
        day.tasks = day.tasks.filter((i) => i.id !== id);
      }
      await this.update(cardName);
    }
  }
  editTask(cardName, date, task) {
    this.getCalendar(cardName).data?.days.find((i) => i.date === date)?.tasks.map((i) => i.id === task.id ? task : i);
    this.update(cardName);
  }
  getTasks(cardName, date) {
    return this.getCalendar(cardName).data.days.find((i) => i.date === date)?.tasks ?? [];
  }
  setSelectedDate(cardName, date) {
    this.getCalendar(cardName).data.selectedDate = date;
    this.update(cardName);
  }
  setCalendarData(cardName, data) {
    const cal = this.getCalendar(cardName);
    cal.data = { ...cal.data, ...data };
    this.update(cardName);
  }
  async update(cardName) {
    await this.context?.db.putData(cardName, this.getCalendar(cardName).data);
  }
  // glob
  onMidnight(callback) {
    if (this.midnights === 0) {
      const now = /* @__PURE__ */ new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0,
        0
      );
      const notify = () => {
        this.context?.toolEvent.emit("midnight", formatDateToInput(/* @__PURE__ */ new Date()));
      };
      const msUntilMidnight = nextMidnight.getTime() - now.getTime();
      this.midnightTimeout = setTimeout(() => {
        notify();
        this.dailyInterval = setInterval(notify, 24 * 60 * 60 * 1e3);
      }, msUntilMidnight);
    }
    this.midnights += 1;
    this.context?.toolEvent.on("midnight", callback);
  }
  offMidnight(callback) {
    this.midnights -= 1;
    this.context?.toolEvent.off("midnight", callback);
    if (this.midnights === 0) {
      this.dailyInterval && clearInterval(this.dailyInterval);
      this.midnightTimeout && clearInterval(this.midnightTimeout);
    }
  }
};

// src/components/Task.tsx
var import_task = __toESM(require_task());

// src/libs/form.ts
function openForm(task, setTask) {
  const form = {
    id: "calendar-task:edit",
    title: "Edit Task",
    update: true,
    options: [
      {
        type: "longtext",
        label: "Title",
        value: task.title,
        key: "title"
      }
    ],
    submit: (data) => {
      setTask((prev) => ({ ...prev, title: data.title }));
    }
  };
  CalendarManager.getSelf().context?.app.emit("Form", form);
}

// src/components/Task.tsx
var _tmpl$ = /* @__PURE__ */ template(`<div><input type=checkbox><label><span><svg width=12px height=10px></svg></span><span></span></label><svg><symbol id=check-4 viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1">`);
function Task({
  cardName,
  date,
  task,
  setTasks
}) {
  const [myTask, setMyTask] = createSignal(task);
  const onContextMenu = () => {
    const cm = {
      id: "calendar-task",
      header: "Calendar Task",
      items: [{
        label: "Edit",
        icon: "PenLine",
        onclick: editTask
      }, {
        icon: "Trash2",
        label: "Delete",
        onclick: removeTask
      }]
    };
    CalendarManager.getSelf().context?.app.emit("context-menu-extend", cm);
  };
  const editTask = () => {
    openForm(myTask(), setMyTask);
    CalendarManager.getSelf().editTask(cardName, date, myTask());
  };
  const removeTask = async () => {
    await CalendarManager.getSelf().removeTask(cardName, date, task.id);
    setTasks((prev) => [...prev.filter((i) => i.id !== task.id)]);
  };
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$4.nextSibling, _el$7 = _el$3.nextSibling;
    _el$.$$contextmenu = onContextMenu;
    _el$5.innerHTML = '<use xlink:href="#check-4"></use>';
    insert(_el$6, () => myTask().title);
    createRenderEffect((_p$) => {
      var _v$ = import_task.default["checkbox-wrapper-4"], _v$2 = import_task.default["inp-cbx"], _v$3 = myTask().id, _v$4 = import_task.default["cbx"], _v$5 = myTask().id, _v$6 = import_task.default["task-title"], _v$7 = import_task.default["inline-svg"];
      _v$ !== _p$.e && className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
      _v$3 !== _p$.a && setAttribute(_el$2, "id", _p$.a = _v$3);
      _v$4 !== _p$.o && className(_el$3, _p$.o = _v$4);
      _v$5 !== _p$.i && setAttribute(_el$3, "for", _p$.i = _v$5);
      _v$6 !== _p$.n && className(_el$6, _p$.n = _v$6);
      _v$7 !== _p$.s && setAttribute(_el$7, "class", _p$.s = _v$7);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0
    });
    createRenderEffect(() => _el$2.checked = myTask().completed);
    return _el$;
  })();
}
delegateEvents(["contextmenu"]);

// src/components/DaySlot.tsx
var _tmpl$2 = /* @__PURE__ */ template(`<div class="flex justify-between items-center"><h2></h2><button class=button-control>`);
var _tmpl$22 = /* @__PURE__ */ template(`<div><div>`);
var _tmpl$3 = /* @__PURE__ */ template(`<div class="flex flex-col justify-between items-center relative"><h2></h2><span class="group-hover:opacity-100 opacity-0 text-xs text-secondary-40 absolute duration-300 transition-opacity">`);
var _tmpl$4 = /* @__PURE__ */ template(`<span>`);
var _tmpl$5 = /* @__PURE__ */ template(`<div class="w-full flex flex-col gap-1 flex-1 pt-5 overflow-hidden overflow-y-auto">`);
var _tmpl$6 = /* @__PURE__ */ template(`<input class=color-secondary-50 placeholder="Add a new task...">`);
function DaySlot({
  cardName,
  id,
  date,
  openPanel,
  setOpenPanel
}) {
  let parentDiv;
  const [isOpen, setOpen] = createSignal(false);
  const [tasks, setTasks] = createSignal([...CalendarManager.getSelf().getTasks(cardName, date)]);
  const dayData = createMemo(() => {
    const n_tasks = tasks().length;
    const tasks_x = tasks().reduce((c, i) => c + (i.completed ? 1 : 0), 0);
    return {
      quickDate: prettyDate(date),
      n_tasks,
      n_tasks_x: tasks_x
    };
  });
  const open = () => {
    setOpenPanel(id);
    parentDiv.removeEventListener("click", open);
  };
  const close = () => {
    setOpenPanel(null);
    setOpen(false);
    parentDiv.addEventListener("click", open);
  };
  const on_animation_end = () => {
    setOpen(true);
  };
  createEffect(() => {
    if (openPanel() === null) {
      setOpen(false);
    }
  });
  onMount(() => {
    parentDiv.addEventListener("click", open);
  });
  onCleanup(() => {
    parentDiv.removeEventListener("click", open);
  });
  return (() => {
    var _el$ = _tmpl$22(), _el$2 = _el$.firstChild;
    _el$.addEventListener("animationend", on_animation_end);
    var _ref$ = parentDiv;
    typeof _ref$ === "function" ? use(_ref$, _el$) : parentDiv = _el$;
    insert(_el$2, createComponent(Show, {
      get when() {
        return isOpen();
      },
      get fallback() {
        return (() => {
          var _el$6 = _tmpl$3(), _el$7 = _el$6.firstChild, _el$8 = _el$7.nextSibling;
          insert(_el$7, () => getDayName(date));
          _el$8.style.setProperty("top", "3em");
          insert(_el$8, () => `${dayData().quickDate} | ${dayData().n_tasks_x}:${dayData().n_tasks}`);
          createRenderEffect(() => className(_el$7, `${import_calendar.default["day-title"]} px-2`));
          return _el$6;
        })();
      },
      get children() {
        return [(() => {
          var _el$3 = _tmpl$2(), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
          insert(_el$4, () => getDayName(date));
          _el$5.$$click = close;
          _el$5.innerHTML = panel_top_close_default;
          createRenderEffect(() => className(_el$4, `${import_calendar.default["day-title"]}`));
          return _el$3;
        })(), createComponent(DayPanel, mergeProps(() => ({
          cardName,
          tasks,
          setTasks,
          quickDate: dayData().quickDate,
          date
        })))];
      }
    }));
    createRenderEffect((_p$) => {
      var _v$ = `group ${import_calendar.default["day-slot"]} relative`, _v$2 = !!(openPanel() === id), _v$3 = !!(openPanel() !== null && openPanel() !== id), _v$4 = !!isOpen(), _v$5 = import_calendar.default["day-slot-content"];
      _v$ !== _p$.e && className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && _el$.classList.toggle("open", _p$.t = _v$2);
      _v$3 !== _p$.a && _el$.classList.toggle("close", _p$.a = _v$3);
      _v$4 !== _p$.o && _el$.classList.toggle("opened", _p$.o = _v$4);
      _v$5 !== _p$.i && className(_el$2, _p$.i = _v$5);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    });
    return _el$;
  })();
}
function DayPanel({
  cardName,
  tasks,
  setTasks,
  quickDate,
  date
}) {
  const submitTask = (e) => {
    if (e.key === "Enter") {
      const input = e.currentTarget;
      if (!input.value.trim()) return;
      const newTask = {
        id: crypto.randomUUID(),
        title: input.value.trim(),
        completed: false
      };
      CalendarManager.getSelf().addTask(cardName, date, newTask);
      setTasks((prev) => [...prev, newTask]);
      input.value = "";
    }
  };
  return [(() => {
    var _el$9 = _tmpl$4();
    insert(_el$9, quickDate);
    createRenderEffect(() => className(_el$9, import_calendar.default["day-date"]));
    return _el$9;
  })(), (() => {
    var _el$0 = _tmpl$5();
    insert(_el$0, createComponent(For, {
      get each() {
        return tasks();
      },
      children: (task) => createComponent(Task, {
        cardName,
        task,
        date,
        setTasks
      })
    }));
    return _el$0;
  })(), (() => {
    var _el$1 = _tmpl$6();
    _el$1.$$keydown = submitTask;
    _el$1.style.setProperty("font-weight", "300");
    return _el$1;
  })()];
}
delegateEvents(["click", "keydown"]);

// src/components/Calendar.tsx
var _tmpl$7 = /* @__PURE__ */ template(`<div class="@container h-full relative flex flex-col"><div><input type=date></div><div>`);
var _tmpl$23 = /* @__PURE__ */ template(`<hr>`);
function Calendar({
  cardName,
  data,
  setData,
  week
}) {
  const [openPanel, setOpenPanel] = createSignal(null);
  const changeSelectedDate = (e) => {
    setOpenPanel(null);
    const sda = e.currentTarget.value;
    setData((prev) => ({
      ...prev,
      selectedDate: sda
    }));
    CalendarManager.getSelf().setSelectedDate(cardName, sda);
  };
  return (() => {
    var _el$ = _tmpl$7(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$2.nextSibling;
    _el$3.addEventListener("change", changeSelectedDate);
    insert(_el$4, createComponent(For, {
      get each() {
        return week();
      },
      children: (i, index) => [createComponent(DaySlot, mergeProps({
        get id() {
          return index();
        },
        date: i
      }, {
        cardName,
        openPanel,
        setOpenPanel
      })), createComponent(Show, {
        get when() {
          return memo(() => index() < 6)() && openPanel() === null;
        },
        get children() {
          var _el$5 = _tmpl$23();
          createRenderEffect((_p$) => {
            var _v$4 = import_calendar2.default["cl-sepa"], _v$5 = index();
            _v$4 !== _p$.e && className(_el$5, _p$.e = _v$4);
            _v$5 !== _p$.t && setAttribute(_el$5, "data-of", _p$.t = _v$5);
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$5;
        }
      })]
    }));
    createRenderEffect((_p$) => {
      var _v$ = import_calendar2.default["calendar-control-bar"], _v$2 = import_calendar2.default["date-picker"], _v$3 = import_calendar2.default["calendar-days-container"];
      _v$ !== _p$.e && className(_el$2, _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$3, _p$.t = _v$2);
      _v$3 !== _p$.a && className(_el$4, _p$.a = _v$3);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    createRenderEffect(() => _el$3.value = data().selectedDate);
    return _el$;
  })();
}

// src/libs/settings.ts
function showSettings(cardName, data, setData, onSTChanged) {
  const settings = {
    tool: "Calendar",
    card: cardName,
    options: [
      {
        type: "text",
        label: "Name",
        description: "Name of this calendar.",
        value: data().name,
        onChange: (s) => setData((prev) => ({ ...prev, name: s }))
      },
      {
        type: "boolean",
        label: "Start Today",
        description: "Update the view to start from today automatically.",
        value: data().start_today,
        onChange: (v) => {
          setData((prev) => ({ ...prev, start_today: v }));
          onSTChanged();
        }
      },
      {
        type: "number",
        label: "Threshold",
        description: "Number of tasks after which the day is considered busy.",
        value: data().threshold,
        onChange: (n) => setData((prev) => ({ ...prev, threshold: n }))
      }
    ],
    save: () => {
      CalendarManager.getSelf().setCalendarData(cardName, data());
    }
  };
  CalendarManager.getSelf().context?.app.emit("tool-settings", settings);
}

// src/App.tsx
var import_calendar3 = __toESM(require_calendar());

// src/assets/icons/calendar.svg
var calendar_default = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-range-icon lucide-calendar-range"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M17 14h-6"/><path d="M13 18H7"/><path d="M7 14h.01"/><path d="M17 18h.01"/></svg>\n';

// src/assets/icons/circle-check-big.svg
var circle_check_big_default = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>\n';

// src/App.tsx
var _tmpl$8 = /* @__PURE__ */ template(`<div>`);
var _tmpl$24 = /* @__PURE__ */ template(`<div><div class="flex gap-2 items-center"><div></div><h1 class="font-bold text-xl"></h1></div><div class="text-sm font-medium mt-4 mb-2 flex items-center gap-1"><div></div><h2 class=text-secondary-70>Daily Tasks</h2></div><div class="flex gap-1">`);
var _tmpl$32 = /* @__PURE__ */ template(`<div class="flex flex-col text-xs items-center"><h4></h4><p class="px-2 py-1 bg-secondary-10 rounded">`);
function App({
  cardName
}) {
  const statics = createMemo(() => ({
    keys: {
      settings: `calendar-${cardName}-settings`
    }
  }));
  const [data, setData] = createSignal(CalendarManager.getSelf().getCalendar(cardName).data);
  const week = createMemo(() => {
    const start = new Date(data().selectedDate);
    return Array.from({
      length: 7
    }, (_, i) => {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      return formatDateToInput(day);
    });
  });
  const onSettings = () => {
    showSettings(cardName, data, setData, onStartTodayChanged);
  };
  const onMidnight = (d) => {
    setData((prev) => ({
      ...prev,
      selectedDate: d ?? prev.selectedDate
    }));
  };
  const onStartTodayChanged = () => {
    if (data().start_today) {
      CalendarManager.getSelf().onMidnight(onMidnight);
    } else {
      CalendarManager.getSelf().offMidnight(onMidnight);
    }
  };
  onMount(() => {
    CalendarManager.getSelf().context.app.on(statics().keys.settings, onSettings);
    onStartTodayChanged();
  });
  onCleanup(() => {
    CalendarManager.getSelf().context.app.off(statics().keys.settings, onSettings);
    CalendarManager.getSelf().offMidnight(onMidnight);
  });
  return (() => {
    var _el$ = _tmpl$8();
    insert(_el$, createComponent(Calendar, {
      cardName,
      data,
      setData,
      week
    }), null);
    insert(_el$, createComponent(FloatingPanel, {
      cardName,
      data,
      week
    }), null);
    createRenderEffect(() => className(_el$, import_calendar3.default["parent"]));
    return _el$;
  })();
}
function FloatingPanel({
  cardName,
  data,
  week
}) {
  const [days, setDays] = createSignal(CalendarManager.getSelf().getCalendar(cardName).data.days);
  return (() => {
    var _el$2 = _tmpl$24(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$3.nextSibling, _el$7 = _el$6.firstChild, _el$8 = _el$6.nextSibling;
    _el$4.style.setProperty("width", "1.2em");
    _el$4.style.setProperty("height", "1.2em");
    _el$4.innerHTML = calendar_default;
    insert(_el$5, () => data().name);
    _el$7.style.setProperty("width", "1.1em");
    _el$7.style.setProperty("height", "1.1em");
    _el$7.innerHTML = circle_check_big_default;
    insert(_el$8, createComponent(For, {
      get each() {
        return week();
      },
      children: (day) => {
        const numberOfTasks = days().find((i) => i.date === day)?.tasks.length ?? 0;
        return (() => {
          var _el$9 = _tmpl$32(), _el$0 = _el$9.firstChild, _el$1 = _el$0.nextSibling;
          insert(_el$0, () => getDayName(day, "short"));
          _el$1.style.setProperty("width", "2em");
          _el$1.style.setProperty("height", "2em");
          insert(_el$1, numberOfTasks);
          createRenderEffect((_$p) => (_$p = numberOfTasks < Math.floor(data().threshold / 2) ? "var(--secondary-color-10)" : numberOfTasks >= data().threshold ? "#a8323a" : "#F6E05E") != null ? _el$1.style.setProperty("background", _$p) : _el$1.style.removeProperty("background"));
          return _el$9;
        })();
      }
    }));
    createRenderEffect(() => className(_el$2, import_calendar3.default["floating-panel"]));
    return _el$2;
  })();
}

// index.ts
var calendar = [
  {
    date: formatDateToInput(/* @__PURE__ */ new Date()),
    tasks: [
      {
        id: "task-001",
        title: "Write documentation for Hollow API",
        completed: false
      },
      {
        id: "task-002",
        title: "Fix calendar date rendering bug",
        completed: true
      },
      {
        id: "task-003",
        title: "Design new plugin manager UI",
        completed: false
      },
      {
        id: "task-004",
        title: "Implement dark/light theme toggle",
        completed: true
      }
    ]
  }
];
var Main = class {
  roots = /* @__PURE__ */ new Map();
  db;
  constructor(db) {
    this.db = db;
  }
  async onCreate(cardName) {
    const initialData = {
      name: cardName,
      start_today: true,
      threshold: 4,
      selectedDate: formatDateToInput(/* @__PURE__ */ new Date()),
      days: calendar
    };
    const request = await this.db.putData(cardName, initialData);
    return request;
  }
  async onDelete(cardName) {
    const request = await this.db.deleteData(cardName);
    return request;
  }
  async onLoad(card, app) {
    const data = await this.db.getData(card.name);
    if (!data) return false;
    CalendarManager.getSelf().addCalendar({ card: card.name, data });
    CalendarManager.getSelf().adjustContext({ db: this.db, toolEvent: card.toolEvent, app });
    const targetContainer = document.getElementById(card.containerID);
    if (targetContainer) {
      const dispose2 = createRoot((dispose3) => {
        render(
          () => App({ cardName: card.name }),
          targetContainer
        );
        return dispose3;
      });
      this.roots.set(card.name, dispose2);
      return true;
    }
    return false;
  }
  onUnload(cardName) {
    const dispose2 = this.roots.get(cardName);
    if (dispose2) {
      dispose2();
      this.roots.delete(cardName);
    }
  }
};
