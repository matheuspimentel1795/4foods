import React from 'react'
import { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Container, ContainerList } from './style'
import { OutlinedInput, Typography } from '@material-ui/core'
// import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Header from '../../components/Header/Header'
// import IconButton from '@material-ui/core/IconButton';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from "@material-ui/icons/Search";



const FeedSearch = () => {
    useProtectedPage()

    const [isLoading, setIsLoading] = useState(false)

    const { input, onChangeInput } = useForm({
        search: ""
    })

    const loadList = useRequestData({}, '/restaurants', setIsLoading)

    // const history = useHistory()

    const searchResult = input.search && loadList.restaurants?.filter((item) => {
        return item.name.toLowerCase().includes(input.search.toLowerCase())

    })

    const renderResult = input.search && searchResult.length > 0 ? searchResult?.map((item) => {
        return <RestaurantCard item={item} />

    }) : input.search && !searchResult.length && <p>Não encontramos :(</p>


    return (
        <div>
            <Header/>
            <Container>
                {/* <ContainerTop>
                    <IconButton>
                        <ArrowBackIosIcon
                        onClick={() => history.goBack()}
                        style={{ color: '#000000'}}/>
                    </IconButton>
                    <Typography>Busca</Typography>
                </ContainerTop> */}
                <OutlinedInput
                    className={"search-box"}
                    type="text"
                    onChange={onChangeInput}
                    value={input.search}
                    name={"search"}
                    inputProps={{ 'aria-label': 'search' }}
                    placeholder={"  Restaurante"}   
                    startAdornment={<SearchIcon 
                        style={{ color: '#808080', marginRight:'5%'}}
                        />}
                />
                <ContainerList>
                    {isLoading ? <Loading /> : renderResult ? renderResult : <Typography>busque por nome de restaurante</Typography>}
                </ContainerList>
            </Container>
        </div>
    )
}
export default FeedSearch