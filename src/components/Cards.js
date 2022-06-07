import { useState } from 'react'
import './Cards.css'

export default function Cards({ input }) {
    const [details, setDetails] = useState([])

    const robo = async() => {
        const res = await fetch("http://localhost:3000/articles")
        const data = await res.json()
        setDetails(data)
    }

    const filteredDetails = details.filter(
      (detail) => {
        if (input === '') {
          return detail
          
        } else {
          return detail.author.toLowerCase().includes(input.toLowerCase())
        }
      }
    )

    robo()

  return (
    <div className='card-grid'>
      {
        filteredDetails.map((detail) => {
          return (
            <div key={detail.id} className="robo-cards">
              <img src={`https://robohash.org/${detail.id}`} alt="robots" />
              <h3>{detail.author}</h3>
              <h6>{detail.email}</h6>
            </div>
          )
        })
      }
    </div>
  )
}
