(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/config/ipfs.js":
/*!****************************!*\
  !*** ./src/config/ipfs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs\n// const ipfsApi = require('ipfs-api');\n// const ipfs = ipfsApi('ipfs.18.192.53.115.nip.io'); // stagging IPFS server\nvar ipfsHttpClient = __webpack_require__(/*! ipfs-http-client */ \"./node_modules/ipfs-http-client/src/index.js\");\n\nvar ipfs = ipfsHttpClient.create({\n  url: 'https://ipfs.35.156.213.205.nip.io'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ipfs);\n\n//# sourceURL=webpack:///./src/config/ipfs.js?");

/***/ }),

/***/ "./src/contractData/abis/escrow.json":
/*!*******************************************!*\
  !*** ./src/contractData/abis/escrow.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_admin\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"components\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"seller\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"saleType\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timeline\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"paymentToken\\\",\\\"type\\\":\\\"address\\\"}],\\\"indexed\\\":false,\\\"internalType\\\":\\\"struct NewEscrow.Order\\\",\\\"name\\\":\\\"order\\\",\\\"type\\\":\\\"tuple\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"buyer\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"nonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"BidClaimed\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"components\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"seller\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"saleType\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timeline\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"paymentToken\\\",\\\"type\\\":\\\"address\\\"}],\\\"indexed\\\":false,\\\"internalType\\\":\\\"struct NewEscrow.Order\\\",\\\"name\\\":\\\"order\\\",\\\"type\\\":\\\"tuple\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"buyer\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"nonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"BidPlaced\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"edition\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"EditionTransferred\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"components\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"seller\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"saleType\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timeline\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"paymentToken\\\",\\\"type\\\":\\\"address\\\"}],\\\"indexed\\\":false,\\\"internalType\\\":\\\"struct NewEscrow.Order\\\",\\\"name\\\":\\\"order\\\",\\\"type\\\":\\\"tuple\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"buyer\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"nonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"OrderBought\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"components\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"seller\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"saleType\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timeline\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"paymentToken\\\",\\\"type\\\":\\\"address\\\"}],\\\"indexed\\\":false,\\\"internalType\\\":\\\"struct NewEscrow.Order\\\",\\\"name\\\":\\\"order\\\",\\\"type\\\":\\\"tuple\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"nonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"OrderCancelled\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"components\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"seller\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"saleType\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timeline\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"paymentToken\\\",\\\"type\\\":\\\"address\\\"}],\\\"indexed\\\":false,\\\"internalType\\\":\\\"struct NewEscrow.Order\\\",\\\"name\\\":\\\"order\\\",\\\"type\\\":\\\"tuple\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"nonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"OrderPlaced\\\",\\\"type\\\":\\\"event\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"ERC1155Interface\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"contract IERC1155\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_orderNonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"acceptOffer\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"admin\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address payable\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"bid\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"bidder\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"bidValue\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timeStamp\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"burnTokenEdition\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_orderNonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"buyNow\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_orderNonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"cancelSaleOrder\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_admin\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"changeAdmin\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_orderNonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"claimAfterAuction\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_orderNonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"claimBack\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"currentHolder\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"flexPlatFee\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"operator\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"bytes\\\",\\\"name\\\":\\\"data\\\",\\\"type\\\":\\\"bytes\\\"}],\\\"name\\\":\\\"onERC1155Received\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bytes4\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bytes4\\\"}],\\\"stateMutability\\\":\\\"pure\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"order\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"seller\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"saleType\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"timeline\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"paymentToken\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"orderNonce\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_orderNonce\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"placeBid\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_creator\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editions\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_saleType\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_timeline\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_adminPlatformFee\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_paymentToken\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"placeOrder\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_saleType\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"placeSecondHandOrder\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"putOnSaleBuy\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_tokenId\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_editionNumber\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"_pricePerNFT\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"requestOffer\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"secondHand\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"secondHandOrder\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"_tokenAddress\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"setTokenAddress\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"bytes4\\\",\\\"name\\\":\\\"interfaceId\\\",\\\"type\\\":\\\"bytes4\\\"}],\\\"name\\\":\\\"supportsInterface\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"tokenAddress\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"tokenEditions\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"id\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"editionNumber\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"internalType\\\":\\\"bytes\\\",\\\"name\\\":\\\"data\\\",\\\"type\\\":\\\"bytes\\\"}],\\\"name\\\":\\\"transfer\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}]\");\n\n//# sourceURL=webpack:///./src/contractData/abis/escrow.json?");

/***/ }),

/***/ "./src/helper/functions.js":
/*!*********************************!*\
  !*** ./src/helper/functions.js ***!
  \*********************************/
/*! exports provided: compressImage, capitalizeFirstLetter, getContractInstance, getFileType, _compactAddress, getFile, getFileFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compressImage\", function() { return compressImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"capitalizeFirstLetter\", function() { return capitalizeFirstLetter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContractInstance\", function() { return getContractInstance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFileType\", function() { return getFileType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_compactAddress\", function() { return _compactAddress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFile\", function() { return getFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFileFormat\", function() { return getFileFormat; });\n/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compressorjs */ \"./node_modules/compressorjs/dist/compressor.js\");\n/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var it_to_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! it-to-stream */ \"./node_modules/it-to-stream/src/index.js\");\n/* harmony import */ var it_to_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(it_to_stream__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var file_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-type */ \"./node_modules/file-type/index.js\");\n/* harmony import */ var file_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_type__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contractData_abis_nft_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contractData/abis/nft.json */ \"./src/contractData/abis/nft.json\");\nvar _contractData_abis_nft_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contractData/abis/nft.json */ \"./src/contractData/abis/nft.json\", 1);\n/* harmony import */ var _contractData_abis_escrow_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contractData/abis/escrow.json */ \"./src/contractData/abis/escrow.json\");\nvar _contractData_abis_escrow_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contractData/abis/escrow.json */ \"./src/contractData/abis/escrow.json\", 1);\n/* harmony import */ var _contractData_contractAddress_addresses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contractData/contractAddress/addresses */ \"./src/contractData/contractAddress/addresses.js\");\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../web3 */ \"./src/web3.js\");\n/* harmony import */ var _config_ipfs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/ipfs */ \"./src/config/ipfs.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\nfunction compressImage(_x) {\n  return _compressImage.apply(this, arguments);\n}\n\nfunction _compressImage() {\n  _compressImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n              try {\n                new compressorjs__WEBPACK_IMPORTED_MODULE_0___default.a(image, {\n                  quality: 0.6,\n                  // 0.6 can also be used, but its not recommended to go below.\n                  success: function success(compressedResult) {\n                    resolve(compressedResult); // compressedResult has the compressed file.\n                    // Use the compressed file to upload the images to your server.\n                  }\n                });\n              } catch (_unused) {\n                reject(undefined);\n              }\n            }));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _compressImage.apply(this, arguments);\n}\n\nfunction capitalizeFirstLetter(string) {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n}\nfunction getContractInstance(isEscrow) {\n  var _getContractAddresses = Object(_contractData_contractAddress_addresses__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n      nftContractAddress = _getContractAddresses.nftContractAddress,\n      escrowContractAddres = _getContractAddresses.escrowContractAddres;\n\n  var currentaddress = isEscrow ? escrowContractAddres : nftContractAddress;\n  var currentABI = isEscrow ? _contractData_abis_escrow_json__WEBPACK_IMPORTED_MODULE_4__ : _contractData_abis_nft_json__WEBPACK_IMPORTED_MODULE_3__;\n\n  try {\n    if (_web3__WEBPACK_IMPORTED_MODULE_6__[\"web3\"]) {\n      var contractInstance = new _web3__WEBPACK_IMPORTED_MODULE_6__[\"web3\"].eth.Contract(currentABI, currentaddress);\n      return contractInstance;\n    }\n  } catch (error) {// console.log(error);\n  }\n}\nfunction getFileType(_x2) {\n  return _getFileType.apply(this, arguments);\n}\n\nfunction _getFileType() {\n  _getFileType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {\n    var ipfsHash, ext;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            ipfsHash = url.substring(url.lastIndexOf('/') + 1); // substract ipfs hash\n\n            _context2.next = 3;\n            return getFile(ipfsHash);\n\n          case 3:\n            ext = _context2.sent;\n            return _context2.abrupt(\"return\", ext.substring(0, ext.lastIndexOf('/')));\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getFileType.apply(this, arguments);\n}\n\nfunction _compactAddress(address) {\n  var newAddress = address;\n\n  if (address) {\n    return newAddress.substring(0, 5) + \"....\" + newAddress.substring(newAddress.length - 10, newAddress.length);\n  }\n}\nfunction getFile(_x3) {\n  return _getFile.apply(this, arguments);\n}\n\nfunction _getFile() {\n  _getFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(cid) {\n    var type;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return file_type__WEBPACK_IMPORTED_MODULE_2___default.a.fromStream(it_to_stream__WEBPACK_IMPORTED_MODULE_1___default()(_config_ipfs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].cat(cid, {})));\n\n          case 2:\n            type = _context3.sent;\n            return _context3.abrupt(\"return\", type.mime);\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getFile.apply(this, arguments);\n}\n\nfunction getFileFormat(fileType) {\n  if (fileType.includes('image')) return 'image';else if (fileType.includes('audio')) return 'audio';else if (fileType.includes('video')) return 'video';else return 'image';\n}\n\n//# sourceURL=webpack:///./src/helper/functions.js?");

/***/ }),

/***/ 26:
/*!**************************************************!*\
  !*** ipfs-utils/src/files/glob-source (ignored) ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///ipfs-utils/src/files/glob-source_(ignored)?");

/***/ }),

/***/ 27:
/*!********************************!*\
  !*** electron-fetch (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///electron-fetch_(ignored)?");

/***/ }),

/***/ 28:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///http_(ignored)?");

/***/ }),

/***/ 29:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///https_(ignored)?");

/***/ })

}]);