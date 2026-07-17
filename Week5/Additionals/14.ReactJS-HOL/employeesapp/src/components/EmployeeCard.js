import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function EmployeeCard({ employee }) {

    const theme = useContext(ThemeContext);

    return (

        <div style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "15px"
        }}>

            <h2>{employee.name}</h2>

            <h4>{employee.designation}</h4>

            <button className={theme}>
                View Profile
            </button>

        </div>

    );

}

export default EmployeeCard;