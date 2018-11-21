import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { clearAll as clearAllAction } from '../redux/actions'

class Counter extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.counter}</Text>
                <Button title={"Clear All"} onPress={this.props.clearAll}></Button>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearAll: () => {
            dispatch(clearAllAction())
        }
    }
}

const mapStateToProps = state => ({
    counter: state.items.length
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
