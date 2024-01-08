
function clickLogin() {
    var loginSpan = document.querySelector('.login');

    if (loginSpan) {
        var loginLink = loginSpan.querySelector('a');

        if (loginLink) {
            // Click vào thẻ a
            loginLink.click();
        }
    }
}
function clickLogin2() {
    clickLogin();
    // Tìm thẻ a trong thẻ div có class "potentialidp"
    var linkElement = document.querySelector('.potentialidp a');

    // Kiểm tra xem thẻ a có tồn tại không
    if (linkElement) {
        // Click vào thẻ a
        linkElement.click();
    } else {
        console.error('Không tìm thấy thẻ a trong thẻ div có class "potentialidp".');
    }
}

clickLogin2();