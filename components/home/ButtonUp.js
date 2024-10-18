/** @format */
import AnchorLink from "react-anchor-link-smooth-scroll";

const ButtonUp = ({ buttonUpCt, forErrorUp }) => {
    return (
        <AnchorLink
            offset={buttonUpCt ? 100 : 4}
            href={`${
                buttonUpCt
                    ? "#products-page"
                    : forErrorUp
                    ? "#forErrorUp"
                    : "#button-up"
            }`}
            className="button-up"
        >
            <span className="ic ic__arrow-top"></span>
        </AnchorLink>
    );
};

export default ButtonUp;
