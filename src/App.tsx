import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/task-item';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState } from './store';
import CreateTask from './components/create-task';
import MenuButton from './components/menu-button';
import { Header } from '@rneui/themed';
import MenuList from './components/menu-list';
import { RefObject, useCallback, useEffect, useRef } from 'react';
import { Task } from './features/task/TaskSlice';


const App = () => {
  return (
    <Provider store={store}>
      <Component/>
    </Provider>
  )
}

const Component = () => {
  const dispatch = useDispatch();
  const {taskItems} = useSelector((store: RootState) => store.task)
  const { isOpen, isChecked } = useSelector((state: RootState) => state.menu);

  const menuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) isOpen && menuRef.current.focus();
  }, [isOpen]);

  const falseItems: Task[] = taskItems.filter((item) => !item.done)

  return (
      <View style={styles.container}>
        {/* メニューボタン */}
        <Header rightComponent={<MenuButton/>} placement='right' style={styles.headerContainer}/>
        {/* isOpenがtrueのときだけメニューリストを表示する */}
        {isOpen ? (<MenuList/>) : null}

        {/* タスク一覧表示 */}
        <View style={styles.taskContainer}>
          <View>
            <FlatList data={isChecked ? taskItems : falseItems} renderItem={({item}) => {
              return(
                <TaskItem
                title={item.title}
                description={item.description}
                id={item.id}
                done={item.done} />
              )}}
            />
          </View>

{/*
          <ScrollView style={[{ width: '100%' }]}>
            {taskItems.map((item) => (
              <TaskItem
                key={item.id}
                title={item.title}
                description={item.description}
                id={item.id}
                done={item.done}
                // onRemove={() => removeParticipant(item.id)}
              />
            ))}
          </ScrollView> */}









          <StatusBar style="auto" />
        </View>

        {/* 新規作成ボタン */}
        <View style={styles.newCreateArea}>
          <CreateTask id={taskItems[0].id}/>
        </View>
      </View>
  );
}

// スタイル
const styles = StyleSheet.create({

  container: {
    // marginTop: 100,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 30,
  },
  headerContainer: {
    backgroundColor: '#fff',
    marginTop: 30
  },
  taskContainer: {
    marginTop: 100,
  },
  newCreateArea: {
  }


});

// export default App

registerRootComponent(App);
