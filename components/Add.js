import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import { addItem as addItemAction } from '../redux/actions'

class Add extends React.Component {
    state = { text: 'placeholder' }

    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button title={"Add"} onPress={() => this.props.addItem(this.state.text)} ></Button>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (text) => {
            dispatch(addItemAction(text))
        }
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
