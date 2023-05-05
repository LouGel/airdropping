/**
 * Submitted for verification at Etherscan.io on 2018-10-22
 */

pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IDatabase {
    function getAddressBook() external view returns (address payable[] memory);

    function getShares() external view returns (uint8[] memory);

    function totalShares() external view returns (uint256);
}

contract SpreadLove is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IDatabase public database;

    receive() external payable {}

    constructor(IDatabase db) {
        database = db;
    }

    function spreadLuv() external nonReentrant {
        address payable[] memory book = database.getAddressBook();
        uint8[] memory shares = database.getShares();
        uint256 totalShares = database.totalShares();
        uint256 len = book.length;
        uint256 amount = address(this).balance;
        require(amount > len , "Empty balance");


        for (uint256 i = 0; i < len;) {
             (bool lol, ) = book[i].call{value: (amount * shares[i]) / totalShares}("");
             require(lol , " Problem sending ethers");
            ++i;
        }
    }

    function viewAddress() external view returns (address payable[] memory) {
        return database.getAddressBook();
    }
      function getShares() external view returns (uint8[] memory) {
        return database.getShares();
    }
    function getTotalShare() external view returns (uint8[] memory) {
        return database.getShares();
    }

    function spreadMoney(IERC20 token) external nonReentrant {
        address payable[] memory book = database.getAddressBook();
        uint8[] memory shares = database.getShares();
        uint256 totalShares = database.totalShares();
        uint256 len = book.length;
        uint256 amount = token.balanceOf(address(this));
        require(amount > len , "Empty balance");

        for (uint256 i = 0; i < len;) {
            token.safeTransfer(book[i], (amount * shares[i]) / totalShares);
            ++i;
        }
    }
}
