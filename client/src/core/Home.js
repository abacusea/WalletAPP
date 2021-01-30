import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { addToWallet, withdrawFrom, readWallet } from './apiCore';
import { isAuthenticated } from '../auth';

const Home = ({ match }) => {
    const [wallet, setWallet] = useState('');
    const [error, setError] = useState(false);
    const [deposit, setDeposit] = useState(0);
    const [withdraw, setWithDraw] = useState(0);

    const { user, token } = isAuthenticated();

    const init = walletId => {
        readWallet(walletId, token).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setWallet(data);
            }
        });
    };

    useEffect(() => {
        init(match.params.walletId);
    }, []);

     const handleChange = name => event => {
        setDeposit({ ...deposit, [name]: event.target.value });
    };

     const clickDeposit = event => {
        event.preventDefault();

        setWallet({ ...wallet, balance: balance + deposit });
        addToWallet(match.params.walletId, user._id, token, wallet).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setWallet({
                    ...wallet,
                    balance: data.balance,
                });
            }
        });
    };

     const addMoney = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Amount</label>
                <input onChange={handleChange('deposit')} type="number" className="form-control" value={deposit} />
            </div>
            <button onClick={clickDeposit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    return (
        <Layout
            title="Wallet App"
            description="Node React Payment App"
            className="container-fluid"
        >
            <h2 className="mb-4">Wallet Balance</h2>
            <div className="row">
                {amount}
            </div>

            <h2 className="mb-4">Deposit</h2>
            <div className="row">
               {addMoney()}
            </div>
        </Layout>
    );
};

export default Home;
