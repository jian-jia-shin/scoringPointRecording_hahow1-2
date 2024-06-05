import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  //計分初始設定
  const [p1score, setP1score] = useState(0);
  const [p2score, setP2score] = useState(0);
  const [countSuitPics, setCountSuitPics] = useState(0);

  function p1clickAddBtns() {
    if (p1score < 10) {
      setP1score(p1score + 1)
    } else {
      setP1score(p1score)
    }
  }
  function p1clickMinusBtns() {
    if (p1score > 0) {
      setP1score(p1score - 1)
    } else {
      setP1score(p1score)
    }
  }
  function p2clickAddBtns() {
    if (p2score < 10) {
      setP2score(p2score + 1)
    } else {
      setP2score(p2score)
    }
  }
  function p2clickMinusBtns() {
    if (p2score > 0) {
      setP2score(p2score - 1)
    } else {
      setP2score(p2score)
    }
  }
  function resetScoring() {
    setP1score(0)
    setP2score(0)
  }

  //花色圖片_路徑矩陣，轉換圖片，為顯示的圖片取中文名稱
  const suitPictures = {
    0: require('./src/img/suit-Spades.png'),
    1: require('./src/img/suit-Hearts.png'),
    2: require('./src/img/suit-Diamonds.png'),
    3: require('./src/img/suit-Clubs.png')
  }

  function suitPicturesChange() {
    setCountSuitPics((countSuitPics + 1) % 4)
  }

  function suitNameShow() {
    if (countSuitPics == 0) {
      return '黑桃'
    }
    if (countSuitPics == 1) {
      return '紅心'
    }
    if (countSuitPics == 2) {
      return '方塊'
    }
    if (countSuitPics == 3) {
      return '梅花'
    }
  }
  //版面製作(注意:因為鍵盤的負號比加號還要短，因此用(--)來代替(-))
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 25, fontSize: 35 }}>雙方計分區</Text>

      <Text style={{ fontSize: 25 }}>玩家組隊1</Text>
      <View style={styles.scoringViewDesign}>
        <TouchableOpacity
          onPress={p1clickMinusBtns}
          style={styles.btnsScoringControl}>
          <Text style={styles.btnsScoingTextView}>(--)</Text>
        </TouchableOpacity>
        <Text style={styles.scoingText}>
          {p1score}
        </Text>
        <TouchableOpacity
          onPress={p1clickAddBtns}
          style={styles.btnsScoringControl}>
          <Text style={styles.btnsScoingTextView}>(+)</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 25 }}>玩家組隊2</Text>
      <View style={styles.scoringViewDesign}>
        <TouchableOpacity
          onPress={p2clickMinusBtns}
          style={styles.btnsScoringControl}>
          <Text style={styles.btnsScoingTextView}>(--)</Text>
        </TouchableOpacity>
        <Text style={styles.scoingText}>
          {p2score}
        </Text>
        <TouchableOpacity
          onPress={p2clickAddBtns}
          style={styles.btnsScoringControl}>
          <Text style={styles.btnsScoingTextView}>(+)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scoringViewDesign}>
        <TouchableOpacity
          onPress={resetScoring}
          style={styles.btnsResetScoringControl}>
          <Text style={styles.btnsScoingTextView}>重新計分</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ marginTop: 35, fontSize: 35 }}>本回合的花色是</Text>

      <View style={styles.trumpChooseViewDesign}>
        <Image
          style={styles.suitPicsSized}
          source={suitPictures[countSuitPics]} />

        <Text style={styles.suitTitleFontSized}>{suitNameShow(countSuitPics)}</Text>
      </View>
      <TouchableOpacity
        onPress={suitPicturesChange}
        style={styles.trumpChooseChangeViewDesign}>
        <Text style={styles.suitTitleFontSized}>更換花色</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoringViewDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  btnsScoringControl: {
    // padding: 5,
    backgroundColor: 'yellow',
    borderRadius: 5
  },
  scoingText: {
    padding: 5,
    textAlign: 'center',
    marginStart: 5,
    marginEnd: 5,
    fontSize: 40,
  },
  btnsScoingTextView: {
    padding: 5,
    textAlign: 'center',
    marginStart: 5,
    marginEnd: 5,
    fontSize: 20,
  },
  btnsResetScoringControl: {
    // padding: 5,
    backgroundColor: 'red',
    borderRadius: 5
  },
  trumpChooseViewDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  suitPicsSized: {
    width: 50,
    height: 50,
  },
  suitTitleFontSized: {
    textAlign: 'center',
    fontSize: 25,
  },
  trumpChooseChangeViewDesign: {
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});
