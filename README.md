# dollar-tomans-api 
Return last price of currency like dollar, pound, euro, bitcoin plus oil and gold price in rials(tomans) 


# گرفتن آخرین قیمت دلار
در واقع API برای دریافت اخرین قیمت دلارو یورو پوند و سایر ارز های مهم به ریال ، همراه با اخرین قیمت بیت کوین،نفت،طلا، بورس و حتی جدول لیگ برترایران به زبان node.js


## لیست ارز ها
- دلار آمریکا، کانادا، استرالیا : USD
- یورو : EUR
- پوند :‌GBP
- درهم امارات :‌AED
- لیر ترکیه :‌TRY
- فرانک سویس :‌CHF
- یوان چین :‌CNY
- دینار عراق :‌IQD
- کرون سوئد :‌SEK
- ریال عربستان :‌SAR
- ریال قطر :‌QAR
- ریال عمان :‌OMR
- روبل روسیه :‌RUB

### دیگر موارد
- بیت کوین 
- سکه
- انس طلا
- مثقال طلا
- طلای ۱۸
- نفت برنت
- بورس
- جدول لیگ برتر



## نصب
```sh
npm i dollar-tomans-api
```

## نحوه استفاده
```javascript
const  { fetchAll, fetchFootbalLeageTable } = require('dollar-tomans-api');
...
...
var lastPrice = await fetchAll();

var leageTable = await fetchFootbalLeageTable();

```  


## خروجی
```javascript

lastPrice = {
  "timestamp": 1648463109494,
  "currency": {
    "dollar": {
      "price": "264,240",
      "change": {
        "type": "positive",
        "change": "(0.63%)"
      },
      "codes": "USD",
      "symbol": "$"
    },
    "euro": {
      "price": "290,060",
      "change": {
        "type": "positive",
        "change": "(0.57%)"
      },
      "codes": "EUR",
      "symbol": "€"
    },
    "bitcoin": {
      "price": "47036.03",
      "change": {
        "type": "positive",
        "change": "(4.88%)"
      },
      "codes": "BTC",
      "symbol": "₿"
    },
    "pound": {
      "price": "347,880",
      "change": {
        "type": "positive",
        "change": "(0.22%) 760"
      },
      "codes": "GBP",
      "symbol": "£"
    },
    "canadaDollar": {
      "price": "211,400",
      "change": {
        "type": "positive",
        "change": "(0.48%) 1,000"
      },
      "codes": "CAD",
      "symbol": "$"
    },
    "austDollar": {
      "price": "201,600",
      "change": {
        "type": "positive",
        "change": "(0.65%) 1,300"
      },
      "codes": "AUD",
      "symbol": "$"
    },
    "franc": {
      "price": "285,000",
      "change": {
        "type": "none",
        "change": "(0.07%) 200"
      },
      "codes": "CHF",
      "symbol": "fr"
    },
    "sweedSek": {
      "price": "28,000",
      "change": {
        "type": "none",
        "change": "(0%) 0"
      },
      "codes": "SEK",
      "symbol": "kr"
    },
    "lier": {
      "price": "18,800",
      "change": {
        "type": "positive",
        "change": "(0.53%) 100"
      },
      "codes": "TRY",
      "symbol": "₺"
    },
    "yuan": {
      "price": "42,000",
      "change": {
        "type": "positive",
        "change": "(0.48%) 200"
      },
      "codes": "CNY",
      "symbol": "¥"
    },
    "roble": {
      "price": "2,800",
      "change": {
        "type": "positive",
        "change": "(2.56%) 70"
      },
      "codes": "RUB",
      "symbol": "₽"
    },
    "uae": {
      "price": "71,930",
      "change": {
        "type": "positive",
        "change": "(0.63%) 450"
      },
      "codes": "AED",
      "symbol": "د.إ"
    },
    "iraqDinar": {
      "price": "181",
      "change": {
        "type": "positive",
        "change": "(0.56%) 1"
      },
      "codes": "IQD",
      "symbol": "د.ع"
    },
    "saudiArabiaRials": {
      "price": "77,630",
      "change": {
        "type": "positive",
        "change": "(0.57%) 440"
      },
      "codes": "SAR",
      "symbol": "﷼"
    },
    "qatarRials": {
      "price": "74,100",
      "change": {
        "type": "positive",
        "change": "(0.82%) 600"
      },
      "codes": "QAR",
      "symbol": "﷼"
    },
    "omanRials": {
      "price": "695,200",
      "change": {
        "type": "positive",
        "change": "(0.89%) 6,100"
      },
      "codes": "OMR",
      "symbol": "﷼"
    }
  },
  "gold": {
    "seke": "124,480,000",
    "goldOns": "1,928.72",
    "goldMesghal": "53,880,000",
    "gold18": "12,425,000"
  },
  "oil": {
    "oilBrent": "113.56"
  },
  "other": {
    "iranstock": "1,418,611.5",
    "bitcoin": {
      "price": "47036.03",
      "change": {
        "type": "positive",
        "change": "(4.88%)"
      },
      "codes": "BTC",
      "symbol": "₿"
    }
  }
}

```  

## رفع مشکلات 
از انجایی که این یک crawler است ممکن است با بوجود آمدن تعیرات در سایت اصلی این کتابخانه دچار مشکل شود بنابراین به محض مشاهده خطا 
[من](https://github.com/hamid)    رو از طریق ایجاد  [issue](https://github.com/hamid/dollar-tomans-api/issues/new)  مطلع کنید.

## ارز های دیگر
این لیستی بود که من فکر میکردم مهم هست و اگر ارز دیگه ای میدونید مهم هست که اینجا باید باشه بگید تا اضافه کنم و یا خودتون هم به راحتی میتونید اضافه کنید😊

## توجه
توجه داشته باشید که این کد درواقع یک crawler 
از سایت tgju است و به صورت آزمایشی برای تحلیل قیمت دلار استفاده شده است بنابراین برای استفاده از این کتابخانه مجوز ها و موارد قانونی لازم را در نظر بگیرید.