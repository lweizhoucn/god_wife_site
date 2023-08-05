interface ResultInfo<any> {
  code: number;
  message: string;
  data?: Array<any>;
}

interface ClinetInfo {
  id: number;
  phoneNumber: string;
  building:number;
  roomNumber: number;
  nickName: string;
  state: number;
  createTime: number;
  updateTime: number;
} 


interface OrderInfo {
    id: number;
    clientInfo: ClinetInfo;
    skuInfo: SkuInfo;
    platform: number;
    orderPrice:number;
    orderDate: number;
    createTime: number;
    updateTime: number;
  } 


  interface SkuInfo {
    id: number;
    name: string;
    price: number;
    description:string;
    state: number;
    createTime: number;
    updateTime: number;
  } 