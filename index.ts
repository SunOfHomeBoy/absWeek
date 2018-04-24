// Copyright 2018 The LiSC Library Authors. All right reserved.
// Use of this source that is governed by a MIT License
// license that can be found in the LICENSE file.
//
// 获取从1970.1.1 至今 绝对星期数
//
// 參數說明：
//      {
//              "time": Date(year, month, day), // 根据给定日期返回从1970.1.1至今绝对星期数
//      }
//
// @authors LiSC <sc903317164@gmail.com> 2018-04 $$

// export default function absWeek(time: Date): number {

export default function getWeek(curTime: Date, beginTime: Date = new Date(1970, 1, 5)): number {
        let thisTimeMs: number = beginTime.getTime()

        if (thisTimeMs < 0) return -1

        let oneTimeMs = 24 * 60 * 60 * 1000

        let thisDay = beginTime.getDay() !== 0 ? beginTime.getDay() - 1 : 6

        let StartTime: number = thisTimeMs - (thisDay * oneTimeMs);
        if (curTime.getTime() < StartTime) return 0

        let periods: number = Math.floor((curTime.getTime() - StartTime) / 604800000) + 1
        return periods
}
