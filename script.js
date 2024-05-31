
var saved_username = ['Hasan','Arif','Fatih']
var saved_password = [300,200,100]

var R_username = prompt('register your username')

var R_password = prompt('register your password')

var E_login = prompt ('Enter your login')

var E_password = prompt ('Enter your password')

saved_username.unshift(R_username)

saved_password.unshift(R_password)


for(var i=0; i<R_username.length;i++){
if( saved_username[i] == E_login && saved_password[i] == E_password ){
    alert('Uğurla sistemə daxil oldunuz');
    break;
}
else {
    alert('Zəhmət olmasa məlumatlarınızı yoxlayın');
    
}
}

