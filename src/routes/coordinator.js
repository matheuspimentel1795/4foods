export const goToLogin = (history) =>{
    history.push('/login')
} 
export const goToSignUp = (history) =>{
    history.push('/cadastro')
} 
export const goToFeed = (history) =>{
    history.push('/restaurantes')
} 
export const goToRestaurantDetail = (history,id) =>{
    history.push(`/detalhes-restaurante/${id}`)
} 
export const goToProfile = (history) =>{
    history.push('/perfil')
}

export const goToEditeProfile = (history) =>{
    history.push(`/perfil/editar/`)
} 

export const goToEditAdress = (history) =>{
    history.push(`/perfil/editar-endereco`)
} 

export const goToCarr = (history) =>{
    history.push('/carrinho')
} 

export const goToAdress = (history) =>{
    history.push('/cadastro-endereco')
}

export const goToFeedSearch = (history) =>{
    history.push('/restaurantes/busca')
}  