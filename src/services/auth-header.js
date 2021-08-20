
export default function authHeade(){
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken){
        return {Authorization: user.tokenType+' '+user.accessToken}
    }else{
        return{};
    }
}