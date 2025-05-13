// components/LoginButton.jsx
import { auth, provider, signInWithPopup } from '../Firebase';

export default function LoginButton({ setUser }) {
  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  return (
    <button onClick={handleLogin} className="bg-yellow-500 text-white px-4 py-2 rounded">
      Sign in with Google
    </button>
  );
}
