const { fetchAll, fetchFootbalLeageTable } = require('./index.js');


(async function () {

    var lastPrice = await fetchAll();
    console.log(JSON.stringify(lastPrice));

    var leageTable = await fetchFootbalLeageTable();
    console.log(leageTable);
})();

