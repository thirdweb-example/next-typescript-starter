export type ContractContextType = {
  addContract: (
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
  ) => {};
  addUserKycInfo: (
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    aadhaarNumber: string,
    aadhaarFrontURL: string,
    aadhaarBackURL: string,
    selfieURL: string,
    createDate: string
  )=>{};
  getContract: (IPFSUri: string) => any;
  getUserContracts: () => {};
  fetchWalletInfo: () => {};
  getUserKycInfo: () => {};
};
