import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@pancakeswap/uikit'

const Wrapper = styled(styled)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default PageLoader
