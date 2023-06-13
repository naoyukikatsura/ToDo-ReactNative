import { Pressable, StyleSheet, Text, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


interface NewCreateProps {
  onPress: () => void
}

const NewCreate = () => {
  const handleCreatePress = () => {
    alert('pressed')
  }

  return (
      <View style={styles.newCreateContainer}>
        {/* 新規ボタン */}
          <View>
            <Pressable onPress={handleCreatePress}>
              <MaterialIcons name="add-circle" size={40} color="#287FB8" />
            </Pressable>
          </View>
          {/* 「新規」 */}
          <View style={styles.newContent}>
            <Text style={styles.newLabel}>新規</Text>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  newCreateContainer: {
    flexDirection: 'row',
    bottom: 200,
    position: 'absolute',
    right: '10%',
  },
  newContent: {
    justifyContent: 'center',
    marginLeft: 5
  },
  newLabel: {
    fontSize: 25
  }
})

export default NewCreate