import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Welcome Taskly Manager System</h1>
      <p>
        If You Have an Account Please Login in here 👉
        <Link to="/login">Login </Link>
      </p>
    </div>
  );
}
