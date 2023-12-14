function splashScreen() {
    console.log(`
███    ██  ██████  ██████  ████████ ██   ██ ██     ██ ██ ███    ██ ██████  
████   ██ ██    ██ ██   ██    ██    ██   ██ ██     ██ ██ ████   ██ ██   ██ 
██ ██  ██ ██    ██ ██████     ██    ███████ ██  █  ██ ██ ██ ██  ██ ██   ██ 
██  ██ ██ ██    ██ ██   ██    ██    ██   ██ ██ ███ ██ ██ ██  ██ ██ ██   ██ 
██   ████  ██████  ██   ██    ██    ██   ██  ███ ███  ██ ██   ████ ██████  
__________________________________________________________________________

http://localhost:3030/api/products
http://localhost:3030/api/employees
http://localhost:3030/api/categories
http://localhost:3030/api/contact-us
http://localhost:3030/api/auth/register
http://localhost:3030/api/auth/login`);
}

module.exports = splashScreen;