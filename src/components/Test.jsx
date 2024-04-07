import React from 'react'

const Test = ({x,y,z}) => {
  return (
    <mesh position={[x,y,z]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
    </mesh>
  )
}

export default Test