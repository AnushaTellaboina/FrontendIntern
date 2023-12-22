import React from 'react'

import {v4 as uuidv4} from 'uuid'

import './Home.css'

import {useNavigate} from 'react-router-dom'

import {Authcontext} from '../Context/AuthcontextProvider'

function Home() {
  const {userData, setUserData} = React.useContext(Authcontext)
  const navigate = useNavigate()

  const [data, setData] = React.useState({
    id: uuidv4(),
    name: '',
    speed: '',
    time: '',
  })

  const handleChange = ({target}) => {
    const {name, value} = target
    setData({...data, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (userData.length < 10) {
      if (data.name !== '' && data.speed !== '' && data.time !== '') {
        setUserData([...userData, data])
        setData({
          name: '',
          speed: '',
          time: '',
        })
      } else {
        alert('All fields are required')
      }
    } else {
      alert("Can't add more than 10 participants")
    }
  }

  return (
    <div className="home container">
      <div className="form">
        <div className="header">
          <h2>RUNNER DETAILS</h2>
          <p>*You can add max 10 participants.</p>
        </div>
        <form className="form_section" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="inputs"
            type="text"
            placeholder="Enter Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <label htmlFor="speed">Speed</label>
          <input
            className="inputs"
            type="speed"
            placeholder="Enter Speed in km/h"
            name="speed"
            id="speed"
            value={data.speed}
            onChange={handleChange}
          />
          <label htmlFor="start time">Start Time</label>
          <input
            className="inputs"
            type="time"
            id="start time"
            name="time"
            value={data.time}
            onChange={handleChange}
          />
          <input type="submit" value="+ ADD RUNNER" />
        </form>
      </div>
      <div className="table_section">
        <h2>LIST OF PARTICIPANTS</h2>
        <div className="table_container">
          <table>
            <thead className="table_head">
              <tr>
                <th>Name</th>
                <th>Speed</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {userData.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.speed}Km/h</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="btn">
          <button
            type="submit"
            onClick={() => navigate('/Race')}
            className="button-49"
          >
            Start Race
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
