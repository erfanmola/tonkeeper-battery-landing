import Pako from 'pako';
import fs from 'fs';

const convertLottiesToTGS = () => {
    console.log('Converting Lotties');

    const inputPath = __dirname + '/../src/lotties';
    const outputPath = __dirname + '/../public/assets/tgs';

    const lottieFiles = fs.readdirSync(inputPath);

    lottieFiles.forEach((lottieFile) => {
        const lottie = fs.readFileSync(`${inputPath}/${lottieFile}`).buffer;
        const tgs = Pako.deflate(lottie);
        fs.writeFileSync(`${outputPath}/${lottieFile.replace('.json', '.tgs')}`, tgs);
        console.log(`Written ${outputPath}/${lottieFile.replace('.json', '.tgs')}`);
    });
}

export default convertLottiesToTGS;