import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("user", "true");
    setUser(true);
    navigate("/checkout");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <p>Click below to login as guest.</p>
      <button onClick={handleLogin}>Login as Guest</button>
    </div>
  );
}

export default Login;
