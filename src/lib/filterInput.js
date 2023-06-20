const filteredWords = [
	'gay',
	'porn',
	'sex',
	'fuck',
	'drugs',
	'motherfucker',
	'mother fucker',
	'bastard',
	'bdsm',
	'lesbian',
	'butt',
	'ass',
	'penis',
	'vagina',
	'pussy',
	'cock',
	'dick',
	'anal',
	'anus',
	'cunt',
	'whore',
	'rape',
	'rapist',
	'pedophile',
	'incest',
	'homo',
	'homosexuality',
	'transgenderism',
	'tranny',
	'queer',
	'lgbtq+',
	'lgbtqiap+',
	'sexually explicit content',
	'adult material',
	'adult-oriented media',
	'child pornography',
];

const filterInput = (input) => {
	let filteredInput = input;
	filteredWords.forEach((word) => {
		const regex = new RegExp(word, 'gi');
		filteredInput = filteredInput.replace(regex, '*'.repeat(word.length));
	});
	return filteredInput;
};

export default filterInput;
