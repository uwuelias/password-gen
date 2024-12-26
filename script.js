document.querySelectorAll(".choice button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

const generated_password = document.getElementById("generated-password");
const copy_button = document.getElementById("copy-button");
const length = document.getElementById("password-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generate_button = document.getElementById("generate-button");

//arrays used to generate the password
const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase_letters = "abcdefghijklmnopqrstuvwxyz".split("");
const number_array = "1234567890".split("");
const symbol_array = "!@#$%^&*()_+[]{}|;:',.<>?/`~-=\\".split("");

function generate_pass() {
  let length_value = parseInt(length.value, 10);
  let option_array = []; //array to store the other arrays
  if (uppercase.classList.contains("active")) {
    option_array.push(uppercase_letters);
  }
  if (lowercase.classList.contains("active")) {
    option_array.push(lowercase_letters);
  }
  if (numbers.classList.contains("active")) {
    option_array.push(number_array);
  }
  if (symbols.classList.contains("active")) {
    option_array.push(symbol_array);
  }

  if (option_array.length == 0) {
    //make sure the user selects at least one of the character options
    alert("Please select at least one character type for your password!");
    return;
  }
  let new_password = "";
  for (let i = 0; i < length_value; i++) {
    let random_index = Math.floor(Math.random() * option_array.length); //use to determine which array in option_array we should use
    let random_index_2 = Math.floor(
      Math.random() * option_array[random_index].length
    ); //pick a random character
    new_password += option_array[random_index][random_index_2];
  }
  generated_password.value = new_password;
  console.log(new_password);
}

function copy_to_clipboard() {
  if (generate_pass.value == "") {
    return;
  }
  copy_button.textContent = "Copied";
  navigator.clipboard.writeText(generated_password.value); //copies the newly generated password to clipboard
  setTimeout(() => {
    copy_button.textContent = "Copy";
  }, 1000);
}

//event listeners
generate_button.addEventListener("click", generate_pass);
copy_button.addEventListener("click", copy_to_clipboard);
