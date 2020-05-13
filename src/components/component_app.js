import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import {convertForTypingNoSpecial} from '../utils/util'
import SelectForm from './selectform'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        window.onkeydown = (e) => {
            const state=this.props
            props.typingProcess(state, e);
        }
    }

    render() { 

        let props = this.props;
        let id = props.id;
        
        let s = convertForTypingNoSpecial( props.data[id][props.tgt] );

        let en = props.data[id]['en'];
        let ja = props.data[id]['ja'];
        let fr = props.data[id]['fr'];
        let tgt = s.substr(0,Math.max(props.typeCount,props.initialDisplay));
        //let tgt = s.substr(0,props.typeCount);
        //let de = props.data[id]['de'];
        let de = "";

        let next = <TouchableHighlight
            onPress={() => props.next(props)}
            style={styles.button}
            underlayColor={'#0A84D0'}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight>

        let answer = <TouchableHighlight
            onPress={() => props.displayAnswer(props)}
            style={styles.button}
            underlayColor={'#0A84D0'}>
            <Text style={styles.buttonText}>Answer</Text>
        </TouchableHighlight>
        
        return (

            <View style={styles.container}>
                <SelectForm parProps={props} />        
                <View style={styles.containerR}>
                    {next}{answer}
                </View>
                <View style={styles.containerCont}>
                
                    <Text style={styles.numText}>{id}</Text>
                    <Text style={styles.srcText}>{en} {ja} </Text>
                    <Text style={props.answer === 1 ? styles.tgtCompleteText : styles.tgtText}>{fr} </Text>
                    <Text style={props.typeCount===0 ? styles.inputInitText : styles.inputText}>{tgt} </Text>
                    <Text style={styles.convText}>{s}</Text>
                </View>
            </View>

        );  
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //margin:'auto',
    },
    containerR: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        //justifyContent: 'center',
        alignItems: 'center',
        //margin:'auto',
    },
    containerCont: {
        flex: 4,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
        //margin:'auto',
    },
    logo: {
        width: 300,
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        borderRadius: 3,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#1B95E0',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    numText: {
        fontSize: 20,
       color:'#000' 
    }, 
    srcText: {
        fontSize: 32,
        color: '#000'
    },
    tgtText: {
        fontSize: 48,
        color: '#FFF'
    },
    inputInitText: {
        fontSize: 24,
        color: '#888'
    },
    inputText: {
        fontSize: 24,
        color: '#00F'
    },
    tgtCompleteText:{
        fontSize: 48,
        color: '#000'
    },
    convText: {
        fontSize: 8,
        color: '#888'
    }
});

