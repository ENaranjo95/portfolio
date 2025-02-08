import { useEffect, useState } from "react";
import { Container, Toggle, Typography } from "./components/index";
import Card from "./components/Card/Card";

import projects from "./data/projects";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const handleDarkModeToggle = () => setDarkMode((prevValue) => !prevValue);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
    isDarkMode
      ? localStorage.setItem("theme", "dark")
      : localStorage.removeItem("theme");
  }, [isDarkMode]);

  return (
    <div className="bg-transparent dark:bg-black">
      <div className="sm:grid-row-1 grid min-h-10 grid-cols-4 grid-rows-2 gap-2 sm:grid-cols-12 sm:gap-4">
        <div className="col-start-1 col-end-5 self-center justify-self-center sm:col-start-5 sm:col-end-9">
          <Typography as="h1" className="text-center">
            My Portfolio
          </Typography>
        </div>
        <div className="col-start-2 col-end-4 self-center justify-self-center sm:col-span-2 sm:col-start-11">
          <Toggle onPressedChange={handleDarkModeToggle}>Dark Mode</Toggle>
        </div>
      </div>
      <Container className="grid-rows-3">
        <Typography
          as="h2"
          className="col-start-1 col-end-5 self-center justify-self-center text-center sm:col-start-5 sm:col-end-9"
        >
          About Me
        </Typography>
        <Container className="col-start-1 col-end-13 row-start-2">
          <Typography
            as="h3"
            className="col-start-1 col-end-5 self-center justify-self-center text-center sm:col-start-5 sm:col-end-9"
          >
            Projects
          </Typography>
          <div className="col-span-7 col-start-4 row-start-2">
            {projects.map((project) => (
              <Card {...project} />
            ))}
          </div>
        </Container>
        <Container className="col-start-1 col-end-13 row-start-3">
          <Typography
            as="h3"
            className="col-start-1 col-end-5 self-center justify-self-center text-center sm:col-start-5 sm:col-end-9"
          >
            Contact
          </Typography>
        </Container>
      </Container>
    </div>
  );
};

export default App;
