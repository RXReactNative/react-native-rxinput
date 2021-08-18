!function(e){function t(t){for(var n,o,u=t[0],i=t[1],c=t[2],s=0,p=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(t);p.length;)p.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={0:0},l=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=i;l.push([57,1]),r()}({31:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),o=d(l),u=d(r(1)),i=d(r(35)),c=d(r(32)),f=d(r(27)),s=d(r(78)),p=d(r(36));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));y.call(r);var n=p.default.normalizeValue(e.value||e.defaultValue);return r.state={value:r.formatValue(e.type,n),valueSize:r.props.placeholderFontSize,maxLength:r.props.maxLength},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.blur()}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,r=t.onChange,n=t.onChangeText;if(e.value!==this.props.value){var a=this.formatValue(e.type,e.value);this.setState({value:a}),r&&r(this.formatSpace(a)),n&&n(this.formatSpace(a))}var l=e.valueSize;e.value&&e.placeholder!==e.value||(l=e.placeholderFontSize),this.setState({valueSize:l})}},{key:"formatValue",value:function(e,t){switch(e){case s.default.TypePhone:return p.default.phone(t);case s.default.TypeBankCard:return p.default.bankId(t);case s.default.TypeAmount:return p.default.amount(t);default:return t}}},{key:"filterPureNumber",value:function(e){switch(this.props.type){case"int":return(e=e.replace(/[^\d]+/,"")||"").length&&(e=parseInt(e)),e;case"float":return e=p.default.formatAmount(e);case s.default.TypePhone:case s.default.TypeCaptcha:case s.default.TypeGraphCaptcha:case"number":return e.replace(/[^\d.\s]+/,"");case s.default.TypeVIN:case s.default.TypeBankCard:case s.default.TypeIdCardNo:return e=e.replace(/[^\d|^a-zA-Z]/g,"");case s.default.TypePlateNo:case s.default.TypeEmail:default:return e}}},{key:"inputEnable",value:function(){return this.props.enable&&this.props.editable}},{key:"render",value:function(){var e=this,t=this.props,r=t.style,a=t.type,l=t.keyboardType,u=(t.placeholderFontSize,t.placeholder),f=t.secureTextEntry,d=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["style","type","keyboardType","placeholderFontSize","placeholder","secureTextEntry"]),h=this.state.maxLength;switch(a){case s.default.TypeBankCard:void 0===l&&(l="numeric"),void 0===h&&(h=23);break;case s.default.TypePhone:void 0===l&&(l="phone-pad"),void 0===h&&(h=13);break;case s.default.TypeAmount:void 0===l&&(l="numeric"),void 0===h&&(h=10);break;case s.default.TypeCaptcha:void 0===l&&(l="numeric"),void 0===h&&(h=6);break;case s.default.TypeGraphCaptcha:void 0===l&&(l="numeric"),void 0===h&&(h=4);break;case"number":case"int":case"float":void 0===l&&(l="numeric");break;case s.default.TypeEmail:void 0===l&&(l="email-address");break;case s.default.TypePlateNo:void 0===l&&(l="email-address"),void 0===h&&(h=8);break;case s.default.TypeVIN:void 0===l&&(l="email-address"),void 0===h&&(h=17);break;case s.default.TypeIdCardNo:void 0===l&&(l="email-address"),void 0===h&&(h=18)}"web"===c.default.OS&&"numeric"===l&&(l="default"),this.state.valueSize>0&&"web"===c.default.OS&&(r=[{fontSize:this.state.valueSize}].concat(r));var y=f;f||(y="password"===a);var b=this.inputEnable(),v=o.default.createElement(i.default,n({},d,{ref:function(t){e.refTextInputValue=t},style:[m.container,r],maxLength:h,keyboardType:l,editable:b,placeholder:u,value:p.default.normalizeValue(this.state.value),secureTextEntry:y,multiline:this.props.multiline,onChange:this.onChange,onChangeText:this.onChangeText,allowFontScaling:!1,onFocus:function(){e.props.onFocus&&e.props.onFocus()},onBlur:this._onBlur,onLayout:function(t){e.props.onLayout&&e.props.onLayout(t)},__source:{fileName:"/Users/srxboys/srxboys/github/RX_React_Native/react-native-rxinput/example/react-native-rxinput/src/component/TextInputValue.js",lineNumber:351}})),g=v;return"android"===c.default.OS&&(g=o.default.cloneElement(v,{underlineColorAndroid:"transparent"})),g}}]),t}(l.Component);h.propTypes=n({},i.default.propTypes,{type:f.default.oneOf(f.default.oneOf(s.default.AllTypes(),"text","number","int","float")),value:f.default.oneOfType([f.default.number,f.default.string]),enable:f.default.bool,valueSize:f.default.number}),h.defaultProps=n({},i.default.defaultProps,{multiline:!1,type:"text",enable:!0,editable:!0});var y=function(){var e=this;this.formatSpace=function(t){switch(e.props.type){case"number":case s.default.TypeVIN:case s.default.TypeEmail:case s.default.TypePlateNo:case s.default.TypeCaptcha:case s.default.TypeIdCardNo:return p.default.formatSpace(t);case s.default.TypePhone:case s.default.TypeBankCard:return p.default.retainNumbers(t);case s.default.TypeAmount:return p.default.formatAmount(t);default:return t}},this.onChange=function(t){var r=e.props,n=r.type,a=r.onChange,l=e.formatSpace(e.filterPureNumber(t.nativeEvent.text)),o=e;l!==o.props.value&&a&&a(l),l=o.formatValue(n,l);var u=e.props.maxLength;if(n===s.default.TypeAmount){var i=l.indexOf(".");i>0&&(u=i+3)}l!=o.state.value?o.setState({maxLength:u,value:l}):o.setState({maxLength:u})},this.onChangeText=function(t){var r=e.props,n=(r.type,r.onChangeText),a=e.formatSpace(e.filterPureNumber(t));a!==e.props.value&&n&&n(a)},this._onBlur=function(){var t=e.props,r=t.type,n=t.onChange;if(r&&(r===s.default.TypePlateNo||r===s.default.TypeVIN||r===s.default.TypeIdCardNo)){var a=e.state.value;a&&(a=a.toLocaleUpperCase(),n&&n(a),e.setState({value:a}))}e.props.onBlur&&e.props.onBlur()},this.focus=function(){e.props.enable&&e.refTextInputValue&&e.refTextInputValue.focus()},this.blur=function(){e.refTextInputValue&&e.refTextInputValue.blur()},this.clear=function(){e.refTextInputValue&&e.refTextInputValue.clear()},this.isFocused=function(){return e.refTextInputValue&&e.refTextInputValue.isFocused()}};t.default=h;var m=u.default.create({container:{padding:0}})},33:function(e){e.exports=JSON.parse('{"a":"App"}')},36:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(37),a={formatSpace:function(e){return e.replace(/\s+/g,"")},normalizeValue:function(e){return null==e?"":e+""},phone:function(e){return this.isString(e)?e=this.stringNumAddSpace(e,[3,4]):""},bankId:function(e){return this.isString(e)?e=this.stringNumAddSpace(e,4):""},amount:function(e){return this.isString(e)?(e+="",e=this.stringNumAddComma(e)):""},isString:function(e){return!!e&&(!("string"==typeof e&&!e.length)&&!("number"==typeof string&&!parseFloat(string)))},retainNumbers:function(e){return this.isString(e)?(e+="").replace(/[^0-9]+/g,""):""},stringNumAddSpace:function(e,t){if(!e)return"";if(!t)return e;if(e=this.retainNumbers(e),typeSpace=0,"number"==typeof t?typeSpace=1:Array.isArray(t)&&t.length&&(typeSpace=2),0===typeSpace)return e;var r="";if(1===typeSpace){var n=e.split(""),a=t;if(e.length<=a)return e;for(var l=0;l<=n.length/a;l++){if(e.length<=a){r+=e.substr(0,e.length),e="";break}r+=e.substr(0,a),(e=e.substr(a,e.length)+"").length&&(r+=" ")}r+=e}else for(var o=0;e.length;){if(t.length<=o){r=r+(e.substr(0,e.length)+"")+"",e="";break}var u=t[o];if(u>=e.length){r=r+(e.substr(0,e.length)+"")+"",e="";break}r+=e.substring(0,u),(e=e.substr(u,e.length)).length&&(r+=" "),o++}return r+""},formatAmount:function(e){return this.isString(e)?(e+="",e=(0,n.RXNumberStringCleanUp)(e,!0).numStr):""},stringNumAddComma:function(e){return(0,n.RXNumberStringComma)(e,!0)}};t.default=a},37:function(e,t){function r(){return{numStr:"",local:0}}function n(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={numStr:"",local:0};if(""===e)return r.numStr="",r.local=0,r;if("."===e)return r.numStr=".",r.local=0,r;e=(e+"").replace(/[^\d\.]/g,"");var n=String(e).indexOf(".")+1,a=0,l=-1;if(n>0&&(a=(l=e.length-n)>2?2:l),0===e.length&&0===a)return"";var o=e;return e=(e=parseFloat(e)).toString(),a>0?e=t?o.substring(0,n+a):e.substring(0,n+a):t&&0===l&&(e+="."),r.numStr=e,r.local=a,r}function a(e){if(!e)return"0.00";if(""===e)return"0.00";if("0"===e)return"0.00";o(e)&&(e=e.toString());var t=e.indexOf(".");for(t<0&&(t=e.length,e+=".");e.length<=t+2;)e+="0";return e}function l(e){if(!e)return"0.00";if(""===e)return"0.00";if("0"===e)return"0.00";for(var t=(e=a(e)).split(".")[0].split(""),r=e.split(".")[1].split(""),n="",l=0;l<2;l++)n=n+""+r[l];return t.join("")+"."+n}function o(e){return"NaN"!==parseFloat(e).toString()}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e+.001<=t}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e>=t+.001}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(""===e)return!0;if("0"===e)return!0;if(0===e)return!0;var t=(e=a(e)).split(".")[0].split("");if(t>0)return!1;var r=e.split(".")[1].split("");return!(r>0)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if((e=RXNumberRoundDecimal(e))-1e4>=0&&c(e-1e4)){var t=e/1e4;return t+"万"}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.RXNumberObj=r,t.RXNumberStringCleanUp=n,t.RXNumberStringComma=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"";var r=e,a=n(e,t);if(!(e=a.numStr))return"";var l=a.local;if(""===e)return"";var o=e.split(".")[0].split("");o.length>12&&(o=o.splice(0,12));o=o.reverse();for(var u=l>0?e.split(".")[1]:"",i="",c=0;c<o.length;c++)i+=o[c]+((c+1)%3==0&&c+1!=o.length?",":"");var f=i.split("").reverse().join("");if(l>0)u&&(f=f+"."+u);else if(t){var s=String(r).indexOf(".");s===r.length-1&&(f+=".")}return f=e.replace(e,f)},t.RXNumberCommentDecimal=a,t.RXNumberCommentADecimal=function(e){"0"===(e=l(e)).split(".")[1].split("")[1]&&(e=e.substring(0,e.length-1));return e},t.RXNumberStringDecimal=l,t.RXNumberDecimal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e=l(""+e),parseFloat(e)},t.isNotANumber=o,t.LESS_THAN=u,t.GREATER_THAN=i,t.RXNumberMIN=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(u(e,t))return e;return t},t.RXNumberMAX=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(i(e,t))return e;return t},t.RXNumberFixTwo=function(e){if(!e)return"00";"string"==typeof e&&(e=parseInt(e));return 0==e?"00":e>9?e:"0"+e},t.RXNumberReservedDecimal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(e).toFixed(t)},t.RXNumberHaveDecimal=c,t.RXNumberTenThousand=f,t.RXNumberThousand=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(o(e=f(e=RXNumberRoundDecimal(e)))&&e-1e3>=0&&c(e-1e3)){var t=e/1e3;return t+"千"}return e},t.RXNumberToString=function(e){e&&"string"==typeof e&&(e=Number(e));if("number"==typeof e)return e.toString();return""}},38:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a="/Users/srxboys/srxboys/github/RX_React_Native/react-native-rxinput/example/react-native-rxinput/src/component/TextInputPlaceholder.js",l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),u=h(o),i=h(r(1)),c=h(r(35)),f=h(r(7)),s=h(r(81)),p=h(r(27)),d=h(r(31));function h(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));m.call(r);var n=!r._isHaveText(r.props.value);return r.state={placeholderFontSize:r.props.placeholderFontSize,placeholderShow:n,inputStyleFrame:{x:0,y:0,width:0,height:0},placeholderStyleSize:{width:0,height:0}},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.style,r=e.placeholderFontSize,n=e.value,a=this.state.placeholderFontSize;a!=r&&(a=r||16|(t?t.fontSize:0));var l=!this._isHaveText(n);this.setState({placeholderShow:l,placeholderFontSize:a})}},{key:"componentWillUnmount",value:function(){this.blur()}},{key:"getPlaceholderFrame",value:function(){console.warn("not implemented yet")}},{key:"render",value:function(){var e=this,t=this.props,r=t.placeholder,l=t.placeholderColor,o=t.multiline,i=t.numberOfLines,p=t.valueSize,h=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["placeholder","placeholderColor","multiline","numberOfLines","valueSize"]),y=this.state,m=y.placeholderFontSize,v=y.placeholderShow,g=this._getStyle(this.props.style),_=g.style,N=g.inputStyle,x=this._getStyle(this.props.placeholderStyle),T=x.style,S=x.inputStyle,E=this.getPlaceholderFrame();return p>0&&(N.fontSize=p),u.default.createElement(f.default,{style:[{justifyContent:"center"},_],__source:{fileName:a,lineNumber:249}},u.default.createElement(d.default,n({},h,{key:"cd_text_input_0",style:[{flex:1},b.input,N],ref:function(t){return e.refTextInputValue=t},placeholder:"",multiline:o,numberOfLines:i,onFocus:function(t){e._onFocus(t)},onBlur:function(){e._onBlur()},onEndEditing:function(){e._onEndEditing()},onKeyPress:function(){e._onKeyPress()},onLayout:function(t){var r=Math.ceil(t.nativeEvent.layout.x),n=Math.ceil(t.nativeEvent.layout.y),a=Math.ceil(t.nativeEvent.layout.height),l={x:r,y:n,width:Math.ceil(t.nativeEvent.layout.width),height:a};e.setState({inputStyleFrame:l})},__source:{fileName:a,lineNumber:250}})),v?u.default.createElement(s.default,{activeOpacity:1,style:[b.placeholder,E,T],key:"cd_text_input_1",pointerEvents:"box-only",onPress:function(){e._textGetFocus()},__source:{fileName:a,lineNumber:273}},u.default.createElement(c.default,{key:"cd_text_input_2",pointerEvents:"none",style:[{flex:1},b.input,N,{fontSize:m,color:l},S],defaultValue:r,editable:!1,multiline:o,numberOfLines:i,onLayout:function(t){var r=Math.ceil(t.nativeEvent.layout.height),n={width:Math.ceil(t.nativeEvent.layout.width),height:r};e.setState({placeholderStyleSize:n})},__source:{fileName:a,lineNumber:286}})):null)}}]),t}(o.Component);y.propTypes=n({},d.default.propTypes,{placeholderFontSize:p.default.number,placeholderStyle:p.default.any}),y.defaultProps=n({},d.default.defaultProps,{multiline:!1,placeholderStyle:{}});var m=function(){var e=this;this.focus=function(){e.refTextInputValue&&e.refTextInputValue.focus()},this.blur=function(){e.refTextInputValue&&e.refTextInputValue.blur()},this.clear=function(){e.refTextInputValue&&e.refTextInputValue.clear()},this.isFocused=function(){return e.refTextInputValue&&e.refTextInputValue.isFocused()},this._textGetFocus=function(){e.isFocused()||e.focus()},this._onFocus=function(t){var r=e.props.onFocus;r&&r(t)},this._onBlur=function(){var t=e.props,r=t.value,n=t.onBlur,a=!e._isHaveText(r);e.setState({placeholderShow:a}),n&&n()},this._onKeyPress=function(){var t=e.props,r=t.value,n=t.onKeyPress,a=!e._isHaveText(r);e.setState({placeholderShow:a}),n&&n()},this._onEndEditing=function(){var t=e.props,r=t.value,n=t.onEndEditing,a=!e._isHaveText(r);e.setState({placeholderShow:a}),n&&n()},this.onChange=function(t){var r=e.props.onChange,n=e._getText(t),a=!e._isHaveText(n);e.setState({placeholderShow:a}),r&&r(n)},this.onChangeText=function(t){var r=e.props.onChangeText,n=e._getText(t),a=!e._isHaveText(n);e.setState({placeholderShow:a}),r&&r(n)},this._isHaveText=function(t){var r=e.props.placeholder;if(!r)return!0;if(!t){if("number"!=typeof t)return!1;t=t.toString()}return t!==r&&!(t.length<1)},this._getText=function(e){return e},this._getStyleData=function(e,t){if(!e)return{style:{},inputStyle:{}};for(var r=["textShadowOffset","textShadowColor","textShadowRadius","fontFamily","fontSize","fontWeight","lineHeight","textAlign","color","textDecorationLine","includeFontPadding","textAlignVertical","fontVariant","letterSpacing","textDecorationColor","textDecorationStyle","textTransform","writingDirection"],n=0;n<r.length;n++){var a=r[n];if(a){var l=e[a];l&&(t[a]=l)}}var o={};for(var u in e)if(u){var i=e[u];i&&!t[u]&&(o[u]=i)}return{style:o,inputStyle:t}},this._getStyle=function(t){if(!t)return{style:{},inputStyle:{}};var r={},n={},a={style:n,inputStyle:r};if(Array.isArray(t)&&t.length&&t.length>0)for(var l=0;l<t.length;l++){var o=t[l];if(o)if("number"==typeof o)n=o;else{var u=(a=e._getStyleData(o,r)).style;for(var i in u)n[i]=u[i];var c=a.inputStyle;for(var f in c)r[f]=c[f]}}else n=(a=e._getStyleData(t,r)).style,r=a.inputStyle;return{style:n,inputStyle:r}}},b=i.default.create({input:{padding:0,margin:0},placeholder:{position:"absolute",justifyContent:"center"}});e.exports=y},39:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),l=u(a),o=u(r(60));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return l.default.createElement(o.default,{__source:{fileName:"/Users/srxboys/srxboys/github/RX_React_Native/react-native-rxinput/example/App.js",lineNumber:19}})}}]),t}(a.Component);t.default=f},57:function(e,t,r){e.exports=r(58)},58:function(e,t,r){"use strict";r.r(t);var n=r(56),a=r(33),l=r(39),o=r.n(l);n.a.registerComponent(a.a,()=>o.a),n.a.runApplication(a.a,{rootTag:document.getElementById("react-root")})},60:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="/Users/srxboys/srxboys/github/RX_React_Native/react-native-rxinput/example/app/index.js",a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),o=d(l),u=d(r(1)),i=d(r(7)),c=d(r(70)),f=d(r(82)),s=d(r(74)),p=r(80);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return o.default.createElement(f.default,{style:y.container,__source:{fileName:n,lineNumber:37}},o.default.createElement(c.default,{style:y.tip,__source:{fileName:n,lineNumber:38}},"react-native-rxinput  v"+p.version),o.default.createElement(i.default,{style:y.contentView,__source:{fileName:n,lineNumber:39}},o.default.createElement(s.default,{style:y.nomalTextInput,placeholder:"type=text",__source:{fileName:n,lineNumber:40}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:44}}),o.default.createElement(s.default,{style:[y.nomalTextInput,{textAlign:"right"}],placeholder:'type=text style="textAlign: right"',__source:{fileName:n,lineNumber:45}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:49}}),o.default.createElement(s.default,{type:"number",maxLength:20,style:y.nomalTextInput,placeholder:'type="number" 数字键盘 - 无长度限制',__source:{fileName:n,lineNumber:50}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:56}}),o.default.createElement(s.default,{type:"int",style:y.borTextInput,placeholder:'type=int "数字键盘 - 整型 - 无长度限制"',placeholderColor:"#8B8B7A",placeholderFontSize:12,__source:{fileName:n,lineNumber:57}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:64}}),o.default.createElement(s.default,{type:"float",style:y.borTextInput,placeholder:'type=float "数字键盘 - 浮点型(最多保留2位小数)" - 无长度限制',__source:{fileName:n,lineNumber:65}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:70}}),o.default.createElement(s.default,{type:"amount",style:y.borTextInput,placeholder:"type=amount 请输入金额, `默认:最多10个字符` 8个数字",__source:{fileName:n,lineNumber:71}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:76}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:77}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:78}}),o.default.createElement(s.default,{type:"phone",style:y.borTextInput,placeholder:"type=phone 请输入手机号 - 默认: `13个字符` 11数字",__source:{fileName:n,lineNumber:79}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:84}}),o.default.createElement(s.default,{type:"bankCard",style:y.borTextInput,placeholder:"type=bankCard 请输入银行卡号 - 默认: `19个字符` 16数字",__source:{fileName:n,lineNumber:85}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:90}}),o.default.createElement(s.default,{type:"idCardNo",style:y.borTextInput,placeholder:"type=idCardNo 请输入身份证号码 - 默认: 18位字符 `数字+字母`",__source:{fileName:n,lineNumber:91}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:96}}),o.default.createElement(s.default,{type:"VIN",style:y.borTextInput,placeholder:"type=VIN 请输入车架号, 字母在键盘消失后 自动大写 - 默认: 17为字符 `字母+数字`",__source:{fileName:n,lineNumber:97}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:102}}),o.default.createElement(s.default,{type:"plateNo",style:y.borTextInput,placeholder:"type=plateNo 请输入车牌号, 字母在键盘消失后 自动大写 - 默认: 8为字符 `字母+数字`",__source:{fileName:n,lineNumber:103}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:108}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:109}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:110}}),o.default.createElement(s.default,{type:"captcha",style:y.borTextInput,placeholder:"type=captcha 请输入验证码 - 默认: `仅6位数字`",__source:{fileName:n,lineNumber:111}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:116}}),o.default.createElement(s.default,{type:"graphCaptcha",style:y.borTextInput,placeholder:"type=graphCaptcha 请输入校验图形验证码 - 默认: `仅4位数字`",__source:{fileName:n,lineNumber:117}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:122}}),o.default.createElement(s.default,{type:"password",style:y.borTextInput,placeholder:"type=password 请输入密码 - 默认: 无长度限制",returnKeyType:"done",__source:{fileName:n,lineNumber:123}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:129}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:130}}),o.default.createElement(c.default,{style:y.tip,__source:{fileName:n,lineNumber:133}},"下面验证需要处理"),o.default.createElement(s.default,{type:"email",style:y.borTextInput,placeholder:"请输入email，字母需大写 `格式不对` 不应在@后.xx.xx@... 以及其他字符",returnKeyType:"done",__source:{fileName:n,lineNumber:134}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:140}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:141}}),o.default.createElement(i.default,{style:y.line,__source:{fileName:n,lineNumber:142}})))}}]),t}(l.Component);t.default=h;var y=u.default.create({container:{padding:0,marginVertical:0,marginHorizontal:40,backgroundColor:"gray"},tip:{paddingVertical:20,fontSize:24,color:"blue",lineHeight:30,textAlign:"center",backgroundColor:"orange"},contentView:{flex:1},line:{height:20,backgroundColor:"#D8BFD8"},nomalTextInput:{fontSize:14,color:"red",height:30,lineHeight:30,backgroundColor:"white"},borTextInput:{margin:5,height:30,lineHeight:30,borderWidth:1,borderColor:"#9400D3",paddingLeft:5,paddingRight:5,borderRadius:3,backgroundColor:"white"}})},74:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.TextFormatUtil=t.RXNumberUtil=t.TextInputValue=t.TextInputPlaceholder=t.RXAmountInput=t.RXTextInput=void 0;var n=c(r(75)),a=c(r(79)),l=c(r(38)),o=c(r(31)),u=c(r(37)),i=c(r(36));function c(e){return e&&e.__esModule?e:{default:e}}t.RXTextInput=n.default,t.RXAmountInput=a.default,t.TextInputPlaceholder=l.default,t.TextInputValue=o.default,t.RXNumberUtil=u.default,t.TextFormatUtil=i.default,t.default=n.default},75:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(31),l=(n=a)&&n.__esModule?n:{default:n};t.default=l.default},78:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={TypeEmpty:"empty",TypePhone:"phone",TypeAmount:"amount",TypePlateNo:"plateNo",TypeCaptcha:"captcha",TypeBankCard:"bankCard",TypeVIN:"VIN",TypeIdCardNo:"idCardNo",TypeEmail:"email",TypeGraphCaptcha:"graphCaptcha",AllTypes:function(){return[this.TypeVIN,this.TypeEmail,this.TypeEmpty,this.TypePhone,this.TypeAmount,this.TypePlateNo,this.TypeCaptcha,this.TypeIdCardNo,this.TypeBankCard,this.TypeGraphCaptcha]}}},79:function(e,t,r){"use strict";var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(38),u=(n=o)&&n.__esModule?n:{default:n};var i=function(e){function t(e,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"getPlaceholderFrame",value:function(){var e=this.props.clearButtonMode,t=this.state,r=t.placeholderShow,n=t.inputStyleFrame,a=t.placeholderStyleSize,l=n.height,o=n.width;o<=0?o=0:(o-=2,r&&e&&"never"!==e&&(o-=20));var u=0;return l&&(u=l-a.height-2)<=0&&(u=0),{left:n.x,top:u,width:o}}}]),t}(u.default);i.propTypes=a({},u.default.propTypes),i.defaultProps=a({},u.default.defaultProps,{placeholderColor:"gray"}),e.exports=i},80:function(e){e.exports=JSON.parse('{"name":"react-native-rxinput","version":"0.0.4","description":"React Native rxinput for IOS & Android & windows.","main":"index.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"keywords":["textinput","input","react-native-input","react-native-rxinput"],"author":"srxboys (https://github.com/srxboys)","license":"MIT","repository":{"type":"git","url":"git@github.com:RXReactNative/reacty-native-rxinput.git"},"devDependencies":{"react":"^16.0.0","react-native":"^0.41.2","prop-types":"*"}}')}});