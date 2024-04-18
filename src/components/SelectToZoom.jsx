import { useBounds } from '@react-three/drei';

const SelectToZoom = ({ children }) => {
	const api = useBounds();
    return (
        <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())}>
          {children}
        </group>
      )
};

export default SelectToZoom;
