var a = 1.0
var b = 100 - a

var icto = {

    rate: {
        list: [{
                "title": 'UM1S ' + a + '%',
                'par': a + '%'
            },
            {
                "title": 'FNX',
                'par': b + '%'
            },
        ]
    },

    modal: {
        content: ""
    },

    rules: {
        list: [{
                title: 'Convertible FNX Cap: ',
                partner: '80,000,000',
            },
            {
                title: 'Converts to: ',
                partner: 'UM1S',
            },
            {
                title: 'UM1S Description: ',
                partner: 'Asset-backed Token with around 10% annualized interest rate',
            },
            {
                title: 'FNX Conversion Process:',
                partner: 'Burnt through smart which decreases total supply of FNX',
            },
        ]
    },
    notes: {
        title: "Notes:",
        list: [
            `The prices of FNX, USDT XRP BTR, and BTC will be
            automatically calculated based on the exchange rate of USD and the above currencies. The
            prices of FNX and WAN will be calculated through an oracle contract.
            It will be renewed every 24 hours and calculated based on the 24-hour average price from
            Binance.`,
            `If you choose to buy in the smart contract, do not
            transfer your WAN from any exchanges or centralized account. If so, you will not receive FNX
            and lose your WAN.`,
            `We strictly limit the participation of citizens and
            permanent residents from US, China and Singapore.`,

        ]
    },

    exchange: {
        list: [
            "FNX in exchange account",
            "FNX in Wanchain Wallet",
            "Transfer FNX to the address below",
            "Receive your UM1S in the same address"
        ]
    },
    icto_last: {
        title: 'How to Redeem from UM1S',
        list: [
            'Open Wanchain wallet',
            'Deposit UM1S to exchange',
            'Based on amount of UM1S to get USDT(Principal+Interest)'
        ]
    },
    am_list: {
        list1: [{
                "title": "FNX offering price: ",
                "ul_style": "",
                "li_style": "display: block; padding: 30px; background: #22409A;color: #fff; text-align: center;",
                "span_title": "0.1 USD per FNX"
            },
            {
                "title": "UM1S face price: ",
                "ul_style": "border: 2px solid #22409A;",
                "li_style": "display: block; padding: 30px;text-align: center;",
                "span_title": "1 USD per UM1S"
            },
            {
                "title": "Convertibile period: ",
                "ul_style": "",
                "li_style": "display: block; padding: 30px;text-align: center;",
                "span_title": "90 days after listing"
            }
        ],
        list2: [{
                "title": "Conversion rate:",
                "ul_style": "",
                "li_style": "display: block; padding: 30px; background: #6E2C90;color: #fff;text-align: center;",
                "span_title": "10 FNX to 1 UM1S"
            },
            {
                "title": "Conversion cap: ",
                "ul_style": "border: 2px solid #6E2C90;",
                "li_style": "display: block; padding: 30px;text-align: center;",
                "span_title": "80% of FNX sold"
            },
        ]
    }
}