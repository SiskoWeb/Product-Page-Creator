"use client";

import Joi from "joi-browser";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthService from "@/services/AuthApi";
import notify from "../Global/useNotifaction";
import useValidator from "../Global/useFormValidator";
import Router from "next/router";
import apiClient from "@/services/baseURL";

export default function RegisterHook() {
  const [postResult, setPostResult] = useState<string | null>(null);
  const [datatest, setDatatest] = useState([]);
  const router = Router;

  const initialData = {
    nameStore: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  // this schema from joi to add requires
  const schema = {
    nameStore: Joi.string().required().label("nameStore"),
    email: Joi.string().email().required().label("email"),
    password: Joi.string().min(6).required().label("password"),
    passwordConfirm: Joi.ref("password"),
  };

  // this for validate data from user
  const { data, errorsValidator, handleChange, validateData } = useValidator(
    initialData,
    schema
  );

  // passing data to mutate (react query) Register

  // passing data to mutate (react query) login
//   const { isLoading: loading, mutate: loginBtn } = useMutation<any, Error>(
//     async () => {
//       return await AuthService.signup(data);
//     },
//     {
//       onSuccess: (res: any) => {
//         notify("تم إنشاء حساب بنجاح ", "success");

//         setTimeout(() => {
//           router.push("/login");
//         }, 2000);
//       },
//       onError: (error: any) => {
//         if (error.response?.data) {
//           const errorsList = error.response?.data?.errors;
//           errorsList?.map((item: { msg: string }) => notify(item.msg, "warn"));
//         }
//       },
//     }
//   );
  console.log("from me");
  const getdataTest = async () => {
    const data = await apiClient.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  };

  const datao = getdataTest();
//   useEffect(() => {
//     if (loading) setPostResult("posting...");
//   }, [loading]);

//   const handleButtonClick = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     if (validateData()) {
//       try {
//         loginBtn();
//       } catch (err) {
//         console.log("pb from Trycatch");
//       }
//     } else {
//       // Invalid form, display error messages
//       console.log("form validator erroes ", errorsValidator);
//     }
//   };

  return [ datao];
}
