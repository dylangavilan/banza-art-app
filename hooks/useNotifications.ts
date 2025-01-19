import { Text, View, Button, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Permisos para notificaciones no otorgados.');
      return;
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }
}
export const useNotifications = () => {
    
    useEffect(() => {
        registerForPushNotificationsAsync();
    }, []);

    const sendLocalNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
            title: 'Notificación',
            body: '¡Esta es una notificación local programada!',
            data: { someData: 'data goes here' },
            },
            trigger: { 
                type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, 
                repeats: false, seconds: 1 
        },});
    };
    return {
        sendLocalNotification
    }
}