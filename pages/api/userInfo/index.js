// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { users } from "../../../data/userInfo";


export default function handler(req, res) {
  if (req.method === 'GET')
    res.status(200).json(users);

  else if (req.method === 'POST') {
    const user = req.body;
    const newData = {
      "id": Date.now(),
      "username": user.username,
      "email": user.email,
      "password": user.password
    }
    // console.dir(newData);
    // console.log("super high");
    users.push(newData);
    res.status(201).json(users);
  }
}



