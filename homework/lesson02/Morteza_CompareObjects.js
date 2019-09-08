//Compare Objects
var user1 = {
    name: "nerd",
    org: "dev",
    op: 1
};
var user2 = {
    name: "nerd",
    org: "dev",
    op: 1
};

function ObjCompare(obj1, obj2) {
    let err = 0;
    let size1 = Object.keys(obj1).length;
    let size2 = Object.keys(obj2).length;
    if (Object.keys(obj1).length == Object.keys(obj2).length) {
        console.log('Size is equal ✔️√');
        let arr1 = Object.keys(obj1);
        let arr2 = Object.keys(obj2);
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[i]) {
                obj1.hasOwnProperty(i);
                console.log(' '.repeat(3), 'Property ' + i + ' (' + arr1[i] + ') ✔️√');
                if (obj1[arr1[i]] = obj2[arr2[i]]) {
                    console.log(' '.repeat(8), 'Value (' + obj1[arr1[i]] + ') ✔️√');
                } else {
                    console.log(' '.repeat(8), 'Value (' + obj1[arr1[i]] + ',' + obj1[arr2[i]] + ')  X');
                    err++;
                }
            } else {
                console.log(' '.repeat(3), 'Property ' + i + ' (' + arr1[i] + ',' + arr2[i] + ') ❌ X');
                err++;
            }
        }
        console.log('----');
    } else {
        err++;
        console.log('Size is not equal ❌X');
    };
    if (err == 0) {
        console.log('✔️✔️ Object1=Object2 ✔️✔️');
    } else {
        console.log('Err ❌X ' + err);
    }

    return err;
}


ObjCompare(user1, user2)
