
import React, { memo, useCallback } from 'react'
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import {
  TextField
} from '@material-ui/core';

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch('pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa')

const Giphy = memo(() => {
  const [search, setSearch] = React.useState('')
  const [limit] = React.useState(10)

  const fetchGifs = (offset) => {
    if (search) {
      return gf.search(search, { offset, limit })
    }
    return gf.trending({ offset, limit })
  }
  const handleSearch = React.useCallback((e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }, [])
  
  return (
    <>
      <div className='container-img'>
        <img alt='' src="https://developers.giphy.com/branch/master/static/confetti-0f9eab9b22b390e18bf9b433aedc27c2.gif" />
        <TextField className='center' variant="outlined" onChange={handleSearch} />
      </div>
      <Grid width={1000} columns={3} fetchGifs={fetchGifs} />
    </>
  )
})


const GridComponent = (props) => {
  const { fetchGifs } = props
  return <Grid width={1000} columns={3} fetchGifs={fetchGifs} />
}

export default Giphy