import React from 'react'
import { StyleSheet, View } from 'react-native'
import Add from './Add'
import List from './List'
import Counter from './Counter'

class Container extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Counter />
            <Add />
            <List />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
})

export default Container
