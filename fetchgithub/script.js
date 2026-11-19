const initialString = `https://api.github.com/users/`
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
    profileAvatar.innerHTML=`<img src="${data.avatar_url}" alt = "myAvatar">`
    const repoPublic = document.querySelector('#repoCount')
    repoPublic.innerHTML= data.public_repos
    const followers = document.querySelector('#followersCount')
    followers.innerHTML= data.followers
    const following = document.querySelector('#followingCount')
    following.innerHTML= data.following
}
function suggestionSearch(){
const suggestions= document.querySelector('.suggestions')
suggestions.addEventListener('click',function(e){
    if(e.target.tagName === 'SPAN'){
        console.log(e.target.textContent);
    }
    // let username = document.querySelector('#username')
    let finalLink = initialString+(e.target.textContent.trim())
    // username = e.target.textContent
    // finalLink = initialString+username
    // username.value=''
    toFetchData(finalLink)

})
}
suggestionSearch()