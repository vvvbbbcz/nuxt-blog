import BlogInfo from "~/server/utils/models/BlogData";
import apiStatus from "~/server/utils/apiStatus";

function filter(body: any) {
	return {
		blogInfo: {
			name: body.name,
			icon: body.icon,
			separator: body.separator,
			background: body.background,
		}
	}
}

export default defineEventHandler(async (event) => {
	const body = filter(await readBody(event));
	const result = await BlogInfo.updateOne({_id: 0}, body).exec();
	if (result.matchedCount < 1) {
		throw createError({statusCode: 404, statusMessage: 'Not Found'});
	} else {
		return apiStatus.success();
	}
});