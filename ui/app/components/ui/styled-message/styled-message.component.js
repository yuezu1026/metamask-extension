import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoxedMessage from '../boxed-message'

import success from '../../../../../images/icons/green-circle-check.svg'
import danger from '../../../../../images/icons/red-triangle-exclaim.svg'
import info from '../../../../../images/icons/blue-circle-info.svg'
import warning from '../../../../../images/icons/yellow-bell.svg'

const typeConfig = {
  success: {
    boxClass: 'styled-message--success',
    iconSource: success,
  },
  danger: {
    boxClass: 'styled-message--danger',
    iconSource: danger,
  },
  info: {
    boxClass: 'styled-message--info',
    iconSource: info,
  },
  warning: {
    boxClass: 'styled-message--warning',
    iconSource: warning,
  },
}

export default class StyledMessage extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  render () {
    return (
      <BoxedMessage
        { ...typeConfig[this.props.type] }
        message={this.props.children}
        { ...this.props }
      />
    )
  }
}
