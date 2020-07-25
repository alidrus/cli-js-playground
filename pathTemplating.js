/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

const parameters = {
    id: 1,
    playerId: 2
};

const template = "/games/:id/:playerId";

const output = template.replace(/(:\w+)/g, (parameter) => {
    return parameters[parameter.slice(1)];
});

console.log(output);
/*
 *  Output:
 *
 *  /games/1/2
 *
 */
