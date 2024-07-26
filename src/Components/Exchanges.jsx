import React, { useEffect, useState } from 'react'
import axios from "axios";
import {server} from "../index";
import { Container, HStack, Heading, VStack,Text,Image} from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';

const Exchanges = () => {



    const [exchanges ,setexchanges] = useState([]);//ak empty array initailly to
    const [loading ,setloading] = useState(true);
    const [error,seterror] = useState(false);

    useEffect(()=>{

        const fetchExchanges = async() => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setexchanges(data);
                setloading(false);//jesse hi fetching done to isse false;
            } catch (error) {
                setloading(false);
                seterror(true);
                console.error('Error fetching exchanges:', error);
            }
        };
        fetchExchanges();

    },[])

    if(error) return <Error></Error>

  return (
    <Container maxWidth={"container.xl"}>
         {loading? <Loader /> : (
            <>
                 <HStack wrap={"wrap"} justifyContent={"space-evenly"}>


                    {
                        exchanges.map((i) => (
                            <ExchangeCard key={i.id} name={i.name} image={i.image} rank={i.trust_score_rank} url={i.url} />
                        ))
                    }
                 </HStack>
            
            </>
         )}
    </Container>
  )
}

export default Exchanges


const ExchangeCard = ({name , image ,rank , url}) => (
    <a href={url} target={"blank"}>
      <VStack w={52} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.4s"} m={"4"} css={{
        "&:hover":{
            transform:"scale(1.1)"
        }
      }}>
        <Image src= {image} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"}/>
        <Heading size={"md"} noOfLines={1} >{rank}</Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>

    </a>
)