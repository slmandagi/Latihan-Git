import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <Link className="nav-link" to="/">Dashboard</Link>
      <Link className="nav-link" to="/Products">Products</Link>
      <Link className="nav-link" to="/ListUsers">ListUsers</Link>
      <Link className="nav-link" to="/About">About</Link> */}
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" to="/">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Products">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    </div>
  </nav>
  )
}
