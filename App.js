import {useState} from "react";
import Greet from './Components/Greet'
import{View,ActivityIndicator,Alert,StatusBar,Text,Image,ImageBackground,ScrollView,Button,Pressable,Modal} from 'react-native'
const logoImg=require("./assets/adaptive-icon.png")
export default function App(){
  const [isModalVisible,setIsModalVisible]=useState(false);
  // return <ScrollView style={{flex:1,backgroundColor:"plum",padding:60}}>
    
  //   {/* <Image source={logoImg} style={{width:300,height:300}} />
  //   <Image source={{uri:"https://picsum.photos/300"}} style={{width:300,height:300}} /> */}
  //   <Image source={logoImg} style={{width:300,height:300}}></Image>
  //   <Text>
  //   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  //   </Text>
  //   <Image source={logoImg} style={{width:300,height:300}}></Image>
  // </ScrollView>
  return <View style={{flex:1,backgroundColor:"grey",padding:60}}>
    {/* <Button title="Press" onPress={()=>setIsModalVisible(true)} 
    color="midnightblue"
    
      /> */}
      {/* <Pressable onPress={()=> console.log("Image pressed")}>
      <Image source={{uri:"https://picsum.photos/300"}} style={{width:300,height:300}} />
      </Pressable>
      <Pressable onPress={()=>console.log("Text pressed")}>
      <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </Text>
      </Pressable> */}
      {/* <Modal visible={isModalVisible} 
      onRequestClose={()=> setIsModalVisible(false)}
      animationType="slide"
        
      >
        <View style={{flex:1,backgroundColor:"lightblue",padding:60}}>
          <Text>Modal Content</Text>
          <Button 
            title="close"
            color="midnightblue"
            onPress={()=>setIsModalVisible(false)}
          />

          
        </View>
      </Modal> */}

      {/* <StatusBar backgroundColor="lightgreen" barStyle="light-content" /> */}
      {/* <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} /> */}
        {/* <Button title="Alert" onPress={()=> Alert.alert("Invalid data!")} /> */}
        {/* <Button 
        title="Alert 2"
        onPress={()=>Alert.alert("Invalid data!","DOB incorrect")}
        />
        <Button 
        title="Alert 3"
        onPress={()=>Alert.alert("Invalid data!" , "DOB incorrect",
          [{
            text:'Cancel',
            onPress:()=>console.log("Cancel pressed")
          },
          {
            text:'OK',
            onPress:()=> console.log("OK pressed")
          }
        ]
        )}

        /> */}


        <Greet name='Bruce Wayne' />
        <Greet name="Clark Kent" />
  </View>
        

}