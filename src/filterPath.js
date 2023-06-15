function filterPath(string) {
	if (typeof string != "string") return;
	string = string.toLowerCase();
	const filter = (replaceThis, withThis) =>
		(string = string.split(replaceThis).join(withThis));

	filter(" ", "-");
	filter("/", "%2F");

	return string;
}

export default filterPath;
