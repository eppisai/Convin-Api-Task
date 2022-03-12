import { useSelector } from "react-redux";

const HeroUser = () => {
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <div className="p-1 flex justify-center">
      {Object.keys(currentUser).length === 0 ? (
        <div className="p-12 m-12 h-[65vh] w-full flex flex-col align-middle justify-center border shadow-xl">
          <p className="flex justify-center align-middle w-full h-full text-slate-400 mt-[17vw]">
            Click on any card to display User Info
          </p>
        </div>
      ) : (
        <div className="p-12 m-12 h-[65vh] w-full rounded-md flex flex-col align-middle justify-center border shadow-xl">
          <img
            className="inline object-cover w-[250px] h-[250px] mr-2 rounded-full"
            src={currentUser.avatar}
            alt="user-img"
          />
          {currentUser.first_name} {currentUser.last_name}
          <br />
          {currentUser.email}
          <br />
        </div>
      )}
    </div>
  );
};

export default HeroUser;
