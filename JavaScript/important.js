const Name = prompt('Введи своё имя, чтобы мы могли познакомиться чуть ближе: ')

const TextName = document.querySelector('#rezultat')
TextName.textContent = Name

const TextName2 = document.querySelector('#N1')
TextName2.textContent = 'Привет ' + Name + ', меня зовут Паша, и моя история началась с того, что мне купили ноутбук. Меня сразу охватила эйфория "настроек". Целыми днями я проводил за ноутом в поисках интересных и, самое главное, полезных программ для него.'
		
