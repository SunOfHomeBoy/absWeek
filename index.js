exports.__esModule = true;
function absWeek(curTime, beginTime) {
    if (beginTime === void 0) { beginTime = new Date(1970, 0, 5); }
    var thisTimeMs = beginTime.getTime();
    if (thisTimeMs < 0)
        return -1;
    var oneTimeMs = 24 * 60 * 60 * 1000;
    var thisDay = beginTime.getDay() !== 0 ? beginTime.getDay() - 1 : 6;
    var StartTime = thisTimeMs - (thisDay * oneTimeMs);
    if (curTime.getTime() < StartTime)
        return 0;
    var periods = Math.floor((curTime.getTime() - StartTime) / 604800000) + 1;
    return periods;
}
exports["default"] = absWeek;
