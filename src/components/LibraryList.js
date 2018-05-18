import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    // componentDidMount() {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });

    //     this.DataSource = ds.cloneWithRows(this.props.libraries);
    // }


    constructor(props) {
        super(props)
        // Define how to identify difference between rows
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        // Datasource is always in state
        this.state = {
            dataSource: ds.cloneWithRows(this.props.libraries)
        }
    }


    render() {
        // if (this.props.libraries.lenght > 0) {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }


}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);