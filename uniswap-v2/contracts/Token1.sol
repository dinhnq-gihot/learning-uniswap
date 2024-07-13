// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token1 is ERC20 {
    constructor() ERC20("Token 1", "T1") {
        _mint(msg.sender, 1_000_000 * 10e18);
    }
}
