import { artworkService } from '@/services/artwork'
import { useInfiniteQuery } from '@tanstack/react-query'

const useArtworks = () => {
  const fields = ['id', 'title', 'image_id', 'artist_title']
  // to do: implementar filter por labels, hay que pasarlo como segundo param nomas

  const artworkQuery = useInfiniteQuery({
    queryKey: ['artworks'],
    queryFn: ({ pageParam = 1 }) => {
        return artworkService.getAll(pageParam, fields)
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage) => (
        lastPage.nextPage 
            ? lastPage.nextPage
            : undefined
    ),
  })

  return {
    data: artworkQuery.data,
    isLoading: artworkQuery.isLoading,
    nextPage: artworkQuery.fetchNextPage,
    hasNext: artworkQuery.hasNextPage,
    isFetchingNextPage: artworkQuery.isFetchingNextPage
  }
}

export { useArtworks }