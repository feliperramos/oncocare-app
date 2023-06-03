import React, { FC } from 'react';
import { View } from "react-native"
import TextComponent from '../Text';

import { FeedCardStyle } from "./styles";

interface FeedCardProps {
  message: string;
}

const FeedCard: FC<FeedCardProps> = ({ message }) => {
  return (
    <View style={FeedCardStyle.container}>
      <TextComponent type="text" text={message} />
    </View>
  );
}

export default FeedCard;
