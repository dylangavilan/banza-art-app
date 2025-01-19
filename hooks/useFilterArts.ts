
import React, { useMemo, useState } from 'react'

export const useFilterArts = (data: Artwork[], classifications: ClassificationName[]) => {
    const [search, setSearch] = useState<string>('')
    const [selected,setSelected] = useState<string>('')
    
    const filteredData = useMemo(() => {
      if (!data) return []
      return data.filter(art => 
        art.title.toLowerCase().includes(search.toLowerCase()) && 
        (selected ? art.classification_title?.toLowerCase() === selected.toLowerCase() : true)
      )
    }, [search, data, classifications, selected])
  
    const handleSelect = (classification: string) => {
      if(selected === classification) return setSelected('')
      setSelected(classification)
    }
    return {
        filteredData,
        setSearch,
        handleSelect,
        selected
    }
}
