import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/task-item';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from './store';
import NewCreate from './components/new-create';
import Menu from './components/menu';
import { Header } from '@rneui/themed';

export interface Task {
  title: string;
  description: string;
  id: number;
  done: boolean;
}

export const taskItems: Task[] = [
    {
    title: "タイトル3",
    description: "説明3",
    id: 3,
    done: false,
  },
  {
    title: "タイトル2",
    description: "説明2",
    id: 2,
    done: false,
  },
  {
    title: "タイトル1",
    description: "説明1",
    id: 1,
    done: false,
  },
] as Task[]

const App = () => {
  // const {taskItems} = useSelector((store: RootState) => store.task)

  return (
    <View style={styles.container}>
      {/* メニューボタン */}
      <Header rightComponent={<Menu/>} placement='right' style={styles.headerContainer}/>

      {/* タスク一覧表示 */}
      <View style={styles.taskContainer}>
        <View>
          <FlatList data={taskItems} renderItem={({item}) => {return(
            <TaskItem
            title={item.title}
            description={item.description}
            id={item.id}
            done={item.done} />)}}/>
        </View>
        <StatusBar style="auto" />
      </View>

      {/* 新規作成ボタン */}
      <View style={styles.newCreateArea}>
        <NewCreate/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    backgroundColor: '#fff',
    marginTop: 30
  },
  taskContainer: {
    marginTop: 100
  },
  newCreateArea: {
  }


});

export default App

registerRootComponent(App);