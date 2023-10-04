import React, { useState } from "react";

type LoginSuccessMessage = "SUCCESS";
type LoginFailMessage = "FAIL";

interface LoginResponse {
  message: LoginSuccessMessage | LoginFailMessage;
  token: string;
}

const login = async (
  username: string | undefined,
  password: string | undefined
): Promise<LoginResponse | null> => {
  // TODO: 올바른 username, password를 입력하면 {message: 'SUCCESS', token: (원하는 문자열)} 를 반환하세요.
  localStorage.setItem("token", "7777777");
  alert("SUCCESS");
  return null;
};

const getUserInfo = async (): Promise<{ username: string } | null> => {
  // TODO: login 함수에서 받은 token을 이용해 사용자 정보를 받아오세요.
  localStorage.getItem("token");
  return null;
};

const LoginWithMockAPI = () => {
  // const [inputValue, setInputValue] = useState({ id: "", pw: "" });

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setInputValue({ ...inputValue, [name]: value });
  // };

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // TODO: form 에서 username과 password를 받아 login 함수를 호출하세요.
    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) console.log(key, value);
    const idd = formData.get("id")?.toString();
    const pww = formData.get("pw")?.toString();
    login(idd, pww);
  };

  return (
    <div>
      <h1>Login with Mock API</h1>
      <form onSubmit={loginSubmitHandler}>
        {/* TODO: 여기에 username과 password를 입력하는 input을 추가하세요. 제출을 위해 button도 추가하세요. */}
        <input name="id"></input>
        <input name="pw"></input>
        <button onClick={LoginWithMockAPI}>로그인</button>
      </form>
      <div>
        <h2>User info</h2>
        {/* TODO: 유저 정보를 보여주도록 구현하세요. 필요에 따라 state나 다른 변수를 추가하세요. */}
        {JSON.stringify({ username: "blueStragglr" })}
      </div>
    </div>
  );
};

export default LoginWithMockAPI;
