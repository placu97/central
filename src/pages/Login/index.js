import React from "react";

import { Text, Input, Img, Button } from "components";
import * as yup from "yup";
import { postAccountsSignInWithPassword } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/useForm";

const LoginPage = () => {
  const [apiData2, setapiData2] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter valid email"),
      password: yup.string().required("Password is required"),
    });
  const form = useForm(
    { email: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi2(data) {
    const req = { data: { ...data, returnSecureToken: "true" } };

    postAccountsSignInWithPassword(req)
      .then((res) => {
        setapiData2(res);

        localStorage.setItem("email", JSON.stringify(res?.email));

        localStorage.setItem("userId", JSON.stringify(res?.localId));

        localStorage.setItem("idToken", JSON.stringify(res?.idToken));

        localStorage.setItem("refreshToken", JSON.stringify(res?.refreshToken));

        navigate("/home1");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Errore di accesso !");
      });
  }

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-inter items-center justify-start mx-[auto] py-[79px] w-[100%]">
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1280px] sm:px-[20px] md:px-[40px] px-[50px] py-[10px] w-[100%]">
          <Text
            className="text-left text-white_A700 w-[auto]"
            as="h1"
            variant="h1"
          >
            Email
          </Text>
          <Input
            className="font-semibold p-[0] sm:text-[25px] md:text-[38px] text-[40px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
            wrapClassName="flex w-[100%]"
            type="email"
            onChange={(e) => {
              form.handleChange("email", e.target.value);
            }}
            errors={form?.errors?.email}
            value={form?.values?.email}
            name="input"
            placeholder="Inserisci la tua email"
            prefix={
              <Img
                src="images/img_mail.svg"
                className="mr-[34px] my-[auto]"
                alt="mail"
              />
            }
          ></Input>
        </div>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1280px] mt-[34px] sm:px-[20px] md:px-[40px] px-[50px] py-[10px] w-[100%]">
          <Text
            className="text-left text-white_A700 w-[auto]"
            as="h1"
            variant="h1"
          >
            Password
          </Text>
          <Input
            className="font-semibold p-[0] sm:text-[25px] md:text-[38px] text-[40px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
            wrapClassName="flex w-[100%]"
            type="password"
            onChange={(e) => {
              form.handleChange("password", e.target.value);
            }}
            errors={form?.errors?.password}
            value={form?.values?.password}
            name="input One"
            placeholder="Password di almeno 6 caratteri"
            prefix={
              <Img src="images/img_lock.svg" className="mr-[34px]" alt="lock" />
            }
          ></Input>
        </div>
        <Button
          className="common-pointer cursor-pointer font-bold max-w-[1180px] mb-[15px] mt-[132px] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white_A700 w-[100%] md:w-[90%] sm:w-[90%]"
          onClick={() => {
            form.handleSubmit(callApi2);
          }}
        >
          Accedi
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
