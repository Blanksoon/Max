import {Media,
  Subhead,
  Image,
  Link,
  Flex,
  Box,
  Text
} from 'rebass'

const VideoCenter = () => (
  <div className="VideoCenter">
      <Box width={1} bg='pink'>
        <div className="BackVideo">
          {"<"} Back to Video Center
        </div>
      </Box>
      <style jsx>
          {`
            .BackVideo {
              padding-top: 6px;
              padding-bottom: 6px;
            }
          `}
      </style>
  </div>
)
export {
  VideoCenter
}