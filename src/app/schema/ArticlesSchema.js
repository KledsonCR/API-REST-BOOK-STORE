const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ArticlesSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	texto: {
		type: String,
		required: true,
	}
});

ArticlesSchema.plugin(mongoosePaginate);

const Articles = mongoose.model('Articles', ArticlesSchema);
module.exports = Articles;