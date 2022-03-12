import { usersActions } from "./user-slice";
import { toast } from "react-toastify";

export const fetchAllUsers = () => {
    const id = toast.loading("fetching data from API")
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch(
                "https://reqres.in/api/users"
            )

            const data = await res.json();
            return data;
        };
        try {
            const users = await fetchHandler();
            dispatch(usersActions.addUsers(users.data))
            toast.update(id, {
                render: `data fetched`,
                type: "success",
                isLoading: false,
                autoClose: 500
              });
        } catch (err) {
            toast.update(id, {
                render: err,
                type: "error",
                isLoading: false,
                autoClose: 500
              });      
        }
    };
};

export const fetchCurrentUser = (userId) => {
    const id = toast.loading("fetching current user's data from API")
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch(
                "https://reqres.in/api/users/" + userId
            )

            const data = await res.json();
            return data;
        };
        try {
            const user = await fetchHandler();
            dispatch(usersActions.addUser(user.data))
            toast.update(id, {
                render: `user data fetched`,
                type: "success",
                isLoading: false,
                autoClose: 500
              });
        } catch (err) {
            toast.update(id, {
                render: err,
                type: "error",
                isLoading: false,
                autoClose: 500
              });      
        }
    };
};