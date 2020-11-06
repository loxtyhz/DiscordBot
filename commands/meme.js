module.exports = {
    name: 'meme',
    description: 'grabs image from imgflip api',
    execute(message){
        const rp = require('request-promise');
        const imageGeneration = {
        url: `https://api.imgflip.com/get_memes`,
        json: true
        }
        let rand = 0
        rp(imageGeneration)
        .then((data) => {
            rand += Math.round(Math.random() * data.data.memes.length)
            message.channel.send(data.data.memes[rand].url)      
        })
    }
}