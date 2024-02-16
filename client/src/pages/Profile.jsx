import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from "../redux/user/userSlice";
const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignout = async () => {
    dispatch(signOutUserStart());

    try {
      const res = await fetch("/api/auth/signout");

      const data = await res.json();

      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }

      dispatch(signOutUserSuccess(data));
      navigate("/sign-in");
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };

  const formHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <div className="bg-gray-200">
      <div className="p-20">
        <div className="pt-3 px-6 pb-20 max-w-lg mx-auto bg-white rounded-lg">
          <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
          <form className="flex flex-col gap-4">
            <input type="file" hidden accept="image/*" />
            <img
              src={formData?.avatar || currentUser.avatar}
              alt="profile"
              className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
            />
            <div className="flex flex-col items-center gap-4">
              <label
                htmlFor="username"
                className="self-start text-2xl font-semibold"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                placeholder={currentUser.username}
                className="border w-full p-3 rounded-lg focus:outline-none"
                onChange={formHandler}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <label
                htmlFor="email"
                className="self-start text-2xl font-semibold"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder={currentUser.email}
                className="border w-full p-3 rounded-lg focus:outline-none"
                onChange={formHandler}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <label
                htmlFor="password"
                className="self-start text-2xl font-semibold"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="border w-full p-3 rounded-lg focus:outline-none"
                onChange={formHandler}
              />
            </div>
            <div className="w-full flex justify-around">
              <button
                disabled={loading}
                className="mt-10 w-1/3 bg-fresh-600 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity:80"
              >
                {loading ? "Loading..." : "Update"}
              </button>
              <button
                disabled={loading}
                className="mt-10 w-1/3 bg-red-600 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity:80"
                onClick={handleSignout}
              >
                Sign Out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
