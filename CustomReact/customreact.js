
function customRendor(newElement , customDom){
    // const domElement = document.createElement(newElement.type)
    // domElement.setAttribute('href' , newElement.props.href)
    // domElement.setAttribute('target' , newElement.props.target)
    // domElement.innerHTML = newElement.childern

    // customDom.appendChild(domElement)

    /*__________________________________________________________________ */

    const domElement = document.createElement(newElement.type)

    for (const key in newElement.props) {
          
        domElement.setAttribute(key, newElement.props[key] )
    }
    domElement.innerHTML = newElement.childern
    customDom.appendChild(domElement)
}

const newElement = {
    type: 'a',
    props: {
        href : 'https://www.google.com',
        target: '_blank',

    },
    childern: 'Visit to Google'
    
}
const customDom = document.getElementById('root') 

customRendor(newElement , customDom)

console.log(newElement);