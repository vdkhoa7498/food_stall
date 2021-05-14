import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Tên Shipper',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  
  {
    title: 'Quận',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Thay đổi</a>
        <a>Xoá</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Duy Khoa',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['Quận 1', 'Bình Thạnh'],
  },
  {
    key: '2',
    name: 'Phan Thảo',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['Thủ Đức', 'Quận 9'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['Gò Vấp', 'Quận 12'],
  },
];

const Shippers =() =>{
    return(
        <div>
            <h1>Shipper</h1>
            <Table rowKey='key' columns={columns} dataSource={data} />
        </div>
    )
}

export default Shippers