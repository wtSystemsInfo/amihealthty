import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 5,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    form: {
        width: "100%",
        height: "100%",
        alignContent:"center",
        marginTop: 50,
        padding: 20,
    },
    input: {
        borderRadius: 50,
        backgroundColor: '#bed7e5',
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        margin: 12,
        paddingLeft: 10,
    },
    btnCalculator: {
        borderRadius: 50,
        width: "90%",
        backgroundColor: "#0B81C2",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 10,
        marginTop: 20,
    },
    txtBtnCalculator: {
        fontSize: 20,
        color : '#ffffff',
    },

    errorMsg: {
        fontSize: 12,
        color: "red", 
        fontWeight: "bold",
        paddingLeft: 20,
    },

    exhibitionResultImc: {
        width: "100%",
        height: "50%",
        alignContent: "center",
        marginTop: 10,
        paddingBottom: 90,
        padding: 20,
    },

    listImc: {
        marginBottom: 130
        },

    resultImcList: {
        fontSize: 20,
        color: "red",
        height: 30,
        width: "100%",
        paddingRight: 20,
    },

    txtResultImcList: {
        fontSize: 16,
        color :"#bed7e5"
    }


});

export default styles