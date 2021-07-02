import React , {useEffect,useState} from 'react'
import {Text , FlatList , View , Image } from 'react-native'
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60992da1ea03b472bb9a096b'
import Axios from 'axios' 


const Chats = () => {
    const [loading , setLoading] = useState(false)
    const [details, setDetails] = useState(null);
    
      
    
     const fetchDetails = async () => {
      try {
      const {data} = await  Axios.get(`${BASE_URL}/user?limit=10`, {headers : {'app-id' : APP_ID}})
      const details = data.data;
      console.log(details)

      setDetails(details)
      
     } catch (error) {
       console.log(error)
     }
    }
    useEffect(() => {
      fetchDetails()
    },[])
  
   if (!details) {
     return (
       <Text>Loading....</Text>
     )
     
   } else {
     
   
    return(
        <>
        {loading ? <Text>error</Text> :
            

       
       
        <FlatList
        showsVerticalScrollIndicator={false}
        style={{padding: 10}}
        contentContainerStyle={{paddingTop: 10}}
        data = {details}
        keyExtractor = {item => `key${item.id}`}
        renderItem = {({item, index}) => (
          <View>
          <View style = {{ flexDirection: 'row',
          marginBottom: 20,}}>
          <View>
          <Image
          style = {{ alignSelf: 'flex-start',
          height: 60,
          width: 60,
          borderRadius: 40,
          marginLeft: 5,}}
          source = {{uri : item.picture}}></Image>
  
          </View>
          <View
          style = {{
            justifySelf: 'center',
                  alignSelf: 'center',
                  marginLeft: 15,
          }}>
          <Text
          style = {{fontSize: 18, fontWeight: 'bold', color: 'black'}}
            >{item.firstName}</Text>
            <Text style = {{marginTop: 10, color: 'grey'}}>
            Hello</Text>
          </View>
          <View
          style={{
            alignItems : 'flex-end',
            
            
            
            flex : 1
          }}>
          <Text
          style ={{
            color : 'grey',
            marginRight : 15,
          }}>6:00</Text>
          </View>
         
          </View>

          <View
          style = {{
            backgroundColor : '#d4d1cb',
            marginBottom : 10,
            
            height : .3,
            marginLeft :30,
            marginRight : 30,
          }}></View>
          </View>
           
        )}>
  
        </FlatList>}
        
        </>
    )
  }
}
export default Chats