const express = require('express')
const router = new express.Router()
const IOTA = require('iota.lib.js')

const iota = new IOTA({
  'provider': 'http://localhost:14265'
})

// now you can start using all of the functions

router.get('', (req, res) => {
  iota.api.getNodeInfo((error, info) => {
    if (error) {
      console.error(error)
      return res.status(409).json({
        success: false,
        message: 'Error with Iota',
        errors: error
      })
    } else {
      console.log(info)

      iota.api.getTips((error, tips) => {
        if (error) {
          console.error(error)
          return res.status(409).json({
            success: false,
            message: 'Error with Iota',
            errors: error
          })
        }
        console.error(tips)
        return res.status(200).json({
          success: true,
          message: 'You fetched data',
          data: {dummy: 'dummy', info, tips}
        })
      })
    }
  })
})

module.exports = router
