import React from 'react';
import {
    View,
    Text,
    TextInput,
    Alert
} from 'react-native';

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 5,
            edit: true,
            text: ''
        }
    }

    changeText(text) {
        this.setState(() => ({ text: text }))
    }

    componentDidMount() {
        this.timer = setInterval(() => { this.setState(() => ({ time: this.state.time - 1 })) }, 1000)
    }

    componentDidUpdate() {
        if (this.state.time === 0) {
            clearInterval(this.timer)
            this.setState(() => ({ edit: false, time: 5 }))
            Alert.alert(`Você digitou ${this.state.text.length} caracteres`)
        }
    }
    render() {
        return (
            <View>
                <Text >{this.state.time}</Text>
                <TextInput value={this.state.text}
                    editable={this.state.edit}
                    onChangeText={this.changeText.bind(this)}
                    style={{
                        height: 100,
                        borderColor: 'black',
                        borderWidth: 2,
                        margin: 5
                    }}></TextInput>
            </View>
        )
    }
}

export default Game