/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Sweepstakes(El) {
    const [sweepstakes, setSweepstakes] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [purchasesFilter, setPurchasesFilter] = useState([]);

    useEffect(() => {
        async function getSweepstakes() {
            await El.socket.on('Sweepstakes', (res) => {
                setSweepstakes(res.response);
            });

            await El.socket.on('Purchases', (res) => {
                setPurchases(res.response);
                const filter = res.response.filter(person =>
                    person.CPF === El.auth.CPF
                );
                setPurchasesFilter(filter);
            });
        };
        getSweepstakes();
    }, [El.auth.CPF, El.socket]);
 
    async function sendPurchases(data) {

        await api.post('/AddPurchases', data,
            El.storage.config).then(res => {
                if (res.status === 200) {
                    alert(res.data.message);
                    window.location.reload();
                } else {
                    alert(res.data.message);
                    window.location.reload();
                }
            })
    };

    async function sendImg(data) {
        await api.post('/AddSweepstakes', {
            description: data.description,
            img: data.img,
            price: data.price,
            status: data.status,
            title: data.title
        }, El.storage.config).then(res => {
            if (res.status === 200) {
                alert(res.data.message);
                window.location.reload()
            } else {
                alert(res.data.message)
            }
        })
    };

    return { sendImg, sweepstakes, purchases, sendPurchases, purchasesFilter }

}
