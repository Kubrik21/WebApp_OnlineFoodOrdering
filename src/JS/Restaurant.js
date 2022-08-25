const Restaurants = [
    {
        Id: 1,
        Name: "KFC",
        Logo: "/KFC.png",
        Delivery: "10.00",
        MinValue:"40.00",
        Description:"Lubisz jedzenie z KFC? Dowiedz się, kim był pułkownik Sander. Poznaj nasze zasady oraz historię KFC i niezwykłego przepisu na słynną panierkę.",
        Menu: [
            {
                Category: "Burgery",
                Id:1,
                Product: [
                    {
                        ProductName: "Grander",
                        Price: "25.99",
                        logo: 'https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/new/grander.png'
                    },
                    {
                        ProductName: "Kentucky Gold Grander",
                        Price: "26.99",
                        logo: 'https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/new/kentucky.png'
                    },
                ]
            },
            {
                Category: "Wrapy",
                Id:2,
                Product: [
                    {
                        ProductName: "ITwist",
                        Price: "8.99",
                        logo: 'https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/new/iTwist.png'
                    },
                ]
            },
            {
                Category: "Napoje",
                Id:3,
                Product: [
                    {
                        ProductName: "Pepsi",
                        Price: "5.99",
                        logo: 'https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/napoje/pepsi%20_puszka.png'
                    },

                ]
            },
            {
                Category: "Inne",
                Id:4,
                Product: [
                    {
                        ProductName: "Kubełek frytek",
                        Price: "12.49",
                        logo: 'https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/dodatki/kubelki_1os-frytki_web.png'
                    },

                ]

            }
        ]
    },
    {
        Id: 2,
        Name: "Mc'donalds",
        Logo: "/Mcdonalds.png",
        Delivery: "16.00",
        MinValue:"30.00",
        Description:"Kiedy jesteśmy blisko, dostrzegamy więcej. Rozumiemy więcej. Możemy działać lepiej. Być blisko. Znamy naszych dostawców, problemy lokalnych rolników. Widzimy też ich pasję, troskę i serce wkładane w produkcję żywności. Widzimy, rozumiemy i wiemy, co musimy robić w trosce o środowisko. ​",
        Menu: [
            {
                Category: "Burgery",
                Id:1,
                Product: [
                    {
                        ProductName: "Big Mac",
                        Price: "26.00",
                        logo: 'https://cdn.mcdonalds.pl/uploads/20201125085847/big-mac2.jpg'
                    },
                    {
                        ProductName: "McRoyal",
                        Price: "26.00",
                        logo: 'https://cdn.mcdonalds.pl/uploads/20201125090250/mcroyal2.jpg'
                    },
                ]
            },
            {
                Category: "Wrapy",
                Id:2,
                Product: [
                    {
                        ProductName: "Classic Wrapper",
                        Price: "26.00",
                        logo: 'https://cdn.mcdonalds.pl/uploads/20210423094014/01-15-mcwrap-klasyczny.jpg'
                    },
                ]
            },
            {
                Category: "Napoje",
                Id:3,
                Product: [
                    {
                        ProductName: "CocaCola",
                        Price: "26.00",
                        logo: 'https://cdn.mcdonalds.pl/uploads/20191113190556/06-01-napo-j-sredni.jpg'
                    },

                ]
            },
            {
                Category: "Inne",
                Id:4,
                Product: [
                    {
                        ProductName: "Frytki",
                        Price: "8.00",
                        logo: 'https://cdn.mcdonalds.pl/uploads/20191002145139/07-01-frytki.jpg'
                    },

                ]

            }
        ]
    },
    {
        Id: 3,
        Name: "PizzaHut",
        Logo: "/Pizza.png",
        Delivery: "10.00",
        MinValue:"45.00",
        Description:"Zamawiaj pizzę i inne dania przez internet, z dostawą lub na wynos. Znajdź najbliższy lokal, lub wybierz dostawę do domu. 85% zamówień dowozimy w 25 minut!",
        Menu: [
            {
                Category: "Burgery",
                Id:1,
                Product: [
                    {
                        ProductName: "Big Mac",
                        Price: "26.00",
                        logo: ''
                    },
                    {
                        ProductName: "McRoyal",
                        Price: "26.00",
                        logo: ''
                    },
                ]
            },
            {
                Category: "Wrapy",
                Id:2,
                Product: [
                    {
                        ProductName: "Classic Wrapper",
                        Price: "26.00",
                        logo: ''
                    },
                ]
            },
            {
                Category: "Napoje",
                Id:3,
                Product: [
                    {
                        ProductName: "CocaCola",
                        Price: "26.00",
                        logo: ''
                    },

                ]
            },
            {
                Category: "Inne",
                Id:4,
                Product: [
                    {
                        ProductName: "Frytki",
                        Price: "8.00",
                        logo: ''
                    },

                ]

            }
        ]
    },
    {
        Id: 4,
        Name: "Subway",
        Logo: "/Subway.jpg",
        Delivery: "20.00",
        MinValue:"20.00",
        Description:"Nowe menu wegańskie. Spróbuj! Odwiedź nas i posmakuj naszych wiadomości. ŚNIADANIA - SENDVIC - OWIJANE - SAŁATKI - WEGGIE - Wszystko to znajdziesz u nas.",
        Menu: [
            {
                Category: "Burgery",
                Id:1,
                Product: [
                    {
                        ProductName: "Big Mac",
                        Price: "26.00",
                        logo: ''
                    },
                    {
                        ProductName: "McRoyal",
                        Price: "26.00",
                        logo: ''
                    },
                ]
            },
            {
                Category: "Wrapy",
                Id:2,
                Product: [
                    {
                        ProductName: "Classic Wrapper",
                        Price: "26.00",
                        logo: ''
                    },
                ]
            },
            {
                Category: "Napoje",
                Id:3,
                Product: [
                    {
                        ProductName: "CocaCola",
                        Price: "26.00",
                        logo: ''
                    },

                ]
            },
            {
                Category: "Inne",
                Id:4,
                Product: [
                    {
                        ProductName: "Frytki",
                        Price: "8.00",
                        logo: ''
                    },

                ]

            }
        ]
    }
]

export { Restaurants }