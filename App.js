import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import Tabs from './screen/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import Axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TAB_BAR_WIDTH = (90 * SCREEN_WIDTH) / 100; //90% of screen
const TAB_AND_INDICATOR_WIDTH = TAB_BAR_WIDTH / 3;
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60992da1ea03b472bb9a096b';
const App = () => {
  return (
    <>
      <View style={{backgroundColor: '#115E54'}}>
        <StatusBar backgroundColor="#114D44" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 50, justifyContent: 'center', marginLeft: 20}}>
            <Text style={{color: 'white', fontSize: 19}}>
              Whatsahifrbnckjnpp
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <View style={{width: 35, justifyContent: 'center'}}>
              <TouchableOpacity>
                <Icon name="search1" size={20} color="white"></Icon>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{alignContent: 'center', justifyContent: 'center'}}>
              <Icon2 name="options-vertical" size={20} color="white"></Icon2>
            </TouchableOpacity>
            <View style={{justifyContent: 'center'}}></View>
          </View>
        </View>
      </View>

      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </>
  );
};
export default App;
