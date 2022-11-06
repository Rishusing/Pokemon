import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayCards from './DisplayCards'
import { GrNext, GrPrevious } from 'react-icons/gr'
import './Main.css'

const Main = () => {
  const [pageNumber, setPageNumber] = useState(2)
  const [title, setTitle] = useState('sky')
  const [images, setImages] = useState([])

  const titleChange = (e) => {
    if (e.target.value !== '') {
      setTitle(e.target.value)
    }
  }

  const Decrease = () => {
    setPageNumber(pageNumber - 1)
  }
  const Increase = () => {
    setPageNumber(pageNumber + 1)
  }

  useEffect(() => {
    console.log('titleChanging')
    var trimed = title.trim()
    let updatedTitle = trimed.toLowerCase()

    axios
      .get(
        `https://pixabay.com/api/?key=31110155-0388bf1450062d58ec1097a5b&q=${updatedTitle}&page=${pageNumber}`,
      )
      .then((res) => {
        setImages(res.data.hits)
      })
      .catch((err) => {
        console.log('Something went wrong')
      })
  }, [title, pageNumber])

  return (
    <div>
      <div className="inpAndPage">
        <div className="search">
          <input
            type="text"
            onChange={titleChange}
            placeholder="Search images"
          />
        </div>
        <div className="pagination">
          {pageNumber > 1 ? (
            <GrPrevious className="previous" onClick={Decrease} />
          ) : null}
          <h3>{pageNumber}</h3>
          <GrNext className="next" onClick={Increase} />
        </div>
      </div>

      <DisplayCards images={images} />

      {/* <DisplayCards images={images} /> */}
    </div>
  )
}
export default Main
