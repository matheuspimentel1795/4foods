import React from 'react'
import styled from 'styled-components'

const ErrorMessage = (props) => {

const Span = styled.div`
    color:#e8222e
`
  return (
    <Span>
        {props.errorMsg}
    </Span>
  )
}

export default ErrorMessage