const expect = require('expect.js');
const clone = require('../dist/index.js').deepClone;

describe('function clone', function() {
    describe('param data', function() {
        it('正确的测试用例', function() {
            // 基本数据结构
            expect(clone('abc')).to.equal('abc');
            
            // 数组
            const arr = [1, [2]];
            const cloneArr = clone(arr);
            expect(cloneArr).not.to.equal(arr);
            expect(cloneArr).to.eql(arr);

            // 对象
            const obj = { a: { b: 1} };
            const cloneObj = clone(obj);
            expect(cloneObj).not.to.equal(obj);
            expect(cloneObj).to.eql(obj);
        });

        it('边界值测试用例', function() {
            expect(clone()).to.equal(undefined);
            expect(clone(undefined)).to.equal(undefined);
            expect(clone(null)).to.equal(null);
        });
    });
});