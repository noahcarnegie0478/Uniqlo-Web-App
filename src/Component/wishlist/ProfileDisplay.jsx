import React from "react";

function ProfileDisplay({ user, formatted, handleLogout }) {
  return (
    <div className="left-side w-3/10 border-1 flex flex-row items-start relative ">
      <div className=" pl-20 mt-70 ">
        <div className="name my-2">
          <p className="font-bold uppercase text-3xl"> User Name</p>
          <p className="font-semibold uppercase text-xl">
            {user ? user?.username : "Unknow"}
          </p>
        </div>
        <div className="email my-2">
          <p className="font-bold uppercase text-3xl"> User Email</p>
          <p className="font-semibold uppercase text-xl">{user.email}</p>
        </div>
        <div className="dob my-2">
          <p className="font-bold uppercase text-3xl"> User Date Of Birth</p>
          <p className="font-semibold uppercase text-xl">{formatted}</p>
        </div>
        <div className="coupon my-2">
          <p className="font-bold uppercase text-3xl">User Coupon</p>
          <p className="font-semibold uppercase text-xl">{user?.coupon}</p>
        </div>
      </div>

      <div className="logout-button">
        <button
          className="w-full absolute bottom-0 bg-red-500 h-10 text-white font-bold left-0 hover:bg-red-600 active:bg-red-400 "
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileDisplay;
