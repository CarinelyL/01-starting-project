function UserData(){
  let user = {
    first: "Carinely",
    last: "Lajara",
    age: 22,
  };
  return(
    <div>
      <ul>
        User Data
        <li>First: {user.first}</li>
        <li>Last: {user.last}</li>
        <li>Age: {user.age}</li>
      </ul>
    </div>
  );
}

export default UserData;