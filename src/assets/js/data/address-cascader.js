import { reactive } from "vue";
// 科目数组
import { subjectList } from "@/assets/js/data/information-dropdown-data";

export const two = () => {
  const list = [];
  console.log(subjectList);
  for (let i = 0; i < subjectList.size() - 1; i++) {
    for (let j = i + 1; j < subjectList.size(); j++) {
      list.push({
        value: subjectList[i] + "，" + subjectList[j] + "任选一门",
        value: subjectList[i] + "，" + subjectList[j] + "任选一门",
      });
    }
  }
  console.log(list,"科目数组");
  return list;
};

export const options = reactive([
  {
    value: "不限",
    label: "不限选课要求",
  },
  {
    value: "",
    label: "限制选课要求",
    children: [
      {
        value: "one",
        label: "一门",
        children: [
          {
            value: "",
            label: "强制选一门",
            children: [
              {
                value: "物理",
                label: "物理",
              },
              {
                value: "化学",
                label: "化学",
              },
              {
                value: "生物",
                label: "生物",
              },
              {
                value: "历史",
                label: "历史",
              },
              {
                value: "政治",
                label: "政治",
              },
              {
                value: "地理",
                label: "地理",
              },
            ],
          },
          {
            value: "*",
            label: "强制从两门中选一门",
            children: [
              {
                value: "物理，化学任选一门",
                label: "物理，化学任选一门",
              },
              {
                value: "物理，生物任选一门",
                label: "物理，生物任选一门",
              },
              {
                value: "物理，历史任选一门",
                label: "物理，历史任选一门",
              },
              {
                value: "物理，政治任选一门",
                label: "物理，政治任选一门",
              },
              {
                value: "物理，地理任选一门",
                label: "物理，地理任选一门",
              },
              {
                value: "化学，生物任选一门",
                label: "化学，生物任选一门",
              },
              {
                value: "化学，历史任选一门",
                label: "化学，历史任选一门",
              },
              {
                value: "化学，政治任选一门",
                label: "化学，政治任选一门",
              },
              {
                value: "化学，地理任选一门",
                label: "化学，地理任选一门",
              },
              {
                value: "生物，历史任选一门",
                label: "生物，历史任选一门",
              },
              {
                value: "生物，政治任选一门",
                label: "生物，政治任选一门",
              },
              {
                value: "生物，地理任选一门",
                label: "生物，地理任选一门",
              },
              {
                value: "历史，政治任选一门",
                label: "历史，政治任选一门",
              },
              {
                value: "历史，地理任选一门",
                label: "历史，地理任选一门",
              },
              {
                value: "政治，地理任选一门",
                label: "政治，地理任选一门",
              },
            ],
          },
          {
            value: "*",
            label: "强制从三门中选一门",
            children: [
              {
                value: "物理，化学，生物任选一门",
                label: "物理，化学，生物任选一门",
              },
              {
                value: "物理，化学，历史任选一门",
                label: "物理，化学，历史任选一门",
              },
              {
                value: "物理，化学，政治任选一门",
                label: "物理，化学，政治任选一门",
              },
              {
                value: "物理，化学，地理任选一门",
                label: "物理，化学，地理任选一门",
              },
              {
                value: "物理，生物，历史任选一门",
                label: "物理，生物，历史任选一门",
              },
              {
                value: "物理，生物，政治任选一门",
                label: "物理，生物，政治任选一门",
              },
              {
                value: "物理，生物，地理任选一门",
                label: "物理，生物，地理任选一门",
              },
              {
                value: "物理，历史，政治任选一门",
                label: "物理，历史，政治任选一门",
              },
              {
                value: "物理，历史，地理任选一门",
                label: "物理，历史，地理任选一门",
              },
              {
                value: "物理，政治，地理任选一门",
                label: "物理，政治，地理任选一门",
              },
              {
                value: "化学，生物，历史任选一门",
                label: "化学，生物，历史任选一门",
              },
              {
                value: "化学，生物，政治任选一门",
                label: "化学，生物，政治任选一门",
              },
              {
                value: "化学，生物，地理任选一门",
                label: "化学，生物，地理任选一门",
              },
              {
                value: "化学，历史，政治任选一门",
                label: "化学，历史，政治任选一门",
              },
              {
                value: "化学，历史，地理任选一门",
                label: "化学，历史，地理任选一门",
              },
              {
                value: "化学，政治，地理任选一门",
                label: "化学，政治，地理任选一门",
              },
              {
                value: "生物，历史，政治任选一门",
                label: "生物，历史，政治任选一门",
              },
              {
                value: "生物，历史，地理任选一门",
                label: "生物，历史，地理任选一门",
              },
              {
                value: "历史，政治，地理任选一门",
                label: "历史，政治，地理任选一门",
              },
            ],
          },
          {
            value: "*",
            label: "强制从四门中选一门",
            children: [
              {
                value: "物理，化学，生物，历史任选一门",
                label: "物理，化学，生物，历史任选一门",
              },
              {
                value: "物理，化学，生物，政治任选一门",
                label: "物理，化学，生物，政治任选一门",
              },
              {
                value: "物理，化学，生物，地理任选一门",
                label: "物理，化学，生物，地理任选一门",
              },
              {
                value: "物理，化学，历史，政治任选一门",
                label: "物理，化学，历史，政治任选一门",
              },
              {
                value: "物理，化学，历史，地理任选一门",
                label: "物理，化学，历史，地理任选一门",
              },
              {
                value: "物理，化学，政治，地理任选一门",
                label: "物理，化学，政治，地理任选一门",
              },
              {
                value: "物理，生物，历史，政治任选一门",
                label: "物理，生物，历史，政治任选一门",
              },
              {
                value: "物理，生物，历史，地理任选一门",
                label: "物理，生物，历史，地理任选一门",
              },
              {
                value: "物理，生物，政治，地理任选一门",
                label: "物理，生物，政治，地理任选一门",
              },
              {
                value: "化学，生物，历史，政治任选一门",
                label: "化学，生物，历史，政治任选一门",
              },
              {
                value: "化学，生物，历史，地理任选一门",
                label: "化学，生物，历史，地理任选一门",
              },
              {
                value: "化学，生物，政治，地理任选一门",
                label: "化学，生物，政治，地理任选一门",
              },
              {
                value: "生物，历史，政治，地理任选一门",
                label: "生物，历史，政治，地理任选一门",
              },
            ],
          },
          {
            value: "*",
            label: "强制从五门中选一门",
            children: [
              {
                value: "物理，化学，生物，历史，政治任选一门",
                label: "物理，化学，生物，历史，政治任选一门",
              },
              {
                value: "物理，化学，生物，历史，地理任选一门",
                label: "物理，化学，生物，历史，地理任选一门",
              },
              {
                value: "物理，化学，生物，政治，地理任选一门",
                label: "物理，化学，生物，政治，地理任选一门",
              },
              {
                value: "物理，化学，历史，政治，地理任选一门",
                label: "物理，化学，历史，政治，地理任选一门",
              },
              {
                value: "物理，生物，历史，政治，地理任选一门",
                label: "物理，生物，历史，政治，地理任选一门",
              },
              {
                value: "化学，生物，历史，政治，地理任选一门",
                label: "化学，生物，历史，政治，地理任选一门",
              },
            ],
          },
        ],
      },
      {
        value: "two",
        label: "两门",
        children: [
          {
            value: "*",
            label: "强制选两门",
            children: [
              {
                value: "物理，化学",
                label: "物理，化学",
              },
              {
                value: "物理，生物",
                label: "物理，生物",
              },
              {
                value: "物理，历史",
                label: "物理，历史",
              },
              {
                value: "物理，政治",
                label: "物理，政治",
              },
              {
                value: "物理，地理",
                label: "物理，地理",
              },
              {
                value: "化学，生物",
                label: "化学，生物",
              },
              {
                value: "化学，历史",
                label: "化学，历史",
              },
              {
                value: "化学，政治",
                label: "化学，政治",
              },
              {
                value: "化学，地理",
                label: "化学，地理",
              },
              {
                value: "生物，历史",
                label: "生物，历史",
              },
              {
                value: "生物，政治",
                label: "生物，政治",
              },
              {
                value: "生物，地理",
                label: "生物，地理",
              },
              {
                value: "历史，政治",
                label: "历史，政治",
              },
              {
                value: "历史，地理",
                label: "历史，地理",
              },
              {
                value: "政治，地理",
                label: "政治，地理",
              },
            ],
          },
          {
            value: "*",
            label: "必选一门，强制从两门中选一门",
            children: [
              {
                value: "必选物理，化学和生物任选一门",
                label: "必选物理，化学和生物任选一门",
              },
              {
                value: "必选物理，化学和历史任选一门",
                label: "必选物理，化学和历史任选一门",
              },
              {
                value: "必选物理，化学和政治任选一门",
                label: "必选物理，化学和政治任选一门",
              },
              {
                value: "必选物理，化学和地理任选一门",
                label: "必选物理，化学和地理任选一门",
              },
              {
                value: "必须物理，生物和历史任选一门",
                label: "必选物理，生物和历史任选一门",
              },
              {
                value: "必选物理，生物和政治任选一门",
                label: "必选物理，生物和政治任选一门",
              },
              {
                value: "必选物理，生物和地理任选一门",
                label: "必选物理，生物和地理任选一门",
              },
              {
                value: "必选物理，历史和政治任选一门",
                label: "必选物理，历史和政治任选一门",
              },
              {
                value: "必选物理，历史和地理任选一门",
                label: "必选物理，历史和地理任选一门",
              },
              {
                value: "必选物理，政治和地理任选一门",
                label: "必选物理，政治和地理任选一门",
              },
              {
                value: "必选物理，化学和生物任选一门",
                label: "必选物理，化学和生物任选一门",
              },
              {
                value: "必选物理，化学和历史任选一门",
                label: "必选物理，化学和历史任选一门",
              },
              {
                value: "必选物理，化学和政治任选一门",
                label: "必选物理，化学和政治任选一门",
              },
              {
                value: "必选物理，化学和地理任选一门",
                label: "必选物理，化学和地理任选一门",
              },
              {
                value: "必须物理，生物和历史任选一门",
                label: "必选物理，生物和历史任选一门",
              },
              {
                value: "必选物理，生物和政治任选一门",
                label: "必选物理，生物和政治任选一门",
              },
              {
                value: "必选物理，生物和地理任选一门",
                label: "必选物理，生物和地理任选一门",
              },
              {
                value: "必选物理，历史和政治任选一门",
                label: "必选物理，历史和政治任选一门",
              },
              {
                value: "必选物理，历史和地理任选一门",
                label: "必选物理，历史和地理任选一门",
              },
              {
                value: "必选物理，政治和地理任选一门",
                label: "必选物理，政治和地理任选一门",
              },
            ],
          },
          {
            value: "*",
            label: "必选一门，强制从三门中选一门",
            children: [],
          },
          {
            value: "*",
            label: "必选一门，强制从四门中选一门",
            children: [],
          },
          {
            value: "*",
            label: "强制从三门中选两门",
            children: [],
          },
          {
            value: "*",
            label: "强制从四门中选两门",
            children: [],
          },
          {
            value: "*",
            label: "强制从五门中选两门",
            children: [],
          },
        ],
      },
      {
        value: "three",
        label: "三门",
        children: [
          {
            value: "*",
            label: "必选一门，强制从多门中选两门",
          },
          {
            value: "*",
            label: "必选两门，强制从多门中选一门",
          },
          {
            value: "*",
            label: "强制选三门",
          },
        ],
      },
    ],
  },
]);
