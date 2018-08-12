$(document).ready(function () {
	/*///////////// WEATHER ACTIVITY ///////////////////*/

	/* Base query url https://funwithajax.herokuapp.com/api/ */

	/* 
    1.
			Create a function call `getWeather`
      The function is already invoked at the end of this file
      close this function just before it is invoked
		*/
	function getWeather() {


		/* 
		2. Create your query:

		  a.	create a varialbe named `cors` that has the value `https://cors-anywhere.herokuapp.com/`

		  b.	create a variable named `baseURL` with the value `https://funwithajax.herokuapp.com/api`

		      
		  c.	create a variable with the name `query` with the value `"?q=weather&c=city%of%your%choice"`
		      
		      parameter `q` with the value `weather`
		      parameter `c` with the value `city of your choice` (replace all spaces with %).

		      Example: to pass the parameter `q` with a value of `chicken` and parameter `c` with a value of `so%delicious` we can use `?q=chicken&c=so%delicious`
		        use `?`` to denote query parameter are being used
		        `q` for query 
		        followed by the parameter
		        `&`` new query
		        `c` for query
		        followed by the parameter
		    */
		var cors = "https://cors-anywhere.herokuapp.com/";
		var baseURL = "https://funwithajax.herokuapp.com/api";
		var query = "?q=weather&c=san%francisco";
		/* 
    3.
				Using ajax make a `GET` request to:
					`cors` plus `baseURL` plus `query`
					Close your promise (.then()) just before you close the function. We will be writing the rest of our code within the promise, ensuring that all this logic happens only once we've received a return from the API.
			*/
		$.ajax({
			url: cors + baseURL + query,
			method: "GET"
		}).then(function (result) {


			/* 
				`console.log` the response
					** make sure to add a string note inside ALL your console.log like: 
					console.log("these are the results:", results); 
			*/
			console.log("these are the results", result);
			/* 
				examine the response, look at the data structure 
			*/


			/* 
    4.
			add class `weather-BKG` to `body` 
		*/

			/*
					remove class `heroes` and `music` from `#content`
			*/

			/*
				add class `weather-wrap` to `#content`
			*/

			/* 
			Before doing anything with the data make sure that you remove any elements inside the `#content` container 
				remember `.empty()`
			*/
			$("#content").empty();
			/* 
				Using jQuery 
			*/

			/* 
    5.
			create a `div` and store it to a variable called `weather`
			add a class of `weather` to the `weather div` 
		*/
			var weather = $("<div class='weather'>");
			/* 
				create a `h2` and store it to a variable called `title`
				add text of the city name to `title div` 
			*/
			var title = $("<h2>");
			title.text(result.name);
			/* 
				create a `div` and store it to a variable called `row1`
				add classes `row` and `row1` to the `row1 div` 
			*/
			var row1 = $("<div class='row row1'>");
			/* 
				create a `div` and store it to a variable called `col1`
				add classes `col-xs-6 col-sm-6 col-md-12 col-lg-6` to the `col1 div` 
			*/
			var col1 = $("<div class='col-xs-6 col-sm-6 col-md-12 col-lg-6'>");
			/* 
				create a `image` and store it to a variable called `image`
				add a class of `weather-img` to the `image div` 
			*/
			var image = $("<img class='weather-img'>");
			/* 
    6.
			create a variable called `icon`
			set `icon` value to the weater response icon
				this will be a set of character like: `04d`
		*/
			var icon = result.weather[0].icon;
			/*
				add an attribute for `source` to `image` and the value to `http://openweathermap.org/img/w/` + `icon` + ".png"
			*/
			image.attr("src", "http://openweathermap.org/img/w/" + icon + ".png");
			/* 
    
    7.
			create a `div` and store it to a variable called `descrip`
			add text of the weather response description to `descrip div` 
		*/
			var descrip = $("<div>");
			descrip.text(result.weather[0].description);
			/*
				append `image` and `descript` to `col1`
			*/
			
			col1.append(image);
			col1.append(descrip);
			/* 
				create a `div` and store it to a variable called `col2`
				add classes `col-xs-6 col-sm-6 col-md-12 col-lg-6` to the `col2 div` 
			*/
			var col2 = $("<div class='col-xs-6 col-sm-6 col-md-12 col-lg-6'>");
			/* 
				create a `h3` and store it to a variable called `temp`
			*/
			var temp = $("<h3>");
			/*
				create a variable called `tempTxt`
				set the value of `tempTxt` to weather response tempature as a whole number.
					drop the decimal and values after
					example 56.8 should be 56 
			*/
			var tempTxt = Math.floor(result.main.temp);
			/*
				add `HTML` to `temp` with the value `tempTxt` + the HTML symbol for fahrenheit 
			*/
			temp.html(tempTxt + "&#8457");
			/*
				add class of `hot` to `temp` if `tempTxt` >= 75
				add class of `nice` to `temp` if `tempTxt` < 75 and tempTxt >= 55
				add class of `cold` to `temp` if `tempTxt` < 55
			*/
			if (tempTxt >= 75) {
				temp.addClass('hot');
			}
			else if (tempTxt < 75 && tempTxt >= 55) {
				temp.addClass('nice');
			}
			else if (tempTxt < 55) {
				temp.addClass('cold');
			}
			/*
    
			append `temp` to `col2`
		*/
			col2.append(temp);
			/* 
				create a `div` and store it to a variable called `row2`
				add classes `row` and `row2` to the `row2 div` 
			*/
			var row2 = $("<div class='row row2'>");
			/* 
				create a `div` and store it to a variable called `col3`
				add classes `col-xs-6 col-sm-12 col-md-12 col-lg-6` to the `col3 div` 
			*/
			var col3 = $("<div class='col-xs-6 col-sm-12 col-md-12 col-lg-6'>");
			/*
				create a variable called `highTemp`
				set the value of `highTemp` to weather response max tempature as a whole number.
					drop the decimal and values after
					example 56.8 should be 56 
			*/
			var highTemp = Math.floor(result.main.temp_max);
			/* 
				create a `p` and store it to a variable called `high`
				add `HTML` to `high` with the value `highTemp` + the HTML symbol for fahrenheit
			*/
			var high = $("<p>");
			high.html("high temp of " + highTemp + "&#8457");
			/* 
				append `high` to `col3`
			*/
			col3.append(high);
			/* 
				create a `div` and store it to a variable called `col4`
				add classes `col-xs-6 col-sm-12 col-md-12 col-lg-6` to the `col4 div` 
			*/
			var col4 = $("<div class='col-xs-6 col-sm-12 col-md-12 col-lg-6'>");
			/*
				create a variable called `lowTemp`
				set the value of `lowTemp` to weather response min tempature as a whole number.
					drop the decimal and values after
					example 56.8 should be 56 
			*/
			var lowTemp = Math.floor(result.main.temp_min);
			/* 
			create a `p` and store it to a variable called `low`
			add `HTML` to `low` with the value `lowTemp` + the HTML symbol for fahrenheit
		*/
			var low = $("<p>");
			low.html("low temp of " + lowTemp + "&#8457");
			/* 
				append `low` to `col4`
			*/
			col4.append(low);
			/* 
				append `col1` and `col2` to `row1`
			*/
			row1.append(col1);
			row1.append(col2);
			/* 
				append `col3` and `col4` to `row2`
			*/
			row2.append(col3);
			row2.append(col4);
			/*
				append `title`, `row1` and `row2` to `weather`
			*/
			weather.append(title);
			weather.append(row1);
			weather.append(row2);
			/*
				append `weather` to `#content`
			*/
			$("#content").append(weather);
			//8.
			/* BONUS Split these actions into multiple functions */
		});
	}
	getWeather()
})