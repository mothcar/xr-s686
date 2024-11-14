import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import "./App.css";

const store = createXRStore();

function App() {
  const [red, setRed] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => store.enterAR()}>Enter AR</button>
        <Canvas>
          <XR store={store}>
            <mesh
              pointerEventsType={{ deny: "grab" }}
              onClick={() => setRed(!red)}
              position={[0, 1, -1]}
            >
              <boxGeometry />
              <meshBasicMaterial color={red ? "red" : "blue"} />
            </mesh>
          </XR>
        </Canvas>
      </div>
      <h1>Vite + React</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
