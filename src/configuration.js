const {
  REACT_APP_ENVIRONMENT = 'localhost', // optional
  REACT_APP_FEATHERJS_CONNECTION_URL,
} = process.env;

const configurations = {
  localhost: {
    title: 'localhost',
    feathersConnection: 'http://localhost:3030',
    feathersDappConnection: 'https://localhost:3030',
  },
  develop: {
    title: 'develop',
    feathersConnection: 'https://feathers.bridge.develop.giveth.io/',
    feathersDappConnection: 'https://feathers.develop.giveth.io/',
    homeEtherscanURL: 'https://ropsten.etherscan.io/',
    foreignEtherscanURL: 'https://rinkeby.etherscan.io/',
    actualDappURL: 'https://develop.giveth.io/',
    homeNetworkName: 'Ropsten',
    foreignNetworkName: 'Rinkeby',
  },
  release: {
    title: 'release',
    feathersConnection: 'https://feathers.bridge.release.giveth.io/',
    feathersDappConnection: 'https://feathers.release.giveth.io/',
    homeEtherscanURL: 'https://ropsten.etherscan.io/',
    foreignEtherscanURL: 'https://rinkeby.etherscan.io/',
    actualDappURL: 'https://release.giveth.io/',
    homeNetworkName: 'Ropsten',
    foreignNetworkName: 'Rinkeby',
  },
  beta: {
    title: 'beta',
    feathersConnection: 'https://feathers.bridge.beta.giveth.io/',
    feathersDappConnection: 'https://feathers.beta.giveth.io/',
    homeEtherscanURL: 'https://etherscan.io/',
    foreignEtherscanURL: 'https://rinkeby.etherscan.io/',
    actualDappURL: 'https://beta.giveth.io/',
    homeNetworkName: 'Mainnet',
    foreignNetworkName: 'Rinkeby',
  },
  // mainnet: {
  //   title: 'mainnet',
  //   feathersConnection: 'https://feathers.mainnet.giveth.io',
  // },
};

// Create config object based on environment setup
const config = Object.assign({}, configurations[REACT_APP_ENVIRONMENT]);


config.feathersConnection = REACT_APP_FEATHERJS_CONNECTION_URL || config.feathersConnection;

config.whitelist = ['0xDAa172456F5815256831aeE19C8A370a83522871'];

config.getContract = (context) => {
  if(context.library){
  return new context.library.eth.Contract([{"constant":true,"inputs":[],"name":"maxSecurityGuardDelay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"accepted","type":"bool"}],"name":"whitelistToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"checkIn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"giver","type":"address"},{"name":"receiverId","type":"uint64"},{"name":"token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"donateAndCreateGiver","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"escapeFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newTimeLock","type":"uint256"}],"name":"setTimelock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"escapeHatchCaller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"securityGuardLastCheckin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"giverId","type":"uint64"},{"name":"receiverId","type":"uint64"},{"name":"token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"donate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_idPayment","type":"uint256"}],"name":"disburseAuthorizedPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dac","type":"address"}],"name":"removeOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"allowed","type":"bool"}],"name":"setAllowDisbursePaymentWhenPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numberOfAuthorizedPayments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwnerCandidate","type":"address"}],"name":"proposeOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_authorize","type":"bool"}],"name":"authorizeSpender","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idPayment","type":"uint256"}],"name":"cancelPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idPayment","type":"uint256"},{"name":"_delay","type":"uint256"}],"name":"delayPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"allowDisbursePaymentWhenPaused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idPayments","type":"uint256[]"}],"name":"disburseAuthorizedPayments","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_token","type":"address"}],"name":"isTokenEscapable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"giver","type":"address"},{"name":"receiverId","type":"uint64"}],"name":"donateAndCreateGiver","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"authorizedPayments","outputs":[{"name":"name","type":"string"},{"name":"reference","type":"bytes32"},{"name":"spender","type":"address"},{"name":"earliestPayTime","type":"uint256"},{"name":"canceled","type":"bool"},{"name":"paid","type":"bool"},{"name":"recipient","type":"address"},{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"securityGuardDelay","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"escapeHatch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"securityGuard","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newSecurityGuard","type":"address"}],"name":"setSecurityGuard","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositEscapedFunds","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"giverId","type":"uint64"},{"name":"receiverId","type":"uint64"}],"name":"donate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"timeLock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwnerCandidate","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newEscapeHatchCaller","type":"address"}],"name":"changeHatchEscapeCaller","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allowedSpenders","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_maxSecurityGuardDelay","type":"uint256"}],"name":"setMaxSecurityGuardDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"absoluteMinTimeLock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_reference","type":"bytes32"},{"name":"_recipient","type":"address"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_paymentDelay","type":"uint256"}],"name":"authorizePayment","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"escapeHatchDestination","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_escapeHatchCaller","type":"address"},{"name":"_escapeHatchDestination","type":"address"},{"name":"_absoluteMinTimeLock","type":"uint256"},{"name":"_timeLock","type":"uint256"},{"name":"_securityGuard","type":"address"},{"name":"_maxSecurityGuardDelay","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"giverId","type":"uint64"},{"indexed":false,"name":"receiverId","type":"uint64"},{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Donate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"giver","type":"address"},{"indexed":false,"name":"receiverId","type":"uint64"},{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"DonateAndCreateGiver","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EscapeFundsCalled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idPayment","type":"uint256"},{"indexed":true,"name":"recipient","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"reference","type":"bytes32"}],"name":"PaymentAuthorized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idPayment","type":"uint256"},{"indexed":true,"name":"recipient","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"token","type":"address"}],"name":"PaymentExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"idPayment","type":"uint256"}],"name":"PaymentCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"authorized","type":"bool"}],"name":"SpenderAuthorization","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"}],"name":"EscapeHatchBlackistedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EscapeHatchCalled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"by","type":"address"},{"indexed":true,"name":"to","type":"address"}],"name":"OwnershipRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"OwnershipRemoved","type":"event"}], '0x30f938fed5de6e06a9a7cd2ac3517131c317b1e7')
  }
  return null;
};

export default config;

