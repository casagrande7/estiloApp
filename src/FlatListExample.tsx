import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

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

];

const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.email}</Text>
        <Text>{item.idade}</Text>
    </View>
);


function FlatListExample(): React.JSX.Element {
    return (
        <View>
            <FlatList
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

    },
    item: {

    }
});
export default FlatListExample;