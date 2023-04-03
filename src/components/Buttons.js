import React from 'react'
import Button from 'react-bootstrap/Button'
import Stack from'react-bootstrap/Stack'
import {Link} from 'react-router-dom'
const Buttons = () => {
  return (
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    <Link to='/Hotelpage'>List your Hotel</Link>
  </Button>
  <Button as="a" variant="primary">
    <Link to='/userpage'>List your Homestay</Link>
  </Button>
</Stack>
  )
}

export default Buttons