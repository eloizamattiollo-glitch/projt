// app/feed.tsx
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity 
} from 'react-native';

const PRODUCTS = [
  {
    id: '1',
    name: 'Vestido Midi Floral Elegante',
    category: 'Vestidos',
    price: 'R$ 189,90',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80',
  },
  {
    id: '2',
    name: 'Blazer Alfaiataria Oversized',
    category: 'Casacos & Blazers',
    price: 'R$ 249,90',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80',
  },
  {
    id: '3',
    name: 'Calça Wide Leg Cós Alto',
    category: 'Calças',
    price: 'R$ 169,90',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80',
  },
  {
    id: '4',
    name: 'Blusa Canelada Gola Alta',
    category: 'Blusas',
    price: 'R$ 79,90',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80',
  },
];

export default function Feed() {
  const renderProductItem = ({ item }: { item: typeof PRODUCTS[0] }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.cardContent}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 16,
  },
  category: {
    fontSize: 12,
    color: '#888',
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 4,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D81B60',
    marginBottom: 12,
  },
  buyButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});