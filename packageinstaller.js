//Creating the Array
const packageArray = ["KittenService: ",
                      "LeetMeme: CyberPortal",
                      "CyberPortal: Ice",
                      "CamelCaser: KittenService",
                      "FraudStream: LeetMeme",
                      "Ice: "
                      ]


// separating the packages from dependencies (before and after colon)
packageArray.indexOf(':')
splitStringWithoutAfterColon = () => {
   return packageArray.map(e=>{
   const afterColon = e.split(':')[1];
    if(!afterColon){
      return e.split(':')[0]
    }
  })
}


// attempting to return packages without dependencies first
// const cleanArray1 = splitStringWithoutAfterColon().filter(arrayItem => {
//   if(arrayItem !== undefined){
//     return arrayItem
    
//   }
// })




filterItemsWithDependencies = () => {

  packageArray.map(e => {
    const afterColon = e.split(': ')[1];
    const beforeColon = e.substring(0, e.indexOf(':'))

    if(beforeColon !== splitStringWithoutAfterColon()){
      console.log(afterColon)
      // console.log(beforeColon)
    }
  })


}
filterItemsWithDependencies()

// packageArray.map((e)=>{


// const afterColon = e.split(': ')[1];

// if(!afterColon){
//   console.log(beforeColon)
// }
// if(afterColon){
//   const beforeColon = e.substring(0, e.indexOf(':'))

//   console.log(e)


//  console.log(beforeColon)
// }




// })

