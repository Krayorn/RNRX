import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { deleteItem as deleteItemAction } from '../redux/actions'

class List extends React.Component {
    render() {
        return (
            <View>
                {
                    this.props.items.map(item => <View key={item.id}>
                        <Text>{item.text}</Text>
                        <Button title={'Delete'} onPress={() => this.props.deleteItem(item.id) } ></Button>
                    </View>)
                }
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: id => {
            dispatch(deleteItemAction(id))
        }
    }
}

const mapStateToProps = state => ({
    items: state.items || []
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
