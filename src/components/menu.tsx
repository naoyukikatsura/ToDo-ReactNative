import { Pressable, StyleSheet, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Menu = () => {
  const handleMenuPress = () => {
    alert('pressed')

  }

  return(
    <View>
      {/* メニューボタン */}
      <View>
        <Pressable onPress={handleMenuPress}>
          <MaterialCommunityIcons name="dots-vertical-circle-outline" size={40} color="#fff" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Menu