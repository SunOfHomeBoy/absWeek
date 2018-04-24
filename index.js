exports.__esModule = true;
function getWeek(CurTime, thisTime) {
    if (thisTime === void 0) { thisTime = new Date(1970, 1, 5); }
    var thisTimeMs = thisTime.getTime();
    if (thisTimeMs < 0)
        return -1;
    var oneTimeMs = 24 * 60 * 60 * 1000;
    var thisDay = thisTime.getDay() !== 0 ? thisTime.getDay() - 1 : 6;
    var StartTime = thisTimeMs - (thisDay * oneTimeMs);
    if (CurTime.getTime() < StartTime)
        return 0;
    var periods = Math.floor((CurTime.getTime() - StartTime) / 604800000) + 1;
    return periods;
}
exports["default"] = getWeek;
