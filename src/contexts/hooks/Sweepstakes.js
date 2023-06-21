/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import api from '../../services/api';
import veryAuth from '../veryAuth';

export default function Sweepstakes(El) {
    const [sweepstakes, setSweepstakes] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [confirmPurchases, setConfirmPurchases] = useState(false);
    const [res_purchases, setRes_purchases] = useState([]);
    const [qrCode, setqrCode] = useState([]);
    const [purchasesFilter, setPurchasesFilter] = useState([]);
    const [filterWinner, setFilterWinner] = useState([]);
    const [winners, setWinners] = useState([]);


    useEffect(() => {
        function get() {
            El.socket.on('Winners', (res) => {
                setWinners(res.response);
            });
            El.socket.on('Sweepstakes', (res) => {
                setSweepstakes(res.response);
            });

            El.socket.on('Purchases', (res) => {
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
        get();
    });

    async function seachPurchases(id, filter) {
        if (veryAuth(El.myId, El.setAuth, El.setAuthenticated)) {
            await api.post('/seachPurchases', {
                id: id,
                filter: filter
            }).then(res => {
                setFilterWinner(res.data);
            })

        }
    };

    async function sendPurchases(data) {

        if (veryAuth(El.myId, El.setAuth, El.setAuthenticated)) {
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
                            priceUnd: value.priceUnd,
                        })
                        setConfirmPurchases(true);
                        // window.location.reload();
                    } else {
                        alert(res.data.message);
                        window.location.reload();
                    }
                })
        };

    };

    async function addSweepstakes(data) {

        if (veryAuth(El.myId, El.setAuth, El.setAuthenticated)) {
            if (data.newPublication) {
                await api.post('/AddSweepstakes', {
                    description: data.description,
                    img: data.img,
                    price: data.price,
                    status: data.status,
                    title: data.title,
                    qtd: data.qtd,
                    topo:false
                }, El.storage.config).then(res => {
                    if (res.status === 200) {
                        alert(res.data.message);
                        window.location.reload()
                    } else {
                        alert(res.data.message)
                    }
                })
            } else {
                await api.post('/updateSweepstakes', {
                    description: data.description,
                    img: data.img,
                    price: data.price,
                    status: data.status,
                    title: data.title,
                    qtd: data.qtd,
                    id: data.id,
                }, El.storage.config).then(res => {
                    if (res.status === 200) {
                        alert(res.data.message);
                        window.location.reload()
                    } else {
                        alert(res.data.message)
                    }
                })
            }

        };
    };

    async function deleteSweepstakes(id) {
        if (veryAuth(El.myId, El.setAuth, El.setAuthenticated)) {
            await api.post('/deleteSweepstakes', {
                id: id
            }, El.storage.config).then(res => {
                if (res.status === 200) {
                    alert(res.data.message);
                    window.location.reload()
                } else {
                    alert(res.data.message)
                }
            })
        };
    };
    async function addWinners(data) {
        if (veryAuth(El.myId, El.setAuth, El.setAuthenticated)) {
            await api.post('/addWinners', {
                name: data.winners.res.buyer,
                status: data.status,
                id: data.id,
                CPF: data.winners.res.CPF,
                phone: data.winners.res.phone,
                cota: data.cota,
                price: data.winners.res.price,
                award: data.winners.res.award,
                img: data.img,
                id_award: data.winners.res.id_award
            }, El.storage.config).then(res => {
                if (res.status === 200) {
                    alert(res.data.message);
                    window.location.reload()
                } else {
                    alert(res.data.message)
                }
            })
        };
    };

    return {
        addSweepstakes,
        sweepstakes,
        purchases,
        sendPurchases,
        purchasesFilter,
        seachPurchases,
        confirmPurchases,
        setConfirmPurchases,
        qrCode,
        res_purchases,
        addWinners,
        filterWinner,
        deleteSweepstakes,
        winners
    }

}
