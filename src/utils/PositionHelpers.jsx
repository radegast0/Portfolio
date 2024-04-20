import React from 'react'

const PositionHelpers = () => {
  return (
    <>
        <mesh position={[-2, 2.8, -5.45]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh position={[-0, 3.3, -6.1]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
            
    </>
  )
}

export default PositionHelpers