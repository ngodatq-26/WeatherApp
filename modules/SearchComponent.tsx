import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

interface props {
    onSearch(e : string) : void
    setName(e : string) : void
}
const search = (props : props) =>{

    const {onSearch,setName} = props;
    const [search,setSearch] = React.useState('');

    const handleSeacrh = (e : any) =>{
        setSearch(e);
        setName(e);
    }

    const onSubmit = () =>{
        onSearch(search)
    }
    
    return(
        <View>
           <Searchbar value={search} onIconPress={onSubmit} onChangeText={handleSeacrh} placeholder="search by name city"  />
        </View>
    )
}

export default search;