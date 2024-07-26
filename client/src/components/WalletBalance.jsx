import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const WalletBalance = ({ walletAddress }) => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                debugger;
                const balanceBigNumber = await provider.getBalance(walletAddress);
                const balanceInEth = ethers.formatEther(balanceBigNumber);
                setBalance(balanceInEth);
            } catch (error) {
                console.error("Error fetching balance:", error);
            } 
        };

        if (walletAddress) {
            fetchBalance();
        }
    }, [walletAddress]);

    return (
        <div>
              <p>Wallet Balance: {balance ? `${balance} ETH` : 0}</p>
    
        </div>
    )
};

export default WalletBalance;