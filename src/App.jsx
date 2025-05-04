import "./App.css";
import { ShaderGradient } from "@shadergradient/react";
import { ShaderGradientCanvas } from "@shadergradient/react";
import Topbar from "./composents/topbar";
import Home from "./pages/home";
import Week from "./pages/week";
import Gta3 from "./pages/gta3";
import Gtavc from "./pages/gtavc";
import Gtasa from "./pages/gtasa";
import Gtav from "./pages/gtav";
import { Routes, Route } from "react-router";
import Login from "./pages/login";
function App() {
  return (
    <>
      <ShaderGradientCanvas
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          zIndex: -5,
        }}
        lazyLoad={true}
        fov={undefined}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="waterPlane"
          wireframe={true}
          shader="defaults"
          uTime={5}
          uSpeed={0.2}
          uStrength={1}
          uDensity={2}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={60}
          rotationY={0}
          rotationZ={30}
          color1="#C2D6A3"
          color2="#63875B"
          color3="#C2D6A3"
          reflection={0.4}
          // View (camera) props
          cAzimuthAngle={180}
          cPolarAngle={70}
          cDistance={2.5}
          cameraZoom={1}
          // Effect props
          lightType="3d"
          brightness={1.3}
          envPreset="city"
          grain="off"
          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week" element={<Week />} />
        <Route path="/gta3" element={<Gta3 />} />
        <Route path="/gtavc" element={<Gtavc />} />
        <Route path="/gtasa" element={<Gtasa />} />
        <Route path="/gtav" element={<Gtav />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
