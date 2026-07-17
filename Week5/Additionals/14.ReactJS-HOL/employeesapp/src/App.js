import { useState } from "react";
import EmployeesList from "./components/EmployeesList";
import ThemeContext from "./components/ThemeContext";
import "./App.css";

function App() {

    const [theme, setTheme] = useState("light");

    const changeTheme = () => {

        if (theme === "light") {

            setTheme("dark");

        } else {

            setTheme("light");

        }

    };

    return (

        <ThemeContext.Provider value={theme}>

            <div className="App">

                <h1>Employee Management</h1>

                <button onClick={changeTheme}>

                    Change Theme

                </button>

                <EmployeesList />

            </div>

        </ThemeContext.Provider>

    );

}

export default App;