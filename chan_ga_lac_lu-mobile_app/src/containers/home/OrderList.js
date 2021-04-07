import React, {useState} from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, ScrollableTab } from 'native-base';
import {StyleSheet} from 'react-native'
import TabOrderList from '../../components/tabOrderList/tabOrderList';


const OrderList = (props) =>{


  return (
    <Container>
      <Tabs locked>
        <Tab heading={ <TabHeading><Icon name="ios-add-outline" /><Text>Đơn Mới</Text></TabHeading>}>
          <Text>Tab 1</Text>
        </Tab>
        <Tab heading={ <TabHeading><Icon name="ios-checkmark-done-sharp" /><Text>Đơn đã xuất</Text></TabHeading>}>
          <TabOrderList/>
        </Tab>
        <Tab heading={ <TabHeading><Icon name="ios-alert" /><Text>Đơn đã huỷ</Text></TabHeading>}>
          <TabOrderList/>
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({

})

export default OrderList