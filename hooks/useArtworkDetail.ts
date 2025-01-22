import { DEFAULT_FIELDS } from '@/constants'
import { artworkService } from '@/services/artwork'
import { useQuery } from '@tanstack/react-query'


export const useArtworkDetail = (id: string) => {
    const { isLoading, data: artwork, isFetching } = useQuery({ 
        queryKey: ['movie', id], 
        queryFn: () => artworkService.getDetail(id, DEFAULT_FIELDS),
        staleTime: 1000 * 60 * 60 * 24
    })

    return { artwork, isLoading, isFetching }
}