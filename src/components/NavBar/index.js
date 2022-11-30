import "./index.css";

/**
 * Renders the navbar with login/register buttons (not functional yet!)
 * @component 
 */

function NavBar() {
  return (
    <header className="navbar">
      <div>
        <img className="logo" src = "https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" width= "100" height = "auto" alt = "SoC logo"></img>
        <h1>School Of Code Study Hub</h1>
      </div>
      <div>
        <button>Register</button>
        <button>Login</button>
      </div>
    </header>
  );
}

export default NavBar;
