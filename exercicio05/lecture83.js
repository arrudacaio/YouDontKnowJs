/**
 * Write isValidPassword function
 *
 *
 */
function hasSpaces(text) {
  if (text.indexOf(" ") >= 0) {
    return true;
  }
  return false;
}

function isValidPassword(password, login) {
  const dontShort = password.length >= 8;
  const tooSimilar = password.includes(login);
  const hasSpaces = hasSpaces(password);
  if (dontShort && !tooSimilar && !hasSpaces) {
    return true;
  }
  return false;
}
