import { FavoritesProvider } from "@/context/favorite-context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <FavoritesProvider>
        <Stack  screenOptions={{
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
                  headerTitle: 'Detail' 
          }} /> 
        </Stack>
      </FavoritesProvider>
    </QueryClientProvider>
)
}
