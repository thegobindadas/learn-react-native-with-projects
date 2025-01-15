import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';


const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



const App = (): JSX.Element => {

  const colorScheme = useColorScheme();
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState<string[]>(Array(9).fill('empty'));


  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(Array(9).fill('empty'));
  };


  const checkIsWinner = (newGameState: string[]) => {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
      if (
        newGameState[a] !== 'empty' &&
        newGameState[a] === newGameState[b] &&
        newGameState[a] === newGameState[c]
      ) {
        setGameWinner(`${newGameState[a]} won the game! 🥳`);
        return;
      }
    }

    if (!newGameState.includes('empty')) {
      setGameWinner('It\'s a draw! ⌛️');
    }
  };


  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000',
        textColor: '#FFF',
      });
      return;
    }

    if (gameState[itemNumber] === 'empty') {
      const newGameState = [...gameState];
      newGameState[itemNumber] = isCross ? 'cross' : 'circle';
      setGameState(newGameState);
      setIsCross(!isCross);
      checkIsWinner(newGameState);
    } else {
      Snackbar.show({
        text: 'Position already filled!',
        backgroundColor: 'red',
        textColor: '#FFF',
      });
    }
  };


  return (
    <SafeAreaView style={[styles.safeArea, colorScheme === 'dark' ? styles.darkBackground : styles.lightBackground]}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      {gameWinner ? (
        <View
          style={[
            styles.playerInfo,
            styles.winnerInfo,
            colorScheme === 'dark' ? styles.darkCard : styles.lightCard
          ]}
        >
          <Text
            style={[
              styles.winnerTxt,
              colorScheme === 'dark' ? styles.darkText : styles.lightText
            ]}
          >
            {gameWinner}
          </Text>
        </View>
      ) : (
        <View
          style={[
            styles.playerInfo,
            isCross ? styles.playerX : styles.playerO,
            colorScheme === 'dark' ? styles.darkCard : styles.lightCard
          ]}
        >
          <Text
            style={[
              styles.gameTurnTxt,
              colorScheme === 'dark' ? styles.darkText : styles.lightText
            ]}
          >
            Player {isCross ? 'X' : 'O'}'s Turn
          </Text>
        </View>
      )}

      {/* Game Grid */}
      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.grid}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={[styles.card, colorScheme === 'dark' ? styles.darkCard : styles.lightCard]}
            onPress={() => onChangeItem(index)}
          >
            <Icons name={item} />
          </Pressable>
        )}
      />

      {/* Game Action Button */}
      <Pressable
        style={[
          styles.gameBtn,
          colorScheme === 'dark' ? styles.darkCard : styles.lightCard
        ]}
        onPress={reloadGame}
      >
        <Text
          style={[
            styles.gameBtnText,
            colorScheme === 'dark' ? styles.darkText : styles.lightText
          ]}
        >
          {gameWinner ? 'Start new game' : 'Reload the game'}
        </Text>
      </Pressable>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  playerInfo: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',
    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  darkCard: {
    backgroundColor: '#2C2C2C',
    borderColor: '#444',
    shadowColor: '#222',
  },
  darkText: {
    color: '#E0E0E0',
  },
  lightCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#DDD',
    shadowColor: '#CCC',
  },
  lightText: {
    color: '#333',
  },
  safeArea: {
    flex: 1,
  },
  darkBackground: {
    backgroundColor: '#121212',
  },
  lightBackground: {
    backgroundColor: '#FFFFFF',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
});



export default App;