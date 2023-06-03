import React, { FC } from 'react';

import { Image } from "react-native"

import EmojiSad2 from '../../assets/images/emoji-sad-2.png';
import EmojiSad1 from "../../assets/images/emoji-sad-1.png";
import EmojiNeutro from "../../assets/images/emoji-neutro.png";
import EmojiHappy1 from "../../assets/images/emoji-happy-1.png";
import EmojiHappy2 from '../../assets/images/emoji-happy-2.png';

import { EmojiStyle } from './styles';

interface EmojiProps {
  index: number;
}

const Emoji: FC<EmojiProps> = ({ index }) => {
  const emoji: any = [
    EmojiSad2, EmojiSad1, EmojiNeutro, EmojiHappy1, EmojiHappy2
  ];

  return <Image style={EmojiStyle.content} source={emoji[index]} />
};

export default Emoji;
