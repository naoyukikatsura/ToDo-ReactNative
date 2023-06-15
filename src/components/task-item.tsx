import { toggleItem, Task } from '../features/task/TaskSlice';
import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from 'react-redux';



const TaskItem = ({title, description, id, done}: Task) => {
  const dispatch = useDispatch()

  const handleChange = useCallback(() => {
    // alert('Pressed')
    dispatch(toggleItem(id))
  }, [dispatch, id])

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
          onPress={handleChange}
          isChecked={done}
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
    // borderBottomColor: 'black',
    // width: '100%',
    // borderBottomWidth: 1,
    // padding: 10,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
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