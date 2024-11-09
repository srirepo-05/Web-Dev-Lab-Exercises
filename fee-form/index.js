function validateForm() {
    let valid = true;

    // Get form elements
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let semester = document.getElementById("semester").value;
    let feeAmount = document.getElementById("feeAmount").value;

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("courseError").innerHTML = "";
    document.getElementById("semesterError").innerHTML = "";
    document.getElementById("feeError").innerHTML = "";
    document.getElementById("formMessage").innerHTML = "";

    // Name validation (minimum 3 characters)
    if (name.length < 3) {
        document.getElementById("nameError").innerHTML = "Name must be at least 3 characters.";
        valid = false;
    }

    // Email validation using regex
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    // Course validation (non-empty)
    if (course.trim() === "") {
        document.getElementById("courseError").innerHTML = "Please enter your course.";
        valid = false;
    }

    // Semester validation (selection required)
    if (semester === "") {
        document.getElementById("semesterError").innerHTML = "Please select your semester.";
        valid = false;
    }

    // Fee validation (minimum amount is 100)
    if (feeAmount < 100) {
        document.getElementById("feeError").innerHTML = "Fee amount must be at least 100.";
        valid = false;
    }

    // If all fields are valid
    if (valid) {
        document.getElementById("formMessage").innerHTML = "Fee submitted successfully!";
    }

    return valid; // Prevent form submission if validation fails
}
