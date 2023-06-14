import { Pressable, StyleSheet, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleMenu } from "../features/menu/MenuSlice";

const MenuButton = () => {
  const dispatch = useDispatch();

  const handleMenuPress = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);


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

export default MenuButton