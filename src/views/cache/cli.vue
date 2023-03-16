<template>
	<div id="tmi">
		<Terminal name="my-terminal" @exec-cmd="onExecCmd" :show-header="false" title="liaoyi" context="" :init-log="initLog">
			<template #header>
				<div class="flex items-center justify-between"></div>
			</template>
			<!-- <template #textEditor="{ data }">
				<textarea name="editor" class="t-text-editor" v-model="data.value" @focus="data.onFocus" @blur="data.onBlur"></textarea>
				<div class="t-text-editor-floor" align="center">
					<button class="t-text-editor-floor-btn" @click="">Save & Close(Ctrl + S)</button>
				</div>
			</template> -->
		</Terminal>
	</div>
</template>

<script setup>
import Terminal from "vue-web-terminal";

const initLog = [
	{
		type: "normal",
		content: "<span class='cmd-init-title'>Welcome to Montplex CLI</span>"
	}
];

function onExecCmd(key, command, success, failed) {
	if (key === "fail") {
		failed("Something wrong!!!");
	} else {
		let allClass = ["success", "error", "system", "info", "warning"];

		let clazz = allClass[Math.floor(Math.random() * allClass.length)];
		success({
			type: "normal",
			class: clazz,
			tag: "成功",
			content: command
		});
	}
}

setTimeout(() => {
	//  推送一条消息
	let message = {
		class: "warning",
		content: "This is a wanning message."
	};
	Terminal.$api.pushMessage("my-terminal", message);
	console.log(Terminal.$api);
}, 1000);
</script>

<style lang="scss">
#tmi {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 600px;
	.t-log-box {
		font-size: 16px !important;
	}
	.t-content-normal {
		font-size: 16px !important;
	}
	.t-cmd-line {
		font-size: 16px;
		.t-cmd-line-content {
			&::before {
				margin-right: 0;
			}
			font-size: 16px;
		}
	}
	.cmd-init-title {
		color: #00e994;
		font-size: 18px;
	}
}
</style>
