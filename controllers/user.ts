import { Request, Response } from 'express';

const getUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: 'getUser',
  });
};

const getUsers = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: 'getUser',
  });
};

const createUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: 'createUser',
  });
};

const updateUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: 'updateUser',
  });
};

const deleteUser = (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: 'deleteUser',
  });
};

export { getUser, getUsers, createUser, updateUser, deleteUser };
