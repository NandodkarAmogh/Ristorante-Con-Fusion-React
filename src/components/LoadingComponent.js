import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const LoadingComponent = () => {
  return (
    <div className='col-12'>
        <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  )
}

export default LoadingComponent