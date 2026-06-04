export function generateUsers(){
    const timestamp = Date.now();
    return{
        name : `user_PW${timestamp}`,
        email: `test_PW${timestamp}@gmail.com`
    };
}