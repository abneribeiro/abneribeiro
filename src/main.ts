import './style.css'


function createLink(href: string, label: string): HTMLAnchorElement {
const a = document.createElement('a')
a.href = href
a.target = '_blank'
a.rel = 'noopener noreferrer'
a.textContent = label
return a
}


const app = document.querySelector<HTMLDivElement>('#app')!


app.innerHTML = ''


const container = document.createElement('div')
container.className = 'container'


const h1 = document.createElement('h1')
h1.textContent = 'abner ribeiro'
container.appendChild(h1)


const p1 = document.createElement('p')
p1.appendChild(createLink('mailto:eliasabner38@gmail.com', 'abneribeiro'))
p1.append(' | ')
p1.appendChild(createLink('https://github.com/abneribeiro', 'github'))
p1.append(' | ')
p1.appendChild(createLink('https://x.com/abneribeiro0', 'x'))
container.appendChild(p1)


const p2 = document.createElement('p')
p2.textContent = '22 y/o engineer'
container.appendChild(p2)


const expTitle = document.createElement('h2')
expTitle.textContent = 'experience'
container.appendChild(expTitle)


// const exp1 = document.createElement('p')
// exp1.innerHTML = `<a href="https://x.com/eddybuild" target="_blank" rel="noopener noreferrer">build.ai</a> (2025) - backed by abstract ventures, pear vc, hf0, zfellows, alex botez and other great partners. helped solve robotics as founding eng`
// container.appendChild(exp1)

const exp1 = document.createElement('p')
exp1.innerHTML = `working on`
container.appendChild(exp1)

// const exp2 = document.createElement('p')
// exp2.innerHTML = `<a href="https://findecs.org" target="_blank" rel="noopener noreferrer">findecs.org</a> (2023-2024) - sold an edtech startup with 178k users in 3 months. turned $180 → 5m+ views using node + puppeteer instagram web scraping.`
// container.appendChild(exp2)


// const exp3 = document.createElement('p')
// exp3.innerHTML = `<a href="https://interaction.co" target="_blank" rel="noopener noreferrer">interaction.co</a> (2025) - engineered vc backed ai-powered email client startup integrating google workspace apis. built backend services in node for async email processing.`
// container.appendChild(exp3)


const projTitle = document.createElement('h2')
projTitle.textContent = 'projects'
container.appendChild(projTitle)


const proj1 = document.createElement('p')
proj1.innerHTML = `working on`
container.appendChild(proj1)


// const proj2 = document.createElement('p')
// proj2.innerHTML = `<a href="https://hackertype.dev" target="_blank" rel="noopener noreferrer">hackertype</a> - coding typing test created as 15 y/o. 4k+ users, 30k+ submissions. react, firebase, auth, live leaderboard.`
// container.appendChild(proj2)


// const proj3 = document.createElement('p')
// proj3.textContent = 'sleepscore - swiftui mobile app with healthkit integration created as 16 y/o. realtime leaderboard for sleep habits.'
// proj3.className = 'underline'
// container.appendChild(proj3)


// const proj4 = document.createElement('p')
// proj4.textContent = 'tennisconnect - social networking for tennis meetups. react native, firestore, google maps api. created as 16 y/o.'
// proj4.className = 'underline'
// container.appendChild(proj4)


app.appendChild(container)