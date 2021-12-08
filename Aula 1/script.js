async function resolvePromisse(){
    const myPromisse = new Promise((resolve,reject) => {
        window.setTimeout(() => {
            resolve('resolvido')
        },3000)
    })
}

const resolved = await myPromisse
.then((result) => result + ' passando pelo then')