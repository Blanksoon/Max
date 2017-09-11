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
  BackgroundImage,
  Button,
  Input,
} from 'rebass'

const MaxNewsSeach = () => (
  <div className="maxnews">
    <div className="newseach">
      <Flex>
        <Box w={8 / 12}>
          <h3>Max News</h3>
        </Box>
        <Box w={4 / 12} pt="15px">
          <Input defaultValue="" placeholder="Seach" />
        </Box>
      </Flex>
    </div>
    <div className="video">
      <Flex pt="2%">
        <Box w={7 / 12} bg="gray" pt="13.3%" pl="1.5%">
          <h3>
            Headline consectetur adipicing<br />elit, sed do eiusmod tempor
          </h3>
          <h>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud<br />
            exercitation ullamco laboris nisi ut aliquip ex
          </h>
          <Flex pt="1.5%" mb="3%">
            <Box w={9 / 12} pt="6px">
              <Text bold children="Aug 11, 2017" fontSize="0.9em" />
            </Box>
            <Box w={3 / 12}>
              <Button style={{ width: '70%' }}>
                <Text bold children="Read more" fontSize="1.1em" />
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box w={5 / 12}>
          <Flex pl="5%">
            <Box w={4.5 / 12}>
              <Image width="100%" pt={0} src="static/maxPromo.jpg" />
            </Box>
            <Box w={7 / 12} pl="20px" pb="2%" pt="3%" bg="#ebebeb">
              <Text
                bold
                children="Headline Headline consect"
                fontSize="0.9em"
              />
              <Text bold children="adipicing elit sedid" fontSize="0.9em" />
              <br />
              <Text children="Aug 11, 2017" fontSize="0.9em" />
            </Box>
          </Flex>
          <Flex pl="5%" pt="3.7%">
            <Box w={4.5 / 12}>
              <Image width="100%" pt={0} src="static/maxPromo.jpg" />
            </Box>
            <Box w={7 / 12} pl="20px" pb="2%" pt="3%" bg="#ebebeb">
              <Text
                bold
                children="Headline Headline consect"
                fontSize="0.9em"
              />
              <Text bold children="adipicing elit sedid" fontSize="0.9em" />
              <br />
              <Text children="Aug 11, 2017" fontSize="0.9em" />
            </Box>
          </Flex>
          <Flex pl="5%" pt="3.7%">
            <Box w={4.5 / 12}>
              <Image width="100%" pt={0} src="static/maxPromo.jpg" />
            </Box>
            <Box w={7 / 12} pl="20px" pb="2%" pt="3%" bg="#ebebeb">
              <Text
                bold
                children="Headline Headline consect"
                fontSize="0.9em"
              />
              <Text bold children="adipicing elit sedid" fontSize="0.9em" />
              <br />
              <Text children="Aug 11, 2017" fontSize="0.9em" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
    <br />
    <div class="thumbnail-button">
      <Flex>
        <Box w={3 / 12} bg="#b7b7b7">
          <Box w={12 / 12}>
            <Box>
              <Image width="100%" pt={0} src="static/maxPromo.jpg" />
            </Box>
            <Box>
              <Text
                bold
                children="The Battle Muay-Thai(4/4)"
                fontSize="0.9em"
              />
              <br />
              <Text children="On air - Aug 11, 2017" fontSize="0.9em" />
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
    <style jsx>
      {`
        .maxnews {
          background-color: #ffffff;
        }
      `}
    </style>
  </div>
)

export default MaxNewsSeach
