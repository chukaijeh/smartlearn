import { resolvePath } from "react-router-dom";

export async function createAccount({
  firstname,
  lastname,
  email,
  gender,
  passwd,
  confirmPassword,
}) {
  const response = await fetch(
    "https://smart-learn-b3p2.onrender.com/api/auth/register/",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        gender,
        password: passwd,
        confirmPassword,
      }),
    }
  );
  try {
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
  return response;
}
export function googleSignup(cred) {
  const req = fetch("https://www.googleapis.com/oauth2/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${cred.credential}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function loginAuth({ email, password }) {
  const response = fetch(
    "https://smart-learn-b3p2.onrender.com/api/auth/login/",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      // console.log(body);
      return body;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}
