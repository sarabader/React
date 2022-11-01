import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import pic from '../image/pic.webp';

  
//   const IMAGE =
//     'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

  export default function Store(props) {
   
    let avilable ;
     let color;
    if(props.aval>4){
      avilable ="Available";
      color="#43a047";
      

    }
    else{
      avilable="Not Available";
color="#d50000";
    }
    return (
 
      <Center py={12}>
        <Box 
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
            //   backgroundImage: `url(${imgt})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
          
             img src={props.coruseimg}  
             
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
             
             />

          </Box>
          <Stack pt={10} align={'center'}>
           
          
            <Heading fontSize={'18px'} fontFamily={'body'} fontWeight={500}>
             {props.name}
            </Heading>

            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {props.date}
            </Text>
           
            <Stack direction={'row'} align={'center'}>
              {/* <Text fontWeight={800} fontSize={'xl'}>
              {props.state}

              </Text> */}
              <text 
              fontSize={'sm'}
              fontWeight={'500'}
              align={'center'}
          
              p={2}
              px={3}
              color={'black'}
              rounded={'full'}


              >
              {avilable}
              </text>
           
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  
  }