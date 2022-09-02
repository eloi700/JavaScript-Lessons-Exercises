/***TRY BLOCK
 * ---testing for error
 *CATCH BLOCK
 * ---handling the error
 */

 const user = {email: 'johndoe@gmail.com', name:'John Doe'}
 try {
    if(!user.id){
        throw 'User has no id.'
        // throw new SyntaxError('User has no id.')
    }
    myFunction();//will produce ReferenceError
    null.myFunction();// will produce TypeError - cannot read property of null
 } catch(e){
    console.log(e); // User has no id. // SyntaxError: User has no id.
    console.log(`User Error: ${e.message}`)//User Error: User has no id.


    console.log(`${e.TypeError}: it's null stupid!`) // undefined: it's null stupid!
    console.log(e.message); // shows only the message (myFunction is not defined)
    console.log(e.name); // shows only the name (ReferenceError)
    console.log(e instanceof ReferenceError); // shows true
 } finally{
    console.log('Finally runs regardless of result.');// shows as it is
 }
