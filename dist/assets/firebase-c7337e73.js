/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Uc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,w=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,S=f&63;h||(S=64,a||(R=64)),r.push(e[m],e[w],e[R],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(la(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Uc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||w==null)throw new Bc;const R=o<<2|l>>4;if(r.push(R),f!==64){const S=l<<4&240|f>>2;if(r.push(S),w!==64){const D=f<<6&192|w;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jc=function(n){const t=la(n);return ha.encodeByteArray(t,!0)},sr=function(n){return jc(n).replace(/\./g,"")},qc=function(n){try{return ha.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=()=>$c().__FIREBASE_DEFAULTS__,Hc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Kc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&qc(n[1]);return t&&JSON.parse(t)},Cs=()=>{try{return zc()||Hc()||Kc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gc=n=>{var t,e;return(e=(t=Cs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},da=n=>{const t=Gc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},fa=()=>{var n;return(n=Cs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[sr(JSON.stringify(e)),sr(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xc(){var n;const t=(n=Cs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yc(){return!Xc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Zc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="FirebaseError";class me extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=tl,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ma.prototype.create)}}class ma{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?el(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new me(s,l,r)}}function el(n,t){return n.replace(nl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const nl=/\{\$([^}]+)}/g;function us(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(po(o)&&po(a)){if(!us(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function po(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){return n&&n._delegate?n._delegate:n}class Pe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Wc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(il(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sl(n){return n===oe?void 0:n}function il(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const al={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ul=H.INFO,cl={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},ll=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=cl[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ga{constructor(t){this.name=t,this._logLevel=ul,this._logHandler=ll,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?al[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const hl=(n,t)=>t.some(e=>n instanceof e);let mo,go;function dl(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fl(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _a=new WeakMap,cs=new WeakMap,ya=new WeakMap,Jr=new WeakMap,Vs=new WeakMap;function pl(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Wt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&_a.set(e,n)}).catch(()=>{}),Vs.set(t,n),t}function ml(n){if(cs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});cs.set(n,t)}let ls={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return cs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ya.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function gl(n){ls=n(ls)}function _l(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Zr(this),t,...e);return ya.set(r,t.sort?t.sort():[t]),Wt(r)}:fl().includes(n)?function(...t){return n.apply(Zr(this),t),Wt(_a.get(this))}:function(...t){return Wt(n.apply(Zr(this),t))}}function yl(n){return typeof n=="function"?_l(n):(n instanceof IDBTransaction&&ml(n),hl(n,dl())?new Proxy(n,ls):n)}function Wt(n){if(n instanceof IDBRequest)return pl(n);if(Jr.has(n))return Jr.get(n);const t=yl(n);return t!==n&&(Jr.set(n,t),Vs.set(t,n)),t}const Zr=n=>Vs.get(n);function El(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Wt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Wt(a.result),h.oldVersion,h.newVersion,Wt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Tl=["get","getKey","getAll","getAllKeys","count"],vl=["put","add","delete","clear"],ts=new Map;function _o(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ts.get(t))return ts.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=vl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tl.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return ts.set(t,o),o}gl(n=>({...n,get:(t,e,r)=>_o(t,e)||n.get(t,e,r),has:(t,e)=>!!_o(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(wl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function wl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const hs="@firebase/app",yo="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new ga("@firebase/app"),Al="@firebase/app-compat",Rl="@firebase/analytics-compat",Pl="@firebase/analytics",Sl="@firebase/app-check-compat",bl="@firebase/app-check",Cl="@firebase/auth",Vl="@firebase/auth-compat",Dl="@firebase/database",kl="@firebase/database-compat",Nl="@firebase/functions",xl="@firebase/functions-compat",Ol="@firebase/installations",Ml="@firebase/installations-compat",Ll="@firebase/messaging",Fl="@firebase/messaging-compat",Ul="@firebase/performance",Bl="@firebase/performance-compat",jl="@firebase/remote-config",ql="@firebase/remote-config-compat",$l="@firebase/storage",zl="@firebase/storage-compat",Hl="@firebase/firestore",Kl="@firebase/vertexai-preview",Gl="@firebase/firestore-compat",Wl="firebase",Ql="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]",Xl={[hs]:"fire-core",[Al]:"fire-core-compat",[Pl]:"fire-analytics",[Rl]:"fire-analytics-compat",[bl]:"fire-app-check",[Sl]:"fire-app-check-compat",[Cl]:"fire-auth",[Vl]:"fire-auth-compat",[Dl]:"fire-rtdb",[kl]:"fire-rtdb-compat",[Nl]:"fire-fn",[xl]:"fire-fn-compat",[Ol]:"fire-iid",[Ml]:"fire-iid-compat",[Ll]:"fire-fcm",[Fl]:"fire-fcm-compat",[Ul]:"fire-perf",[Bl]:"fire-perf-compat",[jl]:"fire-rc",[ql]:"fire-rc-compat",[$l]:"fire-gcs",[zl]:"fire-gcs-compat",[Hl]:"fire-fst",[Gl]:"fire-fst-compat",[Kl]:"fire-vertex","fire-js":"fire-js",[Wl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Map,Yl=new Map,fs=new Map;function Eo(n,t){try{n.container.addComponent(t)}catch(e){le.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function pn(n){const t=n.name;if(fs.has(t))return le.debug(`There were multiple attempts to register component ${t}.`),!1;fs.set(t,n);for(const e of ir.values())Eo(e,n);for(const e of Yl.values())Eo(e,n);return!0}function Ea(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new ma("app","Firebase",Jl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=Ql;function va(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ds,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(e||(e=fa()),!e)throw Qt.create("no-options");const o=ir.get(s);if(o){if(us(e,o.options)&&us(r,o.config))return o;throw Qt.create("duplicate-app",{appName:s})}const a=new ol(s);for(const h of fs.values())a.addComponent(h);const l=new Zl(e,r,a);return ir.set(s,l),l}function Ia(n=ds){const t=ir.get(n);if(!t&&n===ds&&fa())return va();if(!t)throw Qt.create("no-app",{appName:n});return t}function Xt(n,t,e){var r;let s=(r=Xl[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),le.warn(l.join(" "));return}pn(new Pe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="firebase-heartbeat-database",eh=1,mn="firebase-heartbeat-store";let es=null;function wa(){return es||(es=El(th,eh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(mn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),es}async function nh(n){try{const e=(await wa()).transaction(mn),r=await e.objectStore(mn).get(Aa(n));return await e.done,r}catch(t){if(t instanceof me)le.warn(t.message);else{const e=Qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});le.warn(e.message)}}}async function To(n,t){try{const r=(await wa()).transaction(mn,"readwrite");await r.objectStore(mn).put(t,Aa(n)),await r.done}catch(e){if(e instanceof me)le.warn(e.message);else{const r=Qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});le.warn(r.message)}}}function Aa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=1024,sh=30*24*60*60*1e3;class ih{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ah(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=sh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vo(),{heartbeatsToSend:r,unsentEntries:s}=oh(this._heartbeatsCache.heartbeats),o=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function vo(){return new Date().toISOString().substring(0,10)}function oh(n,t=rh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Io(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Io(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ah{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jc()?Zc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await nh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return To(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return To(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Io(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n){pn(new Pe("platform-logger",t=>new Il(t),"PRIVATE")),pn(new Pe("heartbeat",t=>new ih(t),"PRIVATE")),Xt(hs,yo,n),Xt(hs,yo,"esm2017"),Xt("fire-js","")}uh("");var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,Ra;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.D=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,I){for(var g=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)g[Mt-2]=arguments[Mt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],E=T.g[2];var I=T.g[3],g=p+(I^_&(E^I))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(I^_&(E^I))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=I+(E^p&(_^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(_^I&(p^_))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(p^E&(I^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(p^_))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^p&(E^I))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^I)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^I)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=I+(p^_^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^_)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~I))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~I))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=I+(_^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~_))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var _=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=_;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<p;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<p;)if(y[E++]=T[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var _=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=_&255,_/=256;for(this.u(T),T=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)T[_++]=this.g[p]>>>y&255;return T};function o(T,p){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==p||(_[E]=I,y=!1)}this.g=_}var l={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return w;if(0>T)return C(f(-T));for(var p=[],_=1,y=0;T>=_;y++)p[y]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return C(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=w,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var w=h(0),R=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();for(var T=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(N(this))return"-"+C(this).toString(T);for(var p=f(Math.pow(T,6)),_=this,y="";;){var E=z(_,p).g;_=q(_,E.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,D(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=q(this,T),N(T)?-1:D(T)?0:1};function C(T){for(var p=T.g.length,_=[],y=0;y<p;y++)_[y]=~T.g[y];return new a(_,~T.h).add(R)}n.abs=function(){return N(this)?C(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(T,p){return T.add(C(p))}n.j=function(T){if(D(this)||D(T))return w;if(N(this))return N(T)?C(this).j(C(T)):C(C(this).j(T));if(N(T))return C(this.j(C(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Mt=T.i(E)>>>16,Fe=T.i(E)&65535;_[2*y+2*E]+=g*Fe,B(_,2*y+2*E),_[2*y+2*E+1]+=I*Fe,B(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Mt,B(_,2*y+2*E+1),_[2*y+2*E+2]+=I*Mt,B(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function B(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function U(T,p){this.g=T,this.h=p}function z(T,p){if(D(p))throw Error("division by zero");if(D(T))return new U(w,w);if(N(T))return p=z(C(T),p),new U(C(p.g),C(p.h));if(N(p))return p=z(T,C(p)),new U(C(p.g),p.h);if(30<T.g.length){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(T);)_=At(_),y=At(y);var E=nt(_,1),I=nt(y,1);for(y=nt(y,2),_=nt(_,2);!D(y);){var g=I.add(y);0>=g.l(T)&&(E=E.add(_),I=g),y=nt(y,1),_=nt(_,1)}return p=q(T,E.j(p)),new U(E,p)}for(E=w;0<=T.l(p);){for(_=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),g=I.j(p);N(g)||0<g.l(T);)_-=y,I=f(_),g=I.j(p);D(I)&&(I=R),E=E.add(I),T=q(T,g)}return new U(E,T)}n.A=function(T){return z(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function At(T){for(var p=T.g.length+1,_=[],y=0;y<p;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function nt(T,p){var _=p>>5;p%=32;for(var y=T.g.length-_,E=[],I=0;I<y;I++)E[I]=0<p?T.i(I+_)>>>p|T.i(I+_+1)<<32-p:T.i(I+_);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ra=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ue=a}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pa,Sa,on,ba,Zn,ps,Ca,Va,Da;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,c){return i==Array.prototype||i==Object.prototype||(i[u]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kn=="object"&&Kn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var v=i[d];if(!(v in c))break t;c=c[v]}i=i[i.length-1],d=c[i],u=u(d),u!=d&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var c=0,d=!1,v={next:function(){if(!d&&c<i.length){var A=c++;return{value:u(A,i[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,c){return i.call.apply(i.bind,arguments)}function w(i,u,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),i.apply(u,v)}}return function(){return i.apply(u,arguments)}}function R(i,u,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:w,R.apply(null,arguments)}function S(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function D(i,u){function c(){}c.prototype=u.prototype,i.aa=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,v,A){for(var V=Array(arguments.length-2),W=2;W<arguments.length;W++)V[W-2]=arguments[W];return u.prototype[v].apply(d,V)}}function N(i){const u=i.length;if(0<u){const c=Array(u);for(let d=0;d<u;d++)c[d]=i[d];return c}return[]}function C(i,u){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const v=i.length||0,A=d.length||0;i.length=v+A;for(let V=0;V<A;V++)i[v+V]=d[V]}else i.push(d)}}class q{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(i){return/^[\s\xa0]*$/.test(i)}function U(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function z(i){return z[" "](i),i}z[" "]=function(){};var At=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function nt(i,u,c){for(const d in i)u.call(c,i[d],d,i)}function T(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function p(i){const u={};for(const c in i)u[c]=i[c];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let c,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(c in d)i[c]=d[c];for(let A=0;A<_.length;A++)c=_[A],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function E(i){var u=1;i=i.split(":");const c=[];for(;0<u&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function I(i){l.setTimeout(()=>{throw i},0)}function g(){var i=Sr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Mt{constructor(){this.h=this.g=null}add(u,c){const d=Fe.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Fe=new q(()=>new ic,i=>i.reset());class ic{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Be=!1,Sr=new Mt,di=()=>{const i=l.Promise.resolve(void 0);Ue=()=>{i.then(oc)}};var oc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){I(c)}var u=Fe;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}Be=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var ac=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return i}();function je(i,u){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(At){t:{try{z(u.nodeName);var v=!0;break t}catch{}v=!1}v||(u=null)}}else c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:uc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&je.aa.h.call(this)}}D(je,dt);var uc={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var qe="closure_listenable_"+(1e6*Math.random()|0),cc=0;function lc(i,u,c,d,v){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=v,this.key=++cc,this.da=this.fa=!1}function Cn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Vn(i){this.src=i,this.g={},this.h=0}Vn.prototype.add=function(i,u,c,d,v){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var V=Cr(i,u,d,v);return-1<V?(u=i[V],c||(u.fa=!1)):(u=new lc(u,this.src,A,!!d,v),u.fa=c,i.push(u)),u};function br(i,u){var c=u.type;if(c in i.g){var d=i.g[c],v=Array.prototype.indexOf.call(d,u,void 0),A;(A=0<=v)&&Array.prototype.splice.call(d,v,1),A&&(Cn(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Cr(i,u,c,d){for(var v=0;v<i.length;++v){var A=i[v];if(!A.da&&A.listener==u&&A.capture==!!c&&A.ha==d)return v}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),Dr={};function fi(i,u,c,d,v){if(d&&d.once)return mi(i,u,c,d,v);if(Array.isArray(u)){for(var A=0;A<u.length;A++)fi(i,u[A],c,d,v);return null}return c=Or(c),i&&i[qe]?i.K(u,c,f(d)?!!d.capture:!!d,v):pi(i,u,c,!1,d,v)}function pi(i,u,c,d,v,A){if(!u)throw Error("Invalid event type");var V=f(v)?!!v.capture:!!v,W=Nr(i);if(W||(i[Vr]=W=new Vn(i)),c=W.add(u,c,d,V,A),c.proxy)return c;if(d=hc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)ac||(v=V),v===void 0&&(v=!1),i.addEventListener(u.toString(),d,v);else if(i.attachEvent)i.attachEvent(_i(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function hc(){function i(c){return u.call(i.src,i.listener,c)}const u=dc;return i}function mi(i,u,c,d,v){if(Array.isArray(u)){for(var A=0;A<u.length;A++)mi(i,u[A],c,d,v);return null}return c=Or(c),i&&i[qe]?i.L(u,c,f(d)?!!d.capture:!!d,v):pi(i,u,c,!0,d,v)}function gi(i,u,c,d,v){if(Array.isArray(u))for(var A=0;A<u.length;A++)gi(i,u[A],c,d,v);else d=f(d)?!!d.capture:!!d,c=Or(c),i&&i[qe]?(i=i.i,u=String(u).toString(),u in i.g&&(A=i.g[u],c=Cr(A,c,d,v),-1<c&&(Cn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete i.g[u],i.h--)))):i&&(i=Nr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Cr(u,c,d,v)),(c=-1<i?u[i]:null)&&kr(c))}function kr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[qe])br(u.i,i);else{var c=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(c,d,i.capture):u.detachEvent?u.detachEvent(_i(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=Nr(u))?(br(c,i),c.h==0&&(c.src=null,u[Vr]=null)):Cn(i)}}}function _i(i){return i in Dr?Dr[i]:Dr[i]="on"+i}function dc(i,u){if(i.da)i=!0;else{u=new je(u,this);var c=i.listener,d=i.ha||i.src;i.fa&&kr(i),i=c.call(d,u)}return i}function Nr(i){return i=i[Vr],i instanceof Vn?i:null}var xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Or(i){return typeof i=="function"?i:(i[xr]||(i[xr]=function(u){return i.handleEvent(u)}),i[xr])}function ft(){qt.call(this),this.i=new Vn(this),this.M=this,this.F=null}D(ft,qt),ft.prototype[qe]=!0,ft.prototype.removeEventListener=function(i,u,c,d){gi(this,i,u,c,d)};function Tt(i,u){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new dt(u,i);else if(u instanceof dt)u.target=u.target||i;else{var v=u;u=new dt(d,i),y(u,v)}if(v=!0,c)for(var A=c.length-1;0<=A;A--){var V=u.g=c[A];v=Dn(V,d,!0,u)&&v}if(V=u.g=i,v=Dn(V,d,!0,u)&&v,v=Dn(V,d,!1,u)&&v,c)for(A=0;A<c.length;A++)V=u.g=c[A],v=Dn(V,d,!1,u)&&v}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var c=i.g[u],d=0;d<c.length;d++)Cn(c[d]);delete i.g[u],i.h--}}this.F=null},ft.prototype.K=function(i,u,c,d){return this.i.add(String(i),u,!1,c,d)},ft.prototype.L=function(i,u,c,d){return this.i.add(String(i),u,!0,c,d)};function Dn(i,u,c,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var v=!0,A=0;A<u.length;++A){var V=u[A];if(V&&!V.da&&V.capture==c){var W=V.listener,ut=V.ha||V.src;V.fa&&br(i.i,V),v=W.call(ut,d)!==!1&&v}}return v&&!d.defaultPrevented}function yi(i,u,c){if(typeof i=="function")c&&(i=R(i,c));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Ei(i){i.g=yi(()=>{i.g=null,i.i&&(i.i=!1,Ei(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class fc extends qt{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(i){qt.call(this),this.h=i,this.g={}}D($e,qt);var Ti=[];function vi(i){nt(i.g,function(u,c){this.g.hasOwnProperty(c)&&kr(u)},i),i.g={}}$e.prototype.N=function(){$e.aa.N.call(this),vi(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mr=l.JSON.stringify,pc=l.JSON.parse,mc=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Lr(){}Lr.prototype.h=null;function Ii(i){return i.h||(i.h=i.i())}function wi(){}var ze={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fr(){dt.call(this,"d")}D(Fr,dt);function Ur(){dt.call(this,"c")}D(Ur,dt);var ne={},Ai=null;function kn(){return Ai=Ai||new ft}ne.La="serverreachability";function Ri(i){dt.call(this,ne.La,i)}D(Ri,dt);function He(i){const u=kn();Tt(u,new Ri(u))}ne.STAT_EVENT="statevent";function Pi(i,u){dt.call(this,ne.STAT_EVENT,i),this.stat=u}D(Pi,dt);function vt(i){const u=kn();Tt(u,new Pi(u,i))}ne.Ma="timingevent";function Si(i,u){dt.call(this,ne.Ma,i),this.size=u}D(Si,dt);function Ke(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function Ge(){this.g=!0}Ge.prototype.xa=function(){this.g=!1};function gc(i,u,c,d,v,A){i.info(function(){if(i.g)if(A)for(var V="",W=A.split("&"),ut=0;ut<W.length;ut++){var K=W[ut].split("=");if(1<K.length){var pt=K[0];K=K[1];var mt=pt.split("_");V=2<=mt.length&&mt[1]=="type"?V+(pt+"="+K+"&"):V+(pt+"=redacted&")}}else V=null;else V=A;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+u+`
`+c+`
`+V})}function _c(i,u,c,d,v,A,V){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+u+`
`+c+`
`+A+" "+V})}function ye(i,u,c,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ec(i,c)+(d?" "+d:"")})}function yc(i,u){i.info(function(){return"TIMEOUT: "+u})}Ge.prototype.info=function(){};function Ec(i,u){if(!i.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var V=1;V<v.length;V++)v[V]=""}}}}return Mr(c)}catch{return u}}var Nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Br;function xn(){}D(xn,Lr),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},Br=new xn;function $t(i,u,c,d){this.j=i,this.i=u,this.l=c,this.R=d||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ci}function Ci(){this.i=null,this.g="",this.h=!1}var Vi={},jr={};function qr(i,u,c){i.L=1,i.v=Fn(Lt(u)),i.m=c,i.P=!0,Di(i,null)}function Di(i,u){i.F=Date.now(),On(i),i.A=Lt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Hi(c.i,"t",d),i.C=0,c=i.j.J,i.h=new Ci,i.g=co(i.j,c?u:null,!i.m),0<i.O&&(i.M=new fc(R(i.Y,i,i.g),i.O)),u=i.U,c=i.g,d=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ti[0]=v.toString()),v=Ti);for(var A=0;A<v.length;A++){var V=fi(c,v[A],d||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),He(),gc(i.i,i.u,i.A,i.l,i.R,i.m)}$t.prototype.ca=function(i){i=i.target;const u=this.M;u&&Ft(i)==3?u.j():this.Y(i)},$t.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Ft(this.g);var u=this.g.Ba();const ve=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Ji(this.g)))){this.J||mt!=4||u==7||(u==8||0>=ve?He(3):He(2)),$r(this);var c=this.g.Z();this.X=c;e:if(ki(this)){var d=Ji(this.g);i="";var v=d.length,A=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),We(this);var V="";break e}this.h.i=new l.TextDecoder}for(u=0;u<v;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(A&&u==v-1)});d.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,_c(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ut=this.g;if((W=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(W)){var K=W;break e}}K=null}if(c=K)ye(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,c);else{this.o=!1,this.s=3,vt(12),re(this),We(this);break t}}if(this.P){c=!0;let bt;for(;!this.J&&this.C<V.length;)if(bt=Tc(this,V),bt==jr){mt==4&&(this.s=4,vt(14),c=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Vi){this.s=4,vt(15),ye(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else ye(this.i,this.l,bt,null),zr(this,bt);if(ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||V.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)ye(this.i,this.l,V,"[Invalid Chunked Response]"),re(this),We(this);else if(0<V.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Xr(pt),pt.M=!0,vt(11))}}else ye(this.i,this.l,V,null),zr(this,V);mt==4&&re(this),this.o&&!this.J&&(mt==4?io(this.j,this):(this.o=!1,On(this)))}else Lc(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),re(this),We(this)}}}catch{}finally{}};function ki(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Tc(i,u){var c=i.C,d=u.indexOf(`
`,c);return d==-1?jr:(c=Number(u.substring(c,d)),isNaN(c)?Vi:(d+=1,d+c>u.length?jr:(u=u.slice(d,d+c),i.C=d+c,u)))}$t.prototype.cancel=function(){this.J=!0,re(this)};function On(i){i.S=Date.now()+i.I,Ni(i,i.I)}function Ni(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ke(R(i.ba,i),u)}function $r(i){i.B&&(l.clearTimeout(i.B),i.B=null)}$t.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(yc(this.i,this.A),this.L!=2&&(He(),vt(17)),re(this),this.s=2,We(this)):Ni(this,this.S-i)};function We(i){i.j.G==0||i.J||io(i.j,i)}function re(i){$r(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,vi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function zr(i,u){try{var c=i.j;if(c.G!=0&&(c.g==i||Hr(c.h,i))){if(!i.K&&Hr(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)$n(c),jn(c);else break t;Qr(c),vt(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=Ke(R(c.Za,c),6e3));if(1>=Mi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ie(c,11)}else if((i.K||c.g==i)&&$n(c),!B(u))for(v=c.Da.g.parse(u),u=0;u<v.length;u++){let K=v[u];if(c.T=K[0],K=K[1],c.G==2)if(K[0]=="c"){c.K=K[1],c.ia=K[2];const pt=K[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const mt=K[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const ve=K[5];ve!=null&&typeof ve=="number"&&0<ve&&(d=1.5*ve,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const bt=i.g;if(bt){const Hn=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var A=d.h;A.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Kr(A,A.h),A.h=null))}if(d.D){const Yr=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yr&&(d.ya=Yr,X(d.I,d.D,Yr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var V=i;if(d.qa=uo(d,d.J?d.ia:null,d.W),V.K){Li(d.h,V);var W=V,ut=d.L;ut&&(W.I=ut),W.B&&($r(W),On(W)),d.g=V}else ro(d);0<c.i.length&&qn(c)}else K[0]!="stop"&&K[0]!="close"||ie(c,7);else c.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?ie(c,7):Wr(c):K[0]!="noop"&&c.l&&c.l.ta(K),c.v=0)}}He(4)}catch{}}var vc=class{constructor(i,u){this.g=i,this.map=u}};function xi(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Mi(i){return i.h?1:i.g?i.g.size:0}function Hr(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Kr(i,u){i.g?i.g.add(u):i.h=u}function Li(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}xi.prototype.cancel=function(){if(this.i=Fi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Fi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.D);return u}return N(i.i)}function Ic(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],c=i.length,d=0;d<c;d++)u.push(i[d]);return u}u=[],c=0;for(d in i)u[c++]=i[d];return u}function wc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var c=0;c<i;c++)u.push(c);return u}u=[],c=0;for(const d in i)u[c++]=d;return u}}}function Ui(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var c=wc(i),d=Ic(i),v=d.length,A=0;A<v;A++)u.call(void 0,d[A],c&&c[A],i)}var Bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ac(i,u){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),v=null;if(0<=d){var A=i[c].substring(0,d);v=i[c].substring(d+1)}else A=i[c];u(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function se(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof se){this.h=i.h,Mn(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.s),this.l=i.l;var u=i.i,c=new Ye;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),ji(this,c),this.m=i.m}else i&&(u=String(i).match(Bi))?(this.h=!1,Mn(this,u[1]||"",!0),this.o=Qe(u[2]||""),this.g=Qe(u[3]||"",!0),Ln(this,u[4]),this.l=Qe(u[5]||"",!0),ji(this,u[6]||"",!0),this.m=Qe(u[7]||"")):(this.h=!1,this.i=new Ye(null,this.h))}se.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Xe(u,qi,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Xe(u,qi,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Xe(c,c.charAt(0)=="/"?Sc:Pc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Xe(c,Cc)),i.join("")};function Lt(i){return new se(i)}function Mn(i,u,c){i.j=c?Qe(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function ji(i,u,c){u instanceof Ye?(i.i=u,Vc(i.i,i.h)):(c||(u=Xe(u,bc)),i.i=new Ye(u,i.h))}function X(i,u,c){i.i.set(u,c)}function Fn(i){return X(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Qe(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Xe(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Rc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Rc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var qi=/[#\/\?@]/g,Pc=/[#\?:]/g,Sc=/[#\?]/g,bc=/[#\?@]/g,Cc=/#/g;function Ye(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function zt(i){i.g||(i.g=new Map,i.h=0,i.i&&Ac(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=Ye.prototype,n.add=function(i,u){zt(this),this.i=null,i=Ee(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function $i(i,u){zt(i),u=Ee(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function zi(i,u){return zt(i),u=Ee(i,u),i.g.has(u)}n.forEach=function(i,u){zt(this),this.g.forEach(function(c,d){c.forEach(function(v){i.call(u,v,d,this)},this)},this)},n.na=function(){zt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let d=0;d<u.length;d++){const v=i[d];for(let A=0;A<v.length;A++)c.push(u[d])}return c},n.V=function(i){zt(this);let u=[];if(typeof i=="string")zi(this,i)&&(u=u.concat(this.g.get(Ee(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)u=u.concat(i[c])}return u},n.set=function(i,u){return zt(this),this.i=null,i=Ee(this,i),zi(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Hi(i,u,c){$i(i,u),0<c.length&&(i.i=null,i.g.set(Ee(i,u),N(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var d=u[c];const A=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var v=A;V[d]!==""&&(v+="="+encodeURIComponent(String(V[d]))),i.push(v)}}return this.i=i.join("&")};function Ee(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Vc(i,u){u&&!i.j&&(zt(i),i.i=null,i.g.forEach(function(c,d){var v=d.toLowerCase();d!=v&&($i(this,d),Hi(this,v,c))},i)),i.j=u}function Dc(i,u){const c=new Ge;if(l.Image){const d=new Image;d.onload=S(Ht,c,"TestLoadImage: loaded",!0,u,d),d.onerror=S(Ht,c,"TestLoadImage: error",!1,u,d),d.onabort=S(Ht,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=S(Ht,c,"TestLoadImage: timeout",!1,u,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function kc(i,u){const c=new Ge,d=new AbortController,v=setTimeout(()=>{d.abort(),Ht(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(A=>{clearTimeout(v),A.ok?Ht(c,"TestPingServer: ok",!0,u):Ht(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Ht(c,"TestPingServer: error",!1,u)})}function Ht(i,u,c,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(c)}catch{}}function Nc(){this.g=new mc}function xc(i,u,c){const d=c||"";try{Ui(i,function(v,A){let V=v;f(v)&&(V=Mr(v)),u.push(d+A+"="+encodeURIComponent(V))})}catch(v){throw u.push(d+"type="+encodeURIComponent("_badmap")),v}}function Je(i){this.l=i.Ub||null,this.j=i.eb||!1}D(Je,Lr),Je.prototype.g=function(){return new Un(this.l,this.j)},Je.prototype.i=function(i){return function(){return i}}({});function Un(i,u){ft.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Un,ft),n=Un.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,tn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ki(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ki(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Ze(this):tn(this),this.readyState==3&&Ki(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Ze(this))},n.Qa=function(i){this.g&&(this.response=i,Ze(this))},n.ga=function(){this.g&&Ze(this)};function Ze(i){i.readyState=4,i.l=null,i.j=null,i.v=null,tn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function tn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Gi(i){let u="";return nt(i,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function Gr(i,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Gi(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):X(i,u,c))}function Z(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Z,ft);var Oc=/^https?$/i,Mc=["POST","PUT"];n=Z.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Br.g(),this.v=this.o?Ii(this.o):Ii(Br),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(A){Wi(this,A);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)c.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),v=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Mc,u,void 0))||d||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,V]of c)this.g.setRequestHeader(A,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yi(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){Wi(this,A)}};function Wi(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Qi(i),Bn(i)}function Qi(i){i.A||(i.A=!0,Tt(i,"complete"),Tt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Tt(this,"complete"),Tt(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xi(this):this.bb())},n.bb=function(){Xi(this)};function Xi(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ft(i)!=4||i.Z()!=2)){if(i.u&&Ft(i)==4)yi(i.Ea,0,i);else if(Tt(i,"readystatechange"),Ft(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=V===0){var v=String(i.D).match(Bi)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),d=!Oc.test(v?v.toLowerCase():"")}c=d}if(c)Tt(i,"complete"),Tt(i,"success");else{i.m=6;try{var A=2<Ft(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",Qi(i)}}finally{Bn(i)}}}}function Bn(i,u){if(i.g){Yi(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Tt(i,"ready");try{c.onreadystatechange=d}catch{}}}function Yi(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ft(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),pc(u)}};function Ji(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Lc(i){const u={};i=(i.g&&2<=Ft(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(B(i[d]))continue;var c=E(i[d]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=u[v]||[];u[v]=A,A.push(c)}T(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function en(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function Zi(i){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=en("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=en("baseRetryDelayMs",5e3,i),this.cb=en("retryDelaySeedMs",1e4,i),this.Wa=en("forwardChannelMaxRetries",2,i),this.wa=en("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new xi(i&&i.concurrentRequestLimit),this.Da=new Nc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zi.prototype,n.la=8,n.G=1,n.connect=function(i,u,c,d){vt(0),this.W=i,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=uo(this,null,this.W),qn(this)};function Wr(i){if(to(i),i.G==3){var u=i.U++,c=Lt(i.I);if(X(c,"SID",i.K),X(c,"RID",u),X(c,"TYPE","terminate"),nn(i,c),u=new $t(i,i.j,u),u.L=2,u.v=Fn(Lt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=co(u.j,null),u.g.ea(u.v)),u.F=Date.now(),On(u)}ao(i)}function jn(i){i.g&&(Xr(i),i.g.cancel(),i.g=null)}function to(i){jn(i),i.u&&(l.clearTimeout(i.u),i.u=null),$n(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function qn(i){if(!Oi(i.h)&&!i.s){i.s=!0;var u=i.Ga;Ue||di(),Be||(Ue(),Be=!0),Sr.add(u,i),i.B=0}}function Fc(i,u){return Mi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ke(R(i.Ga,i,u),oo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new $t(this,this.j,i);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=no(this,v,u),c=Lt(this.I),X(c,"RID",i),X(c,"CVER",22),this.D&&X(c,"X-HTTP-Session-Id",this.D),nn(this,c),A&&(this.O?u="headers="+encodeURIComponent(String(Gi(A)))+"&"+u:this.m&&Gr(c,this.m,A)),Kr(this.h,v),this.Ua&&X(c,"TYPE","init"),this.P?(X(c,"$req",u),X(c,"SID","null"),v.T=!0,qr(v,c,null)):qr(v,c,u),this.G=2}}else this.G==3&&(i?eo(this,i):this.i.length==0||Oi(this.h)||eo(this))};function eo(i,u){var c;u?c=u.l:c=i.U++;const d=Lt(i.I);X(d,"SID",i.K),X(d,"RID",c),X(d,"AID",i.T),nn(i,d),i.m&&i.o&&Gr(d,i.m,i.o),c=new $t(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),u&&(i.i=u.D.concat(i.i)),u=no(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Kr(i.h,c),qr(c,d,u)}function nn(i,u){i.H&&nt(i.H,function(c,d){X(u,d,c)}),i.l&&Ui({},function(c,d){X(u,d,c)})}function no(i,u,c){c=Math.min(i.i.length,c);var d=i.l?R(i.l.Na,i.l,i):null;t:{var v=i.i;let A=-1;for(;;){const V=["count="+c];A==-1?0<c?(A=v[0].g,V.push("ofs="+A)):A=0:V.push("ofs="+A);let W=!0;for(let ut=0;ut<c;ut++){let K=v[ut].g;const pt=v[ut].map;if(K-=A,0>K)A=Math.max(0,v[ut].g-100),W=!1;else try{xc(pt,V,"req"+K+"_")}catch{d&&d(pt)}}if(W){d=V.join("&");break t}}}return i=i.i.splice(0,c),u.D=i,d}function ro(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Ue||di(),Be||(Ue(),Be=!0),Sr.add(u,i),i.v=0}}function Qr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ke(R(i.Fa,i),oo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,so(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ke(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),jn(this),so(this))};function Xr(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function so(i){i.g=new $t(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Lt(i.qa);X(u,"RID","rpc"),X(u,"SID",i.K),X(u,"AID",i.T),X(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&X(u,"TO",i.ja),X(u,"TYPE","xmlhttp"),nn(i,u),i.m&&i.o&&Gr(u,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Fn(Lt(u)),c.m=null,c.P=!0,Di(c,i)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),Qr(this),vt(19))};function $n(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function io(i,u){var c=null;if(i.g==u){$n(i),Xr(i),i.g=null;var d=2}else if(Hr(i.h,u))c=u.D,Li(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var v=i.B;d=kn(),Tt(d,new Si(d,c)),qn(i)}else ro(i);else if(v=u.s,v==3||v==0&&0<u.X||!(d==1&&Fc(i,u)||d==2&&Qr(i)))switch(c&&0<c.length&&(u=i.h,u.i=u.i.concat(c)),v){case 1:ie(i,5);break;case 4:ie(i,10);break;case 3:ie(i,6);break;default:ie(i,2)}}}function oo(i,u){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*u}function ie(i,u){if(i.j.info("Error code "+u),u==2){var c=R(i.fb,i),d=i.Xa;const v=!d;d=new se(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mn(d,"https"),Fn(d),v?Dc(d.toString(),c):kc(d.toString(),c)}else vt(2);i.G=0,i.l&&i.l.sa(u),ao(i),to(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ao(i){if(i.G=0,i.ka=[],i.l){const u=Fi(i.h);(u.length!=0||i.i.length!=0)&&(C(i.ka,u),C(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function uo(i,u,c){var d=c instanceof se?Lt(c):new se(c);if(d.g!="")u&&(d.g=u+"."+d.g),Ln(d,d.s);else{var v=l.location;d=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;var A=new se(null);d&&Mn(A,d),u&&(A.g=u),v&&Ln(A,v),c&&(A.l=c),d=A}return c=i.D,u=i.ya,c&&u&&X(d,c,u),X(d,"VER",i.la),nn(i,d),d}function co(i,u,c){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new Z(new Je({eb:c})):new Z(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lo(){}n=lo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zn(){}zn.prototype.g=function(i,u){return new Rt(i,u)};function Rt(i,u){ft.call(this),this.g=new Zi(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!B(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Te(this)}D(Rt,ft),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Wr(this.g)},Rt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Mr(i),i=c);u.i.push(new vc(u.Ya++,i)),u.G==3&&qn(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Wr(this.g),delete this.g,Rt.aa.N.call(this)};function ho(i){Fr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}D(ho,Fr);function fo(){Ur.call(this),this.status=1}D(fo,Ur);function Te(i){this.g=i}D(Te,lo),Te.prototype.ua=function(){Tt(this.g,"a")},Te.prototype.ta=function(i){Tt(this.g,new ho(i))},Te.prototype.sa=function(i){Tt(this.g,new fo)},Te.prototype.ra=function(){Tt(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Da=function(){return new zn},Va=function(){return kn()},Ca=ne,ps={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Zn=Nn,bi.COMPLETE="complete",ba=bi,wi.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",ft.prototype.listen=ft.prototype.K,on=wi,Sa=Je,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Pa=Z}).apply(typeof Kn<"u"?Kn:typeof self<"u"?self:typeof window<"u"?window:{});const Ao="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xe="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new ga("@firebase/firestore");function rn(){return he.logLevel}function k(n,...t){if(he.logLevel<=H.DEBUG){const e=t.map(Ds);he.debug(`Firestore (${xe}): ${n}`,...e)}}function Bt(n,...t){if(he.logLevel<=H.ERROR){const e=t.map(Ds);he.error(`Firestore (${xe}): ${n}`,...e)}}function Se(n,...t){if(he.logLevel<=H.WARN){const e=t.map(Ds);he.warn(`Firestore (${xe}): ${n}`,...e)}}function Ds(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${xe}) INTERNAL ASSERTION FAILED: `+n;throw Bt(t),new Error(t)}function Q(n,t){n||M()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ch{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class hh{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Yt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Yt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new ka(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new _t(t)}}class dh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new dh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ph{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new ph(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=gh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function G(n,t){return n<t?-1:n>t?1:0}function be(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new ot(0,0))}static max(){return new L(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends gn{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const _h=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends gn{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return _h.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new x(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new x(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}function yh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Zt(s,O.empty(),t)}function Eh(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(L.min(),O.empty(),-1)}static max(){return new Zt(L.max(),O.empty(),-1)}}function Th(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:G(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ih{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==vh)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++l,l===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function wh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function An(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ks.oe=-1;function pr(n){return n==null}function or(n){return n===0&&1/n==-1/0}function Ah(n){return typeof n=="number"&&Number.isInteger(n)&&!or(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Oe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gn(this.root,t,this.comparator,!0)}}class Gn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ct(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Po(this.data.getIterator())}getIteratorFrom(t){return new Po(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class Po{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new ht(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Oa("Invalid base64 string: "+o):o}}(t);return new Et(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Et(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const Rh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(Q(!!n),typeof n=="string"){let t=0;const e=Rh.exec(n);if(Q(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function de(n){return typeof n=="string"?Et.fromBase64String(n):Et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function xs(n){const t=n.mapValue.fields.__previous_value__;return Ns(t)?xs(t):t}function _n(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,r,s,o,a,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}class yn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ns(n)?4:Sh(n)?9007199254740991:10:M()}function xt(n,t){if(n===t)return!0;const e=fe(n);if(e!==fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _n(n).isEqual(_n(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=te(s.timestampValue),l=te(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return de(s.bytesValue).isEqual(de(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=st(s.doubleValue),l=st(o.doubleValue);return a===l?or(a)===or(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return be(n.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Ro(a)!==Ro(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!xt(a[h],l[h])))return!1;return!0}(n,t);default:return M()}}function En(n,t){return(n.values||[]).find(e=>xt(e,t))!==void 0}function Ce(n,t){if(n===t)return 0;const e=fe(n),r=fe(t);if(e!==r)return G(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return So(n.timestampValue,t.timestampValue);case 4:return So(_n(n),_n(t));case 5:return G(n.stringValue,t.stringValue);case 6:return function(o,a){const l=de(o),h=de(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=G(l[f],h[f]);if(m!==0)return m}return G(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=G(st(o.latitude),st(a.latitude));return l!==0?l:G(st(o.longitude),st(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],h=a.values||[];for(let f=0;f<l.length&&f<h.length;++f){const m=Ce(l[f],h[f]);if(m)return m}return G(l.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===Wn.mapValue&&a===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(a===Wn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let w=0;w<h.length&&w<m.length;++w){const R=G(h[w],m[w]);if(R!==0)return R;const S=Ce(l[h[w]],f[m[w]]);if(S!==0)return S}return G(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M()}}function So(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return G(n,t);const e=te(n),r=te(t),s=G(e.seconds,r.seconds);return s!==0?s:G(e.nanos,r.nanos)}function Ve(n){return ms(n)}function ms(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return de(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ms(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ms(e.fields[a])}`;return s+"}"}(n.mapValue):M()}function gs(n){return!!n&&"integerValue"in n}function Os(n){return!!n&&"arrayValue"in n}function bo(n){return!!n&&"nullValue"in n}function Co(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tr(n){return!!n&&"mapValue"in n}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Oe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Sh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=cn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Oe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Pt(cn(this.value))}}function Ma(n){const t=[];return Oe(n.fields,(e,r)=>{const s=new lt([e]);if(tr(r)){const o=Ma(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new yt(t,0,L.min(),L.min(),L.min(),Pt.empty(),0)}static newFoundDocument(t,e,r,s){return new yt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new yt(t,2,e,L.min(),L.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,L.min(),L.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e){this.position=t,this.inclusive=e}}function Vo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Ce(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Do(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!xt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function bh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{}class it extends La{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Vh(t,e,r):e==="array-contains"?new Nh(t,r):e==="in"?new xh(t,r):e==="not-in"?new Oh(t,r):e==="array-contains-any"?new Mh(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Dh(t,r):new kh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ce(e,this.value)):e!==null&&fe(this.value)===fe(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends La{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ot(t,e)}matches(t){return Fa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fa(n){return n.op==="and"}function Ua(n){return Ch(n)&&Fa(n)}function Ch(n){for(const t of n.filters)if(t instanceof Ot)return!1;return!0}function _s(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Ve(n.value);if(Ua(n))return n.filters.map(t=>_s(t)).join(",");{const t=n.filters.map(e=>_s(e)).join(",");return`${n.op}(${t})`}}function Ba(n,t){return n instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)}(n,t):n instanceof Ot?function(r,s){return s instanceof Ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&Ba(a,s.filters[l]),!0):!1}(n,t):void M()}function ja(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Ve(e.value)}`}(n):n instanceof Ot?function(e){return e.op.toString()+" {"+e.getFilters().map(ja).join(" ,")+"}"}(n):"Filter"}class Vh extends it{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Dh extends it{constructor(t,e){super(t,"in",e),this.keys=qa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kh extends it{constructor(t,e){super(t,"not-in",e),this.keys=qa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function qa(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Nh extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Os(e)&&En(e.arrayValue,this.value)}}class xh extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class Oh extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!En(this.value.arrayValue,e)}}class Mh extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Os(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function ko(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Lh(n,t,e,r,s,o,a)}function Ms(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>_s(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),pr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ve(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ve(r)).join(",")),t.ue=e}return t.ue}function Ls(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!bh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ba(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Do(n.startAt,t.startAt)&&Do(n.endAt,t.endAt)}function ys(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fh(n,t,e,r,s,o,a,l){return new mr(n,t,e,r,s,o,a,l)}function $a(n){return new mr(n)}function No(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Uh(n){return n.collectionGroup!==null}function ln(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ht(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new ur(o,r))}),e.has(lt.keyField().canonicalString())||t.ce.push(new ur(lt.keyField(),r))}return t.ce}function Dt(n){const t=F(n);return t.le||(t.le=Bh(t,ln(n))),t.le}function Bh(n,t){if(n.limitType==="F")return ko(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ur(s.field,o)});const e=n.endAt?new ar(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ar(n.startAt.position,n.startAt.inclusive):null;return ko(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Es(n,t,e){return new mr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function gr(n,t){return Ls(Dt(n),Dt(t))&&n.limitType===t.limitType}function za(n){return`${Ms(Dt(n))}|lt:${n.limitType}`}function Ie(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ja(s)).join(", ")}]`),pr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ve(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ve(s)).join(",")),`Target(${r})`}(Dt(n))}; limitType=${n.limitType})`}function _r(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of ln(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,h){const f=Vo(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,ln(r),s)||r.endAt&&!function(a,l,h){const f=Vo(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,ln(r),s))}(n,t)}function jh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ha(n){return(t,e)=>{let r=!1;for(const s of ln(n)){const o=qh(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function qh(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Ce(h,f):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Oe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return xa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new J(O.comparator);function jt(){return $h}const Ka=new J(O.comparator);function an(...n){let t=Ka;for(const e of n)t=t.insert(e.key,e);return t}function Ga(n){let t=Ka;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ae(){return hn()}function Wa(){return hn()}function hn(){return new Me(n=>n.toString(),(n,t)=>n.isEqual(t))}const zh=new J(O.comparator),Hh=new ht(O.comparator);function j(...n){let t=Hh;for(const e of n)t=t.add(e);return t}const Kh=new ht(G);function Gh(){return Kh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:or(t)?"-0":t}}function Xa(n){return{integerValue:""+n}}function Wh(n,t){return Ah(t)?Xa(t):Qa(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this._=void 0}}function Qh(n,t,e){return n instanceof cr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ns(o)&&(o=xs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Tn?Ja(n,t):n instanceof vn?Za(n,t):function(s,o){const a=Ya(s,o),l=xo(a)+xo(s.Pe);return gs(a)&&gs(s.Pe)?Xa(l):Qa(s.serializer,l)}(n,t)}function Xh(n,t,e){return n instanceof Tn?Ja(n,t):n instanceof vn?Za(n,t):e}function Ya(n,t){return n instanceof lr?function(r){return gs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class cr extends yr{}class Tn extends yr{constructor(t){super(),this.elements=t}}function Ja(n,t){const e=tu(t);for(const r of n.elements)e.some(s=>xt(s,r))||e.push(r);return{arrayValue:{values:e}}}class vn extends yr{constructor(t){super(),this.elements=t}}function Za(n,t){let e=tu(t);for(const r of n.elements)e=e.filter(s=>!xt(s,r));return{arrayValue:{values:e}}}class lr extends yr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function xo(n){return st(n.integerValue||n.doubleValue)}function tu(n){return Os(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yh(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Tn&&s instanceof Tn||r instanceof vn&&s instanceof vn?be(r.elements,s.elements,xt):r instanceof lr&&s instanceof lr?xt(r.Pe,s.Pe):r instanceof cr&&s instanceof cr}(n.transform,t.transform)}class Jh{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Er{}function eu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ru(n.key,Ut.none()):new Rn(n.key,n.data,Ut.none());{const e=n.data,r=Pt.empty();let s=new ht(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ge(n.key,r,new Ct(s.toArray()),Ut.none())}}function Zh(n,t,e){n instanceof Rn?function(s,o,a){const l=s.value.clone(),h=Mo(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ge?function(s,o,a){if(!er(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Mo(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(nu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function dn(n,t,e,r){return n instanceof Rn?function(o,a,l,h){if(!er(o.precondition,a))return l;const f=o.value.clone(),m=Lo(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ge?function(o,a,l,h){if(!er(o.precondition,a))return l;const f=Lo(o.fieldTransforms,h,a),m=a.data;return m.setAll(nu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,a,l){return er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function td(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Ya(r.transform,s||null);o!=null&&(e===null&&(e=Pt.empty()),e.set(r.field,o))}return e||null}function Oo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&be(r,s,(o,a)=>Yh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Rn extends Er{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ge extends Er{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function nu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Mo(n,t,e){const r=new Map;Q(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Xh(a,l,e[s]))}return r}function Lo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Qh(o,a,t))}return r}class ru extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ed extends Er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Zh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=dn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=dn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Wa();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=eu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,(e,r)=>Oo(e,r))&&be(this.baseMutations,t.baseMutations,(e,r)=>Oo(e,r))}}class Fs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Q(t.mutations.length===r.length);let s=function(){return zh}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Fs(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,$;function id(n){switch(n){default:return M();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function su(n){if(n===void 0)return Bt("GRPC error has no .code"),b.UNKNOWN;switch(n){case rt.OK:return b.OK;case rt.CANCELLED:return b.CANCELLED;case rt.UNKNOWN:return b.UNKNOWN;case rt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case rt.INTERNAL:return b.INTERNAL;case rt.UNAVAILABLE:return b.UNAVAILABLE;case rt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case rt.NOT_FOUND:return b.NOT_FOUND;case rt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case rt.ABORTED:return b.ABORTED;case rt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case rt.DATA_LOSS:return b.DATA_LOSS;default:return M()}}($=rt||(rt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new ue([4294967295,4294967295],0);function Fo(n){const t=od().encode(n),e=new Ra;return e.update(t),new Uint8Array(e.digest())}function Uo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,r],0),new ue([s,o],0)]}class Us{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new un(`Invalid padding: ${e}`);if(r<0)throw new un(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new un(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ue.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(ue.fromNumber(r)));return s.compare(ad)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Fo(t),[r,s]=Uo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Us(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Fo(t),[r,s]=Uo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Pn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Tr(L.min(),s,new J(G),jt(),j())}}class Pn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Pn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class iu{constructor(t,e){this.targetId=t,this.me=e}}class ou{constructor(t,e,r=Et.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Bo{constructor(){this.fe=0,this.ge=qo(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=j(),e=j(),r=j();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M()}}),new Pn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=qo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ud{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=jo(),this.Qe=new J(G)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(ys(o))if(r===0){const a=new O(o.path);this.Ue(e,a,yt.newNoDocument(a,L.min()))}else Q(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),h=l?this.Xe(l,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=de(r).toUint8Array()}catch(h){if(h instanceof Oa)return Se("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Us(a,s,o)}catch(h){return Se(h instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&ys(l.target)){const h=new O(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,yt.newNoDocument(h,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=j();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Tr(t,e,this.Qe,this.ke,r);return this.ke=jt(),this.qe=jo(),this.Qe=new J(G),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Bo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(G),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Bo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function jo(){return new J(O.comparator)}function qo(){return new J(O.comparator)}const cd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ld=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),hd=(()=>({and:"AND",or:"OR"}))();class dd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ts(n,t){return n.useProto3Json||pr(t)?t:{value:t}}function hr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function au(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function fd(n,t){return hr(n,t.toTimestamp())}function kt(n){return Q(!!n),L.fromTimestamp(function(e){const r=te(e);return new ot(r.seconds,r.nanos)}(n))}function Bs(n,t){return vs(n,t).canonicalString()}function vs(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function uu(n){const t=Y.fromString(n);return Q(fu(t)),t}function Is(n,t){return Bs(n.databaseId,t.path)}function ns(n,t){const e=uu(t);if(e.get(1)!==n.databaseId.projectId)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(lu(e))}function cu(n,t){return Bs(n.databaseId,t)}function pd(n){const t=uu(n);return t.length===4?Y.emptyPath():lu(t)}function ws(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lu(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $o(n,t,e){return{name:Is(n,t),fields:e.value.mapValue.fields}}function md(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(Q(m===void 0||typeof m=="string"),Et.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Et.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const m=f.code===void 0?b.UNKNOWN:su(f.code);return new x(m,f.message||"")}(a);e=new ou(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ns(n,r.document.name),o=kt(r.document.updateTime),a=r.document.createTime?kt(r.document.createTime):L.min(),l=new Pt({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(s,o,a,l),f=r.targetIds||[],m=r.removedTargetIds||[];e=new nr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ns(n,r.document),o=r.readTime?kt(r.readTime):L.min(),a=yt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new nr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ns(n,r.document),o=r.removedTargetIds||[];e=new nr([],o,s,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new sd(s,o),l=r.targetId;e=new iu(l,a)}}return e}function gd(n,t){let e;if(t instanceof Rn)e={update:$o(n,t.key,t.value)};else if(t instanceof ru)e={delete:Is(n,t.key)};else if(t instanceof ge)e={update:$o(n,t.key,t.data),updateMask:Rd(t.fieldMask)};else{if(!(t instanceof ed))return M();e={verify:Is(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof cr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Tn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:fd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function _d(n,t){return n&&n.length>0?(Q(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?kt(s.updateTime):kt(o);return a.isEqual(L.min())&&(a=kt(o)),new Jh(a,s.transformResults||[])}(e,t))):[]}function yd(n,t){return{documents:[cu(n,t.path)]}}function Ed(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=cu(n,s);const o=function(f){if(f.length!==0)return du(Ot.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:we(R.field),direction:Id(R.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ts(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Td(n){let t=pd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Q(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(w){const R=hu(w);return R instanceof Ot&&Ua(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(R=>function(D){return new ur(Ae(D.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(w){let R;return R=typeof w=="object"?w.value:w,pr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(w){const R=!!w.before,S=w.values||[];return new ar(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,S=w.values||[];return new ar(S,R)}(e.endAt)),Fh(t,s,a,o,l,"F",h,f)}function vd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function hu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ae(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ae(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ae(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ae(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return it.create(Ae(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ot.create(e.compositeFilter.filters.map(r=>hu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function Id(n){return cd[n]}function wd(n){return ld[n]}function Ad(n){return hd[n]}function we(n){return{fieldPath:n.canonicalString()}}function Ae(n){return lt.fromServerFormat(n.fieldPath)}function du(n){return n instanceof it?function(e){if(e.op==="=="){if(Co(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NAN"}};if(bo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Co(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NAN"}};if(bo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:we(e.field),op:wd(e.op),value:e.value}}}(n):n instanceof Ot?function(e){const r=e.getFilters().map(s=>du(s));return r.length===1?r[0]:{compositeFilter:{op:Ad(e.op),filters:r}}}(n):M()}function Rd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function fu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e,r,s,o=L.min(),a=L.min(),l=Et.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t){this.ct=t}}function Sd(n){const t=Td({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Es(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this._n=new Cd}addToCollectionParentIndex(t,e){return this._n.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Zt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Cd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ht(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ht(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new De(0)}static Ln(){return new De(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.changes=new Me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&dn(r.mutation,s,Ct.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const s=ae();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=an();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ae();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=jt();const a=hn(),l=function(){return hn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof ge)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),dn(m.mutation,f,m.mutation.getFieldMask(),ot.now())):a.set(f.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var w;return l.set(f,new Dd(m,(w=a.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(t,e){const r=hn();let s=new J((a,l)=>a-l),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Ct.empty();m=l.applyToLocalView(f,m),r.set(h,m);const w=(s.get(l.batchId)||j()).add(h);s=s.insert(l.batchId,w)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,w=Wa();m.forEach(R=>{if(!o.has(R)){const S=eu(e.get(R),r.get(R));S!==null&&w.set(R,S),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,w))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Uh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(ae());let l=-1,h=o;return a.next(f=>P.forEach(f,(m,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(m=>({batchId:l,changes:Ga(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=an();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=an();return this.indexManager.getCollectionParents(t,o).next(l=>P.forEach(l,h=>{const f=function(w,R){return new mr(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((w,R)=>{a=a.insert(w,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,yt.newInvalidDocument(m)))});let l=an();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&dn(m.mutation,f,Ct.empty(),ot.now()),_r(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return P.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:kt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Sd(s.bundledQuery),readTime:kt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.overlays=new J(O.comparator),this.hr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ae();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=ae(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new J((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=ae(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>l.set(f,m)),!(l.size()>=s)););return P.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rd(e,r));let o=this.hr.get(e);o===void 0&&(o=j(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.Pr=new ht(at.Ir),this.Tr=new ht(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new at(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new O(new Y([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new Y([])),r=new at(e,t),s=new at(e,t+1);let o=j();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||G(t.pr,e.pr)}static Er(t,e){return G(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ht(at.Ir)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nd(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new at(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(G);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new at(new O(o),0);let l=new ht(G);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.pr)),!0)},a),P.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Q(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new at(e,0),s=this.wr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t){this.vr=t,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=jt();const a=e.path,l=new O(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Th(Eh(m),r)<=0||(s.has(m.key)||_r(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M()}Fr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ld(this)}getSize(t){return P.resolve(this.size)}}class Ld extends Vd{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.persistence=t,this.Mr=new Me(e=>Ms(e),Ls),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Or=0,this.Nr=new js,this.targetCount=0,this.Lr=De.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),P.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new De(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.qn(e),P.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e){this.Br={},this.overlays={},this.kr=new ks(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Fd(this),this.indexManager=new bd,this.remoteDocumentCache=function(s){return new Md(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Pd(e),this.$r=new Nd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Od(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new Bd(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Bd extends Ih{constructor(t){super(),this.currentSequenceNumber=t}}class qs{constructor(t){this.persistence=t,this.zr=new js,this.jr=null}static Hr(t){return new qs(t)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),P.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const s=O.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return P.or([()=>P.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new $s(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Yc()?8:wh(Qc())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new jd;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(rn()<=H.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(rn()<=H.DEBUG&&k("QueryEngine","Query:",Ie(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(rn()<=H.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Dt(e))):P.resolve())}ji(t,e){if(No(e))return P.resolve(null);let r=Dt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Es(e,null,"F"),r=Dt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=j(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Zi(e,l);return this.Xi(e,f,a,h.readTime)?this.ji(t,Es(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,r,s){return No(e)||s.isEqual(L.min())?P.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,s)?P.resolve(null):(rn()<=H.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ie(e)),this.es(t,a,e,yh(s,-1)).next(l=>l))})}Zi(t,e){let r=new ht(Ha(t));return e.forEach((s,o)=>{_r(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return rn()<=H.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ie(e)),this.zi.getDocumentsMatchingQuery(t,e,Zt.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new J(G),this.rs=new Me(o=>Ms(o),Ls),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kd(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function zd(n,t,e,r){return new $d(n,t,e,r)}async function pu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=j();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:a,addedBatchIds:l}))})})}function Hd(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,h,f,m){const w=f.batch,R=w.keys();let S=P.resolve();return R.forEach(D=>{S=S.next(()=>m.getEntry(h,D)).next(N=>{const C=f.docVersions.get(D);Q(C!==null),N.version.compareTo(C)<0&&(w.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),m.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function mu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Kd(n,t){const e=F(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((m,w)=>{const R=s.get(w);if(!R)return;l.push(e.Qr.removeMatchingKeys(o,m.removedDocuments,w).next(()=>e.Qr.addMatchingKeys(o,m.addedDocuments,w)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(Et.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(w,S),function(N,C,q){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(R,S,m)&&l.push(e.Qr.updateTargetData(o,S))});let h=jt(),f=j();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(Gd(o,a,t.documentUpdates).next(m=>{h=m.cs,f=m.ls})),!r.isEqual(L.min())){const m=e.Qr.getLastRemoteSnapshotVersion(o).next(w=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(m)}return P.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.ns=s,o))}function Gd(n,t,e){let r=j(),s=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=jt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):k("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{cs:a,ls:s}})}function Wd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Qd(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new Gt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function As(n,t,e){const r=F(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!An(a))throw a;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function zo(n,t,e){const r=F(n);let s=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const w=F(h),R=w.rs.get(m);return R!==void 0?P.resolve(w.ns.get(R)):w.Qr.getTargetData(f,m)}(r,a,Dt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:j())).next(l=>(Xd(r,jh(t),l),{documents:l,hs:o})))}function Xd(n,t,e){let r=n.ss.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Ho{constructor(){this.activeTargetIds=Gh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yd{constructor(){this.no=new Ho,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ho,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn=null;function rs(){return Qn===null?Qn=function(){return 268435456+Math.round(2147483648*Math.random())}():Qn++,"0x"+Qn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class ef extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,a){const l=rs(),h=this.vo(e,r.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${l}:`,h,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,a),this.Mo(e,h,f,s).then(m=>(k("RestConnection",`Received RPC '${e}' ${l}: `,m),m),m=>{throw Se("RestConnection",`RPC '${e}' ${l} failed with error: `,m,"url: ",h,"request:",s),m})}xo(e,r,s,o,a,l){return this.Co(e,r,s,o,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const s=Zd[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=rs();return new Promise((a,l)=>{const h=new Pa;h.setWithCredentials(!0),h.listenOnce(ba.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Zn.NO_ERROR:const m=h.getResponseJson();k(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Zn.TIMEOUT:k(gt,`RPC '${t}' ${o} timed out`),l(new x(b.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const w=h.getStatus();if(k(gt,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const D=function(C){const q=C.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(q)>=0?q:b.UNKNOWN}(S.status);l(new x(D,S.message))}else l(new x(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new x(b.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{k(gt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);k(gt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Oo(t,e,r){const s=rs(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Da(),l=Va(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new Sa({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");k(gt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const w=a.createWebChannel(m,h);let R=!1,S=!1;const D=new tf({lo:C=>{S?k(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(R||(k(gt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),k(gt,`RPC '${t}' stream ${s} sending:`,C),w.send(C))},ho:()=>w.close()}),N=(C,q,B)=>{C.listen(q,U=>{try{B(U)}catch(z){setTimeout(()=>{throw z},0)}})};return N(w,on.EventType.OPEN,()=>{S||(k(gt,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),N(w,on.EventType.CLOSE,()=>{S||(S=!0,k(gt,`RPC '${t}' stream ${s} transport closed`),D.po())}),N(w,on.EventType.ERROR,C=>{S||(S=!0,Se(gt,`RPC '${t}' stream ${s} transport errored:`,C),D.po(new x(b.UNAVAILABLE,"The operation could not be completed")))}),N(w,on.EventType.MESSAGE,C=>{var q;if(!S){const B=C.data[0];Q(!!B);const U=B,z=U.error||((q=U[0])===null||q===void 0?void 0:q.error);if(z){k(gt,`RPC '${t}' stream ${s} received error:`,z);const At=z.status;let nt=function(_){const y=rt[_];if(y!==void 0)return su(y)}(At),T=z.message;nt===void 0&&(nt=b.INTERNAL,T="Unknown error status: "+At+" with message "+z.message),S=!0,D.po(new x(nt,T)),w.close()}else k(gt,`RPC '${t}' stream ${s} received:`,B),D.yo(B)}}),N(l,Ca.STAT_EVENT,C=>{C.stat===ps.PROXY?k(gt,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===ps.NOPROXY&&k(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){return new dd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,e,r,s,o,a,l,h){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new gu(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new x(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nf extends _u{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=md(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?kt(a.readTime):L.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=ws(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=ys(h)?{documents:yd(o,h)}:{query:Ed(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=au(o,a.resumeToken);const f=Ts(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=hr(o,a.snapshotVersion.toTimestamp());const f=Ts(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=vd(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=ws(this.serializer),e.removeTarget=t,this.i_(e)}}class rf extends _u{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=_d(t.writeResults,t.commitTime),r=kt(t.commitTime);return this.listener.A_(r,e)}return Q(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=ws(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>gd(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,vs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(b.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,vs(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(b.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class of{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Bt(e),this.y_=!1):k("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{_e(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.M_.add(4),await Sn(f),f.N_.set("Unknown"),f.M_.delete(4),await Ir(f)}(this))})}),this.N_=new of(r,s)}}async function Ir(n){if(_e(n))for(const t of n.x_)await t(!0)}async function Sn(n){for(const t of n.x_)await t(!1)}function yu(n,t){const e=F(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Gs(e)?Ks(e):Le(e).Xo()&&Hs(e,t))}function zs(n,t){const e=F(n),r=Le(e);e.F_.delete(t),r.Xo()&&Eu(e,t),e.F_.size===0&&(r.Xo()?r.n_():_e(e)&&e.N_.set("Unknown"))}function Hs(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Le(n).P_(t)}function Eu(n,t){n.L_.xe(t),Le(n).I_(t)}function Ks(n){n.L_=new ud({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Le(n).start(),n.N_.w_()}function Gs(n){return _e(n)&&!Le(n).Zo()&&n.F_.size>0}function _e(n){return F(n).M_.size===0}function Tu(n){n.L_=void 0}async function uf(n){n.N_.set("Online")}async function cf(n){n.F_.forEach((t,e)=>{Hs(n,t)})}async function lf(n,t){Tu(n),Gs(n)?(n.N_.D_(t),Ks(n)):n.N_.set("Unknown")}async function hf(n,t,e){if(n.N_.set("Online"),t instanceof ou&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await dr(n,r)}else if(t instanceof nr?n.L_.Ke(t):t instanceof iu?n.L_.He(t):n.L_.We(t),!e.isEqual(L.min()))try{const r=await mu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.F_.get(f);m&&o.F_.set(f,m.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const m=o.F_.get(h);if(!m)return;o.F_.set(h,m.withResumeToken(Et.EMPTY_BYTE_STRING,m.snapshotVersion)),Eu(o,h);const w=new Gt(m.target,h,f,m.sequenceNumber);Hs(o,w)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await dr(n,r)}}async function dr(n,t,e){if(!An(t))throw t;n.M_.add(1),await Sn(n),n.N_.set("Offline"),e||(e=()=>mu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Ir(n)})}function vu(n,t){return t().catch(e=>dr(n,e,t))}async function wr(n){const t=F(n),e=ee(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;df(t);)try{const s=await Wd(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,ff(t,s)}catch(s){await dr(t,s)}Iu(t)&&wu(t)}function df(n){return _e(n)&&n.v_.length<10}function ff(n,t){n.v_.push(t);const e=ee(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Iu(n){return _e(n)&&!ee(n).Zo()&&n.v_.length>0}function wu(n){ee(n).start()}async function pf(n){ee(n).V_()}async function mf(n){const t=ee(n);for(const e of n.v_)t.d_(e.mutations)}async function gf(n,t,e){const r=n.v_.shift(),s=Fs.from(r,t,e);await vu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await wr(n)}async function _f(n,t){t&&ee(n).E_&&await async function(r,s){if(function(a){return id(a)&&a!==b.ABORTED}(s.code)){const o=r.v_.shift();ee(r).t_(),await vu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await wr(r)}}(n,t),Iu(n)&&wu(n)}async function Go(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=_e(e);e.M_.add(3),await Sn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Ir(e)}async function yf(n,t){const e=F(n);t?(e.M_.delete(2),await Ir(e)):t||(e.M_.add(2),await Sn(e),e.N_.set("Unknown"))}function Le(n){return n.B_||(n.B_=function(e,r,s){const o=F(e);return o.f_(),new nf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:uf.bind(null,n),To:cf.bind(null,n),Ao:lf.bind(null,n),h_:hf.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Gs(n)?Ks(n):n.N_.set("Unknown")):(await n.B_.stop(),Tu(n))})),n.B_}function ee(n){return n.k_||(n.k_=function(e,r,s){const o=F(e);return o.f_(),new rf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:pf.bind(null,n),Ao:_f.bind(null,n),R_:mf.bind(null,n),A_:gf.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await wr(n)):(await n.k_.stop(),n.v_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Ws(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qs(n,t){if(Bt("AsyncQueue",`${t}: ${n}`),An(n))return new x(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=an(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new Re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Re;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.q_=new J(O.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):M():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ke{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new ke(t,e,Re.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Tf{constructor(){this.queries=new Me(t=>za(t),gr),this.onlineState="Unknown",this.z_=new Set}}async function vf(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new Ef,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Qs(a,`Initialization of query '${Ie(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Xs(e)}async function If(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function wf(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&Xs(e)}function Af(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function Xs(n){n.z_.forEach(t=>{t.next()})}var Rs,Qo;(Qo=Rs||(Rs={})).J_="default",Qo.Cache="cache";class Rf{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ke(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Rs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t){this.key=t}}class Ru{constructor(t){this.key=t}}class Pf{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=j(),this.mutatedKeys=j(),this.Ia=Ha(t),this.Ta=new Re(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Wo,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,w)=>{const R=s.get(m),S=_r(this.query,w)?w:null,D=!!R&&this.mutatedKeys.has(R.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;R&&S?R.data.isEqual(S.data)?D!==N&&(r.track({type:3,doc:S}),C=!0):this.Ra(R,S)||(r.track({type:2,doc:S}),C=!0,(h&&this.Ia(S,h)>0||f&&this.Ia(S,f)<0)&&(l=!0)):!R&&S?(r.track({type:0,doc:S}),C=!0):R&&!S&&(r.track({type:1,doc:R}),C=!0,(h||f)&&(l=!0)),C&&(S?(a=a.add(S),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((m,w)=>function(S,D){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return N(S)-N(D)}(m.type,w.type)||this.Ia(m.doc,w.doc)),this.Va(r),s=s!=null&&s;const l=e&&!s?this.ma():[],h=this.Pa.size===0&&this.current&&!s?1:0,f=h!==this.ha;return this.ha=h,a.length!==0||f?{snapshot:new ke(this.query,t.Ta,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Wo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=j(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Ru(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Au(r))}),e}pa(t){this.la=t.hs,this.Pa=j();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return ke.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Sf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class bf{constructor(t){this.key=t,this.wa=!1}}class Cf{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Me(l=>za(l),gr),this.Da=new Map,this.Ca=new Set,this.va=new J(O.comparator),this.Fa=new Map,this.Ma=new js,this.xa={},this.Oa=new Map,this.Na=De.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Vf(n,t,e=!0){const r=Du(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await Pu(r,t,e,!0),s}async function Df(n,t){const e=Du(n);await Pu(e,t,!0,!1)}async function Pu(n,t,e,r){const s=await Qd(n.localStore,Dt(t)),o=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await kf(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&yu(n.remoteStore,s),l}async function kf(n,t,e,r,s){n.Ba=(w,R,S)=>async function(N,C,q,B){let U=C.view.da(q);U.Xi&&(U=await zo(N.localStore,C.query,!1).then(({documents:T})=>C.view.da(T,U)));const z=B&&B.targetChanges.get(C.targetId),At=B&&B.targetMismatches.get(C.targetId)!=null,nt=C.view.applyChanges(U,N.isPrimaryClient,z,At);return Yo(N,C.targetId,nt.fa),nt.snapshot}(n,w,R,S);const o=await zo(n.localStore,t,!0),a=new Pf(t,o.hs),l=a.da(o.documents),h=Pn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);Yo(n,e,f.fa);const m=new Sf(t,e,a);return n.ba.set(t,m),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function Nf(n,t,e){const r=F(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!gr(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await As(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&zs(r.remoteStore,s.targetId),Ps(r,s.targetId)}).catch(wn)):(Ps(r,s.targetId),await As(r.localStore,s.targetId,!0))}async function xf(n,t){const e=F(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),zs(e.remoteStore,r.targetId))}async function Of(n,t,e){const r=qf(n);try{const s=await function(a,l){const h=F(a),f=ot.now(),m=l.reduce((S,D)=>S.add(D.key),j());let w,R;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=jt(),N=j();return h.os.getEntries(S,m).next(C=>{D=C,D.forEach((q,B)=>{B.isValidDocument()||(N=N.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,D)).next(C=>{w=C;const q=[];for(const B of l){const U=td(B,w.get(B.key).overlayedDocument);U!=null&&q.push(new ge(B.key,U,Ma(U.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,q,l)}).next(C=>{R=C;const q=C.applyToLocalDocumentSet(w,N);return h.documentOverlayCache.saveOverlays(S,C.batchId,q)})}).then(()=>({batchId:R.batchId,changes:Ga(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let f=a.xa[a.currentUser.toKey()];f||(f=new J(G)),f=f.insert(l,h),a.xa[a.currentUser.toKey()]=f}(r,s.batchId,e),await bn(r,s.changes),await wr(r.remoteStore)}catch(s){const o=Qs(s,"Failed to persist write");e.reject(o)}}async function Su(n,t){const e=F(n);try{const r=await Kd(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Fa.get(o);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?Q(a.wa):s.removedDocuments.size>0&&(Q(a.wa),a.wa=!1))}),await bn(e,r,t)}catch(r){await wn(r)}}function Xo(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach((m,w)=>{for(const R of w.U_)R.j_(l)&&(f=!0)}),f&&Xs(h)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Mf(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let a=new J(O.comparator);a=a.insert(o,yt.newNoDocument(o,L.min()));const l=j().add(o),h=new Tr(L.min(),new Map,new J(G),a,l);await Su(r,h),r.va=r.va.remove(o),r.Fa.delete(t),Ys(r)}else await As(r.localStore,t,!1).then(()=>Ps(r,t,e)).catch(wn)}async function Lf(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Hd(e.localStore,t);Cu(e,r,null),bu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await bn(e,s)}catch(s){await wn(s)}}async function Ff(n,t,e){const r=F(n);try{const s=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next(w=>(Q(w!==null),m=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);Cu(r,t,e),bu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await bn(r,s)}catch(s){await wn(s)}}function bu(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Cu(n,t,e){const r=F(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function Ps(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Vu(n,r)})}function Vu(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(zs(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Ys(n))}function Yo(n,t,e){for(const r of e)r instanceof Au?(n.Ma.addReference(r.key,t),Uf(n,r)):r instanceof Ru?(k("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Vu(n,r.key)):M()}function Uf(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(k("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Ys(n))}function Ys(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new O(Y.fromString(t)),r=n.Na.next();n.Fa.set(r,new bf(e)),n.va=n.va.insert(e,r),yu(n.remoteStore,new Gt(Dt($a(e.path)),r,"TargetPurposeLimboResolution",ks.oe))}}async function bn(n,t,e){const r=F(n),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,h)=>{a.push(r.Ba(h,t,e).then(f=>{if((f||e)&&r.isPrimaryClient){const m=f&&!f.fromCache;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(f){s.push(f);const m=$s.Ki(h.targetId,f);o.push(m)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>P.forEach(f,R=>P.forEach(R.qi,S=>m.persistence.referenceDelegate.addReference(w,R.targetId,S)).next(()=>P.forEach(R.Qi,S=>m.persistence.referenceDelegate.removeReference(w,R.targetId,S)))))}catch(w){if(!An(w))throw w;k("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const S=m.ns.get(R),D=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(D);m.ns=m.ns.insert(R,N)}}}(r.localStore,o))}async function Bf(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const r=await pu(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(h=>{h.reject(new x(b.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bn(e,r.us)}}function jf(n,t){const e=F(n),r=e.Fa.get(t);if(r&&r.wa)return j().add(r.key);{let s=j();const o=e.Da.get(t);if(!o)return s;for(const a of o){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function Du(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Su.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Mf.bind(null,t),t.Sa.h_=wf.bind(null,t.eventManager),t.Sa.ka=Af.bind(null,t.eventManager),t}function qf(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ff.bind(null,t),t}class Jo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=vr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return zd(this.persistence,new qd,t.initialUser,this.serializer)}createPersistence(t){return new Ud(qs.Hr,this.serializer)}createSharedClientState(t){return new Yd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $f{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bf.bind(null,this.syncEngine),await yf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Tf}()}createDatastore(t){const e=vr(t.databaseInfo.databaseId),r=function(o){return new ef(o)}(t.databaseInfo);return function(o,a,l,h){return new sf(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new af(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Xo(this.syncEngine,e,0),function(){return Ko.D()?new Ko:new Jd}())}createSyncEngine(t,e){return function(s,o,a,l,h,f,m){const w=new Cf(s,o,a,l,h,f);return m&&(w.La=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=F(r);k("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Sn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=Na.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{k("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(k("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Qs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function is(n,t){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Zo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Gf(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Go(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Go(t.remoteStore,s)),n._onlineComponents=t}function Kf(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Gf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await is(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Kf(e))throw e;Se("Error using user provided cache. Falling back to memory cache: "+e),await is(n,new Jo)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await is(n,new Jo);return n._offlineComponents}async function ku(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Zo(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Zo(n,new $f))),n._onlineComponents}function Wf(n){return ku(n).then(t=>t.syncEngine)}async function Qf(n){const t=await ku(n),e=t.eventManager;return e.onListen=Vf.bind(null,t.syncEngine),e.onUnlisten=Nf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Df.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=xf.bind(null,t.syncEngine),e}function Xf(n,t,e={}){const r=new Yt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,f){const m=new zf({next:R=>{a.enqueueAndForget(()=>If(o,w)),R.fromCache&&h.source==="server"?f.reject(new x(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new Rf(l,m,{includeMetadataChanges:!0,ra:!0});return vf(o,w)}(await Qf(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n,t,e){if(!e)throw new x(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Yf(n,t,e,r){if(t===!0&&r===!0)throw new x(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ea(n){if(!O.isDocumentKey(n))throw new x(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function na(n){if(O.isDocumentKey(n))throw new x(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Js(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function In(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Js(n);throw new x(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ar{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ra({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ra(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ch;switch(r.type){case"firstParty":return new fh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ta.get(e);r&&(k("ComponentProvider","Removing Datastore"),ta.delete(e),r.terminate())}(this),Promise.resolve()}}function Jf(n,t,e,r={}){var s;const o=(n=In(n,Ar))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Se("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=_t.MOCK_USER;else{l=pa(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new x(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(f)}n._authCredentials=new lh(new ka(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Rr(this.firestore,t,this._query)}}class St{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}}class Jt extends Rr{constructor(t,e,r){super(t,e,$a(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new O(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function qm(n,t,...e){if(n=Nt(n),xu("collection","path",t),n instanceof Ar){const r=Y.fromString(t,...e);return na(r),new Jt(n,null,r)}{if(!(n instanceof St||n instanceof Jt))throw new x(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return na(r),new Jt(n.firestore,null,r)}}function $m(n,t,...e){if(n=Nt(n),arguments.length===1&&(t=Na.newId()),xu("doc","path",t),n instanceof Ar){const r=Y.fromString(t,...e);return ea(r),new St(n,null,new O(r))}{if(!(n instanceof St||n instanceof Jt))throw new x(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return ea(r),new St(n.firestore,n instanceof Jt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new gu(this,"async_queue_retry"),this.hu=()=>{const e=ss();e&&k("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=ss();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=ss();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Yt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!An(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Ws.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Zs extends Ar{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Zf}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mu(this),this._firestoreClient.terminate()}}function tp(n,t){const e=typeof n=="object"?n:Ia(),r=typeof n=="string"?n:t||"(default)",s=Ea(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=da("firestore");o&&Jf(s,...o)}return s}function Ou(n){return n._firestoreClient||Mu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Mu(n){var t,e,r;const s=n._freezeSettings(),o=function(l,h,f,m){return new Ph(l,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Nu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Hf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(Et.fromBase64String(t))}catch(e){throw new x(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ne(Et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=/^__.*__$/;class np{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Rn(t,this.data,e,this.fieldTransforms)}}function Fu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class ni{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ni(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return fr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Fu(this.fu)&&ep.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class rp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||vr(t)}Fu(t,e,r,s=!1){return new ni({fu:t,methodName:e,vu:r,path:lt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sp(n){const t=n._freezeSettings(),e=vr(n._databaseId);return new rp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ip(n,t,e,r,s,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);qu("Data must be an object, but it was:",a,r);const l=Bu(r,a);let h,f;if(o.merge)h=new Ct(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const w of o.mergeFields){const R=op(t,w,e);if(!a.contains(R))throw new x(b.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);up(m,R)||m.push(R)}h=new Ct(m),f=a.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,f=a.fieldTransforms;return new np(new Pt(l),h,f)}function Uu(n,t){if(ju(n=Nt(n)))return qu("Unsupported field value:",t,n),Bu(n,t);if(n instanceof Lu)return function(r,s){if(!Fu(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Uu(l,s.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:hr(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hr(s.serializer,o)}}if(r instanceof ei)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ne)return{bytesValue:au(s.serializer,r._byteString)};if(r instanceof St){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Bs(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Js(r)}`)}(n,t)}function Bu(n,t){const e={};return xa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Oe(n,(r,s)=>{const o=Uu(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ju(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof ei||n instanceof Ne||n instanceof St||n instanceof Lu)}function qu(n,t,e){if(!ju(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Js(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function op(n,t,e){if((t=Nt(t))instanceof ti)return t._internalPath;if(typeof t=="string")return $u(n,t);throw fr("Field path arguments must be of type string or ",n,!1,void 0,e)}const ap=new RegExp("[~\\*/\\[\\]]");function $u(n,t,e){if(t.search(ap)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ti(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function fr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(b.INVALID_ARGUMENT,l+n+h)}function up(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Hu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cp extends zu{data(){return super.data()}}function Hu(n,t){return typeof t=="string"?$u(n,t):t instanceof ti?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{convertValue(t,e="none"){switch(fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(de(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Oe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new ei(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=xs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=te(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);Q(fu(r));const s=new yn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fp extends zu{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Hu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class rr extends fp{data(t={}){return super.data(t)}}class pp{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Xn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new rr(this._firestore,this._userDataWriter,r.key,r,new Xn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new rr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new rr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:mp(l.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function mp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class gp extends hp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new St(this.firestore,null,e)}}function zm(n){n=In(n,Rr);const t=In(n.firestore,Zs),e=Ou(t),r=new gp(t);return lp(n._query),Xf(e,n._query).then(s=>new pp(t,r,n,s))}function Hm(n,t,e){n=In(n,St);const r=In(n.firestore,Zs),s=dp(n.converter,t,e);return _p(r,[ip(sp(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ut.none())])}function _p(n,t){return function(r,s){const o=new Yt;return r.asyncQueue.enqueueAndForget(async()=>Of(await Wf(r),s,o)),o.promise}(Ou(n),t)}(function(t,e=!0){(function(s){xe=s})(Ta),pn(new Pe("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Zs(new hh(r.getProvider("auth-internal")),new mh(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Xt(Ao,"4.6.3",t),Xt(Ao,"4.6.3","esm2017")})();var yp="firebase",Ep="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(yp,Ep,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="firebasestorage.googleapis.com",Gu="storageBucket",Tp=2*60*1e3,vp=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends me{constructor(t,e,r=0){super(os(t),`Firebase Storage: ${e} (${os(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return os(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tt||(tt={}));function os(n){return"storage/"+n}function ri(){const n="An unknown error occurred, please check the error payload for server response.";return new et(tt.UNKNOWN,n)}function Ip(n){return new et(tt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function wp(n){return new et(tt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ap(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(tt.UNAUTHENTICATED,n)}function Rp(){return new et(tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pp(n){return new et(tt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Sp(){return new et(tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bp(){return new et(tt.CANCELED,"User canceled the upload/download.")}function Cp(n){return new et(tt.INVALID_URL,"Invalid URL '"+n+"'.")}function Vp(n){return new et(tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Dp(){return new et(tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gu+"' property when initializing the app?")}function kp(){return new et(tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Np(){return new et(tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xp(n){return new et(tt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ss(n){return new et(tt.INVALID_ARGUMENT,n)}function Wu(){return new et(tt.APP_DELETED,"The Firebase app was deleted.")}function Op(n){return new et(tt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fn(n,t){return new et(tt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function sn(n){throw new et(tt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=wt.makeFromUrl(t,e)}catch{return new wt(t,"")}if(r.path==="")return r;throw Vp(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function f(z){z.path_=decodeURIComponent(z.path)}const m="v[A-Za-z0-9_]+",w=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",S=new RegExp(`^https?://${w}/${m}/b/${s}/o${R}`,"i"),D={bucket:1,path:3},N=e===Ku?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",q=new RegExp(`^https?://${N}/${s}/${C}`,"i"),U=[{regex:l,indices:h,postModify:o},{regex:S,indices:D,postModify:f},{regex:q,indices:{bucket:1,path:2},postModify:f}];for(let z=0;z<U.length;z++){const At=U[z],nt=At.regex.exec(t);if(nt){const T=nt[At.indices.bucket];let p=nt[At.indices.path];p||(p=""),r=new wt(T,p),At.postModify(r);break}}if(r==null)throw Cp(t);return r}}class Mp{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n,t,e){let r=1,s=null,o=null,a=!1,l=0;function h(){return l===2}let f=!1;function m(...C){f||(f=!0,t.apply(null,C))}function w(C){s=setTimeout(()=>{s=null,n(S,h())},C)}function R(){o&&clearTimeout(o)}function S(C,...q){if(f){R();return}if(C){R(),m.call(null,C,...q);return}if(h()||a){R(),m.call(null,C,...q);return}r<64&&(r*=2);let U;l===1?(l=2,U=0):U=(r+Math.random())*1e3,w(U)}let D=!1;function N(C){D||(D=!0,R(),!f&&(s!==null?(C||(l=2),clearTimeout(s),w(0)):C||(l=1)))}return w(0),o=setTimeout(()=>{a=!0,N(!0)},e),N}function Fp(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n){return n!==void 0}function Bp(n){return typeof n=="object"&&!Array.isArray(n)}function si(n){return typeof n=="string"||n instanceof String}function sa(n){return ii()&&n instanceof Blob}function ii(){return typeof Blob<"u"}function bs(n,t,e,r){if(r<t)throw Ss(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Ss(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function Qu(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ce||(ce={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t,e,r,s,o,a,l,h,f,m,w,R=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=w,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,D)=>{this.resolve_=S,this.reject_=D,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new Yn(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const h=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===ce.NO_ERROR,h=o.getStatus();if(!l||jp(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===ce.ABORT;r(!1,new Yn(!1,null,m));return}const f=this.successCodes_.indexOf(h)!==-1;r(!0,new Yn(f,o))})},e=(r,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());Up(h)?o(h):o()}catch(h){a(h)}else if(l!==null){const h=ri();h.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,h)):a(h)}else if(s.canceled){const h=this.appDelete_?Wu():bp();a(h)}else{const h=Sp();a(h)}};this.canceled_?e(!1,new Yn(!1,null,!0)):this.backoffId_=Lp(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Fp(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yn{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function $p(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function zp(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Hp(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Kp(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Gp(n,t,e,r,s,o,a=!0){const l=Qu(n.urlParams),h=n.url+l,f=Object.assign({},n.headers);return Hp(f,t),$p(f,e),zp(f,o),Kp(f,r),new qp(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qp(...n){const t=Wp();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(ii())return new Blob(n);throw new et(tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Xp(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(n){if(typeof atob>"u")throw xp("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class as{constructor(t,e){this.data=t,this.contentType=e||null}}function Jp(n,t){switch(n){case Vt.RAW:return new as(Xu(t));case Vt.BASE64:case Vt.BASE64URL:return new as(Yu(n,t));case Vt.DATA_URL:return new as(tm(t),em(t))}throw ri()}function Xu(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,a=n.charCodeAt(++e);r=65536|(o&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function Zp(n){let t;try{t=decodeURIComponent(n)}catch{throw fn(Vt.DATA_URL,"Malformed data URL.")}return Xu(t)}function Yu(n,t){switch(n){case Vt.BASE64:{const s=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(s||o)throw fn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Vt.BASE64URL:{const s=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(s||o)throw fn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=Yp(t)}catch(s){throw s.message.includes("polyfill")?s:fn(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}class Ju{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw fn(Vt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=nm(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function tm(n){const t=new Ju(n);return t.base64?Yu(Vt.BASE64,t.rest):Zp(t.rest)}function em(n){return new Ju(n).contentType}function nm(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e){let r=0,s="";sa(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(sa(this.data_)){const r=this.data_,s=Xp(r,t,e);return s===null?null:new Kt(s)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new Kt(r,!0)}}static getBlob(...t){if(ii()){const e=t.map(r=>r instanceof Kt?r.data_:r);return new Kt(Qp.apply(null,e))}else{const e=t.map(a=>si(a)?Jp(Vt.RAW,a).data:a.data_);let r=0;e.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return e.forEach(a=>{for(let l=0;l<a.length;l++)s[o++]=a[l]}),new Kt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){let t;try{t=JSON.parse(n)}catch{return null}return Bp(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function sm(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function Zu(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n,t){return t}class It{constructor(t,e,r,s){this.server=t,this.local=e||t,this.writable=!!r,this.xform=s||im}}let Jn=null;function om(n){return!si(n)||n.length<2?n:Zu(n)}function tc(){if(Jn)return Jn;const n=[];n.push(new It("bucket")),n.push(new It("generation")),n.push(new It("metageneration")),n.push(new It("name","fullPath",!0));function t(o,a){return om(a)}const e=new It("name");e.xform=t,n.push(e);function r(o,a){return a!==void 0?Number(a):a}const s=new It("size");return s.xform=r,n.push(s),n.push(new It("timeCreated")),n.push(new It("updated")),n.push(new It("md5Hash",null,!0)),n.push(new It("cacheControl",null,!0)),n.push(new It("contentDisposition",null,!0)),n.push(new It("contentEncoding",null,!0)),n.push(new It("contentLanguage",null,!0)),n.push(new It("contentType",null,!0)),n.push(new It("metadata","customMetadata",!0)),Jn=n,Jn}function am(n,t){function e(){const r=n.bucket,s=n.fullPath,o=new wt(r,s);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function um(n,t,e){const r={};r.type="file";const s=e.length;for(let o=0;o<s;o++){const a=e[o];r[a.local]=a.xform(r,t[a.server])}return am(r,n),r}function ec(n,t,e){const r=oi(t);return r===null?null:um(n,r,e)}function cm(n,t,e,r){const s=oi(t);if(s===null||!si(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const m=n.bucket,w=n.fullPath,R="/b/"+a(m)+"/o/"+a(w),S=Pr(R,e,r),D=Qu({alt:"media",token:f});return S+D})[0]}function lm(n,t){const e={},r=t.length;for(let s=0;s<r;s++){const o=t[s];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="prefixes",oa="items";function hm(n,t,e){const r={prefixes:[],items:[],nextPageToken:e.nextPageToken};if(e[ia])for(const s of e[ia]){const o=s.replace(/\/$/,""),a=n._makeStorageReference(new wt(t,o));r.prefixes.push(a)}if(e[oa])for(const s of e[oa]){const o=n._makeStorageReference(new wt(t,s.name));r.items.push(o)}return r}function dm(n,t,e){const r=oi(e);return r===null?null:hm(n,t,r)}class ai{constructor(t,e,r,s){this.url=t,this.method=e,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){if(!n)throw ri()}function fm(n,t){function e(r,s){const o=ec(n,s,t);return ui(o!==null),o}return e}function pm(n,t){function e(r,s){const o=dm(n,t,s);return ui(o!==null),o}return e}function mm(n,t){function e(r,s){const o=ec(n,s,t);return ui(o!==null),cm(o,s,n.host,n._protocol)}return e}function ci(n){function t(e,r){let s;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?s=Rp():s=Ap():e.getStatus()===402?s=wp(n.bucket):e.getStatus()===403?s=Pp(n.path):s=r,s.status=e.getStatus(),s.serverResponse=r.serverResponse,s}return t}function gm(n){const t=ci(n);function e(r,s){let o=t(r,s);return r.getStatus()===404&&(o=Ip(n.path)),o.serverResponse=s.serverResponse,o}return e}function _m(n,t,e,r,s){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",e&&e.length>0&&(o.delimiter=e),r&&(o.pageToken=r),s&&(o.maxResults=s);const a=t.bucketOnlyServerUrl(),l=Pr(a,n.host,n._protocol),h="GET",f=n.maxOperationRetryTime,m=new ai(l,h,pm(n,t.bucket),f);return m.urlParams=o,m.errorHandler=ci(t),m}function ym(n,t,e){const r=t.fullServerUrl(),s=Pr(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,l=new ai(s,o,mm(n,e),a);return l.errorHandler=gm(t),l}function Em(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function Tm(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=Em(null,t)),r}function vm(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let U="";for(let z=0;z<2;z++)U=U+Math.random().toString().slice(2);return U}const h=l();a["Content-Type"]="multipart/related; boundary="+h;const f=Tm(t,r,s),m=lm(f,e),w="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,R=`\r
--`+h+"--",S=Kt.getBlob(w,r,R);if(S===null)throw kp();const D={name:f.fullPath},N=Pr(o,n.host,n._protocol),C="POST",q=n.maxUploadRetryTime,B=new ai(N,C,fm(n,e),q);return B.urlParams=D,B.headers=a,B.body=S.uploadData(),B.errorHandler=ci(t),B}class Im{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ce.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ce.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ce.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,s){if(this.sent_)throw sn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class wm extends Im{initXhr(){this.xhr_.responseType="text"}}function li(){return new wm}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this._service=t,e instanceof wt?this._location=e:this._location=wt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new pe(t,e)}get root(){const t=new wt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zu(this._location.path)}get storage(){return this._service}get parent(){const t=rm(this._location.path);if(t===null)return null;const e=new wt(this._location.bucket,t);return new pe(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Op(t)}}function Am(n,t,e){n._throwIfRoot("uploadBytes");const r=vm(n.storage,n._location,tc(),new Kt(t,!0),e);return n.storage.makeRequestWithTokens(r,li).then(s=>({metadata:s,ref:n}))}function Rm(n){const t={prefixes:[],items:[]};return nc(n,t).then(()=>t)}async function nc(n,t,e){const s=await Pm(n,{pageToken:e});t.prefixes.push(...s.prefixes),t.items.push(...s.items),s.nextPageToken!=null&&await nc(n,t,s.nextPageToken)}function Pm(n,t){t!=null&&typeof t.maxResults=="number"&&bs("options.maxResults",1,1e3,t.maxResults);const e=t||{},r=_m(n.storage,n._location,"/",e.pageToken,e.maxResults);return n.storage.makeRequestWithTokens(r,li)}function Sm(n){n._throwIfRoot("getDownloadURL");const t=ym(n.storage,n._location,tc());return n.storage.makeRequestWithTokens(t,li).then(e=>{if(e===null)throw Np();return e})}function bm(n,t){const e=sm(n._location.path,t),r=new wt(n._location.bucket,e);return new pe(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n){return/^[A-Za-z]+:\/\//.test(n)}function Vm(n,t){return new pe(n,t)}function rc(n,t){if(n instanceof hi){const e=n;if(e._bucket==null)throw Dp();const r=new pe(e,e._bucket);return t!=null?rc(r,t):r}else return t!==void 0?bm(n,t):n}function Dm(n,t){if(t&&Cm(t)){if(n instanceof hi)return Vm(n,t);throw Ss("To use ref(service, url), the first argument must be a Storage instance.")}else return rc(n,t)}function aa(n,t){const e=t==null?void 0:t[Gu];return e==null?null:wt.makeFromBucketSpec(e,n)}function km(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:pa(s,n.app.options.projectId))}class hi{constructor(t,e,r,s,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Ku,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Tp,this._maxUploadRetryTime=vp,this._requests=new Set,s!=null?this._bucket=wt.makeFromBucketSpec(s,this._host):this._bucket=aa(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,t):this._bucket=aa(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){bs("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){bs("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new pe(this,t)}_makeRequest(t,e,r,s,o=!0){if(this._deleted)return new Mp(Wu());{const a=Gp(t,this._appId,r,s,e,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const ua="@firebase/storage",ca="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="storage";function Km(n,t,e){return n=Nt(n),Am(n,t,e)}function Gm(n){return n=Nt(n),Rm(n)}function Wm(n){return n=Nt(n),Sm(n)}function Qm(n,t){return n=Nt(n),Dm(n,t)}function Nm(n=Ia(),t){n=Nt(n);const r=Ea(n,sc).getImmediate({identifier:t}),s=da("storage");return s&&xm(r,...s),r}function xm(n,t,e,r={}){km(n,t,e,r)}function Om(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new hi(e,r,s,t,Ta)}function Mm(){pn(new Pe(sc,Om,"PUBLIC").setMultipleInstances(!0)),Xt(ua,ca,""),Xt(ua,ca,"esm2017")}Mm();const Lm={apiKey:"AIzaSyAZZTNhFBecgOoLszv3q_82iYr2M5aBB3Q",authDomain:"bridge-of-hope-7f2e4.firebaseapp.com",projectId:"bridge-of-hope-7f2e4",storageBucket:"bridge-of-hope-7f2e4.appspot.com",messagingSenderId:"414317058098",appId:"1:414317058098:web:cddaa96194cf403edc042b",measurementId:"G-P637M0NXSY"},Fm=va(Lm),Xm=tp(Fm),Ym=Nm();export{Xm as a,Wm as b,qm as c,$m as d,zm as e,Ym as f,Nm as g,Gm as l,Qm as r,Hm as s,Km as u};
