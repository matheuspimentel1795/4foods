export const goToLogin = (history) =>{
    history.push('/')
} 
export const goToSignUp = (history) =>{
    history.push('/cadastro')
} 
export const goToFeed = (history) =>{
    history.push('/restaurantes')
} 
export const goToRestaurantDetail = (history) =>{
    history.push('/detalhes-restaurante')
} 
export const goToProfile = (history) =>{
    history.push('/perfil')
}

export const goToEditeProfile = (history, name, email, cpf) =>{
    history.push(`/perfil/editar/${name}/${email}/${cpf}`)
} 

export const goToCarr = (history) =>{
    history.push('/carrinho')
} 

export const goToAdress = (history) =>{
    history.push('/cadastro-endereco')
} 