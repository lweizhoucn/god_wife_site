import { skuStateSelect } from '@/constants';
import { add, update } from '@/services/godcai/sku_service';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormDatePicker,
  ProFormDateTimePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const SkuEditModal: React.FC<{
  current?: SkuInfo;
  edit: boolean;
  reload: () => void;
}> = ({ current, edit, reload }) => {
  return (
    <ModalForm
      {...formItemLayout}
      title={edit ? '编辑' : '新建'}
      trigger={
        edit ? (
          <a>编辑</a>
        ) : (
          <Button key="add" icon={<PlusOutlined />} type="primary">
            新建
          </Button>
        )
      }
      layout="horizontal"
      initialValues={current}
      modalProps={{
        destroyOnClose: true,
      }}
      onFinish={async (item: ClinetInfo) => {
        let flag = true;
        let req: Promise<ResultInfo<SkuInfo>> = edit ? update(item) : add(item);
        await req.then((result: ResultInfo<SkuInfo>) => {
          flag = result.code >= 0;
          result.code < 0
            ? message.error(`${edit ? '更新' : '新增'}失败${result.message}`)
            : message.success(`${edit ? '更新' : '新增'}成功`);
          flag && reload();
        });
        return flag;
      }}
    >
      <ProFormDigit name="id" label="ID" disabled hidden={!edit} />
      <ProFormText name="name" label="名称" />
      <ProFormDigit name="price" label="价格" />
      <ProFormDateTimePicker name="closeTime" label="截单时间" />
      <ProFormDatePicker name="sendDate" label="送达时间" />
      <ProFormSelect name="state" label="状态" options={skuStateSelect} />
      <ProFormTextArea name="description" label="描述" />
    </ModalForm>
  );
};

export default SkuEditModal;
