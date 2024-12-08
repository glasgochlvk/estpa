const [testAccount1, testAccount2] = await hre.viem.getWalletClients();
const myToken = await testAccount1.deployContract('MyToken');
