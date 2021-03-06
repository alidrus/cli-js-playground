/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let fs = require("fs");

let countries = fs.readFileSync("./countries.json", "utf8");

let data = JSON.parse(countries);

let sanitize = (text, quote = true) => {
    if (text)
    {
        const newText = text.replace(/\'/g, "\\\'");
        return (quote ? "'" : "") + newText + (quote ? "'" : "");
    }

    return "null";
};

let contents = "<?php\n\n";

data.forEach(country => {
    if (country.status !== "assigned" || country.currencies.length === 0 || country.countryCallingCodes.length === 0)
    {
        return;
    }
    contents += "// " + sanitize(country.name, false) + "\n"
        + "Country::create([\n"
        + "    'name'            => " + sanitize(country.name) + ",\n"
        + "    'calling_code'    => " + sanitize(country.countryCallingCodes[0]) + ",\n"
        + "    'iso_3166_alpha2' => " + sanitize(country.alpha2) + ",\n"
        + "    'emoji_flag'      => " + sanitize(country.emoji) + ",\n"
        + "    'currency'        => " + sanitize(country.currencies[0]) + ",\n"
        + "]);\n\n";
});

fs.writeFile("countries.php", contents, () => {
    console.log("written to countries.php");
});
