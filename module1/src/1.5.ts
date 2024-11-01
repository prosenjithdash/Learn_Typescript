// Reference Type --> Object
const user: {
   readonly company: 'PDP Ltd'; // Type --> literal types // use access modified for fixed value
    firstName: string;// Requare 
    middleName?: string; // Optional Type
    lastName: string; 
    ifMarried?: boolean;
} = {

    // company:'PDP Ltd Bangladesh', Showing error cause not match type for company
    company:'PDP Ltd',
    firstName: 'Bappu',
    lastName: 'Dash',
    ifMarried: false
    
}

user.company = 'PH';