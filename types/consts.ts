const statusMap = {
	zh_CN: {
		"0": "创建中",
		"1": "运行中",
		"20": "已上限",
		"200": "已废弃",
		"-1": "已停用",
		"-10": "已停止"
	},
	en: {
		"0": "creating",
		"1": "running",
		"20": "limited",
		"200": "reject",
		"-1": "stopped",
		"-10": "terminated"
	}
};

const statusStyle = {
	"0": "#67c23a",
	"1": "#67c23a",
	"20": "#f16538",
	"200": "#6b7280",
	"-1": "#f16538",
	"-10": "#f16538"
};

const chartTitleMap = {
	zh_CN: {
		memory_used_bytes: "客户端命令总访问量",
		db_keys: "内存使用量",
		client_commands_total: "缓存指令总量",
		hit_rate: "命中率"
	},
	en: {
		memory_used_bytes: "Memory Used Bytes",
		db_keys: "Db keys",
		client_commands_total: "Client Commands Total",
		hit_rate: "Hit Rate"
	}
};

let country = {
	AF: "Afghanistan",
	AL: "Albania",
	DZ: "Algeria",
	AS: "American Samoa",
	AD: "Andorra",
	AO: "Angola",
	AI: "Anguilla",
	AQ: "Antarctica",
	AG: "Antigua and Barbuda",
	AR: "Argentina",
	AM: "Armenia",
	AU: "Australia",
	AT: "Austria",
	AZ: "Azerbaijan",
	BS: "Bahamas",
	BH: "Bahrain",
	BD: "Bangladesh",
	BB: "Barbados",
	BY: "Belarus",
	BE: "Belgium",
	BZ: "Belize",
	BJ: "Benin",
	BM: "Bermuda",
	BT: "Bhutan",
	BO: "Bolivia, Plurinational State of",
	BA: "Bosnia and Herzegovina",
	BW: "Botswana",
	BR: "Brazil",
	BN: "Brunei Darussalam",
	BG: "Bulgaria",
	BF: "Burkina Faso",
	BI: "Burundi",
	KH: "Cambodia",
	CM: "Cameroon",
	CA: "Canada",
	CV: "Cape Verde",
	KY: "Cayman Islands",
	CF: "Central African Republic",
	TD: "Chad",
	CL: "Chile",
	CN: "China",
	CO: "Colombia",
	KM: "Comoros",
	CG: "Congo",
	CK: "Cook Islands",
	CR: "Costa Rica",
	CI: "C\xf4te d'Ivoire",
	HR: "Croatia",
	CU: "Cuba",
	CY: "Cyprus",
	CZ: "Czech Republic",
	DK: "Denmark",
	DJ: "Djibouti",
	DM: "Dominica",
	DO: "Dominican Republic",
	EC: "Ecuador",
	EG: "Egypt",
	SV: "El Salvador",
	GQ: "Equatorial Guinea",
	ER: "Eritrea",
	EE: "Estonia",
	ET: "Ethiopia",
	FK: "Falkland Islands (Malvinas)",
	FO: "Faroe Islands",
	FJ: "Fiji",
	FI: "Finland",
	FR: "France",
	GF: "French Guiana",
	PF: "French Polynesia",
	TF: "French Southern Territories",
	GA: "Gabon",
	GM: "Gambia",
	GE: "Georgia",
	DE: "Germany",
	GH: "Ghana",
	GI: "Gibraltar",
	GR: "Greece",
	GL: "Greenland",
	GD: "Grenada",
	GP: "Guadeloupe",
	GU: "Guam",
	GT: "Guatemala",
	GG: "Guernsey",
	GN: "Guinea",
	GW: "Guinea-Bissau",
	GY: "Guyana",
	HT: "Haiti",
	HN: "Honduras",
	HK: "Hong Kong",
	HU: "Hungary",
	IS: "Iceland",
	IN: "India",
	ID: "Indonesia",
	IR: "Iran, Islamic Republic of",
	IQ: "Iraq",
	IE: "Ireland",
	IM: "Isle of Man",
	IL: "Israel",
	IT: "Italy",
	JM: "Jamaica",
	JP: "Japan",
	JE: "Jersey",
	JO: "Jordan",
	KZ: "Kazakhstan",
	KE: "Kenya",
	KI: "Kiribati",
	KP: "Korea, Democratic People's Republic of",
	KR: "Korea, Republic of",
	KW: "Kuwait",
	KG: "Kyrgyzstan",
	LA: "Lao People's Democratic Republic",
	LV: "Latvia",
	LB: "Lebanon",
	LS: "Lesotho",
	LR: "Liberia",
	LY: "Libya",
	LI: "Liechtenstein",
	LT: "Lithuania",
	LU: "Luxembourg",
	MO: "Macao",
	MK: "Macedonia, the former Yugoslav Republic of",
	MG: "Madagascar",
	MW: "Malawi",
	MY: "Malaysia",
	MV: "Maldives",
	ML: "Mali",
	MT: "Malta",
	MH: "Marshall Islands",
	MQ: "Martinique",
	MR: "Mauritania",
	MU: "Mauritius",
	YT: "Mayotte",
	MX: "Mexico",
	FM: "Micronesia, Federated States of",
	MD: "Moldova, Republic of",
	MC: "Monaco",
	MN: "Mongolia",
	ME: "Montenegro",
	MS: "Montserrat",
	MA: "Morocco",
	MZ: "Mozambique",
	MM: "Myanmar",
	NA: "Namibia",
	NR: "Nauru",
	NP: "Nepal",
	NL: "Netherlands",
	NC: "New Caledonia",
	NZ: "New Zealand",
	NI: "Nicaragua",
	NE: "Niger",
	NG: "Nigeria",
	NU: "Niue",
	NF: "Norfolk Island",
	MP: "Northern Mariana Islands",
	NO: "Norway",
	OM: "Oman",
	PK: "Pakistan",
	PW: "Palau",
	PS: "Palestinian Territory",
	PA: "Panama",
	PG: "Papua New Guinea",
	PY: "Paraguay",
	PE: "Peru",
	PH: "Philippines",
	PN: "Pitcairn",
	PL: "Poland",
	PT: "Portugal",
	PR: "Puerto Rico",
	QA: "Qatar",
	RE: "R\xe9union",
	RO: "Romania",
	RU: "Russian Federation",
	RW: "Rwanda",
	BL: "Saint Barth\xe9lemy",
	KN: "Saint Kitts and Nevis",
	LC: "Saint Lucia",
	MF: "Saint Martin (French part)",
	PM: "Saint Pierre and Miquelon",
	WS: "Samoa",
	SM: "San Marino",
	ST: "Sao Tome and Principe",
	SA: "Saudi Arabia",
	SN: "Senegal",
	RS: "Serbia",
	SC: "Seychelles",
	SL: "Sierra Leone",
	SG: "Singapore",
	SK: "Slovakia",
	SI: "Slovenia",
	SB: "Solomon Islands",
	SO: "Somalia",
	ZA: "South Africa",
	SS: "South Sudan",
	ES: "Spain",
	LK: "Sri Lanka",
	SD: "Sudan",
	SR: "Suriname",
	SJ: "Svalbard and Jan Mayen",
	SZ: "Swaziland",
	SE: "Sweden",
	CH: "Switzerland",
	SY: "Syrian Arab Republic",
	TW: "Taiwan, Province of China",
	TJ: "Tajikistan",
	TZ: "Tanzania, United Republic of",
	TH: "Thailand",
	TL: "Timor-Leste",
	TG: "Togo",
	TK: "Tokelau",
	TO: "Tonga",
	TT: "Trinidad and Tobago",
	TN: "Tunisia",
	TR: "Turkey",
	TM: "Turkmenistan",
	TC: "Turks and Caicos Islands",
	TV: "Tuvalu",
	UG: "Uganda",
	UA: "Ukraine",
	AE: "United Arab Emirates",
	GB: "United Kingdom",
	US: "United States",
	UY: "Uruguay",
	UZ: "Uzbekistan",
	VU: "Vanuatu",
	VE: "Venezuela, Bolivarian Republic of",
	VN: "Viet Nam",
	VG: "Virgin Islands, British",
	VI: "Virgin Islands, U.S.",
	WF: "Wallis and Futuna",
	EH: "Western Sahara",
	YE: "Yemen",
	ZM: "Zambia",
	ZW: "Zimbabwe"
} as const;

const countryList = Object.values(country);

const tableStyle: any = {
	style: {
		width: "100%",
		textAlign: "start",
		borderRadius: "8px 8px 0 0",
		borderCollapse: "separate",
		borderSpacing: 0
	},
	tableLayout: "fixed",
	headerCellStyle: {
		color: "rgba(0, 0, 0, 0.88)",
		fontWeight: 600,
		textAlign: "start",
		background: "#fafafa",
		padding: "12px 8px",
		borderBottom: "1px solid #f0f0f0"
	},
	cellStyle: {
		padding: "12px 8px",
		borderBottom: "1px solid #f0f0f0"
	}
};

export {
	country,
	countryList,
	tableStyle,
	statusMap,
	statusStyle,
	chartTitleMap
};
