import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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

    renderAlbums() {
        return this.state.albums.map((album) => <AlbumDetail album={album} />);
    }

    render() {
        console.log('this.state.albums', this.state);
        return (
            <View>
               {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
