import {StyleSheet} from "react-native";

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 55,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
      color: '#e65c00',
      fontFamily: 'BungeeSpice-Regular',
      fontSize: 24,
    },
    subtitle: {
      color: '#e65c00',
      fontFamily: 'BungeeSpice-Regular',
      fontSize: 24,
      marginBottom: 12,
    },
    nameForm: {
      alignItems: 'center',
    },
    label: {
      fontFamily: 'BungeeSpice-Regular',
      fontSize: 14,
      marginBottom: 10,
    },
    input: {
      padding: 8,
      paddingHorizontal: 12,
      fontSize: 16,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'green',
      borderRadius: 20,
      width: 250,
      marginBottom: 15,
      fontFamily: 'BungeeSpice-Regular',
    },
  })
}

export {Styles};
