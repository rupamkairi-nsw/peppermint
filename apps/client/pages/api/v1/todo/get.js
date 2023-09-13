const { prisma } = require("../../../../prisma/prisma");
import { getSession } from "next-auth/react";
import axios from "axios";

export default async function getTodo(req, res) {
  const session = await getSession({ req });

  console.log("Session", session);

  try {
    const todos = await prisma.todos.findMany({
      where: { userId: session.id },
      select: {
        id: true,
        text: true,
        done: true,
      },
    });
    // const todos = await (
    //   await axios.get("http://localhost:3333/todos/by/" + session.id)
    // ).data;

    res.status(201).json({ success: true, message: "Todo saved", todos });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}
