import React from 'react'
import { Icon, SimpleLineIcons } from 'expo'

import { lightPurple, white, purple } from '../constants/Colors'

export class SimpleLineIcon extends React.Component {
  render() {
    return (
      <Icon.SimpleLineIcons
        color={lightPurple}
        name={this.props.name}
        size={30}
        style={{ marginBottom: -3 }}
      />
    )
  }
}
