import { orderStateSelect } from '@/constants';
import { selectList as cliet_list } from '@/services/godcai/client_service';
import { add, update } from '@/services/godcai/order_service';
import { list as sku_list } from '@/services/godcai/sku_service';
import { clientFormat } from '@/utils/format';
import {
  ModalForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormSelect,
} from '@ant-design/pro-components';
import { message } from 'antd';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const skuRequest = async (keyword?: string) => {
  const skuList: ResultInfo<SkuInfo> = await sku_list({
    pageSize: 10,
    current: 1,
    ...{ name: keyword, state: 0 },
  });
  const res: any[] = [];
  skuList.data?.forEach((i) => {
    res.push({ label: i.name, value: i.id });
  });
  return res;
};

const clientRequest = async (keyword?: string) => {
  const skuList: ResultInfo<ClinetInfo> = await cliet_list(keyword);
  const res: any[] = [];
  skuList.data?.forEach((i) => {
    res.push({ label: clientFormat(i), value: i.id });
  });
  return res;
};

const OrderEditModal: React.FC<{
  current?: OrderInfo;
  edit: boolean;
  reload: () => void;
  clientInfo? : ClinetInfo;
}> = ({ current, edit, reload,clientInfo }) => {
  return (
    <ModalForm
      {...formItemLayout}
      title={edit ? '编辑' : '新建'}
      trigger={edit ? <a>编辑</a> : <a>新建订单</a>}
      layout="horizontal"
      initialValues={current}
      modalProps={{
        destroyOnClose: true,
      }}
      onFinish={async (item: OrderInfo) => {
        let req: Promise<ResultInfo<OrderInfo>> = edit
          ? update(item)
          : add(item);
        let ok = false;
        await req
          .then((result: ResultInfo<SkuInfo>) => {
            let success = result.code >= 0;
            !success
              ? message.error(`${edit ? '更新' : '新增'}失败${result.message}`)
              : message.success(`${edit ? '更新' : '新增'}成功`);
            success && reload();
            return success;
          })
          .then((ret) => (ok = ret));
        return ok;
      }}
    >
      <ProFormDigit name="id" label="ID" disabled hidden={!edit} />
      <ProFormSelect
        showSearch
        name="clientId"
        label="客户"
        disabled = {clientInfo != null}
        initialValue={clientFormat(clientInfo)}
        request={({ keyWords }) => {
          return clientRequest(keyWords);
        }}
        rules={[{required: true}]}
        transform={(val) => {
          if (val === clientFormat(clientInfo)) {
            return { clientId: clientInfo?.id };
          }
          return { clientId: val };
        }}
      />
      <ProFormSelect
        showSearch
        name="skuId"
        label="商品"
        request={({keyWords}) => {
          return skuRequest(keyWords);
        }}
        rules={[{required: true}]}
        transform={(val) => {
          if (val === current?.skuInfo.name) {
            return { skuId: current?.skuInfo.id };
          }
          return { skuId: val };
        }}
        initialValue={current?.skuInfo.name}
      />
      <ProFormDigit name="orderCount" label="数量" initialValue={!edit && 1}  rules={[{required: true}]}/>
      <ProFormSelect name="state" label="状态" options={orderStateSelect}  rules={[{required: true}]}/>
      <ProFormDatePicker name="sendDate" label="送达时间"  rules={[{required: true}]}/>
    </ModalForm>
  );
};

export default OrderEditModal;
