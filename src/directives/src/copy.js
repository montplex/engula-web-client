const copy = {
	mounted(el, binding) {
		// 双击触发复制
		if (binding.modifiers.dblclick) {
			el.addEventListener("dblclick", () => handleCopyClick(el.innerText));
		}
		// 单击触发复制
		else {
			el.addEventListener("click", () => handleCopyClick(el.innerText));
		}
	},
	beforeUnmount(el) {
		el.removeEventListener("click", el.__handleClick__);
	}
};
function handleCopyClick(e) {
	const input = document.createElement("input");
	console.log(e);
	input.value = e;
	document.body.appendChild(input);
	input.select();
	document.execCommand("Copy");
	document.body.removeChild(input);
	ElMessage({
		message: "复制成功",
		type: "success"
	});
}
export default copy;
