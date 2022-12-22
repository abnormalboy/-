"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "yang-dropdown",
  props: {
    filterData: {
      type: Array,
      default: () => []
    },
    maxHeight: {
      type: Number,
      default: 500
    },
    tabsHeight: {
      type: Number,
      default: 80
    },
    isSticky: {
      type: Boolean,
      default: false
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    stickyTop: {
      type: String,
      default: "0rpx"
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    mainBgColor: {
      type: String,
      default: "#fff"
    },
    activeColor: {
      type: String,
      default: "#4EC65E"
    },
    color: {
      type: String,
      default: "#333"
    }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    common_vendor.useCssVars((_ctx) => ({
      "0a52e46b-activeColor": __props.activeColor,
      "0a52e46b-tabsHei": common_vendor.unref(tabsHei),
      "0a52e46b-maxHei": common_vendor.unref(maxHei),
      "0a52e46b-bgColor": __props.bgColor,
      "0a52e46b-color": __props.color,
      "0a52e46b-mainsHeight": common_vendor.unref(mainsHeight),
      "0a52e46b-mainBgColor": __props.mainBgColor,
      "0a52e46b-stickyTop": __props.stickyTop
    }));
    const tableData = common_vendor.ref([]);
    common_vendor.watch(
      () => props.filterData,
      (val) => {
        tableData.value = val;
      },
      {
        immediate: true
      }
    );
    const getTitleName = common_vendor.computed$1(() => {
      return function(item) {
        const info = item.submenu[item.select];
        if (info) {
          return info.label;
        }
        return item.label;
      };
    });
    const tabsHei = common_vendor.computed$1(() => {
      return `${props.tabsHeight}rpx`;
    });
    const maxHei = common_vendor.computed$1(() => {
      return `${props.maxHeight}rpx`;
    });
    const mainsHeight = common_vendor.computed$1(() => {
      return `${props.maxHeight - props.tabsHeight}rpx`;
    });
    const show = common_vendor.ref(false);
    const maskVisibility = common_vendor.ref(false);
    const curren = common_vendor.ref(0);
    const child = common_vendor.ref({});
    const handClose = () => {
      show.value = false;
      maskVisibility.value = false;
    };
    let loading = false;
    const handEnum = (index) => {
      if (loading)
        return;
      loading = true;
      setTimeout(() => {
        loading = false;
      }, 500);
      if (show.value && curren.value === index) {
        show.value = false;
        setTimeout(() => {
          maskVisibility.value = false;
        }, 200);
        return;
      }
      curren.value = index;
      child.value = tableData.value[index];
      maskVisibility.value = true;
      common_vendor.nextTick(() => {
        show.value = true;
      });
    };
    const handSelect = (item, index) => {
      const arr = tableData.value;
      arr[curren.value].select = index;
      show.value = false;
      setTimeout(() => {
        maskVisibility.value = false;
      }, 200);
      const select = common_vendor.toRaw(arr).map((el) => {
        return {
          labelKey: el.key,
          ...el.submenu[el.select]
        };
      });
      emit("change", select);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: maskVisibility.value
      }, maskVisibility.value ? {
        b: show.value ? 1 : "",
        c: maskVisibility.value != true ? 1 : "",
        d: common_vendor.o(handClose)
      } : {}, {
        e: common_vendor.f(tableData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(common_vendor.unref(getTitleName)(item)),
            b: show.value && curren.value === index ? 1 : "",
            c: show.value && curren.value === index ? 1 : "",
            d: index,
            e: common_vendor.o(($event) => handEnum(index), index)
          };
        }),
        f: common_vendor.f(child.value.submenu, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.label),
            b: child.value.select === index ? 1 : "",
            c: child.value.select === index
          }, child.value.select === index ? {} : {}, {
            d: index,
            e: common_vendor.o(($event) => handSelect(item, index), index)
          });
        }),
        g: show.value ? 1 : "",
        h: common_vendor.unref(mainsHeight),
        i: common_vendor.o(handClose),
        j: maskVisibility.value ? common_vendor.unref(maxHei) : "78rpx",
        k: __props.isSticky ? 1 : "",
        l: __props.isFixed ? 1 : "",
        m: !show.value ? 1 : "",
        n: common_vendor.s({
          top: __props.isSticky || __props.isFixed ? __props.stickyTop : 0
        }),
        o: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/demo/uni_demo/uni_modules/yang-dropdown/components/yang-dropdown/yang-dropdown.vue"]]);
wx.createComponent(Component);
