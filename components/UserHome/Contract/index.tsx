import {abi, contractAddress} from './../../../constants'
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import * as React from 'react';
import { ContractContextType } from '../../../context';
export const contractContext = React.createContext<ContractContextType | null>(null)
interface Props {
    children: React.ReactNode;
}
declare var window: any
const ContractHandler: React.FC<Props> = ({ children }) =>{
   // const [contract, setContract] = useState<any>();

    const checkAndConnectContract = async () => {
        console.log("connect called");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const tempContract = await new ethers.Contract("0xf43c7B3Dda4303840fA7eaA2c4305f1d938105e9", abi, provider.getSigner());
        //setContract(tempContract);
        console.log(tempContract);
        return tempContract

    }

    async function addContract(category: string, purpose: string, name: string, email: string, createDate: string, sha256: string, IPFSUri: string)  {
        console.log("contract called");
        
        const contract = await checkAndConnectContract()
        console.log(contract);
        contract.addContract(category, purpose, name, email, createDate, sha256, IPFSUri, "abcd", "abcd", "abcd")
    }
    return (
        <contractContext.Provider value = {{addContract}}>
            { children }
        </contractContext.Provider>
    )
} 

export default ContractHandler;

