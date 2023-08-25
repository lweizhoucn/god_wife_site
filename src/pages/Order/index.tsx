import { list } from '@/services/godcai/order_service';
import { MobileOutlined } from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useRef } from 'react';
import ClientEditModal from './OrderEditModal';
import { clientState, orderPlatform, orderState, skuState } from '@/constants';
import OrderEditModal from './OrderEditModal';
import { Image, Tag } from 'antd';
import { clientFormat } from '@/utils/format';

const ClientPage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const reloadData = () => {
    actionRef.current?.reload();
  };

  const colums: ProColumns<OrderInfo>[] = [
    {
      title: 'Id',
      dataIndex: 'id',
      valueType: 'digit',
      search: false,
    },
    {
      title: '用户信息',
      dataIndex: 'clientInfo',
      valueType: 'text',
      render: (_,record) =>{
        // return 
        return <Tag color='green'>{record.clientInfo.building + "-" + record.clientInfo.roomNumber}</Tag>
      },
      search:false,
    },
    {
      title: '团购商品',
      dataIndex: 'skuInfo',
      valueType: 'text',
      render: (_,record) =>{
        return record.skuInfo.name
      },
      search: false,
    },
    {
      title: '订单数量',
      dataIndex: 'orderCount',
      valueType: 'digit',
      search: false,
    },
    {
      title: '订单价格',
      dataIndex: 'orderPrice',
      valueType: 'digit',
      search: false,
    },
    {
      title: '下单日期',
      dataIndex: 'orderDate',
      valueType: 'date',
    },
    {
      title: '送达日期',
      dataIndex: 'sendDate',
      valueType: 'date',
    },
    {
      title: '订单状态',
      dataIndex: 'state',
      valueEnum: {
        ...orderState
      }
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <OrderEditModal edit={true} current={record} reload={reloadData} />,
      ],
    },
  ];

  return (
    <PageContainer
      header={{
        title: '订单信息',
      }}
    >
      <ProTable
        headerTitle={
          <span>
            <MobileOutlined /> 订单信息
          </span>
        }
        columns={colums}
        request={list}
        actionRef={actionRef}
        toolBarRender={() => [
          <OrderEditModal key={'id'} edit={false} reload={reloadData} />,
        ]}
        pagination={{ pageSize: 10 }}
      />
    </PageContainer>
  );
};

export default ClientPage;
