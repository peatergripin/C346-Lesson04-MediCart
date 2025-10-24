import {View,Text, Image, StyleSheet} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({name,description,picture}) => {
    return (

        <View style={styles.boatContainer}>
            <Text style={styles.name}><FontAwesome6 name="sailboat" size = {20} color ="gray" /> {name}</Text>
            <Image source={picture} alt={name} style={styles.image}/>
            <Text style={styles.description}>{description}</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    boatContainer: {
        margin: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: '100%', // Full width for the image
        height: 200, // Set a fixed height
        borderRadius: 8,
    },
    name: {
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
});
export default Boat;