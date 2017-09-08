'use strict'

import React from 'react'

import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabTwo } from '../navigationConfiguration'

import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabTwo
  }
}

class TabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab Two',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabTwo
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
export default connect(mapStateToProps)(TabTwoNavigation)
