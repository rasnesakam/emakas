import { PrismaClient } from "@prisma/client";
import { Router } from 'express';
import jose from 'jose';
import bodyParser from "body-parser";

const prisma = new PrismaClient();
const router = Router();
const oauthController = null;

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyparser.json());

module.exports = router