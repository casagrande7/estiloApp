import React from "react";
import { View } from "react-native";

interface Item {
    id: string;
    nome: string;
    idade: string;
    email: string;
}

const dados: Item[] = [
    {id: '1', nome: 'Aparecida' , idade: '77' , email: 'aparecida@gmail.com'},
    {id: '2', nome: 'Maria' , idade: '22' , email: 'maria@gmail.com'},
    {id: '3', nome: 'João' , idade: '90' , email: 'joao@gmail.com'},

];


function FlatListExample(): React.JSX.Element {
    return (
        <View>

        </View>
    );
}

export default FlatListExample;