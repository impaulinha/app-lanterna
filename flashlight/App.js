import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import { styles } from './styles';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //Liga a lanterna
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    //O toggle muda quando o celular for chacoalhado
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    })

    //Essa função vai ser chamada quando o componente for desmontado
    return () => subscription.remove();
  }, []);

  return(
    <>
      <StatusBar 
        backgroundColor={toggle ? 'white' : 'black'}
        barStyle={toggle ? 'dark-content' : 'light-content'}
      />
      <SafeAreaView style={toggle ? styles.containerLight : styles.container}>
        <TouchableOpacity onPress={handleChangeToggle}>
          <Image 
            source={
              toggle 
                ? require('./assets/icons/eco-light.png')
                : require('./assets/icons/eco-light-off.png')
            }
            style={toggle ? styles.lightingOn : styles.lightingOff}
          />

          <Image 
            source={
              toggle 
                ? require('./assets/icons/logo-dio.png')
                : require('./assets/icons/logo-dio-white.png')
            }
            style={styles.dioLogo}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

export default App;