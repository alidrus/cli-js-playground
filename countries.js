#!/usr/bin/env -S node --harmony

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

let sanitize = (text) => {
    if (text)
    {
        const newText = text.replace(/\'/g, "\\\'");
        return "'" + newText + "'";
    }

    return "null";
};

console.log("<?php");
data.forEach(country => {
    if (country.status !== "assigned" || country.currencies.length === 0 || country.countryCallingCodes.length === 0)
    {
        return;
    }
    let create = "Country::create([\n"
        + "    'name'            => " + sanitize(country.name) + ",\n"
        + "    'calling_code'    => " + sanitize(country.countryCallingCodes[0]) + ",\n"
        + "    'iso_3166_alpha2' => " + sanitize(country.alpha2) + ",\n"
        + "    'emoji_flag'      => " + sanitize(country.emoji) + ",\n"
        + "    'currency'        => " + sanitize(country.currencies[0]) + ",\n"
        + "]);\n"
    console.log(create);
});
