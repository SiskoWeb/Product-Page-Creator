"use client";

import Joi from "joi-browser";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthService from "@/services/AuthApi";
import notify from "../Global/useNotifaction";
import useValidator from "../Global/useFormValidator";
import apiClient from "@/services/baseURL";

export default function RegisterHook() {
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

  console.log("from me");
  const getdataTest = () => {
    return ["ya", "gola", "bbd", "dgfff", "ya", "gola", "bbd", "dgfff"];
  };

  const datao = getdataTest();

  return [datao];
}
