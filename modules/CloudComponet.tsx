import React from 'react'
import { Text, View } from 'react-native'
import { Card, Title } from 'react-native-paper'
interface props {
    clouds : string
}
const CloudComponent = (props : props) => {
  const {clouds} = props;
  return (
    <Card>
        <Card.Content>
            <Title>Cloud</Title>
            <Text>{clouds}</Text>
        </Card.Content>
    </Card>
  )
}

export default CloudComponent