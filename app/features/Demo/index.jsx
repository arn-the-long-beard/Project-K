
import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Helmet } from 'react-helmet'
import styles from './styles/styles.scss'
import PropTypes from 'prop-types'

import Feature1 from './Feature1/Feature1'

const Demo = () => (
  <div className={styles.container}>
    <Helmet>
      <title>Demo</title>
      <meta name='description' content='test the UI and the Iota library' />
    </Helmet>

    <Feature1 />
  </div>
)
Demo.contextTypes = {
  router: PropTypes.object.isRequired,
  insertCss: PropTypes.func
}

export default withStyles(styles)(Demo)
