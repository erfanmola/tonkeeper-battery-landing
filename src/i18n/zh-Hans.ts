const dict = {
    locales: {
        en: '英语',
        fa: '波斯语',
        ar: '阿拉伯语',
        ru: '俄语',
        es: '西班牙语',
        id: '印尼语',
        hi: '印地语',
        zhHans: '中文',
    },
    home: {
        title: 'Tonkeeper 电池',
        description: 'Tonkeeper 电池是一项功能，当账户的 TON 余额为零时支付交易费用。电池覆盖支付、质押、交换和更多内容，支持任何代币和 NFT。',
        header: {
            menu: {
                home: '首页',
                faq: '常见问题',
                support: '支持',
                github: 'GitHub',
            },
            language: '语言',
            hero: {
                title: 'Tonkeeper 电池',
                typewriter: [
                    '集成支付和交换',
                    'NFT 转移',
                    '加密货币资助',
                    '应用内购买资助',
                ],
                description: 'Tonkeeper 电池消除了新手的障碍：您可以获得稳定币或 NFT 并立即使用它们，而无需获取本地代币来支付 Gas 费。您不需要前往交易所、通过 KYC 检查、输入大量详细信息，只是为了购买您认为不需要的随机数量的代币。',
            },
        },
        integratedTransfers: {
            title: '集成转移和交换',
            description: '使用 Tonkeeper 电池，您将不再需要担心 Gas 费。用银行卡或稳定币充值您的电池，并立即使用您的钱包的所有功能。',
            items: {
                TON: {
                    title: 'TON',
                    subtitle: '轻松将 TON 兑换成其他代币',
                },
                NOT: {
                    title: 'NOT',
                    subtitle: '无需 TON 即可转移 NOT',
                },
                USDT: {
                    title: 'USDT',
                    subtitle: '无需 TON 即可转移 USDT',
                },
                NFT: {
                    title: 'NFT',
                    subtitle: '无需 TON 即可交易 NFT',
                },
            }
        },
        comparison: {
            title: '无 Gas 支付 & 🔥 W5',
            description: '使用无 Gas 支付，您不需要为电池充电，交易费用直接从 USDT 余额中支付。',
            items: {
                battery: {
                    title: '电池',
                    description: 'Tonkeeper 电池是一项功能，当账户的 TON 余额为零时支付交易费用。电池覆盖支付、质押、交换和更多内容，支持任何代币和 NFT。',
                    pros: [
                        '适用于多种不同类型的资产',
                        '适用于 W4 和 W5 钱包',
                    ],
                },
                w5: {
                    title: 'W5 钱包',
                    description: 'W5 是 Tonkeeper 团队开发的开放钱包标准。在 W5 中，用户不需要为电池充电，交易费用直接从 USDT 余额中支付。',
                    pros: [
                        '比任何其他钱包快 2 倍且便宜 1.5 倍',
                    ],
                    cons: [
                        '仅限于 USDT 和 NOT',
                        '需要 W5 钱包',
                    ],
                },
            },
        },
        recharge: {
            title: '轻松充值',
            description: '您可以通过应用内购买或使用 TON 或稳定币一键为电池充电。向一个特殊地址发送几美元的稳定币或 TON：battery.ton，它会自动为您的账户应用费用。',
            items: {
                crypto: {
                    title: '加密货币',
                    description: '您可以用 TON 或稳定币如 USDT 为电池充电',
                },
                inAppPurchase: {
                    title: '应用内购买',
                    description: '您可以通过应用内购买为电池充电',
                },
                wallet: {
                    title: '钱包',
                    description: '您可以通过存入 battery.ton 来为电池充电',
                },
            }
        },
        plans: {
            title: '计划和定价',
            description: 'Tonkeeper 电池以费用计算，每次费用覆盖一次简单的 TON 转账交易。更复杂的交易可能消耗 5、10 或更多费用。',
            charges: (amount: number) => `${amount.toString()
                } 次费用`,
            items: {
                small: {
                    title: '小型',
                },
                medium: {
                    title: '中型',
                },
                large: {
                    title: '大型',
                },
            }
        },
        security: {
            title: '可访问且受保护',
            description: 'Tonkeeper 电池是在 TON 区块链上支付交易费用的可访问且安全的方式，专注于用户体验和访问的便捷性。',
            items: {
                accessible: {
                    title: '可访问性',
                    description: 'Tonkeeper 电池为 TON 区块链上的交易费用要求提供了一个可选的替代方案，为您提供多种支付交易费用的选择。',
                },
                security: {
                    title: '安全性',
                    description: 'Tonkeeper 电池通过顶级加密确保您的隐私和安全，在使用钱包的所有功能时让您安心。',
                },
            }
        },
        FAQ: {
            title: '常见问题',
            items: [
                {
                    title: 'Tonkeeper 已经取消 Gas 费了吗？',
                    description: '没有。TON 网络对每笔交易收取费用，费用以 Toncoins 支付。电池和无 Gas 功能是简化支付相同费用的可选功能，无需使用 Toncoins。',
                },
                {
                    title: 'Tonkeeper 电池是如何工作的？',
                    description: 'Tonkeeper 电池以费用计算，每次费用覆盖一次简单的 TON 转账交易。更复杂的交易可能消耗 5、10 或更多费用。您可以通过应用内购买、TON、稳定币和 Notcoin 为电池充电。只需打开 Tonkeeper 应用，前往设置，并使用 TON、USDT 或 NOT 充值您的电池。',
                },
                {
                    title: '我如何在 Tonkeeper 上使用电池？',
                    description: '在 iOS 和 Android 上更新 Tonkeeper 至版本 4.3，然后在设置 → 电池中为电池充电。充电后，电池状态将显示在主屏幕上。',
                },
                {
                    title: '我如何在 Tonkeeper 上使用 W5 钱包？',
                    description: '在 iOS 和 Android 上更新 Tonkeeper 至版本 4.6.1，然后点击“USDT”并选择“试用 W5 钱包”。在现有钱包旁边添加“W5”钱包，并向其发送一些 USDT，现在您可以使用 USDT 和 Notcoin 而无需 TON 支付！',
                },
                {
                    title: '我如何使用 USDT 为电池充电？',
                    description: '一旦您收到 USDT，您可以发送几美元到 battery.ton，并在几秒钟内为您的电池充电。之后，您可以使用 USDT 支付，不必担心费用——电池会处理这些费用！这是真正的魔力：即使是第一次向 battery.ton 发送的交易费用也将由电池支付（*超过 10 usdt 的付款）。',
                },
                {
                    title: '我如何使用 NOT 为电池充电？',
                    description: '打开 Tonkeeper 应用，选择设置并为电池充电。要为电池充电，您需要发送至少 300 个 Notcoins。您可以充值更多，并在不通过交易所购买 TON 的情况下将 NOT 兑换成 TON 或 USDT。',
                },
            ],
            platform: {
                title: 'Tonkeeper 常见问题平台',
                description: "找不到答案？访问我们的帮助中心。",
            }
        },
        footer: {
            menu: {
                company: {
                    title: '公司',
                    items: {
                        news: '新闻',
                        chat: '聊天',
                        twitter: 'Twitter',
                    },
                },
                resources: {
                    title: '资源',
                    items: {
                        faq: '常见问题',
                        support: '支持',
                        suggest: '建议功能',
                    },
                },
                developers: {
                    title: '开发者',
                    items: {
                        documentation: '文档',
                        bugBounty: '漏洞赏金',
                        github: 'GitHub',
                    },
                },
                legal: {
                    title: '法律',
                    items: {
                        terms: '条款',
                        privacy: '隐私',
                    },
                },
            },
            copyright: {
                primary: `© ${new Date().getFullYear()} Tonkeeper。版权所有。`,
                secondary: '所有商标均为其各自所有者的财产。',
            },
        },
    }
};

export {
    dict
};
