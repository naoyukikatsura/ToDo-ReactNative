import { Task } from 'features/task/TaskSlice';
import { StyleSheet, Text, TextInput, View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TaskItem = ({title, description, id, done}: Task) => {

  return (
    <View style={styles.taskContainer}>
      {/* タスクのチェックボックス 初期状態はチェックなし */}
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
      <View>
        {/* タスクのタイトル */}
        <View style={styles.inputTextContainer}>
          <TextInput placeholder='タイトル入力' />
        </View>
        {/* タスクの説明 */}
        <View style={styles.inputTextContainer}>
          <TextInput placeholder='説明入力'/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row', // 横並びにできる
    width: '100%',
  },
  checkboxContainer: {
    alignItems: 'center'
  },
  inputTextContainer: {
    width: 200,
    height: 30,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
  },

})

export default TaskItem