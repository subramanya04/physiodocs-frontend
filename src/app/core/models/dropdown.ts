export interface SelectOptions {
  label: string;
  value: string | number;
}

export enum GenderTypes {
  male = 'M',
  female = 'F',
  others = 'O'
}

export enum LanguageTypes {
  assamese = 'ASSAMESE',
  bengali = 'BENGALI',
  bodo = 'BODO',
  dogri = 'DOGRI',
  english = 'ENGLISH',
  gujarati = 'GUJARATI',
  hindi = 'HINDI',
  kannada = 'KANNADA',
  kashmiri = 'KASHMIRI',
  konkani = 'KONKANI',
  maithili = 'MAITHILI',
  malayalam = 'MALAYALAM',
  manipuri = 'MANIPURI',
  marathi = 'MARATHI',
  nepali = 'NEPALI',
  oriya = 'ORIYA',
  punjabi = 'PUNJABI',
  sanskrit = 'SANSKRIT',
  santhali = 'SANTHALI',
  sindhi = 'SINDHI',
  tamil = 'TAMIL',
  telugu = 'TELUGU',
  urdu = 'URDU'
}

export enum NationalityTypes {
  'afghan' = 'AFGHAN',
  'albanian' = 'ALBANIAN',
  'algerian' = 'ALGERIAN',
  'american' = 'AMERICAN',
  'andorran' = 'ANDORRAN',
  'angolan' = 'ANGOLAN',
  'antiguans' = 'ANTIGUANS',
  'argentinean' = 'ARGENTINEAN',
  'armenian' = 'ARMENIAN',
  'australian' = 'AUSTRALIAN',
  'austrian' = 'AUSTRIAN',
  'azerbaijani' = 'AZERBAIJANI',
  'bahamian' = 'BAHAMIAN',
  'bahraini' = 'BAHRAINI',
  'bangladeshi' = 'BANGLADESHI',
  'barbadian' = 'BARBADIAN',
  'barbudans' = 'BARBUDANS',
  'batswana' = 'BATSWANA',
  'belarusian' = 'BELARUSIAN',
  'belgian' = 'BELGIAN',
  'belizean' = 'BELIZEAN',
  'beninese' = 'BENINESE',
  'bhutanese' = 'BHUTANESE',
  'bolivian' = 'BOLIVIAN',
  'bosnian' = 'BOSNIAN',
  'brazilian' = 'BRAZILIAN',
  'british' = 'BRITISH',
  'bruneian' = 'BRUNEIAN',
  'bulgarian' = 'BULGARIAN',
  'burkinabe' = 'BURKINABE',
  'burmese' = 'BURMESE',
  'burundian' = 'BURUNDIAN',
  'cambodian' = 'CAMBODIAN',
  'cameroonian' = 'CAMEROONIAN',
  'canadian' = 'CANADIAN',
  'cape verdean' = 'CAPE VERDEAN',
  'central african' = 'CENTRAL AFRICAN',
  'chadian' = 'CHADIAN',
  'chilean' = 'CHILEAN',
  'chinese' = 'CHINESE',
  'colombian' = 'COLOMBIAN',
  'comoran' = 'COMORAN',
  'congolese' = 'CONGOLESE',
  'costa rican' = 'COSTA RICAN',
  'croatian' = 'CROATIAN',
  'cuban' = 'CUBAN',
  'cypriot' = 'CYPRIOT',
  'czech' = 'CZECH',
  'danish' = 'DANISH',
  'djibouti' = 'DJIBOUTI',
  'dominican' = 'DOMINICAN',
  'dutch' = 'DUTCH',
  'east timorese' = 'EAST TIMORESE',
  'ecuadorean' = 'ECUADOREAN',
  'egyptian' = 'EGYPTIAN',
  'emirian' = 'EMIRIAN',
  'equatorial guinean' = 'EQUATORIAL GUINEAN',
  'eritrean' = 'ERITREAN',
  'estonian' = 'ESTONIAN',
  'ethiopian' = 'ETHIOPIAN',
  'fijian' = 'FIJIAN',
  'filipino' = 'FILIPINO',
  'finnish' = 'FINNISH',
  'french' = 'FRENCH',
  'gabonese' = 'GABONESE',
  'gambian' = 'GAMBIAN',
  'georgian' = 'GEORGIAN',
  'german' = 'GERMAN',
  'ghanaian' = 'GHANAIAN',
  'greek' = 'GREEK',
  'grenadian' = 'GRENADIAN',
  'guatemalan' = 'GUATEMALAN',
  'guinea-bissauan' = 'GUINEA-BISSAUAN',
  'guinean' = 'GUINEAN',
  'guyanese' = 'GUYANESE',
  'haitian' = 'HAITIAN',
  'herzegovinian' = 'HERZEGOVINIAN',
  'honduran' = 'HONDURAN',
  'hungarian' = 'HUNGARIAN',
  'icelander' = 'ICELANDER',
  'indian' = 'INDIAN',
  'indonesian' = 'INDONESIAN',
  'iranian' = 'IRANIAN',
  'iraqi' = 'IRAQI',
  'irish' = 'IRISH',
  'israeli' = 'ISRAELI',
  'italian' = 'ITALIAN',
  'ivorian' = 'IVORIAN',
  'jamaican' = 'JAMAICAN',
  'japanese' = 'JAPANESE',
  'jordanian' = 'JORDANIAN',
  'kazakhstani' = 'KAZAKHSTANI',
  'kenyan' = 'KENYAN',
  'kittian and nevisian' = 'KITTIAN AND NEVISIAN',
  'kuwaiti' = 'KUWAITI',
  'kyrgyz' = 'KYRGYZ',
  'laotian' = 'LAOTIAN',
  'latvian' = 'LATVIAN',
  'lebanese' = 'LEBANESE',
  'liberian' = 'LIBERIAN',
  'libyan' = 'LIBYAN',
  'liechtensteiner' = 'LIECHTENSTEINER',
  'lithuanian' = 'LITHUANIAN',
  'luxembourger' = 'LUXEMBOURGER',
  'macedonian' = 'MACEDONIAN',
  'malagasy' = 'MALAGASY',
  'malawian' = 'MALAWIAN',
  'malaysian' = 'MALAYSIAN',
  'maldivan' = 'MALDIVAN',
  'malian' = 'MALIAN',
  'maltese' = 'MALTESE',
  'marshallese' = 'MARSHALLESE',
  'mauritanian' = 'MAURITANIAN',
  'mauritian' = 'MAURITIAN',
  'mexican' = 'MEXICAN',
  'micronesian' = 'MICRONESIAN',
  'moldovan' = 'MOLDOVAN',
  'monacan' = 'MONACAN',
  'mongolian' = 'MONGOLIAN',
  'moroccan' = 'MOROCCAN',
  'mosotho' = 'MOSOTHO',
  'motswana' = 'MOTSWANA',
  'mozambican' = 'MOZAMBICAN',
  'namibian' = 'NAMIBIAN',
  'nauruan' = 'NAURUAN',
  'nepalese' = 'NEPALESE',
  'new zealander' = 'NEW ZEALANDER',
  'ni-vanuatu' = 'NI-VANUATU',
  'nicaraguan' = 'NICARAGUAN',
  'nigerien' = 'NIGERIEN',
  'north korean' = 'NORTH KOREAN',
  'northern irish' = 'NORTHERN IRISH',
  'norwegian' = 'NORWEGIAN',
  'omani' = 'OMANI',
  'pakistani' = 'PAKISTANI',
  'palauan' = 'PALAUAN',
  'panamanian' = 'PANAMANIAN',
  'papua new guinean' = 'PAPUA NEW GUINEAN',
  'paraguayan' = 'PARAGUAYAN',
  'peruvian' = 'PERUVIAN',
  'polish' = 'POLISH',
  'portuguese' = 'PORTUGUESE',
  'qatari' = 'QATARI',
  'romanian' = 'ROMANIAN',
  'russian' = 'RUSSIAN',
  'rwandan' = 'RWANDAN',
  'saint lucian' = 'SAINT LUCIAN',
  'salvadoran' = 'SALVADORAN',
  'samoan' = 'SAMOAN',
  'san marinese' = 'SAN MARINESE',
  'sao tomean' = 'SAO TOMEAN',
  'saudi' = 'SAUDI',
  'scottish' = 'SCOTTISH',
  'senegalese' = 'SENEGALESE',
  'serbian' = 'SERBIAN',
  'seychellois' = 'SEYCHELLOIS',
  'sierra leonean' = 'SIERRA LEONEAN',
  'singaporean' = 'SINGAPOREAN',
  'slovakian' = 'SLOVAKIAN',
  'slovenian' = 'SLOVENIAN',
  'solomon islander' = 'SOLOMON ISLANDER',
  'somali' = 'SOMALI',
  'south african' = 'SOUTH AFRICAN',
  'south korean' = 'SOUTH KOREAN',
  'spanish' = 'SPANISH',
  'sri lankan' = 'SRI LANKAN',
  'sudanese' = 'SUDANESE',
  'surinamer' = 'SURINAMER',
  'swazi' = 'SWAZI',
  'swedish' = 'SWEDISH',
  'swiss' = 'SWISS',
  'syrian' = 'SYRIAN',
  'taiwanese' = 'TAIWANESE',
  'tajik' = 'TAJIK',
  'tanzanian' = 'TANZANIAN',
  'thai' = 'THAI',
  'togolese' = 'TOGOLESE',
  'tongan' = 'TONGAN',
  'trinidadian or tobagonian' = 'TRINIDADIAN OR TOBAGONIAN',
  'tunisian' = 'TUNISIAN',
  'turkish' = 'TURKISH',
  'tuvaluan' = 'TUVALUAN',
  'ugandan' = 'UGANDAN',
  'ukrainian' = 'UKRAINIAN',
  'uruguayan' = 'URUGUAYAN',
  'uzbekistani' = 'UZBEKISTANI',
  'venezuelan' = 'VENEZUELAN',
  'vietnamese' = 'VIETNAMESE',
  'welsh' = 'WELSH',
  'yemenite' = 'YEMENITE',
  'zambian' = 'ZAMBIAN',
  'zimbabwean' = 'ZIMBABWEAN'
}

export const toSelectOptions = (obj: Object): SelectOptions[] =>
  Object.keys(obj).map(label => ({ label, value: obj[label] }));
