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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />

      <View
        style={[
          styles.playerInfo,
          gameWinner ? styles.winnerInfo : isCross ? styles.playerX : styles.playerO,
        ]}
      >
        <Text style={styles.gameTurnTxt}>
          {gameWinner || `Player ${isCross ? 'X' : 'O'}'s Turn`}
        </Text>
      </View>

      <FlatList
        data={gameState}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable
            style={styles.card}
            onPress={() => onChangeItem(index)}
          >
            <Icons name={item} />
          </Pressable>
        )}
        contentContainerStyle={styles.grid}
      />

      <Pressable style={styles.gameBtn} onPress={reloadGame}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start New Game' : 'Reload Game'}
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
    margin: 12,
    borderRadius: 4,
  },
  gameTurnTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  winnerInfo: {
    backgroundColor: '#8D3DAF',
  },
  grid: {
    marginHorizontal: 12,
  },
  card: {
    height: 100,
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  gameBtn: {
    padding: 12,
    backgroundColor: '#8D3DAF',
    marginHorizontal: 36,
    marginTop: 20,
    borderRadius: 8,
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
});



export default App;