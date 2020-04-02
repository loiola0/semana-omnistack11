import React from 'react';
import {View, Text,Image,TouchableOpacity, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation,useRoute } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import * as mailComposer from 'expo-mail-composer';
/** 
 *useRoute: usado para pegar informações específicas da página atual
 */



import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}", com o valor de R$ ${Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL'}).format(incident.value)}`;
    
    const route = useRoute();

    const incident = route.params.incident;

    function navigateBack(){
        navigation.goBack();
    }
        


    function sendEmail(){
        mailComposer.composeAsync({
            subject: `Herói  DO Caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,

        });
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                   <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                    </TouchableOpacity> 
            </View>
            <View style={styles.incident}>
                    <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG:</Text>
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.description}</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>{incident.value}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja heroi do caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View styles={styles.actions}>

                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    );
}