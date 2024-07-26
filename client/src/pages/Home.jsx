import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';
import WalletBalance from '../components/WalletBalance';

export default function Home() {
    const { user } = useAuth();
    const getUser = useUser()

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? <WalletBalance walletAddress={user.wallet_address} /> : 'Please login first'}
                    </div>
                </div>
            </h2>
        </div>
    )
}
