webpackJsonp([2,3],{17:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["desc","btn"],methods:{close:function(){this.$store.dispatch("setPop",!1)}}}},18:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(40),r=n(a);o.default={components:{popbg:r.default}}},19:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={created:function(){document.querySelector("html").style.overflow="hidden",this.styleobj.height=window.screen.height+"px",this.styleobj.width=window.screen.width+"px",console.log("pop created")},destroyed:function(){console.log("pop destroyed"),document.querySelector("html").style.overflow="auto"},data:function(){return{styleobj:{height:"",width:""}}}}},30:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".pop[data-v-0d6239b6]{display:block;position:fixed;top:0;left:0;z-index:3}.bg[data-v-0d6239b6]{background-color:#ccc;opacity:.7}.content[data-v-0d6239b6]{z-index:999}","",{version:3,sources:["/./src/components/popbg.vue"],names:[],mappings:"AACA,sBAAsB,cAAc,eAAe,MAAM,OAAO,SAAS,CACxE,AACD,qBAAqB,sBAAsB,UAAW,CACrD,AACD,0BAA0B,WAAW,CACpC",file:"popbg.vue",sourcesContent:["\n.pop[data-v-0d6239b6]{display:block;position:fixed;top:0;left:0;z-index:3\n}\n.bg[data-v-0d6239b6]{background-color:#ccc;opacity:0.7\n}\n.content[data-v-0d6239b6]{z-index:999\n}\n"],sourceRoot:"webpack://"}])},31:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"pop.vue",sourceRoot:"webpack://"}])},32:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".popbody[data-v-669d27c3]{margin:9.83rem auto;background-color:#f2fffb;border-radius:.4rem;border:4px solid #762200;position:relative;font-weight:600;width:7rem;height:6rem;color:#000;text-align:center;overflow:hidden}.popbody h5[data-v-669d27c3]{margin-top:1rem;font-size:.8rem}.popbody .footer[data-v-669d27c3]{position:absolute;bottom:0;left:0;height:1.8rem;text-align:center;border-top:1px solid #eee;width:100%}.popbody .footer span[data-v-669d27c3]{font-size:.8rem;width:4rem;display:block;margin:.2rem auto;height:1.2rem;line-height:1.2rem;border:2px solid #762200;border-radius:.7rem;background-color:#ffaf2d}","",{version:3,sources:["/./src/components/not-award.vue"],names:[],mappings:"AACA,0BAA0B,oBAAoB,yBAAyB,oBAAoB,yBAAyB,kBAAkB,gBAAgB,WAAW,YAAY,WAAW,kBAAkB,eAAe,CACxN,AACD,6BAA6B,gBAAgB,eAAe,CAC3D,AACD,kCAAkC,kBAAkB,SAAS,OAAO,cAAc,kBAAkB,0BAA0B,UAAU,CACvI,AACD,uCAAuC,gBAAgB,WAAW,cAAc,kBAAkB,cAAc,mBAAmB,yBAAyB,oBAAoB,wBAAwB,CACvM",file:"not-award.vue",sourcesContent:["\n.popbody[data-v-669d27c3]{margin:9.83rem auto;background-color:#f2fffb;border-radius:.4rem;border:4px solid #762200;position:relative;font-weight:600;width:7rem;height:6rem;color:#000;text-align:center;overflow:hidden\n}\n.popbody h5[data-v-669d27c3]{margin-top:1rem;font-size:.8rem\n}\n.popbody .footer[data-v-669d27c3]{position:absolute;bottom:0;left:0;height:1.8rem;text-align:center;border-top:1px solid #eee;width:100%\n}\n.popbody .footer span[data-v-669d27c3]{font-size:.8rem;width:4rem;display:block;margin:.2rem auto;height:1.2rem;line-height:1.2rem;border:2px solid #762200;border-radius:.7rem;background-color:#ffaf2d\n}\n"],sourceRoot:"webpack://"}])},33:function(e,o,t){var n=t(30);"string"==typeof n&&(n=[[e.id,n,""]]);t(2)(n,{});n.locals&&(e.exports=n.locals)},34:function(e,o,t){var n=t(31);"string"==typeof n&&(n=[[e.id,n,""]]);t(2)(n,{});n.locals&&(e.exports=n.locals)},35:function(e,o,t){var n=t(32);"string"==typeof n&&(n=[[e.id,n,""]]);t(2)(n,{});n.locals&&(e.exports=n.locals)},38:function(e,o,t){var n,a;t(35),n=t(17);var r=t(43);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-669d27c3",e.exports=n},39:function(e,o,t){var n,a;t(34),n=t(18);var r=t(42);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-1a075a31",e.exports=n},40:function(e,o,t){var n,a;t(33),n=t(19);var r=t(41);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-0d6239b6",e.exports=n},41:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement;return o("div",[o("div",{staticClass:"pop bg",style:e.styleobj})," ",o("div",{staticClass:"pop content",style:e.styleobj},[e._t("default")])])},staticRenderFns:[]}},42:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement;return o("div",[o("popbg",[o("div",{staticClass:"content"},[e._t("default")])])])},staticRenderFns:[]}},43:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement;return o("div",{staticClass:"popbody"},[o("h5",{staticClass:"desc",domProps:{innerHTML:e._s(e.desc)}})," ",o("div",{staticClass:"footer"},[o("span",{directives:[{name:"touchbtn",rawName:"v-touchbtn",value:{color:"#eee"},expression:"{color: '#eee'}"}],on:{click:e.close}},[e._s(e.btn)])])])},staticRenderFns:[]}},59:function(e,o,t){var n,a;t(159),n=t(83);var r=t(206);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-5908ac96",e.exports=n},83:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(6),r=n(a),s=t(38),i=n(s),c=t(37),d=n(c),A=t(39),l=n(A);o.default={components:{notAward:i.default,load:d.default,pop:l.default},data:function(){return{info:{name:"",telephone:"",address:""},focus:{nonename:!0,tel:!0,noneaddr:!0},currentfocus:""}},methods:{click:function(){console.log(11),this.tel&&this.nonename&&this.noneaddr&&(this.$store.state.ispop||(console.log(22),this.$store.dispatch("setPop","load"),this.$http.get(r.default.url+"/saveinfo").then(function(e){var o=this,t=JSON.parse(e.body);return 200!==t.code?alert("接口错误"):void setTimeout(function(){t.value.status?o.$store.dispatch("setPop","savesuc"):o.$store.dispatch("setPop","saveerr")},500)}).catch(function(e){console.log(e)})))},change:function(e){var o=this;return function(){o.currentfocus=e,o.focus[e]=!1}}},computed:{tel:function(){return/0?(13|14|15|18)[0-9]{9}/.test(this.info.telephone)},nonename:function(){return this.info.name},noneaddr:function(){return this.info.address},ispop:function(){return this.$store.state.ispop}},created:function(){this.info.name=this.$route.query.name,this.info.telephone=this.$route.query.telephone,this.info.address=this.$route.query.address,this.info.imageUrl=this.$route.query.imageUrl}}},135:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'#saveinfo[data-v-5908ac96]{height:100%;width:100%;background-color:#f0f0f0;overflow-y:auto}.save-img[data-v-5908ac96]{width:4rem;height:5rem;margin:1.2rem auto;background-color:#eee}.save-img img[data-v-5908ac96]{width:100%;height:100%}.telwarn[data-v-5908ac96]{border-bottom-color:#e22800}.telwarn[data-v-5908ac96]:after{display:block;content:"\\8BF7\\586B\\5199\\6B63\\786E\\7684\\53F7\\7801";position:absolute;bottom:-1.4rem;font-size:.6rem;left:.6rem;color:#e22800}.nonewarn[data-v-5908ac96]{border-bottom-color:#e22800}.nonewarn[data-v-5908ac96]:after{display:block;content:"\\6B64\\9879\\4E0D\\4E3A\\7A7A";position:absolute;bottom:-1.4rem;font-size:.6rem;left:.6rem;color:#e22800}.focus[data-v-5908ac96]{border-bottom-color:#15c39b}.focus[data-v-5908ac96]:after{display:none}label[data-v-5908ac96]{display:block;display:-webkit-box;display:-ms-flexbox;display:flex;height:2.3rem;margin:0 1.1rem;border-bottom:1px solid transparent;line-height:2rem;font-size:.7rem;position:relative;-webkit-transition:border-color 1s;transition:border-color 1s}label span[data-v-5908ac96]{width:4rem;position:absolute;bottom:.55rem;left:.6rem;line-height:.7rem}label input[data-v-5908ac96]{margin-left:4.77rem;margin-top:1rem;border:none;outline:none;font-size:.7rem;height:.7rem;background-color:#f0f0f0}.btn[data-v-5908ac96]{font-size:.9rem;display:block;text-align:center;color:#fff;line-height:1.9rem;width:11.6rem;height:1.9rem;margin:0 auto;margin-top:1.73rem;border-radius:.95rem;background-color:#15c39b}.disable[data-v-5908ac96]{background-color:#687e8f}',"",{version:3,sources:["/./src/views/saveinfo/index.vue"],names:[],mappings:"AACA,2BAA2B,YAAY,WAAW,yBAAyB,eAAe,CACzF,AACD,2BAA2B,WAAW,YAAY,mBAAmB,qBAAqB,CACzF,AACD,+BAA+B,WAAW,WAAW,CACpD,AACD,0BAA0B,2BAA2B,CACpD,AACD,gCAAgC,cAAc,mDAAmB,kBAAkB,eAAe,gBAAgB,WAAW,aAAa,CACzI,AACD,2BAA2B,2BAA2B,CACrD,AACD,iCAAiC,cAAc,oCAAgB,kBAAkB,eAAe,gBAAgB,WAAW,aAAa,CACvI,AACD,wBAAwB,2BAA2B,CAClD,AACD,8BAA8B,YAAY,CACzC,AACD,uBAAuB,cAAc,oBAAoB,AAAqB,oBAAoB,aAAa,cAAc,gBAAgB,oCAAoC,iBAAiB,gBAAgB,kBAAkB,mCAAmC,0BAA0B,CAChS,AACD,4BAA4B,WAAW,kBAAkB,cAAc,WAAW,iBAAiB,CAClG,AACD,6BAA6B,oBAAoB,gBAAkB,YAAY,aAAa,gBAAgB,aAAa,wBAAwB,CAChJ,AACD,sBAAsB,gBAAgB,cAAc,kBAAkB,WAAW,mBAAmB,cAAc,cAAc,cAAc,mBAAmB,qBAAqB,wBAAwB,CAC7M,AACD,0BAA0B,wBAAwB,CACjD",file:"index.vue",sourcesContent:['\n#saveinfo[data-v-5908ac96]{height:100%;width:100%;background-color:#f0f0f0;overflow-y:auto\n}\n.save-img[data-v-5908ac96]{width:4rem;height:5rem;margin:1.2rem auto;background-color:#eee\n}\n.save-img img[data-v-5908ac96]{width:100%;height:100%\n}\n.telwarn[data-v-5908ac96]{border-bottom-color:#e22800\n}\n.telwarn[data-v-5908ac96]:after{display:block;content:"请填写正确的号码";position:absolute;bottom:-1.4rem;font-size:.6rem;left:.6rem;color:#e22800\n}\n.nonewarn[data-v-5908ac96]{border-bottom-color:#e22800\n}\n.nonewarn[data-v-5908ac96]:after{display:block;content:"此项不为空";position:absolute;bottom:-1.4rem;font-size:.6rem;left:.6rem;color:#e22800\n}\n.focus[data-v-5908ac96]{border-bottom-color:#15c39b\n}\n.focus[data-v-5908ac96]:after{display:none\n}\nlabel[data-v-5908ac96]{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:2.3rem;margin:0 1.1rem;border-bottom:1px solid transparent;line-height:2rem;font-size:.7rem;position:relative;-webkit-transition:border-color 1s;transition:border-color 1s\n}\nlabel span[data-v-5908ac96]{width:4rem;position:absolute;bottom:.55rem;left:.6rem;line-height:.7rem\n}\nlabel input[data-v-5908ac96]{margin-left:4.77rem;margin-top:1.0rem;border:none;outline:none;font-size:.7rem;height:.7rem;background-color:#f0f0f0\n}\n.btn[data-v-5908ac96]{font-size:.9rem;display:block;text-align:center;color:#fff;line-height:1.9rem;width:11.6rem;height:1.9rem;margin:0 auto;margin-top:1.73rem;border-radius:.95rem;background-color:#15c39b\n}\n.disable[data-v-5908ac96]{background-color:#687e8f\n}\n'],sourceRoot:"webpack://"}])},159:function(e,o,t){var n=t(135);"string"==typeof n&&(n=[[e.id,n,""]]);t(2)(n,{});n.locals&&(e.exports=n.locals)},206:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement;return o("div",{attrs:{id:"saveinfo"}},[o("div",{staticClass:"save-img"},[o("img",{attrs:{src:e.info.imageUrl}})])," ",o("label",{class:[e.focus.nonename||e.nonename?"":"nonewarn","nonename"==e.currentfocus?"focus":""]},[o("span",["联系人"]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.info.name,expression:"info.name"},{name:"focus",rawName:"v-focus",value:{handle:e.change("nonename")},expression:"{handle: change('nonename')}"}],staticClass:"focus",attrs:{autofocus:"autofocus"},domProps:{value:e._s(e.info.name)},on:{input:function(o){o.target.composing||(e.info.name=o.target.value)}}})])," ",o("label",{class:[e.focus.tel||e.tel?"":"telwarn","tel"==e.currentfocus?"focus":""]},[o("span",["手机号码"]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.info.telephone,expression:"info.telephone"},{name:"focus",rawName:"v-focus",value:{handle:e.change("tel")},expression:"{handle: change('tel')}"}],domProps:{value:e._s(e.info.telephone)},on:{input:function(o){o.target.composing||(e.info.telephone=o.target.value)}}})])," ",o("label",{class:[e.focus.noneaddr||e.noneaddr?"":"nonewarn","noneaddr"==e.currentfocus?"focus":""]},[o("span",["收货地址"]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.info.address,expression:"info.address"},{name:"focus",rawName:"v-focus",value:{handle:e.change("noneaddr")},expression:"{handle: change('noneaddr')}"}],domProps:{value:e._s(e.info.address)},on:{input:function(o){o.target.composing||(e.info.address=o.target.value)}}})])," ",o("span",{directives:[{name:"tap",rawName:"v-tap",value:{handle:e.click},expression:"{handle: click}"}],class:[e.tel&&e.noneaddr&&e.nonename?"":"disable","btn"]},[e._s(e.tel&&e.noneaddr&&e.nonename?"确认领取":"请填写正确信息")])," ","load"===e.ispop?o("load"):e._e()," ","savesuc"===e.ispop||"saveerr"===e.ispop?o("pop",["savesuc"===e.ispop?o("not-award",{attrs:{desc:"信息保存成功啦",btn:"确定"}}):e._e()," ","saveerr"===e.ispop?o("not-award",{attrs:{desc:"好惨..信息保存失败!再试一次或者联系客服",btn:"确定"}}):e._e()]):e._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=2.4eed2bf3b22a7a6fcadf.js.map