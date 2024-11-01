{
    // destructing

    // Object destructing

const user = {
    id: 14749,
    name: {
        firstName: 'Prosenjith',
        middleName: 'Dash',
        lastName:'Pappu'
    },
    contactNo: '01724154911',
    address: 'Dhaka'
}
    const { contactNo,
        name: { firstName:firstN },
    } = user;



    // Array destructing
    const myFriends = ['Tasnuva', 'Bilas', 'Rifat', 'Masud', 'Pronoy', 'Shubo'];
    const [a, bestFriend, c] = myFriends;
    
    //     const [, bestFriend, ] = myFriends;
    // const [a, bestFriend, c, ...rest] = myFriends;  //..rest is means  hare stay all elements without index 0 to 2 ('Masud', 'Pronoy', 'Shubo')





}