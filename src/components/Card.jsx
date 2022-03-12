import { useDispatch } from "react-redux";
import { fetchCurrentUser } from ".././store/user-action";

const Card = ({person}) => {
  const dispatch = useDispatch();
    return (
      <article>
       <div
                key={person.id}
                className="cursor-pointer flex justify-center align-middle rounded-md p-1 m-1 hover:shadow-md"
                onClick={() => {
                  dispatch(fetchCurrentUser(person.id));
                }}
              >
                <div className="justify-center align-middle">
                  <img src={person.avatar} alt={`user-${person.first_name}`} />
                  <p>{person.first_name}</p>
                </div>
              </div>
      </article>
    );
  };
  
  export default Card;