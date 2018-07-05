import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        console.log('componentWillMount in albumlist');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                this.setState({ albums: res.data });
            });
            // .then((data => console.log('yo', data)));
    }

    render() {
        return (
            <View>
                <Text>Album List!!</Text>
            </View>
        );
    }
}

export default AlbumList;
