let fs = require(`../handlers/constants`).fs
let fetch = require(`../handlers/constants`).node
let config = require(`../handlers/constants`).config
let dir_uploader = null;
let upload = []
module.exports = {
    name: 'haste',
    description: `upload text / file content to ${config.link}`,
    async execute(client, message, args,) {
        if(args[0].includes('/')) { upload = args[0]; dir_uploader = true }
		if(!args[0]) return ( message.channel.send(`You need to define something to upload`) )

        dir_uploader ? upload = fs.readFileSync(args[0], 'utf8') : upload = args.slice(0).join(' ') 

        const sent = {
            method: 'post',
            body: upload,
            headers: {'Content-Type': 'application/json'}
        }

        const data = await (await fetch(`${config.link}/documents`, sent)).json();
        message.channel.send(`${config.link}/${data.key}`)
	}
}