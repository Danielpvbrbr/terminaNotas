/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Sweepstakes(El) {
    const [sweepstakes, setSweepstakes] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [confirmPurchases, setConfirmPurchases] = useState(false);
    const [res_purchases, setRes_purchases] = useState([]);
    const [qrCode, setqrCode] = useState([]);
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
            El.socket.on('res_purchases', (res) => {
                if (res.CPF === El.auth.CPF) {
                    setRes_purchases(res);
                };

                if (confirmPurchases && res.time <= 1 && res.status === 'pending') {
                    setConfirmPurchases(false);
                };

                if (res.status === 'approved') {
                    setTimeout(function () {
                        setConfirmPurchases(false);
                    }, 10000);
                };
            });
        };
        getSweepstakes();
    }, [El.auth.CPF, El.socket, confirmPurchases, qrCode.id_purchases]);


    async function sendPurchases(data) {

        await api.post('/AddPurchases', data,
            El.storage.config).then(res => {
                if (res.status === 200) {
                    const value = res.data.response;
                    setqrCode({
                        base64: value.base64,
                        description: value.description,
                        id_purchases: value.id_purchases,
                        qr_code: value.qr_code,
                        status: value.status,
                        qtd: value.qtd,
                        price: value.price,
                        priceUnd: value.priceUnd
                    })
                    setConfirmPurchases(true);
                    // window.location.reload();
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
            title: data.title,
            qtd: data.qtd
        }, El.storage.config).then(res => {
            if (res.status === 200) {
                alert(res.data.message);
                window.location.reload()
            } else {
                alert(res.data.message)
            }
        })
    };
    return {
        sendImg,
        sweepstakes,
        purchases,
        sendPurchases,
        purchasesFilter,
        confirmPurchases,
        setConfirmPurchases,
        qrCode,
        res_purchases
    }

}
