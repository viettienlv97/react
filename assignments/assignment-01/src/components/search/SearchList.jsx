import searchs from '../../../data/search.json'
import SearchItem from './SearchItem'

const SearchList = () => {
  return (
    <div>
      {searchs.map((search, idx) => {
        return (
          <SearchItem
            search={search}
            key={idx}
          />
        )
      })}
    </div>
  )
}

export default SearchList
