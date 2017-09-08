'use strict'

import React from 'react'

import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import store from './app/store'

import TabBarNavigation from './app/tabBar/views/TabBarNavigation'

export default class reduxnav extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('reduxnav', () => reduxnav);
