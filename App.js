import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor='#000' translucent={false} />
          <Image
          source={require('./src/assets/instagram_logo.png')}
          style={styles.logo}
          />

          <TextInput
          placeholder='Celular, username ou email'
          style={styles.input}
          />

          <TextInput
          placeholder='Sua senha'
          style={styles.input}
          />

          <View style={styles.forgotenContent}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookContainer}>
            <FontAwesome5 name='facebook' size={25} color='#399fff' />
            <Text style={styles.facebookText}>Continue como Edmilson</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{marginHorizontal:'3%', color:'#8e8e8e'}}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%'
  },
  input:{
    width:'90%',
    height:42,
    backgroundColor:'#f4f3f3',
    marginBottom:20,
    padding:8,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#e0e0e0'
  },
  forgotenContent:{
    width:'90%',
    alignItems:'flex-end'
  },
  forgotText:{
    color:'#399fff'
  },
  loginButton:{
    marginTop:'8%',
    backgroundColor:'#399fff',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  loginText:{
    color:'#fff',
    fontSize:17
  },
  facebookContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:'18%'
  },
  facebookText:{
    color:'#399fff',
    paddingLeft:8,
    fontSize:15
  },
  divisor:{
    marginTop:'14%',
    flexDirection:'row',
    width:'90%',
    alignItems:'center',
    justifyContent:'center'
  },
  divisorLine:{
    width:'45%',
    height:2,
    backgroundColor:'#efeded',
    borderRadius:5
  },
  signUpContainer:{
    flexDirection:'row',
    marginTop:'14%'
  },
  signUpText:{
    color:'#c4c4c4',
    paddingRight:5
  },
  signUpButton:{
    color:'#399fff',
    fontWeight:'bold'
  }
});
