import "./index.css";

function NavBar() {
  return (
    <header className="navbar">
      <img className="logo" src = "https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" width= "100" height = "auto" alt = "SoC logo"></img>
      <button>Register</button>
      <button>Login</button>
    </header>
  );
}

export default NavBar;
