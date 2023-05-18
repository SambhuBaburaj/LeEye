const  mongoose =require("mongoose") ;

mongoose.connect('mongodb+srv://sambhubaburaj513:t9GPesCOGbVd9BGz@cluster0.2w9oujh.mongodb.net').then(data=>
    { 
        console.log('DB connected');
    }).catch(err=>
        {
            console.log(err);
        })