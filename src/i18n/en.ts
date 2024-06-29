const dict = {
    locales: {
        en: 'English',
        fa: 'Persian',
        ar: 'Arabic',
        ru: 'Russian',
    },
    home: {
        header: {
            menu: {
                home: 'Home',
                faq: 'FAQ',
                support: 'Support',
                github: 'GitHub',
            },
            language: 'Language',
            hero: {
                title: 'Tonkeeper Battery',
                typewriter: [
                    'Integrated Payments & Swaps',
                    'NFT Transfers',
                    'Funding with Crypto',
                    'Funding with In-App Purchase',
                ],
                description: 'Tonkeeper Battery removes an obstacle for newcomers: you can get a stablecoin or an NFT and use them right away without acquiring native coins to pay for gas. You won’t need to go to an exchange, pass KYC checks, enter a lot of details only to buy a random amount of coins you did not think you needed.',
            },
        },
        integratedTransfers: {
            title: 'Integrated Transfers & Swaps',
            description: 'With Tonkeeper Battery you will never have to worry about gas anymore. Top up your battery with a banking card or a stablecoin, and use all features of your wallet right away.',
            items: {
                TON: {
                    title: 'TON',
                    subtitle: 'Swap TON to other tokens with ease',
                },
                NOT: {
                    title: 'NOT',
                    subtitle: 'Transfer NOT without the need for TON',
                },
                USDT: {
                    title: 'USDT',
                    subtitle: 'Transfer USDT without the need for TON',
                },
                NFT: {
                    title: 'NFT',
                    subtitle: 'Trade NFTs without the need for TON',
                },
            }
        },
        comparison: {
            title: 'Differences with Gasless',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
        },
        recharge: {
            title: 'Recharge with ease',
            description: 'You can charge the battery with one tap using in-app purchases, or with TON or stablecoins. Send a few dollars worth of stablecoins or TON to a special address: battery.ton and it will automatically apply charges to your account.',
            items: {
                crypto: {
                    title: 'Crypto',
                    description: 'You can charge the battery with TON or stablecoins like USDT',
                },
                inAppPurchase: {
                    title: 'In-App Purchase',
                    description: 'You can charge the battery via In-App Purchases',
                },
                wallet: {
                    title: 'Wallet',
                    description: 'You can charge the battery by depositing to battery.ton',
                },
            }
        },
        plans: {
            title: 'Plans',
            description: 'Tonkeeper Battery is denominated in charges, each charge covers the fee of a simple TON transfer transaction. More complex transactions may consume 5, 10 or more charges.',
            charges: (amount: number) => `${amount.toString()} charges`,
            items: {
                small: {
                    title: 'Small',
                },
                medium: {
                    title: 'Medium',
                },
                large: {
                    title: 'Large',
                },
            }
        },
        security: {
            title: 'Privacy & Security',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
        },
        FAQ: {
            title: 'Frequently Asked Questions',
            items: [
                {
                    title: 'How does Tonkeepr Battery work?',
                    description: 'Tonkeeper Battery is denominated in charges, each charge covers the fee of a simple TON transfer transaction. More complex transactions may consume 5, 10 or more charges. You can charge the battery with one tap using in-app purchases, with TON, Stablecoins and Notcoin now! Just open the Tonkeeper app, go to Settings, and top up your Battery using TON, USDT, or NOT.',
                },
                {
                    title: 'How can I use it on my wallet?',
                    description: 'Update Tonkeeper on iOS and Android to version 4.3, then top up the battery in Settings → Battery. Once charged, the battery status will appear on the main screen.',
                },
                {
                    title: 'How can I use USDT for charging the battery?',
                    description: 'Once you receive USDT, you can send a couple of dollars to battery.ton and have your Battery recharged in a few seconds. After that you can pay with USDT and not worry about the fees — the Battery will take care of them! This is the real magic: even the fees for the very first transaction to battery.ton is going to be paid by the Battery (* for payments over 10 usdt).',
                },
                {
                    title: 'How can I use NOT for charging the battery?',
                    description: ' Open the Tonkeeper app, select Settings and top up your Battery. To charge the Battery you need to send at least 300 Notcoins. You can charge it up more and swap NOT for TON or USDT without buying TON on the exchange',
                },
            ],
            note: "Can't find your answer? View our full FAQ",
        },
    }
};

export {
    dict
};
