import axios from 'axios';
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper';
import CloudComponent from './CloudComponet';
import SearchComponent from './SearchComponent';
import ShowWeather from './ShowWeather';
import TempComponent from './TempComponent';
import ZoneComponent from './ZoneComponent';
const HomeComponent = () => {
  const [data,setData] = React.useState<any>();
  const [loading,setLoading] = React.useState(false);
  const [name,setName] = React.useState('')
  const onSearch = async (namecity : string) =>{
      const urlParams = '?city=' + namecity + '&key=984076ecda1544579b55a93a197fe765&include=minutely'
      setLoading(true);
      await axios.get('https://api.weatherbit.io/v2.0/current' + urlParams, {
        headers : {
            "content-type": "application/json; charset=utf-8",
            "keep-alive": "timeout=5"
        }
      }).then((res) =>{
          setData(res.data)
      })

      setLoading(false);
  }

  if(data) {
      console.log(data.data[0].city_name)
  }
  return (
    <View>
       <SearchComponent onSearch ={onSearch} setName={setName} />
       {
           loading ?  <ActivityIndicator size="large" color="#00ff00" />
           :<View>
               {
                   data ?
                    <View>
                    <ShowWeather des={data.data[0].weather.description} codeIcon='a' nameCity={data.data[0].city_name} code ={data.data[0].weather.code} temp={data.data[0].temp} 
                    />
                    <View style={styles.ViewBottom}>
                        <View style={styles.viewCard}><CloudComponent clouds={data.data[0].clouds}/></View>
                        <View style={styles.viewCard}><TempComponent location={data.data[0].wind_cdir_full}/></View>
                        <View style={styles.viewCard}><ZoneComponent zone={data.data[0].timezone}/></View>
                    </View>
                    </View> : <View></View>
               }
            </View>
       }
       
    </View>
  )
}

const styles = StyleSheet.create({
    ViewBottom : {
        display : 'flex',
        flexDirection: 'row',
        justifyContent : 'center',
        position : 'absolute',
        top : 410,
    },
    viewCard : {
        display : 'flex',
        margin : 10,
        height : 100
    }
})
export default HomeComponent