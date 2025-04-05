import express from "express";
import {
  getEvaContractNameController,
  getEvaContractSymbolController,
  getEvaContractDecimalsController,
  getEvaContractBalanceOfController,
  getEvaContractTotalSupplyController} from "../controllers/evaController";
const router = express.Router();

router.get("/name", getEvaContractNameController);
router.get("/symbol", getEvaContractSymbolController);
router.get("/decimals", getEvaContractDecimalsController);
router.get("/balance/:address", getEvaContractBalanceOfController);
router.get("/totalSupply", getEvaContractTotalSupplyController);

export default router;
