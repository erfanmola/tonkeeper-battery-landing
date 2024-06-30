const dict = {
    locales: {
        en: 'الإنجليزية',
        fa: 'الفارسية',
        ar: 'العربية',
        ru: 'الروسية',
        es: 'الإسبانية',
        id: 'الإندونيسية',
        hi: 'الهندية',
        zhHans: 'الصينية',
    },
    home: {
        title: 'بطارية Tonkeeper',
        description: 'بطارية Tonkeeper هي ميزة تدفع رسوم المعاملات عندما يكون رصيد TON في الحساب صفرًا. تغطي البطارية المدفوعات والتخزين والمقايضات والمزيد باستخدام أي رموز وNFTs.',
        header: {
            menu: {
                home: 'الصفحة الرئيسية',
                faq: 'الأسئلة الشائعة',
                support: 'الدعم',
                github: 'GitHub',
            },
            language: 'اللغة',
            hero: {
                title: 'بطارية Tonkeeper',
                typewriter: [
                    'مدفوعات ومقايضات متكاملة',
                    'نقل NFT',
                    'تمويل بالعملات الرقمية',
                    'تمويل من خلال عمليات الشراء داخل التطبيق',
                ],
                description: 'تزيل بطارية Tonkeeper عقبة أمام المبتدئين: يمكنك الحصول على عملة مستقرة أو NFT واستخدامها على الفور دون الحاجة إلى الحصول على عملات أصلية لدفع الغاز. لن تحتاج إلى الذهاب إلى بورصة، أو اجتياز فحوصات KYC، أو إدخال الكثير من التفاصيل لشراء كمية عشوائية من العملات التي لم تفكر فيها.',
            },
        },
        integratedTransfers: {
            title: 'التحويلات والمقايضات المتكاملة',
            description: 'مع بطارية Tonkeeper لن تحتاج إلى القلق بشأن الغاز بعد الآن. قم بشحن بطاريتك باستخدام بطاقة مصرفية أو عملة مستقرة، واستخدم جميع ميزات محفظتك على الفور.',
            items: {
                TON: {
                    title: 'TON',
                    subtitle: 'قم بمقايضة TON بسهولة مع رموز أخرى',
                },
                NOT: {
                    title: 'NOT',
                    subtitle: 'نقل NOT دون الحاجة إلى TON',
                },
                USDT: {
                    title: 'USDT',
                    subtitle: 'نقل USDT دون الحاجة إلى TON',
                },
                NFT: {
                    title: 'NFT',
                    subtitle: 'تداول NFTs دون الحاجة إلى TON',
                },
            }
        },
        comparison: {
            title: 'مدفوعات بدون غاز و 🔥 W5',
            description: 'مع المدفوعات بدون غاز لا تحتاج إلى شحن البطارية، تدفع رسوم المعاملات مباشرة من رصيد USDT.',
            items: {
                battery: {
                    title: 'البطارية',
                    description: 'بطارية Tonkeeper هي ميزة تدفع رسوم المعاملات عندما يكون رصيد TON في الحساب صفرًا. تغطي البطارية المدفوعات والتخزين والمقايضات والمزيد باستخدام أي رموز وNFTs.',
                    pros: [
                        'تعمل مع أنواع مختلفة من الأصول',
                        'تعمل مع كل من محفظة W4 وW5',
                    ],
                },
                w5: {
                    title: 'محفظة W5',
                    description: 'W5 هي معيار محفظة مفتوحة تم تطويرها بواسطة فريق Tonkeeper. في W5، لا يحتاج المستخدمون إلى شحن البطارية، تدفع رسوم المعاملات مباشرة من رصيد USDT.',
                    pros: [
                        'أسرع بمرتين وأرخص بـ 1.5 مرة من أي محفظة أخرى',
                    ],
                    cons: [
                        'محدودة فقط على USDT وNOT',
                        'تتطلب محفظة W5',
                    ],
                },
            },
        },
        recharge: {
            title: 'الشحن بسهولة',
            description: 'يمكنك شحن البطارية بنقرة واحدة باستخدام عمليات الشراء داخل التطبيق، أو باستخدام TON أو العملات المستقرة. أرسل بضعة دولارات من العملات المستقرة أو TON إلى عنوان خاص: battery.ton وستتم إضافة الشحنات إلى حسابك تلقائيًا.',
            items: {
                crypto: {
                    title: 'العملات الرقمية',
                    description: 'يمكنك شحن البطارية باستخدام TON أو العملات المستقرة مثل USDT',
                },
                inAppPurchase: {
                    title: 'الشراء داخل التطبيق',
                    description: 'يمكنك شحن البطارية عبر عمليات الشراء داخل التطبيق',
                },
                wallet: {
                    title: 'المحفظة',
                    description: 'يمكنك شحن البطارية بإيداع إلى battery.ton',
                },
            }
        },
        plans: {
            title: 'الخطط والأسعار',
            description: 'يتم قياس بطارية Tonkeeper بالشحنات، كل شحنة تغطي رسوم معاملة تحويل TON بسيطة. قد تستهلك المعاملات الأكثر تعقيدًا 5، 10 أو أكثر من الشحنات.',
            charges: (amount: number) => `${amount.toString()} شحنات`,
            items: {
                small: {
                    title: 'صغير',
                },
                medium: {
                    title: 'متوسط',
                },
                large: {
                    title: 'كبير',
                },
            }
        },
        security: {
            title: 'الوصول والحماية',
            description: 'بطارية Tonkeeper هي طريقة آمنة وسهلة الوصول لدفع رسوم المعاملات على بلوكشين TON، مع التركيز على تجربة المستخدم وسهولة الوصول.',
            items: {
                accessible: {
                    title: 'الوصول',
                    description: 'تقدم بطارية Tonkeeper حلاً اختياريًا وبديلًا لمتطلبات TON للمعاملات على بلوكشين TON، من خلال توفير عدة خيارات لدفع رسوم المعاملات.',
                },
                security: {
                    title: 'الأمان',
                    description: 'تضمن بطارية Tonkeeper خصوصيتك وأمانك، حيث يتم حماية شحناتك من خلال تشفير من الدرجة الأولى، مما يمنحك راحة البال أثناء استخدام جميع ميزات محفظتك.',
                },
            }
        },
        FAQ: {
            title: 'الأسئلة الشائعة',
            items: [
                {
                    title: 'هل تم إزالة رسوم الغاز من Tonkeeper؟',
                    description: 'لا. تفرض شبكة TON رسومًا على كل معاملة، تدفع بعملات Toncoins. البطارية والوظائف بدون غاز هي ميزات اختيارية تبسط دفع نفس الرسوم دون استخدام Toncoins.',
                },
                {
                    title: 'كيف تعمل بطارية Tonkeeper؟',
                    description: 'يتم قياس بطارية Tonkeeper بالشحنات، كل شحنة تغطي رسوم معاملة تحويل TON بسيطة. قد تستهلك المعاملات الأكثر تعقيدًا 5، 10 أو أكثر من الشحنات. يمكنك شحن البطارية بنقرة واحدة باستخدام عمليات الشراء داخل التطبيق، باستخدام TON، العملات المستقرة وNotcoin الآن! فقط افتح تطبيق Tonkeeper، اذهب إلى الإعدادات، وقم بشحن بطاريتك باستخدام TON، USDT، أو NOT.',
                },
                {
                    title: 'كيف يمكنني استخدام البطارية في Tonkeeper الخاص بي؟',
                    description: 'قم بتحديث Tonkeeper على iOS و Android إلى الإصدار 4.3، ثم قم بشحن البطارية في الإعدادات → البطارية. بعد الشحن، سيظهر حالة البطارية على الشاشة الرئيسية.',
                },
                {
                    title: 'كيف يمكنني استخدام محفظة W5 في Tonkeeper الخاص بي؟',
                    description: 'قم بتحديث Tonkeeper على iOS و Android إلى الإصدار 4.6.1، ثم اضغط على "USDT" وحدد "جرب محفظة W5". أضف محفظة "W5" بجانب المحفظة الحالية وأرسل بعض USDT إليها، الآن يمكنك الدفع بـ USDT و Notcoin دون TON!',
                },
                {
                    title: 'كيف يمكنني استخدام USDT لشحن البطارية؟',
                    description: 'بمجرد استلام USDT، يمكنك إرسال بضعة دولارات إلى battery.ton وسيتم شحن بطاريتك في بضع ثوانٍ. بعد ذلك يمكنك الدفع بـ USDT دون القلق بشأن الرسوم - ستتولى البطارية ذلك! هذه هي السحر الحقيقي: حتى الرسوم على أول معاملة إلى battery.ton ستدفع بواسطة البطارية (* للمدفوعات التي تزيد عن 10 USDT).',
                },
                {
                    title: 'كيف يمكنني استخدام NOT لشحن البطارية؟',
                    description: 'افتح تطبيق Tonkeeper، حدد الإعدادات وقم بشحن بطاريتك. لشحن البطارية تحتاج إلى إرسال ما لا يقل عن 300 Notcoins. يمكنك شحنها أكثر ومقايضة NOT بـ TON أو USDT دون شراء TON من البورصة.',
                },
            ],
            platform: {
                title: 'منصة الأسئلة الشائعة Tonkeeper',
                description: "لا تستطيع العثور على إجابتك؟ قم بزيارة مركز المساعدة الخاص بنا.",
            }
        },
        footer: {
            menu: {
                company: {
                    title: 'الشركة',
                    items: {
                        news: 'الأخبار',
                        chat: 'الدردشة',
                        twitter: 'تويتر',
                    },
                },
                resources: {
                    title: 'الموارد',
                    items: {
                        faq: 'الأسئلة الشائعة',
                        support: 'الدعم',
                        suggest: 'اقتراح ميزة',
                    },
                },
                developers: {
                    title: 'المطورون',
                    items: {
                        documentation: 'التوثيق',
                        bugBounty: 'مكافأة الأخطاء',
                        github: 'GitHub',
                    },
                },
                legal: {
                    title: 'معلومات قانونية',
                    items: {
                        terms: 'الشروط',
                        privacy: 'الخصوصية',
                    },
                },
            },
            copyright: {
                primary: `© ${new Date().getFullYear()} Tonkeeper. جميع الحقوق محفوظة.`,
                secondary: 'جميع العلامات التجارية هي ملك لأصحابها.',
            },
        },
    }
};

export {
    dict
};
