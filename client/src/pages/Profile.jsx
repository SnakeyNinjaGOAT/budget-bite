import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import {
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/userSlice";
const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercent, setFilePercent] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const resetForm = () => {
    setFormData({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      resetForm();
      navigate("/profile");
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

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
  };

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercent(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  return (
    <div className="bg-gray-200">
      <div className="p-20">
        <div className="pt-3 px-6 pb-20 max-w-lg mx-auto bg-white rounded-lg">
          <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
          <form className="flex flex-col gap-4">
            <input
              type="file"
              hidden
              accept="image/*"
              ref={fileRef}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <img
              src={formData?.avatar || currentUser.avatar}
              alt="profile"
              className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
              onClick={() => {
                fileRef.current.click();
              }}
            />
            <p className="text-sm text-center">
              {fileUploadError ? (
                <span className="text-red-700">
                  Error Image Upload (Image must be ess than 2MB)
                </span>
              ) : filePercent > 0 && filePercent < 100 ? (
                <span className="text-slate-700">{`Uploading: ${filePercent}%`}</span>
              ) : filePercent === 100 ? (
                <span className="text-green-700">
                  Image successfully uploaded!
                </span>
              ) : (
                ""
              )}
            </p>
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
                value={formData.username || ""}
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
                value={formData.email || ""}
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
                value={formData.password || ""}
                placeholder="********"
                className="border w-full p-3 rounded-lg focus:outline-none"
                onChange={formHandler}
              />
            </div>
            <div>
              <p className="text-fresh-600 text-center">
                {updateSuccess ? "Successfully updated your details!" : ""}
              </p>
            </div>
            <div className="w-full flex justify-around">
              <button
                disabled={loading}
                className="mt-10 w-1/3 bg-fresh-600 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity:80"
                onClick={handleSubmit}
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
