import UserCard from "../components/UserCard";
import { Outlet , useOutletContext } from "react-router-dom";
// hook to access context data passed down from App component.
// pass context prop
function Home(){
  const users = useOutletContext();
  console.log(users)

    const userList = users.map(user =>{
        return <UserCard key={user.id} user={user}/>;
    });

    return (
      <main>
        <h1>Home!</h1>
        {userList}
        <Outlet context={users} />
      </main>
    );
};

export default Home;