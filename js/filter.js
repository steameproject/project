function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }

function filterGames(array, category){
      var result = []
      each(array,function(value,i){
            if(checkCategory(value,category)){
                  result.push(value)
            }
      })
      return result
}

function checkCategory(object,category){
      result = false 
      each(object.category,function(value,i){
            if(value===category){
                  result = true
            }
      })
      return result
}