const ID = 'userIdentity';
const PASSWORD = 'P!ssw0rd';

function onSignInButtonClickHandler(event) {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    if (id === ID && password === PASSWORD) {
        alert('로그인 성공!')
    } else {
        const signInMessageElement = document.getElementById('sign-in-message');
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
    }
}

function onSignInButtonClickHandler(event) {
    window.location.href = '../sign-up';
}

const signUpLinkElement = document.getElementById('sign-up-link');
signUpLinkElement.addEventListener('click', onSignInButtonClickHandler);

