const readline = require('readline')
const alph = 'abcdfghjklmnopqrtupsxyzeo'
function Random_choice(string){
	var len = string.length
	return string.charAt(Math.floor(Math.random()*len))
}
const read = readline.createInterface(
	process.stdin,process.stdout
)
read.question('Enter password: ',(password)=>{
	const time =new Date()
	const Listlen = 5
	var str = ''
	while(password != str){
		str = str+ Random_choice(alph)
		if(str.length >= Listlen){
		str = ''
	}	if(password == String(str)){
  			TempoLimite = time.getHours()+':'+time.getMinutes()
  			console.log('[+] Found Passwd ==> '+str+' TEMPO:'+TempoLimite)
  			break
  	}	else{
  			console.log('Not Found pass: '+str)
  		}

	}read.close()
})