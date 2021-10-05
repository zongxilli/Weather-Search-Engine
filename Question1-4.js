//! QUESTION 1
const rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];

const question1 = (rooms) => {

    let result = '<ol>';

    rooms.forEach((room) => {
        result += '<li>';
        result += room.room_type;
        result += ', ';
        result += room.vacant_rooms;
        result += ', $';
        result += room.price;
        result += '</li>';
    })

    result += '</ol>';
    console.log(result);
}


//! QUESTION 2
const question2 = (num) => {

    switch(0) {
        case num%14:
            console.log('foobar');
            return;
        
        case num%2:
            console.log('foo');
            return;

        case num%7:
            console.log('bar');
            return;
        
        default:
            console.log(num);
    }
}


//! QUESTION 3
const file = "id,name,value\n1,Dan,150\n2,Peter,300\n3,Mark,400\n4,Victor,600";

const question3 = (file) => {

    let result = 0;
    file.split('\n').forEach((line, index) => {
        // Omit the first line
        if (index === 0) return;
        result += parseInt(line.split(',')[2], 10);
    })

    return result;
}


//! QUESTION 4
switch(province) {
    case 'ONTARIO':
        rate = ONTARIO_RATE;

    case 'ALBERTA':
        rate = ALBERTA_RATE;

    case 'QUEBEC':
        rate = QUEBEC_RATE;
        points = 2;
    
    default:
        rate = 1;
}

amt = base * rate;
calc = 2 * basis(amt) + extra(amt) * 1.05;


//! TESTS
// question1(rooms);
// question2();
// console.log(question3(file));
