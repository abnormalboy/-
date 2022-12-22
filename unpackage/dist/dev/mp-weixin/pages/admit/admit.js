"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userName: "Ming"
    };
  },
  onLoad() {
  },
  methods: {
    handleAdmit() {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.userName),
    b: common_vendor.o((...args) => $options.handleAdmit && $options.handleAdmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/code/demo/uni_demo/pages/admit/admit.vue"]]);
wx.createPage(MiniProgramPage);
