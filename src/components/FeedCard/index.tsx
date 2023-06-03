import React, { FC } from 'react';
import { View } from "react-native"
import TextComponent from '../Text';
import EmojiComponent from '../Emoji';

import { FeedCardStyle } from "./styles";

interface FeedCardProps {
  data: {
    comments: string;
    emoji: number
  };
}

const FeedCard: FC<FeedCardProps> = ({ data }: FeedCardProps) => {
  return (
    <View style={FeedCardStyle.container}>
      <TextComponent type="text" text={data.comments} />
      <EmojiComponent index={data.emoji} />
    </View>
  );
}

export default FeedCard;
