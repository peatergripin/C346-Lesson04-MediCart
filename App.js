import {ScrollView, Text, StatusBar,StyleSheet} from 'react-native';
import Boat from './components/Boat';
import boatData from './data';

const App = () => {
    return (
        <ScrollView>
            <StatusBar background = "gray" />
            <Text style={styles.header}>GetABoat - For Sale</Text>
            {boatData.map(boat => <Boat key = {boat.name} name= {boat.name} description = {boat.description} picture={boat.picture}/>)}

        </ScrollView>
    );
};
const styles = StyleSheet.create({header:{
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 20,
    fontWeight: 'bold'
    } });
export default App;
