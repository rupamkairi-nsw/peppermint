import { Router } from "express";
// import { prisma } from "../../prisma/prisma.js";
import { prisma } from "database";

const todosRouter = Router();

console.log(process.env.PORT, process.env.DATABASE_URL);

todosRouter.get("/by/:userId", async (req, res) => {
  try {
    const { userId } = req.params.userId;
    const todos = await prisma.todos.findMany({
      where: { userId },
      select: {
        id: true,
        text: true,
        done: true,
      },
    });
    return res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

export default todosRouter;
