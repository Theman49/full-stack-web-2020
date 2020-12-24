// flat(number)

const array = [1,2,[3,4,[5]]];
array.flat();
array.flat(2)

const entries = ["Bob", "Sally",,,,,, "Cindy"];
entries.flat();

// flatMap()
const massiveArray = ['x', ['y','y'], [[['t']]], [['u', 'u']]];
const massiveFlat = massiveArray.flatMap(item => item + 'O');

// trimStart() & trimEnd
const usrEmail = "         example@example.com      ";
usrEmail.trimStart();
usrEmail.trimEnd();
usrEmail.trimStart().trimEnd();

// make arry to object  and object to array
const userProfiles = [['commander', 23], ['derekZlander', 34]];
const obj = Object.fromEntries(userProfiles);
Object.entries(obj);

// try and catch
try {
    // 3+5
    bob + "wowo";
} catch(error) {
    console.log("you got error: ", error)
}