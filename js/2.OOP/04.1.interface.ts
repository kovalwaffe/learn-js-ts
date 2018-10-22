interface LableledValue {
    label: string;
}
function printLabel(labelledObj: LableledValue) {
    console.log(labelledObj.label);
}

let myObj = {
    size: 10,
    label: 'Size 10'
};

printLabel(myObj);