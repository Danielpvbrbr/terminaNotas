export default function cvrtArray(purchases) {

    var dbvalue = [];
    purchases.forEach((element) => {
        for (var i in element.numbers_cota) {
            dbvalue.push(element.numbers_cota[i])
        }
    });
    // const arrayNumber = dbvalue.map(Number);

    return dbvalue.map(Number)
};

