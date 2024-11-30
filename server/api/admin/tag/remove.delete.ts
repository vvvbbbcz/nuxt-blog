import Tag from "~/server/utils/models/BlogData";
import apiStatus from "~/server/utils/apiStatus";

export default defineEventHandler(async (event) => {
	const id = parseInt((await readBody(event))._id);
	if (!isNaN(id) && id >= -100000 && id <= -1001) {
		const result = await Tag.deleteOne({_id: id}).exec();
		if (result.deletedCount < 1) {
			return apiStatus.error(event, {code: 404});
		}

		return apiStatus.success();
	}
	return apiStatus.error(event, {code: 400});
});