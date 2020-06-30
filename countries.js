/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let fs = require("fs");

let countries = fs.readFileSync("./countries.json", "utf8");

let data = JSON.parse(countries);

/*
{
  alpha2: 'ZM',
      alpha3: 'ZMB',
      countryCallingCodes: [ '+260'  ],
      currencies: [ 'ZMW'  ],
      emoji: '🇿🇲',
      ioc: 'ZAM',
      languages: [ 'eng'  ],
      name: 'Zambia',
      status: 'assigned'
    
} 
 */
console.log("<?php");
data.forEach(country => {
    let create = "Country.create([\n"
        + "    'name'                 => '" + country.name + "',\n"
        + "    'calling_code'         => '" + country.countryCallingCodes[0] + "',\n"
        + "    'iso_3166_alpha2_code' => '" + country.alpha2 + "',\n"
        + "    'emoji_flag'           => '" + country.emoji + "',\n"
        + "    'currency'             => '" + country.currencies[0] + "',\n"
        + "]);\n"
    console.log(create);
});
