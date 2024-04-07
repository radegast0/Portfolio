import React from 'react'

const Test2 = ({x,y,z}) => {
  return (
    <mesh position={[x,y,z]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
    </mesh>
  )
}

export default Test2