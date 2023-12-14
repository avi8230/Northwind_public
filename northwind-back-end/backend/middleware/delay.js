function delay(request, response, next) {
    setTimeout(next, 3000);
}

module.exports = delay;