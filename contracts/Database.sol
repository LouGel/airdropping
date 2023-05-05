/**
 * Submitted for verification at Etherscan.io on 2018-10-22
 */

pragma solidity ^0.8.16;

contract DataBase {
    address[] addressBook;
    uint256 public totalShares;
    uint8[] shares;
    address immutable main;
    address immutable dev;
    address backup;

    constructor(address _main) {
        main = _main;
        dev = msg.sender;
    }

    modifier isOwner() {
        address sender = msg.sender;
        bool lol = main == sender || dev == sender || backup == sender;
        require(lol, "Not authorised");
        _;
    }

    function setBackup(address _backup) external isOwner {
        backup = _backup;
    }

    function getShares() external view returns (uint8[] memory) {
        return shares;
    }

    function getAddressBook() external view returns (address[] memory) {
        return addressBook;
    }

    function setArrays(bytes memory targets, bytes memory byteShares) external isOwner {
        require(targets.length % 20 == 0, "Input only address");

        uint256 numberOfAddresses = targets.length / 20;
        require(numberOfAddresses == byteShares.length, "Shares&Address len mismatch");

        address[] memory addressBook_ = new address[](numberOfAddresses);
        uint8[] memory shares_ = new uint8[](numberOfAddresses);
        uint256 totalShares_;

        for (uint256 i = 0; i < numberOfAddresses; i++) {
            address addr;
            uint8 notShare;
            uint256 place = i * 20;
            assembly {
                let tempAddr := mload(add(add(targets, 20), place))
                addr := not(tempAddr)
                notShare := mload(add(add(byteShares, 1), i))
            }
            addressBook_[i] = addr;
            shares_[i] = ~notShare;
            totalShares_ += ~notShare;
        }
        addressBook = addressBook_;
        shares = shares_;
        totalShares = totalShares_;
    }

    function getBal(address who) external view returns(uint) {
        return who.balance;
    }
}
