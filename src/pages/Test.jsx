import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("https://reqres.in/api/users/2");
        // Set the state with user data, not the entire response
        setUser(userResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(user); // Log the entire user object

  // Check if user is not null before accessing its properties
  if (user) {
    console.log("Email:", user.avatar);
  }

  return (
    <div>
      hey
      <img src={user.avatar} alt="" />;
    </div>
  );
};

export default Test;
