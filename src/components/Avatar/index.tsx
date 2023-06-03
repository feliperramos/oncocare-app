import React, { FC } from "react";

import { Image } from "react-native";

import { AvatarStyle } from "./styles";

interface AvatarProps {
  src: string;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return <Image style={AvatarStyle.small} source={require(src)} />
}

export default Avatar;
