const a = true;
const b = true;
const c = true;

const d = c ? a || b : a && b

let d1

if (c) {
    d1 = a || b
} else {
    d1 = a && b
}