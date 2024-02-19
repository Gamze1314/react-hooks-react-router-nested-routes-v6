//Outlet included in the component that has nested routes
// it works with router to determine which component will be rendered based on current route

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App(){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:4000/users")
        .then(r => r.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error));
    }, []);

    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet context={users}/>
        </>
    );
};

// the code changes : users data being fetched here, so we can pass users down via Outlet component's context prop => we can access it within our nested routes
export default App;
