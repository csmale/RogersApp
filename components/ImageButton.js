import { StyleSheet, View, Pressable, Image } from "react-native";

export default function ImageButton(props) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() =>
                    props.navigation.navigate(props.target)
                }>
                <Image style={styles.image} source={props.image}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '75%',
        marginTop: 16,
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 32
    },
});