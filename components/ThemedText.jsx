import {Text, Stylesheet} from 'react-native'
import {useThemeColor} from '@/hook/useThemeColor'

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}) {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');
    return(
        <Text 
        style={[
            {color},
            type === 'default' ? styles.default : undefined,
            type === 'title' ? styles.title : undefined,
            type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
            type === 'subtitle' ? styles.subtitle : undefined,
            type === 'link' ? styles.link : undefined,
            style
        ]}
        {...rest}
        />
    )
}

const styles = StyleSheet.create({
default:{

},
title:{

},
defaultSemiBold:{

},
subtitle:{

},
link:{

},
})