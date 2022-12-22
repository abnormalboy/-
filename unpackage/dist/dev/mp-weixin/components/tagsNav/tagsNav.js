"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "tagsNav",
  setup() {
    function toOtherPage(val) {
      if (val == "\u4E03\u5723\u53EC\u5524") {
        common_vendor.index.switchTab({
          url: "/pages/detail/detail"
        });
      }
    }
    return {
      toOtherPage
    };
  },
  props: {
    tagsList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.tagsList, (item, index, i0) => {
      return {
        a: item.picUrl,
        b: common_vendor.t(item.picText),
        c: index,
        d: common_vendor.o(($event) => $setup.toOtherPage(item.picText), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/code/demo/uni_demo/components/tagsNav/tagsNav.vue"]]);
wx.createComponent(Component);
