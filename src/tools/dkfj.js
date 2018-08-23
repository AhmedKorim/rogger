const categories = [
    {
        closes: [
            {men: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {women: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {kids: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }, {
        electronics: [
            {houseGadgets: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {phones: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {laptops: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }, {
        music: [
            {gaz: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {electronic: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {metal: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }, {
        furniture: [
            {classic: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {metal: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {modern: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }, {
        jewellery: [
            {gold: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {gem: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {modern: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }
]
categories.reduce((acc, item) => {
    const key = Object.keys(item)[0];
    return {
        ...acc,
        [key]:{
            open:false,
            nest: item[key].reduce((acc, item) => {
                const key = Object.keys(item)[0];
                return {
                    ...acc,
                    [key]: false
                }
            }, {})
        }

    }
}, {})