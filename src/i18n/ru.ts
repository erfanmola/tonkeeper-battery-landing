const dict = {
    locales: {
        en: 'Английский',
        fa: 'Персидский',
        ar: 'Арабский',
        ru: 'Русский',
        es: 'Испанский',
        id: 'Индонезийский',
        hi: 'Хинди',
        zhHans: 'Китайский',
    },
    home: {
        title: 'Батарея Tonkeeper',
        description: 'Батарея Tonkeeper - это функция, которая оплачивает комиссии за транзакции, когда баланс TON на счете равен нулю. Батарея покрывает платежи, стейкинг, свопы и многое другое с любыми токенами и NFT.',
        header: {
            menu: {
                home: 'Главная',
                faq: 'FAQ',
                support: 'Поддержка',
                github: 'GitHub',
            },
            language: 'Язык',
            hero: {
                title: 'Батарея Tonkeeper',
                typewriter: [
                    'Интегрированные платежи и свопы',
                    'Передача NFT',
                    'Финансирование криптовалютой',
                    'Финансирование с помощью покупок в приложении',
                ],
                description: 'Батарея Tonkeeper устраняет препятствие для новичков: вы можете получить стейблкоин или NFT и использовать их сразу же, не приобретая нативные монеты для оплаты газа. Вам не нужно идти на биржу, проходить KYC, вводить множество данных, чтобы купить случайное количество монет, которые вам не нужны.',
            },
        },
        integratedTransfers: {
            title: 'Интегрированные переводы и свопы',
            description: 'С батареей Tonkeeper вам больше не нужно беспокоиться о газе. Пополните свою батарею с помощью банковской карты или стейблкоина и используйте все функции вашего кошелька сразу.',
            items: {
                TON: {
                    title: 'TON',
                    subtitle: 'Легкий обмен TON на другие токены',
                },
                NOT: {
                    title: 'NOT',
                    subtitle: 'Перевод NOT без необходимости в TON',
                },
                USDT: {
                    title: 'USDT',
                    subtitle: 'Перевод USDT без необходимости в TON',
                },
                NFT: {
                    title: 'NFT',
                    subtitle: 'Торговля NFT без необходимости в TON',
                },
            }
        },
        comparison: {
            title: 'Безгазовые платежи и 🔥 W5',
            description: 'С безгазовыми платежами вам не нужно заряжать батарею, комиссии за транзакции оплачиваются напрямую из баланса USDT.',
            items: {
                battery: {
                    title: 'Батарея',
                    description: 'Батарея Tonkeeper - это функция, которая оплачивает комиссии за транзакции, когда баланс TON на счете равен нулю. Батарея покрывает платежи, стейкинг, свопы и многое другое с любыми токенами и NFT.',
                    pros: [
                        'Работает с различными типами активов',
                        'Работает как с кошельками W4, так и с кошельками W5',
                    ],
                },
                w5: {
                    title: 'Кошелек W5',
                    description: 'W5 - это открытый стандарт кошелька, разработанный командой Tonkeeper. В W5 пользователям не нужно заряжать батарею, комиссии за транзакции оплачиваются напрямую из баланса USDT.',
                    pros: [
                        'В 2 раза быстрее и на 1.5 раза дешевле, чем в любом другом кошельке',
                    ],
                    cons: [
                        'Ограничено только USDT и NOT',
                        'Требуется кошелек W5',
                    ],
                },
            },
        },
        recharge: {
            title: 'Легкая подзарядка',
            description: 'Вы можете зарядить батарею одним нажатием с помощью покупок в приложении, либо с помощью TON или стейблкоинов. Отправьте несколько долларов стейблкоинов или TON на специальный адрес: battery.ton, и они автоматически зачислятся на ваш счет.',
            items: {
                crypto: {
                    title: 'Криптовалюта',
                    description: 'Вы можете зарядить батарею с помощью TON или стейблкоинов, таких как USDT',
                },
                inAppPurchase: {
                    title: 'Покупка в приложении',
                    description: 'Вы можете зарядить батарею через покупки в приложении',
                },
                wallet: {
                    title: 'Кошелек',
                    description: 'Вы можете зарядить батарею, пополнив адрес battery.ton',
                },
            }
        },
        plans: {
            title: 'Планы и цены',
            description: 'Батарея Tonkeeper измеряется в зарядах, каждый заряд покрывает комиссию за простую транзакцию перевода TON. Более сложные транзакции могут потребовать 5, 10 или более зарядов.',
            charges: (amount: number) => `${amount.toString()} зарядов`,
            items: {
                small: {
                    title: 'Малый',
                },
                medium: {
                    title: 'Средний',
                },
                large: {
                    title: 'Большой',
                },
            }
        },
        security: {
            title: 'Доступность и защита',
            description: 'Батарея Tonkeeper - это доступный и безопасный способ оплаты комиссий за транзакции в блокчейне TON, с упором на пользовательский опыт и легкость доступа.',
            items: {
                accessible: {
                    title: 'Доступность',
                    description: 'Батарея Tonkeeper предоставляет альтернативное и необязательное решение для оплаты комиссий за транзакции в блокчейне TON, предлагая вам несколько вариантов оплаты.',
                },
                security: {
                    title: 'Безопасность',
                    description: 'Батарея Tonkeeper обеспечивает вашу конфиденциальность и безопасность, ваши заряды хранятся в безопасности благодаря шифрованию высшего уровня, что дает вам спокойствие при использовании всех функций вашего кошелька.',
                },
            }
        },
        FAQ: {
            title: 'Часто задаваемые вопросы',
            items: [
                {
                    title: 'Комиссии за газ были убраны из Tonkeeper?',
                    description: 'Нет. Сеть TON взимает плату за каждую транзакцию, оплачиваемую в Toncoins. Батарея и безгазовые функции - это опциональные функции, которые упрощают оплату тех же комиссий без использования Toncoins.',
                },
                {
                    title: 'Как работает батарея Tonkeeper?',
                    description: 'Батарея Tonkeeper измеряется в зарядах, каждый заряд покрывает комиссию за простую транзакцию перевода TON. Более сложные транзакции могут потребовать 5, 10 или более зарядов. Вы можете зарядить батарею одним нажатием с помощью покупок в приложении, с помощью TON, стейблкоинов и Notcoin сейчас! Просто откройте приложение Tonkeeper, перейдите в настройки и пополните батарею с помощью TON, USDT или NOT.',
                },
                {
                    title: 'Как использовать батарею в моем Tonkeeper?',
                    description: 'Обновите Tonkeeper на iOS и Android до версии 4.3, затем пополните батарею в Настройках → Батарея. После зарядки статус батареи будет отображаться на главном экране.',
                },
                {
                    title: 'Как использовать кошелек W5 в моем Tonkeeper?',
                    description: 'Обновите Tonkeeper на iOS и Android до версии 4.6.1, затем нажмите на “USDT” и выберите “Попробовать кошелек W5”. Добавьте кошелек “W5” наряду с текущим кошельком и отправьте на него немного USDT, теперь вы можете оплачивать с помощью USDT и Notcoin без TON!',
                },
                {
                    title: 'Как использовать USDT для зарядки батареи?',
                    description: 'После получения USDT вы можете отправить несколько долларов на battery.ton, и ваша батарея будет заряжена за несколько секунд. После этого вы можете оплачивать с помощью USDT и не беспокоиться о комиссиях — батарея покроет их! Это настоящая магия: даже комиссия за первую транзакцию на battery.ton будет оплачена батареей (* для платежей свыше 10 USDT).',
                },
                {
                    title: 'Как использовать NOT для зарядки батареи?',
                    description: 'Откройте приложение Tonkeeper, выберите Настройки и пополните батарею. Для зарядки батареи нужно отправить минимум 300 Notcoins. Вы можете зарядить ее больше и обменять NOT на TON или USDT без покупки TON на бирже.',
                },
            ],
            platform: {
                title: 'Платформа FAQ Tonkeeper',
                description: "Не можете найти ответ? Посетите наш Центр помощи.",
            }
        },
        footer: {
            menu: {
                company: {
                    title: 'Компания',
                    items: {
                        news: 'Новости',
                        chat: 'Чат',
                        twitter: 'Твиттер',
                    },
                },
                resources: {
                    title: 'Ресурсы',
                    items: {
                        faq: 'FAQ',
                        support: 'Поддержка',
                        suggest: 'Предложить функцию',
                    },
                },
                developers: {
                    title: 'Разработчики',
                    items: {
                        documentation: 'Документация',
                        bugBounty: 'Награда за баг',
                        github: 'GitHub',
                    },
                },
                legal: {
                    title: 'Юридическая информация',
                    items: {
                        terms: 'Условия',
                        privacy: 'Конфиденциальность',
                    },
                },
            },
            copyright: {
                primary: `© ${new Date().getFullYear()} Tonkeeper. Все права защищены.`,
                secondary: 'Все торговые марки являются собственностью их владельцев.',
            },
        },
    }
};

export {
    dict
};
