import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Pokemonum from './components/pokemon1';
import Pokemondois from './components/pokemon2';
import Pokemontres from './components/pokemon3';
import Botaoo from './components/botaoo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
        Rildson Gabriel 3C
      </Text>
      <Card style={styles.card}>
        <Text style={styles.titulo}> POKEDEX </Text>
        <View style={styles.cardizinho}>
          <Pokemonum />
          <Pokemondois />
          <Pokemontres />
          <Botaoo />
        </View>
      </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d63b3b',
  },

  card: {
    backgroundColor: '#d63b3b',
    textAlign: 'center',
    height: 1300,
  },

  cardizinho: {
    backgroundColor: '#fafafa',
    height: '80%',
    paddingTop: 50,
    borderRadius: 25,
    gap: 40,
  },

  titulo: {
    fontSize: 45,
    textAlign: 'center',
    color: 'white',
    paddingTop: 40,
    paddingBottom: 20,
    fontWeight: 'bold',
  }
});
