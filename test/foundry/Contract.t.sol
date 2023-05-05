// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "../../contracts/Database.sol";
import "../../contracts/Lock.sol";

uint256 constant PERCENTX100 = 1;
bytes32 constant DEV = keccak256("DEV");
bytes32 constant SIGNER = keccak256("SIGNER");
uint256 constant SIGNER_PKEY = 6;
uint256 constant MSIG = 3;
uint256 constant BANK = 4;
uint256 constant SIG = 5;

contract Treasury is Ownable {
    uint256[25] public slot;

    constructor() {}
}

contract ContractTest is Test {
    address[6] addr = [vm.addr(1), vm.addr(2), vm.addr(3), vm.addr(4), address(trez), vm.addr(6)];

    DataBase db = new DataBase(address(this));
    SpreadLove sl = new SpreadLove();

    function setUp() public {}
}
