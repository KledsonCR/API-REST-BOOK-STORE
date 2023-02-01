const ArticlesService = require('../service/ArticlesServices');
const paginate = require('../utils/paginate/ArticlesPaginate');

class ArticlesController {
    async create(req, res) {
        const payload = req.body;
        try {
            const result = await ArticlesService.create(payload);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error); 
        }
    }
    async find(req, res) {
		try {
			const result = await ArticlesService.find(req.query);
			return res.status(200).json(paginate(result));
		}catch(error){
			return res.status(400).json(error);
		}
	}
	async findById(req, res) {
		const { id } = req.params;
		try {
			const result = await ArticlesService.findById(id);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}
    async update(req, res) {
		const { id } = req.params;
		const  payload   = req.body;
		try {
			const result = await ArticlesService.update(id, payload);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async delete(req, res) {
		const { id } = req.params;
		try {
			const result = await ArticlesService.delete(id);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}
}

module.exports =  new ArticlesController();