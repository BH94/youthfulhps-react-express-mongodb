import React from 'react';
import styled from 'styled-components';

import { Table } from 'antd';
import { Helmet } from 'react-helmet';

const HistoryPageBlock = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(#c6b9b0, #2c303c);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HistoryListBlock = styled.div`
  width: 95%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem;

  @media screen and (max-width: 798px) {
    margin: 10rem;
  }
`;

const PaymentHistoryPage = (props) => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'dataOfPurchase',
      key: 'dataOfPurchase',
      width: 150,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price ($)',
      dataIndex: 'price',
      key: 'price',
      width: 100,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 100,
    },
  ];

  return (
    <HistoryPageBlock>
      <Helmet>
        <title>YTHFT - Purchase Details</title>
      </Helmet>
      <HistoryListBlock>
        <Table
          dataSource={props.user.userData && props.user.userData.history}
          columns={columns}
          style={{ width: '100%', fontWeight: 'bolder' }}
          pagination={{
            total: `${
              props.user.userData && props.user.userData.history.length
            }`,
            pageSize: `${
              props.user.userData && props.user.userData.history.length
            }`,
            hideOnSinglePage: true,
          }}
        />
      </HistoryListBlock>
    </HistoryPageBlock>
  );
};

export default PaymentHistoryPage;
