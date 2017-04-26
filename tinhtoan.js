/**
 * Created by thanh on 25/04/17.
 */
exports.giaiphuongtrinhbac2 = (a,b,c) => {
    let a_ = parseFloat(a);
    let b_ = parseFloat(b);
    let c_ = parseFloat(c);
    if (isNaN(a_)) {
        throw new Error('a parameter is not number')
    }
    if (isNaN(b_)) {
        throw  new Error('b parameter is not number')
    }
    if (isNaN(c_)) {
        throw new Error('c parameter is not number')
    }
    let delta = b_ * b_ - 4 * a_ * c_
    if (delta < 0) {
        //throw new Error('Delta nho hon 0');
        return 'vo nghiem';
    }
    let canDelta = Math.sqrt(delta)
    let temp = 2 * a_
    let temp_string = '';
    let x1 = (canDelta - b_) / temp
    //temp_string += x1;
    let x2 = (-canDelta - b_) / temp
   //temp_string += ' ' + x2;
    return [x1,x2];

}
//console.log(giaiphuongtrinhbac2(1,1,1))


