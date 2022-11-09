export default function getQuota(dbvalue, qtd) {
    const verfyNumber = (dbvalue.length > 1 ? dbvalue : [0])

    let Array = []
    let valueMax = (Math.max.apply(null, verfyNumber) + 1)

    for (let i = 0; i < qtd; i++) {
        Array.push(valueMax++)
    };

    return Array
};


