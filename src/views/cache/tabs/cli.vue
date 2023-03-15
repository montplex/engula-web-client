<template>
	<div class="relative flex flex-col w-full p-4 font-mono text-gray-100 bg-black mt-6 rounded-lg">
		<div id="xterm" class="xterm" />
	</div>
</template>

<script setup lang="ts">
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "xterm-addon-attach";
import { reactive, onMounted, onBeforeUnmount } from "vue";

const data = reactive({
	socketUrl: "ws://127.0.0.1:4000/terminals"
});

onMounted(() => {
	initTerm();
	// loadTerm();
});

const loadTerm = () => {
	const TERMINAL_PORT = 4000;
	const terminal = new Terminal({
		rows: 24, //行数
		cols: 100, // 不指定行数，自动回车后光标从下一行开始
		convertEol: true, //启用时，光标将设置为下一行的开头
		scrollback: 50, // 终端中的回滚量，即当前视口之上保留的行数
		windowsMode: true, // 根据窗口换行
		fontSize: 16,
		fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
		fontWeight: "500",
		cursorStyle: "underline", //光标样式
		cursorBlink: true, //光标闪烁
		cursorWidth: 4, // cursorStyle='bar' 时光标的宽度（以px为单位）
		theme: {
			foreground: "#ECECEC", //字体
			background: "#000000", //背景色
			cursor: "help", //设置光标
			cursorAccent: "#00e9a3" // 光标的强调色
		}
	});

	const termDom = document.getElementById("xterm") as HTMLElement;

	let pid: string, socketURL: string, webSocket: WebSocket;

	// Clean terminal
	while (termDom.children.length) {
		termDom.removeChild(termDom.children[0]);
	}

	terminal.open(termDom);

	terminal.write("Hello $ ");

	socketURL = "ws://127.0.0.1:" + TERMINAL_PORT + "/terminals/";

	//向node服务发送初始化请求，返回processId
	fetch("http://127.0.0.1:" + TERMINAL_PORT + "/terminals?cols=" + terminal.cols + "&rows=" + terminal.rows, {
		method: "POST"
	}).then((res) => {
		// eslint-disable-next-line prettier/prettier
		res.text().then((processId) => {
			console.log("get processId:", processId);
			pid = processId;
			socketURL += processId;
			console.log("open webSocket URL:", socketURL);
			webSocket = new WebSocket(socketURL);
			//此段代码必须要有，通过插件，来接收渲染node服务返回的数据
			const attachAddon = new AttachAddon(webSocket);
			terminal.loadAddon(attachAddon);
		});
	});

	/* 	const initSysEnv = async (term: Terminal) =>
	await axios
		.post("http://127.0.0.1:4000/terminal")
		 .then((res) => res.data)
		 .catch((err) => {
			 throw new Error(err);
		});
		const pid = await initSysEnv(term),
		ws = new WebSocket(socketURL + pid);    */

	//当terminal的大小发生变化时，重新resize
	terminal.onResize((size) => {
		console.log("==hugo Terminal onResize", size);

		//pid不存在或rows小于3的，不做处理
		if (!pid || size.rows < 3) {
			return;
		}
		const cols = size.cols;
		const rows = size.rows;
		const url = "http://127.0.0.1:" + TERMINAL_PORT + "/terminals/" + pid + "/size?cols=" + cols + "&rows=" + rows;
		fetch(url, { method: "POST" });
	});
};

const initTerm = () => {
	let term = new Terminal({
		rows: 24, //行数
		cols: 100, // 不指定行数，自动回车后光标从下一行开始
		convertEol: true, //启用时，光标将设置为下一行的开头
		scrollback: 50, // 终端中的回滚量，即当前视口之上保留的行数
		windowsMode: true, // 根据窗口换行
		fontSize: 16,
		fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
		fontWeight: "500",
		cursorStyle: "underline", //光标样式
		cursorBlink: true, //光标闪烁
		cursorWidth: 4, // cursorStyle='bar' 时光标的宽度（以px为单位）
		theme: {
			foreground: "#ECECEC", //字体
			background: "#000000", //背景色
			cursor: "help", //设置光标
			cursorAccent: "#00e9a3" // 光标的强调色
		}
	});
	// 3.websocket集成的插件,这里要注意,网上写了很多websocket相关代码.xterm4版本没必要.
	// const attachAddon = new AttachAddon(data.socket);

	// 全屏插件
	const fitAddon = new FitAddon();
	// term.loadAddon(attachAddon);
	term.loadAddon(fitAddon);

	term.open(document.getElementById("xterm") as HTMLElement);

	// 聚焦闪烁光标
	term.focus();

	// 窗口尺寸变化时，终端尺寸自适应
	window.onresize = () => {
		fitAddon.fit();
	};

	// 自定义终端默认展示内容
	writeDefaultInfo();
	// 自适应大小(使终端的尺寸和几何尺寸适合于终端容器的尺寸)，初始化的时候宽高都是对的
	// fitAddon.fit();

	// 自定义终端默认展示内容
	function writeDefaultInfo() {
		let defaultInfo = ["\x1b[1;32m Welcome to Montplex CLI \x1b[0m", "\n"];
		term.write(defaultInfo.join("\n"));
	}
	// 监视命令行输入
	term.onData((event) => {
		let e = event;
		if (e === "\r") {
			e = "\n";
		} else if (e === "\u0003") {
			// 输入ctrl+c
			e += "\n";
		}
		term.write(e);
	});

	/* 监听按键 */
	term.onKey((e) => {
		// back 删除的情况
		/* 	if (e.domEvent.keyCode === 127) {
			if (term._core.buffer.x > 2) {
				term.write("");
			}
		} */
	});
};

onBeforeUnmount(() => {
	// socket && sock
	// term && term.dispose();
});
</script>
