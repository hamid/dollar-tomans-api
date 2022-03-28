var currencyUrl            = "https://www.tgju.org/currency";
var footbalTableUrl        = "https://www.varzesh3.com/";


const cheerio   = require('cheerio');
const got       = require('got');


const fetchAll =  async function () {

    var response = await got(currencyUrl);
    var $        = cheerio.load(response.body);

    // currency
    
    var dollar          = {
        price   : $('#l-price_dollar_rl > span > span.info-price').text(),
        change  : _findPriceChange($('#l-price_dollar_rl > span > span.info-change'),$),
        codes   : "USD",
        symbol  : "$"
    };
    

    var euro =  {
        price       : $('#l-price_eur > span > span.info-price').text(),
        change      : _findPriceChange($('#l-price_eur > span > span.info-change'),$),
        codes       : "EUR",
        symbol      : "€"
    };


    var bitcoin = {
        price       : $('#l-crypto-bitcoin > span > span.info-price').text(),
        change      : _findPriceChange($('#l-crypto-bitcoin > span > span.info-change'),$),
        codes       : "BTC",
        symbol      : "₿"
    };

    var pound = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(3)'),$),
        codes       : "GBP",
        symbol      : "£"
    }; 

    var uae = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(3)'),$),
        codes       : "AED",
        symbol      : "د.إ"
    };

    var lier = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(5) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(5) > td:nth-child(3)'),$),
        codes       : "TRY",
        symbol      : "₺"
    };
    var franc = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(3)'),$),
        codes       : "CHF",
        symbol      : "fr"
    };
    var yuan = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td:nth-child(3)'),$),
        codes       : "CNY",
        symbol      : "¥"
    };
    var canadaDollar = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(10) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(10) > td:nth-child(3)'),$),
        codes       : "CAD",
        symbol      : "$"
    };
    var austDollar = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(11) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(11) > td:nth-child(3)'),$),
        codes       : "AUD",
        symbol      : "$"
    }
    var iraqDinar = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(16) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(1) > table > tbody > tr:nth-child(16) > td:nth-child(3)'),$),
        codes       : "IQD",
        symbol      : "د.ع"
    }
    var sweedSek = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(3)'),$),
        codes       : "SEK",
        symbol      : "kr"
    }
    var saudiArabiaRials = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(3)'),$),
        codes       : "SAR",
        symbol      : "﷼"
    }
    var qatarRials = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(3)'),$),
        codes       : "QAR",
        symbol      : "﷼"
    }
    var omanRials = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(3)'),$),
        codes       : "OMR",
        symbol      : "﷼"
    }
    var roble = {
        price       : $('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(12) > td:nth-child(2)').html(),
        change      : _findPriceChange($('#main > div:nth-child(6) > div > div > div:nth-child(2) > table > tbody > tr:nth-child(12) > td:nth-child(3)'),$),
        codes       : "RUB",
        symbol      : "₽"
    }



    //-- gold
    var seke = $('#l-sekee > span > span.info-price').text();
    var goldOns = $('#l-ons > span > span.info-price').text();
    var goldMesghal = $('#l-mesghal > span > span.info-price').text();
    var gold18 = $('#l-geram18 > span > span.info-price').text();


    var oilBrent = $('#l-oil_brent > span > span.info-price').text();
    var iranstock = $('#l-bourse > span > span.info-price').text();







    var createtime = (new Date().getTime());

    var output = {
        "timestamp": createtime,
        "currency": {
            dollar,
            euro,
            bitcoin,
            pound,
            canadaDollar,
            austDollar,
            franc,
            sweedSek,
            lier,
            yuan,
            roble,
            uae,
            iraqDinar,
            saudiArabiaRials,
            qatarRials,
            omanRials,
        },
        "gold": {
            seke,
            goldOns,
            goldMesghal,
            gold18
        },
        "oil": { oilBrent },
        "other": { iranstock, bitcoin },
    }

    return output;
};




const fetchFootbalLeageTable = async function()
{
    var table       = [];
    var response2   = await got(footbalTableUrl);
    var $2          = cheerio.load(response2.body);
    $2('div.widget-body > div.widget-table > div.table-holder > table.league-standing tr').each((i, item) => {
        var text1 = $2('td:nth-child(1)', item).text();
        var text2 = $2('td:nth-child(2)', item).text();
        var text3 = $2('td:nth-child(3)', item).text();
        var text4 = $2('td:nth-child(4)', item).text();
        if(text1)
        table.push({ rank: text1,team: text2.trim(), point: text4.trim(), match: text3 });
    })

    return table;
}

const _findPriceChange = function(elm,$){
    let firstLevelClass = elm.attr('class');
    let firstchild      = elm.children().get(0);
    let targetClassName = null;
    /* --- find target element that containt class name tell us is change highe or low  --- */
    if (firstchild && firstchild.tagName == 'span') // if target item is in the main page
        targetClassName = $(firstchild).attr('class');
    else // if target item is main sticky bar
    {
        let parent = elm.parents('li');
        targetClassName = parent.attr('class');
    }

    if (targetClassName.indexOf('high') > -1)
        return {
            type    : "positive" ,
            change  : elm.text()
        };
    if (firstLevelClass.indexOf('low') > -1)
        return {
            type    : "negative",
            change  : elm.text()
        };
    return {
        type: "none",
        change: elm.text()
    };
}





module.exports = {fetchAll, fetchFootbalLeageTable};