import { skuState } from '@/constants';
import { list } from '@/services/godcai/sku_service';
import { MobileOutlined } from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useRef } from 'react';
import SkuEditModal from './SkuEditModal';

const ClientPage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const reloadData = () => {
    actionRef.current?.reload();
  };

  const colums: ProColumns<SkuInfo>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      valueType: 'digit',
      search: false,
    },
    {
      title: '名称',
      dataIndex: 'name',
      valueType: 'text',
    },
    {
      title: '底价',
      dataIndex: 'lowestPrice',
      valueType: 'digit',
      search: false,
      // hideInForm:true,
      hideInTable: true,
    },
    {
      title: '卖价',
      dataIndex: 'price',
      valueType: 'digit',
      search: false,
    },

    // {
    //   title: '截止时间',
    //   dataIndex: 'closeTime',
    //   valueType: 'dateTime',
    // },
    {
      title: '送达日期',
      dataIndex: 'sendDate',
      valueType: 'date',
    },
    {
      title: '状态',
      dataIndex: 'state',
      valueEnum: {
        ...skuState,
      },
    },
    {
      title: '描述',
      ellipsis: true,
      dataIndex: 'description',
      valueType: 'text',
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <SkuEditModal edit={true} current={record} reload={reloadData} />,
        //   <Popconfirm
        //     title="确认删除吗?"
        //     onConfirm={() => {
        //       del({ id: record.id });
        //     }}
        //   >
        //     <a>删除</a>
        //   </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer
      header={{
        title: '商品信息',
      }}
    >
      <ProTable
        headerTitle={
          <span>
            <MobileOutlined /> 商品信息
          </span>
        }
        columns={colums}
        request={list}
        actionRef={actionRef}
        toolBarRender={() => [
          <SkuEditModal key={'id'} edit={false} reload={reloadData} />,
        ]}
        pagination={{ pageSize: 10 }}
      />
    </PageContainer>
  );
};

export default ClientPage;
