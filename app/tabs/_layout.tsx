import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'royalblue',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tabs.Screen 
        name="current" 
        options={{ 
          title: 'Current',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name="sun"
            size={25}
            color={focused? 'royalblue' : 'black'} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="upcoming" 
        options={{ 
          title: 'Upcoming',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name="clock"
            size={25}
            color={focused? 'royalblue' : 'black'} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="city" 
        options={{ 
          title: 'City',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name="home"
            size={25}
            color={focused? 'royalblue' : 'black'} />
          ),
        }} 
      />
    </Tabs>
  );
}