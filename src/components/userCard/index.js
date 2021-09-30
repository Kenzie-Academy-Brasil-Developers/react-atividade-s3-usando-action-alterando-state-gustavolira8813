import { changeName } from "../../store/modules/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./styles.css";
function UserCard() {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const handleNewName = () => {
    dispatch(changeName(newName));
  };
  return (
    <div>
      <h3>HyperName</h3>
      <div className="boxInput">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New Name"
        />
        <button onClick={handleNewName}>Change</button>
      </div>
      {user.name && <h4 className="output">Name: {user.name}</h4>}
    </div>
  );
}
export default UserCard;
