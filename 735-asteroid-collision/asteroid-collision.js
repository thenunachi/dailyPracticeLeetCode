/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let a of asteroids) {
        let destroyed = false;

        while (
            stack.length &&
            stack[stack.length - 1] > 0 &&
            a < 0
        ) {
            let top = stack[stack.length - 1];
            if (top < -a) {
                stack.pop(); // top explodes
            } else if (top === -a) {
                stack.pop(); // both explode
                destroyed = true;
                break;
            } else {
                // current asteroid explodes
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            stack.push(a);
        }
    }

    return stack;
};