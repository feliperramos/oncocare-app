import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import MockData from '../../mocks/user.json'
import { Text, Button, FeedCard } from "../../components";
import { FeedStyle } from './styles'

const Feed: React.FC = () => {
  const { feed } = MockData;
  return (
    <View style={FeedStyle.container}>
      <Text text="Cuidar com carinho" type="slogan" />
      <>

        {feed.map((data) => <FeedCard message={data.comments} />)}
      </>
    </View>
  );
}

export default Feed;
