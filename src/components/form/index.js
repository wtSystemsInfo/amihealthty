import { useState } from "react";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList} from "react-native";
import ResultIMC from "./ResultIMC/Index";
import styles from "./style";




export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setmessageIMC] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalc() {
        let heightFormat = height.replace(",", ".")
        let weightFormat = weight.replace(",", ".")
        let totalImc = (( weightFormat / (heightFormat * heightFormat)).toFixed(2))
        setImcList ((arr) => [... arr, {id:new Date().getTime, imc:totalImc}])
        setImc(totalImc)
    }

    function emptyField(){
        if(imc == null){
            Vibration.vibrate()
            setErrorMessage("CAMPO OBRIGATÓRIO*")
        }
    }
    function validationImc() {
        if (weight != null && height != null) {
            imcCalc()
            setmessageIMC("Seu IMC é igual : ")
            setTextButton("Calcular Novamente")
            setHeight(null)
            setWeight(null)
            setErrorMessage(null)
            
        }else{
            emptyField()
            setImc(null)
            setTextButton("Calcular")
            setmessageIMC("Insira o Peso e a Altura")            
        }        
          
        
    }

    return (
        <View style={styles.formContext}>
            {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>           
                <Text>Altura</Text>
                <Text style={styles.errorMsg}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Altura ex: 1.75"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <Text style={styles.errorMsg}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Peso ex 75.00"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btnCalculator} onPress={() => validationImc()} title={textButton}>
                        <Text style={styles.txtBtnCalculator}>{textButton}</Text>
                </TouchableOpacity>  
            </Pressable>         
            :           
            <View style = {styles.exhibitionResultImc}>
                <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc} />
                <TouchableOpacity style={styles.btnCalculator} onPress={() => validationImc()} title={textButton}> 
                    <Text style={styles.txtBtnCalculator}>{textButton}</Text>
                </TouchableOpacity>  
            </View>
            }
            <FlatList
            showsVerticalScrollIndicator={false}
            style = {styles.listImc}
            data={imcList.reverse()}
            renderItem={({item}) => {
                return(
                    <Text style = {styles.resultImcList}>
                        <Text style = {styles.txtResultImcList}>Resultado IMC = </Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item) =>{
                item.id
            }}>
            </FlatList>
        </View>
    );
}