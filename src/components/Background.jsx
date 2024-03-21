import { Plane } from "@react-three/drei"

const Background = () => {
  return (
    <>
    <Plane args={[10,10]} position={[0,0,-6]}>
      <meshBasicMaterial color={'hotpink'} />
    </Plane>
    <Plane args={[10,10]} position={[5,0,-1]} rotation={[0, -Math.PI / 2, 0]}>
      <meshBasicMaterial color={'red'} />
    </Plane>
    <Plane args={[10,10]} position={[-5,0,-1]} rotation={[0, Math.PI / 2, 0]}>
      <meshBasicMaterial color={'green'} />
    </Plane>
    <Plane args={[10,10]} position={[0,5,-1]} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial color={'blue'} />
    </Plane>
    
    </>
  )
}

export default Background