//********** Task 1 ***********

function sumSliceArray (arr, first, second) {
   if(!Array.isArray(arr)) {
    throw new Error("Is not an array");
   }
   if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Is not a number");
   }
   if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    throw new Error("Error");
   }
   return arr[first] + arr[second];
}

try {
    let array = [4, 5, 6, 2, 8, 5, 4, 1];
    let result = sumSliceArray(array, 2, 7);
    console.log("Sum:", result);
} catch (error) {
    console.error("Error:", error.message);
}


// ********** Task 2 ***********

function checkAge() {
    try {
    let name = prompt ("Enter your name:");
        if (!name) {
        throw new Error("The field is empty! Please enter your name");
        }
    let age = prompt ("Enter your age:");
        if (!age || isNaN(age)) {
        throw new Error("The field is empty! Please enter your age");
    }
        if (age < 18 || age > 70) {
        throw new RangeError("Age should be between 18 and 70");
    }

    let status = prompt ("Enter your status(admin, moderator, user)");
        if (status !== "admin" && status !== "moderator" && status !== "user") {
        throw new EvalError("Invalid status");
}
    alert("You have access to watch the movie!");
} catch (error) {
        alert(`Error: ${error.name}\n${error.message}`);
    }
}
checkAge();


// ************** Task 3 **************

function calcRectangleArea (width, height) {
        if (isNaN(width) || isNaN(height)) {
            throw new Error("Is not a number");
        } 
        return width * height;
    }
     try {    
        const width = parseFloat(prompt('Enter the width:'));
        const height = parseFloat(prompt('Enter the height:'));

        if (isNaN(width) || isNaN(height)) {
         throw new Error("Invalid input. Please enter numeric values.");
        }

        let area = calcRectangleArea(width, height);
        console.log(`The area of rectangle is: ${area}`);
        
    } catch (error) {
        alert(`An error ${error.message}`);
    }


// ************* Task 4. **************

class MonthException {
    constructor (message) {
        this.message = message;
        this.name = "MonthException";
    }
}
        function showMonthName (month) {
            let months = [
                "January", "February", "March", "April",
                "May", "June", "July", "August",
                "September", "October", "November", "December"
            ];
            
            if ( !month || isNaN(month) || month < 1 || month > 12) {
                    throw new MonthException("Incorrect month number.");
                }
                return months[month - 1];
            } 
            try{
                console.log(showMonthName(11));
                console.log(showMonthName(13));
            }
            catch (error) {
             console.error("MonthException:", error.message);
        }

//***************** Task 5.**************

function showUser(id) {
    if (id < 0) {
        throw new Error ("ID must not be negative: " + id);
    }
    return {id};
} 

function showUsers(ids) {
    let usersId = [];

    for (let id of ids) {
        try {
            let user = showUser(id);
            usersId.push(user);
        } catch (error) {
            console.error(error.message);
        }
    }
    return usersId;
}
    let result = showUsers([7, 12, 44, -22, 2, 3, 4, 1, 7]);
    console.log(result);
