import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';


export default function SummaryLayout() {
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView>
          <Text>Summary for run {id}</Text>
        </SafeAreaView>
      );
}