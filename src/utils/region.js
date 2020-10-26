import provinces from '@/assets/provinces.json'
import areas from '@/assets/static/areas.json'
import cities from '@/assets/static/cities.json'

export const getProvinces = () => {
    return provinces;
}

export const getcities = (provinceCode) => {
    if (!provinceCode) {
        provinceCode = '11'
    }
    let citiesArr = [];
    cities.forEach(function (item) {
        if (item.provinceCode == provinceCode) {
            console.log(item)
            citiesArr.push(item)
        }
    })
    return citiesArr
}

export const getareas = (cityCode) => {
    // console.log(areas)
    if (!cityCode) {
        cityCode = '1101'
    }
    let areasArr = [];
    areas.forEach(function (item) {
        if (item.cityCode == cityCode) {
            areasArr.push(item)
        }
    })
    return areasArr
}