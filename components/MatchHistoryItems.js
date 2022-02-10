import {Box, HStack, VStack, Image } from '@chakra-ui/react'

// HELPER COMPONENT FOR RENDERING BUILT ITEMS
const MatchHistoryItems = ({itemsBuilt}) => {

    //SERVE ITEM IMG FROM CDN BY ITEM ID
    /*
    const CDN1231_IMG_BY_ITEM_ID
        = "https://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/1001" + itemId + ".png"
    */

    // HAS 7 ITEMS BUILD FROM 0 to IDX 6????????????????????????? trinket?
    const IMG_SOURCES = [""]
    //console.log("ib" , itemsBuilt)

    if(itemsBuilt){
        for(let i=0; i < Object.keys(itemsBuilt).length; i++){
            if(itemsBuilt['item' + i] == 0){
                IMG_SOURCES.push("")
            }
            else{
                IMG_SOURCES.push("https://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/" + itemsBuilt['item' + i] + ".png")
            }
        }
    }

    //console.log("CDN addresses for built items: ", IMG_SOURCES)

    return (
        <Box
            mr={"10px"}
            paddingRight={"8px"}
            paddingTop={"17px"}
            width={["400px", "500px", "600px"]}
            className='matchhistoryitems'>

                <VStack>
                    <HStack spacing="0.5">
                        {
                            (IMG_SOURCES.slice(1, (IMG_SOURCES.length / 2))).map((source, idx) => {
                                return(
                                    <Image
                                        key={"item-img-" + idx}
                                        className="itemimg"
                                        src={source}
                                        fallbackSrc={"/itemFallBackImg1.png"}
                                        boxSize={8}>
                                    </Image>
                                )
                            })
                        }
                    </HStack>
                    <HStack spacing="0.5">
                    {
                            (IMG_SOURCES.slice(IMG_SOURCES.length / 2, -1)).map((source, idx) => {
                                return(
                                    <Image
                                        key={"item-img-2" + idx}
                                        className="itemimg"
                                        src={source}
                                        fallbackSrc={"/itemFallBackImg1.png"}
                                        boxSize={8}>
                                    </Image>
                                )
                            })
                        }
                    </HStack>
                </VStack>
        </Box>
    )
}

export default MatchHistoryItems