// 1

{
    let action = "move";
    switch (action) {
        case "move":
            alert("You're moving!");
            break
        case "jump":
            alert("You're jumping!");
            break
        case "run":
            alert("You're running!")
            break
        default:
            alert("Invalid action.")
    }
}


// 2 switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.

{
    let vegetables = prompt("Enter 'Carrot' or 'Broccoli'");
    {
        switch (vegetables) {
            case "Carrot":
                alert("Hello")
                break;
            case "Broccoli":
                alert("Welcome")
                break;
        }
    }

    {
        switch (vegetables) {
            case "Broccoli":
                alert("Hello")
                break;
            case "Carrot":
                alert("Welcome")
                break;
            default:
                alert("Neither");
        }
    }
}
//3 შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.

{
    let age = prompt("Enter your age")
    if (age < 18) {
        alert("არ შეგიძლია ხმის მიცემა!");
    }
    else {
        alert("შეგიძლია მისცე ხმა!");
    }
}

//4 შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:

{
    let password = prompt("Create password:");
    if (!isNaN(Number(password))) {
        alert(" უარგისია.");
    }
    else if (password.length < 3) {
        alert("უარგისია.");
    }
    else if (password.length >= 3 && password.length <= 6) {
        alert("სუსტია.");
    }
    else if (password.length >= 6 && password.length <= 8) {
        alert("მისაღებია.");
    }
    else if (password.length >= 8 && password.length <= 16) {
        alert("ძლიერია.");
    }
}



