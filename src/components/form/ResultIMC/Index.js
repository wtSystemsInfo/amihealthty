import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import style from "./style"


export default function ResultIMC(props) {

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu imc atual é : " + props.ResultIMC
        })
    }

    return (
        <View style={style.contextIMC}>
            <View style={style.boxSharebtn}>  
                <Text style={style.infomation}>{props.messageResultIMC}</Text>
                <Text style={style.resultIMC}>{props.ResultIMC}</Text>              
                <TouchableOpacity 
                onPress={onShare}
                style={style.shared}>
                    <Text style={style.sharedText}>Share</Text>
                </TouchableOpacity>                
            </View>
        </View>
    );
}