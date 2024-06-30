const dict = {
    locales: {
        en: 'English',
        fa: 'Persian',
        ar: 'Arabic',
        ru: 'Russian',
        es: 'Spanish',
        id: 'Indonesian',
        hi: 'Hindi',
        zhHans: 'Chinese',
    },
    home: {
        title: 'Tonkeeper Battery',
        description: 'Tonkeeper Battery is a feature that pays transactions fees when an account’s TON balance is zero. The Battery covers payments, staking, swaps and more with any tokens and NFTs.',
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
            title: 'Gasless Payments & 🔥 W5',
            description: 'With Gasless Payments you do not have to charge the Battery, transaction fees are paid directly from the USDT balance.',
            items: {
                battery: {
                    title: 'Battery',
                    description: 'Tonkeeper Battery is a feature that pays transactions fees when an account’s TON balance is zero. The Battery covers payments, staking, swaps and more with any tokens and NFTs.',
                    pros: [
                        'Works with many different kind of assets',
                        'Works on both W4 and W5 wallets',
                    ],
                },
                w5: {
                    title: 'W5 Wallet',
                    description: 'W5 is an open wallet standard developed by Tonkeeper team. In W5 users do not have to charge the Battery, transaction fees are paid directly from the USDT balance.',
                    pros: [
                        '2x faster and 1.5x cheaper than in any other wallet',
                    ],
                    cons: [
                        'Limited to only USDT and NOT',
                        'Requires a W5 wallet',
                    ],
                },
            },
        },
        recharge: {
            title: 'Recharge with ease',
            description: 'You can charge the battery with one tap using in-app purchases, or with TON or stablecoins. Send a few dollars worth of stablecoins or TON to a special address: battery.ton and it will automatically apply charges to your account.',
            items: {
                crypto: {
                    title: 'Crypto',
                    description: 'You can charge the battery with TON or stablecoins like USDT',
                    symbol: {
                        USDT: 'Recharge with USDT',
                        TON: 'Recharge with TON',
                    },
                },
                inAppPurchase: {
                    title: 'In-App Purchase',
                    description: 'You can charge the battery via In-App Purchases',
                    symbol: {
                        title: 'Apple Pay',
                        cancel: 'Cancel',
                        product: 'Small Pack',
                        description: 'Tonkeeper - TON Wallet',
                        confirm: 'Confirm with Side Button',
                    },
                },
                wallet: {
                    title: 'Wallet',
                    description: 'You can charge the battery by depositing to battery.ton',
                },
            }
        },
        plans: {
            title: 'Plans & Pricing',
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
            title: 'Accessible and Protected',
            description: 'Tonkeeper Battery is an accessible and secure way of paying transaction fees on TON Blockchain, with focusing on the User Experience and ease of access.',
            items: {
                accessible: {
                    title: 'Accessibility',
                    description: 'Tonkeeper Battery provides an optional and alternative solution for the requirement of TON for transactions on the TON Blockchain by providing you multiple choices for paying your transaction fees.',
                },
                security: {
                    title: 'Security',
                    description: 'Tonkeeper Battery ensures your privacy and security, with your charges kept safe through top-tier encryption, giving you peace of mind while using all features of your wallet.',
                },
            }
        },
        FAQ: {
            title: 'Frequently Asked Questions',
            items: [
                {
                    title: 'Have gas fees been removed from Tonkeeper?',
                    description: 'No. The TON network charges a fee for every transaction, paid in Toncoins. Battery and Gasless are optional features that simplify paying the same fees without using Toncoins.',
                },
                {
                    title: 'How does Tonkeepr Battery work?',
                    description: 'Tonkeeper Battery is denominated in charges, each charge covers the fee of a simple TON transfer transaction. More complex transactions may consume 5, 10 or more charges. You can charge the battery with one tap using in-app purchases, with TON, Stablecoins and Notcoin now! Just open the Tonkeeper app, go to Settings, and top up your Battery using TON, USDT, or NOT.',
                },
                {
                    title: 'How can I use Battery on my Tonkeeper?',
                    description: 'Update Tonkeeper on iOS and Android to version 4.3, then top up the battery in Settings → Battery. Once charged, the battery status will appear on the main screen.',
                },
                {
                    title: 'How can I use W5 wallet on my Tonkeeper?',
                    description: 'Update Tonkeeper on iOS and Android to version 4.6.1, then tap “USDT” and select “Try W5 Wallet”. Add the “W5” wallet alongside a current wallet and send some USDT to it, now you can pay with USDT and Notcoin without TON!',
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
            platform: {
                title: 'Tonkeeper FAQ Platform',
                description: "Can't find your answer? Visit our Help Center.",
            }
        },
        footer: {
            menu: {
                company: {
                    title: 'Company',
                    items: {
                        news: 'News',
                        chat: 'Chat',
                        twitter: 'Twitter',
                    },
                },
                resources: {
                    title: 'Resources',
                    items: {
                        faq: 'FAQ',
                        support: 'Support',
                        suggest: 'Suggest a Feature',
                    },
                },
                developers: {
                    title: 'Developers',
                    items: {
                        documentation: 'Documentation',
                        bugBounty: 'Bug Bounty',
                        github: 'GitHub',
                    },
                },
                legal: {
                    title: 'Legal',
                    items: {
                        terms: 'Terms',
                        privacy: 'Privacy',
                    },
                },
            },
            copyright: {
                primary: `© ${new Date().getFullYear()} Tonkeeper. All rights reserved.`,
                secondary: 'All trademarks are the property of their respective owners.',
            },
        },
    }
};

export {
    dict
};
