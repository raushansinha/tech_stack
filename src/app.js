import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduders from './reducers';
import  { Header } from './components/common';
import LibraryList, { } from './components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reduders)}>
            <View style={{ flex:1 }}>
                <Header headerText="Raushan Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;