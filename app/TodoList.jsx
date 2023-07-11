import { useState, useEffect } from "react";
import { Center, Box, VStack, Checkbox, HStack, Text } from "native-base";
import TodoHeader from "./TodoHeader";

export default function TodoList({user}) {

    const [todoItems, setTodoItems] = useState()
    useEffect(()=> {
        if(user){
            fetch(`https://chekov-api-me.web.app/tasks/${user.uid}`)
            .then(res => res.json())
            .then(setTodoItems)
            .catch(alert)
        }
    }, [user]);
    
    const handleItemUpdate= (id, done) => {
        const itemUpdate = {id, done: !done}

        fetch(`https://chekov-api-me.web.app/tasks/${user.uid}` , {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(itemUpdate)

        })
        .then(res => res.json())
        .then(data => {
            setTodoItems(data)
        })
        .catch(alert)
    }
  return (
 <Center w="100%">
    <Box maxW={300} w="100%">
   <VStack space={4} mt={4}>
    <TodoHeader user={user} setTodoItems={setTodoItems}/>
    {!todoItems 
    ?<Text fontSize="xl" color="coolGray.300" textAlign='center'> Loading...</Text>
    : todoItems.map(item => (
        <HStack key={item.id} w="100%" justifyContent="space-between" alignItems="center">
            <Checkbox 
            aria-label={item.title}
            isChecked={item.done} 
            onChange={ () => handleItemUpdate(item.id, item.done)}/>
            <Text fontSize={18}
            onPress={ () => handleItemUpdate(item.id, item.done)}
             mx={2}
             strikeThrough={item.done}
             color={item.done ? 'coolGray.500' : 'coolGray.100'}
             textAlign='left'
             width='100%'

             >{item.title}</Text>
        </HStack>
    ) )
    }
   </VStack>
      </Box>
  </Center>
  );
}
