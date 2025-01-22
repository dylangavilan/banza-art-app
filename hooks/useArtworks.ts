import { DEFAULT_FIELDS } from '@/constants'
import { artworkService } from '@/services/artwork'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

const useArtworks = () => {

  const artworkQuery = useInfiniteQuery({
    queryKey: ['artworks'],
    queryFn: ({ pageParam = 1 }) => {
        return artworkService.getAll(pageParam, DEFAULT_FIELDS)
    },
    staleTime: 1000 * 60 * 60,
    getNextPageParam: (lastPage) => (
        lastPage.nextPage 
            ? lastPage.nextPage
            : undefined
    ),
  })

  const classificationsQuery = useQuery({
    queryKey: ['classifications'],
    queryFn: () => artworkService.getClassifications(),
    staleTime: 1000 * 60 * 60 * 24
  })
  
  return {
    data: artworkQuery.data?.pages.flatMap(page => page.artworks),
    classifications: classificationsQuery.data,
    isLoading: artworkQuery.isLoading,
    nextPage: artworkQuery.fetchNextPage,
    hasNext: artworkQuery.hasNextPage,
    isFetchingNextPage: artworkQuery.isFetchingNextPage
  }
}

export { useArtworks }