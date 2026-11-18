let initialString = `https://api.github.com/users/`
// const username = document.querySelector('username')
const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click',function(e){
    e.preventDefault()
    const username = document.querySelector('#username')
    const finalLink = initialString+(username.value.trim())
    console.log(finalLink);
    username.value=''
    toFetchData(finalLink)
})
function toFetchData(finalLink){
    
    fetch(finalLink).then(function(response){
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`)
        }
        return response.json()
    }).then(function(data){
        console.log(data);
        display(data)
    }).catch(function(error){
        console.log("Some Error Occured");
    })
}
function display(data){
    const mode = document.querySelector('.result-status')
    mode.innerHTML = `You Searched for`
    const profileName = document.querySelector('#profileName')
    profileName.innerHTML = data.name
    const profileUsername = document.querySelector('#profileUsername')
    profileUsername.innerHTML = data.login
    const profileBio = document.querySelector('#profileBio')
    profileBio.innerHTML = data.bio
    const profileAvatar = document.querySelector('.avatar-placeholder')
    const avatarImage =`https://avatars.githubusercontent.com/u/336616438?v=4`;
    profileAvatar.innerHTML=`<img src=${avatarImage} alt = "myAvatar">`
}