import { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

function SinglePuppy() {

  const [ puppy, setPuppy ] = useState({})

  const { id } = useParams()


  useEffect(() => {
    fetchSinglePuppy()
  }, [])


  async function fetchSinglePuppy() {
    let API ='https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/'

    try {
      const { data: json } = await axios.get(`${API}/players/${id}`)

      setPuppy(json.data.player)
    } catch(err) {
      console.error(err.message)
    }
  }


console.log(puppy)

  return <div className='details'>
    { 
      puppy.id ?
        <div className='single-puppy'>
          <h2>{puppy.name}</h2>
          <h3># {puppy.id}</h3>
          <h3>Breed: {puppy.breed}</h3>
          <h4>Status: {puppy.status}</h4>
          <img src={puppy.imageUrl}/>
        </div>
      :
        <h1>No puppy was found with id: "{id}".  Try again.</h1>

    }
  </div>
}

export default SinglePuppy