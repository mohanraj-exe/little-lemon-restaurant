import '../styles/Highlights.css';
import {
    Card,
    Image,
    Heading,
    Text,
    CardBody,
    HStack,
    Box
} from '@chakra-ui/react';

const highlights = [
    {
        id: 1,
        title: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
        price: "$12.99",
        delivery: "Order a delivery",
        img: "greek-salad.jpg"
    },
    {
        id: 2,
        title: "Bruchetta",
        description: "Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "$5.99",
        delivery: "Order a delivery",
        img: "bruchetta.svg"
    },
    {
        id: 3,
        title: "Lemon dessert",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$5.00",
        delivery: "Order a delivery",
        img: "lemon-dessert.jpg"
    },

]

function Highlights() {
    return (
        <>
            <section className='highlights-section'>
                <section className='container'>
                    <h2 className='highlights-title'>This week specials!</h2>

                    {/* For mobile-screens */}
                    {highlights.map(dish => (
                        <article key={dish.id} className='dish-info'>
                            <aside>
                                <h4 className='dish-title'>{dish.title}</h4>
                                <p className='dish-description'>{dish.description}</p>
                                <p className='dish-price'>{dish.price}</p>
                                <p className='dish-delivery'>{dish.delivery}</p>
                            </aside>
                            <img src={dish.img} alt="restaurant-food-serving" />
                        </article>
                    ))}

                    {/* For larger-screens */}
                    <section className='highlights-col-3'>

                        {highlights.map(dish => (
                            <Card key={dish.id} maxW='xs' className='dish-info-lg'>
                                <Image
                                    src={dish.img}
                                    alt="restaurant-food-serving"
                                    borderRadius='lg'
                                />
                                <CardBody display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                                    <Box>
                                        <HStack justifyContent={'space-between'}>
                                            <Heading size='md' className='dish-title'>{dish.title}</Heading>
                                            <Text fontSize='2xl' className='dish-price'>
                                                {dish.price}
                                            </Text>
                                        </HStack>
                                        <Text className='dish-description-lg' margin={'1em 0'}>
                                            {dish.description}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text className='dish-delivery-lg'>
                                            {dish.delivery}
                                        </Text>
                                    </Box>
                                </CardBody>
                            </Card>
                        ))}

                    </section>
                </section>
            </section>
        </>
    )
}

export default Highlights