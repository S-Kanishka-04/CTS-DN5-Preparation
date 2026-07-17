import EmployeeCard from "./EmployeeCard";
import { employees } from "./Employees";

function EmployeesList() {

    return (

        <div>

            {
                employees.map((employee) => (

                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                    />

                ))
            }

        </div>

    );

}

export default EmployeesList;