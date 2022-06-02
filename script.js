function sol (str,ending){
			let result = ''
			if(ending !== undefined){
				console.log(ending)
				if(ending.length >=2){
					let arrStart = []
					
					for(let i = str.length - ending.length;i<str.length;i++){
						arrStart.push(str[i])
					}
					
					arrStart = arrStart.join('')
					if(arrStart === ending){
						result = true
					}
					else{
						result = false
					}
					console.log(result)
					return result

				}
				else if(ending.length === 1){
					result = str[str.length-1] === ending[ending.length-1]
					console.log(result)
					return result
				}
				else {
					result = true
					console.log(result)
					return result
				}

			}
			else{
				result = true
				console.log(result)
				return result
			}
		}


		sol('abcde' , '')