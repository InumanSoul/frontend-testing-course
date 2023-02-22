export const getProducts = async () =>{
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon')
    let data = response.json()
    return data
  } catch (error) {
    console.error(`An error ocurred: ${error}`)
  }
}

export const getProduct = async (slug) => {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
    let data = response.json()
    return data
  } catch (error) {
    console.log(`An error ocurred ${error}`)
  }
}