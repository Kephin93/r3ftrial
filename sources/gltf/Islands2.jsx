/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\Islands2.glb 
*/

import React, { useEffect, useRef, useState } from "react";
import { Outlines, useGLTF } from "@react-three/drei";
import HouseWrapper from "./HouseWrapper";
import MainHouse from "./MainHouse";
import BigHouse from "./BigHouse";
import MedHouse from "./MedHouse";
import SmHouse from "./SmHouse";

export default function Islands2(props) {
  const { nodes, materials } = useGLTF("/Islands2.glb");
  const [outlineMaH, setOutlineMaH] = useState(false);
  const [outlineBgH, setOutlineBgH] = useState(false);
  const [outlineMdH, setOutlineMdH] = useState(false);
  const [outlineSmH, setOutlineSmH] = useState(false);

  const onClick = (e) => {
    console.log(`${name} is clicked`);
  };

  return (
    <group {...props} dispose={null}>
      <group name="MainHouse" position={[0, 4.256, 0]}>
        <MainHouse
          shine={outlineMaH}
          setShine={setOutlineMaH}
          isHoverable
          onClick={onclick}
        />
      </group>
      <group name="MainLand" position={[0.124, 0.509, 0.226]}>
        <mesh
          geometry={nodes.pSphere1_ground_0001.geometry}
          material={materials["ground.001"]}
        />
        <mesh
          geometry={nodes.pSphere1_ground_0001_1.geometry}
          material={materials["floor.001"]}
        />
      </group>
      <mesh
        name="stones"
        geometry={nodes.Stones.geometry}
        material={materials["rocks1.001"]}
        position={[0, 0.853, 0]}
      >
        <Outlines />
      </mesh>
      <group name="BgHouse" position={[0, 2.961, 0]}>
        <BigHouse
          shine={outlineBgH}
          setShine={setOutlineBgH}
          isHoverable
          onClick={onclick}
        />
      </group>
      <group name="WellIsland" position={[-3.734, 5.489, -3.206]}>
        <mesh
          geometry={nodes.polySurface1544_wood2_0001.geometry}
          material={materials["wood2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1544_wood2_0001_1.geometry}
          material={materials["floor2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1544_wood2_0001_2.geometry}
          material={materials["ground.001"]}
        />
        <mesh
          geometry={nodes.polySurface1544_wood2_0001_3.geometry}
          material={materials["rocks2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1544_wood2_0001_4.geometry}
          material={materials["shovel2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1544_wood2_0001_5.geometry}
          material={materials["wood.001"]}
        />
        <mesh
          geometry={nodes.polySurface1544_wood2_0001_6.geometry}
          material={materials["bricks_2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1544_wood2_0001_7.geometry}
          material={materials["water.001"]}
        />
      </group>
      <group name="MdHouse" position={[0, 3.037, 0]}>
        <MedHouse
          shine={outlineMdH}
          setShine={setOutlineMdH}
          isHoverable
          onClick={onclick}
        />
      </group>
      <group name="SmHouse" position={[0, 2.037, 0]}>
        <SmHouse
          shine={outlineSmH}
          setShine={setOutlineSmH}
          isHoverable
          onClick={onclick}
        />
      </group>
      <group name="Trees" position={[17.52, 4.133, -16.258]}>
        <mesh
          geometry={nodes.polySurface1054_tree2_0001.geometry}
          material={materials["tree2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1054_tree2_0001_1.geometry}
          material={materials["tree1.001"]}
        />
        <mesh
          geometry={nodes.polySurface1054_tree2_0001_2.geometry}
          material={materials["tree_body.001"]}
        />
        <mesh
          geometry={nodes.polySurface1054_tree2_0001_3.geometry}
          material={materials["lambert2.001"]}
        />
      </group>
      <group name="FoxIsland" position={[-29.051, 3.86, 18.484]}>
        <mesh
          geometry={nodes.polySurface1188_floor2_0001.geometry}
          material={materials["floor2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_1.geometry}
          material={materials["fox_readyfox_body.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_2.geometry}
          material={materials["fox_readyfox_white.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_3.geometry}
          material={materials["fox_readyfox_black.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_4.geometry}
          material={materials["ground.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_5.geometry}
          material={materials["windows_frame.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_6.geometry}
          material={materials["tree_body.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_7.geometry}
          material={materials["tree2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_8.geometry}
          material={materials["tree1.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_9.geometry}
          material={materials["rocks1.001"]}
        />
        <mesh
          geometry={nodes.polySurface1188_floor2_0001_10.geometry}
          material={materials["lambert2.001"]}
        />
      </group>
      <group name="CrtIsland" position={[17.472, 3.843, 30.492]}>
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001.geometry}
          material={materials["windows_frame.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_1.geometry}
          material={materials["floor2.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_2.geometry}
          material={materials["ground.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_3.geometry}
          material={materials["roof2.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_4.geometry}
          material={materials["tree1.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_5.geometry}
          material={materials["tree2.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_6.geometry}
          material={materials["roof1.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_7.geometry}
          material={materials["rocks2.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_8.geometry}
          material={materials["leika2.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_9.geometry}
          material={materials["shovel2.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_10.geometry}
          material={materials["wood2.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_11.geometry}
          material={materials["fox_readyfox_body.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_12.geometry}
          material={materials["fox_readyfox_white.001"]}
        />
        <mesh
          geometry={nodes.polySurface898_windows_frame_0001_13.geometry}
          material={materials["fox_readyfox_black.001"]}
        />
      </group>

      <group name="FrntTotem">
        <mesh
          geometry={nodes.polySurface1125_totem2_0001.geometry}
          material={materials["totem2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1125_totem2_0001_1.geometry}
          material={materials["roof3.001"]}
        />
        <mesh
          geometry={nodes.polySurface1125_totem2_0001_2.geometry}
          material={materials["phongE1.001"]}
        />
        <mesh
          geometry={nodes.polySurface1125_totem2_0001_3.geometry}
          material={materials["totem.001"]}
        />
        <mesh
          geometry={nodes.polySurface1125_totem2_0001_4.geometry}
          material={materials["roof1.001"]}
        />
      </group>

      <group name="BackTotem">
        <mesh
          geometry={nodes.polySurface1214_totem2_0001.geometry}
          material={materials["totem2.001"]}
        />
        <mesh
          geometry={nodes.polySurface1214_totem2_0001_1.geometry}
          material={materials["roof3.001"]}
        />
        <mesh
          geometry={nodes.polySurface1214_totem2_0001_2.geometry}
          material={materials["phongE1.001"]}
        />
        <mesh
          geometry={nodes.polySurface1214_totem2_0001_3.geometry}
          material={materials["totem.001"]}
        />
        <mesh
          geometry={nodes.polySurface1214_totem2_0001_4.geometry}
          material={materials["roof1.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Islands2.glb");