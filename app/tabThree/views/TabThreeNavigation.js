'use strict'

import React from 'react'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabThree } from '../navigationConfiguration'

import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabThree
  }
}

class TabThreeNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab Three',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabThree
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(TabThreeNavigation)
