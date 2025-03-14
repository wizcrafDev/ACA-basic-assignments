import React, { useEffect, useState } from "react";

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getuser = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users/10");
        const data = await res.json();
        console.log("API Response:", data); // Check if "users" exists in the response
        // console.log("Users Array:", data.users);
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getuser();
  }, [setUser]);
  //   const user = {
  //
  //   };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-purple-400 shadow-md"
            src={user.image}
            alt="User Profile"
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600 text-sm">{user.gender}</p>
        </div>

        {/* Additional Details */}
        <div className="mt-4">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Age:</span>
            <span>{user.age}</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-2">
            <span className="font-medium">Birthdate:</span>
            <span>{user.birthDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
