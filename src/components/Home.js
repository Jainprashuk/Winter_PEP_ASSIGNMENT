import { useNavigate, Link } from "react-router-dom";
import HomeImage from '../assets/download.jpeg';

const Home = () =>{
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogin = () =>{
        navigate("/login");
    }

    const handleSignup = () =>{
        navigate("/signup");
    }

    return(
        <section className="hero is-fullheight">
        <div className="hero-body">
        {!token ? <div className="container has-text-centered">
            {/* <img src={HomeImage} /> */}
            <h1 className="title">Winter Pep Assignment</h1>
            
            <h1 className="title">Welcome to our homepage</h1>
            <p className="subtitle">You must login or signup to see details of the site.</p>
            <br/>
            <br/>
            <nav class="level">
                
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>
<br/>
            
            <button className="button is-danger mr-2" onClick={handleLogin}>Login</button> 
            <button className="button is-primary" onClick={handleSignup}>SignUp</button> 
        </div>:<div className="container has-text-centered">
        {/* <img src={HomeImage} /> */}
        <h1 className="title">Welcome to our homepage</h1>
        <p className="subtitle"><Link to="/create/post">You can Create a new Post BY CLicking Me.</Link></p>
        <p className="subtitle"><Link to="/">View List of Posts</Link></p>
        </div>}
        </div>
        </section>
    )
}

export default Home;