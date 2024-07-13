// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20 {
    constructor() ERC20("Token 2", "T2") {
        _mint(msg.sender, 1_000_000 * 10e18);
    }
}
