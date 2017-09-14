import React from 'react'
import { Flex, Provider, Box } from 'rebass'

const GetTicketTabs = ({ activeNumber, headTabs, contents, onClick }) => {
  const ActiveContent = contents[activeNumber]
  console.log('hello 11')
  return (
    <Provider>
      <Flex>
        {headTabs.map((tab, key) => {
          const active = key === activeNumber
          return (
            <Box w={1 / 2} px={2}>
              <div
                className="hot-spot-banner"
                style={{
                  color: active ? '#555' : '#fff',
                  background: active ? '#ebebeb' : '#707070',
                }}
                onClick={() => onClick(key)}
              >
                {tab}
              </div>
            </Box>
          )
        })}
      </Flex>
      {contents.length > 0 && <ActiveContent />}

      <style jsx>
        {`
          .hot-spot-banner {
            padding: 80px 0;
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
          }
        `}
      </style>
    </Provider>
  )
}

export default GetTicketTabs
