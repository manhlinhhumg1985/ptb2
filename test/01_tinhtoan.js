/**
 * Created by thanh on 25/04/17.
 */
const chai = require('chai').should();
var expect = require('chai').expect;
const tinhtoan = require('../tinhtoan');
describe("test ham giai phuong trinh bac 2", () => {
    it('Neu a khong phai la 1 so nem ra loi', () => {
        (() => {
            tinhtoan.giaiphuongtrinhbac2('bad param',2,4)
        }).should.throw('a parameter is not number');
    });
it('Neu b khong phai la 1 so thi nem ra man hinh loi ', () => {
    (() => {
        tinhtoan.giaiphuongtrinhbac2(2,'second param',4)
    }).should.throw('b parameter is not number');
});
it('Neu c khong phai la 1 so thi nem ra loi', () =>{
    (() => {
       tinhtoan.giaiphuongtrinhbac2(1,2,'third param')
    }).should.throw('c parameter is not number');
});
it(' phuong trinh: 4 * x^2 +  5*x + 1 = 0 co nghiem ', () =>{
    expect(tinhtoan.giaiphuongtrinhbac2(4,5,1)).to.eql([-0.25,-1]);
   });
    it(' phuong trinh:  x^2 +  x + 1 = 0 co nghiem ', () =>{
        expect(tinhtoan.giaiphuongtrinhbac2(1,1,1)).to.eql([1,1]);
    });
});