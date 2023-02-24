import { abi, contractAddress } from "./../../../constants";
import { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";
import { ContractContextType } from "./context";
export const contractContext = createContext<ContractContextType | null>(null);
interface Props {
  children: React.ReactNode;
}
declare var window: any;
export const ContractHandler: React.FC<Props> = ({ children }) => {
  const [contract, setContract] = useState<any>();
  const [userAddress, setUserAddress] = useState<any>();

  const fetchWalletInfo = async () => {
    try {
      if (typeof window !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setUserAddress(accounts[0]);
        provider.on("accountsChanged", function(accounts) {
          setUserAddress(accounts[0]);
        });
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };

  const checkAndConnectContract = async () => {
    if (!contract && typeof window !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const tempContract = new ethers.Contract(
        contractAddress["5"][0],
        abi,
        provider.getSigner()
      );
      setContract(tempContract);
      return tempContract;
    }
    return contract;
  };

  async function addContract(
    category: string,
    type: string,
    description: string,
    name: string,
    email: string,
    startDate: string,
    endDate: string,
    createDate: string,
    sha256: string,
    IPFSUri: string
  ) {
    const contract = await checkAndConnectContract();
    await contract.addContract(
      category,
      type,
      description,
      name,
      email,
      startDate,
      endDate,
      createDate,
      sha256,
      IPFSUri
    );
  }

  async function addUserKycInfo(
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    aadhaarNumber: string,
    aadhaarFrontURL: string,
    aadhaarBackURL: string,
    selfieURL: string,
    createDate: string,
  ) {
    const contract = await checkAndConnectContract();
    await contract.addUserKycInfo(
      firstName,
      lastName,
      gender,
      dob,
      aadhaarNumber,
      aadhaarFrontURL,
      aadhaarBackURL,
      createDate,
      selfieURL,
      createDate
    );
  }

  async function getContract(sha256: string) {
    const contract = await checkAndConnectContract();
    const result = await contract.getContract(sha256);
    return result;
  }

  async function getUserContracts() {
    if (userAddress) {
      const contract = await checkAndConnectContract();

      const contractCounts = await contract.getContractsCount_address(
        userAddress
      );

      var result = [];
      for (var i = 0; i < contractCounts; i++) {
        const res = await contract.getContractbyCreator(userAddress, i);
        result.push(res);
      }
      return result;
    } else {
      console.log("wallet not connnected");
    }
  }

  async function getUserKycInfo() {
    if (userAddress) {
    const contract = await checkAndConnectContract();
    const result = await contract.getUserKycInfo(userAddress);
    return result;
    }else {
      console.log("wallet not connnected");
    }
  }

  return (
    <contractContext.Provider
      value={{ addContract, getContract, fetchWalletInfo, getUserContracts, addUserKycInfo, getUserKycInfo }}
    >
      {children}
    </contractContext.Provider>
  );
};
