import { Helmet } from 'react-helmet'
import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import styles from './styles/styles.scss'
const About = () => (
  <div className={styles.container}>
    <Helmet>
      <title>About</title>
      <meta name='description' content='what the platform is about' />
    </Helmet>
    <p className={styles.text}>Testing the Iota Blockchain</p>
  </div>
)
About.contextTypes = {
  router: PropTypes.object.isRequired,
  insertCss: PropTypes.func
}

export default withStyles(styles)(About)
