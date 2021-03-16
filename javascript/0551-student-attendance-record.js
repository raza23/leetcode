var checkRecord = function(s) {
  let absenceCount = 0;
  let lateCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") absenceCount++;

    if (s[i] === "L") lateCount++;
    else lateCount = 0;

    if (absenceCount > 1 || lateCount > 2) return false;
  }

  return true;
};
