import { Request, Response } from "express";
import { getEvaContractName, getEvaContractSymbol, getEvaContractDecimals, getEvaContractBalanceOf, getEvaContractTotalSupply } from "../web3/eva.web3";

export async function getEvaContractNameController(req: Request, res: Response) {
  try {
    const name = await getEvaContractName();
    res.json({ name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get token name" });
  }
}

export async function getEvaContractSymbolController(req: Request, res: Response) {
  try {
    const symbol = await getEvaContractSymbol();
    res.json({ symbol });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get token symbol" });
  }
}

export async function getEvaContractDecimalsController(req: Request, res: Response) {
  try {
    const decimals = await getEvaContractDecimals();
    res.json({ decimals });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get token decimals" });
  }
}

export async function getEvaContractBalanceOfController(req: Request, res: Response) {
  const { address } = req.params;
  try {
    const balance = await getEvaContractBalanceOf(address);
    res.json({ balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get token balance" });
  }
}

export async function getEvaContractTotalSupplyController(req: Request, res: Response) {
  try {
    const totalSupply = await getEvaContractTotalSupply();
    res.json({ totalSupply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get token total supply" });
  }
}
