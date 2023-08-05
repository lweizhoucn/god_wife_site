export const DEFAULT_NAME = 'GOD-CAI';

export const clientState = {
  1: {
    text: '正常',
    status: 'success',
  },
  2: {
    text: '恶意下单',
    status: 'error',
  },
  3: {
    text: '不进群',
    status: 'warning',
  },
  4: {
    text: '新用户',
    status: 'processing',
  },
};

export const clientStateSelect = [
  { label: clientState[1].text, value: 1 },
  { label: clientState[2].text, value: 2 },
  { label: clientState[3].text, value: 3 },
  { label: clientState[4].text, value: 4 },
];

export const orderPlatform = new Map([
  [
    1,
    {
      text: '美团',
      icon: 'http://101.132.106.146:8080/uploadImages/zhoulw/2022/08/26/18/36/09d56589-ae1f-4e58-a31e-56b0f842ca29.png',
    },
  ],
  [
    2,
    {
      text: '拼多多',
      icon: 'http://101.132.106.146:8080/uploadImages/zhoulw/2023/07/26/14/40/daeeb448-d8d0-431e-adbf-144c32ad4ad9.png',
    },
  ],
  [
    3,
    {
      text: '淘菜菜',
      icon: 'http://101.132.106.146:8080/uploadImages/zhoulw/2023/07/26/14/39/8ca39240-3dd4-48af-84b3-0fe80086e44c.png',
    },
  ],
]);

export const orderPlatformSelect = [
  { label: orderPlatform.get(1)?.text, value: 1 },
  { label: orderPlatform.get(2)?.text, value: 2 },
  { label: orderPlatform.get(3)?.text, value: 3 },
];

export const skuState = {
  0: {
    text: '上架',
    status: 'success',
  },
  1: {
    text: '下架',
    status: 'error',
  },
};

export const skuStateSelect = [
  { label: skuState[0].text, value: 0 },
  { label: skuState[1].text, value: 1 },
];


export const orderState = {
  0: {
    text: '待配送',
    status: 'process',
  },
  1: {
    text: '完成',
    status: 'success',
  },
};

export const orderStateSelect = [
  { label: orderState[0].text, value: 0 },
  { label: orderState[1].text, value: 1 },
];