import type { NextPage } from "next";
import { selectAuthState, setAuthState } from "@/state/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div className='w-full h-screen flex flex-col gap-y-3 items-center justify-center'>
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
      className='py-3 px-6 bg-green-600 rounded-xl'
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </div>
  );
};

export default Home;