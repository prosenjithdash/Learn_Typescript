{
    // union types


    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullstackDeveloper = 'fontendDeveloper' | 'expertDeveloper'

    type Developer = FrontendDeveloper | FullstackDeveloper

    const newDeveloper: FrontendDeveloper = 'juniorDeveloper'
    
    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        bloodGroup: 'A+' | 'A_';

    }

    const user1: User = {
        name: 'Pappu',
        email: 'pappu@gmail.com',
        gender: 'male',
        bloodGroup:'A+'
    }

    // entersection 
    type FrontendDev = {
        skills: string[];
        designation1:'Frontend Developer'
    }

    type BackendDev = {
        skills: string[];
        designation2: 'Backend Developer'
        
    }

    type FullstackDevelopers = FrontendDev & BackendDev

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ['HTML', 'CSS', 'EXPRESS'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }


}