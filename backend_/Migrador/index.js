const BOOKSMEMORI = require("./books")
const BOOKSMEMORIUSER = require("./user")
//var asyncLib = require('async');
module.exports = function(model){
	var ScrapperBook = async() => {
        const ScrapperItem= await model.searchBook({})
        if(ScrapperItem){
            return  console.log(`Ya se corrio el migrador. Si decide hacer un update o agrego mas items a books  comente el if "ScrapperItem" [archivo /Migrador/index]`) 
        }
        if(!BOOKSMEMORI["BOOKS"])
            return console.log("sin libro para migrar ")
        let MAX=BOOKSMEMORI["BOOKS"].length 
        let index=1
        const promises = BOOKSMEMORI["BOOKS"].map(async book => {
            try{
                await model.modifyBook({"title":book.title},book)
            }
            catch(E){ console.log(" error libro scrap libro ",E)}
            console.log("update",MAX--)
        })
        await Promise.all(promises)

	};

    var ScrapperUser = async() => {
        const ScrapperItemUSr= await model.searchUser({})
        if(ScrapperItemUSr){
            return  console.log(`Ya se corrio el migrador. Si decide hacer un update o agrego mas items a user comente el if "ScrapperItemUSr" [archivo /Migrador/index]`) 
        }
        if(!BOOKSMEMORIUSER["USER"])
            return console.log("sin libro para migrar ")
        let index=1
        const userList=BOOKSMEMORIUSER["USER"].filter( userfilter => userfilter.username ).map( user => {
            let nameArray=user.username.split(" ")
            let username=user.username?user.username.replace(/ /g,"").toLocaleLowerCase():""
            return {
                "_id":user._id,
                username,
                "name" : nameArray[0],
                "lastname" :nameArray[1]||"",
                "password" : "55deb7fd23a25aa863fb912ff7fc21d8",
                "img":user.profile && user.profile.picture ?user.profile.picture : ""
            }
        })
        let MAX=userList.length 
        console.log("lengt user ",userList.length);
        const promises = userList.map(async user_ => {
            try{
                await model.modifyUser({"username":user_.username},user_)
            }
            catch(e){
                console.log("Error migracion user ",e)
            }
            console.log("update",MAX--)
        })
        await Promise.all(promises)

	};


    setTimeout(function(){
		ScrapperUser()
    }, 1000 * 60 * .1);
	
	setTimeout(function(){
		ScrapperBook()
    }, 1000 * 60 * .5);
}
