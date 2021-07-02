import {resolve} from 'path';

export const initControllers = () => {
  const game = (req, res) => {
    res.sendFile(resolve('client/dist', 'index.html'))
  }

  return {
    game
  }
}