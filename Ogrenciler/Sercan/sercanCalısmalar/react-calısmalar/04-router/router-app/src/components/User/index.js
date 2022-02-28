import React from "react";
import { Link, useParams } from "react-router-dom";
import '../../components/style.css'
export default function User(props) {
  const { userId } = useParams();
  const data = props.users.filter((user) => user.id.toString() === userId);
  console.log(data);
  let loaded = props.isLoaded;
  if (loaded) {
    return <div>Giriş yapmadınız</div>;
  }
  return (
    <div>
      {
        <div>
          <ul>
            <li> User id: {userId}</li>
            <li> Name: {data[0].name}</li>
            <li> Username: {data[0].username}</li>
            <li> Email: {data[0].email}</li>
            <li> Phone: {data[0].phone}</li>
            <li> WebSite: {data[0].website}</li>
          </ul>

          <ul>
            <li> Adress: </li>
            <li>City:{data[0].address.city}</li>
            <li>Street:{data[0].address.street}</li>
            <li>Suite:{data[0].address.suite}</li>
            <li>Zip:{data[0].address.zipcode}</li>
          </ul>
        </div>
      }
      <br />
      <Link to="/"> Go to Home Page</Link>
      <h2> this is user page</h2>
      <p> We are happy to see you</p>
    </div>
  );
}
