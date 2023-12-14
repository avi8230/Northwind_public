import Thumbnail from "../../SharedArea/Thumbnail/Thumbnail";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Recommended from "../Recommended/Recommended";
import Sales from "../Sales/Sales";
import Specials from "../Specials/Specials";
import caviarImage from "../../../Assets/Images/caviar.jpg";
import chocolateImage from "../../../Assets/Images/chocolate.jpg";
import pavlovaImage from "../../../Assets/Images/pavlova.jpg";
import Bestseller from "../Bestseller/Bestseller";
import Wishlist from "../Wishlist/Wishlist";
import Audio from "../Audio/Audio";
import Clock from "../Clock/Clock";
import Slogan from "../Slogan/Slogan";
import useTitle from "../../../Services/useTitle";
import { Suspense } from "react";

function Home(): JSX.Element {

    useTitle("Northwind | Home");

    function thumbnailClickHandler(imageTitle: string): void {
        alert(imageTitle);
    }

    return (
        <>
            <Discount />

            <Specials />

            <Desserts />

            <Sales category="beverages" percent={20} />

            <Recommended />

            <Thumbnail
                imageSource={caviarImage}
                imageTitle="Caviar"
                imageClicked={thumbnailClickHandler} />
            <Thumbnail
                imageSource={chocolateImage}
                imageTitle="Chocolate"
                imageClicked={thumbnailClickHandler} />
            <Thumbnail
                imageSource={pavlovaImage}
                imageTitle="Pavlova" />

            <Bestseller />

            <Wishlist />

            <Audio />

            {/* https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi */}
            <Suspense fallback="Clock Suspended">
                <Clock />
            </Suspense>

            {/* <Slogan children="We have Amazing Products!" />
            <Slogan children={<span>We have <strong>Amazing</strong> Products!</span>} /> */}
            <Slogan>
                <span><strong>Amazing</strong> Products! </span>
                <span><strong>Exotic</strong> Products! </span>
                <span><strong>High Quality</strong> Products! </span>
            </Slogan>
        </>
    );
}

export default Home;
