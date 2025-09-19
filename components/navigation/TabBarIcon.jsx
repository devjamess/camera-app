import Ioicons from '@expo/vector-icons/Ioicons';

export function TabBarIcon({style, ...rest}){
    return <Ioicons size={28} style={[{ marginBottom: -3}, style]}
    {...rest} />;
}