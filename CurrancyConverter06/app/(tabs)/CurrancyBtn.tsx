import React from 'react'
import type { PropsWithChildren } from 'react'

import { View, Text ,StyleSheet} from "react-native"

type CurrancyBtnProps = PropsWithChildren <{
    name : string;
    flag : string;
    country : string;
    
    
}>

const CurrancyBtn = (props: CurrancyBtnProps) : JSX.Element
=> {
     return (
        <View style={styles.buttonContainer }>
            <Text>{props.flag}</Text>
            <Text>{props.country}</Text>
        </View>
     )
}

const styles= StyleSheet.create({
    buttonContainer : {
        alignItems : 'center'
    },
    flag: {
        fontSize : 28,
        color : "#FFFFFF",
        marginBottom: 4
    },
    country:{
        fontSize : 14,
        color : "#f3a01cff",
        marginBottom: 4
    }
    
})

export default CurrancyBtn