import { GroupProps } from "@react-three/fiber";
import { ReactNode } from "react";
import { Group, Mesh, Object3D, Object3DEventMap } from "three";

export interface PlaneProps extends Mesh {
  name: string;
  isHoverable: boolean;
  reflect?: boolean;
}

export interface GroupEffectProps extends GroupProps {
  name: string;
  isHoverable: boolean;
  reflect?: boolean;
}
