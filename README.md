# Tonkeeper Battery Landing

This project is built for the [Tonkeeper Website Builder Contest](https://t.me/tonkeeper_news/135). You can view the live version of the project at [tonkeeper-battery-landing.pages.dev](https://tonkeeper-battery-landing.pages.dev/).

## Key Principles
- Adhering the current Tonkeeper design system to be a drop-in deployment
- Small bundle size (~200KB GZipped bundle size)
- Efficent Caching of static files by using Service Worker
- Multilanguage Support (and yes, all strings are in that 200KB bundle)
- Performance (I have developed on Mac and tested on iPhone and was ok ^.^, but seriously, I have tested on low-end phones and tried lots of optimization methods)
- Completely Vector ([I hate rasters](https://tonkeeper.com/images/img-1.png), even if they are HD)

## Resources

### SVGs
I have used SolidIcons for SVG's and they are open-source bundles from various icon packs. Ow and I have used your own SVG's too, stolen from you, for you.

### Fonts
I have used Inter font for LTR languages and Vazir font for RTL languages, both are loaded via `@import` in SCSS file from Google Font CDN.

### Animations (Lotties)
I have made the two main lotties and borrowed the NOT, NFT, USDT, TON lotties from a public and free Telegram sticker pack, I suppose the owner of the pack doesn't mind if they are used in website, but anyway, they could have been done by myself too, just there was no reason to.

***Ow I forgot to mention that I have used 🔋 and 🔥 emojis, lets reference them ASAP, thanks to Emoji Inventor!***

I have written the English and Persian version of the translations myself, and used GPT-4 for the rest of the translations, so they might be inaccurate.

## Technical Stuffs

SolidJS is used as the base framework of the project, aiming the performance and smallest bundle size possible.

Initially I aimed for RLottie WASM (you can find in the first commits), But the bundle size was higher and not good at all, that's why I have switched to `lottie-light` and the SVG renderer is promising.

I also have used `pako` for inflating the GZipped lotties, or in other words: TGS.

We have a script in `scripts/prebuild.ts` that gzippes all the `.json` lotties into `.tgs`, ensuring their bundled size would be ok.

***Yes, I know web servers can gzip jsons the same way, but you wouldn't believe me when I say bundle size is 200KB***

## Usage

```bash
$ bun install
```

## Available Scripts

In the project directory, you can run:

### `bun run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `bun run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!