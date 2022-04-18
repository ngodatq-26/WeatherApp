import React from 'react'
import { Text, View } from 'react-native'
import { Card, Title } from 'react-native-paper'
interface props {
    zone : string
}
const ZoneComponent = (props : props) => {
  const {zone} = props;
  return (
    <Card>
        <Card.Content>
            <Title>Zone</Title>
            <Text>{zone}</Text>
        </Card.Content>
    </Card>
  )
}

export default ZoneComponent