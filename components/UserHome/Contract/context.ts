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
  getContract: (IPFSUri: string) => any;
  getUserContracts: () => {};
  fetchWalletInfo: () => {};
};
