import React from "react";

import { Text } from "components";
import { post, postTxaODg2HA2AbXuNfaGvP } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

const Home1Page = () => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  React.useEffect(() => {
    // callApi();
  }, []);

  function callApi1(data) {
    const req = {};

    postTxaODg2HA2AbXuNfaGvP(req)
      .then((res) => {
        setapiData1(res);

        localStorage.setItem("profileImage", JSON.stringify(res?.data));
      })
      .catch((err) => {
        console.error(err);
        toast.error("Impossibile recuperare media files");
      });
  }
  function callApi() {
    const data = {
        userId: JSON.parse(localStorage.getItem("userId")),
        email: JSON.parse(localStorage.getItem("email")),
    };

    axios.post("https://test.tresorh222.workers.dev",
    //  {"userId":"a","email":"a"},
     {headers: {
      // "Content-Type": "application/json",
      // "Origin": "http://localhost:3000",
      // "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE",
      // "Access-Control-Max-Age": "86400",
      // 'Access-Control-Allow-Credentials' :'true'
    }})
    // axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAHqFEaxGMSxzMO9iDaI9F-vwUCKuG89oc",
    // {
    //   "email": "cess@gmail.com",
    //   "password": "[YOUR_PASSWORD]",
    //   "returnSecureToken": true
    // },
    //  {headers: {
    //   // "Content-Type": "application/json",
    //   // 'Access-Control-Allow-Origin': '*',
    // }})
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
      // .then((res) => {
      //   setapiData(res);

      //   localStorage.setItem("presignedUrl", JSON.stringify(res?.data));

      //   callApi1(res);
      // })
      // .catch((err) => {
      //   console.error(err);
      //   toast.error("Impossibile recuperare media files");
      // });
  }

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter gap-[19px] items-center justify-start mx-[auto] p-[39px] sm:px-[20px] w-[100%]">
        <div onClick={callApi} className="bg-bluegray_100 h-[191px] md:px-[20px] sm:px-[20px] rounded-radius95 w-[15%]"></div>
        <Text
          className="mb-[503px] text-left text-white_A700 w-[auto]"
          as="h1"
          variant="h1"
        >
          Alice{" "}
        </Text>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home1Page;
