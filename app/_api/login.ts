import axios from "axios";
import Swal from "sweetalert2";

export const handleLogin = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  data: any
) => {
  setLoading(true);

  try {
    console.log("data", data);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      data
    );
    const { token } = response.data;
    const { username } = response.data.user;
    const user = {
      token: token,
      username: username,
    };
   await Swal.fire({
      icon: "success",
      text: "login successfull",
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      padding: "10px 20px",
    });

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/"
    setLoading(false);
  } catch (error: any) {
    console.log("error", error);

    Swal.fire({
      icon: "error",
      text: error.response?.data.message,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      padding: "10px 20px",
    });
    setLoading(false);
  }
};

export const handleSignup = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  data: any
) => {
  setLoading(true);

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/signup`,
      data
    );

    await Swal.fire({
      icon: "success",
      text: "signup successfull",
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      padding: "10px 20px",
    });

    setLoading(false);
    window.location.href="/login"
  } catch (error: any) {
    console.log("error", error);

    Swal.fire({
      icon: "error",
      text: error.response?.data.message,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      padding: "10px 20px",
    });
    setLoading(false);
  }
};
