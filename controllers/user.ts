import { Request, Response } from 'express';
import { HTTP_CODES, HTTP_MSG } from '../constants/HttpConstants';
import User from '../models/user';

const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json({
    users,
  });
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    res.status(HTTP_CODES.NOT_FOUND).json({
      message: HTTP_MSG[HTTP_CODES.NOT_FOUND],
    });
  }

  res.status(HTTP_CODES.SUCCESS).json({
    user,
  });
};

const createUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const user = await User.create(body);

    res.status(HTTP_CODES.CREATED).json({
      user,
    });
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL_ERROR).json({
      message: HTTP_MSG[HTTP_CODES.INTERNAL_ERROR],
      details: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const userU = await User.update([id], body);
    res.status(HTTP_CODES.CREATED).json({
      userU,
    });
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL_ERROR).json({
      message: HTTP_MSG[HTTP_CODES.INTERNAL_ERROR],
      details: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      res.status(HTTP_CODES.NOT_FOUND).json({
        message: HTTP_MSG[HTTP_CODES.NOT_FOUND],
        details: 'User not found',
      });
    } else {
      user.destroy();
    }
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL_ERROR).json({
      message: HTTP_MSG[HTTP_CODES.INTERNAL_ERROR],
      details: error,
    });
  }
};

export { getUser, getUsers, createUser, updateUser, deleteUser };
