import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'

import MainCard from '../components/MainCard';
import IStore from '../store/store-type';
import { fetchTodayAlbums } from '../store/albums/albums-actions';
import { IAlbumsState } from '../store/albums/albums-selectors';
import { IconButton } from 'react-native-paper'

interface Props {
  navigation?: any
  albums?: IAlbumsState;
  onFetchTodayAlbums: () => void;
}

const HomeScreen = ({ navigation, albums, onFetchTodayAlbums }: Props) => {
  navigation.setOptions({
    iconLeft: 'account-circle',
    iconRight: 'chat',
    headerLeft: () => (
      <IconButton
        color={'#fff'}
        icon={'chat'}
        onPress={() => navigation.navigate('Chat')}
      />
    ),
    headerRight: () => (
      <IconButton
        icon={'account-circle'}
        color={'#fff'}
        onPress={() => navigation.navigate('Profile')}
      />
    ),
  });

  React.useEffect(() => {
    onFetchTodayAlbums();
  }, [onFetchTodayAlbums])


  const onDisliked = (albumId: string) => {
    //? add to disliked user
    const dislikedAlbums = [];
  }

  const onLiked = (albumId: string, userId: string) => {
    //
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {albums?.data?.map((cardData: any) => (
            <MainCard
              key={cardData.key}
              cardData={cardData}
              onLike={() => onLiked(cardData.id, cardData.userId)}
              onDisliked={() => onDisliked(cardData.id)}
            />
          ))}
          {albums?.loading && <ActivityIndicator />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
const mapState = (state: IStore) => ({
  albums: state.albums,
})
const mapDispatch = {
  onFetchTodayAlbums: fetchTodayAlbums,
};
export default connect(mapState, mapDispatch)(HomeScreen);