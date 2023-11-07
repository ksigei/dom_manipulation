const click_btn = document.getElementById('click_me')
const fav_team = document.getElementsByClassName('fav_team')[0]
const team_container = document.getElementById('team_container')
const team_list = document.getElementById('team_list')

// top 4 teams

// function click_me(){
//     // events 
//     click_btn.addEventListener('click', function(){
//         // alert('My fav team is ManCity')
//         fav_team.innerHTML = 'My fav team is ManCity'
//     })
// } 
// // invoke
// click_me()

// // events 
// // click, on mouse hover, on blur, on scroll, 

const teams = ['ManCity', 'ManU', 'Chelsea', 'Liverpool', 'Arsenal', 'Tottenham', 'Leicester', 'Westham', 'Everton', 'Aston Villa', 'Leeds', 'Wolves', 'Newcastle', 'Crystal Palace', 'Southampton', 'Brighton', 'Burnley', 'Fulham', 'West Brom', 'Sheffield United']

function display_teams(){
    for(let i=0; i<teams.length; i++){ //after an iteration, i is incremented by 1
        const team = teams[i] // use indexing to get the team, at each iteration and store in a variable
        const team_item = `<li>${team}</li>`
        team_list.innerHTML += team_item
    }
}

display_teams()