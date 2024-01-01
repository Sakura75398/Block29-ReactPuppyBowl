import { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

function AddPuppyForm() {

  const [ name, setName ] = useState('')
  const [ breed, setBreed ] = useState('')
  const [ status, setStatus ] = useState('bench')
  const [ imageUrl, setImageUrl ] = useState('')

  const [ successMsg, setSuccessMsg ] = useState('')

  const navigate = useNavigate()

  // console.table({name, breed, status, imageUrl})

  async function handleSubmit(evt) {
    evt.preventDefault() // prevents default behavior of the form

    let API ='https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/'    

    try {

      const { data: json } = await axios.post(`${API}/players`, {
        name, breed, status, imageUrl
      })

      /*
        This is a way to show the user a player was added.
        (We are redirecting right away so it may not show up)
      */
      if (json.success) {
        setSuccessMsg('A new player was successfully added')
      } else {
        setSuccessMsg('There was an error in adding new player.  Please check console.')
      }

      navigate('/') // redirect us home after we added the new puppy
    } catch(err) {
      console.error(err.message)
    }

  }


  return <div>
  

    <form onSubmit={handleSubmit}>
      <label>
          Name:
        <input value={name} onChange={(evt) => setName(evt.target.value) }/>
      </label>
      <label>
          Breed:
          <input value={breed} onChange={(evt) => setBreed(evt.target.value) }/>
      </label>
      <label>
          Status:
          {/* <input value={status} onChange={(evt) => setStatus(evt.target.value) }/> */}
          {/* <h5>{statusMsg}</h5> */}
          <select onChange={(evt) => setStatus(evt.target.value)}>
            <option value='bench'>Bench</option>
            <option value='field'>Field</option>
          </select>
      </label>
      <label>
          ImageUrl:
          <input value={imageUrl} onChange={(evt) => setImageUrl(evt.target.value) }/>
      </label>

      <button type='submit'>Add New Puppy</button>
    </form>

    { successMsg }
  </div>
}

export default AddPuppyForm