import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text style={styles.textTitle}>Syntax Web</Text>
                <Text style={styles.textDesc}>Pesquisa de Satisfação</Text>
            </View>

            <View style={styles.body}>
                <Image style={{ width: 250, resizeMode: 'contain' }} source={require('../assets/imagem/logo.gif')} />
                <View>
                    <TouchableOpacity style={{ paddingHorizontal: 40, paddingVertical: 10, backgroundColor: '#333', borderRadius: 10 }}>
                        <Text style={{ fontSize: 20, color: '#ccdaf5', fontWeight: 'bold' }}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.botton}>
                <Text style={[styles.textDesc, { fontSize: 12 }]}>Todos os direitos reservados</Text>
                <View>
                    <Image style={{ width: 150, resizeMode: 'contain' }} source={require('../assets/imagem/Logo-name-sf.png')} />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccdaf5',
    },
    header: {
        flex: 3,
        minHeight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    body: {
        flex: 4,
        minHeight: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botton: {
        flex: 1,
        minHeight: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    textDesc: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
