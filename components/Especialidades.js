import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import params from './params'

export default props => {
    const {name, description, nearMines, exploded, qtdVagas} = props
    
        const styleField = [styles.field]
        styleField.push(styles.regular)
    
        return(
            <View style={styleField}>
                <Text style={styles.label}>
                {name}
                </Text>
            </View>
        )
    }
    
    const styles = StyleSheet.create({
        field: {
            height: params.blockSize,
            width: params.blockSize,
            borderTopWidth: 3,
            borderRadius: 10,
            marginTop: 20,
        },
        regular: {
            backgroundColor: '#f0f0f0',
            borderTopColor: '#000',
        },
        label: {
            fontWeight: 'bold',
            fontSize: params.fontSize,
    
        },
    })