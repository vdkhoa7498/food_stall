import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button } from 'native-base';

const datas = [
    'Simon Mignolet',
    'Nathaniel Clyne',
    'Dejan Lovren',
    'Mama Sakho',
    'Alberto Moreno',
    'Emre Can',
    'Joe Allen',
    'Phil Coutinho',
  ];

const TabOrderList = (props) =>{

  const [data, setData] = useState([{ key: 1, value: 'one' }, 
                                    { key: 2, value: 'two' }, 
                                    { key: 3, value: 'three' }, 
                                    { key: 4, value: 'four' }, 
                                    { key: 5, value: 'five' }] )
  

  const removeItem = (key) => {
    let dt = data
    dt = dt.filter((item) => item.key !== key)
    setData(dt)
  }

  return (
    <Container>
      <Content scrollEnabled={false}>

        <FlatList
          data={data}
          renderItem={({ item }) => <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert(item.value)} >
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{ paddingLeft: 15 }}>{item.value}</Text>
              </View>
            }
            right={
              <Button danger onPress={() => removeItem(item.key)}>
                <Icon active name="trash" />
              </Button>
            }
          />}
        />
      </Content>
    </Container>
  );
}

export default TabOrderList