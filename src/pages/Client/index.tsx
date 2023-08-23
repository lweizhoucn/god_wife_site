import { list } from '@/services/godcai/client_service';
import { MobileOutlined } from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useRef } from 'react';
import ClientEditModal from './ClientEditModal';
import { clientState } from '@/constants';
import OrderEditModal from '../Order/OrderEditModal';

const ClientPage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const reloadData = () => {
    actionRef.current?.reload();
  };

  const colums: ProColumns<ClinetInfo>[] = [
    {
      title: 'Id',
      dataIndex: 'id',
      valueType: 'digit',
      search: false,
    },
    {
      title: '楼栋',
      dataIndex: 'building',
      valueType: 'digit',
    },
    {
      title: '房号',
      dataIndex: 'roomNumber',
      valueType: 'text',
    },
    {
      title: '手机号',
      dataIndex: 'phoneNumber',
      valueType: 'text',
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
      valueType: 'text',
    },
    {
      title: '历史下单总数',
      dataIndex: 'historyOrderCount',
      valueType: 'digit'
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <ClientEditModal edit={true} current={record} reload={reloadData} />,
        <OrderEditModal edit={false} reload={reloadData}/>,
      ],
    },
  ];

  return (
    <PageContainer
      header={{
        title: '客户信息',
      }}
    >
      <ProTable
        headerTitle={
          <span>
            <MobileOutlined /> 客户信息
          </span>
        }
        columns={colums}
        request={list}
        actionRef={actionRef}
        toolBarRender={() => [
          <ClientEditModal key={'id'} edit={false} reload={reloadData} />,
        ]}
        pagination={{ pageSize: 10 }}
      />
    </PageContainer>
  );
};

export default ClientPage;
