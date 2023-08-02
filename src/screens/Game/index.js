import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {normalize} from '../../assets/assets/assets/RootStyles';
import {piratesQuestions} from '../../assets/assets/assets/MockData';
import {Colors, FullScreen as fullScreen} from '../../assets/assets/assets/RootStyles';
import {isEmpty} from 'lodash';
import Lottie from 'lottie-react-native';

const PiratesQuest = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const percentage = (currentQuestion * 100) / piratesQuestions.length;
  const [modalVisible, setModalVisible] = useState(false);
  const [coins, setCoins] = useState(100);
  const [animation, setStartAnimation] = useState(false);
  const Name = props.route.params.name;
  useEffect(() => {
    if (coins === 0) {
      setModalVisible(true);
    }
  }, [coins]);
  return (
    <ImageBackground
      source={require('../../assets/assets/assets/pirates_bg.jpeg')}
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: normalize(16),
        }}>
        <Text style={{color: 'white', marginTop: normalize(20), marginBottom: normalize(10), marginLeft: normalize(5), fontSize: normalize(16), fontFamily: 'Lugrasimo-Regular'}}>Hello {Name}</Text>
        <FlatList
          data={piratesQuestions[currentQuestion]?.options}
          ListHeaderComponent={() => {
            console.log(animation);
            return (
              <View
                style={{
                  backgroundColor: 'rgba(72, 72, 72, 0.8)',
                  borderRadius: normalize(12),
                  marginBottom: normalize(30),
                  paddingHorizontal: normalize(10),
                  paddingBottom: normalize(15),
                  paddingTop: normalize(5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../assets/assets/assets/coin.png')}
                    style={{width: normalize(20), height: normalize(20)}}
                  />
                  <Text
                    style={{
                      fontFamily: 'Lugrasimo-Regular',
                      fontSize: normalize(18),
                      marginLeft: normalize(10),
                      color: Colors.white,
                    }}>
                    {coins}
                  </Text>
                </View>
                {animation ? (
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      left: -normalize(10),
                      top: 0,
                      zIndex: 999,
                    }}>
                    <Lottie
                      source={require('../../assets/assets/assets/coins-animation.json')}
                      autoPlay
                      loop
                      duration={1200}
                    />
                  </View>
                ) : null}
                <View
                  style={{
                    width: '100%',
                    height: normalize(10),
                    backgroundColor: '#B3BBC4',
                    borderRadius: normalize(12),
                    marginTop: normalize(10),
                  }}>
                  <ImageBackground
                    source={require('../../assets/assets/assets/fire.jpeg')}
                    style={{
                      width: `${percentage}%`,
                      height: normalize(10),
                    }}
                    resizeMode={'cover'}
                    borderRadius={normalize(12)}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: 'Lugrasimo-Regular',
                    fontSize: normalize(18),
                    lineHeight: normalize(28),
                    color: Colors.white,
                  }}>
                  {currentQuestion + '/' + piratesQuestions.length}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lugrasimo-Regular',
                    fontSize: normalize(20),
                    lineHeight: normalize(28),
                    color: Colors.white,
                  }}>
                  {piratesQuestions[currentQuestion]?.question}
                </Text>
              </View>
            );
          }}
          renderItem={({item}) => {
            const selected = item === selectedAnswer;
            const isCorrect =
              piratesQuestions[currentQuestion].answer === selectedAnswer;
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedAnswer(item);
                  if (piratesQuestions[currentQuestion].answer === item) {
                    setCorrectAnswer(correctAnswer + 1);
                    setCoins(coins + 10);
                    setStartAnimation(true);
                  } else {
                    if (coins > 0) {
                      setCoins(coins - 10);
                    }
                  }
                  if (currentQuestion < piratesQuestions.length - 1) {
                    setTimeout(() => {
                      setCurrentQuestion(currentQuestion + 1);
                      setSelectedAnswer('');
                      setStartAnimation(false);
                    }, 1000);
                  } else {
                    setCurrentQuestion(currentQuestion + 1);
                    setModalVisible(true);
                  }
                }}
                disabled={!isEmpty(selectedAnswer)}
                activeOpacity={0.8}
                style={{
                  backgroundColor: selected
                    ? isCorrect
                      ? 'rgba(60, 179, 113, .8)'
                      : 'rgba(255,0,0, .8)'
                    : 'rgba(72, 72, 72,.8)',
                  paddingVertical: normalize(12),
                  borderRadius: normalize(12),
                  paddingHorizontal: normalize(15),
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: normalize(10),
                  opacity: modalVisible ? 0 : 1,
                }}>
                <Image
                  source={require('../../assets/assets/assets/pirate.png')}
                  style={{
                    width: normalize(50),
                    height: normalize(50),
                    marginRight: normalize(10),
                  }}
                />
                <Text style={{fontFamily: 'Lugrasimo-Regular', color: Colors.white}}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Modal
        statusBarTranslucent
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {}}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              backgroundColor: 'rgba(77,77,77,.4)',
              zIndex: 999,
              justifyContent: 'center',
              paddingBottom: normalize(32),
            }}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View
                style={{
                  marginHorizontal: normalize(16),
                  borderRadius: normalize(12),
                  padding: normalize(16),
                  alignItems: 'center',
                  backgroundColor: 'rgba(72, 72, 72,.8)',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{fontFamily: 'Lugrasimo-Regular', fontSize: normalize(16), color: Colors.green["600"]}}>
                      Correct answers
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lugrasimo-Regular',
                        fontSize: normalize(22),
                        color: Colors.green["600"],
                      }}>
                      {correctAnswer}
                    </Text>
                  </View>
                  <View
                    style={{marginLeft: normalize(10), alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Lugrasimo-Regular', fontSize: normalize(16), color: Colors.red["600"]}}>
                      Incorrect answers
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lugrasimo-Regular',
                        fontSize: normalize(22),
                        color: Colors.red["600"],
                      }}>
                      {currentQuestion - correctAnswer}
                    </Text>
                  </View>
                </View>
                {correctAnswer === piratesQuestions.length ? (
                  <ImageBackground
                    source={require('../../assets/assets/assets/coins.png')}
                    style={{width: normalize(160), height: normalize(160)}}>
                    <View
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: -normalize(80),
                      }}>
                      <Lottie
                        source={require('../../assets/assets/assets/coins.json')}
                        autoPlay
                        loop
                      />
                    </View>
                  </ImageBackground>
                ) : null}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setCurrentQuestion(0);
                    setCorrectAnswer(0);
                    setCoins(100);
                    setStartAnimation(false);
                    setSelectedAnswer('');
                    setModalVisible(false);
                  }}
                  style={{
                    width: fullScreen.width - normalize(64),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: normalize(8),
                    backgroundColor: '#0A2540',
                    paddingVertical: normalize(12),
                    marginTop: normalize(20),
                  }}>
                  <Text style={{fontFamily: 'Lugrasimo-Regular', color: Colors.white}}>Retry</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ImageBackground>
  );
};

export default PiratesQuest;
