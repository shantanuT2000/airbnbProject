import React from 'react'
import Button from 'react-bootstrap/Button'
import Stack from'react-bootstrap/Stack'
const Buttons = () => {
  return (
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    List your Hotel
  </Button>
  <Button as="a" variant="primary">
    List your Homestay
  </Button>
</Stack>
  )
}

export default Buttons