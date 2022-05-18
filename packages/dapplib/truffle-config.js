require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember smile inner enrich orange smart'; 
let testAccounts = [
"0xd360e17638f8698020a95b50b84f5a3d73c29eded805230b8123cb34ec47a733",
"0xd72384bd1758b48cdd6ced6b498ca2716d5d52932c16dfbffeb54ea4c2f3ef67",
"0x75ea5dd4691a4a2b83a50cb08e891f353843b026b2445838f8a5aee79f468551",
"0x3ded62813db57b943a88898936b182978ede48ed083fc46a3adbf00163d0eda4",
"0x2789e18223052a399fe30e805f7fcec1dad2f0c76a109a13b077c524a8cbf460",
"0x8584195967ba708aae33cfa6889787cf7c740bf42c898a08f3516b572870e522",
"0x3442b068c6a4a0fa10f15691e24c2d38fea76a34b89feaec06b6782f56a8a071",
"0x8991a07e72edfd03439159c1c1e9fd9b68be9f274803d01a7b4b9526ba7f8715",
"0xe997291b4fbe52f2e83699e7a3f5d7bcfb2f1854c9791528b8e361f4113a094a",
"0x524ebb8bf90fad3c70be91d2824b05a841fa7f1b99ca3d5bb3f5a1514b442a7f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

