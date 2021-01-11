//Realiza tu propia implementación de los siguientes métodos
// ForEach - https://www.w3schools.com/jsref/jsref_foreach.asp
// Filter - https://www.w3schools.com/jsref/jsref_filter.asp
// Map - https://www.w3schools.com/jsref/jsref_map.asp
// Find - https://www.w3schools.com/jsref/jsref_find.asp
// FindIndex - https://www.w3schools.com/jsref/jsref_findindex.asp
// Contains - https://underscorejs.org/#contains
// Pluck - https://underscorejs.org/#pluck
// Without - https://underscorejs.org/#without


marin = {} ;

    marin.each = (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            fn(array[i], i)
        }
    }

    marin.filter = (array, fn) => {
        const newArray = []
        for (let i = 0; i < array.length; i++) {
            if(fn(array[i], i, array)) {
                newArray.push(array[i])
            }
        }
        return newArray
    }

    marin.map = (array, fn) => {
        const newArray = []
            for (let i = 0; i < array.length; i++) {
            newArray.push(fn(array[i]));
        }
        return newArray
    }

    marin.find = (array, fn) => {
        for (let i = 0; i < array.length; i++) {
            if(fn(array[i]), i) {
                return array[i]
            }
        }
    }


    marin.findIdex = (array, index) => {
        let plus = []
        for (let i = 0; i < array.length; i++) {
            if(array[i] == index) {
                plus.push(i)
            }
        }
        return plus
    }

    marin.contains = (array, value, fromIndex) => {
        for(fromIndex = 0; fromIndex < array.length; fromIndex++) {
            if(array[fromIndex] == value) {
                return true
            }
        }
        return false
    }

    marin.pluck = (array, key) => {
        const newArray = []
        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i][key])
        }
        return newArray
    }

    marin.without = (array, elemnt1, element2) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] != elemnt1 && array[i] != element2) {
                result.push(array[i])
            }
        }
        return result
    }


marin.each(arr, (element) => {
    console.log(element)
})

const filterArr = marin.filter(arr, (element) => element > 6);
console.log(filterArr)

const mapArr = marin.map(arr, (element) => element + 4)
console.log(mapArr)

const pluckArr = marin.pluck(stooges, 'name');
console.log(pluckArr)

const findArr = marin.find(arr, (element) => element)
console.log(findArr)

const findIdexArr = marin.findIdex(arr, (element) => element === 70)
console.log(findIdexArr)

const containsArr = marin.contains(arr, 45);
console.log(containsArr)

const withoutArr = marin.without(arr, 1, 45)
console.log(withoutArr)





