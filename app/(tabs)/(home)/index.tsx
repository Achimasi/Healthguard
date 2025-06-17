import { Link } from 'expo-router';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const mockRuns = [
    {
      id: '1',
      date: '2025-06-15',
      distance: '5.2 mi',
      time: '42:15',
      zone: 'Z2',
      debrief: 'You ran mostly in Zone 2 with steady pacing. Great for aerobic development!',
    },
    {
      id: '2',
      date: '2025-06-13',
      distance: '3.5 mi',
      time: '28:10',
      zone: 'Z3',
      debrief: 'You entered Zone 3, indicating threshold work. Consider more recovery after this.',
    },
    {
      id: '3',
      date: '2025-06-10',
      distance: '6.0 mi',
      time: '50:30',
      zone: 'Z1-Z2',
      debrief: 'Long and easy effort. Excellent base building!',
    },
  ];

  return(
    <SafeAreaView>
      <Text style={styles.header}>Running Log</Text>
        <FlatList
          data={mockRuns}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Link
                href={{
                  pathname: '/summary/[id]',
                  params: { id: item.id },
                }}>
                <Text style={styles.date}>{item.date}</Text>
                <Text>{item.distance} - {item.time}</Text>
                <Text>Zone: {item.zone}</Text>
                <Text style={styles.tapHint}>Tap to view AI debrief</Text>
              </Link>
            </View>
          )}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  runItem: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  date: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tapHint: {
    marginTop: 6,
    fontStyle: 'italic',
    color: '#666',
    fontSize: 12,
  },
});