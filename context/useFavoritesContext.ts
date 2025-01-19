import { useContext } from "react"
import { FavoritesContext } from "./favorite-context"

export function useFavorites() {
    const context = useContext(FavoritesContext)
    if (context === undefined) {
      throw new Error('error with favorite context')
    }
    return context
}
  