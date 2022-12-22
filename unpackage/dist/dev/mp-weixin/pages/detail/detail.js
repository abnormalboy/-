"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const filterData = common_vendor.ref([
      {
        "name": "\u9635\u8425",
        "key": "first_amount",
        "select": 0,
        "submenu": [
          {
            "label": "\u9635\u8425",
            "value": []
          },
          {
            "label": "\u8499\u5FB7",
            "value": "\u8499\u5FB7"
          },
          {
            "label": "\u7483\u6708",
            "value": "\u7483\u6708"
          },
          {
            "label": "\u7A3B\u59BB",
            "value": "\u7A3B\u59BB"
          },
          {
            "label": "\u987B\u5F25",
            "value": "\u987B\u5F25"
          },
          {
            "label": "\u81F3\u51AC",
            "value": "\u81F3\u51AC"
          }
        ]
      },
      {
        "name": "\u5C5E\u6027",
        "key": "real_price",
        "select": 0,
        "submenu": [
          {
            "label": "\u5C5E\u6027",
            "value": []
          },
          {
            "label": "\u98CE\u5143\u7D20",
            "value": "\u98CE\u5143\u7D20"
          },
          {
            "label": "\u706B\u5143\u7D20",
            "value": "\u706B\u5143\u7D20"
          },
          {
            "label": "\u6C34\u5143\u7D20",
            "value": "\u6C34\u5143\u7D20"
          },
          {
            "label": "\u51B0\u5143\u7D20",
            "value": "\u51B0\u5143\u7D20"
          },
          {
            "label": "\u96F7\u5143\u7D20",
            "value": "\u96F7\u5143\u7D20"
          },
          {
            "label": "\u5CA9\u5143\u7D20",
            "value": "\u5CA9\u5143\u7D20"
          },
          {
            "label": "\u8349\u5143\u7D20",
            "value": "\u8349\u5143\u7D20"
          }
        ]
      },
      {
        "name": "\u6B66\u5668\u7C7B\u578B",
        "key": "power",
        "select": 0,
        "submenu": [
          {
            "label": "\u6B66\u5668\u7C7B\u578B",
            "value": ""
          },
          {
            "label": "\u53CC\u624B\u5251",
            "value": "\u53CC\u624B\u5251"
          },
          {
            "label": "\u5355\u624B\u5251",
            "value": "\u5355\u624B\u5251"
          },
          {
            "label": "\u5F13",
            "value": "\u5F13"
          },
          {
            "label": "\u6CD5\u5668",
            "value": "\u6CD5\u5668"
          },
          {
            "label": "\u957F\u67C4\u6B66\u5668",
            "value": "\u957F\u67C4\u6B66\u5668"
          }
        ]
      }
    ]);
    return {
      filterData
    };
  },
  data() {
    return {
      tagsList: [
        {
          picText: "\u5361\u724C\u8D44\u6599",
          picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/12/07/195563531/32fc9ab4261969c6d41bf5b9cac80547_5475840492938819888.png?x-oss-process=image/quality,q_75/resize,s_96"
        },
        {
          picText: "\u73A9\u6CD5\u653B\u7565",
          picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/12/07/195563531/2e729fffd010f961a462b2b978caa005_2997124018978826319.png?x-oss-process=image/quality,q_75/resize,s_96"
        },
        {
          picText: "\u5361\u724C\u5E7F\u573A",
          picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/12/12/195563531/a51eeac3c7ba327efddd79c11fb49fb5_3582813142440443696.png?x-oss-process=image/quality,q_75/resize,s_96"
        },
        {
          picText: "\u653B\u7565\u7AD9",
          picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/02/10/283462834/138352aa4de76d185e4f973f2b4c88ed_8946163745863136807.png?x-oss-process=image/quality,q_75/resize,s_96"
        }
      ],
      travelOne: {
        text: "\u70ED\u95E8\u63A8\u8350",
        icon: "icon-kapai",
        recommendList: [
          {
            text: "\u57FA\u7840\u89C4\u5219\u4ECB\u7ECD"
          },
          {
            text: "\u5C0F\u6280\u5DE7\uFF06\u624B\u67C4\u6280\u5DE7"
          },
          {
            text: "\u5F3A\u529B\u5361\u7EC4\u63A8\u8350"
          },
          {
            text: "\u9B54\u5076\u5251\u9B3C\u7684\u9152\u9986\u6311\u6218\u653B\u7565"
          },
          {
            text: "\u8BA8\u503A\u4EBA\u9152\u9986\u6311\u6218\u653B\u7565"
          },
          {
            text: "\u5CA9\u76D4\u738B\u9152\u9986\u6311\u6218\u653B\u7565"
          },
          {
            text: "8\u5F20\u4F18\u8D28\u5361\u4EFB\u541B\u9009\u62E9\uFF01"
          },
          {
            text: "\u65E0\u624B\u724C\u901A\u5173\u9152\u9986\u6311\u6218"
          }
        ]
      },
      travelTwo: {
        text: "\u5361\u7EC4\u653B\u7565",
        icon: "icon-kapai",
        model: {
          zhenying: "",
          shuxing: "",
          \u6B66\u5668\u7C7B\u578B: ""
        }
      }
    };
  }
};
if (!Array) {
  const _easycom_tagsNav2 = common_vendor.resolveComponent("tagsNav");
  const _easycom_travel2 = common_vendor.resolveComponent("travel");
  const _easycom_yang_dropdown2 = common_vendor.resolveComponent("yang-dropdown");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_tagsNav2 + _easycom_travel2 + _easycom_yang_dropdown2 + _easycom_uni_card2)();
}
const _easycom_tagsNav = () => "../../components/tagsNav/tagsNav.js";
const _easycom_travel = () => "../../components/travel/travel.js";
const _easycom_yang_dropdown = () => "../../uni_modules/yang-dropdown/components/yang-dropdown/yang-dropdown.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_tagsNav + _easycom_travel + _easycom_yang_dropdown + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      tagsList: $data.tagsList
    }),
    b: common_vendor.f($data.travelOne.recommendList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index
      };
    }),
    c: common_vendor.p({
      text: $data.travelOne.text,
      iconfontName: $data.travelOne.icon
    }),
    d: common_vendor.p({
      activeColor: "red",
      filterData: $setup.filterData
    }),
    e: common_vendor.p({
      title: "\u82AD\u82AD\u62C9\u7684\u89D2\u8272\u9080\u8BF7",
      padding: "6rpx",
      spacing: "6rpx",
      margin: "6rpx"
    }),
    f: common_vendor.p({
      title: "\u82AD\u82AD\u62C9\u7684\u89D2\u8272\u9080\u8BF7",
      padding: "6rpx",
      spacing: "6rpx",
      margin: "6rpx"
    }),
    g: common_vendor.p({
      title: "\u82AD\u82AD\u62C9\u7684\u89D2\u8272\u9080\u8BF7",
      padding: "6rpx",
      spacing: "6rpx",
      margin: "6rpx"
    }),
    h: common_vendor.p({
      title: "\u82AD\u82AD\u62C9\u7684\u89D2\u8272\u9080\u8BF7",
      padding: "6rpx",
      spacing: "6rpx",
      margin: "6rpx"
    }),
    i: common_vendor.p({
      text: $data.travelTwo.text,
      iconfontName: $data.travelTwo.icon
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/code/demo/uni_demo/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
