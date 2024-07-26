import React, { useEffect, useState } from 'react'
import axios from "axios";
import {server} from "../index";
import { Container, HStack, Heading, VStack,Text,Image, Button, RadioGroup, Radio} from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
import { Link } from 'react-router-dom';

const Coins = () => {


   
    const [coins,setcoins] = useState([]);//ak empty array initailly to
    const [loading ,setloading] = useState(true);
    const [error,seterror] = useState(false);
    const [page,setpage] = useState(1);
    const [currency,setcurrency] = useState("inr");
    const currencySymbol = currency ==="inr"? "₹" : currency === "eur"?"€":"$";
    const changePage = (page) => {
        setpage(page);
        setloading(true);
    }

    const btns = new Array(132).fill(1);
    useEffect(()=>{

        const fetchCoins = async() => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                setcoins(data);
                setloading(false);//jesse hi fetching done to isse false;
            } catch (error) {
                setloading(false);
                seterror(true);
                console.error('Error fetching exchanges:', error);
            }
        };
        fetchCoins();

    },[currency,page])//jesse currency and page ke value change ho dobara data fetch ho

    if(error) return <Error></Error>

  return (
    <Container maxWidth={"container.xl"}>
         {loading? <Loader /> : (
            <>
                <RadioGroup value={currency} onChange={setcurrency} p={"4"}>


                  <HStack spacing={"4"}>
                
                    <Radio value={"inr"}  >₹ INR</Radio>
                    <Radio value={"eur"}  >€ EUR</Radio>
                    <Radio value={"usd"}  >$ USD</Radio>
                  </HStack>
                </RadioGroup>

   

                 <HStack wrap={"wrap"} justifyContent={"space-evenly"}>


                    {
                        coins.map((i) => (
                            <CoindCard key={i.id} id={i.id} name={i.name} img={i.image} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol} />
                        ))
                    }
                 </HStack>
                 <HStack overflowX={"auto"}>
                        {btns.map((_, index) => (
                            <Button
                                key={index}
                                bgColor="gray"
                                color="white"
                                onClick={() => changePage(index + 1)}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </HStack>
            
            </>
         )}
    </Container>
  )
};

const CoindCard = ({id , name , img , symbol , price , currencySymbol = "₹"}) => (
    <Link to={`/coin/${id}`}>
      <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.4s"} m={"4"} css={{
        "&:hover":{
            transform:"scale(1.1)"
        }
      }}>
        <Image src= {img} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"}/>
        <Heading size={"md"} noOfLines={1} >{symbol}</Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>

    </Link>
)

export default Coins
