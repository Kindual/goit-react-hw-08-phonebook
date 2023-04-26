import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, updateFilter } from 'redux/contactSlice'
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'


export default function Filter() {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    return (
        <>
            <Stack spacing={3}>
                <label>Find contacts by name
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input variant='filled'
                            placeholder='. . .'
                            type="text"
                            value={filter}
                            onChange={e => dispatch(updateFilter(e.target.value))}
                        />
                    </InputGroup>
                </label>
            </Stack>
        </>
    )
}
