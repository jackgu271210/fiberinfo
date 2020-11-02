const nowmonth = () => {
    let date = new Date()
    let month = date.getMonth()
    return month
}

const nowday = () => {
    let date = new Date()
    let day = date.getDate()
    return day - 1

}

const yearList = () => {
    let date = new Date()
    let year = date.getFullYear()
    let resarr = []
    for (let i = year; i > year - 100; i--) {
        resarr.push(i + "年")
    }
    return resarr
}

const method = {
    slotsday:
        [
            {
                flex: 1,
                values: yearList(),
                className: 'year',
                textAlign: 'left'
            }, {
                flex: 1,
                defaultIndex: nowmonth(),
                values: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                className: 'mouth',
                textAlign: 'mid'
            }, {
                flex: 1,
                defaultIndex: nowday(),
                values: ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日"],
                className: 'day',
                textAlign: 'right'
            }
        ],
    slotsmouth:
        [
            {

                flex: 1,
                values: ['2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年', '2022年', '2023年', '2024年', '2025年', '2026年', '2027年', '2028年', '2029年'],
                className: 'year',
                textAlign: 'left'
            }, {
                flex: 1,
                values: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                className: 'mouth',
                textAlign: 'mid'
            }
        ]
}

export default method