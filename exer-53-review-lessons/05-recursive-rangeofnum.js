function rangeOfNumbers(startNum, endNum){
    if(startNum > endNum){
      return [];
    }else{
      const rangeNos = rangeOfNumbers(startNum + 1, endNum)
      rangeNos.unshift(startNum);
      return rangeNos;
    }
  }
  console.log(rangeOfNumbers(1,5))