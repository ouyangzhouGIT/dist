(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7656d371"],{"459b":function(t,s,e){},a55b:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"jp-register"},[e("div",{staticClass:"jp-register-main"},[e("div",{staticClass:"jp-register-header"},[e("i",{staticClass:"icon",on:{click:t.goBack}},[t._v("")]),e("span",{staticClass:"in"},[t._v("登录")]),e("router-link",{attrs:{tag:"span",to:"/register"}},[e("span",{staticClass:"out"},[t._v("注册")])])],1),e("form",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"user",attrs:{type:"text",placeholder:"手机/邮箱/用户名",id:"username"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"pwd",attrs:{type:"password",placeholder:"密码",id:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),e("button",{staticClass:"btn",on:{click:t.onLogin}},[t._v("登录")])])])])},o=[],n=e("cebc"),i=e("76a0"),r=e("2f62"),c={data:function(){return{username:"",password:"",backPath:""}},computed:Object(n["a"])({},Object(r["c"])(["isLogin"])),methods:Object(n["a"])({},Object(r["b"])(["loginAction"]),{onLogin:function(){var t=this.username,s=this.password;this.loginAction({username:t,password:s})},goBack:function(){console.log(this.$route);var t=this.$route.params.from;t?this.$router.push("/"):this.$router.back()}}),beforeRouteEnter:function(t,s,e){e(function(t){t.backPath=s.fullPath})},watch:{isLogin:function(t,s){!0===t&&(Object(i["Toast"])({message:"登录成功",position:"middle",duration:2e3}),this.$router.push(this.backPath))}}},u=c,p=(e("bcee"),e("2877")),l=Object(p["a"])(u,a,o,!1,null,"36ca2b98",null);s["default"]=l.exports},bcee:function(t,s,e){"use strict";var a=e("459b"),o=e.n(a);o.a}}]);
//# sourceMappingURL=chunk-7656d371.10a5d86a.js.map