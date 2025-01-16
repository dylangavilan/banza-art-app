import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <QueryClientProvider client={new QueryClient()}>

      <Stack screenOptions={{ headerShown: false}} />
    </QueryClientProvider>
)
}
