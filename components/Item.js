import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Item = ({
  name,
  description,
  picture,
  price,
  available,
  onPress,
  inCart,
}) => {
  const availabilityColor = available ? "#c8e6c9" : "#ffcdd2";
  const availabilityText = available ? "Available" : "Sold";
  const priceColor = available ? "#1976d2" : "#9e9e9e";

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.titleRow}>
          <FontAwesome6 name="kit-medical" size={18} color="#1976d2" />
          <Text style={styles.name}>{name}</Text>
        </View>

        <View
          style={[
            styles.availabilityTag,
            { backgroundColor: availabilityColor },
          ]}
        >
          <Text style={styles.availabilityText}>{availabilityText}</Text>
        </View>
      </View>

      <Image source={picture} alt={name} style={styles.image} />

      <Text style={styles.description}>{description}</Text>

      <View style={styles.footer}>
        <Text style={[styles.price, { color: priceColor }]}>
          ${price.toFixed(2)}
        </Text>

        <TouchableOpacity
          style={[
            styles.cartButton,
            {
              backgroundColor: !available
                ? "#bdbdbd"
                : inCart
                ? "#d32f2f" // red when in cart (Remove)
                : "#1976d2", // blue when available (Add)
            },
          ]}
          onPress={() => onPress(name)}
          disabled={!available}
        >
          <FontAwesome6
            name={inCart ? "cart-arrow-down" : "cart-plus"}
            size={14}
            color="#fff"
          />
          <Text style={styles.cartText}>
            {inCart ? "Remove from Cart" : "Add to Cart"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 12,
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    color: "#212121",
    marginLeft: 6,
  },
  availabilityTag: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  availabilityText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#212121",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#424242",
    marginBottom: 15,
    lineHeight: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  cartText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 5,
  },
});

export default Item;
