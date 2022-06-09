require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift repeat stick protect idea another army gate'; 
let testAccounts = [
"0xcdf580efbad6a189d5e00f022e9741ef926e972efa4b4780c0686a3e71c485b8",
"0xdc15c9e9c1147efd06905ec766a11f4024d176180fc3d54bfaed44d09fa29ba8",
"0xd6bc4318e40915f1d60d107b86ec05467082430e7c3ef6d46a5a1ac627b7a9ba",
"0xbdb3f46b64590bc25bbccc00090261ba21b4040e963873c43f4d79b92a162e06",
"0x3961f6a25946959b1b0bd3b892f51bcd28f78235f433e7ee8b25593d9d6f74e0",
"0x9776418bc72a21ae4cad6a358fd4628caa84c2a6bd64900fd26fb229e5920180",
"0x386ea5a4efb37b9cbe7e7f04add47b0f42a3ed94a675b6fa39eb5f76bb7c336d",
"0x829f13dab272868d54f6ec8e114ad48fadfe5d9e7c4ade38cf99a4edcdeef2ec",
"0xf74c3241487b6222a71b0cdd10b6535f648e9217c2bae6bf8d606221f9835c40",
"0x2b61bdb3410fef967c79ba23aad0110341aec43233dd579374a3c55c82f0c0f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

