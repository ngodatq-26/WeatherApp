import React from 'react'
import { Text, View } from 'react-native'
import { Card, Title } from 'react-native-paper'
interface props {
    location : string
}
const TempComponent = (props : props) => {
  const {location} = props;
  return (
    <Card>
        <Card.Content>
            <Title>Local</Title>
            <Text>{location}</Text>
        </Card.Content>
    </Card>
  )
}

export default TempComponent