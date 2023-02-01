const Articles = ({ _id, nome, texto }) => ({
	_id,
	nome,
	texto
});
  
const paginate = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => ({
	artigos: docs.map(Articles),
	limit,
	total: totalDocs,
	offset: pagingCounter,
	offsets: totalPages
});
  
module.exports = paginate;