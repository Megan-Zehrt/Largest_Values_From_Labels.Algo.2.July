// 1090. Largest Values From Labels



// You are given n item's value and label as two integer arrays values and labels. You are also given two integers numWanted and useLimit.

// Your task is to find a subset of items with the maximum sum of their values such that:

// The number of items is at most numWanted.
// The number of items with the same label is at most useLimit.
// Return the maximum sum.








/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
   
    let numbersUsed_count = 0
    let map = new Map()
    let sum = 0
    
    let pairedArray = values.map((value, index) => [value, labels[index]])
    
    pairedArray.sort((a,b) => b[0]-a[0])
    
    let sortedValues = pairedArray.map(pair => pair[0])
    let sortedLabels = pairedArray.map(pair => pair[1])
    
    for(let i = 0; i < sortedLabels.length;i++){
        
        if(numbersUsed_count < numWanted){  //if the amount of the label we are looking is less then uselimit go on
        
            
            
            
            
            
            if(map.has(sortedLabels[i])){//if it already has the label then update count
            
                let count = map.get(sortedLabels[i])
                if(count < useLimit){

                    map.set(sortedLabels[i], count+=1)//updating count of how many times we have used the label
                    sum += sortedValues[i]
                    console.log(sum + " " + "this is the current sum");
                    numbersUsed_count += 1;
                    console.log(numbersUsed_count + " " + "this is the current sum");
                    
                }
                
                
            
            } else {
                map.set(sortedLabels[i],1)//if it doesnt initiate it and set count to 1
                
                sum += sortedValues[i]
                numbersUsed_count += 1;
            }
            
            
           
            
        }
    }
    
    return sum
    
};






/** 

    iterate over labels
        
        if hash table has labels[i]      // if you already used the label value
            if value of label < useLimit    // check if the amount you've used the label is less than useLimit
            
            sum += values[i]
            hashtable.set(labels[i], count + 1) // update use of label
            count++
            
        else{
            sum += vales[i]
            count++
            hashtable.set(labels[i], 1) // update use of label
        }


*/