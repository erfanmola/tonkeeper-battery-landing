import './Home.scss';

import LottieAnimation from '../components/LottieAnimation';

const Home = () => (
    <>
        <div id="top-fade"></div>
        <LottieAnimation lottie='/ruby-badge.tgs' width={512} height={512} speed={0.25} />
        <div>
            Hello World!
        </div>
    </>
);

export default Home;