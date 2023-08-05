import { clientStateSelect } from '@/constants';
import { add, update } from '@/services/godcai/client_service';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const ClientEditModal: React.FC<{
  current?: ClinetInfo;
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
        let req: Promise<ResultInfo<ClinetInfo>> = edit ? update(item) : add(item);
        await req.then((result: ResultInfo<ClinetInfo>) => {
          flag = result.code >= 0;
          result.code < 0
            ? message.error(`${edit ? '更新' : '新增'}失败${result.message}`)
            : message.success(`${edit ? '更新' : '新增'}成功`);
          flag && reload();
        });
        return flag;
      }}
    >
      <ProFormDigit name="id" label="ID" disabled hidden={!edit}/>
      <ProFormDigit name="building" label="楼栋" />
      <ProFormDigit name="roomNumber" label="房号" />
      <ProFormText name="phoneNumber" label="手机号码" />
      <ProFormText name="nickName" label="昵称" />
    </ModalForm>
  );
};

export default ClientEditModal;
