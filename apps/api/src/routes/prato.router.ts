import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { getCollection } from "../util/get-collection";
import { IPrato } from "@nx-monorepo/comum";
import { InsertOneResult, WithId, WithoutId } from "mongodb";
import { AuthorizedRequest, verificarTokenJwt } from "../util/jwt";

export const pratoRouter = Router();

// Apenas como exemplo de como verificar daqui para baixo neste router:
// pratoRouter.use(verificarTokenJwt);

// Se a requisição for HTTP GET /api/prato...
pratoRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const collection = getCollection<IPrato>(req.app, 'pratos');
  const pratos = await collection.find().toArray();
  res.json(pratos);
});

pratoRouter.get('/:id', verificarTokenJwt, async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
  const _id: number = +req.params.id;
  const prato: IPrato = await getCollection<IPrato>(
    req.app,
    'pratos',
  ).findOne({ _id });
  res.json(prato);
});

pratoRouter.put('/:id', verificarTokenJwt, async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
  const _id: number = +req.params.id;
  const body: IPrato = req.body;
  const results: WithId<IPrato> = await getCollection<IPrato>(
    req.app,
    'pratos',
  ).findOneAndReplace({ _id }, body);
  if (results) {
    res.json(body);
  } else {
    return next(new Error(`Prato com ID ${_id} não encontrado!`));
  }
});

pratoRouter.post('/', verificarTokenJwt, async (req: AuthorizedRequest, res: Response, next: NextFunction) => {

  const body: WithoutId<IPrato> = req.body;

  // Descobrir o último ID utilizado no BD:
  const buscaMaxId = await getCollection<IPrato>(
    req.app,
    'pratos'
  ).find().sort({_id: -1}).limit(1).toArray();
  const novoId = (!buscaMaxId || buscaMaxId.length < 1) ? 1 : buscaMaxId[0]._id + 1;

  // Insere o prato usando o novo ID descoberto:
  const prato: IPrato = {
    ...body,
    _id: novoId,
  }
  const results: InsertOneResult<IPrato> = await getCollection<IPrato>(
    req.app,
    'pratos',
  ).insertOne(prato);

  if (results.acknowledged) {
    res.json(prato);
  } else {
    return next(new Error(`Não foi possível inserir o novo prato!`));
  }
});
