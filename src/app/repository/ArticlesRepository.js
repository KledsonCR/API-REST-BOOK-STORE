const ArticlesSchema = require('../schema/ArticlesSchema');

class ArticlesRepository {
	async create(payload, result) {
		return ArticlesSchema.create(payload, result);
	}

	async find(payload) {
		const { page = 1, limit = 50, ...query } = payload;
		return ArticlesSchema.paginate(
			{ ...query },
			{
				limit: Number(limit),
				page: Number(page),
				skip: (Number(page) - 1) * Number(limit),
			}
		);
	}

	async findById(id) {
		return ArticlesSchema.findById(id);
	}

	async update(id, payload) {
		return ArticlesSchema.findByIdAndUpdate(id, payload);
	}

	async delete(id) {
		return ArticlesSchema.findByIdAndDelete(id);
	}
}

module.exports = new ArticlesRepository();