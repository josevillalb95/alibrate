module.exports = function(settings) {
	const mongoose = require('mongoose');
	const options_db={
	};
	const con = mongoose.connect(settings.connectURI, options_db);
	mongoose.connection.on("open", function (ref) {
		console.log("********* open connection to mongo server: " + settings.connectURI);
	});
	mongoose.connection.on("connected", function (ref) {
		console.log("Mongoose default connection open to " + settings.connectURI);
	});
	const Schema = mongoose.Schema;
	const ObjectId = Schema.ObjectId;
	const book=new Schema({
		"_id": String,
		"bookCover": String,
		"title": String,
		"author": String,
		"editorial": String,
		"isbn13": String,
		"biography": String,
		"description": String,
		"lang": String,
		"publication_date": Date,
		"genre": String,
		"category": [ String ],
		"binding": String,
		"provider": String,
		"booksIds": [ Schema.Types.Mixed ],
		"libraryCount": Number,
		"updatedDate": Date,
		"updatedBy": String,
		"originalAuthor": String,
		"primaryBook": Boolean,
		"globalRating": Schema.Types.Mixed,
		"cleanTitle":String,
		"cleanAuthor": String,
		"bookCoverHome": String,
		"bookCoverBackup": String,
		"processingImg": Boolean,
		"coverLocal": Boolean,
		"originalBookCover": String,
		"cover": String,
		"hasCover": Boolean,
		"imgStatus":String,
		"agapea": Boolean,
		"ecommerceOk": Boolean,
		"ecommerceLastUpdate": Date,
		"isbnLibranda": [String],
		"geolocking": [ String ],
		"genres": [ Schema.Types.Mixed],
		"subgenres": [ Schema.Types.Mixed],
		"tags":[ Schema.Types.Mixed],
		"matchLibrandaByTitleAndAuthor": Boolean,
		"originalGenre":String,
		"ecommerceStatus":String,
		"hasCoverToShared": Boolean,
		"removedFromIndex": Boolean,
		"reviews": String,
		"ebookAvailable": Boolean,
		"libraryItem": Boolean
	})
	const usuarios = new Schema({
		"_id":String,
		"username" : String,
		"name" : String,
		"lastname" : String,
		"password" : String,
		"img":String,
		"porhacer":[{ type: String, ref: 'book' }],
		"leyendo":[{ type: String, ref: 'book' }],
		"leido":[{ type: String, ref: 'book' }],
		"abandonado":[{ type: String, ref: 'book' }]
	}); 
	
	const ModelBook = mongoose.model('book', book, 'book');
	const ModelUsuarios = mongoose.model('usuarios', usuarios, 'usuarios');
	const moduloModel = {};
	// moduloModel.connection = mongoose.connection;
	moduloModel.generateId = function() {
		return mongoose.Types.ObjectId().toString() 
	}
	moduloModel.searchUser = function(query) {
		return ModelUsuarios.findOne(query).populate('porhacer').populate('leyendo').populate('leido').populate('abandonado')     
	}
	moduloModel.searchUsers = function(query) {
		return ModelUsuarios.find(query)
	}
	moduloModel.modifyUser = function(query,update){
		return ModelUsuarios.update(query, update, { upsert: true } )
	}
	moduloModel.searchBook = function(query) {
		return ModelBook.findOne(query).lean()
	}
	moduloModel.searchBooks = function(query,limit,skip) {
		return ModelBook.find(query).limit(limit).skip(skip).lean()
	}
	moduloModel.modifyBook = function(query,update){
		return ModelBook.update(query, update, { upsert: true })
	}
  	return moduloModel;
};
