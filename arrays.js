var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var new_array = [element, ...array]
  return(new_array)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return(array)
}

function addElementToEndOfArray(array, element){
  var add_array = [...array, element]
  return add_array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return(array)
}

function accessElementInArray(array, index){
  return(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return(array)
}

function removeElementFromBeginningOfArray(array){
  return(array.slice(1,3))
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return(array.slice(0, array.length - 1))
}