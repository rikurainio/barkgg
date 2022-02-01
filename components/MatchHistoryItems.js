import {Box, Image } from '@chakra-ui/react'

// HELPER COMPONENT FOR RENDERING BUILT ITEMS
const MatchHistoryItems = (props) => {
    return (
        <Box
            justifyContent={"center"}
            display={"flex"}
            className='matchhistoryitems'>
                <Box width={15} height={15}>
                    <Image src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Dorans_Ring_item.png/revision/latest?cb=20201113232637&path-prefix=de"></Image>
                </Box>
                <Box width={15} height={15}>
                    <Image src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Dorans_Ring_item.png/revision/latest?cb=20201113232637&path-prefix=de"></Image>
                </Box>
                <Box width={15} height={15}>
                    <Image src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Dorans_Ring_item.png/revision/latest?cb=20201113232637&path-prefix=de"></Image>
                </Box>
                <Box width={15} height={15}>
                    <Image src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Dorans_Ring_item.png/revision/latest?cb=20201113232637&path-prefix=de"></Image>
                </Box>
                <Box width={15} height={15}>
                    <Image src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Dorans_Ring_item.png/revision/latest?cb=20201113232637&path-prefix=de"></Image>
                </Box>
                <Box width={15} height={15}>
                    <Image src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Dorans_Ring_item.png/revision/latest?cb=20201113232637&path-prefix=de"></Image>
                </Box>
        </Box>
    )
}

export default MatchHistoryItems