import {TamaguiProvider, YStack} from 'tamagui';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, Platform, SafeAreaView, useColorScheme} from 'react-native';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import config from '../tamagui.config';

interface Todo {
  id: number;
  title: string;
}

export default function VisionCameraTest() {
  const colorScheme = useColorScheme();
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
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}>
      <SafeAreaView style={{flex: 1}}>
        <YStack backgroundColor="$background" flex={1} padding={16}>
          <Text>VisionCameraTest</Text>
          {todos.map(todo => (
            <Text key={todo.id}>{todo.title}</Text>
          ))}
        </YStack>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
