import {ethers} from "ethers";
import * as dotenv from 'dotenv';
import evaToken from "../../artifacts/contracts/Token.sol/Eva.json";
dotenv.config();

const rpcUrl = process.env.RPC_URL;
const tokenAddress = process.env.TOKEN_ADDRESS;

const tokenAbi = evaToken.abi;

export async function getEvaContract(): Promise<ethers.Contract> {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const contract = new ethers.Contract("0x0000000000000000000000000000000000000000", tokenAbi, provider);
  return contract;
}

export async function getEvaContractName() : Promise<string> {
  const contract = await getEvaContract();
  const name = await contract.name();
  return name;
}


export async function getEvaContractSymbol() : Promise<string> {
  const contract = await getEvaContract();
  const symbol = await contract.symbol();
  return symbol;
}

export async function getEvaContractDecimals() : Promise<number> {
  const contract = await getEvaContract();
  const decimals = await contract.decimals();
  return decimals;
}


export async function getEvaContractBalanceOf(address: string) : Promise<number> {
  const contract = await getEvaContract();
  const balance = await contract.balanceOf(address);
  return balance;
}


export async function getEvaContractTotalSupply() : Promise<number> {
  const contract = await getEvaContract();
  const totalSupply = await contract.totalSupply();
  return totalSupply;
}

