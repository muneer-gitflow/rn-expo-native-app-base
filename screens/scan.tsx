import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Platform, SafeAreaView} from 'react-native';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';

interface Todo {
  id: number;
  title: string;
}

export default function VisionCameraTest() {
  // const {hasPermission, requestPermission} = useCameraPermission();
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos10 = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      .then(response => response.json())
      .then(json => setTodos(json));
  }, []);

  useEffect(() => {
    if (__DEV__ && Platform.OS === 'ios') {
      NativeDevSettings.setIsDebuggingRemotely(true);
    }
    // if (!hasPermission) {
    //   // requestPermission();
    // }

    getTodos10();
  }, [getTodos10]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <Text>VisionCameraTest</Text>
        {todos.map(todo => (
          <Text key={todo.id}>{todo.title}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}
