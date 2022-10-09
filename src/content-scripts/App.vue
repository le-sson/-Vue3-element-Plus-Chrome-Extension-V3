<template>
    <div id="content">注入页根组件</div>
</template>

<script>
import { runtime } from "webextension-polyfill";
import { onMounted } from 'vue';
export default {
	props: {

	},
	components: {

	},
	setup() {
		onMounted(() => {
			console.log('注入成功！')
		});
		const icon =  runtime.getURL(`icon/icon16.png`);
		return {
			icon
		}
	}
};
</script>

<style lang="less" scoped>
#content {
    width: 200px;
    height: 100px;
    color: #fff;
    line-height: 100px;
    text-align: center;
    font-size: 20px;
    background: #369;
}
</style>

