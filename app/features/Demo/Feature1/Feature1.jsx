import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import Component1 from './components/ComponentDummy'

class Feature1 extends Component {
  /**
   * Class constructor.
   */
  componentDidMount () {
    this.props.actions.getIfNeeded()
  }
  /**
   * Render the component.
   */
  render () {
    return (
      <Component1 data={this.props.feature1.data} errors={this.props.feature1.errors} message={this.props.feature1.message}
      />)
  }
}

Feature1.contextTypes = {
  router: PropTypes.object.isRequired
}

Feature1.propTypes = {
  feature1: PropTypes.object.isRequired
}
function mapStateToProps (state) {
  const { feature1 } = state.demo

  return {
    feature1
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Feature1)
