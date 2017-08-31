import {
  Provider,
  Toolbar,
  Flex,
  Box,
  Text,
  Image,
  Tabs,
  TabItem,
  Border,
  NavLink,
  BackgroundImage
} from 'rebass'

const HeroSection = (props) => (
  <div className="HeroSection">
    <Box w={1}>
    {/* <div className="heroSection">
    </div> */}
    <BackgroundImage
      ratio={1/3}
      src='../../static/heroSlide.png'
    />
    </Box>
    <style jsx>
          {`
            .heroSection {
              background-image: url("../../static/heroSlide.png");
              background-color: green;
            }
          `}
      </style>
  </div>
)

export {
  HeroSection
}