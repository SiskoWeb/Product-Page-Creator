import apiClient from "./baseURL";

const login = async (body: object) => {
  const response = await apiClient.post("/auth/login", body);
  return response.data;
};

const signup = async (body: object) => {
  const response = await apiClient.post("/auth/signup", body);
  return response.data;
};

const AuthService = {
  signup,
  login,
};

export default AuthService;
