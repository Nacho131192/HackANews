export default async function registerService({user_name,user_email,user_password}) {
  console.log(user_name, user_email, user_password)
  console.log({ user_name, user_email, user_password })
  const response = await fetch(`http://localhost:3000/users`, {
    method: "post",
    body: JSON.stringify({ user_name, user_email, user_password }),
    headers: {
      "Content-Type":"application/json",
    },
  })  
}