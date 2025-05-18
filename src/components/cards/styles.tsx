import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    wrapper: {
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
      overflow: 'hidden',
      backgroundColor: '#00000040', // just to show difference if needed
    },
    glassCard: {
      backgroundColor:colors.expresso , // semi-transparent glass look
      padding: 16,
    //   borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.expresso,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5, // for Android shadow
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    title: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
    subtitle: {
      color: '#eee',
      marginTop: 4,
      fontWeight:'600'
    },
    note: {
      color: colors.black,
      fontSize:16,
      fontWeight:'800',
      backgroundColor: colors.white,
      paddingHorizontal: 16,
      paddingVertical:8,
      borderRadius: 20
    }
  });