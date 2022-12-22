"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "travel",
  onLoad(a, b) {
    console.log(this);
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    iconfontName: {
      type: String,
      default: "icon-rili"
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.iconfontName),
    b: common_vendor.t($props.text),
    c: common_vendor.t("\u66F4\u591A>")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/code/demo/uni_demo/components/travel/travel.vue"]]);
wx.createComponent(Component);
