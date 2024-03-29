import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, Image } from "react-native";

interface Item {
    id: string;
    nome: string;
    idade: string;
    email: string;
}

const dados: Item[] = [
    { id: '1', nome: 'Aparecida', idade: '77', email: 'aparecida@gmail.com' },
    { id: '2', nome: 'Maria', idade: '22', email: 'maria@gmail.com' },
    { id: '3', nome: 'João', idade: '90', email: 'joao@gmail.com' },
    { id: '4', nome: 'Aparecida', idade: '77', email: 'aparecida@gmail.com' },
    { id: '5', nome: 'Maria', idade: '22', email: 'maria@gmail.com' },
    { id: '6', nome: 'João', idade: '90', email: 'joao@gmail.com' },
    { id: '7', nome: 'Aparecida', idade: '77', email: 'aparecida@gmail.com' },
    { id: '8', nome: 'Maria', idade: '22', email: 'maria@gmail.com' },
    { id: '9', nome: 'João', idade: '90', email: 'joao@gmail.com' },
    { id: '10', nome: 'Aparecida', idade: '77', email: 'aparecida@gmail.com' },
    { id: '11', nome: 'Maria', idade: '22', email: 'maria@gmail.com' },
    { id: '12', nome: 'João', idade: '90', email: 'joao@gmail.com' },

];

const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.email}</Text>
        <Text>{item.idade}</Text>
    </TouchableOpacity>
);


function FlatListExample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='blue' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/profile.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/imagens/orders.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15
    },
    header: {
        backgroundColor: 'orange',
        alignItems: 'center',
        paddingVertical: 10

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30

    }
});
export default FlatListExample;