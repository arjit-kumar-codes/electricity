import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { auth } from "./firebase";
import AppRoutes from "./components/routes";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init();
    // const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    //   setUser(currentUser);
    // });
    // return () => unsubscribe();
  }, []);

  return (
    <AppRoutes user={user} />
  );
}

export default App;
