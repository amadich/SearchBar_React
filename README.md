# SearchBar_React
a Just Mini Search Bar With React Need more algorithme about how to filter name input in the json files or your arrays !
![image](https://user-images.githubusercontent.com/74735976/207954509-46056cc6-0267-4482-a7b7-de2ab9979b7c.png)
###
#
I add my objects  in function , you can move this in JSON => DB folder
and dont forget to import mediaFiles
```jsx
import React from 'react';
import I0 from "../images/eps/0.png";
import I1 from "../images/eps/1.png";
import I2 from "../images/eps/2.png";
const datai = () => {
	const info =
	[
			   {
				  "id" : "@anime_0",
				  "name": "Demon Slayer: Kimetsu no Yaiba Entertain",
				  "img": I0
			   },
			   {
				  "id" : "@anime_1",
				  "name": "Fumetsu no Anata",
				  "img": I1
			   },

			   {
				  "id" : "@anime_2",
				  "name": "Jujutsu Kaisen",
				  "img": I2
				}
	]
	return(
			{info}
	)


}

export default datai;
```
###
