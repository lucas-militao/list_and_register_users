import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const id = user_id.toString();

      const all = this.listAllUsersUseCase.execute({ user_id: id });

      return response.json(all);
    } catch (error) {
      const err = (error as unknown) as Error;
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
