"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  MeshReflectorMaterial,
  Outlines,
  Shadow,
  Stage,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { GroupEffectProps, PlaneProps } from "@/types/objectTypes";

export default function HouseWrapper(props: GroupEffectProps) {
  const { name, isHoverable, reflect = false } = props;
  const [shine, setShine] = useState(false);

  const toggleShine = () => {
    if (isHoverable) setShine((prev) => !prev);
  };

  useEffect(() => {
    console.log("hover");
    document.body.style.cursor = shine ? "pointer" : "auto";
  }, [shine]);

  return (
    <group
      {...props}
      name={name}
      onPointerEnter={toggleShine}
      onPointerLeave={toggleShine}
      receiveShadow
      castShadow
      onClick={(e) => {
        console.log(`${name} is clicked`);
      }}
    >
      {props.children}
    </group>
  );
}
