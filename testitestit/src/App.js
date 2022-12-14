import * as React from 'react'
import { useState } from "react"
import axios from 'axios'
const URL = 'http://hn.algolia.com/api/v1/search'

function App() {

  const [stories, setStories] = React.useState([])
  const [error, setError] = React.useState(null)

  async function handleFetch(event) {
    let result

    try {
      result = await axios.get(`${URL}?query=React`)

      setStories(result.data.hits)
    } catch (error) {
      setError(error)
    }
  }

  const [showElement, setShowElement] = useState(false)
  return (
    <div className="App">
      <div className="container">
        <label>
          <input type="checkbox" data-testid="cbShowHide" checked={showElement} onChange={e => setShowElement(e.target.checked)} />
          <span>näytä/piilota</span>
        </label>
        {showElement && <div className="box" data-testid="box">klikattu</div>}
      </div>
      <button type="button" onClick={handleFetch}>
        Hae juttuja
      </button>

      {error && <span>jotain meni pieleen</span>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App