const sanitizeInput = (input) => {
	// Add your sanitization logic here
	// For example, you can remove HTML tags using regex:
	const sanitizedInput = input.replace(/(<([^>]+)>)/gi, '');
	return sanitizedInput;
};

export default sanitizeInput;
