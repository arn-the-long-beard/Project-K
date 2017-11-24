import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import styles from '../styles/styles.scss'
const Inspector = require('react-json-inspector')

const ComponentDummy = ({data, errors, message}) => (

  <div className={styles.container}>
    <br />
    {errors &&
    <b>{errors}</b>
    }
    <br />
    {message &&
    <b>{message}</b>
    }

    {data.info && data.tips &&
    <Inspector className={styles.jsonInspector} data={data} />}
  </div>)

ComponentDummy.propTypes = {
  data: PropTypes.object.isRequired
}

ComponentDummy.contextTypes = {
  insertCss: PropTypes.func
}

export default withStyles(styles)(ComponentDummy)
