// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.3/contracts/security/ReentrancyGuard.sol";
interface IneToken {
    function transfer(address to, uint256 amount) external returns (bool);
}

contract SavingsContract is ReentrancyGuard{
    uint256 private constant LOCK_TIME = 1 weeks;

    address private immutable ineTokenAddress;
    mapping(address => uint256) private ethBalances;
    mapping(address => uint256) private ineBalances;
    mapping(address => uint256) private lockTimestamps;

    event Deposit(address indexed account, uint256 ethAmount);
    event WithdrawIne(address indexed account, uint256 ineAmount);
    event WithdrawEth(address indexed account, uint256 ethAmount);

    constructor(address _ineTokenAddress) {
        ineTokenAddress = _ineTokenAddress;
    }

    function deposit() external payable {
        updateBalance(msg.sender);

        ethBalances[msg.sender] += msg.value;
        lockTimestamps[msg.sender] = block.timestamp;

        emit Deposit(msg.sender, msg.value);
    }

    function withdrawIne(uint256 amount) external nonReentrant {
        require(amount <= ineBalances[msg.sender], "Insufficient Ine balance");

        updateBalance(msg.sender);

        ineBalances[msg.sender] -= amount;
        IneToken(ineTokenAddress).transfer(msg.sender, amount);

        emit WithdrawIne(msg.sender, amount);
    }

    function withdrawEth(uint256 amount) external nonReentrant {
        require(amount <= ethBalances[msg.sender], "Insufficient ETH balance");
        require(block.timestamp >= lockTimestamps[msg.sender] + LOCK_TIME, "Funds are locked");

        updateBalance(msg.sender);

        ethBalances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        emit WithdrawEth(msg.sender, amount);
    }

    function updateBalance(address account) internal {
        uint256 elapsedTime = block.timestamp - lockTimestamps[account];
        uint256 rewardAmount = (ethBalances[account] * elapsedTime) / (1 weeks);

        ineBalances[account] += rewardAmount;
        lockTimestamps[account] = block.timestamp;
    }

    function getEthBalance(address account) external view returns (uint256) {
        return ethBalances[account];
    }

    function getIneBalance(address account) external view returns (uint256) {
        return ineBalances[account];
    }

    function getLockTimestamp(address account) external view returns (uint256) {
        return lockTimestamps[account];
    }
}
