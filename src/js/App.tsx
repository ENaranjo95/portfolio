import { useEffect, useState } from "react";
import { Container, Toggle, Typography } from "./components/index";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const handleDarkModeToggle = () => setDarkMode((prevValue) => !prevValue);

  useEffect(() => {
    document.documentElement.classList.toggle('dark');
    isDarkMode ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');
  }, [isDarkMode])

  return (
    <div>
        <Container>
          <Typography as='h1' className="col-span-5 col-start-4 text-center">About Me</Typography>
        </Container>
      {/* <div><Toggle onPressedChange={handleDarkModeToggle}>Dark Mode</Toggle></div>
      <div><Typography as='h1'>Hello Portfolio</Typography></div> */}
    </div>
  )
};

export default App;
