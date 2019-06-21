import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <form>
        <input type="text" />
      </form>
      <p>
        <Link to="/login">login</Link>
      </p>
    </div>
  )
}

export default Home
