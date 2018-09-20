import React from 'react'
import { Icon } from 'expo'

import { tabIconSelected, tabIconDefault } from '../constants/Colors'

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        color={this.props.focused ? tabIconSelected : tabIconDefault}
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
      />
    )
  }
}
