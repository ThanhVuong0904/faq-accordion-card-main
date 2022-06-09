import images from './assets/images';
import FAQ from './components/FAQ';
function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="images-wrapper">
                    <div className="images-hidden">
                        {/* Desktop */}
                        <img className="image-women" src={images.womanDesktop} alt="Woman Desktop" />
                        <img className="image-pattern" src={images.bgPatternDesktop} alt="Pattern Desktop" />
                    </div>
                    {/* Mobile  */}
                    <img className="image-women-mobile" src={images.womanMobile} alt="Woman Desktop" />
                    <img className="image-pattern-mobile" src={images.bgPatternMobile} alt="Pattern Desktop" />
                    <img className="image-box" src={images.box} alt="Box" />
                </div>
                <div className="content">
                    <FAQ />
                </div>
            </div>
            <div class="attribution">
                Challenge by{' '}
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
                    Frontend Mentor
                </a>
                . Coded by <a href="https://www.facebook.com/thanhvgg/">Thanh Vuong</a>.
            </div>
        </div>
    );
}

export default App;
