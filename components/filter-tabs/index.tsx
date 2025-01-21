import { View, Text, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import TabButton from './tab-button'

interface Props {
    classifications: ClassificationName[],
    handleSelect: (classification: string) => void,
    selected: string
}

const FilterTabs = ({ classifications, handleSelect, selected }: Props) => {

  const classificationsFiltered = useMemo(() => 
      classifications.filter((classification) => classification.classification_title !== null)
  ,[classifications])  
  
  return (
    <FlatList
        data={classificationsFiltered ?? []}
        horizontal
        keyExtractor={item => item.classification_title + Math.random().toString()}
        renderItem={({ item }) => (
            <TabButton onPress={() => handleSelect(item.classification_title)} 
                       selected={selected === item.classification_title}>
                {item.classification_title}
            </TabButton>
        )} 
    />
  )
}

export default FilterTabs