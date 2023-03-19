import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

const Buttons = () => {
  return (
    <div>
        <MDBBtn className='me-1'>
        Primary
      </MDBBtn>
      <MDBBtn className='me-1' color='secondary'>
        Secondary
      </MDBBtn>
      <MDBBtn className='mx-2' color='tertiary' rippleColor='light'>
        Tertiary
      </MDBBtn>
    </div>
  )
}

export default Buttons