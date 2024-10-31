<template>
	<BasePage>
		<el-card class="articleContent">
			<div v-html="content" class="content"></div>
		</el-card>
	</BasePage>
</template>
<script>
import apiQuery from "~/utils/apiQuery.js";
import getQueryFirst from "~/utils/getQueryFirst.js";

export default {
	methods: {
		async fetch() {
			const id = parseInt(getQueryFirst(useRoute().query.id));
			const name = getQueryFirst(useRoute().query.name);
			if (isNaN(id) && !name) {
				this.content = "链接格式错误";
				return;
			}
			const response = !isNaN(id) ? await apiQuery(`article?id=${id}`) : await apiQuery(`article?name=${name}`);
			if (response.status === 200) {
				console.log(response.data.content);
				this.title = response.data.title;
				this.content = response.data.content;
			} else if (response.status === 404) {
				this.title = "404 Not Found";
				this.content = "文章不存在，请检查链接是否正确";
			} else {
				this.content = "加载错误，请检查链接是否正确或网络连接是否正常";
			}
		}
	},
	data() {
		return {
			title: "",
			content: "加载中...",
			tags: [],
			nowTime: "",
		};
	},
	created() {
		this.fetch();
	},
};
</script>