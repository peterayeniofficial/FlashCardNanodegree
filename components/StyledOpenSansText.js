import React from 'react'
import { Text } from 'react-native'

export class StyledOpenSansText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'OpenSans-Light' }]} />
  }
}
