fetch('./data.json')

// fetch('https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/member?id=cldepc8ku3x1b0av0dgvl1pmw')
    .then(response => response.json())
    .then(data => {

        const fullname = []
        // fullname.push`${data.member.name}${data.member.prefix}`
        fullname.push(data.member.name + " " + data.member.prefix + " " + data.member.surname)
        document.querySelector("#name").innerHTML = fullname

        const nickname = []
        nickname.push(data.member.nickname)
        document.querySelector("#nickname").innerHTML = nickname

        const avatar = []
        avatar.push(data.member.avatar)
        const avatarid = document.querySelector("#avatar")
        avatarid.src = avatar

        const bio = []
        bio.push(data.member.bio)
        document.querySelector("#bio").innerHTML = bio

        const githubid = document.querySelector("#github")
        githubid.href = data.member.gitHubHandle

        const websiteid = document.querySelector("#website")
        websiteid.href = data.member.website
    })

const card = document.querySelector(".content")
const card2 = document.querySelector("#card")

// card.addEventListener('click', () => {
//     card2.classList.toggle('flip')
//   })