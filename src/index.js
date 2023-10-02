import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import pixelworldController from './controller/pixelworldController.js'

const server = express();

server.use(cors());
server.use(express.json());
server.use(pixelworldController);

server.listen(process.env.PORT, () => console.log(`API Online na porta ${process.env.PORT}`));