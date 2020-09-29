import React, { FC } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import { Card, IconButton, FAB } from 'react-native-paper';

interface Props {
  cardData: any
  onLike: () => void
  onDisliked: () => void
}

/**
* @author 
* @function MainCard
**/


const MainCard: FC<Props> = ({ cardData, onDisliked, onLike }) => {

  const { albumUri, name, info } = cardData

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: albumUri }}
        style={{ height: 550, borderRadius: 3 }}
      />
      <Card.Title title={name} subtitle={info.toString()} />
      <Card.Actions>
        <View style={styles.actions}>
          <IconButton
            icon={'thumb-down'}
            onPress={onDisliked}
            style={styles.iconButton}
            size={40}
            color={'grey'}
          />
          <IconButton
            icon={'heart-multiple'}
            onPress={onLike}
            style={styles.iconButton}
            size={40}
            color={'red'}
          />
        </View>
      </Card.Actions>
    </Card>
  );
}


const styles = StyleSheet.create({
    card: {
      width: Dimensions.get('window').width - 40,
      marginTop: 50,
  },
  actions: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconButton: {
    margin: 16,
  }
});
export default MainCard