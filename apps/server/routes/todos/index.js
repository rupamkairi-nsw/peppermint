import { Router } from "express";
import { prisma } from "../../prisma/prisma.js";

const todosRouter = Router();

todosRouter.get("/by/:userId", async (req, res) => {
  const { userId } = req.params.userId;
  const todos = await prisma.todos.findMany({
    where: { userId },
    select: {
      id: true,
      text: true,
      done: true,
    },
  });
  console.log("todos");
  return res.json(todos);
});

export default todosRouter;
