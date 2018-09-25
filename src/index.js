module.exports = function check(str, bracketsConfig) {
  // your solution


/* let objCount = {};
let objIndex = {};
let strArr = str.split("");
let arr = [];
let j;
for(let k=0; k<strArr.length; k++) {
  for(let i = 0; i<bracketsConfig.length; i++) {
    for(j=0; j<2; j++) {

      if(strArr[k] === bracketsConfig[i][j] && strArr[k] !== '|') {
        
        if(!bracketsConfig[i][j+1]) {   //CLOSING bracket
          if(objCount[bracketsConfig[i][j]] <= 0) {
            return false;
          } else if((objIndex[bracketsConfig[i][j-1]] !== undefined && // check for parity between brackets
                      k - objIndex[bracketsConfig[i][j-1]]) !== 1 &&
                      (k - objIndex[bracketsConfig[i][j-1]]) % 2 === 0) {
              for(let m = objIndex[bracketsConfig[i][j-1]]+1; m<k; m++) {
                  if(bracketsConfig[i][j-1] !== strArr[m]) {
                         return false;
                  }
              } 
          } 
          objCount[bracketsConfig[i][j]]-=1;
          objIndex[bracketsConfig[i][j-1]] = undefined;
        };

        if(objCount[bracketsConfig[i][j+1]]) {   //new OPEN bracket and add info about to the objects
              objCount[bracketsConfig[i][j+1]]+=1;
              objIndex[bracketsConfig[i][j]] = k; //save index value
        } else if(bracketsConfig[i][j+1]) {  // if value doesn't exist create it
              objCount[bracketsConfig[i][j+1]] = 1;
              objIndex[bracketsConfig[i][j]] = k;  //save index value
        };

      } else if(strArr[k] === '|' || strArr[k] === '7' ||strArr[k] === '8') {    // check for special "|" "7" "8" bracket
          if(objIndex[strArr[k]] !== undefined){
              objCount[strArr[k]]-=1;
              objIndex[strArr[k]] = undefined;
          } else {
              objCount[strArr[k]]=1;
              objIndex[strArr[k]] = k;
          }
      } else {
          continue;
      }
      break;
    }
    if(j === 2) {
        continue;
    };
    break
  }
  continue;
}
for(var key in objCount){
    if(objCount[key] > 0) {
        return false;
    };
};

return true;
} */






  // your solution
  let objCount = {};
  let objIndex = {};
  let strArr = str.split("");
  let arr = [];
  let j;
  for(let k=0; k<strArr.length; k++) {
    for(let i = 0; i<bracketsConfig.length; i++) {
      for(j=0; j<2; j++) {

        if(strArr[k] === bracketsConfig[i][j] && strArr[k] !== '|') {
          
          if(!bracketsConfig[i][j+1]) {   //CLOSING bracket
            if(objCount[bracketsConfig[i][j]] <= 0) {
              return false;
            } else if((objIndex[bracketsConfig[i][j-1]] !== undefined && // check for parity between brackets
                        k - objIndex[bracketsConfig[i][j-1]]) !== 1 &&
                        (k - objIndex[bracketsConfig[i][j-1]]) % 2 === 0) {
                for(let m = objIndex[bracketsConfig[i][j-1]]+1; m<k; m++) {
                    if(bracketsConfig[i][j-1] !== strArr[m]) {
                           return false;
                    }
                } 
            } 
            objCount[bracketsConfig[i][j]]-=1;
            objIndex[bracketsConfig[i][j-1]] = undefined;
          };

          if(objCount[bracketsConfig[i][j+1]]) {   //new OPEN bracket and add info about to the objects
                objCount[bracketsConfig[i][j+1]]+=1;
                objIndex[bracketsConfig[i][j]] = k; //save index value
          } else if(bracketsConfig[i][j+1]) {  // if value doesn't exist create it
                objCount[bracketsConfig[i][j+1]] = 1;
                objIndex[bracketsConfig[i][j]] = k;  //save index value
          };

        } else if(strArr[k] === '|' || strArr[k] === '7' ||strArr[k] === '8') {    // check for special "|" "7" "8" bracket
            if(objIndex[strArr[k]] !== undefined) {
                if((k - objIndex[strArr[k]]) % 2 !== 0) {
                objCount[strArr[k]]-=1;
                objIndex[strArr[k]] = undefined;
                } else {
                    return false;
                };
            } else {
                objCount[strArr[k]]=1;
                objIndex[strArr[k]] = k;
            }
/*         if(arr[0] !== undefined) { 
            if((k - arr[0]) % 2 !== 0) { // chek for parity
              arr = [];
              break;
            } else {
              return false;
            }
          } else {
            arr.push(k);
          }; */
        } else {
            continue;
        }
        break;
      }
      if(j === 2) {
          continue;
      };
      break
    }
    continue;
  }
  for(var key in objCount){
      if(objCount[key] > 0) {
          return false;
      };
  };
  //console.log(true);
  return true;
}