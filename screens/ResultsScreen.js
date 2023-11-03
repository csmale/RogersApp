import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Pressable } from 'react-native';
import AppContext from '../components/AppContext.js';
import { useContext, useState } from 'react';
import MyButton from '../components/MyButton.js';
import App from '../App.js';

const data = [
    { id: 'a', pc: 'DA3 8LW', company: 'Bloggs plc', site: 'New Ash Green', unit: 'Shed' },
    { id: 'b', pc: 'DA3 8LX', company: 'Bloggs plc', site: 'Hartley', unit: 'Shed' },
    { id: 'c', pc: 'DA3 8LZ', company: 'Bloggs plc', site: 'Longfield', unit: 'Shed' }
];

export default function ResultsScreen(props) {
    const myContext = useContext(AppContext);

    const myItemSeparator = () => {
        return <View style={{ height: 1, backgroundColor: "grey", marginHorizontal: 10 }} />;
    };

    const myListEmpty = () => {
        return (
            <View style={{ alignItems: "center" }}>
                <Text style={styles.result}>No data found</Text>
            </View>
        );
    };

    const doSelect = (index, props) => {
        // copy selected entry to context
        myContext.setSelectedId(data[index].id);
        myContext.setSelectedSite(data[index].site);
        console.log(myContext.SelectedSite);
        props.navigation.navigate('DestDetails');
    }

    const myRenderItem = ({ item, index }) => {
        return (
            <Pressable
                onPress={doSelect(index, props)}>
                <View style={styles.result}>
                    <Text>Destination {item.id}</Text>
                    <Text style={styles.company}>{item.company}</Text>
                    <Text style={styles.site}>{item.site}</Text>
                    <Text style={styles.unit}>{item.unit}</Text>
                    <Text style={styles.postcode}>{item.pc}</Text>
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={myRenderItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={myListEmpty}
                ListHeaderComponent={() => (
                    <Text style={{ fontSize: 30, textAlign: "center", marginTop: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        List of Destinations
                    </Text>
                )}
                ListFooterComponent={() => {
                    <Text style={{ fontSize: 30, textAlign: "center", marginBottom: 20, fontWeight: 'bold' }}>Thank You</Text>
                }}
                ItemSeparatorComponent={myItemSeparator}
            />
            <Text>{myContext.UserCompany}</Text>
            <MyButton caption="Select" target='DestDetails' {...props} />
            <MyButton caption="Search again" target='Search' {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        width: 300
    },
    result: {
        borderWidth: 1
    },
    postcode: {

    },
    company: {

    },
    unit: {

    },
    site: {

    }
});