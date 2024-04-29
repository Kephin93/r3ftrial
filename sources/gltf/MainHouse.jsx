"use client";
import { Outlines, useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";

export default function MainHouse(props) {
  const { shine, isHoverable, setShine, onClick = () => {} } = props;
  const { nodes, materials } = useGLTF("/Islands2.glb");

  const toggleShine = () => {
    if (isHoverable) setShine((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.cursor = shine ? "pointer" : "auto";
  }, [shine]);

  return (
    <group
      onPointerEnter={toggleShine}
      onPointerLeave={toggleShine}
      receiveShadow
      castShadow
      onClick={onClick}
    >
      <mesh
        geometry={nodes.polySurface11_roof1_0001.geometry}
        material={materials["roof1.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_1.geometry}
        material={materials["home_body.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_2.geometry}
        material={materials["wood.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_3.geometry}
        material={materials["totem.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_4.geometry}
        material={materials["phongE1.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_5.geometry}
        material={materials["windows_background.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_6.geometry}
        material={materials["roof3.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_7.geometry}
        material={materials["windows_frame.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_8.geometry}
        material={materials["wood2.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_9.geometry}
        material={materials["roof2.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_10.geometry}
        material={materials["rocks.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_11.geometry}
        material={materials["totem2.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_12.geometry}
        material={materials["fox_readyfox_body.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_13.geometry}
        material={materials["fox_readyfox_white.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_14.geometry}
        material={materials["fox_readyfox_black.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
      <mesh
        geometry={nodes.polySurface11_roof1_0001_15.geometry}
        material={materials["shovel2.001"]}
      >
        {isHoverable && (
          <Outlines
            isGroup={true}
            thickness={shine ? 0.25 : 0}
            opacity={0.1}
            color={"green"}
          />
        )}
      </mesh>
    </group>
  );
}

useGLTF.preload("/Islands2.glb");
