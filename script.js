let content = document.querySelector('#content')

let container = document.createElement('div')
container.classList.add('container')
content.append(container)

let contentWrapper = document.createElement('div')
contentWrapper.classList.add('content-wrapper')
container.append(contentWrapper)

let shopsWrapper = document.createElement('div')
shopsWrapper.classList.add('shops-wrapper')
contentWrapper.append(shopsWrapper)

let sectionTitle = document.createElement('h2')
sectionTitle.classList.add('section-title')
shopsWrapper.append(sectionTitle)

let paragraph = document.querySelector('h2')
paragraph.textContent = 'Find us'

let shopsList = document.createElement('div')
shopsList.classList.add('shops-list')
shopsWrapper.append(shopsList)

let shopItem = document.createElement('div')
shopItem.classList.add('shop-item')
shopsList.append(shopItem)

let shopTitle = document.createElement('h3')
shopTitle.classList.add('shop-title')
shopItem.append(shopTitle)

// let paragraph = document.querySelector('h3')
// paragraph.textContent = 'Parduotuve 1'

let shopContactsList = document.createElement('ul')
shopContactsList.classList.add('shop-contacts-list')
shopItem.append(shopContactsList)

let shopContactsItem = document.createElement('li')
shopContactsItem.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem)