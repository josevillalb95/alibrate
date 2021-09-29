module.exports = function(model) {
    const BookServices={
        "findOneBook": async ({_id})=>{
            if(!_id) 
                return {}
            try {
                let resp =await model.searchBook({_id})
                return resp
            } catch (error) {
                return {}
            } 
        },
        "findBooks": async ({title,limit=20,skip=0}) => {
            let queryFind={}
            limit=parseInt(limit)
            skip=parseInt(skip)
            if( title){
                const regex = new RegExp( title, 'i')
                queryFind["title"]={ "$regex": regex }
            }
            try {
                let resp =await model.searchBooks(queryFind,limit,skip)
                return resp
            } catch (error) {
                return []
            } 
        }
    }
    return BookServices
}
