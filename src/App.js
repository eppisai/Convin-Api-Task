import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ToastContainer } from "react-toastify";
import Card from "./components/Card";
import HeroUser from "./components/HeroUser";
import "react-toastify/dist/ReactToastify.css";
import { fetchAllUsers } from "./store/user-action";
import "./App.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function App() {
  const dispatch = useDispatch();
  const [onload, setOnload] = useState(false);
  if (onload === false) {
    dispatch(fetchAllUsers());
  }
  const users = useSelector((state) => state.users.allUsers);
  const userSLoaded = useSelector((state) => state.users.usersloaded);
  useEffect(() => {
    setOnload(true);
  }, []);

  return (
    <>
      <ToastContainer closeOnClickrtl={true} />
      <HeroUser/>

      {userSLoaded ? (
        <Carousel responsive={responsive}>
          {users.map((user) => {
            return (
              <Card person={user}/>
            );
          })}
        </Carousel>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
