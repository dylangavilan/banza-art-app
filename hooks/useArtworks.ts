import { artworkService } from '@/services/artwork'
import { useInfiniteQuery } from '@tanstack/react-query'

const useArtworks = () => {
  const fields = ['id', 'title']

  const artworkQuery = useInfiniteQuery({
    queryKey: ['artworks'],
    queryFn: ({ pageParam = 1 }) => {
        return artworkService.get(pageParam, fields)
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage) => (
        lastPage.pagination && lastPage.pagination.next_url 
            ? lastPage.pagination.current_page + 1 
            : undefined
    ),
  })
  console.log('log', artworkQuery.data?.pages)
  return {
    data: artworkQuery.data,
    isLoading: artworkQuery.isLoading,
    nextPage: artworkQuery.fetchNextPage,
    hasNext: artworkQuery.hasNextPage,
    isFetchingNextPage: artworkQuery.isFetchingNextPage
  }
}

export { useArtworks }