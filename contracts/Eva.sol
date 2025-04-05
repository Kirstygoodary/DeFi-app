// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Eva is ERC20 {
    constructor(uint256 initialSupply) ERC20("Eva", "EVA") {
        _mint(msg.sender, initialSupply);
    }
}
