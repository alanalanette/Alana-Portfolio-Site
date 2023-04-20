/*! For license information please see 4.fabeabbe.chunk.js.LICENSE.txt */
(this["webpackJsonpcryptowaves-app"]=this["webpackJsonpcryptowaves-app"]||[]).push([[4],{883:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},884:function(e,t,n){var a=n(885),o=n(933),i=n(934),r=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":r&&r in Object(e)?o(e):i(e)}},885:function(e,t,n){var a=n(932).Symbol;e.exports=a},886:function(e,t){var n=Array.isArray;e.exports=n},891:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(59))},929:function(e,t,n){var a=n(930),o=n(937),i=n(942),r=n(943);e.exports=function(e,t,n){return Array.isArray(e)||(e=[e]),r(e.map((function(e){return i(e)?function(e,t,n){var r=0,c=0;if(""===e)return e;if(!e||!i(e))throw new TypeError("First argument to react-string-replace#replaceString must be a string");var s=t;a(s)||(s=new RegExp("("+o(s)+")","gi"));for(var u=e.split(s),l=1,d=u.length;l<d;l+=2)c=u[l].length,r+=u[l-1].length,u[l]=n(u[l],l,r),r+=c;return u}(e,t,n):e})))}},930:function(e,t,n){var a=n(931),o=n(935),i=n(936),r=i&&i.isRegExp,c=r?o(r):a;e.exports=c},931:function(e,t,n){var a=n(884),o=n(883);e.exports=function(e){return o(e)&&"[object RegExp]"==a(e)}},932:function(e,t,n){var a=n(891),o="object"==typeof self&&self&&self.Object===Object&&self,i=a||o||Function("return this")();e.exports=i},933:function(e,t,n){var a=n(885),o=Object.prototype,i=o.hasOwnProperty,r=o.toString,c=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var a=!0}catch(s){}var o=r.call(e);return a&&(t?e[c]=n:delete e[c]),o}},934:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},935:function(e,t){e.exports=function(e){return function(t){return e(t)}}},936:function(e,t,n){(function(e){var a=n(891),o=t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,r=i&&i.exports===o&&a.process,c=function(){try{var e=i&&i.require&&i.require("util").types;return e||r&&r.binding&&r.binding("util")}catch(t){}}();e.exports=c}).call(this,n(215)(e))},937:function(e,t,n){var a=n(938),o=/[\\^$.*+?()[\]{}|]/g,i=RegExp(o.source);e.exports=function(e){return(e=a(e))&&i.test(e)?e.replace(o,"\\$&"):e}},938:function(e,t,n){var a=n(939);e.exports=function(e){return null==e?"":a(e)}},939:function(e,t,n){var a=n(885),o=n(940),i=n(886),r=n(941),c=a?a.prototype:void 0,s=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(r(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},940:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,o=Array(a);++n<a;)o[n]=t(e[n],n,e);return o}},941:function(e,t,n){var a=n(884),o=n(883);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==a(e)}},942:function(e,t,n){var a=n(884),o=n(886),i=n(883);e.exports=function(e){return"string"==typeof e||!o(e)&&i(e)&&"[object String]"==a(e)}},943:function(e,t,n){var a=n(944);e.exports=function(e){return(null==e?0:e.length)?a(e,1):[]}},944:function(e,t,n){var a=n(945),o=n(946);e.exports=function e(t,n,i,r,c){var s=-1,u=t.length;for(i||(i=o),c||(c=[]);++s<u;){var l=t[s];n>0&&i(l)?n>1?e(l,n-1,i,r,c):a(c,l):r||(c[c.length]=l)}return c}},945:function(e,t){e.exports=function(e,t){for(var n=-1,a=t.length,o=e.length;++n<a;)e[o+n]=t[n];return e}},946:function(e,t,n){var a=n(885),o=n(947),i=n(886),r=a?a.isConcatSpreadable:void 0;e.exports=function(e){return i(e)||o(e)||!!(r&&e&&e[r])}},947:function(e,t,n){var a=n(948),o=n(883),i=Object.prototype,r=i.hasOwnProperty,c=i.propertyIsEnumerable,s=a(function(){return arguments}())?a:function(e){return o(e)&&r.call(e,"callee")&&!c.call(e,"callee")};e.exports=s},948:function(e,t,n){var a=n(884),o=n(883);e.exports=function(e){return o(e)&&"[object Arguments]"==a(e)}},951:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(2),o=n(1),i=n.n(o),r=n(25),c=n(50),s=n.n(c),u=n(30),l=n(150),d=n(881),f=n(11),m={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},p={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},_=function(e){function t(n){return e.call(this,a.a({},t.defaultAdapter,n))||this}return a.b(t,e),Object.defineProperty(t,"strings",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return m},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!0,configurable:!0}),t.prototype.setChecked=function(e){this.adapter_.setNativeControlChecked(e),this.updateAriaChecked_(e),this.updateCheckedStyling_(e)},t.prototype.setDisabled=function(e){this.adapter_.setNativeControlDisabled(e),e?this.adapter_.addClass(m.DISABLED):this.adapter_.removeClass(m.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked_(t.checked),this.updateCheckedStyling_(t.checked)},t.prototype.updateCheckedStyling_=function(e){e?this.adapter_.addClass(m.CHECKED):this.adapter_.removeClass(m.CHECKED)},t.prototype.updateAriaChecked_=function(e){this.adapter_.setNativeControlAttr(p.ARIA_CHECKED_ATTR,""+!!e)},t}(f.a),E=Object(r.b)((function(e,t){var n,c=function(e){var t=Object(l.a)(e),n=t.renderToggle,i=t.toggleRootProps,r=t.id,c=Object(d.a)({props:e,elements:{rootEl:!0,checkboxEl:!0},foundation:function(e){var t=e.rootEl,n=e.checkboxEl;return new _({addClass:function(e){return t.addClass(e)},removeClass:function(e){return t.removeClass(e)},setNativeControlChecked:function(e){return n.setProp("checked",e)},setNativeControlDisabled:function(e){return n.setProp("disabled",e)},setNativeControlAttr:function(e,n){return t.setProp(e,n)}})}}),s=c.foundation,u=Object(a.d)(c,["foundation"]),f=u.checkboxEl;return Object(o.useEffect)((function(){f.ref&&s.updateCheckedStyling_(f.ref.checked),f.ref&&s.setDisabled(f.ref.disabled)}),[f.ref,s]),Object(o.useEffect)((function(){void 0!==e.checked&&s.updateCheckedStyling_(e.checked)}),[e.checked,s]),Object(o.useEffect)((function(){void 0!==e.disabled&&s.setDisabled(e.disabled)}),[e.disabled,s]),f.setProp("onChange",(function(t){var n;s.handleChange(t),null===(n=e.onChange)||void 0===n||n.call(e,t)}),!0),Object(a.a)({foundation:s,renderToggle:n,toggleRootProps:i,id:r},u)}(e),s=c.renderToggle,u=c.id,f=c.toggleRootProps,m=c.rootEl,p=c.checkboxEl,E=Object(r.f)(f,["mdc-switch"]),T=(e.children,e.className,e.label,e.style,e.inputRef),v=(e.foundationRef,Object(a.d)(e,["children","className","label","style","inputRef","foundationRef"]));return s(i.a.createElement(r.a,Object(a.a)({},m.props(Object(a.a)(Object(a.a)({},f),{className:E})),{ref:t}),i.a.createElement(O,null),i.a.createElement(C,null,i.a.createElement(h,null),i.a.createElement("input",Object(a.a)({},p.props(Object(a.a)(Object(a.a)({},v),{className:"mdc-switch__native-control"})),{type:"checkbox",id:u,ref:Object(r.e)(p.setRef,T),role:"switch","aria-checked":null!==(n=v.checked)&&void 0!==n?n:v["aria-checked"]}))),i.a.createElement(b,null)))})),O=i.a.memo((function(){return i.a.createElement("div",{className:"mdc-switch__track"})})),b=i.a.memo((function(){return i.a.createElement("div",{className:"mdc-switch__knob"})})),h=i.a.memo((function(){return i.a.createElement("div",{className:"mdc-switch__thumb"})})),C=Object(u.b)({unbounded:!0,surface:!1})((function(e){var t=e.className,n=Object(a.d)(e,["className"]);return i.a.createElement("div",Object(a.a)({className:s()(t,"mdc-switch__thumb-underlay")},n))}))},959:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var a={};n.r(a),n.d(a,"announce",(function(){return T}));var o=n(2),i=n(1),r=n.n(i),c=n(11),s={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},u={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},l={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},d=s.OPENING,f=s.OPEN,m=s.CLOSING,p=u.REASON_ACTION,_=u.REASON_DISMISS,E=function(e){function t(n){var a=e.call(this,o.a({},t.defaultAdapter,n))||this;return a.isOpen_=!1,a.animationFrame_=0,a.animationTimer_=0,a.autoDismissTimer_=0,a.autoDismissTimeoutMs_=l.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,a.closeOnEscape_=!0,a}return o.b(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(d),this.adapter_.removeClass(f),this.adapter_.removeClass(m)},t.prototype.open=function(){var e=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(m),this.adapter_.addClass(d),this.adapter_.announce(),this.runNextAnimationFrame_((function(){e.adapter_.addClass(f),e.animationTimer_=setTimeout((function(){var t=e.getTimeoutMs();e.handleAnimationTimerEnd_(),e.adapter_.notifyOpened(),t!==l.INDETERMINATE&&(e.autoDismissTimer_=setTimeout((function(){e.close(_)}),t))}),l.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},t.prototype.close=function(e){var t=this;void 0===e&&(e=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(e),this.adapter_.addClass(s.CLOSING),this.adapter_.removeClass(s.OPEN),this.adapter_.removeClass(s.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){t.handleAnimationTimerEnd_(),t.adapter_.notifyClosed(e)}),l.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.isOpen_},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},t.prototype.setTimeoutMs=function(e){var t=l.MIN_AUTO_DISMISS_TIMEOUT_MS,n=l.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(e===l.INDETERMINATE||e<=n&&e>=t))throw new Error("\n        timeoutMs must be an integer in the range "+t+"\u2013"+n+"\n        (or "+l.INDETERMINATE+" to disable), but got '"+e+"'");this.autoDismissTimeoutMs_=e},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},t.prototype.setCloseOnEscape=function(e){this.closeOnEscape_=e},t.prototype.handleKeyDown=function(e){("Escape"===e.key||27===e.keyCode)&&this.getCloseOnEscape()&&this.close(_)},t.prototype.handleActionButtonClick=function(e){this.close(p)},t.prototype.handleActionIconClick=function(e){this.close(_)},t.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},t.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(s.OPENING),this.adapter_.removeClass(s.CLOSING)},t.prototype.runNextAnimationFrame_=function(e){var t=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){t.animationFrame_=0,clearTimeout(t.animationTimer_),t.animationTimer_=setTimeout(e,0)}))},t}(c.a),O=n(36),b=n(25),h=l.ARIA_LIVE_DELAY_MS,C=u.ARIA_LIVE_LABEL_TEXT_ATTR;function T(e,t){void 0===t&&(t=e);var n=e.getAttribute("aria-live"),a=t.textContent.trim();a&&n&&(e.setAttribute("aria-live","off"),t.textContent="",t.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',t.setAttribute(C,a),setTimeout((function(){e.setAttribute("aria-live",n),t.removeAttribute(C),t.textContent=a}),h))}var v=n(877),A=n(859),y=n(881);E.prototype.handleActionButtonClick=function(e,t){this.close(t)};var g=n(76),S=n(9),N=Object(b.b)((function(e,t){var n=function(e){var t=Object(y.a)({props:e,elements:{rootEl:!0,surfaceEl:!0,labelEl:!0},foundation:function(e){var t=e.rootEl,n=e.labelEl,o=e.emit;return new E({addClass:function(e){return t.addClass(e)},removeClass:function(e){return t.removeClass(e)},announce:function(){return n.ref&&a.announce(n.ref)},notifyOpening:function(){return o("onOpen",{})},notifyOpened:function(){Object(v.a)(),o("onOpened",{})},notifyClosing:function(e){o("onClose",e?{reason:e}:{})},notifyClosed:function(e){return o("onClosed",e?{reason:e}:{})}})}}),n=t.foundation,r=Object(o.d)(t,["foundation"]),c=r.rootEl,s=r.surfaceEl;return c.setProp("onKeyDown",(function(t){e.onKeyDown&&e.onKeyDown(t),n.handleKeyDown(t)}),!0),s.setProp("onClick",(function(t){if(t.target instanceof Element){var a=t.target,o=Object(A.a)(a,".mdc-button");o&&(a=o),e.dismissesOnAction&&a.classList.contains("mdc-snackbar__action")?n.handleActionButtonClick(t,a.dataset.mdcSnackbarAction):a.classList.contains("mdc-snackbar__dismiss")&&n.handleActionIconClick(t)}}),!0),Object(i.useEffect)((function(){e.open?n.open():n.close()}),[e.open,n]),Object(i.useEffect)((function(){e.timeout&&(-1===e.timeout?n.setTimeoutMs(e.timeout):n.autoDismissTimeoutMs_=e.timeout)}),[e.timeout,n]),Object(o.a)({foundation:n},r)}(e),c=n.rootEl,s=n.surfaceEl,u=n.labelEl,l=(e.open,e.message),d=(e.timeout,e.dismissIcon),f=(e.onOpen,e.onClose,e.children),m=e.action,p=e.icon,_=e.leading,O=e.stacked,h=(e.dismissesOnAction,e.foundationRef,Object(o.d)(e,["open","message","timeout","dismissIcon","onOpen","onClose","children","action","icon","leading","stacked","dismissesOnAction","foundationRef"])),C=Object(b.f)(e,["mdc-snackbar",{"mdc-snackbar--leading":_,"mdc-snackbar--stacked":O}]),T=Array.isArray(m)?m:m?[m]:[];return r.a.createElement(b.a,Object(o.a)({},h,{ref:t,element:c,"aria-live":"assertive","aria-atomic":!0,"aria-hidden":!0,className:C}),r.a.createElement("div",Object(o.a)({},s.props({}),{className:"mdc-snackbar__surface"}),!!p&&r.a.createElement(S.a,{style:{color:"rgba(255, 255, 255, 0.87)",fill:"currentColor",marginLeft:"1rem"},icon:p}),r.a.createElement(I,null,l,r.a.createElement("div",{style:{display:"none"},ref:u.setRef})),r.a.createElement(k,null,T.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e)})),d&&r.a.createElement(j,{icon:!0===d?"close":d})),f))}));function I(e){return r.a.createElement("div",Object(o.a)({role:"status","aria-live":"polite",className:"mdc-snackbar__label"},e))}function k(e){return r.a.createElement("div",Object(o.a)({className:"mdc-snackbar__actions"},e))}Object(b.b)((function(e,t){var n=Object(b.f)(e,["mdc-snackbar__action"]),a=e.action,i=void 0===a?E.strings.REASON_ACTION:a,c=Object(o.d)(e,["action"]);return r.a.createElement(O.a,Object(o.a)({},c,{className:n,ref:t,"data-mdc-snackbar-action":i}))}));function j(e){return r.a.createElement(g.a,Object(o.a)({},e,{className:"mdc-snackbar__dismiss"}))}},962:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(2),o=n(1),i=n.n(o),r=n(11),c={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},s={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},u={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},l=function(e){function t(n){var o=e.call(this,a.a({},t.defaultAdapter,n))||this;return o.isOpen_=!1,o.animationFrame_=0,o.animationTimer_=0,o.layoutFrame_=0,o.escapeKeyAction_=s.CLOSE_ACTION,o.scrimClickAction_=s.CLOSE_ACTION,o.autoStackButtons_=!0,o.areButtonsStacked_=!1,o}return a.b(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter_.hasClass(c.STACKED)&&this.setAutoStackButtons(!1)},t.prototype.destroy=function(){this.isOpen_&&this.close(s.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},t.prototype.open=function(){var e=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(c.OPENING),this.runNextAnimationFrame_((function(){e.adapter_.addClass(c.OPEN),e.adapter_.addBodyClass(c.SCROLL_LOCK),e.layout(),e.animationTimer_=setTimeout((function(){e.handleAnimationTimerEnd_(),e.adapter_.trapFocus(e.adapter_.getInitialFocusEl()),e.adapter_.notifyOpened()}),u.DIALOG_ANIMATION_OPEN_TIME_MS)}))},t.prototype.close=function(e){var t=this;void 0===e&&(e=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(e),this.adapter_.addClass(c.CLOSING),this.adapter_.removeClass(c.OPEN),this.adapter_.removeBodyClass(c.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){t.adapter_.releaseFocus(),t.handleAnimationTimerEnd_(),t.adapter_.notifyClosed(e)}),u.DIALOG_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.isOpen_},t.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},t.prototype.setEscapeKeyAction=function(e){this.escapeKeyAction_=e},t.prototype.getScrimClickAction=function(){return this.scrimClickAction_},t.prototype.setScrimClickAction=function(e){this.scrimClickAction_=e},t.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},t.prototype.setAutoStackButtons=function(e){this.autoStackButtons_=e},t.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},t.prototype.handleClick=function(e){if(this.adapter_.eventTargetMatches(e.target,s.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var t=this.adapter_.getActionFromEvent(e);t&&this.close(t)}},t.prototype.handleKeydown=function(e){var t="Enter"===e.key||13===e.keyCode;if(t&&!this.adapter_.getActionFromEvent(e)){var n=!this.adapter_.eventTargetMatches(e.target,s.SUPPRESS_DEFAULT_PRESS_SELECTOR);t&&n&&this.adapter_.clickDefaultButton()}},t.prototype.handleDocumentKeydown=function(e){("Escape"===e.key||27===e.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},t.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},t.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(c.OPENING),this.adapter_.removeClass(c.CLOSING)},t.prototype.runNextAnimationFrame_=function(e){var t=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){t.animationFrame_=0,clearTimeout(t.animationTimer_),t.animationTimer_=setTimeout(e,0)}))},t.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(c.STACKED);var e=this.adapter_.areButtonsStacked();e&&this.adapter_.addClass(c.STACKED),e!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=e)},t.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(c.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(c.SCROLLABLE)},t}(r.a),d=n(25),f=n(875),m=n(36),p=n(881),_=n(859),E=n(877),O=n(876),b=function(e){var t=Object(o.useRef)(),n=Object(o.useRef)(null),i=Object(o.useRef)(null),r=Object(o.useRef)(null),c=Object(p.a)({props:e,elements:{rootEl:!0},foundation:function(e){var a=e.rootEl,o=e.emit;e.getProps;return new l({addClass:function(e){return a.addClass(e)},removeClass:function(e){return a.removeClass(e)},hasClass:function(e){return a.hasClass(e)},addBodyClass:function(e){return document.body&&document.body.classList.add(e)},removeBodyClass:function(e){return document.body&&document.body.classList.remove(e)},eventTargetMatches:function(e,t){return Object(_.b)(e,t)},trapFocus:function(){var e;try{null===(e=t.current)||void 0===e||e.trapFocus()}catch(n){}},releaseFocus:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.releaseFocus()},isContentScrollable:function(){return!!r.current&&(e=r.current).scrollHeight>e.offsetHeight;var e},areButtonsStacked:function(){return function(e){var t=new Set;return[].forEach.call(e,(function(e){return t.add(e.offsetTop)})),t.size>1}(i.current)},getActionFromEvent:function(e){var t=Object(_.a)(e.target,"["+l.strings.ACTION_ATTRIBUTE+"]");return(null===t||void 0===t?void 0:t.getAttribute(l.strings.ACTION_ATTRIBUTE))||null},clickDefaultButton:function(){var e;null===(e=n.current)||void 0===e||e.click()},reverseButtons:function(){var e,t;null===(e=i.current)||void 0===e||e.reverse(),null===(t=i.current)||void 0===t||t.forEach((function(e){return e.parentElement&&e.parentElement.appendChild(e)}))},notifyOpening:function(){return o("onOpen",{})},notifyOpened:function(){o("onOpened",{}),Object(E.a)()},notifyClosing:function(e){return o("onClose",e?{action:e}:{})},notifyClosed:function(e){return o("onClosed",e?{action:e}:{})},getInitialFocusEl:function(){return document.querySelector("["+l.strings.INITIAL_FOCUS_ATTRIBUTE+"]")}})}}),s=c.foundation,u=Object(a.d)(c,["foundation"]),d=u.rootEl,f=Object(o.useMemo)((function(){var t=s.handleDocumentKeydown.bind(s);return function(n){if(27!==n.which||!e.preventOutsideDismiss)return t(n)}}),[s,e.preventOutsideDismiss]);Object(o.useEffect)((function(){var e;n.current=d.ref&&d.ref.querySelector("["+l.strings.BUTTON_DEFAULT_ATTRIBUTE+"]")||null,i.current=d.ref&&[].slice.call(d.ref.querySelectorAll(l.strings.BUTTON_SELECTOR)),r.current=(null===(e=d.ref)||void 0===e?void 0:e.querySelector(l.strings.CONTENT_SELECTOR))||null}),[d.ref]),Object(o.useEffect)((function(){var e=d.ref&&d.ref.querySelector(l.strings.SURFACE_SELECTOR);e&&(t.current=Object(O.a)(e,{initialFocusEl:n.current||void 0}))}),[d.ref]),Object(o.useEffect)((function(){e.open?s.isOpen()||(document.addEventListener("keydown",f),s.open()):s.isOpen()&&(document.removeEventListener("keydown",f),s.close())}),[e.open,s,f]);return d.setProp("onClick",(function(t){var n;return null===(n=e.onClick)||void 0===n||n.call(e,t),s.handleClick(t)}),!0),d.setProp("onKeyDown",(function(t){var n;return null===(n=e.onKeyDown)||void 0===n||n.call(e,t),s.handleKeydown(t)}),!0),Object(a.a)({foundation:s},u)},h=Object(d.b)((function(e,t){var n=b(e).rootEl,o=Object(d.f)(e,["mdc-dialog"]),r=e.children,c=(e.open,e.onOpen,e.onOpened,e.onClose,e.onClosed,e.preventOutsideDismiss),s=(e.foundationRef,e.renderToPortal),u=e["aria-labelledby"],l=e["aria-describedby"],m=Object(a.d)(e,["children","open","onOpen","onOpened","onClose","onClosed","preventOutsideDismiss","foundationRef","renderToPortal","aria-labelledby","aria-describedby"]);return i.a.createElement(f.a,{renderTo:s},i.a.createElement(d.a,Object(a.a)({},m,{element:n,className:o,ref:t}),i.a.createElement("div",{className:"mdc-dialog__container"},i.a.createElement("div",{className:"mdc-dialog__surface",role:"alertdialog","aria-modal":!0,"aria-labelledby":u,"aria-describedby":l},r)),i.a.createElement(C,{disableInteraction:c})))})),C=(Object(d.b)((function(e,t){var n=e.title,o=e.header,r=e.body,c=e.footer,s=e.acceptLabel,u=void 0===s?"Accept":s,l=e.cancelLabel,d=void 0===l?"Cancel":l,f=e.children,m=e.open,p=Object(a.d)(e,["title","header","body","footer","acceptLabel","cancelLabel","children","open"]);return i.a.createElement(h,Object(a.a)({open:m},p,{ref:t}),(!!n||!!o)&&i.a.createElement(T,null,!!n&&n,!!o&&o),(!!r||f)&&i.a.createElement(v,null,r,f),(!!d||!!u||!!c)&&i.a.createElement(A,null,!!c&&c,!!d&&i.a.createElement(y,{action:"close"},d),!!u&&i.a.createElement(y,{action:"accept",isDefaultAction:!0},u)))})),i.a.memo((function(e){var t=e.disableInteraction?{pointerEvents:"none"}:{};return i.a.createElement("div",{className:"mdc-dialog__scrim",style:t})}))),T=Object(d.b)((function(e,t){var n=Object(d.f)(e,["mdc-dialog__title"]);return i.a.createElement(d.a,Object(a.a)({tag:"h2"},e,{ref:t,className:n}))})),v=Object(d.b)((function(e,t){var n=Object(d.f)(e,["mdc-dialog__content"]);return i.a.createElement(d.a,Object(a.a)({},e,{ref:t,className:n}))})),A=Object(d.b)((function(e,t){var n=Object(d.f)(e,["mdc-dialog__actions"]);return i.a.createElement(d.a,Object(a.a)({},e,{ref:t,className:n}))})),y=Object(d.b)((function(e,t){var n,o=Object(d.f)(e,["mdc-dialog__button"]),r=e.action,c=void 0===r?"":r,s=e.isDefaultAction,u=Object(a.d)(e,["action","isDefaultAction"]),f=s?((n={})[l.strings.BUTTON_DEFAULT_ATTRIBUTE]=!0,n):{};return i.a.createElement(m.a,Object(a.a)({},u,f,{ref:t,className:o,"data-mdc-dialog-action":c}))}))}}]);