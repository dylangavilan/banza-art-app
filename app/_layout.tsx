import { FavoritesProvider } from "@/context/favorite-context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <FavoritesProvider>
        <Stack  
          initialRouteName="(tabs)"
          screenOptions={{
              headerTitleAlign: 'center',
            }}>
          <Stack.Screen 
                name="(tabs)" 
                options={{ headerShown: false }} 
          />
          <Stack.Screen 
                name="detail/[id]"
                options={{ 
                  headerShown: true,
                  headerTitle: 'Detail' ,
                  animation: 'slide_from_right',
          }} /> 
        </Stack>
      </FavoritesProvider>
    </QueryClientProvider>
)
}
