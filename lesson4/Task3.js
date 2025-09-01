const obj = {
	prop1: null,
	prop2: {},
	prop3: 3,
	prop4: 'str',
	prop5: 100,
	prop6: undefined,
	prop7: Symbol('symbol'),
	prop8: true,
	prop9: 123n
}
const result = {
	number: 0,
	string: 0,
	boolean: 0,
	null: 0,
	undefined: 0,
	symbol: 0,
	bigint: 0,
	object: 0,
};

Object.values(obj).forEach(v => v === null ? result.null += 1 : result[typeof v] += 1 )


console.log(result); // {null: 1, object: 1, string: 1, number: 2}