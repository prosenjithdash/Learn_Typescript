{
    // spread operator
    // rest operator
    // destructuring


    // spread operator
    // For array
    const friendsZone1:string[] = ['Labib', 'Proshanto', 'Kishore', 'Taspia', 'Papia'];
    const friendsZone2: string[] = ['Bilash', 'Apurbo', 'Ayon', 'Zarin', 'Sayem', 'Aklima', 'Ananya'];
    
    friendsZone2.push(...friendsZone1)
    

    // for object
    const mentors1 = {
        typescript: 'Mizba',
        redux: 'Mir',
        dbms:'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud:'Nahid'
    }

    const mentorList = {    // destructuring

        ...mentors1,
        ...mentors2
    }

    // Learn rest operator

    //  const greatFriends = (friend1:string, friend2:string, friend3:string)=>{
    //     console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    // }
 
    const greatFriends = (...friends:string[])=>{
        friends.forEach((friend:string) => console.log(`Hi ${friend}`))
    }


}