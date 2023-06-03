import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";

import MockData from '../../mocks/user.json'
import { FeedCard } from "../../components";
import { FeedStyle } from './styles'

const Feed: React.FC = () => {
  const { feed } = MockData;
  return (
    <ScrollView contentContainerStyle={FeedStyle.container}>
      <>
        {feed.map((data) => <FeedCard data={data} />)}
      </>
    </ScrollView>
  );
}

export default Feed;
