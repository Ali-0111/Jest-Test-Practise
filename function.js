const functions = {
    stringLength: string => {
        if (string.length > 0 && string.length <= 10) {
            return string.length
        } else {
            throw new Error('Min: 1 , Max: 10');
        }
    },

    reverseString: str => str.split("").reverse().join(""),
    calculator: {
        add: (a,b) => a+b,
        sub: (a,b) => a-b,
        multiply: (a,b) => a*b,
        divide: (a,b) => {
            if (b !==0) {
                return a/b;
            } else {
                throw "Zero is not allowed"
            }
        },
    },
    startWithCapital: str => {
       return str.charAt(0).toUpperCase() + str.slice(1);
    },


}

module.exports = functions;