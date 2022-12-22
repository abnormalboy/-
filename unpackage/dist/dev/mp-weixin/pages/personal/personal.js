"use strict";
const common_vendor = require("../../common/vendor.js");
const __default__ = {
  setup() {
    let windowHeight = 0;
    let bgimg = "https://ts1.cn.mm.bing.net/th/id/R-C.e81d9bf16a9bc97501e68ab4342bedec?rik=JkzfJ1jsBg28eg&riu=http%3a%2f%2fwww.wenphoto.com%2fuploads%2fquestions%2f20150219%2f94cdf641d521c8969438d5c7c8eb4035.jpg&ehk=n17h1ltK3VRcvpTcOe3c1fWSVM4uC4u12p8pv2Uqdkw%3d&risl=&pid=ImgRaw&r=0";
    common_vendor.index.getSystemInfo({
      success: function(res) {
        windowHeight = res.windowHeight;
      }
    });
    console.log(bgimg);
    return {
      windowHeight: windowHeight + "px",
      bgimg: "url(" + bgimg + ")"
    };
  },
  data() {
    return {};
  },
  methods: {}
};
const __injectCSSVars__ = () => {
  common_vendor.useCssVars((_ctx) => ({
    "6ae23533-windowHeight": _ctx.windowHeight,
    "6ae23533-bgimg": _ctx.bgimg
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _sfc_main = __default__;
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["is-shadow"]: false
    }),
    b: common_vendor.s(_ctx.__cssVars())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/code/demo/uni_demo/pages/personal/personal.vue"]]);
wx.createPage(MiniProgramPage);
