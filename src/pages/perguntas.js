import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, InteractionManager } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';

const arrayEmoji = [
    { id: 1, name: 'sad-cry', color: '#F32A1D' },
    { id: 2, name: 'sad-tear', color: '#F37E1D' },
    { id: 3, name: 'meh-blank', color: '#F3E01D' },
    { id: 4, name: 'grin-wink', color: '#A2F31D' },
    { id: 5, name: 'grin-hearts', color: '#51F31D' },
]

const pontosMelhoria = [
    { id: 1, ponto: 'Atendimento', selecionado: false },
    { id: 2, ponto: 'Alimento', selecionado: false },
    { id: 3, ponto: 'Reposição', selecionado: false },
    { id: 4, ponto: 'Sabor', selecionado: false },
    { id: 5, ponto: 'Bebida', selecionado: false },
    { id: 6, ponto: 'Outros', selecionado: false },
]

export default function Perguntas({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <View style={styles.areaTitle}>
                    <Text style={styles.stTitle}>Qual a sua avaliação para o nosso serviço ?</Text>
                </View>
                <View style={styles.areaSatisfacao}>
                    <FlatList
                        data={arrayEmoji}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View key={item.id} style={styles.areaEmoji}>
                                    <TouchableOpacity>
                                        <Icon name={item.name} color={item.color} size={40} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
            <View style={styles.body}>
                {/* <FlatList
                    data={pontosMelhoria}
                    style={styles.verPontos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ padding: 10 }}>
                                <Text>{item.ponto}</Text>
                            </View>
                        )
                    }}
                /> */}
            </View>
            <View style={styles.botton}>

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 20,
        flex: 1,
        backgroundColor: '#333'
    },
    header: {
        flex: 2,
    },
    areaTitle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    areaSatisfacao: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    stTitle: {
        color: "#fafafa",
        fontSize: 18,
        fontWeight: 'bold'
    },
    areaEmoji: {
        marginHorizontal: 17
    },
    body: {
        flex: 5,
    },
    verPontos: {
        flex: 1,
        flexDirection: 'row'
    },
    botton: {
        flex: 2,
    }
})