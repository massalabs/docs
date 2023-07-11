import {
  ClientFactory,
  Client,
  DefaultProviderUrls,
  IAccount,
  IProvider,
  ProviderType,
  WalletClient,
  IAddressInfo,
  IBlockInfo,
  IBlockcliqueBlockBySlot,
  IClique,
  IDatastoreEntry,
  IDatastoreEntryInput,
  IEndorsement,
  IGetGraphInterval,
  IGraphInterval,
  INodeStatus,
  ISlot,
  strToBytes,
  IOperationData,
  IStakingAddresses,
} from "@massalabs/massa-web3";

// TODO: Use env variables and say it in the CONTRIBUTING.md
const deployerPrivateKey =
  "S12XuWmm5jULpJGXBnkeBsuiNmsGi2F4rMiTvriCzENxBR4Ev7vd";
const receiverPrivateKey =
  "S1eK3SEXGDAWN6pZhdr4Q7WJv6UHss55EB14hPy4XqBpiktfPu6";

// TODO: need to change to switch buildnet/testnet:
const publicApi = "https://buildnet.massa.net/api/v2";
const privateApi = "https://buildnet.massa.net/api/v2";

export async function initializeClient() {
  const deployerAccount: IAccount = await WalletClient.getAccountFromSecretKey(
    deployerPrivateKey
  );
  const web3Client: Client = await ClientFactory.createCustomClient(
    [
      { url: publicApi, type: ProviderType.PUBLIC } as IProvider,
      { url: privateApi, type: ProviderType.PRIVATE } as IProvider,
    ],
    true,
    deployerAccount // setting deployer account as base account
  );
  return web3Client;
}

(async () => {
  console.log("Massa Smart Contract Interaction Example \n\n");
  const web3Client = await initializeClient();

  /* Test of `Massa Web3 public API` */
  try {
    console.log("getAddresses...");
    const addressesResp: Array<IAddressInfo> = await web3Client
      .publicApi()
      .getAddresses(["AU12LSunQqxmcGR6cJRnz44iZseJNCcR7stHMdB3qwqGiLwujGKaf"]);

    console.log("getBlockcliqueBlockBySlot...");
    const blockcliqueBlockBySlot: IBlockcliqueBlockBySlot = await web3Client
      .publicApi()
      .getBlockcliqueBlockBySlot({ period: 37108, thread: 19 } as ISlot);

    console.log("blockcliqueBlockBySlot: ", blockcliqueBlockBySlot);
    console.log("getBlocks...");
    const blocks: Array<IBlockInfo> = await web3Client
      .publicApi()
      .getBlocks(["B12dQxGwtgnyUDrEEFTQVG8ZHQtA4AG1jBC96RxAQEint2J2e3YM"]);

    console.log("getCliques...");
    const cliques: Array<IClique> = await web3Client.publicApi().getCliques();

    console.log("getDatastoreEntries...");
    const scStorageValue: IDatastoreEntry[] = await web3Client
      .publicApi()
      .getDatastoreEntries([
        {
          address: "AS12PWTzCKkkE9P5Supt3Fkb4QVZ3cdfB281TGaup7Nv1DY12a6F1",
          key: strToBytes("key"),
        } as IDatastoreEntryInput,
      ]);

    // console.log("getEndorsements...");
    // const endorsements: Array<IEndorsement> = await web3Client
    //   .publicApi()
    //   .getEndorsements(["q2XVw4HrRfwtX8FGXak2VwtTNkBvYtLVW67s8pTCVPdEEeG6J"]);

    console.log("getGraphInterval...");
    const graphInterval: IGraphInterval[] = await web3Client
      .publicApi()
      .getGraphInterval({
        start: Date.now() - 2000,
        end: Date.now(),
      } as IGetGraphInterval);

    console.log("getNodeStatus...");
    const nodeStatus: INodeStatus = await web3Client
      .publicApi()
      .getNodeStatus();

    console.log("getOperations...");
    const operations: Array<IOperationData> = await web3Client
      .publicApi()
      .getOperations(["O12AQfTA6bW9hmb2kCHmBmX7stgWfNUVLiyoVMd3vgan533BbRCE"]);

    console.log("getStakers...");
    const stakers: Array<IStakingAddresses> = await web3Client
      .publicApi()
      .getStakers();

    console.log("getProviders...");
    const providers: IProvider[] = [
      {
        url: "https://oldRpcUrlPublic/api",
        type: ProviderType.PUBLIC,
      } as IProvider,
      {
        url: "https://oldRpcUrlPrivate/api",
        type: ProviderType.PRIVATE,
      } as IProvider,
    ];

    web3Client.getProviders();
  } catch (err) {
    console.log("Error: ", err);
  }
})();
