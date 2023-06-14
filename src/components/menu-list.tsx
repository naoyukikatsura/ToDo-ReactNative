import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const MenuList = () => {
  return(
    <View style={styles.menuContainer}>
      <View style={styles.menuWrapper}>
        {/* チェックボックス */}
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="#287FB8"
            unfillColor="white"
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            // onPress={(isChecked: boolean) => {}}
            />
        </View>
        {/* 「非表示タスクも表示」 */}
        <Text>非表示タスクも表示</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#fff'
  },
  menuWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    borderRadius: 8,
    height: 300,
    width: 300,
    position: 'absolute',
    top: 30,
    left: -130,
  },
  checkboxContainer: {
    alignItems: 'center'
  },
})

export default MenuList