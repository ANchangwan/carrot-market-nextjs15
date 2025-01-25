export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_REGEX = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);
export const PASSWORD_REGEX_ERROR =
    "password는 적어도 하나의 대소문자와 특수문자를 포함해야합니다.";