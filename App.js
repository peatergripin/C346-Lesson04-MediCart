import { useState } from "react";
import {
  ScrollView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Item from "./components/Item";
import data from "./data";

const App = () => {
  const [cart, setCart] = useState([]);

  function handleOnPress(itemName) {
    setCart((prevCart) => {
      if (prevCart.includes(itemName)) {
        return prevCart.filter((i) => i !== itemName);
      } else {
        return [...prevCart, itemName];
      }
    });
  }

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.topBar}>
          <Text style={styles.appTitle}>😊 MediCart</Text>
          <View style={styles.cartBadge}>
            <Text style={styles.cartIcon}>
              <FontAwesome6 name="cart-shopping" />
            </Text>
            <Text style={styles.cartText}>{cart.length}</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>
          Healthcare Equipment Marketplace
        </Text>
        <Text style={styles.tagline}>Your partner in everyday healthcare</Text>
        {data.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            description={item.description}
            picture={item.picture}
            price={item.price}
            available={item.available}
            onPress={handleOnPress}
            inCart={cart.includes(item.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  headerContainer: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },

  topBar: {
    backgroundColor: "#0d47a1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  appTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.5,
  },
  cartBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976d2",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  cartIcon: {
    fontSize: 16,
    marginRight: 5,
    color: "#fff",
  },
  cartText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },

  logo: {
    height: 70,
    width: 110,
    resizeMode: "contain",
    marginBottom: 4,
  },
  tagline: {
    fontSize: 13,
    color: "#607d8b",
    textAlign: "center",
    marginBottom: 5,
  },

  scrollContainer: {
    padding: 20,
    paddingBottom: 60,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: 5,
  },
});

export default App;
