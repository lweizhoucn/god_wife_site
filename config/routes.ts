export default [
  {
    path: '/',
    redirect: '/client',
  },
  {
    name: '客户信息',
    path: '/client',
    icon: 'user',
    component: './Client',
  },
  {
    name: '订单信息',
    path: '/access',
    icon: 'moneyCollect',
    component: './Order',
  },
  {
    name: '团购商品',
    path: '/sku',
    icon: 'shopping',
    component: './Sku'
  },
];
