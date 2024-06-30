const dict = {
    locales: {
        en: 'Inggris',
        fa: 'Persia',
        ar: 'Arab',
        ru: 'Rusia',
        es: 'Spanyol',
        id: 'Indonesia',
        hi: 'Hindi',
        zhHans: 'Cina',
    },
    home: {
        title: 'Baterai Tonkeeper',
        description: 'Baterai Tonkeeper adalah fitur yang membayar biaya transaksi ketika saldo TON sebuah akun adalah nol. Baterai ini mencakup pembayaran, staking, swap, dan lebih banyak lagi dengan token dan NFT apa pun.',
        header: {
            menu: {
                home: 'Beranda',
                faq: 'FAQ',
                support: 'Dukungan',
                github: 'GitHub',
            },
            language: 'Bahasa',
            hero: {
                title: 'Baterai Tonkeeper',
                typewriter: [
                    'Pembayaran & Swap Terintegrasi',
                    'Transfer NFT',
                    'Pendanaan dengan Kripto',
                    'Pendanaan dengan Pembelian Dalam Aplikasi',
                ],
                description: 'Baterai Tonkeeper menghilangkan hambatan bagi pendatang baru: Anda dapat memperoleh stablecoin atau NFT dan menggunakannya segera tanpa memperoleh koin asli untuk membayar biaya gas. Anda tidak perlu pergi ke bursa, melewati pemeriksaan KYC, memasukkan banyak detail hanya untuk membeli jumlah koin acak yang tidak Anda pikirkan.',
            },
        },
        integratedTransfers: {
            title: 'Transfer & Swap Terintegrasi',
            description: 'Dengan Baterai Tonkeeper Anda tidak perlu khawatir tentang biaya gas lagi. Isi ulang baterai Anda dengan kartu bank atau stablecoin, dan gunakan semua fitur dompet Anda segera.',
            items: {
                TON: {
                    title: 'TON',
                    subtitle: 'Swap TON ke token lain dengan mudah',
                },
                NOT: {
                    title: 'NOT',
                    subtitle: 'Transfer NOT tanpa perlu TON',
                },
                USDT: {
                    title: 'USDT',
                    subtitle: 'Transfer USDT tanpa perlu TON',
                },
                NFT: {
                    title: 'NFT',
                    subtitle: 'Perdagangkan NFT tanpa perlu TON',
                },
            }
        },
        comparison: {
            title: 'Pembayaran Tanpa Gas & 🔥 W5',
            description: 'Dengan Pembayaran Tanpa Gas, Anda tidak perlu mengisi ulang Baterai, biaya transaksi dibayar langsung dari saldo USDT.',
            items: {
                battery: {
                    title: 'Baterai',
                    description: 'Baterai Tonkeeper adalah fitur yang membayar biaya transaksi ketika saldo TON sebuah akun adalah nol. Baterai ini mencakup pembayaran, staking, swap, dan lebih banyak lagi dengan token dan NFT apa pun.',
                    pros: [
                        'Bekerja dengan banyak jenis aset yang berbeda',
                        'Bekerja pada dompet W4 dan W5',
                    ],
                },
                w5: {
                    title: 'Dompet W5',
                    description: 'W5 adalah standar dompet terbuka yang dikembangkan oleh tim Tonkeeper. Di W5 pengguna tidak perlu mengisi ulang Baterai, biaya transaksi dibayar langsung dari saldo USDT.',
                    pros: [
                        '2x lebih cepat dan 1.5x lebih murah daripada dompet lainnya',
                    ],
                    cons: [
                        'Terbatas hanya pada USDT dan NOT',
                        'Memerlukan dompet W5',
                    ],
                },
            },
        },
        recharge: {
            title: 'Isi Ulang dengan Mudah',
            description: 'Anda dapat mengisi ulang baterai dengan satu ketukan menggunakan pembelian dalam aplikasi, atau dengan TON atau stablecoin. Kirim beberapa dolar stablecoin atau TON ke alamat khusus: battery.ton dan itu akan secara otomatis menerapkan pengisian ke akun Anda.',
            items: {
                crypto: {
                    title: 'Kripto',
                    description: 'Anda dapat mengisi ulang baterai dengan TON atau stablecoin seperti USDT',
                },
                inAppPurchase: {
                    title: 'Pembelian Dalam Aplikasi',
                    description: 'Anda dapat mengisi ulang baterai melalui Pembelian Dalam Aplikasi',
                },
                wallet: {
                    title: 'Dompet',
                    description: 'Anda dapat mengisi ulang baterai dengan mendepositkan ke battery.ton',
                },
            }
        },
        plans: {
            title: 'Rencana & Harga',
            description: 'Baterai Tonkeeper dihitung dalam pengisian, setiap pengisian mencakup biaya transaksi transfer TON sederhana. Transaksi yang lebih kompleks dapat mengonsumsi 5, 10, atau lebih pengisian.',
            charges: (amount: number) => `${amount.toString()} pengisian`,
            items: {
                small: {
                    title: 'Kecil',
                },
                medium: {
                    title: 'Sedang',
                },
                large: {
                    title: 'Besar',
                },
            }
        },
        security: {
            title: 'Dapat Diakses dan Dilindungi',
            description: 'Baterai Tonkeeper adalah cara yang dapat diakses dan aman untuk membayar biaya transaksi di Blockchain TON, dengan fokus pada Pengalaman Pengguna dan kemudahan akses.',
            items: {
                accessible: {
                    title: 'Aksesibilitas',
                    description: 'Baterai Tonkeeper menyediakan solusi opsional dan alternatif untuk persyaratan TON untuk transaksi di Blockchain TON dengan memberi Anda banyak pilihan untuk membayar biaya transaksi Anda.',
                },
                security: {
                    title: 'Keamanan',
                    description: 'Baterai Tonkeeper memastikan privasi dan keamanan Anda, dengan pengisian Anda tetap aman melalui enkripsi tingkat tinggi, memberi Anda ketenangan pikiran saat menggunakan semua fitur dompet Anda.',
                },
            }
        },
        FAQ: {
            title: 'Pertanyaan yang Sering Diajukan',
            items: [
                {
                    title: 'Apakah biaya gas telah dihapus dari Tonkeeper?',
                    description: 'Tidak. Jaringan TON mengenakan biaya untuk setiap transaksi, dibayar dalam Toncoins. Baterai dan Gasless adalah fitur opsional yang menyederhanakan pembayaran biaya yang sama tanpa menggunakan Toncoins.',
                },
                {
                    title: 'Bagaimana cara kerja Baterai Tonkeeper?',
                    description: 'Baterai Tonkeeper dihitung dalam pengisian, setiap pengisian mencakup biaya transaksi transfer TON sederhana. Transaksi yang lebih kompleks dapat mengonsumsi 5, 10, atau lebih pengisian. Anda dapat mengisi ulang baterai dengan satu ketukan menggunakan pembelian dalam aplikasi, dengan TON, stablecoin, dan Notcoin sekarang juga. Cukup buka aplikasi Tonkeeper, pergi ke Pengaturan, dan isi ulang Baterai Anda menggunakan TON, USDT, atau NOT.',
                },
                {
                    title: 'Bagaimana saya bisa menggunakan Baterai di Tonkeeper saya?',
                    description: 'Perbarui Tonkeeper di iOS dan Android ke versi 4.3, lalu isi ulang baterai di Pengaturan → Baterai. Setelah diisi, status baterai akan muncul di layar utama.',
                },
                {
                    title: 'Bagaimana saya bisa menggunakan dompet W5 di Tonkeeper saya?',
                    description: 'Perbarui Tonkeeper di iOS dan Android ke versi 4.6.1, lalu ketuk "USDT" dan pilih "Coba Dompet W5". Tambahkan dompet "W5" bersama dengan dompet saat ini dan kirim beberapa USDT ke dalamnya, sekarang Anda dapat membayar dengan USDT dan Notcoin tanpa TON!',
                },
                {
                    title: 'Bagaimana saya bisa menggunakan USDT untuk mengisi ulang baterai?',
                    description: 'Setelah Anda menerima USDT, Anda dapat mengirim beberapa dolar ke battery.ton dan mengisi ulang Baterai Anda dalam beberapa detik. Setelah itu Anda dapat membayar dengan USDT dan tidak perlu khawatir tentang biaya - Baterai akan mengurusnya! Ini adalah keajaiban nyata: bahkan biaya untuk transaksi pertama ke battery.ton akan dibayar oleh Baterai (* untuk pembayaran lebih dari 10 usdt).',
                },
                {
                    title: 'Bagaimana saya bisa menggunakan NOT untuk mengisi ulang baterai?',
                    description: 'Buka aplikasi Tonkeeper, pilih Pengaturan dan isi ulang Baterai Anda. Untuk mengisi ulang Baterai Anda perlu mengirim setidaknya 300 Notcoins. Anda dapat mengisi ulang lebih banyak dan menukar NOT dengan TON atau USDT tanpa membeli TON di bursa.',
                },
            ],
            platform: {
                title: 'Platform FAQ Tonkeeper',
                description: "Tidak menemukan jawaban Anda? Kunjungi Pusat Bantuan kami.",
            }
        },
        footer: {
            menu: {
                company: {
                    title: 'Perusahaan',
                    items: {
                        news: 'Berita',
                        chat: 'Obrolan',
                        twitter: 'Twitter',
                    },
                },
                resources: {
                    title: 'Sumber Daya',
                    items: {
                        faq: 'FAQ',
                        support: 'Dukungan',
                        suggest: 'Sarankan Fitur',
                    },
                },
                developers: {
                    title: 'Pengembang',
                    items: {
                        documentation: 'Dokumentasi',
                        bugBounty: 'Program Bug Bounty',
                        github: 'GitHub',
                    },
                },
                legal: {
                    title: 'Legal',
                    items: {
                        terms: 'Ketentuan',
                        privacy: 'Privasi',
                    },
                },
            },
            copyright: {
                primary: `© ${new Date().getFullYear()} Tonkeeper. Semua hak dilindungi.`,
                secondary: 'Semua merek dagang adalah milik dari pemiliknya masing-masing.',
            },
        },
    }
};

export {
    dict
};
