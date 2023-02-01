const ArticlesRepository = require('../repository/ArticlesRepository');

class ArticlesService {
	async create(payload) {
		const result = await ArticlesRepository.create(payload);
		return result;
	}

	async find(payload) {
		const result = await ArticlesRepository.find(payload);
		return result;
	}

	async findById(id) {
		const result = await ArticlesRepository.findById(id);
		return result;
	}

	async update(id, payload) {
		const result = await ArticlesRepository.update(id, payload);
		return result;
	}

	async delete(id) {
		const result = await ArticlesRepository.delete(id);
		return result;
	}
	
}
	
module.exports = new ArticlesService();