const dict = {
    locales: {
        en: 'Inglés',
        fa: 'Persa',
        ar: 'Árabe',
        ru: 'Ruso',
        es: 'Español',
        id: 'Indonesio',
        hi: 'Hindi',
        zhHans: 'Chino',
    },
    home: {
        title: 'Batería Tonkeeper',
        description: 'La Batería Tonkeeper es una función que paga las tarifas de transacción cuando el saldo de TON de una cuenta es cero. La Batería cubre pagos, staking, intercambios y más con cualquier token y NFT.',
        header: {
            menu: {
                home: 'Inicio',
                faq: 'FAQ',
                support: 'Soporte',
                github: 'GitHub',
            },
            language: 'Idioma',
            hero: {
                title: 'Batería Tonkeeper',
                typewriter: [
                    'Pagos e Intercambios Integrados',
                    'Transferencias de NFT',
                    'Financiación con Cripto',
                    'Financiación con Compra en la App',
                ],
                description: 'La Batería Tonkeeper elimina un obstáculo para los nuevos usuarios: puedes obtener una moneda estable o un NFT y usarlos de inmediato sin adquirir monedas nativas para pagar el gas. No necesitarás ir a un intercambio, pasar controles KYC, ingresar muchos detalles solo para comprar una cantidad aleatoria de monedas que no pensabas necesitar.',
            },
        },
        integratedTransfers: {
            title: 'Transferencias e Intercambios Integrados',
            description: 'Con la Batería Tonkeeper nunca tendrás que preocuparte por el gas nuevamente. Recarga tu batería con una tarjeta bancaria o una moneda estable, y utiliza todas las funciones de tu billetera de inmediato.',
            items: {
                TON: {
                    title: 'TON',
                    subtitle: 'Intercambia TON por otros tokens con facilidad',
                },
                NOT: {
                    title: 'NOT',
                    subtitle: 'Transfiere NOT sin necesidad de TON',
                },
                USDT: {
                    title: 'USDT',
                    subtitle: 'Transfiere USDT sin necesidad de TON',
                },
                NFT: {
                    title: 'NFT',
                    subtitle: 'Intercambia NFT sin necesidad de TON',
                },
            }
        },
        comparison: {
            title: 'Pagos sin Gas & 🔥 W5',
            description: 'Con los Pagos sin Gas no necesitas cargar la Batería, las tarifas de transacción se pagan directamente desde el saldo de USDT.',
            items: {
                battery: {
                    title: 'Batería',
                    description: 'La Batería Tonkeeper es una función que paga las tarifas de transacción cuando el saldo de TON de una cuenta es cero. La Batería cubre pagos, staking, intercambios y más con cualquier token y NFT.',
                    pros: [
                        'Funciona con muchos tipos diferentes de activos',
                        'Funciona en billeteras W4 y W5',
                    ],
                },
                w5: {
                    title: 'Billetera W5',
                    description: 'W5 es un estándar de billetera abierta desarrollado por el equipo de Tonkeeper. En W5 los usuarios no necesitan cargar la Batería, las tarifas de transacción se pagan directamente desde el saldo de USDT.',
                    pros: [
                        '2 veces más rápido y 1.5 veces más barato que en cualquier otra billetera',
                    ],
                    cons: [
                        'Limitado solo a USDT y NOT',
                        'Requiere una billetera W5',
                    ],
                },
            },
        },
        recharge: {
            title: 'Recargar con facilidad',
            description: 'Puedes cargar la batería con un solo toque usando compras en la app, o con TON o monedas estables. Envía unos pocos dólares en monedas estables o TON a una dirección especial: battery.ton y se aplicarán automáticamente las cargas a tu cuenta.',
            items: {
                crypto: {
                    title: 'Cripto',
                    description: 'Puedes cargar la batería con TON o monedas estables como USDT',
                },
                inAppPurchase: {
                    title: 'Compra en la App',
                    description: 'Puedes cargar la batería mediante Compras en la App',
                },
                wallet: {
                    title: 'Billetera',
                    description: 'Puedes cargar la batería depositando en battery.ton',
                },
            }
        },
        plans: {
            title: 'Planes y Precios',
            description: 'La Batería Tonkeeper se denomina en cargas, cada carga cubre la tarifa de una transacción simple de transferencia de TON. Las transacciones más complejas pueden consumir 5, 10 o más cargas.',
            charges: (amount: number) => `${amount.toString()} cargas`,
            items: {
                small: {
                    title: 'Pequeño',
                },
                medium: {
                    title: 'Mediano',
                },
                large: {
                    title: 'Grande',
                },
            }
        },
        security: {
            title: 'Accesible y Protegido',
            description: 'La Batería Tonkeeper es una forma accesible y segura de pagar tarifas de transacción en la cadena de bloques TON, con un enfoque en la Experiencia del Usuario y la facilidad de acceso.',
            items: {
                accessible: {
                    title: 'Accesibilidad',
                    description: 'La Batería Tonkeeper proporciona una solución opcional y alternativa para el requisito de TON para transacciones en la cadena de bloques TON, brindándote múltiples opciones para pagar tus tarifas de transacción.',
                },
                security: {
                    title: 'Seguridad',
                    description: 'La Batería Tonkeeper asegura tu privacidad y seguridad, manteniendo tus cargas seguras mediante encriptación de primer nivel, brindándote tranquilidad mientras usas todas las funciones de tu billetera.',
                },
            }
        },
        FAQ: {
            title: 'Preguntas Frecuentes',
            items: [
                {
                    title: '¿Se han eliminado las tarifas de gas de Tonkeeper?',
                    description: 'No. La red TON cobra una tarifa por cada transacción, pagada en Toncoins. La Batería y Gasless son funciones opcionales que simplifican el pago de las mismas tarifas sin usar Toncoins.',
                },
                {
                    title: '¿Cómo funciona la Batería Tonkeeper?',
                    description: 'La Batería Tonkeeper se denomina en cargas, cada carga cubre la tarifa de una transacción simple de transferencia de TON. Las transacciones más complejas pueden consumir 5, 10 o más cargas. Puedes cargar la batería con un solo toque usando compras en la app, con TON, monedas estables y Notcoin ahora mismo. Solo abre la app Tonkeeper, ve a Configuración y recarga tu Batería usando TON, USDT o NOT.',
                },
                {
                    title: '¿Cómo puedo usar la Batería en mi Tonkeeper?',
                    description: 'Actualiza Tonkeeper en iOS y Android a la versión 4.3, luego recarga la batería en Configuración → Batería. Una vez cargada, el estado de la batería aparecerá en la pantalla principal.',
                },
                {
                    title: '¿Cómo puedo usar la billetera W5 en mi Tonkeeper?',
                    description: 'Actualiza Tonkeeper en iOS y Android a la versión 4.6.1, luego toca "USDT" y selecciona "Probar Billetera W5". Añade la billetera "W5" junto con una billetera actual y envía algunos USDT a ella, ¡ahora puedes pagar con USDT y Notcoin sin TON!',
                },
                {
                    title: '¿Cómo puedo usar USDT para recargar la batería?',
                    description: 'Una vez que recibas USDT, puedes enviar un par de dólares a battery.ton y recargar tu Batería en unos segundos. Después de eso, puedes pagar con USDT y no preocuparte por las tarifas: ¡la Batería se encargará de ellas! Esta es la verdadera magia: incluso las tarifas de la primera transacción a battery.ton serán pagadas por la Batería (* para pagos superiores a 10 usdt).',
                },
                {
                    title: '¿Cómo puedo usar NOT para recargar la batería?',
                    description: 'Abre la app Tonkeeper, selecciona Configuración y recarga tu Batería. Para cargar la Batería necesitas enviar al menos 300 Notcoins. Puedes cargarla más y cambiar NOT por TON o USDT sin comprar TON en el intercambio.',
                },
            ],
            platform: {
                title: 'Plataforma de Preguntas Frecuentes de Tonkeeper',
                description: "¿No encuentras tu respuesta? Visita nuestro Centro de Ayuda.",
            }
        },
        footer: {
            menu: {
                company: {
                    title: 'Compañía',
                    items: {
                        news: 'Noticias',
                        chat: 'Chat',
                        twitter: 'Twitter',
                    },
                },
                resources: {
                    title: 'Recursos',
                    items: {
                        faq: 'FAQ',
                        support: 'Soporte',
                        suggest: 'Sugerir una Función',
                    },
                },
                developers: {
                    title: 'Desarrolladores',
                    items: {
                        documentation: 'Documentación',
                        bugBounty: 'Programa de Recompensas',
                        github: 'GitHub',
                    },
                },
                legal: {
                    title: 'Legal',
                    items: {
                        terms: 'Términos',
                        privacy: 'Privacidad',
                    },
                },
            },
            copyright: {
                primary: `© ${new Date().getFullYear()} Tonkeeper. Todos los derechos reservados.`,
                secondary: 'Todas las marcas comerciales son propiedad de sus respectivos dueños.',
            },
        },
    }
};

export {
    dict
};
