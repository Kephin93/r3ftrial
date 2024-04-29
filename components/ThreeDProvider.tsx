"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";

import Island from "@/sources/gltf/Islands2";

import { Canvas, useLoader } from "@react-three/fiber";

import {
  BakeShadows,
  Billboard,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Shadow,
  SoftShadows,
  SpriteAnimator,
  Stars,
  Text,
  Text3D,
} from "@react-three/drei";

interface ThreeDProvProps {
  rounded?: boolean;
  className?: string;
  theme?: "light" | "dark";
}

export default function ThreeDProvider(props: ThreeDProvProps) {
  const { rounded = false, className = "", theme = "dark" } = props;
  const [autoRotate, setAutoRotate] = useState({ rotate: true, speed: 0.2 });
  const plRef = useRef<any>();

  return (
    <div
      id="canvas-container"
      className={` h-full ${className} ${rounded && "rounded-full"}`}
    >
      <Canvas
        shadows
        className={`h-full bg-neutral-800 w-full ${rounded && "rounded-full"}`}
      >
        {/* Cameras */}
        <PerspectiveCamera
          fov={80}
          near={1}
          far={200}
          position={[-50, 50, 50]}
          makeDefault
        />
        <Environment
          // background
          files={theme === "dark" ? "nightsky.hdr" : "/sky2.hdr"}
        />

        {/* Lights */}
        {/* <ambientLight intensity={Math.PI / 12} /> */}
        {/* <directionalLight intensity={0.8} /> */}
        {/* <pointLight
          color={"white"}
          ref={plRef}
          intensity={1000}
          position={[60, 30, 30]}
          castShadow
        /> */}

        {/* <pointLightHelper light={plRef} /> */}
        {/* <spotLight position={[10, 15, 10]} angle={0.25} /> */}

        {/* Objects */}
        {theme === "dark" && (
          <Stars
            radius={25}
            depth={50}
            count={1200}
            factor={5}
            saturation={1}
            fade
            speed={1}
          />
        )}

        <Suspense fallback={null}>
          <Island position={[0, 0, 0]} />
          {/* <Sun /> */}
          <Billboard>
            <Text position={[0, 30, 20]}>Hannlync!</Text>
          </Billboard>
          {/* <Text3D
            smooth={1}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >{`hello\nworld`}</Text3D> */}
          {/* <SpriteAnimator
            position={[0, 10, 20]}
            startFrame={0}
            // scaleFactor={0.25}
            autoPlay={true}
            loop={true}
            numberOfFrames={16}
            textureImageURL={"./Button1.png"}
          /> */}
        </Suspense>

        {/* Controls */}
        <OrbitControls
          rotateSpeed={0.5}
          autoRotate={autoRotate.rotate}
          autoRotateSpeed={autoRotate.speed}
          // polar is limiting up n down
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          // azimuth is limiting left n right
          // minAzimuthAngle={Math.PI / 64}
          // maxAzimuthAngle={Math.PI}
          minDistance={18}
          maxDistance={100}
          onEnd={(e) => {
            console.log(e);
            setAutoRotate((prev) => {
              return { rotate: true, speed: -prev.speed };
            });
          }}
          // makeDefault
        />
      </Canvas>
    </div>
  );
}
