import {StyleSheet} from "react-native";

const Styles = () => {
  return StyleSheet.create({
    button: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 5,
    },
    buttonText: {
      fontFamily: 'BungeeSpice-Regular',
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
  })
}

export {Styles};
