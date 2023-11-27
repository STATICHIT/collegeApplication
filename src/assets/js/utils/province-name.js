import { reactive } from "vue";
const cities = reactive([
  {
    text: "普通省份",
    list: [
      "河北",
      "山西",
      "辽宁",
      "吉林",
      "黑龙江",
      "江苏",
      "浙江",
      "安徽",
      "福建",
      "江西",
      "山东",
      "河南",
      "湖北",
      "湖南",
      "广东",
      "海南",
      "四川",
      "贵州",
      "云南",
      "陕西",
      "甘肃",
      "青海",
      "台湾",
    ],
  },
  {
    text: "自治区",
    list: ["内蒙古", "广西", "西藏", "宁夏", "新疆"],
  },
  {
    text: "直辖市",
    list: ["北京", "天津", "上海", "重庆"],
  },
  {
    text: "特别行政区",
    list: ["香港", "澳门"],
  },
]);

export { cities };
